/*
 * Copyright 2015 Disney
 * All Rights Reserved
 *
 * Underscore.js 1.3.3
 * Copyright 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
 * MIT License
 *
 * Backbone.js 1.0.0
 * Copyright 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
 * MIT License
 */
(function(){function e(t,n,i){if(t===n)return 0!==t||1/t==1/n;if(null==t||null==n)return t===n;if(t._chain&&(t=t._wrapped),n._chain&&(n=n._wrapped),t.isEqual&&k.isFunction(t.isEqual))return t.isEqual(n);if(n.isEqual&&k.isFunction(n.isEqual))return n.isEqual(t);var r=c.call(t);if(r!=c.call(n))return!1;switch(r){case"[object String]":return t==String(n);case"[object Number]":return t!=+t?n!=+n:0==t?1/t==1/n:t==+n;case"[object Date]":case"[object Boolean]":return+t==+n;case"[object RegExp]":return t.source==n.source&&t.global==n.global&&t.multiline==n.multiline&&t.ignoreCase==n.ignoreCase}if("object"!=typeof t||"object"!=typeof n)return!1;for(var s=i.length;s--;)if(i[s]==t)return!0;i.push(t);var a=0,o=!0;if("[object Array]"==r){if(a=t.length,o=a==n.length)for(;a--&&(o=a in t==a in n&&e(t[a],n[a],i)););}else{if("constructor"in t!="constructor"in n||t.constructor!=n.constructor)return!1;for(var l in t)if(k.has(t,l)&&(a++,!(o=k.has(n,l)&&e(t[l],n[l],i))))break;if(o){for(l in n)if(k.has(n,l)&&!a--)break;o=!a}}return i.pop(),o}var t=this,n=t._,i={},r=Array.prototype,s=Object.prototype,a=Function.prototype,o=r.slice,l=r.unshift,c=s.toString,u=s.hasOwnProperty,d=r.forEach,p=r.map,f=r.reduce,h=r.reduceRight,m=r.filter,v=r.every,g=r.some,b=r.indexOf,y=r.lastIndexOf,_=Array.isArray,w=Object.keys,x=a.bind,k=function(e){return new O(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=k),exports._=k):t._=k,k.VERSION="1.3.3";var T=k.each=k.forEach=function(e,t,n){if(null!=e)if(d&&e.forEach===d)e.forEach(t,n);else if(e.length===+e.length){for(var r=0,s=e.length;s>r;r++)if(r in e&&t.call(n,e[r],r,e)===i)return}else for(var a in e)if(k.has(e,a)&&t.call(n,e[a],a,e)===i)return};k.map=k.collect=function(e,t,n){var i=[];return null==e?i:p&&e.map===p?e.map(t,n):(T(e,function(e,r,s){i[i.length]=t.call(n,e,r,s)}),e.length===+e.length&&(i.length=e.length),i)},k.reduce=k.foldl=k.inject=function(e,t,n,i){var r=arguments.length>2;if(null==e&&(e=[]),f&&e.reduce===f)return i&&(t=k.bind(t,i)),r?e.reduce(t,n):e.reduce(t);if(T(e,function(e,s,a){r?n=t.call(i,n,e,s,a):(n=e,r=!0)}),!r)throw new TypeError("Reduce of empty array with no initial value");return n},k.reduceRight=k.foldr=function(e,t,n,i){var r=arguments.length>2;if(null==e&&(e=[]),h&&e.reduceRight===h)return i&&(t=k.bind(t,i)),r?e.reduceRight(t,n):e.reduceRight(t);var s=k.toArray(e).reverse();return i&&!r&&(t=k.bind(t,i)),r?k.reduce(s,t,n,i):k.reduce(s,t)},k.find=k.detect=function(e,t,n){var i;return C(e,function(e,r,s){return t.call(n,e,r,s)?(i=e,!0):void 0}),i},k.filter=k.select=function(e,t,n){var i=[];return null==e?i:m&&e.filter===m?e.filter(t,n):(T(e,function(e,r,s){t.call(n,e,r,s)&&(i[i.length]=e)}),i)},k.reject=function(e,t,n){var i=[];return null==e?i:(T(e,function(e,r,s){t.call(n,e,r,s)||(i[i.length]=e)}),i)},k.every=k.all=function(e,t,n){var r=!0;return null==e?r:v&&e.every===v?e.every(t,n):(T(e,function(e,s,a){return(r=r&&t.call(n,e,s,a))?void 0:i}),!!r)};var C=k.some=k.any=function(e,t,n){t||(t=k.identity);var r=!1;return null==e?r:g&&e.some===g?e.some(t,n):(T(e,function(e,s,a){return r||(r=t.call(n,e,s,a))?i:void 0}),!!r)};k.include=k.contains=function(e,t){var n=!1;return null==e?n:b&&e.indexOf===b?-1!=e.indexOf(t):n=C(e,function(e){return e===t})},k.invoke=function(e,t){var n=o.call(arguments,2);return k.map(e,function(e){return(k.isFunction(t)?t||e:e[t]).apply(e,n)})},k.pluck=function(e,t){return k.map(e,function(e){return e[t]})},k.max=function(e,t,n){if(!t&&k.isArray(e)&&e[0]===+e[0])return Math.max.apply(Math,e);if(!t&&k.isEmpty(e))return-1/0;var i={computed:-1/0};return T(e,function(e,r,s){var a=t?t.call(n,e,r,s):e;a>=i.computed&&(i={value:e,computed:a})}),i.value},k.min=function(e,t,n){if(!t&&k.isArray(e)&&e[0]===+e[0])return Math.min.apply(Math,e);if(!t&&k.isEmpty(e))return 1/0;var i={computed:1/0};return T(e,function(e,r,s){var a=t?t.call(n,e,r,s):e;a<i.computed&&(i={value:e,computed:a})}),i.value},k.shuffle=function(e){var t,n=[];return T(e,function(e,i){t=Math.floor(Math.random()*(i+1)),n[i]=n[t],n[t]=e}),n},k.sortBy=function(e,t,n){var i=k.isFunction(t)?t:function(e){return e[t]};return k.pluck(k.map(e,function(e,t,r){return{value:e,criteria:i.call(n,e,t,r)}}).sort(function(e,t){var n=e.criteria,i=t.criteria;return void 0===n?1:void 0===i?-1:i>n?-1:n>i?1:0}),"value")},k.groupBy=function(e,t){var n={},i=k.isFunction(t)?t:function(e){return e[t]};return T(e,function(e,t){var r=i(e,t);(n[r]||(n[r]=[])).push(e)}),n},k.sortedIndex=function(e,t,n){n||(n=k.identity);for(var i=0,r=e.length;r>i;){var s=i+r>>1;n(e[s])<n(t)?i=s+1:r=s}return i},k.toArray=function(e){return e?k.isArray(e)?o.call(e):k.isArguments(e)?o.call(e):e.toArray&&k.isFunction(e.toArray)?e.toArray():k.values(e):[]},k.size=function(e){return k.isArray(e)?e.length:k.keys(e).length},k.first=k.head=k.take=function(e,t,n){return null==t||n?e[0]:o.call(e,0,t)},k.initial=function(e,t,n){return o.call(e,0,e.length-(null==t||n?1:t))},k.last=function(e,t,n){return null==t||n?e[e.length-1]:o.call(e,Math.max(e.length-t,0))},k.rest=k.tail=function(e,t,n){return o.call(e,null==t||n?1:t)},k.compact=function(e){return k.filter(e,function(e){return!!e})},k.flatten=function(e,t){return k.reduce(e,function(e,n){return k.isArray(n)?e.concat(t?n:k.flatten(n)):(e[e.length]=n,e)},[])},k.without=function(e){return k.difference(e,o.call(arguments,1))},k.uniq=k.unique=function(e,t,n){var i=n?k.map(e,n):e,r=[];return e.length<3&&(t=!0),k.reduce(i,function(n,i,s){return(t?k.last(n)===i&&n.length:k.include(n,i))||(n.push(i),r.push(e[s])),n},[]),r},k.union=function(){return k.uniq(k.flatten(arguments,!0))},k.intersection=k.intersect=function(e){var t=o.call(arguments,1);return k.filter(k.uniq(e),function(e){return k.every(t,function(t){return k.indexOf(t,e)>=0})})},k.difference=function(e){var t=k.flatten(o.call(arguments,1),!0);return k.filter(e,function(e){return!k.include(t,e)})},k.zip=function(){for(var e=o.call(arguments),t=k.max(k.pluck(e,"length")),n=new Array(t),i=0;t>i;i++)n[i]=k.pluck(e,""+i);return n},k.indexOf=function(e,t,n){if(null==e)return-1;var i,r;if(n)return i=k.sortedIndex(e,t),e[i]===t?i:-1;if(b&&e.indexOf===b)return e.indexOf(t);for(i=0,r=e.length;r>i;i++)if(i in e&&e[i]===t)return i;return-1},k.lastIndexOf=function(e,t){if(null==e)return-1;if(y&&e.lastIndexOf===y)return e.lastIndexOf(t);for(var n=e.length;n--;)if(n in e&&e[n]===t)return n;return-1},k.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;for(var i=Math.max(Math.ceil((t-e)/n),0),r=0,s=new Array(i);i>r;)s[r++]=e,e+=n;return s};var E=function(){};k.bind=function(e,t){var n,i;if(e.bind===x&&x)return x.apply(e,o.call(arguments,1));if(!k.isFunction(e))throw new TypeError;return i=o.call(arguments,2),n=function(){if(!(this instanceof n))return e.apply(t,i.concat(o.call(arguments)));E.prototype=e.prototype;var r=new E,s=e.apply(r,i.concat(o.call(arguments)));return Object(s)===s?s:r}},k.bindAll=function(e){var t=o.call(arguments,1);return 0==t.length&&(t=k.functions(e)),T(t,function(t){e[t]=k.bind(e[t],e)}),e},k.memoize=function(e,t){var n={};return t||(t=k.identity),function(){var i=t.apply(this,arguments);return k.has(n,i)?n[i]:n[i]=e.apply(this,arguments)}},k.delay=function(e,t){var n=o.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},k.defer=function(e){return k.delay.apply(k,[e,1].concat(o.call(arguments,1)))},k.throttle=function(e,t){var n,i,r,s,a,o,l=k.debounce(function(){a=s=!1},t);return function(){n=this,i=arguments;var c=function(){r=null,a&&e.apply(n,i),l()};return r||(r=setTimeout(c,t)),s?a=!0:o=e.apply(n,i),l(),s=!0,o}},k.debounce=function(e,t,n){var i;return function(){var r=this,s=arguments,a=function(){i=null,n||e.apply(r,s)};n&&!i&&e.apply(r,s),clearTimeout(i),i=setTimeout(a,t)}},k.once=function(e){var t,n=!1;return function(){return n?t:(n=!0,t=e.apply(this,arguments))}},k.wrap=function(e,t){return function(){var n=[e].concat(o.call(arguments,0));return t.apply(this,n)}},k.compose=function(){var e=arguments;return function(){for(var t=arguments,n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},k.after=function(e,t){return 0>=e?t():function(){return--e<1?t.apply(this,arguments):void 0}},k.keys=w||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)k.has(e,n)&&(t[t.length]=n);return t},k.values=function(e){return k.map(e,k.identity)},k.functions=k.methods=function(e){var t=[];for(var n in e)k.isFunction(e[n])&&t.push(n);return t.sort()},k.extend=function(e){return T(o.call(arguments,1),function(t){for(var n in t)e[n]=t[n]}),e},k.pick=function(e){var t={};return T(k.flatten(o.call(arguments,1)),function(n){n in e&&(t[n]=e[n])}),t},k.defaults=function(e){return T(o.call(arguments,1),function(t){for(var n in t)null==e[n]&&(e[n]=t[n])}),e},k.clone=function(e){return k.isObject(e)?k.isArray(e)?e.slice():k.extend({},e):e},k.tap=function(e,t){return t(e),e},k.isEqual=function(t,n){return e(t,n,[])},k.isEmpty=function(e){if(null==e)return!0;if(k.isArray(e)||k.isString(e))return 0===e.length;for(var t in e)if(k.has(e,t))return!1;return!0},k.isElement=function(e){return!(!e||1!=e.nodeType)},k.isArray=_||function(e){return"[object Array]"==c.call(e)},k.isObject=function(e){return e===Object(e)},k.isArguments=function(e){return"[object Arguments]"==c.call(e)},k.isArguments(arguments)||(k.isArguments=function(e){return!(!e||!k.has(e,"callee"))}),k.isFunction=function(e){return"[object Function]"==c.call(e)},k.isString=function(e){return"[object String]"==c.call(e)},k.isNumber=function(e){return"[object Number]"==c.call(e)},k.isFinite=function(e){return k.isNumber(e)&&isFinite(e)},k.isNaN=function(e){return e!==e},k.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==c.call(e)},k.isDate=function(e){return"[object Date]"==c.call(e)},k.isRegExp=function(e){return"[object RegExp]"==c.call(e)},k.isNull=function(e){return null===e},k.isUndefined=function(e){return void 0===e},k.has=function(e,t){return u.call(e,t)},k.noConflict=function(){return t._=n,this},k.identity=function(e){return e},k.times=function(e,t,n){for(var i=0;e>i;i++)t.call(n,i)},k.escape=function(e){return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")},k.result=function(e,t){if(null==e)return null;var n=e[t];return k.isFunction(n)?n.call(e):n},k.mixin=function(e){T(k.functions(e),function(t){j(t,k[t]=e[t])})};var S=0;k.uniqueId=function(e){var t=S++;return e?e+t:t},k.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/.^/,M={"\\":"\\","'":"'",r:"\r",n:"\n",t:"	",u2028:"\u2028",u2029:"\u2029"};for(var L in M)M[M[L]]=L;var P=/\\|'|\r|\n|\t|\u2028|\u2029/g,D=/\\(\\|'|r|n|t|u2028|u2029)/g,N=function(e){return e.replace(D,function(e,t){return M[t]})};k.template=function(e,t,n){n=k.defaults(n||{},k.templateSettings);var i="__p+='"+e.replace(P,function(e){return"\\"+M[e]}).replace(n.escape||A,function(e,t){return"'+\n_.escape("+N(t)+")+\n'"}).replace(n.interpolate||A,function(e,t){return"'+\n("+N(t)+")+\n'"}).replace(n.evaluate||A,function(e,t){return"';\n"+N(t)+"\n;__p+='"})+"';\n";n.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+i+"return __p;\n";var r=new Function(n.variable||"obj","_",i);if(t)return r(t,k);var s=function(e){return r.call(this,e,k)};return s.source="function("+(n.variable||"obj")+"){\n"+i+"}",s},k.chain=function(e){return k(e).chain()};var O=function(e){this._wrapped=e};k.prototype=O.prototype;var I=function(e,t){return t?k(e).chain():e},j=function(e,t){O.prototype[e]=function(){var e=o.call(arguments);return l.call(e,this._wrapped),I(t.apply(k,e),this._chain)}};k.mixin(k),T(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];O.prototype[e]=function(){var n=this._wrapped;t.apply(n,arguments);var i=n.length;return"shift"!=e&&"splice"!=e||0!==i||delete n[0],I(n,this._chain)}}),T(["concat","join","slice"],function(e){var t=r[e];O.prototype[e]=function(){return I(t.apply(this._wrapped,arguments),this._chain)}}),O.prototype.chain=function(){return this._chain=!0,this},O.prototype.value=function(){return this._wrapped}}).call(this),function(){var e,t=this,n=t.Backbone,i=[],r=i.push,s=i.slice,a=i.splice;e="undefined"!=typeof exports?exports:t.Backbone={},e.VERSION="1.0.0";var o=t._;o||"undefined"==typeof require||(o=require("underscore")),e.$=t.jQuery||t.Zepto||t.ender||t.$,e.noConflict=function(){return t.Backbone=n,this},e.emulateHTTP=!1,e.emulateJSON=!1;var l=e.Events={on:function(e,t,n){if(!u(this,"on",e,[t,n])||!t)return this;this._events||(this._events={});var i=this._events[e]||(this._events[e]=[]);return i.push({callback:t,context:n,ctx:n||this}),this},once:function(e,t,n){if(!u(this,"once",e,[t,n])||!t)return this;var i=this,r=o.once(function(){i.off(e,r),t.apply(this,arguments)});return r._callback=t,this.on(e,r,n)},off:function(e,t,n){var i,r,s,a,l,c,d,p;if(!this._events||!u(this,"off",e,[t,n]))return this;if(!e&&!t&&!n)return this._events={},this;for(a=e?[e]:o.keys(this._events),l=0,c=a.length;c>l;l++)if(e=a[l],s=this._events[e]){if(this._events[e]=i=[],t||n)for(d=0,p=s.length;p>d;d++)r=s[d],(t&&t!==r.callback&&t!==r.callback._callback||n&&n!==r.context)&&i.push(r);i.length||delete this._events[e]}return this},trigger:function(e){if(!this._events)return this;var t=s.call(arguments,1);if(!u(this,"trigger",e,t))return this;var n=this._events[e],i=this._events.all;return n&&d(n,t),i&&d(i,arguments),this},stopListening:function(e,t,n){var i=this._listeners;if(!i)return this;var r=!t&&!n;"object"==typeof t&&(n=this),e&&((i={})[e._listenerId]=e);for(var s in i)i[s].off(t,n,this),r&&delete this._listeners[s];return this}},c=/\s+/,u=function(e,t,n,i){if(!n)return!0;if("object"==typeof n){for(var r in n)e[t].apply(e,[r,n[r]].concat(i));return!1}if(c.test(n)){for(var s=n.split(c),a=0,o=s.length;o>a;a++)e[t].apply(e,[s[a]].concat(i));return!1}return!0},d=function(e,t){var n,i=-1,r=e.length,s=t[0],a=t[1],o=t[2];switch(t.length){case 0:for(;++i<r;)(n=e[i]).callback.call(n.ctx);return;case 1:for(;++i<r;)(n=e[i]).callback.call(n.ctx,s);return;case 2:for(;++i<r;)(n=e[i]).callback.call(n.ctx,s,a);return;case 3:for(;++i<r;)(n=e[i]).callback.call(n.ctx,s,a,o);return;default:for(;++i<r;)(n=e[i]).callback.apply(n.ctx,t)}},p={listenTo:"on",listenToOnce:"once"};o.each(p,function(e,t){l[t]=function(t,n,i){var r=this._listeners||(this._listeners={}),s=t._listenerId||(t._listenerId=o.uniqueId("l"));return r[s]=t,"object"==typeof n&&(i=this),t[e](n,i,this),this}}),l.bind=l.on,l.unbind=l.off,o.extend(e,l);var f=e.Model=function(e,t){var n,i=e||{};t||(t={}),this.cid=o.uniqueId("c"),this.attributes={},o.extend(this,o.pick(t,h)),t.parse&&(i=this.parse(i,t)||{}),(n=o.result(this,"defaults"))&&(i=o.defaults({},i,n)),this.set(i,t),this.changed={},this.initialize.apply(this,arguments)},h=["url","urlRoot","collection"];o.extend(f.prototype,l,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return o.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(e){return this.attributes[e]},escape:function(e){return o.escape(this.get(e))},has:function(e){return null!=this.get(e)},set:function(e,t,n){var i,r,s,a,l,c,u,d;if(null==e)return this;if("object"==typeof e?(r=e,n=t):(r={})[e]=t,n||(n={}),!this._validate(r,n))return!1;s=n.unset,l=n.silent,a=[],c=this._changing,this._changing=!0,c||(this._previousAttributes=o.clone(this.attributes),this.changed={}),d=this.attributes,u=this._previousAttributes,this.idAttribute in r&&(this.id=r[this.idAttribute]);for(i in r)t=r[i],o.isEqual(d[i],t)||a.push(i),o.isEqual(u[i],t)?delete this.changed[i]:this.changed[i]=t,s?delete d[i]:d[i]=t;if(!l){a.length&&(this._pending=!0);for(var p=0,f=a.length;f>p;p++)this.trigger("change:"+a[p],this,d[a[p]],n)}if(c)return this;if(!l)for(;this._pending;)this._pending=!1,this.trigger("change",this,n);return this._pending=!1,this._changing=!1,this},unset:function(e,t){return this.set(e,void 0,o.extend({},t,{unset:!0}))},clear:function(e){var t={};for(var n in this.attributes)t[n]=void 0;return this.set(t,o.extend({},e,{unset:!0}))},hasChanged:function(e){return null==e?!o.isEmpty(this.changed):o.has(this.changed,e)},changedAttributes:function(e){if(!e)return this.hasChanged()?o.clone(this.changed):!1;var t,n=!1,i=this._changing?this._previousAttributes:this.attributes;for(var r in e)o.isEqual(i[r],t=e[r])||((n||(n={}))[r]=t);return n},previous:function(e){return null!=e&&this._previousAttributes?this._previousAttributes[e]:null},previousAttributes:function(){return o.clone(this._previousAttributes)},fetch:function(e){e=e?o.clone(e):{},void 0===e.parse&&(e.parse=!0);var t=this,n=e.success;return e.success=function(i){return t.set(t.parse(i,e),e)?(n&&n(t,i,e),void t.trigger("sync",t,i,e)):!1},R(this,e),this.sync("read",this,e)},save:function(e,t,n){var i,r,s,a=this.attributes;if(null==e||"object"==typeof e?(i=e,n=t):(i={})[e]=t,!(!i||n&&n.wait||this.set(i,n)))return!1;if(n=o.extend({validate:!0},n),!this._validate(i,n))return!1;i&&n.wait&&(this.attributes=o.extend({},a,i)),void 0===n.parse&&(n.parse=!0);var l=this,c=n.success;return n.success=function(e){l.attributes=a;var t=l.parse(e,n);return n.wait&&(t=o.extend(i||{},t)),o.isObject(t)&&!l.set(t,n)?!1:(c&&c(l,e,n),void l.trigger("sync",l,e,n))},R(this,n),r=this.isNew()?"create":n.patch?"patch":"update","patch"===r&&(n.attrs=i),s=this.sync(r,this,n),i&&n.wait&&(this.attributes=a),s},destroy:function(e){e=e?o.clone(e):{};var t=this,n=e.success,i=function(){t.trigger("destroy",t,t.collection,e)};if(e.success=function(r){(e.wait||t.isNew())&&i(),n&&n(t,r,e),t.isNew()||t.trigger("sync",t,r,e)},this.isNew())return e.success(),!1;R(this,e);var r=this.sync("delete",this,e);return e.wait||i(),r},url:function(){var e=o.result(this,"urlRoot")||o.result(this.collection,"url")||j();return this.isNew()?e:e+("/"===e.charAt(e.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(e){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},isValid:function(e){return this._validate({},o.extend(e||{},{validate:!0}))},_validate:function(e,t){if(!t.validate||!this.validate)return!0;e=o.extend({},this.attributes,e);var n=this.validationError=this.validate(e,t)||null;return n?(this.trigger("invalid",this,n,o.extend(t||{},{validationError:n})),!1):!0}});var m=["keys","values","pairs","invert","pick","omit"];o.each(m,function(e){f.prototype[e]=function(){var t=s.call(arguments);return t.unshift(this.attributes),o[e].apply(o,t)}});var v=e.Collection=function(e,t){t||(t={}),t.url&&(this.url=t.url),t.model&&(this.model=t.model),void 0!==t.comparator&&(this.comparator=t.comparator),this._reset(),this.initialize.apply(this,arguments),e&&this.reset(e,o.extend({silent:!0},t))},g={add:!0,remove:!0,merge:!0},b={add:!0,merge:!1,remove:!1};o.extend(v.prototype,l,{model:f,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return e.sync.apply(this,arguments)},add:function(e,t){return this.set(e,o.defaults(t||{},b))},remove:function(e,t){e=o.isArray(e)?e.slice():[e],t||(t={});var n,i,r,s;for(n=0,i=e.length;i>n;n++)s=this.get(e[n]),s&&(delete this._byId[s.id],delete this._byId[s.cid],r=this.indexOf(s),this.models.splice(r,1),this.length--,t.silent||(t.index=r,s.trigger("remove",s,this,t)),this._removeReference(s));return this},set:function(e,t){t=o.defaults(t||{},g),t.parse&&(e=this.parse(e,t)),o.isArray(e)||(e=e?[e]:[]);var n,i,s,l,c,u=t.at,d=this.comparator&&null==u&&t.sort!==!1,p=o.isString(this.comparator)?this.comparator:null,f=[],h=[],m={};for(n=0,i=e.length;i>n;n++)(s=this._prepareModel(e[n],t))&&((l=this.get(s))?(t.remove&&(m[l.cid]=!0),t.merge&&(l.set(s.attributes,t),d&&!c&&l.hasChanged(p)&&(c=!0))):t.add&&(f.push(s),s.on("all",this._onModelEvent,this),this._byId[s.cid]=s,null!=s.id&&(this._byId[s.id]=s)));if(t.remove){for(n=0,i=this.length;i>n;++n)m[(s=this.models[n]).cid]||h.push(s);h.length&&this.remove(h,t)}if(f.length&&(d&&(c=!0),this.length+=f.length,null!=u?a.apply(this.models,[u,0].concat(f)):r.apply(this.models,f)),c&&this.sort({silent:!0}),t.silent)return this;for(n=0,i=f.length;i>n;n++)(s=f[n]).trigger("add",s,this,t);return c&&this.trigger("sort",this,t),this},reset:function(e,t){t||(t={});for(var n=0,i=this.models.length;i>n;n++)this._removeReference(this.models[n]);return t.previousModels=this.models,this._reset(),this.add(e,o.extend({silent:!0},t)),t.silent||this.trigger("reset",this,t),this},push:function(e,t){return e=this._prepareModel(e,t),this.add(e,o.extend({at:this.length},t)),e},pop:function(e){var t=this.at(this.length-1);return this.remove(t,e),t},unshift:function(e,t){return e=this._prepareModel(e,t),this.add(e,o.extend({at:0},t)),e},shift:function(e){var t=this.at(0);return this.remove(t,e),t},slice:function(e,t){return this.models.slice(e,t)},get:function(e){return null==e?void 0:this._byId[null!=e.id?e.id:e.cid||e]},at:function(e){return this.models[e]},where:function(e,t){return o.isEmpty(e)?t?void 0:[]:this[t?"find":"filter"](function(t){for(var n in e)if(e[n]!==t.get(n))return!1;return!0})},findWhere:function(e){return this.where(e,!0)},sort:function(e){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return e||(e={}),o.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(o.bind(this.comparator,this)),e.silent||this.trigger("sort",this,e),this},sortedIndex:function(e,t,n){t||(t=this.comparator);var i=o.isFunction(t)?t:function(e){return e.get(t)};return o.sortedIndex(this.models,e,i,n)},pluck:function(e){return o.invoke(this.models,"get",e)},fetch:function(e){e=e?o.clone(e):{},void 0===e.parse&&(e.parse=!0);var t=e.success,n=this;return e.success=function(i){var r=e.reset?"reset":"set";n[r](i,e),t&&t(n,i,e),n.trigger("sync",n,i,e)},R(this,e),this.sync("read",this,e)},create:function(e,t){if(t=t?o.clone(t):{},!(e=this._prepareModel(e,t)))return!1;t.wait||this.add(e,t);var n=this,i=t.success;return t.success=function(r){t.wait&&n.add(e,t),i&&i(e,r,t)},e.save(null,t),e},parse:function(e){return e},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(e,t){if(e instanceof f)return e.collection||(e.collection=this),e;t||(t={}),t.collection=this;var n=new this.model(e,t);return n._validate(e,t)?n:(this.trigger("invalid",this,e,t),!1)},_removeReference:function(e){this===e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,n,i){("add"!==e&&"remove"!==e||n===this)&&("destroy"===e&&this.remove(t,i),t&&e==="change:"+t.idAttribute&&(delete this._byId[t.previous(t.idAttribute)],null!=t.id&&(this._byId[t.id]=t)),this.trigger.apply(this,arguments))}});var y=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];o.each(y,function(e){v.prototype[e]=function(){var t=s.call(arguments);return t.unshift(this.models),o[e].apply(o,t)}});var _=["groupBy","countBy","sortBy"];o.each(_,function(e){v.prototype[e]=function(t,n){var i=o.isFunction(t)?t:function(e){return e.get(t)};return o[e](this.models,i,n)}});var w=e.View=function(e){this.cid=o.uniqueId("view"),this._configure(e||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},x=/^(\S+)\s*(.*)$/,k=["model","collection","el","id","attributes","className","tagName","events"];o.extend(w.prototype,l,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(t,n){return this.$el&&this.undelegateEvents(),this.$el=t instanceof e.$?t:e.$(t),this.el=this.$el[0],n!==!1&&this.delegateEvents(),this},delegateEvents:function(e){if(!e&&!(e=o.result(this,"events")))return this;this.undelegateEvents();for(var t in e){var n=e[t];if(o.isFunction(n)||(n=this[e[t]]),n){var i=t.match(x),r=i[1],s=i[2];n=o.bind(n,this),r+=".delegateEvents"+this.cid,""===s?this.$el.on(r,n):this.$el.on(r,s,n)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_configure:function(e){this.options&&(e=o.extend({},o.result(this,"options"),e)),o.extend(this,o.pick(e,k)),this.options=e},_ensureElement:function(){if(this.el)this.setElement(o.result(this,"el"),!1);else{var t=o.extend({},o.result(this,"attributes"));this.id&&(t.id=o.result(this,"id")),this.className&&(t["class"]=o.result(this,"className"));var n=e.$("<"+o.result(this,"tagName")+">").attr(t);this.setElement(n,!1)}}}),e.sync=function(t,n,i){var r=T[t];o.defaults(i||(i={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var s={type:r,dataType:"json"};if(i.url||(s.url=o.result(n,"url")||j()),null!=i.data||!n||"create"!==t&&"update"!==t&&"patch"!==t||(s.contentType="application/json",s.data=JSON.stringify(i.attrs||n.toJSON(i))),i.emulateJSON&&(s.contentType="application/x-www-form-urlencoded",s.data=s.data?{model:s.data}:{}),i.emulateHTTP&&("PUT"===r||"DELETE"===r||"PATCH"===r)){s.type="POST",i.emulateJSON&&(s.data._method=r);var a=i.beforeSend;i.beforeSend=function(e){return e.setRequestHeader("X-HTTP-Method-Override",r),a?a.apply(this,arguments):void 0}}"GET"===s.type||i.emulateJSON||(s.processData=!1),"PATCH"!==s.type||!window.ActiveXObject||window.external&&window.external.msActiveXFilteringEnabled||(s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var l=i.xhr=e.ajax(o.extend(s,i));return n.trigger("request",n,l,i),l};var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var C=e.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},E=/\((.*?)\)/g,S=/(\(\?)?:\w+/g,A=/\*\w+/g,M=/[\-{}\[\]+?.,\\\^$|#\s]/g;o.extend(C.prototype,l,{initialize:function(){},route:function(t,n,i){o.isRegExp(t)||(t=this._routeToRegExp(t)),o.isFunction(n)&&(i=n,n=""),i||(i=this[n]);var r=this;return e.history.route(t,function(s){var a=r._extractParameters(t,s);i&&i.apply(r,a),r.trigger.apply(r,["route:"+n].concat(a)),r.trigger("route",n,a),e.history.trigger("route",r,n,a)}),this},navigate:function(t,n){return e.history.navigate(t,n),this},_bindRoutes:function(){if(this.routes){this.routes=o.result(this,"routes");for(var e,t=o.keys(this.routes);null!=(e=t.pop());)this.route(e,this.routes[e])}},_routeToRegExp:function(e){return e=e.replace(M,"\\$&").replace(E,"(?:$1)?").replace(S,function(e,t){return t?e:"([^/]+)"}).replace(A,"(.*?)"),new RegExp("^"+e+"$")},_extractParameters:function(e,t){var n=e.exec(t).slice(1);return o.map(n,function(e){return e?decodeURIComponent(e):null})}});var L=e.History=function(){this.handlers=[],o.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},P=/^[#\/]|\s+$/g,D=/^\/+|\/+$/g,N=/msie [\w.]+/,O=/\/$/;L.started=!1,o.extend(L.prototype,l,{interval:50,getHash:function(e){var t=(e||this).location.href.match(/#(.*)$/);return t?t[1]:""},getFragment:function(e,t){if(null==e)if(this._hasPushState||!this._wantsHashChange||t){e=this.location.pathname;var n=this.root.replace(O,"");e.indexOf(n)||(e=e.substr(n.length))}else e=this.getHash();return e.replace(P,"")},start:function(t){if(L.started)throw new Error("Backbone.history has already been started");L.started=!0,this.options=o.extend({},{root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var n=this.getFragment(),i=document.documentMode,r=N.exec(navigator.userAgent.toLowerCase())&&(!i||7>=i);this.root=("/"+this.root+"/").replace(D,"/"),r&&this._wantsHashChange&&(this.iframe=e.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(n)),this._hasPushState?e.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!r?e.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=n;var s=this.location,a=s.pathname.replace(/[^\/]$/,"$&/")===this.root;return this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!a?(this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0):(this._wantsPushState&&this._hasPushState&&a&&s.hash&&(this.fragment=this.getHash().replace(P,""),this.history.replaceState({},document.title,this.root+this.fragment+s.search)),this.options.silent?void 0:this.loadUrl())},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),L.started=!1},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(){var e=this.getFragment();return e===this.fragment&&this.iframe&&(e=this.getFragment(this.getHash(this.iframe))),e===this.fragment?!1:(this.iframe&&this.navigate(e),void(this.loadUrl()||this.loadUrl(this.getHash())))},loadUrl:function(e){var t=this.fragment=this.getFragment(e),n=o.any(this.handlers,function(e){return e.route.test(t)?(e.callback(t),!0):void 0});return n},navigate:function(e,t){if(!L.started)return!1;if(t&&t!==!0||(t={trigger:t}),e=this.getFragment(e||""),this.fragment!==e){this.fragment=e;var n=this.root+e;if(this._hasPushState)this.history[t.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);this._updateHash(this.location,e,t.replace),this.iframe&&e!==this.getFragment(this.getHash(this.iframe))&&(t.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,e,t.replace))}t.trigger&&this.loadUrl(e)}},_updateHash:function(e,t,n){if(n){var i=e.href.replace(/(javascript:|#).*$/,"");e.replace(i+"#"+t)}else e.hash="#"+t}}),e.history=new L;var I=function(e,t){var n,i=this;n=e&&o.has(e,"constructor")?e.constructor:function(){return i.apply(this,arguments)},o.extend(n,i,t);var r=function(){this.constructor=n};return r.prototype=i.prototype,n.prototype=new r,e&&o.extend(n.prototype,e),n.__super__=i.prototype,n};f.extend=v.extend=C.extend=w.extend=L.extend=I;var j=function(){throw new Error('A "url" property or function must be specified')},R=function(e,t){var n=t.error;t.error=function(i){n&&n(e,i,t),e.trigger("error",e,i,t)}}}.call(this),this.Disney=this.Disney||{},this.Disney.Style=this.Disney.Style||{},this.Disney.Style.breakpoints={midLow:480,midHigh:680,max:960,contentMax:1024,chromeMax:1025},this.Disney.Style.custom_breakpoints={juniorNavMin:420},function(e){"use strict";var t=e.Disney,n=e.Backbone,i=e._,r="change:watched",s=function(e,t){t?this.retain():this.release()},a=function(e){e!==r&&this.trigger.apply(this,arguments)},o=function(e){this.current=e||{}},l=function(){this.current=void 0},c={},u=["login","logout","refresh","updateProfile"],d=t.GuestContext=function(e){this._h=e||{},this.on("login",o),this.on("update",o),this.on("logout",l)};d.actions=u,i.extend(d.prototype,n.Events,{_r:0,retain:function(){0===this._r++&&this.trigger(r,this,!0)},release:function(){this._r>0&&0===--this._r&&this.trigger(r,this,!1)},watched:function(){return this._r>0},spawn:function(){var e=new d(c);return e._p=this,e.current=this.current,e.on(r,s,this),this.on("all",a,e),e},disown:function(e){e.off(r,s,this),this.off("all",a,e),e._r>0&&this.release()}});var p=function(){throw"Not implemented"};i.each(u,function(e){d.prototype[e]=function(){return(this._h[e]||p).apply(this,arguments)},c[e]=function(){return this._p[e].apply(this._p,arguments)}})}(this),function(e){"use strict";var t,n=e.Disney,i=e.jQuery,r={updateProfile:function(e,t,n){function i(t,r){"update"===t?e.resolve(r):"close"===t&&(e.reject(),n.off("all",i,n))}n.on("all",i,n),n.trigger("open"),t.updateProfile()},login:function(e,t,n){function i(){function i(t,n){"login"===t?e.resolve(n):"close"===t&&e.reject()}n.on("all",i,n),e.always(function(){n.off("all",i,n)}),n.trigger("open"),t.login()}var r=n.current;return r?n.refresh().then(function(t){e.resolve(t)},i):void i()},logout:function(e,t,n){function i(){e.resolve(),n.off("logout",i)
}n.current?(t.logout(),n.on("logout",i)):i()},refresh:function(e,t,n){function i(t){e.resolve(t)}n.on("login",i),e.always(function(){n.off("login",i)}),t.silentLogin({success:t.onLogin,error:function(){e.reject()}})}};i.each(r,function(e,n){var s="_did_"+e;r[e]=function(){var e=this,r=e[s];return r||(r=e[s]=t.pipe(function(t){return i.Deferred(function(i){n(i,t,e)})}).promise(),r.always(function(){delete e[s]})),r}}),n.initDid=function(s){var a,o=/^([^\/:]+:\/\/[^\/]+)\//.exec(e.location.href)||["",""];return t?null:(t=i.Deferred(),s=i.extend({env:"PROD",responderPage:o[1]+"/_did/"},s,{silentAutoLogin:!1}),i.each(["create","login","update","logout","close"],function(e,t){s["on"+t.substr(0,1).toUpperCase()+t.substr(1)]=function(e){var n;a.trigger(t,e&&{profile:e.profile,tokens:(n=e.token)&&{access:n.access_token,refresh:n.refresh_token}})}}),s.appId&&i(function(){var n,i=e.DisneyID;i?(n=e.did=new i,n.init(s),t.resolve(n)):t.reject()}),a=new n.GuestContext(r))}}(this),function(e,t){"use strict";function n(){}var i,r,s=e.Disney,a=e._,o=e.JSON,l=a.rest,c={query:n,provide:n,pub:n,sub:n};o&&e.postMessage&&(e.addEventListener?(i=function(t){e.addEventListener("message",t,!1)},r=function(t){e.removeEventListener("message",t,!1)}):e.attachEvent&&(i=function(t){e.attachEvent("onmessage",t)},r=function(t){e.detachEvent("onmessage",t)})),s.xdc=function(e,n,s,u){function d(t){var i=m+o.stringify([t].concat(l(arguments)));e.postMessage(i,n)}function p(e){var i,r,s=h.length;e.origin===n&&"string"==typeof e.data&&e.data.substr(0,s)===h&&(i=o.parse(e.data.substr(s)),"string"==typeof i[0]&&(r=a.has(f,i[0])&&f[i[0]])&&r.apply(t,l(i)))}var f,h="xdc "+s+" ",m="xdc "+(u||s)+" ",v={},g={},b={};return i?(i(p),f={call:function(e,n,i){function r(){if(o++)throw"reply already sent";d("reply",n,a.toArray(arguments))}var s=a.has(g,e)&&g[e],o=0,l=!1;if(s)try{s.apply(t,i.concat([r])),l=!0}finally{l||d("error",n,"unexpected remote exception")}else d("error",n,"undefined remote procedure: "+e)},reply:function(e,n){var i=a.has(v,e)&&v[e];i&&(delete v[e],i.apply(t,n))},notify:function(e,n){var i,r,s=a.has(b,e)&&b[e];if("number"==typeof n.length){if(s)for(i=0,r=s.length;r>i;++i)s[i].apply(t,n);"all"!==e&&f.notify("all",[e].concat(n))}},error:function(e,t){var n=a.has(v,e)&&v[e];if(n)throw delete v[e],""+t}},{query:function(e){var t=l(arguments),n=t[t.length-1],i=a.uniqueId();n&&(v[i]=n,d("call",e,i,a.initial(t)))},provide:function(e,t){g[e]=t},pub:function(e){d("notify",e,l(arguments))},sub:function(e,t){var n=b[e];n||(n=b[e]=[]),n.push(t)},close:function(){r(p)}}):c}}(this),function(e,t){"use strict";var n=e.Disney,i=e._;n.initGuestProvider=function(r,s){var a=n.xdc(e.parent,r,"guest");i.each(n.GuestContext.actions,function(e){a.provide(e,function(n){s[e]().then(function(e){n(e)},function(e){n(t,e||"failed")})})}),s.on("all",function(){a.pub.apply(a,i.toArray(arguments))}),a.query("ready",function(){})}}(this);