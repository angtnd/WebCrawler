__d("widget.canlash.imageloader",["common.js.nextTick"],function(a,c,d,b){var i=b("common.js.nextTick"),g=0;c.exports=function(b,f,c){function e(e){function k(){b.onload=b.onerror=null;try{delete window[c]}catch(e){}!--d&&!n&&(clearTimeout(o),f(a))}var b=e.img,c=e.id;e.status="loading";b.onload=function(){i(function(){a=a&&!0;e.status="loaded";k()})};b.onerror=function(){i(function(){a=!1;e.status="error";k()})};b.src=e.src}function k(){n=!0;f(!1)}var l,j,d,a,o,n;d=0;a=!0;n=!1;for(l in b)b.hasOwnProperty(l)&&
(j=b[l],"string"==typeof j&&(j=b[l]={src:j}),j&&j.src&&(d++,j.id="__img_"+l+ ++g,j.img=window[j.id]=new Image,e(j)));d?c&&(o=setTimeout(k,c)):f(a)};return d});
__d("widget.canlash.effect",[],function(a,c,d){return d={linear:function(b){return b},reverce:function(b){return 1-b},parabola:function(b){return Math.pow(b,2)},antiparabola:function(b){return 1-Math.pow(1-b,2)},sinoidal:function(b){return-Math.cos(b*Math.PI)/2+0.5},wobble:function(b){return-Math.cos(b*Math.PI*9*b)/2+0.5},spring:function(b){return 1-Math.cos(4.5*b*Math.PI)*Math.exp(6*-b)},shuttle:function(b){return 1-Math.abs(1-2*b)},percent:function(b,c,g){return(b+g)%c/c}}});
__d("widget.canlash.sprite",[],function(){function a(c){this.children=[];this.rotation=this.y=this.x=0;this.scale=1;c&&(this.paint=c)}a.prototype.draw=function(c,d){var b=this.children,i=b.length,g,a=this.x,f=this.y,h=this.rotation,e=this.scale;(a||f)&&c.translate(a,f);h&&c.rotate(h);1!==e&&c.scale(e,e);this.beforePaint(c,d);this.paint(c,d);for(g=0;g<i;g++)b[g].draw(c,d);this.afterPaint(c,d);1!==e&&(e=1/e,c.scale(e,e));h&&c.rotate(-h);(a||f)&&c.translate(-a,-f)};a.prototype.beforePaint=function(){};
a.prototype.paint=function(){};a.prototype.afterPaint=function(){};a.prototype.add=function(c,a){this.children.push(c);a&&(this[a]=c);return this};a.prototype.remove=function(c){for(var a=this.children,b=a.length;b--;)c===a[b]&&a.splice(b,1);return this};return a});
__d("widget.canlash.timeline",[],function(){function a(){this.animationHandler=0}var c,d,b=1E3/60;a.prototype.onenterframe=function(){};a.prototype.start=function(a){function g(){var e=+new Date;f.animationHandler=c(g);e-h>=a&&(f.onenterframe(e-d),h=e)}var d=+new Date,f=this,h=0,a=a||b;f.startTime=d;f.interval=a;f.stop();g()};a.prototype.restart=function(){function b(){var e=+new Date;a.animationHandler=c(b);e-d>=f&&(a.onenterframe(e-h),d=e)}var a=this,d=0,f,h;a.dur&&a.interval&&(f=a.interval,h=+new Date-
a.dur,a.startTime=h,a.stop(),b())};a.prototype.stop=function(){this.startTime&&(this.dur=+new Date-this.startTime);d(this.animationHandler)};c=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(a){return window.setTimeout(a,1E3/60)}}();d=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(a){window.clearTimeout(a)}}();
return a});
__d("widget.canlash.stage",["widget.canlash.sprite","widget.canlash.timeline"],function(a,c,d,b){function i(a,b,e,k){g.call(this,k);this.timeline=new m;a&&this.setContext(a,b,e)}var g=b("widget.canlash.sprite"),m=b("widget.canlash.timeline");i.prototype=new g;i.prototype.start=function(a){this.timeline.start(a);return this};i.prototype.restart=function(){this.timeline.restart();return this};i.prototype.stop=function(){this.timeline.stop();return this};i.prototype.setContext=function(a,b,e){var k=
this;k.context=a;k.width=b;k.height=e;k.timeline.onenterframe=function(e){k.draw(a,e)}};i.prototype.beforePaint=function(a){a.clearRect(0,0,this.width,this.height)};return i});
__d("common.js.animation",["widget.canlash.timeline","widget.canlash.imageloader"],function(a,c,d,b){function i(a){a&&a()}function g(){this.taskQueue=[];this.timeline=new m;this.state=h;this.index=0}var m=b("widget.canlash.timeline"),f=b("widget.canlash.imageloader"),h=0;g.prototype={loadImage:function(a){return this._add(function(b){f(a.slice(),b);a=null})},changePosition:function(a,b){var c=b.length,j=0,d=!1,f=this;return this._add(c?function(g,i){var h;j=i/f.interval|0;d=j>=c-1;j=Math.min(j,c-
1);h=b[j].split(" ");a.style.backgroundPosition=h[0]+"px "+h[1]+"px";d&&g()}:i,1)},changeSrc:function(a,b){var c=b.length,d=0,f=!1,g=this;return this._add(c?function(h,i){d=i/g.interval|0;f=d>=c-1;d=Math.min(d,c-1);a.src=b[d];f&&h()}:i,1)},then:function(a){return this._add(function(b){a();b()})},enterFrame:function(a){return this._add(a,1)},repeat:function(a){var b=this;return this._add(function(){var c;a?--a?(b.index--,b._next()):(c=b.taskQueue[b.index],b.index++,c.wait?setTimeout(function(){b._next()},
c.wait):b._next()):(b.index--,b._next())})},repeatForever:function(){return this.repeat()},start:function(a){if(1==this.state)return this;this.state=1;if(!this.taskQueue.length)return this;this.interval=a;this._next();return this},pause:function(){this.state=2;this.timeline.stop();return this},wait:function(a){this.taskQueue&&0<this.taskQueue.length&&(this.taskQueue[this.taskQueue.length-1].wait=a);return this},dispose:function(){this.taskQueue=null;this.timeline&&this.timeline.stop();this.timeline=
null;this.state=h},_add:function(a,b){this.taskQueue.push({task:a,type:b});return this},_next:function(){var a;this.taskQueue&&2!=this.state&&(this.index==this.taskQueue.length?this.dispose():(a=this.taskQueue[this.index],1==a.type?this._enterframe(a.task):this._excuteTask(a.task)))},_excuteTask:function(a){var b=this;a(function(){var a;b.taskQueue&&(a=b.taskQueue[b.index],b.index++,a.wait?setTimeout(function(){b._next()},a.wait):b._next())})},_enterframe:function(a){var b=this;this.timeline.onenterframe=
function(c){a(function(){var a;b.taskQueue&&(a=b.taskQueue[b.index],b.timeline.stop(),b.index++,a.wait?setTimeout(function(){b._next()},a.wait):b._next())},c)};this.timeline.start(this.interval)},constructor:g};return function(){return new g}});window.js_cabelHhvft&&window.js_cabelHhvft(!0);
