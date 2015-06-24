(function(){var g=this,l=function(a,b){for(var c=a.split("."),d=b||g,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d},m=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==
c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};Math.random();
var aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},n=function(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return n.apply(null,arguments)},p=function(a,b){function c(){}
c.prototype=b.prototype;a.w=b.prototype;a.prototype=new c;a.G=function(a,c,f){for(var k=Array(arguments.length-2),h=2;h<arguments.length;h++)k[h-2]=arguments[h];return b.prototype[c].apply(a,k)}};Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return n.apply(null,c)}return n(this,a)};var q=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};var ca=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},r=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},t=function(a,b){return a<b?-1:a>b?1:0};Math.random();var da=function(){var a=u.prototype,b=v;"array"==m(b)||(b=q(b));for(var c=b.length,d=0;d<c;d++)(function(a,b){Object.defineProperty(a,b,{get:function(){return this.getAttribute(b)},set:function(a){return this.setAttribute(b,a)},enumerable:!0})})(a,b[d])},ea=function(a){var b=v;"array"==m(b)||(b=q(b));for(var c=0,d=b.length;c<d;c++)a.o(b[c])};var z=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,z);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};p(z,Error);var A=function(a,b){b.unshift(a);z.call(this,ca.apply(null,b));b.shift()};p(A,z);var B=function(a,b,c){if(!a){var d="Assertion failed";if(b)var d=d+(": "+b),e=Array.prototype.slice.call(arguments,2);throw new A(""+d,e||[]);}};var C=Array.prototype,fa=C.indexOf?function(a,b,c){B(null!=a.length);return C.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if("string"==typeof a)return"string"==typeof b&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var D;t:{var E=g.navigator;if(E){var F=E.userAgent;if(F){D=F;break t}}D=""};var G=-1!=D.indexOf("Opera")||-1!=D.indexOf("OPR"),H=-1!=D.indexOf("Trident")||-1!=D.indexOf("MSIE"),I=-1!=D.indexOf("Gecko")&&-1==D.toLowerCase().indexOf("webkit")&&!(-1!=D.indexOf("Trident")||-1!=D.indexOf("MSIE")),J=-1!=D.toLowerCase().indexOf("webkit"),K=function(){var a=g.document;return a?a.documentMode:void 0},L=function(){var a="",b;if(G&&g.opera)return a=g.opera.version,"function"==m(a)?a():a;I?b=/rv\:([^\);]+)(\)|;)/:H?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:J&&(b=/WebKit\/(\S+)/);b&&(a=(a=
b.exec(D))?a[1]:"");return H&&(b=K(),b>parseFloat(a))?String(b):a}(),ga={},M=function(a){var b;if(!(b=ga[a])){b=0;for(var c=r(String(L)).split("."),d=r(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var k=c[f]||"",h=d[f]||"",w=RegExp("(\\d*)(\\D*)","g"),wa=RegExp("(\\d*)(\\D*)","g");do{var x=w.exec(k)||["","",""],y=wa.exec(h)||["","",""];if(0==x[0].length&&0==y[0].length)break;b=t(0==x[1].length?0:parseInt(x[1],10),0==y[1].length?0:parseInt(y[1],10))||t(0==x[2].length,0==y[2].length)||
t(x[2],y[2])}while(0==b)}b=ga[a]=0<=b}return b},ha=g.document,ia=ha&&H?K()||("CSS1Compat"==ha.compatMode?parseInt(L,10):5):void 0;!I&&!H||H&&H&&9<=ia||I&&M("1.9.1");H&&M("9");var N=function(a){N[" "](a);return a};N[" "]=function(){};var ja=!H||H&&9<=ia,ka=H&&!M("9");!J||M("528");I&&M("1.9b")||H&&M("8")||G&&M("9.5")||J&&M("528");I&&!M("8")||H&&M("9");var O=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.p=!1};O.prototype.preventDefault=function(){this.defaultPrevented=!0};var P=function(a,b){O.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.b=this.state=null;if(a){this.b=a;var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(I){var e;t:{try{N(d.nodeName);e=!0;break t}catch(f){}e=!1}e||(d=null)}}else"mouseover"==
c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;Object.defineProperties?Object.defineProperties(this,{offsetX:{configurable:!0,enumerable:!0,get:this.j,set:this.u},offsetY:{configurable:!0,enumerable:!0,get:this.k,set:this.v}}):(this.offsetX=this.j(),this.offsetY=this.k());this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=
a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;a.defaultPrevented&&this.preventDefault()}};p(P,O);P.prototype.preventDefault=function(){P.w.preventDefault.call(this);var a=this.b;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ka)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};P.prototype.j=function(){return J||void 0!==this.b.offsetX?this.b.offsetX:this.b.layerX};
P.prototype.u=function(a){Object.defineProperties(this,{offsetX:{writable:!0,enumerable:!0,configurable:!0,value:a}})};P.prototype.k=function(){return J||void 0!==this.b.offsetY?this.b.offsetY:this.b.layerY};P.prototype.v=function(a){Object.defineProperties(this,{offsetY:{writable:!0,enumerable:!0,configurable:!0,value:a}})};var la="closure_listenable_"+(1E6*Math.random()|0),ma=0;var na=function(a,b,c,d,e){this.e=a;this.proxy=null;this.src=b;this.type=c;this.f=!!d;this.g=e;this.key=++ma;this.removed=this.h=!1},oa=function(a){a.removed=!0;a.e=null;a.proxy=null;a.src=null;a.g=null};var Q=function(a){this.src=a;this.c={};this.i=0};Q.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.c[f];a||(a=this.c[f]=[],this.i++);var k;t:{for(k=0;k<a.length;++k){var h=a[k];if(!h.removed&&h.e==b&&h.f==!!d&&h.g==e)break t}k=-1}-1<k?(b=a[k],c||(b.h=!1)):(b=new na(b,this.src,f,!!d,e),b.h=c,a.push(b));return b};var pa=function(a,b){var c=b.type;if(c in a.c){var d=a.c[c],e=fa(d,b),f;if(f=0<=e)B(null!=d.length),C.splice.call(d,e,1);f&&(oa(b),0==a.c[c].length&&(delete a.c[c],a.i--))}};var R="closure_lm_"+(1E6*Math.random()|0),S={},qa=0,ra=function(a,b,c,d,e){if("array"==m(b))for(var f=0;f<b.length;f++)ra(a,b[f],c,d,e);else if(c=sa(c),a&&a[la])a.listen(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,k=T(a);k||(a[R]=k=new Q(a));c=k.add(b,c,!1,d,e);c.proxy||(d=ta(),c.proxy=d,d.src=a,d.e=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(ua(b.toString()),d),qa++)}},ta=function(){var a=va,b=ja?function(c){return a.call(b.src,b.e,c)}:function(c){c=
a.call(b.src,b.e,c);if(!c)return c};return b},ua=function(a){return a in S?S[a]:S[a]="on"+a},ya=function(a,b,c,d){var e=!0;if(a=T(a))if(b=a.c[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.f==c&&!f.removed&&(f=xa(f,d),e=e&&!1!==f)}return e},xa=function(a,b){var c=a.e,d=a.g||a.src;if(a.h&&"number"!=typeof a&&a&&!a.removed){var e=a.src;if(e&&e[la])pa(e.F,a);else{var f=a.type,k=a.proxy;e.removeEventListener?e.removeEventListener(f,k,a.f):e.detachEvent&&e.detachEvent(ua(f),k);qa--;
(f=T(e))?(pa(f,a),0==f.i&&(f.src=null,e[R]=null)):oa(a)}}return c.call(d,b)},va=function(a,b){if(a.removed)return!0;if(!ja){var c=b||l("window.event"),d=new P(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){t:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break t}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;!d.p&&0<=h;h--){d.currentTarget=c[h];var w=ya(c[h],f,!0,d),e=e&&w}for(h=0;!d.p&&h<c.length;h++)d.currentTarget=
c[h],w=ya(c[h],f,!1,d),e=e&&w}return e}return xa(a,new P(b,this))},T=function(a){a=a[R];return a instanceof Q?a:null},U="__closure_events_fn_"+(1E9*Math.random()>>>0),sa=function(a){B(a,"Listener can not be null.");if("function"==m(a))return a;B(a.handleEvent,"An object listener must have handleEvent method.");a[U]||(a[U]=function(b){return a.handleEvent(b)});return a[U]};var u=function(){if("function"!=m(this.n))throw"Custom element must be registered with ci.common.CustomElement.register.";return new this.n};p(u,HTMLElement);var za=u,V=["ci","ytclosebutton","YTCloseButton"],W=g;V[0]in W||!W.execScript||W.execScript("var "+V[0]);for(var X;V.length&&(X=V.shift());){var Y;if(Y=!V.length)Y=void 0!==za;Y?W[X]=za:W=W[X]?W[X]:W[X]={}}u.l="close";u.CLOSE=u.l;u.C="ci-ytclosebutton";
u.m={af:"Maak advertensie toe",am:"\u12a0\u12f1\u1295 \u12dd\u130b",ar:"\u0625\u063a\u0644\u0627\u0642 \u0627\u0644\u0625\u0639\u0644\u0627\u0646",bg:"\u0417\u0430\u0442\u0432\u0430\u0440\u044f\u043d\u0435 \u043d\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u0430\u0442\u0430",bn:"\u09ac\u09bf\u099c\u09cd\u099e\u09be\u09aa\u09a8 \u09ac\u09a8\u09cd\u09a7 \u0995\u09b0\u09c1\u09a8",ca:"Tanca l'anunci",cs:"Zav\u0159\u00edt reklamu",da:"Luk annoncen",de:"Anzeige schlie\u00dfen",el:"\u039a\u03bb\u03b5\u03af\u03c3\u03b9\u03bc\u03bf \u03b4\u03b9\u03b1\u03c6\u03ae\u03bc\u03b9\u03c3\u03b7\u03c2",
en:"Close Ad",es:"Cerrar anuncio",et:"Reklaami sulgemine",eu:"Itxi iragarkia",fa:"\u0628\u0633\u062a\u0646 \u0622\u06af\u0647\u06cc",fi:"Sulje mainos",fil:"Isara ang ad",fr:"Fermer l'annonce",gl:"Pechar anuncio",gsw:"Schliessen",gu:"\u0a9c\u0abe\u0ab9\u0ac7\u0ab0\u0abe\u0aa4 \u0aac\u0a82\u0aa7 \u0a95\u0ab0\u0acb",hi:"\u0935\u093f\u091c\u094d\u091e\u093e\u092a\u0928 \u092c\u0902\u0926 \u0915\u0930\u0947\u0902",hr:"Zatvori oglas",hu:"Hirdet\u00e9s bez\u00e1r\u00e1sa",id:"Tutup iklan",is:"Loka augl\u00fdsingu",
it:"Chiudi",iw:"\u05e1\u05d2\u05d5\u05e8 \u05de\u05d5\u05d3\u05e2\u05d4",ja:"\u5e83\u544a\u3092\u9589\u3058\u308b",kn:"\u0c9c\u0cbe\u0cb9\u0cc0\u0cb0\u0cbe\u0ca4\u0cc1 \u0cae\u0cc1\u0c9a\u0ccd\u0c9a\u0cbf",ko:"\uad11\uace0 \ub2eb\uae30",lt:"U\u017edaryti skelbim\u0105",lv:"Aizv\u0113rt rekl\u0101mu",ml:"\u0d2a\u0d30\u0d38\u0d4d\u0d2f\u0d02 \u0d05\u0d1f\u0d2f\u0d4d\u0d15\u0d4d\u0d15\u0d41\u0d15",mr:"\u091c\u093e\u0939\u093f\u0930\u093e\u0924 \u092c\u0902\u0926 \u0915\u0930\u093e",ms:"Tutup iklan",
nl:"Advertentie sluiten",no:"Lukk annonsen",pl:"Zamknij reklam\u0119",pt:"Fechar an\u00fancio",ro:"\u00cenchide\u0163i anun\u0163ul",ru:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435",sk:"Zavrie\u0165 reklamu",sl:"Zapri oglas",sr:"\u0417\u0430\u0442\u0432\u043e\u0440\u0438 \u043e\u0433\u043b\u0430\u0441",sv:"St\u00e4ng annons",sw:"Funga Tangazo",ta:"\u0bb5\u0bbf\u0bb3\u0bae\u0bcd\u0baa\u0bb0\u0ba4\u0bcd\u0ba4\u0bc8 \u0bae\u0bc2\u0b9f\u0bc1",
te:"\u0c2a\u0c4d\u0c30\u0c15\u0c1f\u0c28\u0c28\u0c41 \u0c2e\u0c42\u0c38\u0c3f\u0c35\u0c47\u0c2f\u0c3f",th:"\u0e1b\u0e34\u0e14\u0e42\u0e06\u0e29\u0e13\u0e32",tr:"Reklam\u0131 kapat",uk:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438 \u043e\u0433\u043e\u043b\u043e\u0448\u0435\u043d\u043d\u044f",ur:"\u0627\u0634\u062a\u06c1\u0627\u0631 \u0628\u0646\u062f \u06a9\u0631\u06cc\u06ba",vi:"\u0110\u00f3ng qu\u1ea3ng c\u00e1o",zh:"\u95dc\u9589\u5ee3\u544a","zh-cn":"\u5173\u95ed\u5e7f\u544a",zu:"Vala isikhangiso"};
u.B="creative2yt_requestClose";u.A="masthead.collapse_ad";u.r="https://www.gstatic.com/ads/ci/ytclosebutton/1/";u.s="klg";var v={H:"lang",I:"shadow",J:"theme"};
u.prototype.createdCallback=function(){this.a=document.createElement("span");this.a.style.position="relative";this.a.style.bottom="9px";this.a.style.fontFamily="arial, sans-serif";this.a.style.fontSize="11px";this.a.style.letterSpacing=".4px";this.a.style.textDecoration="underline";this.appendChild(this.a);this.d=document.createElement("img");this.d.width=25;this.d.height=25;this.appendChild(this.d);this.style.position="absolute";this.style.top="0";this.style.right="0";this.style.left="auto";this.style.bottom=
"auto";this.style.width="auto";this.style.height="auto";this.style.cursor="pointer";this.style.display="none";ra(this,"click",this.t,!1,this);ea(this);window.Enabler&&!window.Enabler.isInitialized()?window.Enabler.callAfterInitialized(function(){Aa(this);this.style.display="block"}.bind(this)):this.style.display="block"};u.prototype.createdCallback=u.prototype.createdCallback;
u.prototype.o=function(a){switch(a){case "lang":Aa(this);break;case "shadow":case "theme":a=(a=this.getAttribute("shadow"))&&"true"==a.toLowerCase()||""==a||"1"==a;var b="#fff",c="0",d=u.r,e=a?"_shadow.png":".png";switch(this.getAttribute("theme")){case "white":b="#000";c="1px";this.a.style.color="#fff";this.d.src=d+"close_white"+e;break;case "gray":this.a.style.color="#999";this.d.src=d+"close_gray"+e;break;default:this.a.style.color="#000",this.d.src=d+"close_black"+e}this.a.style.textShadow=a?
"0 "+c+" 6px "+b:""}};u.prototype.attributeChangedCallback=u.prototype.o;u.prototype.q=function(){var a=u.l,b;b=document.createEvent("Event");b.initEvent(a,!0,!0);this.dispatchEvent(b);window.Enabler&&window.Enabler.reportManualClose();Ba(this);window.Enabler&&window.Enabler.close();(a=document.body)&&a.parentNode&&a.parentNode.removeChild(a)};u.prototype.requestClose=u.prototype.q;
var Aa=function(a){var b;window.Enabler&&(b=window.Enabler.getParameter(u.s));var c=a.getAttribute("lang");b=Z(b)||Z(c)||Z("en");a.a.textContent=b;a.d.alt=b},Z=function(a){if(!a)return"";a=a.toLowerCase();return u.m[a]||u.m[a.split("-")[0]]},Ba=function(a,b){var c=b||window.parent;try{var d=l(u.A,c);d?d():c!=window.top&&Ba(a,c.parent);N(c.document.URL)}catch(e){c.postMessage(u.B,"*")}};u.prototype.t=function(){this.q()};var Ca=u.C;v&&da();u.prototype.setAttribute=HTMLElement.prototype.setAttribute;
u.prototype.getAttribute=HTMLElement.prototype.getAttribute;u.prototype.removeAttribute=HTMLElement.prototype.removeAttribute;var Da={prototype:u.prototype};u.prototype.D&&(Da["extends"]=u.prototype.D);u.prototype.n=document.register(Ca,Da);})();
