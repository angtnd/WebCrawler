(function(f){var n,k,e;
var i,a,m,o,d={},c={},u={},r={},l=Object.prototype.hasOwnProperty,j=[].slice;
function v(w,x){return l.call(w,x)
}function p(z,x){var I,E,C,F,A,K,L,H,G,D,J=x&&x.split("/"),y=u.map,w=(y&&y["*"])||{};
if(z&&z.charAt(0)==="."){if(x){J=J.slice(0,J.length-1);
z=J.concat(z.split("/"));
for(H=0;
H<z.length;
H+=1){D=z[H];
if(D==="."){z.splice(H,1);
H-=1
}else{if(D===".."){if(H===1&&(z[2]===".."||z[0]==="..")){break
}else{if(H>0){z.splice(H-1,2);
H-=2
}}}}}z=z.join("/")
}else{if(z.indexOf("./")===0){z=z.substring(2)
}}}if((J||w)&&y){I=z.split("/");
for(H=I.length;
H>0;
H-=1){E=I.slice(0,H).join("/");
if(J){for(G=J.length;
G>0;
G-=1){C=y[J.slice(0,G).join("/")];
if(C){C=C[E];
if(C){F=C;
A=H;
break
}}}}if(F){break
}if(!K&&w&&w[E]){K=w[E];
L=H
}}if(!F&&K){F=K;
A=L
}if(F){I.splice(0,A,F);
z=I.join("/")
}}return z
}function t(w,x){return function(){return a.apply(f,j.call(arguments,0).concat([w,x]))
}
}function q(w){return function(x){return p(x,w)
}
}function g(w){return function(x){d[w]=x
}
}function h(x){if(v(c,x)){var w=c[x];
delete c[x];
r[x]=true;
i.apply(f,w)
}if(!v(d,x)&&!v(r,x)){throw new Error("No "+x)
}return d[x]
}function s(x){var y,w=x?x.indexOf("!"):-1;
if(w>-1){y=x.substring(0,w);
x=x.substring(w+1,x.length)
}return[y,x]
}m=function(x,w){var y,A=s(x),z=A[0];
x=A[1];
if(z){z=p(z,w);
y=h(z)
}if(z){if(y&&y.normalize){x=y.normalize(x,q(w))
}else{x=p(x,w)
}}else{x=p(x,w);
A=s(x);
z=A[0];
x=A[1];
if(z){y=h(z)
}}return{f:z?z+"!"+x:x,n:x,pr:z,p:y}
};
function b(w){return function(){return(u&&u.config&&u.config[w])||{}
}
}o={require:function(w){return t(w)
},exports:function(w){var x=d[w];
if(typeof x!=="undefined"){return x
}else{return(d[w]={})
}},module:function(w){return{id:w,uri:"",exports:d[w],config:b(w)}
}};
i=function(x,I,H,G){var A,F,C,w,z,D=[],y=typeof H,E;
G=G||x;
if(y==="undefined"||y==="function"){I=!I.length&&H.length?["require","exports","module"]:I;
for(z=0;
z<I.length;
z+=1){w=m(I[z],G);
F=w.f;
if(F==="require"){D[z]=o.require(x)
}else{if(F==="exports"){D[z]=o.exports(x);
E=true
}else{if(F==="module"){A=D[z]=o.module(x)
}else{if(v(d,F)||v(c,F)||v(r,F)){D[z]=h(F)
}else{if(w.p){w.p.load(w.n,t(G,true),g(F),{});
D[z]=d[F]
}else{throw new Error(x+" missing "+F)
}}}}}}C=H?H.apply(d[x],D):undefined;
if(x){if(A&&A.exports!==f&&A.exports!==d[x]){d[x]=A.exports
}else{if(C!==f||!E){d[x]=C
}}}}else{if(x){d[x]=H
}}};
n=k=a=function(z,A,w,x,y){if(typeof z==="string"){if(o[z]){return o[z](A)
}return h(m(z,A).f)
}else{if(!z.splice){u=z;
if(A.splice){z=A;
A=w;
w=null
}else{z=f
}}}A=A||function(){};
if(typeof w==="function"){w=x;
x=y
}if(x){i(f,z,A,w)
}else{setTimeout(function(){i(f,z,A,w)
},4)
}return a
};
a.config=function(w){u=w;
if(u.deps){a(u.deps,u.callback)
}return a
};
n._defined=d;
e=function(w,x,y){if(!x.splice){y=x;
x=[]
}if(!v(d,w)&&!v(c,w)){c[w]=[w,x,y]
}};
e.amd={jQuery:true};
B.atlas={requirejs:n,require:k,define:e}
}());
B.atlas.define("jQuery",function(){return jQuery
});
B.atlas.define("util-array",function(){function a(g){if(!Array.isArray){return Object.prototype.toString.call(g)==="[object Array]"
}return Array.isArray(g)
}function f(k,j){var h,g;
if(!a(k)){return null
}if(Array.prototype.find){return k.find(j)
}else{for(h=0,g=k.length;
h<g;
h++){if(j.call(k,k[h],h,k)){return k[h]
}}return null
}}function b(k,j){var h,g;
if(!a(k)){return -1
}if(Array.prototype.findIndex){return k.findIndex(j)
}else{for(h=0,g=k.length;
h<g;
h++){if(j.call(k,k[h],h,k)){return h
}}return -1
}}function e(l,k,h){var g,j;
if(!a(l)){return l
}if(l.forEach){l.forEach(function(m,i,n){k.call(h,m,i,n)
})
}else{for(g=0,j=l.length;
g<j;
++g){k.call(h,l[g],g,l)
}}return l
}function c(i,h){var g=b(i,function(j){return j===h
});
return(g>-1)?true:false
}function d(j,g,i){var h=[];
e(j,function(m,k,l){if(g(m,k,l)){h.push(m)
}});
return h
}return{each:e,find:f,findIndex:b,isArray:a,contains:c}
});
B.atlas.define("util-getset",function(){function a(b){this.set=function(c,d){if(c){b[c]=d;
return d
}return undefined
};
this.get=function(c){return c?b[c]:undefined
}
}return a
});
B.atlas.define("util-object",function(){var b=0;
function a(f){var e=typeof f;
return e==="function"||e==="object"&&!!f
}function d(k){var e=[].slice.call(arguments,0),j,g,f,h;
if(!a(k)){return k
}for(f=1,h=e.length;
f<h;
++f){j=e[f];
for(g in j){if(typeof j[g]!="undefined"){k[g]=j[g]
}}}return k
}function c(e){return(e)?e+(++b):(++b)+""
}return{extend:d,isObject:a,uniqueId:c}
});
B.atlas.define("util-xhr",function(){function a(b,d){var h=arguments,l=new XMLHttpRequest();
if(!("withCredentials" in l)){if(typeof XDomainRequest!=="undefined"){l=new XDomainRequest()
}else{return false
}}d=(h.length===1?h[0]:h[1]);
var f={url:(h.length===2&&(typeof b==="string")?b:"."),cache:true,data:{},headers:{},context:null,type:"GET",success:function(){},error:function(){},complete:function(){}};
d=$.extend(f,d||{});
var g={"application/json; charset=utf-8":"json"};
d.url+=d.url.indexOf("?")<0?"?":"";
for(var j in d.options){d.url+=d.options.hasOwnProperty(j)?"&"+j+"="+d.options[j]:""
}l.options=d.options;
if(!d.cache){d.url=d.url+(d.url.indexOf("?")?"&":"?")+"_="+Math.floor(Math.random()*9000000000)
}var k=function(o,p,n){var m="success";
n.success.call(n.context,o,m,p);
c(m,p,n)
};
var i=function(m,o,p,n){n.error.call(n.context,p,o,m);
c(o,p,n)
};
var c=function(m,o,n){n.complete.call(n.context,o,m)
};
l.onload=function(){var m,n;
var o=l.getResponseHeader("content-type");
n=g[o]||"json";
m=l.responseText;
try{if(n==="json"){m=JSON.parse(m)
}k(m,l,d);
return
}catch(p){i(null,"error",l,d);
return
}};
l.onerror=function(){i(null,"error",l,d);
return
};
l.open(d.type,d.url);
if(d.type==="POST"){d.headers=$.extend(d.headers,{})
}for(var e in d.headers){l.setRequestHeader(e,d.headers[e])
}l.send(d.data);
return l
}return{cors:a}
});
jQuery.extend(B.atlas,(function(j,b){var c,n,a=b.atlas,d=3,k={},l=b.env,m="/map_js_metrics",e=5000,i={metrics:[],actions:[]};
function h(q,p){var r,o=(window.performance&&window.performance.now)?window.performance.now():new Date().getTime();
if(c){clearTimeout(c)
}p=p||"";
r=(k[q])?k[q]:k[q]={count:0};
switch(p){case"start":r.start=o;
break;
case"lap":if(r.start){i.metrics.push([q,parseFloat(o-r.start).toFixed(d)]);
r.start=o
}break;
case"end":if(r.start){i.metrics.push([q,parseFloat(o-r.start).toFixed(d)]);
delete k[q]
}break;
default:i.actions.push([q,p])
}if(i.actions.length>0||i.metrics.length>0){c=setTimeout(f,e)
}}function f(){j.post(m,{sid:l.b_sid,pid:l.pageview_id,context:"atlas",data:JSON.stringify({metrics:i.metrics,actions:i.actions,experiments:g()})});
i={metrics:[],actions:[]}
}function g(){if(a.SUBSCRIPTIONS&&b.jst){n={};
j.each(a.SUBSCRIPTIONS,function(o,p){j.each(p,function(q,r){if(r.name&&r.touched===true){n[r.name]=b.jst[r.name]
}})
})
}return n
}return{log:(window.JSON)?h:function(){}}
}(jQuery,B)));
B.atlas.define("debug",["util-env"],function(b){function d(g,e){var f=e.get("boundingBox");
if(!f){return
}B.atlas.require(["polygons"],function(h){h.createPolygon.call(e,{clickable:false,fillColor:"#ff0000",fillOpacity:0.1,strokeColor:"#ff0000",strokeOpacity:0.5,strokeWeight:1,paths:[f.ne,[f.sw[0],f.ne[1]],f.sw,[f.ne[0],f.sw[1]]]});
console.debug("Original Bounding Box",f)
})
}function a(e){e.on("load",d,e)
}function c(){var e=this;
if(!b.get("debug")||!console){return
}e.logEvents(true);
a(e)
}return{init:c}
});
B.atlas.define("atlas",["jQuery","pubsub","geometry.point"],function(d,a,b,f){var e={center:[0,0],zoom:8};
function c(j){var n=false,m=j.provider||"provider-google",i={},h=j.modules||[],k=this;
d.extend(i,e,j.options||{});
k.set=function(o,p){if(o){i[o]=p;
return p
}return f
};
k.get=function(o){return o?i[o]:f
};
d.extend(k,new a(k));
k.trigger("pre-init");
k.$domNode=d(j.options.domNode);
function l(o){setTimeout(function(){n=true;
k.Interface=o;
k.trigger("ready",k)
},4)
}h.unshift(m,"center","options","analytics","goals");
h.push("debug");
B.atlas.require(h,function(s){var p,o,r,q=[].slice.call(arguments,1);
for(p=0,o=q.length;
p<o;
++p){r=q[p];
if(r&&r.init){r.init.call(k)
}else{d.extend(k,r)
}}k.trigger("api-before-load");
s.init(k,i,l)
});
k.done=function g(o){if(n){o.call(k)
}else{k.on("ready",o)
}};
k.set("offset",new b(0,0))
}return c
});
B.atlas.define("atlas-places",["pubsub","util-getset","util-object","util-array"],function(a,d,f,c){var e={};
function b(i,h){var j;
j=document.createElement("div");
j.className="places-results";
i.appendChild(j);
h.set("resultsNode",j);
j=document.createElement("div");
j.className="places-attribution";
i.appendChild(j);
h.set("attributionNode",j)
}function g(j){var k=this,l=j.provider||"provider-places",i=j.modules||[],h={};
f.extend(h,e,j.options);
f.extend(k,d.call(k,h));
f.extend(k,a.call(k));
if(!j.options||!j.options.domNode){return
}k.trigger("pre-init");
k.initialize(l,i,h)
}g.prototype.initialize=function(m,i,h){var k=this,j=k.get("isInitialized"),l=this.get("domNode");
if(j){return false
}b(l,k);
i.unshift(m);
B.atlas.require(i,function(n){c.each([].slice.call(arguments,1),function(o){if(o&&o.init){o.init.call(k)
}else{if(o){f.extend(k,o)
}}});
k.trigger("api-before-load");
n.init(k,h,function(o){setTimeout(function(){k.set("hasLoaded",true);
k.Interface=o;
k.trigger("ready",k)
},4)
})
});
k.set("isInitialized",true)
};
g.prototype.done=function(h){if(this.get("hasLoaded")){h.call(this)
}else{this.on("ready",h)
}};
return g
});
B.atlas.define("pubsub",["jQuery"],function(b){var c;
c={API_BEFORE_LOAD:"api-before-load",API_LOAD:"api-load",BOUNDS_CHANGE:"bounds-change",CLOSE:"close",DRAG:"drag",DRAG_START:"drag-start",IDLE:"idle",IW_OPEN:"iw-open",IW_CLOSE:"iw-close",IW_BEFORE_GET:"iw-get-before",IW_GET_SUCCESS:"iw-get-success",IW_GET_FAIL:"iw-get-fail",LOAD:"load",MARKER_CLICK:"marker-click",MARKER_HOVER:"marker-hover",MARKER_OUT:"marker-out",MARKERS_BEFORE_GET:"markers-before-get",MARKERS_CREATE:"markers-create",MARKERS_GET:"markers-get",MARKERS_GET_FAIL:"markers-get-fail",MARKERS_SHOW:"markers-show",UFI_MARKER_SHOW:"ufi-marker-show",OFFSET_CHANGE:"offset-change",OPEN:"open",POLYGON_CLICK:"polygon-click",PRE_INIT:"pre-init",READY:"ready",RESIZE:"resize",TILES_LOAD:"tiles-load",ZOOM:"zoom"};
function a(d){var o=false,q=false,f=false,m={},n={};
function j(r){if(o){console.debug("Atlas event: "+r)
}}function h(u,t){var s=this,r=[];
t=t||null;
j(u);
if(m.hasOwnProperty(u)){b.each(m[u],function(v,w){w.handler.call(s,t,w.args,u);
if(w.once){r.push([u,w.handler])
}});
b.each(r,function(v,w){p(w[0],w[1])
})
}if(d){B.atlas.track(u,d.get("id"))
}if(n.hasOwnProperty(u)){b.each(n[u],function(v,w){w.handler.call(s,t,w.args,u)
})
}}function i(s,u,r,t){s=(s&&typeof s==="string")?[s]:s;
b.each(s,function(w,v){if(t){n[v]=n[v]||[];
n[v].push({handler:u,args:r||null})
}else{m[v]=m[v]||[];
m[v].push({handler:u,args:r||null})
}})
}function e(s,t,r){s=(s&&typeof s==="string")?[s]:s;
b.each(s,function(v,u){m[u]=m[u]||[];
m[u].push({handler:t,args:r||null,once:true})
})
}function p(r,s){if(m.hasOwnProperty(r)&&(!s||s===true)){m[r]=[]
}else{if(m.hasOwnProperty(r)){m[r]=b.grep(m[r],function(t){return t.handler!==s
})
}}}function g(r){return m[r]||[]
}function l(){var r=[];
b.each(m,function(s){r.push(s)
});
return r
}function k(r){o=r;
return o
}i([c.MARKERS_SHOW,c.TILES_LOAD],function(t,s,r){if(r===c.MARKERS_SHOW&&q&&!f){h(c.LOAD,d.get("id"))
}else{if(r===c.TILES_LOAD&&f&&!q){h(c.LOAD,d.get("id"))
}}f=(r===c.MARKERS_SHOW)?true:f;
q=(r===c.TILES_LOAD)?true:q
});
return{EVENTS:c,trigger:h,on:i,once:e,off:p,getSubscribers:g,getEvents:l,logEvents:k}
}return a
});
B.atlas.define("static-atlas",["jQuery","geo.view","util-object","pubsub","util-getset"],function(f,a,c,i,g){var e=["markers-ajax","icons-default","static-render"];
function b(m,k){var o=m.data("bbox"),j,n,l;
if(o){l=(o||"0,0,0,0").split(",");
k.setNorthEast([+l[2],+l[3]]);
k.setSouthWest([+l[0],+l[1]])
}else{j=m.data("center").split(",");
n=m.data("zoom");
k.extrapolate(j,n)
}}function h(k){var l=k.get("$domNode"),m=l.data("width")||l.width(),j=l.data("height")||l.height(),n={x:parseInt(l.data("offset-x")||0,10),y:parseInt(l.data("offset-y")||0,10)};
c.extend(k,new a(m-Math.abs(n.x),j-Math.abs(n.y)));
b(l,k);
k.set("offset",n);
k.set("bounds",k.bounds);
k.trigger("ready",self)
}function d(k){var j=this,l=[].concat(e,k.modules);
c.extend(k,{$domNode:f(k.domNode)});
c.extend(j,g.call(j,k),i.call(j));
B.atlas.require(l,function(){var m=m=[].slice.call(arguments,0);
c.extend.apply(j,[j].concat(m));
h(j)
},null,true)
}d.prototype.done=function(j){j.call(this)
};
return d
});
jQuery.extend(B.atlas,(function(g,c){var b=null,h=[];
function i(){var j=c.atlas;
b={};
if(!j.SUBSCRIPTIONS||!c.jst){return
}g.each(j.SUBSCRIPTIONS,function(k,l){g.each(l,function(m,n){if(n.name&&n.cond&&c.jst.hasOwnProperty(n.name)){b[n.name]=parseInt(c.jst[n.name],10)
}})
})
}function a(j){if(!b){i()
}return(g.type(j)==="boolean")?j:(b.hasOwnProperty(j))?b[j]:false
}function d(j,k){var l=[],m=c.atlas;
if(!m.SUBSCRIPTIONS||!j||!m.SUBSCRIPTIONS.hasOwnProperty(j)){return false
}g.each(m.SUBSCRIPTIONS[j],function(n,o){if(a(o.name)!==false&&!o.touched&&k===o.instanceId){l.push(o.name);
o.touched=true
}});
if(l.length){c.track.exp(l.join(","))
}}function e(o){var k=c.atlas,n=false,m=(k.SUBSCRIPTIONS&&k.SUBSCRIPTIONS.templates)?k.SUBSCRIPTIONS.templates:[],l,j,p;
for(l=0,j=m.length;
l<j;
++l){p=m[l];
if(p.name===o&&a(p.name)!==false&&!p.touched){n=p.name;
p.touched=true;
c.track.exp(o);
break
}}return a(o)
}function f(l,k,j){h.push({hash:l,fn:k,variant:j})
}c.run("Xfgrwdtafew").onLoad(function(){g.each(h,function(j,l){var k=a(l.hash);
if((l.variant===k||l.variant===undefined)&&k!==false){l.fn()
}})
});
return{run:f,getVariant:a,track:d,trackInTemplate:e}
})(jQuery,B));
B.atlas.define("geo.bounds",["geo.latLng"],function(b){function c(d){return d instanceof b?d:new b(d[0]||0,d[1]||0)
}function a(d,e){if(d&&e){this.extend(d);
this.extend(e)
}}a.prototype={extend:function(g){var e=c(g),d=this.sw,f=this.ne;
if(!d){this.sw=e.clone();
this.ne=e.clone()
}else{this.sw.set(Math.min(d.lat,e.lat),Math.min(d.lng,e.lng));
this.ne.set(Math.max(f.lat,e.lat),Math.max(f.lng,e.lng))
}return this
},reset:function(){this.ne=this.sw=null
},getNorthEast:function(){return this.ne||new b(0,0)
},getSouthWest:function(){return this.sw||new b(0,0)
},setNorthEast:function(d){this.ne=c(d)
},setSouthWest:function(d){this.sw=c(d)
},getCenter:function(){return new b((this.sw.lat+this.ne.lat)/2,(this.sw.lng+this.ne.lng)/2)
},isEmpty:function(){return(!this.sw&&!this.ne)||(this.sw.toString()===this.ne.toString())
},equals:function(d){return d instanceof a?this.toString()===d.toString():false
},intersects:function(f){var d=this.sw,h=this.ne,e=f.sw,g=f.ne;
return g.lat>=d.lat||e.lat<=h.lat||g.lng>=d.lng||e.lng<=h.lng
},union:function(d){this.extend(d.getSouthWest());
this.extend(d.getNorthEast());
return this
},contains:function(f){var h,e,d,g;
if(f instanceof a){h=f.getNorthEast();
e=f.getSouthWest();
d=(e.lat>=this.sw.lat&&e.lng>=this.sw.lng&&h.lat<=this.ne.lat&&h.lng<=this.ne.lng)
}else{e=h=c(f);
g=Math.abs(this.ne.lng-this.sw.lng);
d=(e.lat>=this.sw.lat&&e.lat<=this.ne.lat&&((e.lng>=this.sw.lng&&e.lng<=this.sw.lng+g)||(e.lng<=this.sw.lng&&e.lng>=this.ne.lng-g)))
}return d
},toMOMString:function(){return[this.sw.lng,this.sw.lat,this.ne.lng,this.ne.lat].join(",")
},toString:function(){return["SW:",this.sw.toString(),",","NE:",this.ne.toString()].join(" ")
}};
return a
});
B.atlas.define("geo.latLng",function(){function a(c,b){var d;
if(typeof c==="string"&&c.indexOf(",")>0){d=c.split(",");
this.lat=+d[0];
this.lng=+d[1]
}else{if(Object.prototype.toString.call(c)==="[object Array]"){this.lat=+c[0];
this.lng=+c[1]
}else{this.lat=+c||0;
this.lng=+b||0
}}}a.prototype={set:function(c,b){this.lat=+c;
this.lng=+b;
return this
},clone:function(){return new a(this.lat,this.lng)
},toString:function(){return["[",this.lat,",",this.lng,"]"].join("")
}};
return a
});
B.atlas.define("geo.projection",["geometry.point","geo.latLng"],function(g,d){var e=6378137,n=0.5/(Math.PI*e),i=Math.PI/180,m=180/Math.PI;
function c(o){return o*i
}function b(o){return o*m
}function f(t,q){var u=t,s=q,o=c(s.lat-u.lat),r=c(s.lng-u.lng),p=Math.sin(o/2)*Math.sin(o/2)+Math.cos(c(u.lat))*Math.cos(c(s.lat))*Math.sin(r/2)*Math.sin(r/2);
return(2*Math.atan2(Math.sqrt(p),Math.sqrt(1-p)))*e
}function k(o){return 256*Math.pow(2,o)
}function j(o){return new g(e*o.lng*i,e*Math.log(Math.tan((Math.PI/4)+(o.lat*i/2))))
}function h(o){return new d((2*Math.atan(Math.exp(o.y/e))-(Math.PI/2))*m,o.x*m/e)
}function l(q,p){var r=k(p)||1,o=j(q);
return new g(r*n*o.x,r*-n*o.y)
}function a(o,p){var r=k(p)||1,q=new g(o.x/r/n,o.y/r/-n);
return h(q)
}return{toRadians:c,toDegrees:b,getScale:k,getDistance:f,latLngToPoint:l,pointToLatLng:a}
});
B.atlas.define("geo.view",["geo.projection","geo.bounds","geo.latLng","geometry.point"],function(b,c,d,e){var g=1,a=18;
function f(i,h,j){this.zoom=false;
this.width=+i;
this.height=+h;
this.bounds=j instanceof c?j:new c()
}f.prototype={extend:function(h){this.bounds.extend(h);
this.zoom=false;
return this
},extrapolate:function(i,l){var k=new d(i),m=b.latLngToPoint(k,l),n=new e(this.width/2,this.height/2),h=new e(m.x+n.x,m.y-n.y),j=new e(m.x-n.x,m.y+n.y);
this.setNorthEast(b.pointToLatLng(h,l));
this.setSouthWest(b.pointToLatLng(j,l));
return this
},getCenter:function(k){var i=this.bounds.getCenter(),j=this.getZoom(),h;
if(k){h=b.latLngToPoint(i,j).subtract(k);
i=b.pointToLatLng(h,j)
}return i
},getNorthWest:function(){var h=this.bounds.getCenter(),j=this.getZoom(),l=new e(this.width/2,this.height/2),k=b.latLngToPoint(h,j),i=k.subtract(l);
return b.pointToLatLng(i,j)
},getSouthEast:function(){var i=this.bounds.getCenter(),j=this.getZoom(),l=new e(this.width/2,this.height/2),k=b.latLngToPoint(i,j),h=k.add(l);
return b.pointToLatLng(h,j)
},setNorthEast:function(h){this.bounds.setNorthEast(h)
},setSouthWest:function(h){this.bounds.setSouthWest(h)
},getZoom:function(h,m){var q=h||g,j=true,i=this.bounds.getNorthEast(),n=this.bounds.getSouthWest(),k=new d(i.lat,n.lng),l=new d(n.lat,i.lng),o,p;
if(!this.zoom){m=m||a;
while(j&&q++<m){o=b.latLngToPoint(k,q);
p=b.latLngToPoint(l,q).subtract(o);
j=parseInt(p.x,10)<=this.width&&parseInt(p.y,10)<=this.height
}this.zoom=Math.max(h||g,q-1)
}return this.zoom
},latLngToPixel:function(j){var i=this.getZoom(),h=b.latLngToPoint(this.getNorthWest(),i);
return b.latLngToPoint(j,i).subtract(h)
},pixelToLatLng:function(h){var j=this.getZoom(),i=b.latLngToPoint(this.getNorthWest(),j);
return b.pointToLatLng(h.add(i),j)
},getDistance:function(i,h){return b.getDistance(i,h)
},toString:function(){return this.bounds.toString()
}};
return f
});
B.atlas.define("geometry.point",function(){function a(b,c){this.x=+b;
this.y=+c
}a.prototype={set:function(b,c){this.x=+b;
this.y=+c;
return this
},clone:function(){return new a(this.x,this.y)
},add:function(b){return new a(this.x+b.x,this.y+b.y)
},subtract:function(b){return new a(this.x-b.x,this.y-b.y)
},toString:function(){return["[",this.x,",",this.y,"]"].join("")
}};
return a
});
B.atlas.define("icons-default",["util-object"],function(e){var f,d="//q-ec.bstatic.com/static/img/map_sprites_omnibus_mk3/635ad7902710fb05e761a015c754ac4c664951fe.png",b={url:d,w:18,h:27,x:33,y:33,z:110};
function c(h){return e.extend({},b,h)
}f={hotel:c({}),hotel_soldout:c({}),hotel_matching:c({x:0,z:110}),hotel_not_matching:c({x:17,z:100}),genius:c({x:136,z:120}),city:c({x:118,z:60}),landmark:c({x:51,z:80}),airport:c({x:102,z:90}),transport:c({x:68,z:70}),ski_lift:c({x:85,z:70}),hotel_current:c({w:22,h:36,x:198,y:60,z:2000}),hotel_soldout_current:c({w:22,h:36,x:198,y:60,z:2000}),genius_current:c({w:22,h:36,x:176,y:60,z:130}),city_current:c({w:22,h:36,x:154,y:60,z:65}),airport_current:c({w:22,h:36,x:132,y:60,z:95}),landmark_current:c({w:22,h:36,x:66,y:60,z:85}),transport_current:c({w:22,h:36,x:88,y:60,z:75}),ski_lift_current:c({w:22,h:36,x:110,y:60,z:75}),"default":c({})};
function g(h){return(h&&f.hasOwnProperty(h))?f[h]:f["default"]
}function a(j){var h={},i=g(j);
switch(true){case (j==="genius"):case (j==="city"):case (j==="landmark"):case (j==="airport"):case (j==="transport"):case (j==="ski_lift"):case (j==="genius_current"):case (j==="city_current"):case (j==="airport_current"):case (j==="landmark_current"):case (j==="transport_current"):case (j==="ski_lift_current"):h=i;
break;
case (j&&j.indexOf("_current")>-1):e.extend(h,i,{x:198,y:60,z:2000});
break;
default:e.extend(h,i,{x:153,y:33,z:2000})
}return h
}return{ICONS:f,getIcon:g,getHover:a}
});
B.atlas.define("analytics",["jQuery","util-env"],function(d,c){var a;
a=[{evt:"drag"},{evt:"markers-get-fail"},{evt:"marker-hover"},{evt:"marker-click"},{evt:"iw-get-fail"},{evt:"zoom",value:true},{evt:"tiles-load",start:"ready"},{evt:"markers-get",start:"markers-before-get"},{evt:"iw-close",start:"iw-open"},{evt:"iw-get-success",start:"iw-get-before"},{evt:"markers-show",value:true},{evt:"api-load",start:"api-before-load"},{evt:"load",start:"api-load"},{evt:"close",start:"load"}];
function b(f,e){B.atlas.log(e.topic,e.value?f:e.action)
}return{init:function(){var e=this;
if(!B.atlas||!c.get("analytics")){return
}d.each(a,function(g,h){var f={topic:h.evt,value:h.value||""};
if(h.start){e.on(h.start,b,{topic:h.evt,action:"start"},true);
f={topic:h.evt,action:"end"}
}e.on(h.evt,b,f,true)
})
}}
});
B.atlas.define("autocomplete",function(){function a(c,d,b){this.Interface.autocomplete(c,d,b)
}return{autocomplete:a}
});
B.atlas.define("bounds",["geo.view","geo.bounds"],function(f,b){function d(){return this.Interface.getBoundingBox()
}function c(){var h=new b(),i=this.getBoundingBox();
h.setNorthEast(i.NE);
h.setSouthWest(i.SW);
return h
}function e(m){var j=this.$domNode,l=m instanceof b?m:new b(m.sw,m.ne),n=this.get("offset"),k=j.width()-Math.abs(n.x),h=j.height()-Math.abs(n.y),i=new f(k,h,l);
return{center:i.getCenter({x:n.x/2,y:n.y/2}),zoom:i.getZoom()}
}function a(){var i=this.$domNode,j=i.width(),h=i.height(),l=this.Interface.getBoundingBox(),k=new b();
if(l){k.setNorthEast(l.NE);
k.setSouthWest(l.SW)
}return new f(j,h,k)
}function g(k){var j=new b(),h=k.length,i;
while(h--){j.extend(k[h])
}i=this.defineBounds(j);
this.Interface.setCenter(i.center);
this.Interface.setZoom(i.zoom)
}return{getBounds:c,getBoundingBox:d,setBoundingBox:g,defineBounds:e,getViewFromMap:a}
});
B.atlas.define("center",function(){function e(){return this.Interface.getCenter()
}function c(f,g){return this.Interface.panBy(f,g)
}function b(){this.Interface.resize()
}function a(f){this.Interface.setCenter(f,this.get("offset"))
}function d(f){this.Interface.panTo(f,this.get("offset"))
}return{getCenter:e,panBy:c,panTo:d,resize:b,setCenter:a}
});
B.atlas.define("circles",["jQuery"],function(c){var a={paths:[],clickable:true,fillColor:"#0896ff",fillOpacity:0.1,strokeColor:"#003580",strokeOpacity:0.7,strokeWeight:3};
function b(d){return new this.Interface.Circle(c.extend({},a,d),this.Interface)
}return{createCircle:b}
});
B.atlas.define("goals",["jQuery"],function(d){var b,a=B.atlas.assert;
b=[{evt:"load",name:"atlas_hp_open",condition:a.hp,filter:function(e){if(e==="tdotPOI"){return false
}return true
}},{evt:"load",name:"atlas_sr_open",condition:a.sr},{evt:"load",name:"atlas_lp_open",condition:a.lp},{evt:"marker-click",name:"atlas_hp_click_property",condition:a.hp,filter:function(e){return !/city|airport/.test(e.type)
}},{evt:"marker-click",name:"atlas_sr_click_property",condition:a.sr,filter:function(e){return !/city|airport/.test(e.type)
}},{evt:"marker-click",name:"atlas_lp_click_property",condition:a.lp,filter:function(e){return !/city|airport/.test(e.type)
}},{evt:"marker-click",name:"atlas_sr_click_ufi",condition:a.sr,filter:function(e){return/city/.test(e.type)
}},{evt:"marker-click",name:"atlas_sr_click_airport",condition:a.sr,filter:function(e){return/airport/.test(e.type)
}},{evt:"marker-click",name:"atlas_lp_click_ufi",condition:a.lp,filter:function(e){return/city/.test(e.type)
}},{evt:"marker-click",name:"atlas_lp_click_airport",condition:a.lp,filter:function(e){return/airport/.test(e.type)
}}];
function c(e,f){if(f.filter&&!f.filter.apply(this,[].slice.call(arguments,0))){return
}if(!B.track||!B.track.goal){return
}B.track.goal(f.name)
}return{init:function(){var e=this;
if(this.get("id")){return
}d.each(b,function(g,f){if(f.condition){e.on(f.evt,c,f,true)
}})
}}
});
B.atlas.define("hover",function(){function c(){this.on("marker-hover",function(d){a.call(this,d.data.b_id)
});
this.on("marker-out",function(d){b.call(this,d.data.b_id)
})
}function a(f){var d=this.Interface.getMarker(f),e=(d)?d.iconType||d.b_type:"";
this.Interface.setMarkerType(f,this.getHover(e))
}function b(f){var d=this.Interface.getMarker(f),e=(d)?d.iconType||d.b_type:"";
this.Interface.setMarkerType(f,this.getIcon(e))
}return{addIconEvents:c,setIconHover:a,setIconOut:b}
});
B.atlas.define("iw-ajax",["jQuery","util-env","util-array"],function(b,d,k){var c=[],a=[],g=d.get("markerDetailsURL")||"";
function j(m){var l=k.findIndex(c,function(n){return n[0]===m
});
if(l>-1){c[l][1].abort();
c.splice(l);
m.trigger("iw-get-abort",m)
}}function h(m){var l=this.get("markerDetailsURL");
if(!l){this.set("markerDetailsURL",g);
l=g
}return l+";hotel_id="+m
}function e(n){var m,l=this;
m=k.find(a,function(o){return o[0]===l&&o[1]===n
});
return m?m[2]:false
}function i(r,q,l){var p,n=h.call(this,r),m=this,o=e.call(m,r);
j(m);
if(!l&&o&&typeof q==="function"){q.call(m,o);
return o
}m.trigger("iw-get-before",m);
p=b.ajax({url:n,error:function(t,s){if(s!=="abort"){m.trigger("iw-get-fail",m)
}},success:function(s){if(!s){return
}if(typeof q==="function"&&s.b_hotels){q.call(m,s.b_hotels[r])
}a.push([m,r,s.b_hotels[r],p]);
m.trigger("iw-get-success",s,m)
}});
c.push([m,p]);
return p
}function f(){a.length=0
}return{getIW:i,clearIWCache:f}
});
B.atlas.define("iw",["jQuery","geometry.point","util-env"],function(e,i,b){var l={},g={latLng:[0,0],offset:new i(0,0),className:"",closeSelector:".iw-close",mapOffset:new i(0,0),mapPadding:0,content:"",disablePan:false,engine:"html"};
function d(o){l[o]=(B.jstmpl(o)&&B.jstmpl(o).name!=="__no_op__")?B.jstmpl(o):B.jstmpl("atlas_iw_default");
return l[o]||{render:function(){}}
}function c(){var o=this;
this.IW=this.IW||{};
if(this.IW.OPTIONS){return
}this.IW.OPTIONS=e.extend({},g,{mapOffset:this.get("offset")});
a();
this.on("offset-change",function(p){o.IW.OPTIONS.mapOffset=p
})
}function a(){if(!B.jstmpl){return
}B.jstmpl.fn.HELPER_FROM_FRICE=function(o){return(B.env.map_vars.translation_from.replace("price_placeholder",o)).replace("price_placeholdernbsp;","$ ")
};
B.jstmpl.fn.HELPER_ENV=function(o){return(B.env.hasOwnProperty(o))?B.env[o]:""
};
B.jstmpl.fn.HELPER_IW_B_BLOCKS=function(q,o,p){if(!q){return false
}if(q[o]&&q[o][p]){return q[o][p]
}if(q.b_room_group&&q.b_room_group[o]&&q.b_room_group[o][p]){return q.b_room_group[o][p]
}return false
};
B.jstmpl.fn.ATLAS_GET_VARIANT=function(o){return(B.atlas&&B.atlas.getVariant)?B.atlas.getVariant(o):false
};
B.jstmpl.fn.ATLAS_TRACK=function(o){return(B.atlas&&B.atlas.trackInTemplate)?B.atlas.trackInTemplate(o):false
};
B.jstmpl.fn.ATLAS_ENV=function(o){return(o)?b.get(o):false
}
}function k(o){c.call(this);
this.IW.OPTIONS=e.extend({},this.IW.OPTIONS,o)
}function f(p,o){if(!this.IW.cur){this.IW.cur=new this.Interface.IW(p,this)
}else{this.IW.cur.open(p,o)
}}function m(r,q){var p={},o=this.Interface.getMarker(r);
if(!this.IW){c.call(this)
}if(o){q=q||d.call(this,"atlas_iw_loading").render({});
e.extend(p,this.IW.OPTIONS,{latLng:[o.b_latitude,o.b_longitude],content:q,type:o.b_type||""});
f.call(this,p,true)
}}function j(t,s,r){var p={},o=this.Interface.getMarker(t),q;
if(!this.IW){c.call(this)
}if(o){q=o.data.b_iw_template||"atlas_iw_"+o.b_type;
r=r||d.call(this,q).render(s);
e.extend(p,this.IW.OPTIONS,{latLng:[o.b_latitude,o.b_longitude],content:r,type:o.b_type||""});
f.call(this,p)
}}function h(s,t,r,q){var p,o={};
if(!this.IW){c.call(this)
}p=(!r&&q)?d.call(this,q):null;
r=r||((p)?p.render(t):"");
e.extend(o,this.IW.OPTIONS,{latLng:[s[0],s[1]],content:r});
f.call(this,o)
}function n(){if(this.IW&&this.IW.cur){this.IW.cur.close()
}}return{closeIW:n,setIW:k,openIW:j,openIWLatLng:h,openIWLoading:m}
});
B.atlas.define("labels",[],function(){function a(c){if(!this.Interface.Overlay){return
}var b=this.get("labelOverlay")||this.set("labelOverlay",new this.Interface.Overlay({},this));
return b.add(c)
}return{addLabel:a}
});
B.atlas.define("markers-ajax",["jQuery","util-env"],function(b,e){var c=[],g=e.get("markersOnMapURL")||"";
function f(l){var k=l.Interface?l.Interface.getBoundingBox():l.get("bounds"),m="";
if(k&&k.SW){m=[k.SW[1],k.SW[0],k.NE[1],k.NE[0]].join(",")
}else{if(k&&k.toMOMString){m=k.toMOMString()
}}return m
}function i(m){var l,k,n;
for(l=0,k=c.length;
l<k;
++l){n=c[l];
if(n[0]===m){n[1].abort();
c.splice(l);
return true
}}return false
}function a(o){var n,l=this.get("markersOnMapURL")||g,k=this,m=f(k);
i(k);
if(!m){return
}k.trigger("markers-before-get",k);
n=b.ajax({url:l+";BBOX="+m,error:function(q,p){if(p!=="abort"){k.trigger("markers-get-fail",k)
}},success:function(p){if(!p){return
}if(typeof o==="function"){o.apply(k,arguments)
}k.trigger("markers-get",p,k)
}});
c.push([k,n])
}function h(k){return this.set("markersOnMapURL",k||g)
}function d(){return this.get("markersOnMapURL")||g
}function j(k){var l=this.getMarkersURL();
return this.setMarkersURL(l.replace(/limit=([\d]*)/,"limit="+parseInt(k,10)))
}return{getMarkers:a,setLimit:j,setMarkersURL:h,getMarkersURL:d}
});
B.atlas.define("markers",["jQuery"],function(g){function k(r){var q,p=[];
for(q in r){if(r.hasOwnProperty(q)){p.push(r[q])
}}return p
}function a(r,q){var p=(g.isArray(r))?r:k(r);
this.pruneMarkers(p);
this.addMarkers(p,q)
}function m(){return this.Interface.getActiveMarkers()
}function f(){this.Interface.clearMarkers()
}function e(p){this.Interface.clearMarker(p)
}function i(q){var p=(g.isArray(q))?q:k(q);
this.Interface.pruneOutboundedMarkers();
this.addMarkers(p)
}function n(t){var s,r,q=this.Interface.getActiveMarkers(),p=q.length;
while(p--){s=q[p].b_id;
r=t.length;
while(r--){if(t[r].b_id===s){break
}}if(r<0&&s){this.Interface.clearMarker(s)
}}}function d(q,p){var w,s,x=[],r=0,u=this.Interface,t=(g.isArray(q))?q:k(q),v=t.length;
this.trigger("markers-create",this);
while(v--){w=t[v];
w.b_type=w.b_type||w.b_marker_type;
s=this.getIcon(w.b_type);
w.zIndex=s.z+r++;
x.push([w.b_latitude,w.b_longitude]);
u.createMarker(g.extend(w,{icon:s}))
}if(p&&typeof this.setBoundingBox==="function"){this.setBoundingBox(x)
}this.trigger("markers-show",t.length)
}function j(r){var q,p=this.Interface.getMarker(r);
if(p){q=this.getIcon(p.b_type);
this.Interface.setMarkerType(r,q)
}}function l(p){this.Interface.centerMarker(p,this.get("offset"))
}function c(p){this.Interface.panMarker(p,this.get("offset"))
}function b(q,p){if(p){this.Interface.setMarkerType(q,this.getIcon(p),p)
}}function o(p){return this.Interface.getMarker(p)
}function h(q,p){return this.Interface.setMarkerOptions(q,p)
}return{addMarkers:d,centerMarker:l,clearMarkers:f,clearMarker:e,getActiveMarkers:m,getMarker:o,panMarker:c,pruneMarkers:n,resetMarkerType:j,setMarkers:a,setMarkerType:b,setMarkerOptions:h,updateMarkers:i}
});
B.atlas.define("offset",["geometry.point"],function(a){function b(c,e){var d=new a(c,e);
this.set("offset",d);
this.trigger("offset-change",d)
}return{setOffset:b}
});
B.atlas.define("options",function(){function c(h,i){this.Interface.configZoomControl(h,i)
}function e(){this.Interface.hideZoomControl()
}function b(h){this.Interface.setMaxZoom(h);
this.set("maxZoom",h)
}function g(h){this.Interface.setMinZoom(h);
this.set("minZoom",h)
}function a(h){this.Interface.setZoom(h)
}function d(h){this.Interface.setMapType(h)
}function f(){return this.Interface.getZoom()
}return{configZoomControl:c,hideZoomControl:e,setMapType:d,setMaxZoom:b,setMinZoom:g,setZoom:a,getZoom:f}
});
B.atlas.define("places",function(){function c(e,f,d){if(!e){return
}this.Interface.getPlaceDetails(e,f,d)
}function b(e,f,d){if(!e){return
}this.Interface.searchPlaces(e,f,d)
}function a(){return this.Interface.checkPlacesApi&&this.Interface.checkPlacesApi()
}return{checkPlacesApi:a,getPlaceDetails:c,searchPlaces:b}
});
B.atlas.define("polygons",["jQuery"],function(c){var a={paths:[],clickable:true,fillColor:"#0896ff",fillOpacity:0.1,strokeColor:"#003580",strokeOpacity:0.7,strokeWeight:3};
function b(d){return new this.Interface.Polygon(c.extend({},a,d),this.Interface)
}return{createPolygon:b}
});
B.atlas.define("static-render",["jQuery","geo.latLng","util-array"],function(f,g,c){var e="static_map",b="."+e+"_marker",j=e+"_load";
function h(m,k){var n=document.createDocumentFragment(),l=k.get("$container");
c.each(m.reverse(),function(o,p){var q;
if(!o){return
}q=document.createElement("div");
q.setAttribute("data-coords",[o.b_latitude,o.b_longitude].join(","));
q.setAttribute("data-marker-type",o.b_marker_type);
q.className="static_map_marker static_map_marker_"+p+" "+o.b_marker_type;
n.appendChild(q)
});
l.append(n)
}function i(k){var l=k.get("$domNode"),m=l.data("map"),n=f('<div class="'+e+'_container" />');
n.append(l.children());
f(document.createElement("img")).bind("load",function(){l.addClass(j);
k.trigger("load")
}).css({position:"absolute",top:0,left:0}).attr("src",m).prependTo(n);
n.css({top:"50%",left:"50%","margin-top":-parseInt(k.height/2,10),"margin-left":-parseInt(k.width/2,10),width:k.width,height:k.height}).prependTo(l);
return k.set("$container",n)
}function a(m){var k=this,l=k.get("$container");
l=l||i(k);
if(m){h(m,k)
}l.find(b).each(function(n,o){k.renderMarker(o)
});
k.trigger("render")
}function d(n){var k=f(n),p=this.get("offset"),o=(k.data("coords")||"0,0").split(","),m=new g(+o[0],+o[1]),q=this.latLngToPixel(m),l=this.getIcon(k.data("marker-type"));
k.css({position:"absolute",display:"block",top:q.y-l.h+p.y,left:q.x-l.w/2+p.x,width:l.w,height:l.h,"background-image":"url("+l.url+")","background-position":-l.x+"px "+-l.y+"px","z-index":l.z});
this.trigger("marker-render")
}return{render:a,renderMarker:d}
});
B.atlas.define("zoom",function(){function b(c){var f=c||this.get("maxZoom"),e=this.getZoom(),d;
if(e<f){d=e+1;
this.setZoom(d);
if(e+1===f){return true
}else{return false
}}else{return true
}}function a(f){var e=f||this.get("minZoom"),d=this.getZoom(),c;
if(d>e){c=d-1;
this.setZoom(c);
if(d-1===e){return true
}else{return false
}}else{return true
}}return{incrementZoom:b,decrementZoom:a}
});
B.atlas.define("provider-google-autocomplete-result",["util-object","util-array","util-getset"],function(e,d,c){function a(h){var g=[];
d.each(h.slice(1),function(i){if(i.value){g.push(i.value)
}});
return g.join(", ")
}function b(g){return g&&g.length?g[0].value||"":""
}function f(i,j){var h=this,g={map:j,data:{title:b(i.terms),address:a(i.terms)}};
e.extend(g,i);
e.extend(h,c.call(h,g))
}f.prototype.getDetails=function(i){var g=this.get("map"),h=this.get("place_id");
return g.getPlaceDetails({placeId:h},i)
};
return f
});
B.atlas.define("provider-google-autocomplete",["util-array","provider-google-autocomplete-result"],function(e,g){var b=4000,a;
function f(k,j){var i=j.map.getBounds(),h={input:k.query};
if(i){h.bounds=i
}else{h.location=new google.maps.LatLng(k.lat,k.lon);
h.radius=Math.min(parseInt(k.radius,10),b)
}return h
}function c(j,i){var h=[];
if(j.length>0){e.each(j,function(k){if(k.place_id&&k.terms){h.push(new g(k,i))
}})
}return h
}function d(i,l,h){var j=this,k=f(i,j);
a=a||new google.maps.places.AutocompleteService();
a.getQueryPredictions(k,function(n,m){if(m&&m.indexOf("OK")>-1&&n){l(c(n,j))
}else{if(typeof h==="function"){h(m,k)
}}})
}return{autocomplete:d}
});
B.atlas.define("provider-google-bounds",function(){function a(){var d=this.map.getBounds(),c=null,b,e;
if(d){b=d.getSouthWest();
e=d.getNorthEast();
c={SW:[b.lat(),b.lng()],NE:[e.lat(),e.lng()]}
}return c
}return{getBoundingBox:a}
});
B.atlas.define("provider-google-center",function(){function f(){var g=this.map.getCenter();
return[g.lat(),g.lng()]
}function c(h,g){return new google.maps.LatLng(h,g)
}function d(g,h){this.map.panBy(g,h)
}function b(){google.maps.event.trigger(this.map,"resize")
}function a(g,h){this.map.setCenter(this.getOffsetLatLng(g,h))
}function e(g,h){this.map.panTo(this.getOffsetLatLng(g,h))
}return{getCenter:f,getLatLng:c,panBy:d,panTo:e,resize:b,setCenter:a}
});
B.atlas.define("provider-google-circles",["jQuery"],function(c){var a=[];
function d(e){return new google.maps.LatLng(e[0],e[1])
}function b(e,f){var g={};
c.extend(g,e,{center:d(e.center),readius:e.readius,map:f.map});
this.ubber=f;
this.core=new google.maps.Circle(g)
}b.prototype={setOptions:function(e){var f={};
if(e.center){e.center=d(e.center)
}c.extend(f,e);
this.core.setOptions(f);
return this
},getCenter:function(){var e=this.core.getCenter();
return[e.lat(),e.lng()]
},on:function(e,h,g){var f=this;
a.push({context:this,evt:e,handler:h,listener:google.maps.event.addListener(this.core,e,function(){f.ubber.ubber.trigger("circle-"+e,this);
h.call(f,g)
})});
return this
},off:function(f,g){var i,h,e=a.length;
while(e--){i=a[e];
if(i.context===this&&i.evt===f&&i.handler===g){h=a.splice(e,1);
if(h.length===1&&h[0].listener){h[0].listener.remove()
}break
}}return this
},setCenter:function(e){this.core.setCenter(d(e));
return this
},hide:function(){this.core.setVisible(false);
return this
},show:function(){this.core.setVisible(true);
return this
},remove:function(){var f,e=a.length;
while(e--){if(a[e].context===this){f=a.splice(e,1);
if(f.length===1&&f[0].listener){f[0].listener.remove()
}}}this.core.setMap(null);
return this
}};
return{Circle:b}
});
B.atlas.define("provider-google-events",function(){function a(){var c=google.maps.event,b=this.ubber,d;
c.addListener(this.map,"dragstart",function(){b.trigger("drag-start")
});
c.addListener(this.map,"dragend",function(){b.trigger("drag")
});
c.addListener(this.map,"zoom_changed",function(){var e=b.Interface,f=(e&&e.map)?e.map.getZoom():0;
b.trigger("zoom",f)
});
c.addListener(this.map,"idle",function(){b.trigger("idle")
});
c.addListener(this.map,"resize",function(){b.trigger("resize")
});
c.addListener(this.map,"bounds_changed",function(){if(d){clearTimeout(d)
}d=setTimeout(function(){b.trigger("bounds-change")
},150)
});
c.addListener(this.map,"tilesloaded",function(){b.trigger("tiles-load")
})
}return{setEvents:a}
});
B.atlas.define("provider-google-iw",["jQuery"],function(d){var e="iw-overlay",c="iw-overlay-loading",a="iw-overlay-closing";
function b(g,f){var h=f.Interface.map;
this.ubber=f;
this.config={};
this.isOpen=false;
google.maps.OverlayView.call(this);
d.extend(this.config,g);
d.extend(this,new google.maps.OverlayView());
this.setMap(h)
}b.prototype.remove=function(){if(this.$domNode){this.$domNode.remove();
this.$domNode=null
}this.setMap(null)
};
b.prototype.draw=function(){var g=this,h=this.config,f=(h.isFixed)?this.ubber.$domNode:d(this.getPanes().floatPane);
if(!this.$domNode){this.$domNode=d('<div class="'+e+'"/>');
this.$domNode.appendTo(f).bind("mousemove",function(i){i.stopPropagation()
}).delegate(h.closeSelector,"click",function(i){i.stopPropagation();
g.close()
});
this.open()
}else{if(!h.isFixed&&this.isOpen){this.setPosition()
}}};
b.prototype.checkOverlay=function(j,h){var i=this.ubber.get("topOverlay"),g=i?i:this.ubber.$domNode,f=this.getPanes().floatPane;
if(j&&h.get(0)!==g.get(0)){h.appendTo(g)
}else{if(!j&&h.get(0)!==f){h.appendTo(d(f))
}}};
b.prototype.open=function(h,g){var k=d.extend(this.config,(h||{})),j=[e,k.className],i=this.$domNode,f=this.getProjection();
if(!f||!this.$domNode){return
}this.$domNode.removeClass(a);
this.checkOverlay(k.isFixed,i);
if(g){j.push(c)
}i.attr("class",j.join(" ")).html(k.content).show();
this.setPosition();
if(!k.disablePan){this.panMap()
}this.isOpen=true;
this.ubber.trigger("iw-open")
};
b.prototype.getPosition=function(g,f){var h=this.config;
return{x:f.x+h.offset.x-g.outerWidth()/2,y:f.y+h.offset.y}
};
b.prototype.setPosition=function(){var g,m,l,k=this.config,h=this.$domNode,f=this.getProjection(),j=(k.getPosition)||this.getPosition,i=new google.maps.LatLng(k.latLng[0],k.latLng[1]);
if(!f||!this.$domNode){return
}m=f.fromLatLngToDivPixel(i);
l=f.fromLatLngToContainerPixel(i);
g=j.call(this,h,m,l);
h.css({position:"absolute",top:g.y,left:g.x})
};
b.prototype.close=function(){if(this.$domNode){this.isOpen=false;
this.$domNode.addClass(a);
this.$domNode.hide();
this.ubber.trigger("iw-close")
}};
b.prototype.panMap=function(){var h=this.getMap(),g=this.config,n=d(h.getDiv()),i=this.$domNode,p=n.width(),l=n.height(),k=i.outerWidth()/2,o=i.outerHeight(),f=this.getProjection().fromLatLngToContainerPixel(new google.maps.LatLng(g.latLng[0],g.latLng[1])),m=0,j=0;
if(f.x<(-g.offset.x+g.mapPadding+k+g.mapOffset.x)){m=f.x+g.offset.x-g.mapPadding-k-g.mapOffset.x
}else{if((f.x+k+g.offset.x+g.mapPadding)>p){m=f.x+k+g.offset.x+g.mapPadding-p
}}if(f.y<(-g.offset.y+g.mapPadding+g.mapOffset.y)){j=f.y+g.offset.y-g.mapPadding-g.mapOffset.y
}else{if((f.y+o+g.offset.y+g.mapPadding)>l){j=f.y+o+g.offset.y+g.mapPadding-l
}}if(m!==0||j!==0){h.panBy(m,j)
}};
return{IW:b}
});
B.atlas.define("provider-google-markers",["jQuery","util-array"],function(f,k){function g(n){return k.findIndex(this.markers,function(o){return o.b_id===String(n)
})
}function c(){var r,q=this.markers,p=q.length,o=google.maps.event,n=this.map.getBounds();
while(p--){r=q[p];
if(n&&!n.contains(r.getPosition())&&!r.data.b_persistent){o.clearInstanceListeners(r);
r.setMap(null);
q.splice(p,1)
}}}function e(){var o,n=this.markers.length;
while(n--){o=this.markers[n];
google.maps.event.clearInstanceListeners(o);
o.setMap(null)
}this.markers=[]
}function d(p){var n=g.call(this,p),o=(n>-1)?this.markers[n]:null;
if(o){google.maps.event.clearInstanceListeners(o);
o.setMap(null);
this.markers.splice(n,1)
}}function m(n){return k.find(this.markers,function(o){return o.b_id===String(n)
})
}function l(){return f.map(this.markers,function(n){return{b_id:n.b_id,b_name:n.b_name,b_type:n.b_type,b_url:n.b_url,b_latitude:n.b_latitude,b_longitude:n.b_longitude,b_persistent:(n.data)?n.data.b_persistent:false}
})
}function b(r,o,n){var p=google.maps,q=this.getMarker(r);
if(q){q.iconType=n||q.iconType;
q.setOptions({icon:{url:o.url,size:new p.Size(o.w,o.h),origin:new p.Point(o.x,o.y)},zIndex:o.z})
}}function j(r,q){var p=this,o=this.getMarker(r),n=p.map.getProjection();
if(o){if(n){p.map.setCenter(this.getOffsetLatLng(o.getPosition(),q))
}else{p.ubber.once("idle",function(){p.map.setCenter(this.getOffsetLatLng(o.getPosition(),q))
})
}}}function a(r,q){var p=this,n=p.map.getProjection(),o=this.getMarker(r);
if(o){if(n){p.map.panTo(p.getOffsetLatLng(o.getPosition(),q))
}else{p.ubber.once("idle",function(){p.map.panTo(p.getOffsetLatLng(o.getPosition(),q))
})
}}}function h(p,o){var n=this.getMarker(p);
if(n){n.setOptions(o)
}}function i(o){var r,q=B.env,s=google.maps,t=s.event,n=this.ubber,p=o.icon;
if(this.getMarker(o.b_id)){return
}r=new s.Marker({b_id:o.b_id,b_name:o.b_name,b_flags:o.b_flags,b_type:o.b_type,b_url:o.b_url,b_latitude:o.b_latitude,b_longitude:o.b_longitude,data:o,zIndex:o.zIndex,position:new s.LatLng(o.b_latitude,o.b_longitude),optimized:!(q.b_browser==="msie"&&q.b_browser_version<9),icon:{url:p.url,size:new s.Size(p.w,p.h),origin:new s.Point(p.x,p.y)}});
r.setMap(this.map);
t.addListener(r,"click",function(u){n.trigger("marker-click",{evt:u,id:this.b_id,type:this.b_type,latLng:[this.b_latitude,this.b_longitude],data:this.data})
});
t.addListener(r,"mouseover",function(u){n.trigger("marker-hover",{evt:u,id:this.b_id,type:this.b_type,latLng:[this.b_latitude,this.b_longitude],data:this.data})
});
t.addListener(r,"mouseout",function(u){n.trigger("marker-out",{evt:u,id:this.b_id,type:this.b_type,latLng:[this.b_latitude,this.b_longitude],data:this.data})
});
this.markers.push(r)
}return{centerMarker:j,clearMarker:d,clearMarkers:e,createMarker:i,setMarkerOptions:h,getMarker:m,getActiveMarkers:l,panMarker:a,pruneOutboundedMarkers:c,setMarkerType:b}
});
B.atlas.define("provider-google-offset",function(){function a(e,h){var g,k,j,f,c=google.maps,d=this.map,b=("lat" in e)?e:new google.maps.LatLng(e[0],e[1]),i=d.getProjection();
if(h&&i){g=Math.pow(2,d.getZoom());
k=i.fromLatLngToPoint(b);
j=new c.Point(h.x/g/2,h.y/g/2);
f=new c.Point(k.x-j.x,k.y-j.y);
b=i.fromPointToLatLng(f)
}return b
}return{getOffsetLatLng:a}
});
B.atlas.define("provider-google-options",function(){function c(i,k){var j=google.maps.ZoomControlStyle,h=google.maps.ControlPosition;
this.map.setOptions({zoomControl:true,zoomControlOptions:{style:(i&&j.hasOwnProperty(i))?j[i]:j.SMALL,position:(k&&h.hasOwnProperty(k))?h[k]:h.LEFT_CENTER}})
}function e(){this.map.setOptions({zoomControl:false})
}function d(i){var j=i.toUpperCase(),h=google.maps.MapTypeId;
if(h.hasOwnProperty(j)){this.map.setMapTypeId(h[j])
}}function b(h){this.map.setOptions({maxZoom:h})
}function g(h){this.map.setOptions({minZoom:h})
}function a(h){this.map.setOptions({zoom:h})
}function f(){return this.map.getZoom()
}return{hideZoomControl:e,configZoomControl:c,setMapType:d,setMaxZoom:b,setMinZoom:g,setZoom:a,getZoom:f}
});
B.atlas.define("provider-google-overlay",["util-object","util-array"],function(h,f){var b="map-overlay-",c="map-overlay-rendered";
function g(j){var i=j.options.queue;
while(i.length){j.render(i.pop())
}}function e(i){var k=i.options.type,j=i.getPanes();
switch(true){case k==="map":return j.mapPane;
case k==="overlay":return j.overlayLayer;
case k==="marker":return j.markerLayer;
default:return j.floatPane
}}function d(i){var j=i.domNode;
if(!j){j=document.createElement("div");
j.innerHTML=i.content;
j.style.position="absolute"
}j.id=i.id||h.uniqueId(b);
j.className=[j.className||"",c].join(" ");
return j
}function a(j,i){this.options=h.extend({ubber:i,queue:[],items:[],type:"float"},j);
h.extend(this,new google.maps.OverlayView());
this.setMap(i.Interface.map)
}a.prototype.onAdd=function(){g(this)
};
a.prototype.render=function(j){var l=this.options,i=l.items,k=d(j||{});
l.overlayNode=l.overlayNode||e(this);
l.overlayNode.appendChild(k);
i.push({id:j.id,options:j,domNode:k});
return j.id
};
a.prototype.add=function(j){var k=this.options,i=this.options.queue;
if(k.overlayNode){j.id=this.render(j)
}else{j.id=h.uniqueId(b);
i.push(j)
}return j.id
};
a.prototype.remove=function(l){var i=this.options.items,j=this.options.soverlayNode,k;
k=f.find(i,function(m){return m.id===l
});
if(j&&k){j.removeChild(k.domNode)
}};
a.prototype.draw=function(){var j,i=this.getProjection();
g(this);
j=this.options.items;
f.each(j,function(n){var m=n.domNode,k=n.options,l=m.offsetWidth,o=new google.maps.LatLng(k.coordinates[0],k.coordinates[1]),p=i.fromLatLngToDivPixel(o);
m.style.left=p.x-(l/2)+"px";
m.style.top=p.y+"px"
})
};
a.prototype.onRemove=function(){var i=this.options.items,j=this.options.overlayNode;
while(j&&i.length){j.removeChild(i.pop().domNode)
}};
return{Overlay:a}
});
B.atlas.define("provider-google-place-util",["util-object","geo.latLng","util-array"],function(e,f,d){function g(m,j){var n="",k=Number.POSITIVE_INFINITY,l;
d.each(j,function(o){l=d.findIndex(m,function(p){return o===p
});
if(l>-1&&l<k){k=l;
n=m[k]
}});
return n
}function c(k){var j=k.geometry&&k.geometry.location?k.geometry.location:new google.maps.LatLng(0,0),m=new f(j.lat(),j.lng()),l=k.query||"";
if(l&&l.types){k.type=g(k.types||[],l.types)
}return{id:k.place_id,source:"google",coordinates:m,location:j,data:k}
}function b(j){var m=google.maps,l=e.extend({position:this.get("location")},j||{}),k=l.icon;
if(k){l.icon={url:k.url,size:new m.Size(k.w,k.h),origin:new m.Point(k.x,k.y)};
if(k.z){l.zIndex=k.z
}}return l
}function i(p,n,k){var l,j,o,m=p[0];
for(l=0,j=p.length;
l<j;
++l){o=p[l];
m.ratio=o.width/o.height;
m.maxWidth=Math.ceil(k*m.ratio);
m.maxHeight=k;
if(m.maxWidth<n){m.maxWidth=n;
m.maxHeight=Math.ceil(n/m.ratio)
}if(m.maxWidth<=o.width&&m.maxHeight<=o.height){m=o;
break
}}return m
}function a(j){var l=google.maps.event,k=this;
l.addListener(j,"click",function(m){k.trigger("click",m)
});
l.addListener(j,"mouseover",function(m){k.trigger("mouseover",m)
});
l.addListener(j,"mouseout",function(m){k.trigger("mouseout",m)
})
}function h(k){var l=google.maps.event,j=this;
l.addListener(k,"closeclick",function(m){j.trigger("close",m)
})
}return{transform:c,normalizeMarker:b,setMarkerEvents:a,setIWEvents:h,getBestImage:i}
});
B.atlas.define("provider-google-place",["pubsub","provider-google-place-util","util-object","jQuery"],function(a,e,d,c){function b(g,f){var i=e.transform(g),h=this;
i.atlas=f;
if(i.data){i.data.getImage=function(j){return h.getImage.call(h,j)
}
}d.extend(this,a.call(this));
this.get=function(j){return j?i[j]:i.data
};
this.set=function(j,k){if(j){i[j]=k;
return k
}return undefined
}
}b.prototype.extend=function(f){this.set("data",d.extend(this.get("data")||{},f));
return this
};
b.prototype.render=function(f){if(this.get("atlas").Interface.map){this.renderMarker(f)
}else{this.renderHTML(f)
}this.set("isRendered",true)
};
b.prototype.renderMarker=function(g){var f=this.get("marker"),j=this.get("atlas").Interface.map,i=google.maps,h=e.normalizeMarker.call(this,g);
if(!j){return
}if(!f){f=new i.Marker(h);
f.setMap(j);
e.setMarkerEvents.call(this,f);
this.set("marker",f)
}else{f.setOptions(h);
f.setMap(j)
}this.set("isRendered",true)
};
b.prototype.renderHTML=function(f){var i=this.get("$domNode"),g=c(this.get("atlas").get("resultsNode")),h=f.className,j=f.content||"";
if(!i){i=this.set("$domNode",c('<div class="'+h+'"/>'));
i.html(j);
g.append(i)
}else{i.html(j)
}};
b.prototype.remove=function(){if(this.get("atlas")&&this.get("atlas").Interface.map){this.removeMarker()
}else{this.removeHTML()
}this.set("isRendered",false)
};
b.prototype.removeMarker=function(){var f=this.get("marker");
if(f){f.setMap(null);
f.set("marker",null)
}};
b.prototype.removeHTML=function(){c(this.get("$domNode")).remove();
this.set("$domNode",null)
};
b.prototype.getImage=function(g){var j=this.get("data"),i=g?g.width:80,f=g?g.height:80,h;
if(!j||!j.photos||!j.photos.length){return false
}h=e.getBestImage(j.photos,i,f);
return{attribution:h.html_attributions||"",url:h.getUrl(h),width:h.width,height:h.height,layout:h.ratio>=1?"landscape":"portrait"}
};
b.prototype.getDetails=function(h){var f=this.get("atlas"),g=this.get("id");
f.getPlaceDetails({placeId:g},h,this)
};
b.prototype.getMarkerConfig=function(g){var h=this.get("coordinates"),f;
f={b_id:this.get("id"),b_latitude:h.lat,b_longitude:h.lng,data:this.get("data")};
d.extend(f,g);
return f
};
b.prototype.open=function(h){var g=this.get("iw"),f=this.get("marker"),j=this.get("atlas").Interface.map,i=d.extend({},h||{});
if(!j){return
}if(!g){g=new google.maps.InfoWindow(i);
e.setIWEvents.call(this,g);
this.set("iw",g)
}else{g.setOptions(i)
}if(g&&f){g.open(j,f)
}};
b.prototype.close=function(){var f=this.get("iw");
return f?f.close():false
};
return b
});
B.atlas.define("provider-google-places",["util-array","geo.latLng","provider-google-place"],function(c,f,a){function b(n,j,m){var l=[],k=m.exclude||[];
c.each(n,function(o){var p=false;
c.each(k,function(q){if(c.contains(o.types||[],q)){p=true
}});
if(!p&&o.geometry&&o.geometry.location){o.query=m;
l.push(new a(o,j))
}});
return l
}function e(n){var k=google.maps,m=n.bounds,l=n.location,o,j;
if(m){o=m.getNorthEast();
j=m.getSouthWest();
n.bounds=new k.LatLngBounds(new k.LatLng(j.lat,j.lng),new k.LatLng(o.lat,o.lng))
}if(l instanceof f){n.location=new k.LatLng(l.lat,l.lng)
}else{if(c.isArray(l)&&l.length===2){n.location=new k.LatLng(l[0],l[1])
}}return n
}function d(){var j=this.ubber,k=this.map||j.get("attributionNode");
return j.get("placesService")||j.set("placesService",new google.maps.places.PlacesService(k))
}function g(m,n,l){var k=this.ubber,j=this.getPlacesService();
k.trigger("places-search",m);
if(!m||!n||!(m.location||m.bounds)){return
}m=e(m);
j.nearbySearch(m,function(q,p,o){var r;
if(q&&p===google.maps.places.PlacesServiceStatus.OK){r=b(q,k,m);
if(r&&r.length){n.call(l||k,r,o)
}k.trigger("places-search-success",r,o)
}else{k.trigger("places-search-fail",q)
}})
}function h(p,n,m){var l=this.ubber,k=this.getPlacesService(),j=typeof n=="object",o={success:j&&n.success?n.success:n,error:j&&n.error?n.error:function(){}};
l.trigger("places-details",p);
k.getDetails(p,function(s,r){var q,t="fail";
if(r===google.maps.places.PlacesServiceStatus.OK&&s){q=m instanceof a?m.extend(s):new a(s,l);
o.success.call(m||l,q);
t="success"
}else{o.error.call(m||l,r,t,s)
}if(m&&m.trigger){m.trigger("place-details-"+t,q)
}l.trigger("places-details-"+t,q)
})
}function i(){return !!(google&&google.maps&&google.maps.places)
}return{checkPlacesApi:i,getPlacesService:d,getPlaceDetails:h,searchPlaces:g}
});
B.atlas.define("provider-google-polygons",["jQuery"],function(d){var c=[];
function b(e){return d.map(e,function(f){return new google.maps.LatLng(f[0],f[1])
})
}function a(e,f){var g={};
d.extend(g,e,{paths:b(e.paths),map:f.map});
this.ubber=f;
this.core=new google.maps.Polygon(g)
}a.prototype={setOptions:function(e){var f={};
if(e.paths){e.paths=b(e.paths)
}d.extend(f,e);
this.core.setOptions(f);
return this
},getCenter:function(){var e,f=new google.maps.LatLngBounds();
this.core.getPath().forEach(function(g){f.extend(g)
});
e=f.getCenter();
return[e.lat(),e.lng()]
},on:function(e,h,g){var f=this;
c.push({context:this,evt:e,handler:h,listener:google.maps.event.addListener(this.core,e,function(){f.ubber.ubber.trigger("polygon-"+e,this);
h.call(f,g)
})});
return this
},off:function(f,g){var i,h,e=c.length;
while(e--){i=c[e];
if(i.context===this&&i.evt===f&&i.handler===g){h=c.splice(e,1);
if(h.length===1&&h[0].listener){h[0].listener.remove()
}break
}}return this
},setPaths:function(e){this.core.setPaths(b(e));
return this
},hide:function(){this.core.setVisible(false);
return this
},show:function(){this.core.setVisible(true);
return this
},remove:function(){var f,e=c.length;
while(e--){if(c[e].context===this){f=c.splice(e,1);
if(f.length===1&&f[0].listener){f[0].listener.remove()
}}}this.core.setMap(null);
return this
}};
return{Polygon:a}
});
B.atlas.define("provider-google",["jQuery","util-env","provider-loader","provider-google-events","provider-google-markers","provider-google-bounds","provider-google-center","provider-google-options","provider-google-iw","provider-google-offset","provider-google-polygons","provider-google-circles","provider-google-places","provider-google-overlay","provider-google-autocomplete"],function(f,o,i,b,p,h,s,d,e,g,r,m,k,q,t){var j,a=o.get("googleMapsUrl");
function l(u){return(u instanceof Array)?u:false
}function c(v,w){var y=google.maps,x=f(v.domNode).get(0),u={zoom:v.zoom,center:new y.LatLng(v.center[0],v.center[1]),styles:w.STYLES||[],mapTypeControl:(v.hasOwnProperty("mapTypeControl"))?v.mapTypeControl:true,maxZoom:v.maxZoom||20,minZoom:v.minZoom||1,streetViewControl:(v.streetView)||false,mapTypeId:(v.mapTypeId)?v.mapTypeId:y.MapTypeId.ROADMAP,panControl:(v.hasOwnProperty("panControl"))?v.panControl:true,zoomControl:(v.hasOwnProperty("zoomControl"))?v.zoomControl:true,scaleControl:(v.hasOwnProperty("scaleControl"))?v.scaleControl:true,scrollwheel:(v.hasOwnProperty("scrollwheel"))?v.scrollwheel:true,panControlOptions:{position:(v.hasOwnProperty("panPosition")&&y.ControlPosition.hasOwnProperty(v.panPosition))?y.ControlPosition[v.panPosition]:y.ControlPosition.TOP_LEFT},zoomControlOptions:{style:(v.hasOwnProperty("zoomStyle")&&y.ZoomControlStyle.hasOwnProperty(v.zoomStyle))?y.ZoomControlStyle[v.zoomStyle]:y.ZoomControlStyle.DEFAULT,position:(v.hasOwnProperty("zoomPosition")&&y.ControlPosition.hasOwnProperty(v.zoomPosition))?y.ControlPosition[v.zoomPosition]:y.ControlPosition.TOP_LEFT},mapTypeControlOptions:{position:(v.hasOwnProperty("mapTypePosition")&&y.ControlPosition.hasOwnProperty(v.mapTypePosition))?y.ControlPosition[v.mapTypePosition]:y.ControlPosition.TOP_RIGHT,mapTypeIds:l(v.mapTypes)}};
w.set("minZoom",u.minZoom);
w.set("maxZoom",u.maxZoom);
if(v.boundingBox){f.extend(u,w.defineBounds(v.boundingBox,x))
}y.visualRefresh=true;
this.ubber=w;
this.map=new y.Map(x,u);
b.setEvents.call(this)
}c.prototype={markers:[]};
f.extend(c.prototype,p,h,s,d,e,g,r,m,k,q,t);
j=new i(a,c);
function n(v,u,w){if(!j.isLoading){j.append("GLOBAL_ATLAS_GOOGLE_MAPS_CALLBACK",v)
}j.queue(v,u,w,c)
}return{init:n}
});
B.atlas.define("provider-leaflet",["jQuery","util-env","provider-loader"],function(e,d,h,g){var a,c=d.get("leafletURL");
function b(i,k){var j=this;
this.map=null;
this.ubber=k;
this.domNode=e(i.domNode).get(0);
B.atlas.require(["leaflet","provider-leaflet-normalize","provider-leaflet-events","provider-leaflet-markers","provider-leaflet-bounds","provider-leaflet-center","provider-leaflet-options","provider-leaflet-iw","provider-leaflet-offset","provider-leaflet-polygons","provider-leaflet-circles"],function(l){var m=[].slice.call(arguments,0);
while(m.length>1){e.extend(j,m.pop())
}j.initialize(l,i)
})
}b.prototype={markers:[],initialize:function(i,j){var k=this.normalizeOptions(j);
this.map=i.map(this.domNode,k);
this.setEvents();
i.atlasControlLayers(k.controlLayers,{mapTypeId:k.mapTypeId}).addTo(this.map);
if(k.panControl!==false){i.panControl().addTo(this.map)
}if(k.zoomPosition||k.zoomOptions){k.zoomOptions=k.zoomOptions||{};
this.configZoomControl("",k.zoomOptions.position||k.zoomPosition,k.zoomOptions)
}if(k.scaleControl){this.configScaleControl(k.scaleControl)
}}};
a=new h(c,b);
function f(j,i,k){if(!a.isLoading){a.get(j)
}a.queue(j,i,k,b)
}return{init:f}
});
B.atlas.define("provider-loader",["jQuery","util-env"],function(e,h){var b=h.get("killSwitch"),g={};
function a(j,k){if(g.hasOwnProperty(j)){return g[j]
}this.url=j;
this.isLoading=false;
this.isLoaded=false;
this.stack=[];
this.Interface=k;
g[j]=this
}a.prototype={queue:function f(){var j=[].slice.call(arguments,0);
if(this.isLoaded){this.getInterface.apply(this,j)
}else{this.stack.push(j)
}},get:function d(j){var k=this;
if(b){return
}e.getScript(this.url,function(){j.trigger("api-load",j);
k.isLoaded=true;
while(k.stack.length>0){k.getInterface.apply(k,k.stack.pop())
}});
this.isLoading=true
},append:function c(m,j){var k=document.createElement("script"),l=this;
if(b){return
}window[m]=function n(){j.trigger("api-load",j);
l.isLoaded=true;
while(l.stack.length>0){l.getInterface.apply(l,l.stack.pop())
}};
k.type="text/javascript";
k.src=this.url;
document.body.appendChild(k);
this.isLoading=true
},getInterface:function i(l,j,m,k){k=k||this.Interface;
m.call(l,new k(j,l))
}};
return a
});
B.atlas.define("provider-places",["provider-loader","util-env","util-object"],function(g,d,f){var a,c=d.get("googleMapsUrl");
function b(h,j){var i=this;
i.ubber=j;
B.atlas.require(["provider-google-places"],function(){var k=[].slice.call(arguments,0);
while(k.length>0){f.extend(i,k.pop())
}})
}a=new g(c,b);
function e(i,h,j){if(!a.isLoading){a.append("GLOBAL_ATLAS_GOOGLE_MAPS_CALLBACK",i)
}a.queue(i,h,j,b)
}return{init:e}
});
B.atlas.define("styles-cartography",function(){var a=[{featureType:"poi.business",stylers:[{visibility:"off"}]}];
return{STYLES:a}
});
B.atlas.define("styles-default",function(){var a=[{stylers:[{hue:"#feba02"},{saturation:-60}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:50},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{hue:"#003580"},{visibility:"on"}]},{featureType:"administrative.country",elementType:"stroke",stylers:[{color:"#f8f6ee"},{weight:1}]},{featureType:"administrative.country",elementType:"labels.text",stylers:[{color:"#001f54"},{visibility:"on"},{weight:0.1}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#666666"},{weight:0.1}]},{featureType:"administrative.locality",elementType:"labels.text",stylers:[{color:"#0053a7"},{visibility:"on"},{weight:0.1}]},{featureType:"administrative.locality",elementType:"labels.icon",stylers:[{color:"#0896ff"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]},{featureType:"transit.line",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#666666"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"poi.park",stylers:[{visibility:"off"},{color:"#00ff00"},{saturation:-90},{lightness:70}]}];
return{STYLES:a}
});