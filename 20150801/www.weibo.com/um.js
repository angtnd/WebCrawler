/*
 Copyright by Alipay.com, 2010-2012
 @author Janlay Wu <janlay@gmail.com>, 2012.08

*/
(function(w,I){var v={encode:function(c){c=c.replace(/[\u0080-\u07ff]/g,function(c){c=c.charCodeAt(0);return String.fromCharCode(192|c>>6,128|c&63)});return c=c.replace(/[\u0800-\uffff]/g,function(c){c=c.charCodeAt(0);return String.fromCharCode(224|c>>12,128|c>>6&63,128|c&63)})},ROTL:function(c,d){return c<<d|c>>>32-d},toHexStr:function(c){for(var d="",b,a=7;0<=a;a--)b=c>>>4*a&15,d+=b.toString(16);return d},f:function(c,d,b,a){switch(c){case 0:return d&b^~d&a;case 1:return d^b^a;case 2:return d&b^d&a^b&a;case 3:return d^b^a}},hash:function(c,d){("undefined"==typeof d||d)&&(c=v.encode(c));var b=[1518500249,1859775393,2400959708,3395469782];c+=String.fromCharCode(128);for(var a=Math.ceil((c.length/4+2)/16),m=Array(a),f=0;f<a;f++){m[f]=Array(16);for(var k=0;16>k;k++)m[f][k]=c.charCodeAt(64*f+4*k)<<24|c.charCodeAt(64*f+4*k+1)<<16|c.charCodeAt(64*f+4*k+2)<<8|c.charCodeAt(64*f+4*k+3)}m[a-1][14]=8*(c.length-1)/Math.pow(2,32);m[a-1][14]=Math.floor(m[a-1][14]);m[a-1][15]=8*(c.length-1)&4294967295;for(var k=1732584193,t=4023233417,e=2562383102,g=271733878,h=3285377520,u=Array(80),q,p,l,n,s,f=0;f<a;f++){for(var r=0;16>r;r++)u[r]=m[f][r];for(r=16;80>r;r++)u[r]=v.ROTL(u[r-3]^u[r-8]^u[r-14]^u[r-16],1);q=k;p=t;l=e;n=g;s=h;for(r=0;80>r;r++){var F=Math.floor(r/20),F=v.ROTL(q,5)+v.f(F,p,l,n)+s+b[F]+u[r]&4294967295;s=n;n=l;l=v.ROTL(p,30);p=q;q=F}k=k+q&4294967295;t=t+p&4294967295;e=e+l&4294967295;g=g+n&4294967295;h=h+s&4294967295}return v.toHexStr(k)+v.toHexStr(t)+v.toHexStr(e)+v.toHexStr(g)+v.toHexStr(h)}},n=window,q=n.document,h=n.navigator,x=0,K=function(){return{getExtProps:function(){var c=this.getPlugins(),d={};d.epl=c.length;0!=d.epl&&(d.ep=v.hash(c.join(",")));c=this.getCanvasData();""!=c&&(d.ecn=v.hash(c));d.ent=this.getDoNotTrack();d.eca=y.getBrowCookie("cna");d.est=x;return e.toJson(d)},getPlugins:function(){if(e.isIE()&&11>e.isIE())return this.getPluginsIE();for(var c=h.plugins||[],d=[],b=0;b<c.length;b++){var a=c[b];try{if(a){for(var m=[],f=0;f<a.length;f++)a.item(f)&&m.push(a.item(f).type);var k=a.name+";";a.version&&(k+=a.version+";");k+=a.filename+";";k+=m.join(";");d.push(k)}}catch(t){}}return d},getPluginsIE:function(){for(var c=[],d=function(a){if(window&&a&&window.ActiveXObject){for(var b=0,d=null;null===d&&b<a.ids.length;){try{d=new ActiveXObject(a.ids[b])}catch(t){}b++}if(d)try{c.push(a.name+"=="+a.getVersion(d,a.ids[b]))}catch(e){}}},b=[{name:"Quicktime",ids:["QuickTimeCheckObject.QuickTimeCheck.1","QuickTime.QuickTime"],getVersion:function(a,b){return a.QuickTimeVersion.toString(16).replace(/^(.)(.)(.).*/,"$1.$2.$3")}},{name:"Acrobat",ids:"PDF.PdfCtrl.7 PDF.PdfCtrl.6 PDF.PdfCtrl.5 PDF.PdfCtrl.4 PDF.PdfCtrl.3 AcroPDF.PDF.1".split(" "),getVersion:function(a,b){return b.replace(/^[a-zA-Z.]+\.([0-9][0-9.]*)/,"$1")}},{name:"RealPlayer",ids:["RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","rmocx.RealPlayer G2 Control"],getVersion:function(a,b){return a.GetVersionInfo()}},{name:"Flash",ids:"ShockwaveFlash.ShockwaveFlash.9 ShockwaveFlash.ShockwaveFlash.8.5 ShockwaveFlash.ShockwaveFlash.8 ShockwaveFlash.ShockwaveFlash.7 ShockwaveFlash.ShockwaveFlash.6 ShockwaveFlash.ShockwaveFlash.5 ShockwaveFlash.ShockwaveFlash.4".split(" "),getVersion:function(a,b){return a.GetVariable("$version").replace(/[a-zA-Z ]*([0-9,]+)/,"$1").replace(/,/g,".")}},{name:"Adobe SVG",ids:["Adobe.SVGCtl"],getVersion:function(a,b){return a.getSVGViewerVersion().replace(/[a-zA-Z; ]*([0-9.]+)/,"$1")}},{name:"Windows Media Player",ids:["WMPlayer.OCX","MediaPlayer.MediaPlayer.1"],getVersion:function(a,b){return a.versionInfo}},{name:"DivX",ids:["npdivx.DivXBrowserPlugin.1","npdivx.DivXBrowserPlugin"],getVersion:function(a,b){return a.GetVersion()}},{name:"WPFe (Silverlight)",ids:["AgControl.AgControl"],getVersion:function(a,b){for(var c="1",d="0",e="0";a.IsVersionSupported(c+"."+d+"."+e);)c++;for(c--;a.IsVersionSupported(c+"."+d+"."+e);)d++;for(d--;a.IsVersionSupported(c+"."+d+"."+e);)e++;e--;return c+"."+d+"."+e}},{name:"MSXML",ids:["MSXML2.DOMDocument.6.0","MSXML2.DOMDocument.5.0","MSXML2.DOMDocument.4.0","MSXML2.DOMDocument.3.0"],getVersion:function(a,b){return b.replace(/^[a-zA-Z.2]+\.([0-9]+\.[0-9.]+)/,"$1")}}],a=0;a<b.length;a++)d(b[a]);return c},getCanvasData:function(){try{var c=q.createElement("canvas");c.height=60;c.width=400;var d=c.getContext("2d");c.style.display="inline";d.textBaseline="alphabetic";d.fillStyle="#f60";d.fillRect(125,1,62,20);d.fillStyle="#069";d.font="11pt no-real-font-123";d.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",2,15);d.fillStyle="rgba(102, 204, 0, 0.7)";d.font="18pt Arial";d.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",4,45);return c.toDataURL()}catch(b){return""}},getDoNotTrack:function(){var c="";return c=null!=h.doNotTrack&&"unspecified"!=h.doNotTrack?"1"==h.doNotTrack||"yes"==h.doNotTrack?"yes":"no":"NC"}}}(),y=function(){var c=null,d,b=!1;return{init:function(a,c){d=a;b=c},setUserData:function(a){c=a},set:function(a,b){try{d&&d.setCookie(a,b)}catch(f){}try{window.localStorage&&(localStorage[a]=b)}catch(k){}if(h.cookieEnabled){var g=a+"="+encodeURIComponent(b),g=g+(";expires="+(new Date((new Date).getTime()+31536E6)).toGMTString());q.cookie=g}if(e.isIE()&&11>e.isIE()&&c)try{c.load("um"),c.setAttribute(a,b),c.save("um")}catch(n){}},get:function(a,m){var f;if(b&&d)try{if(f=d.getCookie(a)||"")return x=1,m||this.set(a,f),f}catch(k){}try{if(window.localStorage&&(f=localStorage[a]||""))return x=2,m||this.set(a,f),f}catch(g){}if(e.isIE()&&11>e.isIE()&&c)try{if(c.load("um"),f=c.getAttribute(a))return x=8,m||this.set(a,f),f}catch(q){}if(h.cookieEnabled&&(f=this.getBrowCookie(a)))return x=16,m||this.set(a,f),f},getBrowCookie:function(a){for(var b=document.cookie?document.cookie.split("; "):[],c,d=0,e=b.length;d<e;d++){var g=b[d].split("="),h=decodeURIComponent(g.shift());if(a===h){c=g.shift();break}}return c},remove:function(a,m){m==I&&(m=255);h.cookieEnabled&&m&16&&(q.cookie=a+"=;expires=Thu, 01-Jan-70 00:00:01 GMT;");if(e.isIE()&&11>e.isIE()&&c)try{c.load("um"),c.removeAttribute(a),c.save("um")}catch(f){}try{m&4&&window.localStorage&&localStorage.removeItem(a),m&1&&b&&d.setCookie(a,"")}catch(g){}},renderUserData:function(){var a=document.createElement("INPUT");a.type="hidden";a.style.display="none";a.addBehavior("#default#userData");document.body.appendChild(a);y.setUserData(a)}}}(),e=function(){var c,d=function(){var b=h.userAgent,a=b.indexOf("MSIE ");if(0<a)return parseInt(b.substring(a+5,b.indexOf(".",a)),10);if(0<b.indexOf("Trident/"))return a=b.indexOf("rv:"),parseInt(b.substring(a+3,b.indexOf(".",a)),10);a=b.indexOf("Edge/");return 0<a?parseInt(b.substring(a+5,b.indexOf(".",a)),10):!1}();return{init:function(b){c=b},isIE:function(){return d},jsonp:function(){var b=q.getElementsByTagName("head")[0]||q.documentElement,a=function(a){var c="_"+parseInt(1E4*Math.random(),10)+"_"+(new Date).getTime();window[c]=function(d){a(d);b.removeChild(q.getElementById(c));try{delete window[c]}catch(e){}};return c};return function(c,d,e){var g=!1,h=q.createElement("script");d=a(d);var n;n=[];for(var s in e||{})n.push(s+"="+encodeURIComponent(e[s]));n.push("_callback="+d);c+=0<c.indexOf("?")?"&":"?";c+=n.join("&");h.id=d;h.onload=h.onreadystatechange=function(){g||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(g=!0,h.onload=h.onreadystatechange=null)};h.src=c;b.insertBefore(h,b.firstChild)}}(),extend:function(b){for(var a=1,c=arguments.length;a<c;a++)for(var d in arguments[a])arguments[a].hasOwnProperty(d)&&(b[d]=arguments[a][d]);return b},detectPlugin:function(b,a){return h.plugins&&h.plugins[b]&&h.mimeTypes&&h.mimeTypes[a]&&h.mimeTypes[a].enabledPlugin?h.plugins[b]:!1},detectActiveX:function(b){var a=!1;try{a=new ActiveXObject(b)}catch(c){}return a},toJson:function(b){var a=[];try{for(var c in b){var d="",e=b[c];switch(typeof e){case "string":e=e.replace(/\"/g,".");d=c+':"'+e+'"';a.push(d);break;case "number":d=c+":"+e;a.push(d);break;case "boolean":d=e?c+":1":c+":0",a.push(d)}}}catch(g){}return"{"+a.join(",")+"}"},append:function(b,a){b||(b=q.body);var c=q.createElement("span");c.innerHTML=a;b.insertBefore(c.firstChild,b.firstChild)},track:function(){var b=[];return function(a){c.debug&&(window.Tracker?Tracker.click("um-"+a):a&&(b.push(a),setTimeout(function(){e.track(b.shift())},100)))}}()}}(),G={version:"2.0.11",enabled:!0,debug:!1,ratio:1,timeout:3E3,timestamp:"-",token:"",serviceUrl:"/service/um.json",flashUrl:"https://assets.alicdn.com/g/security/umflash/fp.swf?v1=1",enableMod:!0,containers:{flash:null,dcp:null},appName:""},s=0,z=null,A=!1,D=null,E=!1,H,B=null,g={},J=function(){z=q.getElementById("umFlash");D=q.getElementById("umDcp");try{D&&"undefined"!=typeof D.getHardVersion&&(B.mod=parseInt(D.getHardVersion().replace(/\./g,""),10)||1)}catch(c){}try{A||(A=z&&z.md5),y.init(z,A)}catch(d){}},L=function(){var c,d=[0,0,0],b=0;if(e.isIE()){if(c=e.detectActiveX("ShockwaveFlash.ShockwaveFlash"))try{if(f=c.GetVariable("$version"))f=f.split(" ")[1].split(","),d=[parseInt(f[0],10),parseInt(f[1],10),parseInt(f[2],10)]}catch(a){}if(c=g.enableMod&&e.detectActiveX("Alim.webmod"))try{b=1,"undefined"!=typeof c.getHardVersion&&(b=parseInt(c.getHardVersion().replace(/\./g,""),10)||1)}catch(h){}}else{if((c=e.detectPlugin("Shockwave Flash","application/x-shockwave-flash"))&&c.description){var f=c.description.replace(/^.*\s+(\S+\s+\S+$)/,"$1");d[0]=parseInt(f.replace(/^(.*)\..*$/,"$1"),10);d[1]=parseInt(f.replace(/^.*\.(.*)\s.*$/,"$1"),10);d[2]=/[a-zA-Z]/.test(f)?parseInt(f.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}(c=g.enableMod&&e.detectPlugin("Alipay webmod control","application/alidcp"))&&(b=1)}return{flash:d,mod:b}};w.getStatus=function(c){return c?s:200<=s};w.init=function(c){if(!E){E=!0;try{g=e.extend({},G,c||{}),e.init(g)}catch(d){}B=L();s=1;var b=0;H=setTimeout(function(){if(3>s){J();b++;if(10>b&&z){e.track(A?"timeout-flash":"timeout-flash-na");setTimeout(arguments.callee,g.timeout>>1);C();return}setTimeout(arguments.callee,200)}s=201},g.timeout);g.debug&&(w.options=g);if(g.enabled&&(1>=g.ratio||!parseInt(Math.random()*g.ratio,10)))try{M()}catch(a){e.track("init-error")}}};var C=function(){var c=function(b,a){if("boolean"!=typeof b&&(!b||"-"==b))return"-";switch(a){case 0:"string"===typeof b&&(b="true"===b);result=b?"1":"0";break;case 1:result=parseInt(b,10)||0;break;case 2:b=""+b;result=A&&32<b.length?z.md5(b):b;break;case 3:result=""+b;break;default:result="-"}return result},d=[{avHardwareDisable:[0,0],hasAudio:[0,0],hasAudioEncoder:[0,0],hasMP3:[0,0],hasPrinting:[0,0],hasStreamingAudio:[0,0],hasStreamingVideo:[0,0],hasVideoEncoder:[0,0],maxLevelIDC:[1,0],pixelAspectRatio:[1,0],screenColor:[2,0],screenDPI:[1,1],screenResolutionX:[1,0],screenResolutionY:[1,0]},{hasAccessibility:[0,0],hasEmbeddedVideo:[0,0],hasScreenBroadcast:[0,0],hasScreenPlayback:[0,0],isDebugger:[0,0],isEmbeddedInAcrobat:[0,0],hasIME:[0,0],hasTLS:[0,0],language:[2,0],languages:[2,0],localFileReadDisable:[0,0],os:[2,0],cookieEnabled:[0,1],platform:[2,1,function(b){return b?b.split(" ").shift():""}]},{playerType:[2,0],version:[2,0],userAgent:[2,1],appCodeName:[2,1],appMinorVersion:[2,1],appName:[2,1],appVersion:[2,1],systemLanguage:[2,1],userLanguage:[2,1],browserLanguage:[2,1],manufacturer:[2,0],fonts:[2,0],cpuClass:[2,1]},{width:[1,2],height:[1,2],availWidth:[1,2],availHeight:[1,2],clientWidth:[1,3],clientHeight:[1,3],screenTop:[1,5,function(){return"number"==typeof n.screenLeft?n.screenLeft:n.screenX}],screenLeft:[1,5,function(){return"number"==typeof n.screenTop?n.screenTop:n.screenY}],language:[2,1],oscpu:[2,1],location:[3,4,function(b){return b?encodeURIComponent(b.href.slice(0,255)):""}],timezone:[1,5,function(){var b=new Date;b.setDate(1);b.setMonth(5);var a=-b.getTimezoneOffset();b.setMonth(11);b=-b.getTimezoneOffset();return Math.min(a,b)}],timestamp:[3,5,function(){return(new Date).getTime()}]}];G.debug&&(w.cookie=y,w.ua=B);return function(){if(!arguments.callee.invoked&&E){arguments.callee.invoked=!0;s=3;window.__flash__removeCallback=function(a,b){a&&(a[b]=null)};J();var b={xt:g.token||"",xa:g.appName||"",xh:""};try{if(g.enableMod&&B.mod){var a=e.isIE()?new ActiveXObject("Alim.webmod"):D;2001<=B.mod&&(a.timestamp=g.timestamp||"-");b.xh=a.ciraw()}}catch(m){b.xh||(b.xh="")}var f;try{f=b.xs=y.get("_umdata",!1)}catch(k){e.track("err-read-s")}try{for(a=0;4>a;a++){var t=[],v=[],w=d[a],x;for(x in w)w.hasOwnProperty(x)&&t.push(x);for(var t=t.sort(),u=0,C=t.length;u<C;u++){var p=d[a][t[u]],l="";try{switch(p[1]){case 0:(l=A&&z.getCapabilities(t[u])||"")&&p[2]&&(l=p[2](l));break;case 1:(l=h[t[u]]||"")&&p[2]&&(l=p[2](l));break;case 2:(l=n.screen[t[u]]||"")&&p[2]&&(l=p[2](l));break;case 3:(l=q.body[t[u]]||"")&&p[2]&&(l=p[2](l));break;case 4:(l=n[t[u]]||"")&&p[2]&&(l=p[2](l));break;case 5:p[2]&&(l=p[2]())}}catch(G){}v.push(c(l,p[0]))}b["x"+a]=v.join("^^")}b.ext=K.getExtProps()}catch(I){e.track("err-read")}b.xv=g.version;s=4;try{e.jsonp(g.serviceUrl,function(a){H&&clearTimeout(H);a&&"id"in a?(s=255,(f=a.id)&&y.set("_umdata",f),g.debug&&g.onCompleted&&g.onCompleted(a.id)):s=200},b)}catch(r){}}}}(),M=function(){w.flashLoaded=function(){!arguments.callee.invoked&&E&&(A=arguments.callee.invoked=!0,C())};return function(){if(!arguments.callee.invoked&&E){arguments.callee.invoked=!0;s=2;try{e.isIE()&&11>e.isIE()&&y.renderUserData()}catch(c){}try{g.enableMod&&(e.isIE()||B.mod&&e.append(g.containers.dcp,'<embed height="1" width="1" id="umDcp" type="application/alidcp" class="umidWrapper" />'))}catch(d){}if(9<=B.flash[0])try{var b='<object type="application/x-shockwave-flash" data="'+g.flashUrl+'" width="1" height="1" id="umFlash" class="umidWrapper">',b=b+('<param name="movie" value="'+g.flashUrl+'" /><param name="allowScriptAccess" value="always" /></object>');e.append(g.containers.flash,b)}catch(a){C()}else C()}}}()})(window.um={});
