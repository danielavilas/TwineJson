/*!
 * TwineJson
 *
 * Based on Entweedle by Michael McCollum
 * Copyright(c) 2015 Páprica Comunicação http://papricacomunicacao.com.br
 * Copyright(c) 2015-2016 Cauli Tomaz https://cau.li
 * MIT Licensed
 *
 * https://github.com/cauli/TwineJson
 */

'use strict';

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,i=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},a=/constructor/i.test(e.HTMLElement),f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},d="application/octet-stream",s=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,s)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(i){u(i)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,s){if(!s){t=p(t)}var v=this,w=t.type,m=w===d,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&a)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;i(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define([],function(){return saveAs})}

$(document).ready(function() {
    var documentElements = (function($) {
      var _ = {
        'output': $('#output'),
        'storyData': $('tw-storydata'),
        'passageData': $("tw-passagedata"),
        'title': $("tw-storydata").attr('name')
      }

      console.dir(_.storyData);
      return _;
    }(jQuery));

    var TwineJson = (function(exports, saveAs, documentElements, $) {
        var idCount = 0;

        console.dir(documentElements);

        var ExportOptions = {
          // If true, puts every element as a child or grandchild of the Starting Point
          // WARNING: Hierarchical JSON trees shouldn't be cyclic. This will cause an infinite loop.
          'isHierarchical':true,
          // Exports what is inside of {{order}}{{/order}} to '.order' property on JSON
          'exportOrder':true,
          // Exports using {{features}}{{/features}} syntax (Should default to false)
          // * adds the property 'star' to the element
          // + adds the property 'delta' to the element
          // - adds the property 'optional' to the element
          'exportFeatures':true,
          // Export Unique ID for node
          'exportID':true,
          // Export unknown properties inside {{property}}{{/property}} tags
          'exportCustomProperties':true,
          // Export X,Y position from Twine to the Json, allowing a pretty import later on
          'exportPosition':true,
          // Exclude these properties from CustomProperties Export.
          // Expected input: ['property1','property2','...','propertyN'];
          'customPropertiesToIgnore':['features','order'],
          // Save as a .json file
          'saveAsFile':true,
        };
       
        exports = {
          saveAsFile: function(title, text) {
            var blob = new Blob([text], {type: "text/json;charset=utf-8"});
            saveAs(blob, title.replace(/[^a-z0-9]/gi, '').toLowerCase()+"-"+Math.floor(Date.now() / 1000)+".json");
          },

          isCyclic: function (obj) {
            var seenObjects = [];

            function detect (obj) {
              if (obj && typeof obj === 'object')
              {
                if (seenObjects.indexOf(obj) !== -1)
                {
                  return true;
                }

                seenObjects.push(obj);

                for (var key in obj)
                {
                  if (obj.hasOwnProperty(key) && detect(obj[key])) {
                    console.error(obj, 'Found cycle at ' + key);
                    return true;
                  }
                }
              }
              
              return false;
            }

            return detect(obj);
          },

          convert: function() {
            var storyData = documentElements.storyData;
            var output = $('#output');
            var jsonString = this.export();

            if(jsonString === '') {
              throw "History was empty and and could not be converted to JSON";
            }

            console.log(jsonString);

            var originalJsonPlain = JSON.parse(jsonString);
            var jsonPlain = originalJsonPlain;
         
            /* 
            *  For each of the elements of jsonPlain
            *  Check if it has one or more children
            *  For each child
            *  Loop through all elements of jsonPlain searching for the name of the child
            *  Add to the parent.children array
            */ 
            if(ExportOptions.isHierarchical)
            {      
              var hierarchyJSON = [];

              for(var i = 0; i < jsonPlain.length; i ++)
              {
                jsonPlain[i].children = [];
                var childrenNames = jsonPlain[i].childrenNames;

                if(childrenNames.constructor === Array)
                {
                  if(childrenNames.length > 1)
                  {
                    var eachChildren = jsonPlain[i].childrenNames.split(',');
                  }
                  else 
                  {
                    var eachChildren = jsonPlain[i].childrenNames;
                  }

                  for(var k = 0; k < eachChildren.length; k++ )
                  {
                    for(var j = 0; j < jsonPlain.length; j++ )
                    {
                      if(eachChildren[k] == "[["+jsonPlain[j].name+"]]")
                      {
                        jsonPlain[i].children.push(jsonPlain[j]);
                      }
                    }
                  }
                  
                  hierarchyJSON.push(jsonPlain[i]);
                
                }
              }

              if(this.isCyclic(hierarchyJSON[0]))
              {
                output.val("Error: Cyclic reference found</h2><br>Cyclic references aren't allowed in hierarchical JSON structures.<br>Please set ExportOptions.isHierarchical to false to use cyclic references.");
              }
              else
              {

                if(ExportOptions.saveAsFile)
                {
                  this.saveAsFile("Title of Story",JSON.stringify(hierarchyJSON));
                }

                output.val(JSON.stringify(hierarchyJSON));
              }
            
            }
            else
            {
              if(ExportOptions.saveAsFile)
              {
                this.saveAsFile("Title of Story",JSON.stringify(jsonPlain));
              }

              output.val(JSON.stringify(jsonPlain));
            }
          },

          export: function() {
            var buffer = [];

            var storyData = documentElements.storyData;

            console.dir(storyData);

            if (typeof storyData !== 'undefined')
            {
              buffer.push(this.buildPassage("StoryTitle","",documentElements.title));
            }

            /*
            var userScript = window.document.getElementById("twine-user-script");
            if (userScript)
            {
              buffer.push(this.buildPassage("UserScript","script",userScript.innerHTML));
            }

            var userStylesheet = window.document.getElementById("twine-user-stylesheet");
            if (userStylesheet)
            {
              buffer.push(this.buildPassage("UserStylesheet","stylesheet",userStylesheet.innerHTML));
            }
            */

            var passages = documentElements.passageData;

            for (var i = 0; i < passages.length; ++i)
            {
              buffer.push(this.buildPassageFromElement(passages[i], i, passages.length));
            }

            return "[" + buffer.join(',') + "]";
          },
          
          buildPassageFromElement: function(passage, index, howManyPassages) {
            var last = false;
            
            if(index+1 == howManyPassages)
            {
              last = true;
            }
            
            var name = passage.getAttribute("name");

            if (!name)
            {
              name = "Untitled Passage";
            }

            var tags = passage.getAttribute("tags");
            var position = passage.getAttribute("position");
            var content = passage.textContent;
            
            return this.buildPassage(name, tags, content, position || "", last);
          },
      
          buildPassage: function(title, tags, content, position, last) {
            var result = {};

            ExportOptions.exportID ? (result.id = idCount) : null;
            ExportOptions.exportPosition ? (result.position = position) : null;

            result.name = title;

            if (typeof tags !== 'undefined') { result.tags = tags.split(','); }

            var clearedContent = this.scrub(content, " ");

            result.content = clearedContent;
            result.childrenNames = this.findChildren(clearedContent);

            ExportOptions.exportFeatures ? (result.features = this.findFeatures(content)) : null;
         
            ExportOptions.exportOrder ? (result.order = this.findOrder(content)) : null;

            ExportOptions.exportOtherProperties ? this.findOtherProperties(result, content, ExportOptions.ignoreCustomProperties) : null;

            return JSON.stringify(result);
          },

          // Finds any content between {{}}{{/}} and adds returns it as a property
          findOtherProperties: function(obj, content, excluding) {
            var propertiesAdded = "";

            var ptrn = /\{\{((\s|\S)+?)\}\}((\s|\S)+?)\{\{\/\1\}\}/gm;
            var match;
            var results = [];

            while( ( match = ptrn.exec(content) ) !== null )
            {
              var property = match[1];

              if(excluding.indexOf(property) == -1)
              {
                  var value = match[3].split(/(\r\n|\n|\r)/gm);
                  var valuesArray = [];

                  // <= 1 because carriage returns counts as one character
                  for(var i = 0; i < value.length; i++)
                  {
                    if(value[i].length <= 1)
                    {
                      value.splice(i,1);
                      i =- 1;
                    }
                  }

                  if(value.length === 1)
                  {
                    obj[property] = value[0];
                  }
                  else
                  {
                    var propertiesJSON = {};

                    for(var j = 0; j < value.length; j++)
                    {
                       propertiesJSON[j] = value[j];
                    }

                    valuesArray.push(propertiesJSON);

                    propertiesAdded += ','+NL;
                    propertiesAdded += TAB+'\"'+property+"\" :";
                    propertiesAdded += ""+JSON.stringify(valuesArray)+NL;
                  }
              }
            }

            return propertiesAdded;
          },

          scrub: function(content, separator) {
            if(content)
            {
              content = content.replace(/\"/gm, "\'");

              // Removes all line breaks
              content = content.replace(/(\r\n|\n|\r)/gm,separator);
            }

            return content;
          },

          // Finds children passages by searching for the [[Passage Name]] syntax
          findChildren: function(content) {
            var ptrn = /\[\[(.+?)\]\]/gm;
            var match;
            var results = [];

            while( ( match = ptrn.exec(content) ) !== null )
            {
              results.push(match[0]);
            }

            return results;
          },

          // Finds order inside the passage by searching for the {{order}}...{{/order}} syntax
          findOrder: function(content) {
            var ptrn = /\{\{order\}\}((\s|\S)+?)\{\{\/order\}\}/gm;
            var match;
            var results = [];
            var orderArray = [];

            while( ( match = ptrn.exec(content) ) !== null )
            {
              var order = match[1].split(/(\r\n|\n|\r)/gm);

              // Cleans up the order array by removing empty/return entries
              // TIP: <= 1 because carriage returns counts as one character
              for(var i = 0; i < order.length; i++)
              {
                if(order[i].length <= 1)
                {
                  order.splice(i,1);
                  i=-1;
                }
              }

              for(var j = 0; j < order.length; j++)
              {
                featureJSON.order = order[j];
                orderArray.push(featureJSON);
              }
            }

            return JSON.stringify(orderArray);
          },

          // Finds features inside the passage by searching for the {{features}}...{{/features}} syntax
          findFeatures: function(content) {
            var ptrn = /\{\{features\}\}((\s|\S)+?)\{\{\/features\}\}/gm;
            var match;
            var results = [];
            var featuresArray = [];

            while( ( match = ptrn.exec(content) ) !== null )
            {
              var features = match[1].split(/(\r\n|\n|\r)/gm);

              // Cleans up the features array by removing empty/return entries
              // TIP: <= 1 because carriage returns counts as one character
              for(var j = 0; j < features.length; j++)
              {
                if(features[j].length <= 1)
                {
                  features.splice(j,1);
                  j=-1;
                }
              }

              for(var i = 0; i < features.length; i++)
              {
                var regExp = /\(([^)]+)\)/;
                var matches = regExp.exec(features[i]);

                var featureJSON = {};

                if(matches !== null)
                {
                  if(matches[1])
                  {
                    features[i] = features[i].replace(/\(([^)]+)\)/gi, "");
                    featureJSON.subtitle = matches[1];
                  }  
                }
                
                if(features[i][0] == ":")
                {
                  featureJSON.separator = true;
                  features[i] = features[i].substring(1);
                }
        
                if(features[i][0] == "*")
                {
                  featureJSON.star = true;
                  features[i] = features[i].substring(1);
                }

                if(features[i][0] == "+")
                {
                  featureJSON.delta = true;
                  features[i] = features[i].substring(1);
                }

                if(features[i][0] == "-")
                {
                  featureJSON.optional = true;
                  features[i] = features[i].substring(1);
                }

                featureJSON.name = features[i];
                featuresArray.push(featureJSON);
              }
            }

            return JSON.stringify(featuresArray);
          }

        };

        return exports;
    })(TwineJson || {}, saveAs, documentElements, jQuery);

    TwineJson.convert();
});
