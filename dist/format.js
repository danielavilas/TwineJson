window.storyFormat({
	"name":"TwineJson",
	"version":"0.1.2",
	"author":"<a href='http://cau.li'>Cauli Tomaz</a>",
	"description":"Free utility format to export your story into JSON format. Based on Entweedle by Michael McCollum",
	"image":"icon.svg",
	"url":"https://github.com/cauli/TwineJson",
	"license":"<a href='http://opensource.org/licenses/MIT'>MIT License</a>",
	"proofing":false,
	"source":"<html><head><title>{{STORY_NAME}}</title><style>\n\t\t\tbody {\n\t\t\t\tfont-family: sans-serif;\n\t\t\t\tpadding: 50px;\n\t\t\t\tbackground-color: #eee8d5;\n\t\t\t\tcolor: #586e75;\n\t\t\t}\n\n\t\t\th1, h2 {\n\t\t\t\tcolor: #073642;\n\t\t\t}\n\n\t\t\ttextarea {\n\t\t\t\tbackground-color: #eaeaea;\n\t\t\t\twidth:50%;\n\t\t\t\tmin-height: 200px;\n\t\t\t\tborder-radius: 5px;\n\t\t\t\toverflow-y: auto;\n\t\t\t}\n\n\t\t\ttextarea {\n\t\t\t\theight: 1px;\n\t\t\t\tdisplay: block;\n\t\t\t\twidth:1px;\n\t\t\t\tposition:absolute;\n\t\t\t\tleft:999px;\n\t\t\t}\n\n\t\t\tmain.wrapper {\n\t\t\t\tmargin: auto;\n\t\t\t\tdisplay: block;\n\t\t\t\tmax-width: 1200px;\n\t\t\t}\n\n\t\t\tpre {\n\t\t\t\toutline: 1px solid #ccc; \n\t\t\t\tpadding: 5px; \n\t\t\t\tmargin: 5px; \n\t\t\t\theight: 50%;\n\t\t\t\tmin-height: 200px;\n\t\t\t\twhite-space: pre-wrap;       /* Since CSS 2.1 */\n\t\t\t\twhite-space: -moz-pre-wrap;  /* Mozilla, since 1999 */\n\t\t\t\twhite-space: -pre-wrap;      /* Opera 4-6 */\n\t\t\t\twhite-space: -o-pre-wrap;    /* Opera 7 */\n\t\t\t\tword-wrap: break-word;       /* Internet Explorer 5.5+ */\n\t\t\t\toverflow-y:scroll;\n\t\t\t\tcolor: #657b83;\n\t\t\t\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\t\t\t\ttext-align: left;\n\t\t\t\tline-height: 1.5;\n\t\t\t\tbackground-color: #002b37;\n\t\t  }\n\n\t\t\t.string { color: #2aa198; }\n\t\t\t.number { color: #cb4b16; }\n\t\t\t.boolean { color: #6c71c4; }\n\t\t\t.null { color: #b58900; }\n\t\t\t.key { color: #859900; }\n\n\n\t\t\t.invalid {\n\t\t\t\tmax-height: 100px;\n\t\t\t}\n\t\t</style><script type=text/javascript>/** vim: et:ts=4:sw=4:sts=4\n * @license RequireJS 2.2.0 Copyright jQuery Foundation and other contributors.\n * Released under MIT license, http://github.com/requirejs/requirejs/LICENSE\n */\r\n\r\n/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */\r\n\r\n/*!\r\n * TwineJson\r\n *\r\n * Based on Entweedle by Michael McCollum\r\n * Copyright(c) 2015 Páprica Comunicação http://papricacomunicacao.com.br\r\n * Copyright(c) 2015-2016 Cauli Tomaz https://cau.li\r\n * MIT Licensed\r\n *\r\n * https://github.com/cauli/TwineJson\r\n */\r\n\r\n/*!\n* TwineJson\n*\n* Based on Entweedle by Michael McCollum\n* Copyright(c) 2015 Páprica Comunicação http://papricacomunicacao.com.br\n* Copyright(c) 2015-2016 Cauli Tomaz https://cau.li\n* MIT Licensed\n*\n* https://github.com/cauli/TwineJson\n*/\r\n\r\n/*!\r\n* TwineJson\r\n*\r\n* Based on Entweedle by Michael McCollum\r\n* Copyright(c) 2015 Páprica Comunicação http://papricacomunicacao.com.br\r\n* Copyright(c) 2015-2016 Cauli Tomaz https://cau.li\r\n* MIT Licensed\r\n*\r\n* https://github.com/cauli/TwineJson\r\n*/\r\n\r\nvar requirejs,require,define;!function(global){function commentReplace(e,t,r,n){return n||\"\"}function isFunction(e){return\"[object Function]\"===ostring.call(e)}function isArray(e){return\"[object Array]\"===ostring.call(e)}function each(e,t){if(e){var r;for(r=0;r<e.length&&(!e[r]||!t(e[r],r,e));r+=1);}}function eachReverse(e,t){if(e){var r;for(r=e.length-1;r>-1&&(!e[r]||!t(e[r],r,e));r-=1);}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var r;for(r in e)if(hasProp(e,r)&&t(e[r],r))break}function mixin(e,t,r,n){return t&&eachProp(t,function(t,i){(r||!hasProp(e,i))&&(!n||\"object\"!=typeof t||!t||isArray(t)||isFunction(t)||t instanceof RegExp?e[i]=t:(e[i]||(e[i]={}),mixin(e[i],t,r,n)))}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName(\"script\")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split(\".\"),function(e){t=t[e]}),t}function makeError(e,t,r,n){var i=new Error(t+\"\\nhttp://requirejs.org/docs/errors.html#\"+e);return i.requireType=e,i.requireModules=n,r&&(i.originalError=r),i}function newContext(e){function t(e){var t,r;for(t=0;t<e.length;t++)if(r=e[t],\".\"===r)e.splice(t,1),t-=1;else if(\"..\"===r){if(0===t||1===t&&\"..\"===e[2]||\"..\"===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)}}function r(e,r,n){var i,o,a,s,u,c,l,d,p,f,h,g,m=r&&r.split(\"/\"),v=O.map,b=v&&v[\"*\"];if(e&&(e=e.split(\"/\"),l=e.length-1,O.nodeIdCompat&&jsSuffixRegExp.test(e[l])&&(e[l]=e[l].replace(jsSuffixRegExp,\"\")),\".\"===e[0].charAt(0)&&m&&(g=m.slice(0,m.length-1),e=g.concat(e)),t(e),e=e.join(\"/\")),n&&v&&(m||b)){a=e.split(\"/\");e:for(s=a.length;s>0;s-=1){if(c=a.slice(0,s).join(\"/\"),m)for(u=m.length;u>0;u-=1)if(o=getOwn(v,m.slice(0,u).join(\"/\")),o&&(o=getOwn(o,c))){d=o,p=s;break e}!f&&b&&getOwn(b,c)&&(f=getOwn(b,c),h=s)}!d&&f&&(d=f,p=h),d&&(a.splice(0,p,d),e=a.join(\"/\"))}return i=getOwn(O.pkgs,e),i?i:e}function n(e){isBrowser&&each(scripts(),function(t){return t.getAttribute(\"data-requiremodule\")===e&&t.getAttribute(\"data-requirecontext\")===y.contextName?(t.parentNode.removeChild(t),!0):void 0})}function i(e){var t=getOwn(O.paths,e);return t&&isArray(t)&&t.length>1?(t.shift(),y.require.undef(e),y.makeRequire(null,{skipMap:!0})([e]),!0):void 0}function o(e){var t,r=e?e.indexOf(\"!\"):-1;return r>-1&&(t=e.substring(0,r),e=e.substring(r+1,e.length)),[t,e]}function a(e,t,n,i){var a,s,u,c,l=null,d=t?t.name:null,p=e,f=!0,h=\"\";return e||(f=!1,e=\"_@r\"+(P+=1)),c=o(e),l=c[0],e=c[1],l&&(l=r(l,d,i),s=getOwn(N,l)),e&&(l?h=s&&s.normalize?s.normalize(e,function(e){return r(e,d,i)}):-1===e.indexOf(\"!\")?r(e,d,i):e:(h=r(e,d,i),c=o(h),l=c[0],h=c[1],n=!0,a=y.nameToUrl(h))),u=!l||s||n?\"\":\"_unnormalized\"+(R+=1),{prefix:l,name:h,parentMap:t,unnormalized:!!u,url:a,originalName:p,isDefine:f,id:(l?l+\"!\"+h:h)+u}}function s(e){var t=e.id,r=getOwn(E,t);return r||(r=E[t]=new y.Module(e)),r}function u(e,t,r){var n=e.id,i=getOwn(E,n);!hasProp(N,n)||i&&!i.defineEmitComplete?(i=s(e),i.error&&\"error\"===t?r(i.error):i.on(t,r)):\"defined\"===t&&r(N[n])}function c(e,t){var r=e.requireModules,n=!1;t?t(e):(each(r,function(t){var r=getOwn(E,t);r&&(r.error=e,r.events.error&&(n=!0,r.emit(\"error\",e)))}),n||req.onError(e))}function l(){globalDefQueue.length&&(each(globalDefQueue,function(e){var t=e[0];\"string\"==typeof t&&(y.defQueueMap[t]=!0),M.push(e)}),globalDefQueue=[])}function d(e){delete E[e],delete q[e]}function p(e,t,r){var n=e.map.id;e.error?e.emit(\"error\",e.error):(t[n]=!0,each(e.depMaps,function(n,i){var o=n.id,a=getOwn(E,o);!a||e.depMatched[i]||r[o]||(getOwn(t,o)?(e.defineDep(i,N[o]),e.check()):p(a,t,r))}),r[n]=!0)}function f(){var e,t,r=1e3*O.waitSeconds,o=r&&y.startTime+r<(new Date).getTime(),a=[],s=[],u=!1,l=!0;if(!b){if(b=!0,eachProp(q,function(e){var r=e.map,c=r.id;if(e.enabled&&(r.isDefine||s.push(e),!e.error))if(!e.inited&&o)i(c)?(t=!0,u=!0):(a.push(c),n(c));else if(!e.inited&&e.fetched&&r.isDefine&&(u=!0,!r.prefix))return l=!1}),o&&a.length)return e=makeError(\"timeout\",\"Load timeout for modules: \"+a,null,a),e.contextName=y.contextName,c(e);l&&each(s,function(e){p(e,{},{})}),o&&!t||!u||!isBrowser&&!isWebWorker||S||(S=setTimeout(function(){S=0,f()},50)),b=!1}}function h(e){hasProp(N,e[0])||s(a(e[0],null,!0)).init(e[1],e[2])}function g(e,t,r,n){e.detachEvent&&!isOpera?n&&e.detachEvent(n,t):e.removeEventListener(r,t,!1)}function m(e){var t=e.currentTarget||e.srcElement;return g(t,y.onScriptLoad,\"load\",\"onreadystatechange\"),g(t,y.onScriptError,\"error\"),{node:t,id:t&&t.getAttribute(\"data-requiremodule\")}}function v(){var e;for(l();M.length;){if(e=M.shift(),null===e[0])return c(makeError(\"mismatch\",\"Mismatched anonymous define() module: \"+e[e.length-1]));h(e)}y.defQueueMap={}}var b,x,y,w,S,O={waitSeconds:7,baseUrl:\"./\",paths:{},bundles:{},pkgs:{},shim:{},config:{}},E={},q={},k={},M=[],N={},A={},j={},P=1,R=1;return w={require:function(e){return e.require?e.require:e.require=y.makeRequire(e.map)},exports:function(e){return e.usingExports=!0,e.map.isDefine?e.exports?N[e.map.id]=e.exports:e.exports=N[e.map.id]={}:void 0},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(O.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},x=function(e){this.events=getOwn(k,e.id)||{},this.map=e,this.shim=getOwn(O.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},x.prototype={init:function(e,t,r,n){n=n||{},this.inited||(this.factory=t,r?this.on(\"error\",r):this.events.error&&(r=bind(this,function(e){this.emit(\"error\",e)})),this.depMaps=e&&e.slice(0),this.errback=r,this.inited=!0,this.ignore=n.ignore,n.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,y.startTime=(new Date).getTime();var e=this.map;return this.shim?void y.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()})):e.prefix?this.callPlugin():this.load()}},load:function(){var e=this.map.url;A[e]||(A[e]=!0,y.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,r=this.map.id,n=this.depExports,i=this.exports,o=this.factory;if(this.inited){if(this.error)this.emit(\"error\",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{i=y.execCb(r,o,n,i)}catch(a){e=a}else i=y.execCb(r,o,n,i);if(this.map.isDefine&&void 0===i&&(t=this.module,t?i=t.exports:this.usingExports&&(i=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?\"define\":\"require\",c(this.error=e)}else i=o;if(this.exports=i,this.map.isDefine&&!this.ignore&&(N[r]=i,req.onResourceLoad)){var s=[];each(this.depMaps,function(e){s.push(e.normalizedMap||e)}),req.onResourceLoad(y,this.map,s)}d(r),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit(\"defined\",this.exports),this.defineEmitComplete=!0)}}else hasProp(y.defQueueMap,r)||this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,n=a(e.prefix);this.depMaps.push(n),u(n,\"defined\",bind(this,function(n){var i,o,l,p=getOwn(j,this.map.id),f=this.map.name,h=this.map.parentMap?this.map.parentMap.name:null,g=y.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(n.normalize&&(f=n.normalize(f,function(e){return r(e,h,!0)})||\"\"),o=a(e.prefix+\"!\"+f,this.map.parentMap),u(o,\"defined\",bind(this,function(e){this.map.normalizedMap=o,this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),l=getOwn(E,o.id),void(l&&(this.depMaps.push(o),this.events.error&&l.on(\"error\",bind(this,function(e){this.emit(\"error\",e)})),l.enable()))):p?(this.map.url=y.nameToUrl(p),void this.load()):(i=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),i.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(E,function(e){0===e.map.id.indexOf(t+\"_unnormalized\")&&d(e.map.id)}),c(e)}),i.fromText=bind(this,function(r,n){var o=e.name,u=a(o),l=useInteractive;n&&(r=n),l&&(useInteractive=!1),s(u),hasProp(O.config,t)&&(O.config[o]=O.config[t]);try{req.exec(r)}catch(d){return c(makeError(\"fromtexteval\",\"fromText eval for \"+t+\" failed: \"+d,d,[t]))}l&&(useInteractive=!0),this.depMaps.push(u),y.completeLoad(o),g([o],i)}),void n.load(e.name,g,i,O))})),y.enable(n,this),this.pluginMaps[n.id]=n},enable:function(){q[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var r,n,i;if(\"string\"==typeof e){if(e=a(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,i=getOwn(w,e.id))return void(this.depExports[t]=i(this));this.depCount+=1,u(e,\"defined\",bind(this,function(e){this.undefed||(this.defineDep(t,e),this.check())})),this.errback?u(e,\"error\",bind(this,this.errback)):this.events.error&&u(e,\"error\",bind(this,function(e){this.emit(\"error\",e)}))}r=e.id,n=E[r],hasProp(w,r)||!n||n.enabled||y.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(E,e.id);t&&!t.enabled&&y.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var r=this.events[e];r||(r=this.events[e]=[]),r.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),\"error\"===e&&delete this.events[e]}},y={config:O,contextName:e,registry:E,defined:N,urlFetched:A,defQueue:M,defQueueMap:{},Module:x,makeModuleMap:a,nextTick:req.nextTick,onError:c,configure:function(e){if(e.baseUrl&&\"/\"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+=\"/\"),\"string\"==typeof e.urlArgs){var t=e.urlArgs;e.urlArgs=function(e,r){return(-1===r.indexOf(\"?\")?\"?\":\"&\")+t}}var r=O.shim,n={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){n[t]?(O[t]||(O[t]={}),mixin(O[t],e,!0,!0)):O[t]=e}),e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(j[e]=t)})}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=y.makeShimExports(e)),r[t]=e}),O.shim=r),e.packages&&each(e.packages,function(e){var t,r;e=\"string\"==typeof e?{name:e}:e,r=e.name,t=e.location,t&&(O.paths[r]=e.location),O.pkgs[r]=e.name+\"/\"+(e.main||\"main\").replace(currDirRegExp,\"\").replace(jsSuffixRegExp,\"\")}),eachProp(E,function(e,t){e.inited||e.map.unnormalized||(e.map=a(t,null,!0))}),(e.deps||e.callback)&&y.require(e.deps||[],e.callback)},makeShimExports:function(e){function t(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}return t},makeRequire:function(t,i){function o(r,n,u){var l,d,p;return i.enableBuildCallback&&n&&isFunction(n)&&(n.__requireJsBuild=!0),\"string\"==typeof r?isFunction(n)?c(makeError(\"requireargs\",\"Invalid require call\"),u):t&&hasProp(w,r)?w[r](E[t.id]):req.get?req.get(y,r,t,o):(d=a(r,t,!1,!0),l=d.id,hasProp(N,l)?N[l]:c(makeError(\"notloaded\",'Module name \"'+l+'\" has not been loaded yet for context: '+e+(t?\"\":\". Use require([])\")))):(v(),y.nextTick(function(){v(),p=s(a(null,t)),p.skipMap=i.skipMap,p.init(r,n,u,{enabled:!0}),f()}),o)}return i=i||{},mixin(o,{isBrowser:isBrowser,toUrl:function(e){var n,i=e.lastIndexOf(\".\"),o=e.split(\"/\")[0],a=\".\"===o||\"..\"===o;return-1!==i&&(!a||i>1)&&(n=e.substring(i,e.length),e=e.substring(0,i)),y.nameToUrl(r(e,t&&t.id,!0),n,!0)},defined:function(e){return hasProp(N,a(e,t,!1,!0).id)},specified:function(e){return e=a(e,t,!1,!0).id,hasProp(N,e)||hasProp(E,e)}}),t||(o.undef=function(e){l();var r=a(e,t,!0),i=getOwn(E,e);i.undefed=!0,n(e),delete N[e],delete A[r.url],delete k[e],eachReverse(M,function(t,r){t[0]===e&&M.splice(r,1)}),delete y.defQueueMap[e],i&&(i.events.defined&&(k[e]=i.events),d(e))}),o},enable:function(e){var t=getOwn(E,e.id);t&&s(e).enable()},completeLoad:function(e){var t,r,n,o=getOwn(O.shim,e)||{},a=o.exports;for(l();M.length;){if(r=M.shift(),null===r[0]){if(r[0]=e,t)break;t=!0}else r[0]===e&&(t=!0);h(r)}if(y.defQueueMap={},n=getOwn(E,e),!t&&!hasProp(N,e)&&n&&!n.inited){if(!(!O.enforceDefine||a&&getGlobal(a)))return i(e)?void 0:c(makeError(\"nodefine\",\"No define call for \"+e,null,[e]));h([e,o.deps||[],o.exportsFn])}f()},nameToUrl:function(e,t,r){var n,i,o,a,s,u,c,l=getOwn(O.pkgs,e);if(l&&(e=l),c=getOwn(j,e))return y.nameToUrl(c,t,r);if(req.jsExtRegExp.test(e))s=e+(t||\"\");else{for(n=O.paths,i=e.split(\"/\"),o=i.length;o>0;o-=1)if(a=i.slice(0,o).join(\"/\"),u=getOwn(n,a)){isArray(u)&&(u=u[0]),i.splice(0,o,u);break}s=i.join(\"/\"),s+=t||(/^data\\:|^blob\\:|\\?/.test(s)||r?\"\":\".js\"),s=(\"/\"===s.charAt(0)||s.match(/^[\\w\\+\\.\\-]+:/)?\"\":O.baseUrl)+s}return O.urlArgs&&!/^blob\\:/.test(s)?s+O.urlArgs(e,s):s},load:function(e,t){req.load(y,e,t)},execCb:function(e,t,r,n){return t.apply(n,r)},onScriptLoad:function(e){if(\"load\"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=m(e);y.completeLoad(t.id)}},onScriptError:function(e){var t=m(e);if(!i(t.id)){var r=[];return eachProp(E,function(e,n){0!==n.indexOf(\"_@r\")&&each(e.depMaps,function(e){return e.id===t.id?(r.push(n),!0):void 0})}),c(makeError(\"scripterror\",'Script error for \"'+t.id+(r.length?'\", needed by: '+r.join(\", \"):'\"'),e,[t.id]))}}},y.require=y.makeRequire(),y}function getInteractiveScript(){return interactiveScript&&\"interactive\"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){return\"interactive\"===e.readyState?interactiveScript=e:void 0}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version=\"2.2.0\",commentRegExp=/(\\/\\*([\\s\\S]*?)\\*\\/|([^:]|^)\\/\\/(.*)$)/gm,cjsRequireRegExp=/[^.]\\s*require\\s*\\(\\s*[\"']([^'\"\\s]+)[\"']\\s*\\)/g,jsSuffixRegExp=/\\.js$/,currDirRegExp=/^\\.\\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,isBrowser=!(\"undefined\"==typeof window||\"undefined\"==typeof navigator||!window.document),isWebWorker=!isBrowser&&\"undefined\"!=typeof importScripts,readyRegExp=isBrowser&&\"PLAYSTATION 3\"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName=\"_\",isOpera=\"undefined\"!=typeof opera&&\"[object Opera]\"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if(\"undefined\"==typeof define){if(\"undefined\"!=typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}\"undefined\"==typeof require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,r,n){var i,o,a=defContextName;return isArray(e)||\"string\"==typeof e||(o=e,isArray(t)?(e=t,t=r,r=n):e=[]),o&&o.context&&(a=o.context),i=getOwn(contexts,a),i||(i=contexts[a]=req.s.newContext(a)),o&&i.configure(o),i.require(e,t,r)},req.config=function(e){return req(e)},req.nextTick=\"undefined\"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\\/|:|\\?|\\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each([\"toUrl\",\"undef\",\"defined\",\"specified\"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName(\"head\")[0],baseElement=document.getElementsByTagName(\"base\")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,r){var n=e.xhtml?document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"html:script\"):document.createElement(\"script\");return n.type=e.scriptType||\"text/javascript\",n.charset=\"utf-8\",n.async=!0,n},req.load=function(e,t,r){var n,i=e&&e.config||{};if(isBrowser)return n=req.createNode(i,t,r),n.setAttribute(\"data-requirecontext\",e.contextName),n.setAttribute(\"data-requiremodule\",t),!n.attachEvent||n.attachEvent.toString&&n.attachEvent.toString().indexOf(\"[native code\")<0||isOpera?(n.addEventListener(\"load\",e.onScriptLoad,!1),n.addEventListener(\"error\",e.onScriptError,!1)):(useInteractive=!0,n.attachEvent(\"onreadystatechange\",e.onScriptLoad)),n.src=r,i.onNodeCreated&&i.onNodeCreated(n,i,t,r),currentlyAddingScript=n,baseElement?head.insertBefore(n,baseElement):head.appendChild(n),currentlyAddingScript=null,n;if(isWebWorker)try{setTimeout(function(){},0),importScripts(r),e.completeLoad(t)}catch(o){e.onError(makeError(\"importscripts\",\"importScripts failed for \"+t+\" at \"+r,o,[t]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){return head||(head=e.parentNode),dataMain=e.getAttribute(\"data-main\"),dataMain?(mainScript=dataMain,cfg.baseUrl||-1!==mainScript.indexOf(\"!\")||(src=mainScript.split(\"/\"),mainScript=src.pop(),subPath=src.length?src.join(\"/\")+\"/\":\"./\",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,\"\"),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0):void 0}),define=function(e,t,r){var n,i;\"string\"!=typeof e&&(r=t,t=e,e=null),isArray(t)||(r=t,t=null),!t&&isFunction(r)&&(t=[],r.length&&(r.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(e,r){t.push(r)}),t=(1===r.length?[\"require\"]:[\"require\",\"exports\",\"module\"]).concat(t))),useInteractive&&(n=currentlyAddingScript||getInteractiveScript(),n&&(e||(e=n.getAttribute(\"data-requiremodule\")),i=contexts[n.getAttribute(\"data-requirecontext\")])),i?(i.defQueue.push([e,t,r]),i.defQueueMap[e]=!0):globalDefQueue.push([e,t,r])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this),define(\"requireLib\",function(){});var saveAs=saveAs||function(e){\"use strict\";if(!(\"undefined\"==typeof e||\"undefined\"!=typeof navigator&&/MSIE [1-9]\\./.test(navigator.userAgent))){var t=e.document,r=function(){return e.URL||e.webkitURL||e},n=t.createElementNS(\"http://www.w3.org/1999/xhtml\",\"a\"),i=\"download\"in n,o=function(e){var t=new MouseEvent(\"click\");e.dispatchEvent(t)},a=/constructor/i.test(e.HTMLElement),s=/CriOS\\/[\\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},c=\"application/octet-stream\",l=4e4,d=function(e){var t=function(){\"string\"==typeof e?r().revokeObjectURL(e):e.remove()};setTimeout(t,l)},p=function(e,t,r){t=[].concat(t);for(var n=t.length;n--;){var i=e[\"on\"+t[n]];if(\"function\"==typeof i)try{i.call(e,r||e)}catch(o){u(o)}}},f=function(e){return/^\\s*(?:text\\/\\S*|application\\/xml|\\S*\\/\\S*\\+xml)\\s*;.*charset\\s*=\\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},h=function(t,u,l){l||(t=f(t));var h,g=this,m=t.type,v=m===c,b=function(){p(g,\"writestart progress write writeend\".split(\" \"))},x=function(){if((s||v&&a)&&e.FileReader){var n=new FileReader;return n.onloadend=function(){var t=s?n.result:n.result.replace(/^data:[^;]*;/,\"data:attachment/file;\"),r=e.open(t,\"_blank\");r||(e.location.href=t),t=void 0,g.readyState=g.DONE,b()},n.readAsDataURL(t),void(g.readyState=g.INIT)}if(h||(h=r().createObjectURL(t)),v)e.location.href=h;else{var i=e.open(h,\"_blank\");i||(e.location.href=h)}g.readyState=g.DONE,b(),d(h)};return g.readyState=g.INIT,i?(h=r().createObjectURL(t),void setTimeout(function(){n.href=h,n.download=u,o(n),b(),d(h),g.readyState=g.DONE})):void x()},g=h.prototype,m=function(e,t,r){return new h(e,t||e.name||\"download\",r)};return\"undefined\"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,r){return t=t||e.name||\"download\",r||(e=f(e)),navigator.msSaveOrOpenBlob(e,t)}:(g.abort=function(){},g.readyState=g.INIT=0,g.WRITING=1,g.DONE=2,g.error=g.onwritestart=g.onprogress=g.onwrite=g.onabort=g.onerror=g.onwriteend=null,m)}}(\"undefined\"!=typeof self&&self||\"undefined\"!=typeof window&&window||this.content);\"undefined\"!=typeof module&&module.exports?module.exports.saveAs=saveAs:\"undefined\"!=typeof define&&null!==define&&null!==define.amd&&define(\"FileSaver\",[],function(){return saveAs}),define(\"app/options\",[],function(){return{isHierarchical:!0,exportOrder:!1,exportFeatures:!1,exportID:!0,exportCustomProperties:!0,customPropertiesToIgnore:[\"features\",\"order\"],saveAsFile:!0}}),define(\"app/treebuilder\",[],function(){return{realTitle:function(e){if(e=e.replace(\"[[\",\"\"),e=e.replace(\"]]\",\"\"),e.indexOf(\"|\")>-1){var t=e.split(\"|\");return t.splice(-1).toString()}if(e.indexOf(\"->\")>-1){var t=e.split(\"->\");return t.splice(-1).toString()}if(e.indexOf(\"<-\")>-1){var t=e.split(\"<-\");return t[0].toString()}return e.toString()},removeChildFromRoot:function(e){for(var t=e.length;t>=0;t--)\"undefined\"!=typeof e[t]&&\"parentId\"in e[t]&&e.splice(t,1);return e},build:function(e){console.log(JSON.stringify(e,null,2));for(var t=[],r=0;r<e.length;r++){e[r].children=[];var n=e[r].childrenNames;if(n.constructor===Array)for(var i=e[r].childrenNames,o=0;o<i.length;o++)for(var a=0;a<e.length;a++)this.realTitle(i[o])==e[a].name&&(e[a].parentId=parseInt(e[r].pid),e[r].children.push(e[a]));t.push(e[r])}return this.removeChildFromRoot(t)}}}),define(\"app/printer\",[],function(){return{syntaxHighlight:function(e,t){return e=e.replace(/&/g,\"&amp;\").replace(/</g,\"&lt;\").replace(/>/g,\"&gt;\"),t.html(e.replace(/(\"(\\\\u[a-zA-Z0-9]{4}|\\\\[^u]|[^\\\\\"])*\"(\\s*:)?|\\b(true|false|null)\\b|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?)/g,function(e){var t=\"number\";return/^\"/.test(e)?t=/:$/.test(e)?\"key\":\"string\":/true|false/.test(e)?t=\"boolean\":/null/.test(e)&&(t=\"null\"),'<span class=\"'+t+'\">'+e+\"</span>\"}))}}}),define(\"app/twinejson\",[\"FileSaver\",\"./options\",\"./treebuilder\",\"./printer\"],function(e,t,r,n){var i={output:$(\"#output\"),outputPlain:$(\"#outputPlain\"),storyData:$(\"tw-storydata\"),passageData:$(\"tw-passagedata\"),title:$(\"tw-storydata\").attr(\"name\")},o={convert:function(){var e=(i.storyData,this[\"export\"]()),o=JSON.parse(JSON.stringify(e));console.log(\"====== 'ORIGINAL, PLAIN' JSON OBJECT ======\"),console.dir(e),console.log(\"====== END JSON OBJECT ======\");var a=r.build(e);0===a.length?(n.syntaxHighlight(\"Stories with cyclic references aren't allowed in hierarchical JSON structures\",$(\"#output\")),$(\"#output\").addClass(\"invalid\")):(t.saveAsFile&&this.saveAsFile(\"hierarchical-\"+i.title,JSON.stringify(a,null,4)),n.syntaxHighlight(JSON.stringify(a,null,4),$(\"#output\")),$(\"#output\").removeClass(\"invalid\")),t.saveAsFile&&this.saveAsFile(\"plain-\"+i.title,JSON.stringify(o,null,2)),n.syntaxHighlight(JSON.stringify(o,null,4),$(\"#outputPlain\"))},saveAsFile:function(t,r){var n=new Blob([r],{type:\"text/json;charset=utf-8\"});e(n,t.replace(/[^a-z0-9]/gi,\"\").toLowerCase()+\"-\"+Math.floor(Date.now()/1e3)+\".json\")},isCyclic:function(e){function t(e){if(e&&\"object\"==typeof e){if(-1!==r.indexOf(e))return!0;r.push(e);for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return console.error(e,\"Found cycle at \"+n),!0}return!1}var r=[];return t(e)},\"export\":function(){var e=[],t=i.storyData;console.dir(t);for(var r=i.passageData,n=0;n<r.length;++n)e.push(this.buildPassageFromElement(r[n],n,r.length));var o=\"[\"+e.join(\",\")+\"]\";return JSON.parse(o)},buildPassageFromElement:function(e,t,r){var n=!1;t+1==r&&(n=!0);var i=e.getAttribute(\"name\");\"undefined\"==typeof i&&(i=\"Untitled Passage\");var o=e.getAttribute(\"pid\"),a=e.getAttribute(\"tags\"),s=e.getAttribute(\"position\"),u=e.textContent;return this.buildPassage(i,a,u,s,n,o)},buildPassage:function(e,r,n,i,o,a){var s={};t.exportID?s.pid=parseInt(a):null,t.exportPosition&&\"undefined\"!=typeof i&&(i=i.split(\",\"),s.position={x:parseInt(i[0]),y:parseInt(i[1])}),s.name=e,\"undefined\"!=typeof r&&(s.tags=r.split(\",\"));var u=this.scrub(n,\" \");return s.content=u,s.childrenNames=this.findChildren(u),t.exportFeatures?s.features=this.findFeatures(n):null,t.exportOrder?s.order=this.findOrder(n):null,t.exportOtherProperties?this.findOtherProperties(s,n,t.ignoreCustomProperties):null,JSON.stringify(s)},findOtherProperties:function(e,t,r){for(var n,i=\"\",o=/\\{\\{((\\s|\\S)+?)\\}\\}((\\s|\\S)+?)\\{\\{\\/\\1\\}\\}/gm;null!==(n=o.exec(t));){var a=n[1];if(-1==r.indexOf(a)){for(var s=n[3].split(/(\\r\\n|\\n|\\r)/gm),u=[],c=0;c<s.length;c++)s[c].length<=1&&(s.splice(c,1),c=-1);if(1===s.length)e[a]=s[0];else{for(var l={},d=0;d<s.length;d++)l[d]=s[d];u.push(l),i+=\",\"+NL,i+=TAB+'\"'+a+'\" :',i+=\"\"+JSON.stringify(u)+NL}}}return i},scrub:function(e,t){return e&&(e=e.replace(/\\\"/gm,\"'\"),e=e.replace(/(\\r\\n|\\n|\\r)/gm,t)),e},findChildren:function(e){for(var t,r=/\\[\\[(.+?)\\]\\]/gm,n=[];null!==(t=r.exec(e));)n.push(t[0]);return n},findOrder:function(e){for(var t,r=/\\{\\{order\\}\\}((\\s|\\S)+?)\\{\\{\\/order\\}\\}/gm,n=[];null!==(t=r.exec(e));){for(var i=t[1].split(/(\\r\\n|\\n|\\r)/gm),o=0;o<i.length;o++)i[o].length<=1&&(i.splice(o,1),o=-1);for(var a=0;a<i.length;a++)featureJSON.order=i[a],n.push(featureJSON)}return JSON.stringify(n)},findFeatures:function(e){for(var t,r=/\\{\\{features\\}\\}((\\s|\\S)+?)\\{\\{\\/features\\}\\}/gm,n=[];null!==(t=r.exec(e));){for(var i=t[1].split(/(\\r\\n|\\n|\\r)/gm),o=0;o<i.length;o++)i[o].length<=1&&(i.splice(o,1),o=-1);for(var a=0;a<i.length;a++){var s=/\\(([^)]+)\\)/,u=s.exec(i[a]),c={};null!==u&&u[1]&&(i[a]=i[a].replace(/\\(([^)]+)\\)/gi,\"\"),c.subtitle=u[1]),\":\"==i[a][0]&&(c.separator=!0,i[a]=i[a].substring(1)),\"*\"==i[a][0]&&(c.star=!0,i[a]=i[a].substring(1)),\"+\"==i[a][0]&&(c.delta=!0,i[a]=i[a].substring(1)),\"-\"==i[a][0]&&(c.optional=!0,i[a]=i[a].substring(1)),c.name=i[a],n.push(c)}}return JSON.stringify(n)}};return o.convert(),o}),requirejs.config({baseUrl:\"js/lib\",paths:{app:\"app\",jquery:\"http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min\"}}),requirejs([\"app/twinejson\"]),define(\"index-node\",function(){});</script></head><body><main class=wrapper><h2>TwineJson results<hr><h3>Hierarchical JSON output (Whole tree)</h3><pre id=output>\n\t\t\t</pre><h3>Plain JSON output</h3><pre id=outputPlain>\n\t\t\t</pre></h2></main><div id=storyData style=\"display: none;\">{{STORY_DATA}}</div></body></html>"
});