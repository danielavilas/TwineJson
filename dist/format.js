window.storyFormat({
	"name":"TwineJson",
	"version":"0.0.3",
	"author":'<a href="http://twitter.com/cauli">Cauli Tomaz</a>',
	"description":"Free utility format to export your story into json format. Based on Entweedle by Michael McCollum",
	"image":"icon.svg",
	"url":"http://cau.li",
	"license":'<a href="http://opensource.org/licenses/MIT">MIT License</a>',
	"proofing":false,
	"source":"<html><head><title>{{STORY_NAME}}</title></head><body><script type=text/javascript>window.onload=function(){\"undefined\"==typeof window.TwineJson&&(window.TwineJson={convert:function(){var e=window.document.getElementById(\"output\");e.innerHTML=this[\"export\"]()},\"export\":function(){var e=[],t=window.document.getElementsByTagName(\"tw-storydata\");t&&e.push(this.buildPassage(\"StoryTitle\",\"\",t[0].getAttribute(\"name\")));var n=window.document.getElementById(\"twine-user-script\");n&&e.push(this.buildPassage(\"UserScript\",\"script\",n.innerHTML));var s=window.document.getElementById(\"twine-user-stylesheet\");s&&e.push(this.buildPassage(\"UserStylesheet\",\"stylesheet\",s.innerHTML));for(var i=window.document.getElementsByTagName(\"tw-passagedata\"),r=0;r<i.length;++r)e.push(this.buildPassageFromElement(i[r]));return e.join(\"\")},buildPassageFromElement:function(e){var t=e.getAttribute(\"name\");t||(t=\"Untitled Passage\");var n=e.getAttribute(\"tags\"),s=e.textContent;return this.buildPassage(t,n,s)},buildPassage:function(e,t,n){var s=[];return s.push('\"',e,'\"'),t&&(s.push(\",\\r\\n\"),s.push('\"tags\" : '),s.push(\"[\",t,\"]\")),s.push(\",\\r\\n\"),s.push('\"content\" : '),s.push('\\r\\n\"',this.scrub(n),'\"\\r\\n'),s.join(\"\")},scrub:function(e){return e&&(e=e.replace(/^\\\"/gm,\"'\")),e}}),window.TwineJson.convert()};</script><pre id=output></pre><div id=storyData style=\"display: none;\">{{STORY_DATA}}</div></body></html>"
});