define(["jquery-1","h4base"],function(b,d){function e(){a();c()}function a(){b.fn.swipe=function(f){if(!this){return false}var g={threshold:{x:100,y:200,scroll:10,swipe:10,duration:100},exclude:[],swipeLeft:function(){},swipeRight:function(){}};f=b.extend({},g,f);return this.each(function(){var l={x:0,y:0},p={x:0,y:0},o=0,h=false,j=null;function k(s){if(q(s)){return}if(s.touches.length>1){h=true}var r=new Date();j=r.getTime();o=b(document).scrollTop();l.x=s.targetTouches[0].pageX;l.y=s.targetTouches[0].pageY}function i(r){if(q(r)){return}p.x=r.touches[0].pageX;p.y=r.touches[0].pageY;if(!h){var s=Math.abs(l.x-p.x);if(s>f.threshold.swipe){r.preventDefault()}}}function n(t){if(q(t)){return}if(j===null){return}if(h===true){if(t.touches.length===0){window.setTimeout(function(){h=false},250)}return}var r=new Date();var u=r.getTime()-j;var v=Math.abs(l.y-p.y);var w=l.x-p.x;var s=Math.abs(b(document).scrollTop()-o);l={x:0,y:0};p={x:0,y:0};j=null;if(s<f.threshold.scroll&&v<f.threshold.y&&u>f.threshold.duration){if(w>f.threshold.x){f.swipeLeft()}if(w<(f.threshold.x*-1)){f.swipeRight()}}}function q(u){var s="";var v=null;var r=0,t=0;if(f.exclude.length>0){v=m(u);for(t=0;t<f.exclude.length;t++){s=f.exclude[t];r=b(v).parents(s).length;if(r>0){return true}}}return false}function m(r){var s=null;if(r.target){s=r.target}else{if(r.srcElement){s=r.srcElement}}if(s.nodeType===3){s=s.parentNode}return s}this.addEventListener("touchstart",k,false);this.addEventListener("touchmove",i,false);this.addEventListener("touchend",n,false)})}}function c(){if(document.ontouchstart!==undefined){b("#h4discoveryzone").swipe({swipeLeft:function(){b(d).triggerHandler("carousel_scroll_initiated",["relative","next","touchend","Carousel_Swipe"])},swipeRight:function(){b(d).triggerHandler("carousel_scroll_initiated",["relative","previous","touchend","Carousel_Swipe"])},exclude:["#dz-flavouriser","#dz-arrow-previous","#dz-arrow-next"]})}}return{init:e}});