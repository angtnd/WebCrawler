/*
 * Copyright 2015 Disney
 * All Rights Reserved
 *
 * Modernizr 2.5.3
 * Copyright 2009-2012 Faruk Ates, Paul Irish, Alex Sexton
 * www.modernizr.com/license/
 */
function getScript(e,t){"use strict";var n=function(e,n){var r=this.readyState,o=this.parentNode;(n||!r||"complete"===r||"loaded"===r)&&(o&&o.removeChild(this),!n&&t&&t())};!function(){var t=document,r=t.getElementsByTagName("script")[0],o=t.createElement("script");o.type="text/javascript",o.async="async",o.onload=o.onreadystatechange=n,o.src=e,r.parentNode.insertBefore(o,r)}()}window.Modernizr=function(e,t,n){function r(e){y.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&y[o]!==n)return"pfx"==t?o:!0}return!1}function c(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return r===!1?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function s(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+k.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?a(i,t):(i=(e+" "+j.join(r+" ")+r).split(" "),c(i,t,n))}var u,l,f,p="2.7.1",d={},m=!0,h=t.documentElement,g="modernizr",v=t.createElement(g),y=v.style,w=":)",b={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),x="Webkit Moz O ms",k=x.split(" "),j=x.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},T={},C=[],N=C.slice,O=function(e,n,r,o){var i,a,c,s,u=t.createElement("div"),l=t.body,f=l||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:g+(r+1),u.appendChild(c);return i=["&#173;",'<style id="s',g,'">',e,"</style>"].join(""),u.id=g,(l?u:f).innerHTML+=i,f.appendChild(u),l||(f.style.background="",f.style.overflow="hidden",s=h.style.overflow,h.style.overflow="hidden",h.appendChild(f)),a=n(u,e),l?u.parentNode.removeChild(u):(f.parentNode.removeChild(f),h.style.overflow=s),!!a},M=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return O("@media "+t+" { #"+g+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},D={}.hasOwnProperty;f=o(D,"undefined")||o(D.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return D.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=N.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(N.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(N.call(arguments)))};return r}),T.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},T.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:O(["@media (",S.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},T.geolocation=function(){return"geolocation"in navigator},T.borderradius=function(){return s("borderRadius")},T.csstransitions=function(){return s("transition")},T.fontface=function(){var e;return O('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},T.generatedcontent=function(){var e;return O(["#",g,"{font:0/0 a}#",g,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},T.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},T.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},T.localstorage=function(){try{return localStorage.setItem(g,g),localStorage.removeItem(g),!0}catch(e){return!1}},T.svg=function(){return!!t.createElementNS&&!!t.createElementNS(E.svg,"svg").createSVGRect},T.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(b.call(t.createElementNS(E.svg,"clipPath")))};for(var P in T)f(T,P)&&(l=P.toLowerCase(),d[l]=T[P](),C.push((d[l]?"":"no-")+l));return d.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&d.addTest(r,e[r]);else{if(e=e.toLowerCase(),d[e]!==n)return d;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(h.className+=" "+(t?"":"no-")+e),d[e]=t}return d},r(""),v=u=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function i(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||d.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),s=c.length;s>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var r=o(e);return!y.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||c(e,r),e}var u,l,f="3.7.0",p=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,l=!0}}();var y={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:p.shivCSS!==!1,supportsUnknownElements:l,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a};e.html5=y,s(t)}(this,t),d._version=p,d._prefixes=S,d._domPrefixes=j,d._cssomPrefixes=k,d.mq=M,d.testProp=function(e){return a([e])},d.testAllProps=s,d.testStyles=O,h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+C.join(" "):""),d}(this,this.document),this.Disney=this.Disney||{},this.Disney.Style=this.Disney.Style||{},this.Disney.Style.breakpoints={midLow:480,midHigh:680,max:960,contentMax:1024,chromeMax:1025},this.Disney.Style.custom_breakpoints={juniorNavMin:420},/**
 * @license
 * jQuery Tools @VERSION / Flashembed - New wave Flash embedding
 *
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 *
 * http://flowplayer.org/tools/toolbox/flashembed.html
 *
 * Since : March 2008
 * Date  : @DATE
 */
function(){function e(e,t){if(t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function t(e,t){var n=[];for(var r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function n(t,n,i){if(s.isSupported(n.version))t.innerHTML=s.getHTML(n,i);else if(n.expressInstall&&s.isSupported([6,65]))t.innerHTML=s.getHTML(e(n,{src:n.expressInstall}),{MMredirectURL:location.href,MMplayerType:"PlugIn",MMdoctitle:document.title});else if(t.innerHTML.replace(/\s/g,"")||(t.innerHTML="<h2>Flash version "+n.version+" or greater is required</h2><h3>"+(u[0]>0?"Your version is "+u:"You have no flash plugin installed")+"</h3>"+("A"==t.tagName?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='"+o+"'>here</a></p>"),"A"==t.tagName&&(t.onclick=function(){location.href=o})),n.onFail){var a=n.onFail.call(this);"string"==typeof a&&(t.innerHTML=a)}r&&(window[n.id]=document.getElementById(n.id)),e(this,{getRoot:function(){return t},getOptions:function(){return n},getConf:function(){return i},getApi:function(){return t.firstChild}})}var r=document.all,o="http://www.adobe.com/go/getflashplayer",i="function"==typeof jQuery,a=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/,c={width:"100%",height:"100%",id:"_"+(""+Math.random()).slice(9),allowfullscreen:!0,allowscriptaccess:"always",quality:"high",version:[3,0],onFail:null,expressInstall:null,w3c:!1,cachebusting:!1};window.attachEvent&&window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){},__flash_savedUnloadHandler=function(){}}),window.flashembed=function(t,r,o){return"string"==typeof t&&(t=document.getElementById(t.replace("#",""))),t?("string"==typeof r&&(r={src:r}),new n(t,e(e({},c),r),o)):void 0};var s=e(window.flashembed,{conf:c,getVersion:function(){var e,t;try{t=navigator.plugins["Shockwave Flash"].description.slice(16)}catch(n){try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),t=e&&e.GetVariable("$version")}catch(r){try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),t=e&&e.GetVariable("$version")}catch(o){}}}return t=a.exec(t),t?[t[1],t[3]]:[0,0]},asString:function(e){if(null===e||void 0===e)return null;var n=typeof e;switch("object"==n&&e.push&&(n="array"),n){case"string":return e=e.replace(new RegExp('(["\\\\])',"g"),"\\$1"),e=e.replace(/^\s?(\d+\.?\d*)%/,"$1pct"),'"'+e+'"';case"array":return"["+t(e,function(e){return s.asString(e)}).join(",")+"]";case"function":return'"function()"';case"object":var r=[];for(var o in e)e.hasOwnProperty(o)&&r.push('"'+o+'":'+s.asString(e[o]));return"{"+r.join(",")+"}"}return String(e).replace(/\s/g," ").replace(/\'/g,'"')},getHTML:function(t,n){t=e({},t);var o='<object width="'+t.width+'" height="'+t.height+'" id="'+t.id+'" name="'+t.id+'"';t.cachebusting&&(t.src+=(-1!=t.src.indexOf("?")?"&":"?")+Math.random()),o+=t.w3c||!r?' data="'+t.src+'" type="application/x-shockwave-flash"':' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"',o+=">",(t.w3c||r)&&(o+='<param name="movie" value="'+t.src+'" />'),t.width=t.height=t.id=t.w3c=t.src=null,t.onFail=t.version=t.expressInstall=null;for(var i in t)t[i]&&(o+='<param name="'+i+'" value="'+t[i]+'" />');var a="";if(n){for(var c in n)if(n[c]){var u=n[c];a+=c+"="+encodeURIComponent(/function|object/.test(typeof u)?s.asString(u):u)+"&"}a=a.slice(0,-1),o+='<param name="flashvars" value=\''+a+"' />"}return o+="</object>"},isSupported:function(e){return u[0]>e[0]||u[0]==e[0]&&u[1]>=e[1]}}),u=s.getVersion();i&&(jQuery.tools=jQuery.tools||{version:"@VERSION"},jQuery.tools.flashembed={conf:c},jQuery.fn.flashembed=function(e,t){return this.each(function(){jQuery(this).data("flashembed",flashembed(this,e,t))})})}(),function(e){"use strict";var t=e.Modernizr,n=e.flashembed,r=[11,0];t.addTest({multi_input:function(){return e.navigator.maxTouchPoints>0||e.navigator.msMaxTouchPoints>0},mobile:function(){var t=e.navigator.userAgent||e.navigator.vendor||e.window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((e.navigator.userAgent||e.navigator.vendor||e.window.opera).substr(0,4))},flash:function(){return n.isSupported(r)},ios:function(){return e.navigator.userAgent.match(/(ipod|iphone|ipad)/i)},android:function(){return e.navigator.userAgent.match(/(android)/i)},kindle:function(){return e.navigator.userAgent.match(/(kindle|silk)/i)},scrolling_text:function(){return t.csstransitions&&t.canvas}})}(this),function(e){"use strict";var t=e.getScript;e.JSON||t("//a.dilcdn.com/a/json2-33e32b773005.js")}(this),function(e){"use strict";var t,n,r,o,i,a=[];e.Disney.geo=function(e){a?a.push(e):e(t,r,n)},i=function(){if(a){e.clearTimeout(o),t=e.countryisocode,n=e.state,r=e.connection||"broadband";for(var i=0;i<a.length;++i)a[i](t,r,n);a=o=null}},o=e.setTimeout(i,5e3),e.getScript("//tredir.go.com/capmon/GetDE/?set=j&param=countryisocode&param=state&param=connection",i)}(this),function(e){"use strict";var t=e.Disney,n=e.document,r=e.decodeURIComponent,o=e.encodeURIComponent,i=/\s*([^=;]+)=?([^;]*);?/g,a=/(?:^|.)([a-z0-9\-]+(?:\.com?)?\.[a-z\-]+)$/,c=t.Cookie={enabled:function(){return e.navigator.cookieEnabled||"cookie"in n&&(n.cookie.length>0||(n.cookie="cookietest"&&n.cookie.indexOf("cookietest")>-1))},get:function(e,t){return c.all(t)[e]},all:function(e){for(var t,o,a={},c=n.cookie||"",s=e&&e.raw;t=i.exec(c);)o=t[2],a[r(t[1])]=s?o:r(o);return a},set:function(e,t,r){r=r||{};var i,a=r.expires;null===t&&(t="",a=-1),"number"==typeof a&&(i=a,a=new Date,a.setDate(a.getDate()+i)),a&&a.toUTCString&&(a=a.toUTCString()),n.cookie=[o(e),"=",r.raw?t:o(t),a?"; expires="+a:"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")},remove:function(e,t){c.set(e,null,t)},domain:function(t){return t=t||e.location.hostname,"."+(a.exec(t)||[t,t])[1]}}}(this),function(e){"use strict";function t(){return!!e.s_gi}function n(e,t){for(;e;){if("A"===e.nodeName&&e.hasAttribute("href")){t(e);break}e=e.parentNode}}function r(t){a({app:o(),trckTp:"tracklink",vendorLst:"o",url:e.location.href,linkNm:"pre-cto|"+i(t.textContent||t.innerText),linkPos:"pre-cto"})}function o(){var t=e.document.body.getAttribute("data-cto-region");switch(t){case"emea":return"cto_web_intl";default:return"w88_dolwa_prod03"}}function i(e){return(""+e).replace(/[^a-z0-9_:, \-]/gi,"").replace(/\s+/g," ")}function a(t){var n=new e.Image,r="http://ctologger01.analytics.go.com/cto/?"+c(t);n.src=r}function c(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(u(n)+"="+u(e[n]));return t.join("&")}function s(t,n,r){var o,i=function(t){t=t||e.event||{type:n},o&&o.call(this,t),r.call(this,t)};t.addEventListener?t.addEventListener(n,i,!1):(o=t["on"+n],t["on"+n]=i),t=null}var u=e.encodeURIComponent;s(e.document.documentElement,"click",function(e){var o=e.target||e.srcElement;t()||n(o,r)})}(this),function(e,t){"use strict";function n(e){var t,n,r,o={};for(t in e)if(e.hasOwnProperty(t))for(r=e[t],t=t.split(","),n=0;n<t.length;++n)o[t[n]]=r;return o}var r=e.Disney,o=r.Cookie,i=r.Rdr=function(a,c){function s(e,t){return!e||a[e+":"+t]||f||a[e]||a.other||!0}function u(){return r.geo(function(e,t,n){var r=s(e,n);r!==!0&&i.go(r)}),p}function l(){var t=e.jQuery.Deferred();return r.geo(function(e,n,r){s(e,r)===!0&&t.resolve()}),t.promise()}var f=!1,p=this;a=n(a),c===t&&(c=/[?&]intoverride\b/.exec(e.location.search)),(c||o.get("intoverride"))&&(f=!0,o.set("intoverride","true",{domain:o.domain()})),p.run=u,p.loader=l};i.go=function(t){var n=e.document.documentElement;n&&(n.style.display="none"),e.document.location.replace(t)}}(this),function(e){"use strict";function t(e,t){var o,i="number"==typeof e,a="string"==typeof t,c=100;if(!i)throw new TypeError("Percent is not a Number");if(0>e||e>100)throw new RangeError("Invalid Percentage: must be between 0..100");if(t&&!a)throw new TypeError("Invalid UUID");return t&&(o=t.replace(/[^\/\w]|_/g,"").substr(t.length-10),o=parseInt(o,16)),o/c>c?n(o,c,e):n(r(Math.pow(c,2)),c,e)}function n(e,t,n){var r=e%t;return n>=r}function r(e){return Math.floor(Math.random()*e)}var o=e.Disney;o.Sample=t}(this),function(e){"use strict";function t(){return r?r.get("SWID")||void 0:void 0}var n=e.Disney,r=n.Cookie;n.usrid=t}(this);