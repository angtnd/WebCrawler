define(["jquery-1","utils/cookie","utils/images","istats-1","locator/locator"],function(h,A,r,w,f){var s=h("body"),x="h4",o="1",l=h("body").attr("id"),k=h("body").attr("class"),B=h("html").attr("lang"),v=h4.base.portrayNation;function n(){var C=true;var D=navigator.userAgent.match(/MSIE (\d)/);if(D&&parseInt(D[1],10)<=6){C=false}return C}function d(H){var I=A.get(x);if(I.length===0||I.charAt(0)!==o){I=o}var F=H.split("=");var J=F[0];if(I.indexOf(J+"=")>-1){var C=I.indexOf(J+"="),E=I.indexOf("|",C),D=(E>-1)?E:I.length;var G=I.substring(0,C-1),K=I.substring(D,I.length);I=G+K}if(F[1].length){I+="|"+H}if(I.length>1){A.set(x,I,{domain:".bbc.co.uk"})}else{A.remove(x,{domain:".bbc.co.uk"})}}function m(G){var I=null,E=A.get(x);if(!E||E.charAt(0)!==o||E.indexOf(G)===-1){return I}var D=E.indexOf(G+"="),C=E.indexOf("|",D),H=(C>-1)?C:E.length,F=E.substring(D,H);I=F.split("=")[1];return I}function i(){return l}function u(){return k.split(" ")[0]}function t(){return B}function b(C,F){var E={audience:i(),lang:t(),format:"json",variant:u()};var D=/(?:\:)([a-z]+)/g;C=C.replace(D,function(G,H){var I=encodeURIComponent(F[H]||E[H]);return(typeof I==="string")?I:":"+H});return C}function g(C){x=C}function z(D,C){var E={variant:k};if(v!==false){E.portray_nation=v}w.log(D,"home.four.editions."+l+"."+C,E,function(){})}function a(C,D){var E=h(C);var G="home.four.editions."+l+"."+D;var F=v?"&portray_nation="+v:"";E.each(function(){this.linktrack="variant="+k+F;w.track("internal",{region:this,linkLocation:G})})}function y(D,C){var F="home.four.editions."+l+"."+C;var E=v?"&portray_nation="+v:"";D.linktrack="variant="+k+E;w.track("internal",{region:D,linkLocation:F})}function j(){if(document.ontouchstart!==undefined){return true}else{return false}}function q(C){v=C}function c(){var C="h4cookietest";A.set(C,String(Math.floor(Math.random()*100000000)));if(A.get(C)!==""){A.remove(C);return true}return false}function p(C,H,E){var F="h4overlay",K="#"+F,D=C.find(".close"),I=C.find(".arrow");I.removeClass("left center").addClass(E);var J=C.parent();s.append('<div id="'+F+'"></div>');s.append(C);var G={left:"auto",top:"auto",right:"auto"};h.extend(G,H);C.css(G);C.fadeIn("fast",function(){var L=h(K),M=L.add(D);M.on("click",function(N){C.hide();J.append(C);L.remove()})})}function e(E,C,F){var D="#msgCookiesDisabled",H="#msgBbcCookiesDisabled";if(c()){var G=bbccookies.readPolicy().personalisation;if(G){h.extend(C,{arrowPosition:F});f.open(C);z("click","Set_Location")}else{p(h(H),C,F)}}else{p(h(D),C,F)}}require(["domReady"],function(C){if(n()&&!h("html").hasClass("blq-js")){h("html").addClass("blq-js")}});require(["domReady"],function(C){if(n()&&!h("html").hasClass("blq-js")){h("html").addClass("blq-js")}else{if(!n()&&h("html").hasClass("blq-js")){h("html").removeClass("blq-js")}}});return{updateState:d,getFragmentValue:m,setCookieName:g,interpolateRoute:b,preloadImages:r.preload,doLog:z,addiStatsLink:a,addiStatsLinkCarousel:y,getAudience:i,getVariant:u,getLang:t,isTouchDevice:j,isJavascriptEnabled:n,setPortrayNation:q,getCookieSupport:c,showLocator:e}});