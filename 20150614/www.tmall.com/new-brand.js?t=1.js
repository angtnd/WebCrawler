KISSY.add("fp/mods/new-brand",function(e,t,a,n,i){return{init:function(){if(a.ie<7)return;var r=e.one("#J_FpNewBrand");var o=e.one("#J_FpMainNav");if(!r||!o)return;var s=i.viewportWidth();var d=r.one(".j_NBCtn");var l=r.one(".j_NBTrigger");var u=r.one(".j_NBVideoCon");var c=e.one("#J_NBVideo");var f=r.one(".j_NBShowBar");var p=r.one(".j_NBArrow");if(s<1210){u.css("width",560);c.attr("data-width",560)}var m=u.html();r.css({top:o.offset().top});r.fadeIn(.3);var v=s>1366;var h=f.hasClass(".new-brand-shoufa");var g=f.hasClass(".new-brand-ruzhu");var y=r.attr("data-new-brand-name");var _=n.get("__isNewBrandFold-"+y);if(_==="1"){}else{e.later(function(){b()},1e3)}n.set("__isNewBrandFold-"+y,"1",7);r.delegate("click",".j_NBTrigger",function(){if(!r.hasClass("new-brand-unfold")){b()}else{T()}});r.delegate("mouseenter mouseleave",".j_NBTrigger",function(e){if(r.hasClass("new-brand-unfold")||d.isRunning()||l.isRunning())return;if(e.type=="mouseenter"){if(f.width()>0){f.animate({"background-position-x":g?-119:-272},.3,"ease")}p.animate({left:2},.3,"ease")}else{f.animate({"background-position-x":g?-124:-277},.3,"ease");p.animate({left:-3},.3,"ease")}});t(window).on("resize",KISSY.buffer(function(){var e=i.viewportWidth();v=e>=1366;if(v){f.css({width:50});if(r.hasClass(".new-brand-1280-1366"))r.removeClass(".new-brand-1280-1366")}else if(e<1366&&e>=1024){f.css({width:0});if(r.hasClass(".new-brand-1280-1366")===false){r.addClass(".new-brand-1280-1366")}}else{}}),30);function w(){if(!c)return;var t=c.attr("data-width");var a=c.attr("data-height");var n=c.attr("data-video-url").split(".");var i=n[3].split("/");var r=i[4];var o=i[10];var s=i[11];var d=c.attr("id");e.getScript("//api.video.taobao.com/video/getPlayerJS",function(){e.later(function(){var e=window.tb_player_object;e.embedPlayer({vid:s,uid:r,tid:o,div:d,width:t,height:a},{autoplay:"true",showloadinglogo:"false"},{wmode:"transparent",allowScriptAccess:"always",allowFullScreen:"true"})},800)})}function b(){d.stop&&d.stop();w();e.later(function(){f.css({width:50})},200);r.css({width:t(window).width()});f.css({"background-position":(g?-119:-272)+"px -50px"});d.animate({width:t(window).width()-50},.8,"easeOut",function(){l.animate({right:-37,opacity:0},.3,"ease",function(){r.addClass("new-brand-unfold");l.animate({right:38,opacity:1},.3,"ease",function(){})})})}function T(){r.stop&&r.stop();u.html(m);d.stop&&d.stop();d.animate({width:0},.6,"ease",function(){f.css({"background-position":(g?-124:-277)+"px -50px"});r.css({width:50});l.animate({right:60,opacity:0},.3,"ease",function(){if(!v){f.animate({width:0},.3,"ease")}r.removeClass("new-brand-unfold");l.animate({right:0,opacity:1},.3)})})}}}},{requires:["node","ua","cookie","dom"]});