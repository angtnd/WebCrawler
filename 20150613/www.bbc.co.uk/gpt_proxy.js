// Copyright 2011 Google Inc. All Rights Reserved.
(function(){var l=this,m=function(a,b){for(var c=a.split("."),d=b||l,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d},aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==
c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},n=function(a){return"array"==aa(a)},ba=function(a){var b=aa(a);return"array"==b||"object"==b&&"number"==typeof a.length},p=function(a){return"string"==typeof a},ca=function(a){return"function"==aa(a)},da=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ea=function(a,
b,c){return a.call.apply(a.bind,arguments)},fa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return q.apply(null,arguments)},ga=function(a,b){var c=Array.prototype.slice.call(arguments,
1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},r=function(a,b){function c(){}c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.R=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};
Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return q.apply(null,c)}return q(this,a)};var ha=function(a){return/^[\s\xa0]*$/.test(a)},ia=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},qa=function(a){if(!ja.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ka,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(la,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ma,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(na,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(oa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(pa,"&#0;"));return a},ka=/&/g,la=/</g,
ma=/>/g,na=/"/g,oa=/'/g,pa=/\x00/g,ja=/[\x00&<>"']/,ra=function(a){return null==a?"":String(a)},sa=function(a,b){return a<b?-1:a>b?1:0},ta=2147483648*Math.random()|0;var t=Array.prototype,ua=t.indexOf?function(a,b,c){return t.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},va=t.forEach?function(a,b,c){t.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},xa=function(a){var b=wa;a:{for(var c=b.length,d=p(b)?b.split(""):b,e=0;e<c;e++)if(e in d&&a.call(void 0,d[e],
e,b)){a=e;break a}a=-1}return 0>a?null:p(b)?b.charAt(a):b[a]},ya=function(a){return t.concat.apply(t,arguments)},za=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var Aa=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)},Ba="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Ca=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ba.length;f++)c=Ba[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}},Da=function(a){var b=arguments.length;if(1==b&&n(arguments[0]))return Da.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};Da("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));var Ea="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""},Fa=function(){};Fa.prototype.next=function(){throw Ea;};Fa.prototype.j=function(){return this};var v=function(a,b){this.b={};this.a=[];this.g=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)u(this,arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof v)e=a.w(),d=a.o();else{var c=[],f=0;for(e in a)c[f++]=e;e=c;c=[];f=0;for(d in a)c[f++]=a[d];d=c}for(c=0;c<e.length;c++)u(this,e[c],d[c])}};v.prototype.o=function(){Ga(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};
v.prototype.w=function(){Ga(this);return this.a.concat()};var Ga=function(a){if(a.f!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];w(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.f!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],w(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}},x=function(a,b){return w(a.b,b)?a.b[b]:void 0},u=function(a,b,c){w(a.b,b)||(a.f++,a.a.push(b),a.g++);a.b[b]=c};
v.prototype.forEach=function(a,b){for(var c=this.w(),d=0;d<c.length;d++){var e=c[d];a.call(b,x(this,e),e,this)}};v.prototype.clone=function(){return new v(this)};v.prototype.j=function(a){Ga(this);var b=0,c=this.g,d=this,e=new Fa;e.next=function(){if(c!=d.g)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw Ea;var e=d.a[b++];return a?e:d.b[e]};return e};var w=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var y;a:{var Ha=l.navigator;if(Ha){var Ia=Ha.userAgent;if(Ia){y=Ia;break a}}y=""};var z=function(){return-1!=y.indexOf("Edge")};var Ja=-1!=y.indexOf("Opera")||-1!=y.indexOf("OPR"),A=-1!=y.indexOf("Edge")||-1!=y.indexOf("Trident")||-1!=y.indexOf("MSIE"),B=-1!=y.indexOf("Gecko")&&!(-1!=y.toLowerCase().indexOf("webkit")&&!z())&&!(-1!=y.indexOf("Trident")||-1!=y.indexOf("MSIE"))&&!z(),Ka=-1!=y.toLowerCase().indexOf("webkit")&&!z(),La=function(){var a=y;if(B)return/rv\:([^\);]+)(\)|;)/.exec(a);if(A&&z())return/Edge\/([\d\.]+)/.exec(a);if(A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ka)return/WebKit\/(\S+)/.exec(a)},Ma=
function(){var a=l.document;return a?a.documentMode:void 0},Na=function(){if(Ja&&l.opera){var a=l.opera.version;return ca(a)?a():a}var a="",b=La();b&&(a=b?b[1]:"");return A&&!z()&&(b=Ma(),b>parseFloat(a))?String(b):a}(),Oa={},C=function(a){var b;if(!(b=Oa[a])){b=0;for(var c=ia(String(Na)).split("."),d=ia(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",k=RegExp("(\\d*)(\\D*)","g"),bb=RegExp("(\\d*)(\\D*)","g");do{var P=k.exec(g)||["","",""],Q=bb.exec(h)||
["","",""];if(0==P[0].length&&0==Q[0].length)break;b=sa(0==P[1].length?0:parseInt(P[1],10),0==Q[1].length?0:parseInt(Q[1],10))||sa(0==P[2].length,0==Q[2].length)||sa(P[2],Q[2])}while(0==b)}b=Oa[a]=0<=b}return b},Pa=l.document,Qa=Ma(),Ra=!Pa||!A||!Qa&&z()?void 0:Qa||("CSS1Compat"==Pa.compatMode?parseInt(Na,10):5);var Sa=!A||A&&(z()||9<=Ra);!B&&!A||A&&A&&(z()||9<=Ra)||B&&C("1.9.1");A&&C("9");var Ua=function(a,b){Aa(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in Ta?a.setAttribute(Ta[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Ta={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},Wa=function(a,b,c){var d=arguments,e=document,
f=d[0],g=d[1];if(!Sa&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',qa(g.name),'"');if(g.type){f.push(' type="',qa(g.type),'"');var h={};Ca(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(p(g)?f.className=g:n(g)?f.className=g.join(" "):Ua(f,g));2<d.length&&Va(e,f,d);return f},Va=function(a,b,c){function d(c){c&&b.appendChild(p(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];!ba(f)||da(f)&&0<f.nodeType?d(f):va(Xa(f)?za(f):f,d)}},Xa=function(a){if(a&&
"number"==typeof a.length){if(da(a))return"function"==typeof a.item||"string"==typeof a.item;if(ca(a))return"function"==typeof a.item}return!1};var D=function(){this.j=this.j;this.g=this.g};D.prototype.j=!1;D.prototype.F=function(){this.j||(this.j=!0,this.a())};var Ya=function(a,b){a.j?b.call(void 0):(a.g||(a.g=[]),a.g.push(b))};D.prototype.a=function(){if(this.g)for(;this.g.length;)this.g.shift()()};var Za=function(a){a&&"function"==typeof a.F&&a.F()};var $a=function(a){$a[" "](a);return a};$a[" "]=function(){};var ab=!A||A&&(z()||9<=Ra),cb=A&&!C("9");!Ka||C("528");B&&C("1.9b")||A&&C("8")||Ja&&C("9.5")||Ka&&C("528");B&&!C("8")||A&&C("9");var E=function(a,b){this.type=a;this.a=this.target=b;this.L=!0};E.prototype.f=function(){this.L=!1};var F=function(a,b){E.call(this,a?a.type:"");this.b=this.state=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&B)try{$a(c.nodeName)}catch(d){}this.state=a.state;this.b=a;a.defaultPrevented&&this.f()}};r(F,E);F.prototype.f=function(){F.B.f.call(this);var a=this.b;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,cb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var db="closure_listenable_"+(1E6*Math.random()|0),G=function(a){return!(!a||!a[db])},eb=0;var fb=function(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.D=!!d;this.G=e;this.J=++eb;this.u=this.C=!1},gb=function(a){a.u=!0;a.listener=null;a.a=null;a.src=null;a.G=null};var hb=function(a){this.src=a;this.a={};this.b=0},jb=function(a,b,c,d,e,f){var g=b.toString();b=a.a[g];b||(b=a.a[g]=[],a.b++);var h=ib(b,c,e,f);-1<h?(a=b[h],d||(a.C=!1)):(a=new fb(c,a.src,g,!!e,f),a.C=d,b.push(a));return a},kb=function(a,b){var c=b.type;if(!(c in a.a))return!1;var d=a.a[c],e=ua(d,b),f;(f=0<=e)&&t.splice.call(d,e,1);f&&(gb(b),0==a.a[c].length&&(delete a.a[c],a.b--));return f},lb=function(a,b,c,d,e){a=a.a[b.toString()];b=-1;a&&(b=ib(a,c,d,e));return-1<b?a[b]:null},ib=function(a,b,c,
d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.u&&f.listener==b&&f.D==!!c&&f.G==d)return e}return-1};var mb="closure_lm_"+(1E6*Math.random()|0),nb={},ob=0,pb=function(a,b,c,d,e){if(n(b)){for(var f=0;f<b.length;f++)pb(a,b[f],c,d,e);return null}c=qb(c);return G(a)?a.f(b,c,d,e):rb(a,b,c,!1,d,e)},rb=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,h=H(a);h||(a[mb]=h=new hb(a));c=jb(h,b,c,d,e,f);if(c.a)return c;d=sb();c.a=d;d.src=a;d.listener=c;a.addEventListener?a.addEventListener(b.toString(),d,g):a.attachEvent(tb(b.toString()),d);ob++;return c},sb=function(){var a=ub,b=ab?function(c){return a.call(b.src,
b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},vb=function(a,b,c,d,e){if(n(b)){for(var f=0;f<b.length;f++)vb(a,b[f],c,d,e);return null}c=qb(c);return G(a)?jb(a.m,String(b),c,!0,d,e):rb(a,b,c,!0,d,e)},wb=function(a,b,c,d,e){if(n(b))for(var f=0;f<b.length;f++)wb(a,b[f],c,d,e);else c=qb(c),G(a)?a.I(b,c,d,e):a&&(a=H(a))&&(b=lb(a,b,c,!!d,e))&&I(b)},I=function(a){if("number"==typeof a||!a||a.u)return!1;var b=a.src;if(G(b))return kb(b.m,a);var c=a.type,d=a.a;b.removeEventListener?
b.removeEventListener(c,d,a.D):b.detachEvent&&b.detachEvent(tb(c),d);ob--;(c=H(b))?(kb(c,a),0==c.b&&(c.src=null,b[mb]=null)):gb(a);return!0},tb=function(a){return a in nb?nb[a]:nb[a]="on"+a},yb=function(a,b,c,d){var e=!0;if(a=H(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.D==c&&!f.u&&(f=xb(f,d),e=e&&!1!==f)}return e},xb=function(a,b){var c=a.listener,d=a.G||a.src;a.C&&I(a);return c.call(d,b)},ub=function(a,b){if(a.u)return!0;if(!ab){var c=b||m("window.event"),d=new F(c,
this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.a;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;0<=h;h--){d.a=c[h];var k=yb(c[h],f,!0,d),e=e&&k}for(h=0;h<c.length;h++)d.a=c[h],k=yb(c[h],f,!1,d),e=e&&k}return e}return xb(a,new F(b,this))},H=function(a){a=a[mb];return a instanceof hb?a:null},zb="__closure_events_fn_"+(1E9*Math.random()>>>0),qb=function(a){if(ca(a))return a;
a[zb]||(a[zb]=function(b){return a.handleEvent(b)});return a[zb]};var J=function(a){D.call(this);this.l=a;this.h={}};r(J,D);var Ab=[];J.prototype.f=function(a,b,c,d){n(b)||(b&&(Ab[0]=b.toString()),b=Ab);for(var e=0;e<b.length;e++){var f=pb(a,b[e],c||this.handleEvent,d||!1,this.l||this);if(!f)break;this.h[f.J]=f}return this};
J.prototype.I=function(a,b,c,d,e){if(n(b))for(var f=0;f<b.length;f++)this.I(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.l||this,c=qb(c),d=!!d,b=G(a)?lb(a.m,String(b),c,d,e):a?(a=H(a))?lb(a,b,c,d,e):null:null,b&&(I(b),delete this.h[b.J]);return this};J.prototype.a=function(){J.B.a.call(this);Aa(this.h,I);this.h={}};J.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};var Bb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,Db=function(a){if(Cb){Cb=!1;var b=l.location;if(b){var c=b.href;if(c&&(c=(c=Db(c)[3]||null)?decodeURI(c):c)&&c!=b.hostname)throw Cb=!0,Error();}}return a.match(Bb)},Cb=Ka,Eb=function(a,b){for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null,g=null;0<=e?(f=c[d].substring(0,e),g=c[d].substring(e+1)):f=c[d];b(f,g?decodeURIComponent(g.replace(/\+/g," ")):"")}};var K=function(a,b){this.g=this.l=this.a="";this.i=null;this.j=this.h="";this.b=!1;var c;a instanceof K?(this.b=void 0!==b?b:a.b,Fb(this,a.a),this.l=a.l,this.g=a.g,Gb(this,a.i),this.h=a.h,Hb(this,a.f.clone()),this.j=a.j):a&&(c=Db(String(a)))?(this.b=!!b,Fb(this,c[1]||"",!0),this.l=L(c[2]||""),this.g=L(c[3]||"",!0),Gb(this,c[4]),this.h=L(c[5]||"",!0),Hb(this,c[6]||"",!0),this.j=L(c[7]||"")):(this.b=!!b,this.f=new M(null,0,this.b))};
K.prototype.toString=function(){var a=[],b=this.a;b&&a.push(N(b,Ib,!0),":");if(b=this.g){a.push("//");var c=this.l;c&&a.push(N(c,Ib,!0),"@");a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));b=this.i;null!=b&&a.push(":",String(b))}if(b=this.h)this.g&&"/"!=b.charAt(0)&&a.push("/"),a.push(N(b,"/"==b.charAt(0)?Jb:Kb,!0));(b=this.f.toString())&&a.push("?",b);(b=this.j)&&a.push("#",N(b,Lb));return a.join("")};K.prototype.clone=function(){return new K(this)};
var Fb=function(a,b,c){a.a=c?L(b,!0):b;a.a&&(a.a=a.a.replace(/:$/,""))},Gb=function(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.i=b}else a.i=null},Hb=function(a,b,c){b instanceof M?(a.f=b,Mb(a.f,a.b)):(c||(b=N(b,Nb)),a.f=new M(b,0,a.b))},Ob=function(a){return a.j},L=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},N=function(a,b,c){return p(a)?(a=encodeURI(a).replace(b,Pb),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},
Pb=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Ib=/[#\/\?@]/g,Kb=/[\#\?:]/g,Jb=/[\#\?]/g,Nb=/[\#\?@]/g,Lb=/#/g,M=function(a,b,c){this.f=this.a=null;this.b=a||null;this.g=!!c},O=function(a){a.a||(a.a=new v,a.f=0,a.b&&Eb(a.b,function(b,c){var d=decodeURIComponent(b.replace(/\+/g," "));O(a);a.b=null;var d=R(a,d),e=x(a.a,d);e||u(a.a,d,e=[]);e.push(c);a.f++}))},Qb=function(a,b){O(a);b=R(a,b);if(w(a.a.b,b)){a.b=null;a.f-=x(a.a,b).length;var c=a.a;w(c.b,b)&&(delete c.b[b],
c.f--,c.g++,c.a.length>2*c.f&&Ga(c))}},Rb=function(a,b){O(a);b=R(a,b);return w(a.a.b,b)};M.prototype.w=function(){O(this);for(var a=this.a.o(),b=this.a.w(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};M.prototype.o=function(a){O(this);var b=[];if(p(a))Rb(this,a)&&(b=ya(b,x(this.a,R(this,a))));else{a=this.a.o();for(var c=0;c<a.length;c++)b=ya(b,a[c])}return b};
M.prototype.toString=function(){if(this.b)return this.b;if(!this.a)return"";for(var a=[],b=this.a.w(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.o(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.b=a.join("&")};M.prototype.clone=function(){var a=new M;a.b=this.b;this.a&&(a.a=this.a.clone(),a.f=this.f);return a};
var R=function(a,b){var c=String(b);a.g&&(c=c.toLowerCase());return c},Mb=function(a,b){b&&!a.g&&(O(a),a.b=null,a.a.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(Qb(this,b),Qb(this,e),0<a.length&&(this.b=null,u(this.a,R(this,e),za(a)),this.f+=a.length))},a));a.g=b};var S=function(){D.call(this);this.m=new hb(this);this.O=this;this.A=null};r(S,D);S.prototype[db]=!0;S.prototype.addEventListener=function(a,b,c,d){pb(this,a,b,c,d)};S.prototype.removeEventListener=function(a,b,c,d){wb(this,a,b,c,d)};
var Tb=function(a,b){var c,d=a.A;if(d)for(c=[];d;d=d.A)c.push(d);var d=a.O,e=b,f=e.type||e;if(p(e))e=new E(e,d);else if(e instanceof E)e.target=e.target||d;else{var g=e,e=new E(f,d);Ca(e,g)}var g=!0,h;if(c)for(var k=c.length-1;0<=k;k--)h=e.a=c[k],g=Sb(h,f,!0,e)&&g;h=e.a=d;g=Sb(h,f,!0,e)&&g;g=Sb(h,f,!1,e)&&g;if(c)for(k=0;k<c.length;k++)h=e.a=c[k],g=Sb(h,f,!1,e)&&g};
S.prototype.a=function(){S.B.a.call(this);if(this.m){var a=this.m,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,gb(d[e]);delete a.a[c];a.b--}}this.A=null};S.prototype.f=function(a,b,c,d){return jb(this.m,String(a),b,!1,c,d)};S.prototype.I=function(a,b,c,d){var e;e=this.m;a=String(a).toString();if(a in e.a){var f=e.a[a];b=ib(f,b,c,d);-1<b?(gb(f[b]),t.splice.call(f,b,1),0==f.length&&(delete e.a[a],e.b--),e=!0):e=!1}else e=!1;return e};
var Sb=function(a,b,c,d){b=a.m.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.u&&g.D==c){var h=g.listener,k=g.G||g.src;g.C&&kb(a.m,g);e=!1!==h.call(k,d)&&e}}return e&&0!=d.L};var Ub=function(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Vb=function(){},Wb=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(n(b)){var d=b;b=d.length;c.push("[");for(var e="",f=
0;f<b;f++)c.push(e),Wb(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Xb(d,c),c.push(":"),Wb(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Xb(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "function":break;default:throw Error("Unknown type: "+
typeof b);}}},Yb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Zb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Xb=function(a,b){b.push('"',a.replace(Zb,function(a){var b=Yb[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Yb[a]=b);return b}),'"')};var T=function(a){S.call(this);this.h=a||"goog_"+ta++;this.l=[]};r(T,S);T.prototype.i=!1;var ac=function(a){for(a.i=!0;0!=a.l.length;){var b=a.l.shift();$b(a,b.name,b.type,b.data)}};T.prototype.send=function(a,b,c){this.i?$b(this,a,b,c):this.l.push({name:a,type:b,data:c})};var U=function(a,b,c,d,e){E.call(this,a);this.s=b;this.H=c;this.M=d;this.K=e};r(U,E);U.prototype.toString=function(){return""};var bc=function(a){this.a=a},dc=function(){var a;a=cc;if(null==a.a){var b={},c=(new K(window.location.href)).f;if(Rb(c,"tcnfp"))try{var d=c.o("tcnfp"),b=Ub(0<d.length?String(d[0]):void 0)}catch(e){}a.a=new bc(b)}a=a.a;a:{if("disableExperiments"in a.a&&(a=a.a.disableExperiments,"boolean"==typeof a))break a;a=!1}return a};var cc=new function(){this.a=null};var ec=function(a,b){this.b=a;this.a=Math.min(Math.max(b||0,0),1)};var fc=function(){this.b=new v;this.a=null},gc=function(a){var b=Math.random(),c=0,d=a.b.o();va(d,function(a){c+=a.a},a);var e=1<c?c:1;a.a=null;for(var f=0,g=0;g<d.length;++g)if(f+=d[g].a,f/e>=b){a.a=d[g];break}};var ic=function(){this.b=null!=l.G_testRunner;this.a=new v;V(this,41351090,.01);V(this,41351091,.01);V(this,41351040,.05);V(this,41351041,.05);V(this,41351042,.05);V(this,41351043,.05);V(this,24819300,0);V(this,24819301,0);V(this,41351094,.05);V(this,41351095,.05);hc(this)},jc=null,V=function(a,b,c){ha(ra("GvnExternalLayer"))||isNaN(b)||0>=b||(b=new ec(b,c),c=x(a.a,"GvnExternalLayer"),null==c&&(c=new fc,u(a.a,"GvnExternalLayer",c)),u(c.b,b.b,b))},hc=function(a){dc()||va(a.a.o(),function(a){gc(a)},
a)},kc=function(){var a;jc||(jc=new ic);a=jc;if(a.b)return"";var b=[];va(a.a.o(),function(a){(a=a.a)&&b.push(a.b)});return b.sort().join(",")};var lc=function(a,b){if(!ca(a))if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:l.setTimeout(a,b||0)};var wa=["://secure-...imrworldwide.com/","://cdn.imrworldwide.com/","://aksecure.imrworldwide.com/","www.google.com/pagead/sul","www.youtube.com/pagead/sul"],mc=/\bocr\b/,nc=0,oc={},pc=function(a){return ha(ra(a))?!1:Ob(new K(a)).match(mc)?!0:null!=xa(function(b){return null!=a.match(b)})},qc=function(a){if(a){var b=Wa("iframe",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"});a=(9==b.nodeType?b:b.ownerDocument||b.document).body;var c,d=lc(function(){I(c);
b&&b.parentNode&&b.parentNode.removeChild(b)},15E3);c=vb(b,["load","error"],function(){lc(function(){l.clearTimeout(d);b&&b.parentNode&&b.parentNode.removeChild(b)},5E3)});a.appendChild(b)}},rc=function(a){if(a){var b=new Image,c=""+nc++;oc[c]=b;b.onload=b.onerror=function(){delete oc[c]};b.src=a}};var sc=function(a,b){return a.replace(/(\[|%5B)([a-zA-Z0-9_]+)(\]|%5D)/g,function(a,d,e){try{var f;f=e in b?b[e]:void 0;f=f.toString();if(!ha(ra(f)))return encodeURIComponent(f).replace(/%2C/g,",")}catch(g){}return a})};var tc="ad.doubleclick.net bid.g.doubleclick.net corp.google.com ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" ");var uc=function(a){try{a:{var b=a,c=void 0,d=b.length-12-2;if(!(-1==b.indexOf("PAGE_SIGNALS")||2048<=d||!c&&!window.Goog_AdSense_Lidar_getUrlSignalsArray))for(var c=c||window.Goog_AdSense_Lidar_getUrlSignalsArray(),d={},e=0;e<c.length;++e){d.PAGE_SIGNALS=c[e];var f=sc(b,d);if(2048>f.length){a=f;break a}}a=b}}catch(g){}try{var b=a,h;if(h="https:"==window.location.protocol)h=(new RegExp("^https?://([a-z0-9-]{1,63}\\.)*("+tc.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(b)||!1;if(h){var k=
new K(b);"https"==k.a?a=b:(Fb(k,"https"),a=k.toString())}else a=b;a&&(pc(a)?qc(a):rc(a))}catch(bb){}};var W=function(){this.b=.01>Math.random();this.a=Math.floor(4503599627370496*Math.random())};W.getInstance=function(){return W.a?W.a:W.a=new W};
var xc=function(){var a=W.getInstance();if(a.b){var b={lid:11},c=kc();ha(ra(c))||(b.e=c);var b=vc(a,b),d=new K("http://pagead2.googlesyndication.com/pagead/gen_204");Aa(b,function(a,b){var c=null!=a?"boolean"==typeof a?a?"t":"f":""+a:"",h=d.f,k=b;O(h);h.b=null;k=R(h,k);Rb(h,k)&&(h.f-=x(h.a,k).length);u(h.a,k,[c]);h.f++},a);a=wc();Fb(d,a.a);uc(d.toString())}},vc=function(a,b){b.id="";var c=wc();b.c=a.a;b.domain=c.g;return b},wc=function(){var a=window,b=document;return new K(a.parent==a?a.location.href:
b.referrer)};var X=function(a,b){T.call(this,b);this.v=a;this.b=null;this.N=new J(this);this.N.f(window,"message",this.P)};r(X,T);var yc=function(a){if(null==a||!p(a)||0!=a.lastIndexOf("ima://",0))return null;a=a.substr(6);try{return Ub(a)}catch(b){return null}},$b=function(a,b,c,d){null!=a.b&&null!=a.b.postMessage&&a.b.postMessage(zc(a,b,c,d),"*");null!=a.b&&null==a.b.postMessage&&xc()};X.prototype.a=function(){this.N.F();X.B.a.call(this)};
X.prototype.P=function(a){a=a.b;var b=yc(a.data);if(Ac(this,b)){if(null==this.b)this.b=a.source,this.i||ac(this);else if(this.b!=a.source)return;Ac(this,b)&&Tb(this,new U(b.name,b.type,b.data||{},b.sid,a.origin))}};var zc=function(a,b,c,d){var e={};e.name=b;e.type=c;null!=d&&(e.data=d);e.sid=a.h;e.channel=a.v;a=[];Wb(new Vb,e,a);return"ima://"+a.join("")},Ac=function(a,b){if(null==b)return!1;var c=b.channel;if(null==c||c!=a.v)return!1;c=b.sid;return null==c||"*"!=a.h&&c!=a.h?!1:!0};var Y=function(a,b){S.call(this);this.l=a;this.i=b;this.b={};this.h=new J(this);this.h.f(window,"message",this.v)};r(Y,S);Y.prototype.send=function(a){var b=a.b;this.b.hasOwnProperty(b)&&this.b[b].send(a.type,a.s,a.H)};var Cc=function(a,b,c,d){a.b.hasOwnProperty(b)||(c=new X(b,c),a.h.f(c,a.l,function(a){Tb(this,new Bc(a.type,a.s,a.H,a.M,a.K,b))}),c.b=d,ac(c),a.b[b]=c)};Y.prototype.a=function(){this.h.F();for(var a in this.b)Za(this.b[a]);Y.B.a.call(this)};
Y.prototype.v=function(a){a=a.b;var b=yc(a.data);if(null!=b){var c=b.channel;if(this.i&&!this.b.hasOwnProperty(c)){var d=b.sid;Cc(this,c,d,a.source);Tb(this,new Bc(b.name,b.type,b.data||{},d,a.origin,c))}}};var Bc=function(a,b,c,d,e,f){U.call(this,a,b,c,d,e);this.b=f};r(Bc,U);var Ec=function(){var a=m("google.ima.gptProxyInstance",window);if(null!=a)return a;J.call(this);this.i=new Y("gpt",!0);Ya(this,ga(Za,this.i));this.f(this.i,"gpt",this.v);this.b=null;Dc()||window.top===window||(this.b=new Y("gpt",!1),Ya(this,ga(Za,this.b)),this.f(this.b,"gpt",this.A))};r(Ec,J);var Dc=function(){return!!m("googletag.cmd",window)},Fc=function(){var a=m("googletag.console",window);return null!=a?a:null};
Ec.prototype.v=function(a){var b=a.K,c=Db("//imasdk.googleapis.com"),b=Db(b);if(c[3]==b[3]&&c[4]==b[4])if(null!=this.b)Cc(this.b,a.b,a.M,window.parent),null!=this.b&&this.b.send(a);else if(c=a.H,null!=c&&void 0!==c.scope){var b=c.scope,c=c.args,d;if("proxy"==b)c=a.s,"isGptPresent"==c?d=Dc():"isConsolePresent"==c&&(d=null!=Fc());else if(Dc())if("pubads"==b||"companionAds"==b){d=a.s;var e,f=window.googletag;if(null!=f&&null!=f[b]&&(f=f[b](),null!=f&&(d=f[d],null!=d)))try{e=d.apply(f,c)}catch(g){}d=
e}else if("console"==b){if(f=a.s,e=Fc(),null!=e&&(f=e[f],null!=f))try{f.apply(e,c)}catch(h){}}else if(null===b){e=a.s;d=window;if(0<=ua(["googleGetCompanionAdSlots","googleSetCompanionAdContents"],e)&&(e=d[e],null!=e))try{f=e.apply(d,c)}catch(k){}d=f}void 0!==d&&(a.H.returnValue=d,this.i.send(a))}};Ec.prototype.A=function(a){this.i.send(a)};var Gc=window,Hc=m("google.ima.gptProxyInstance",Gc);if(null==Hc){var Ic=Hc=new Ec,Jc=["google","ima","gptProxyInstance"],Z=Gc||l;Jc[0]in Z||!Z.execScript||Z.execScript("var "+Jc[0]);for(var Kc;Jc.length&&(Kc=Jc.shift());)Jc.length||void 0===Ic?Z[Kc]?Z=Z[Kc]:Z=Z[Kc]={}:Z[Kc]=Ic};})();
