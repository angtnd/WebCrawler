define(["jquery-1","h4base"],function(c,e){var g=300,i=200,d=200,j=1000,b,l=c("#h4discoveryzone"),h=88;function f(o){var n=c(".focused .promo-panel",l);if(n.length===0){return}var r=n.parent();var q=parseInt(r.css("padding-top"),10);var m=r.outerHeight()-q;var s=c("#h4discoveryzone").find(".focused .module.promo");var p=c("p,ul",s);if(s.hasClass("superpromo")){m=m/2}clearTimeout(b);b=setTimeout(function(){var t=c("h4 a, h2 a, li a",n);c(h4).trigger("ie7ZoomFix",[t]);p.stop();p.fadeTo(i,1);n.stop();n.animate({height:m},g)},o)}function a(){var m=c(".promo-panel",l);if(m.length===0){return}var n=c("p,ul",m);clearTimeout(b);n.stop();n.fadeTo(i,0,function(){c(this).hide()});m.stop();m.animate({height:h},g)}function k(){l.delegate(".promo","mouseenter mouseover focus",function(m){f(d)});l.delegate(".promo","mouseleave",function(m){a()});c(e).bind("carousel_pane_changed",function(m){a();if(e.isTouchDevice()){f(j)}});a()}return{init:k,hidePromo:a,showPromo:f}});