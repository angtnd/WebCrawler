define(["jquery-1","h4base","utils/cookie","locator/locator"],function(e,a,r,d){var k=e("body"),b=e("#locationPrompt"),h=e("#h4clock"),p="h4overlay",m="#"+p,l=e("a.location",h),i="lp",f=b.find(".yes"),o=b.find(".no");function t(){b.hide();var u=e(m);u.remove()}function g(){return a.getFragmentValue(i)?true:false}function q(v){var u=i+"="+v;a.updateState(u)}function j(u){u.preventDefault();q("1");t();d.open({left:l.offset().left,top:l.offset().top+l.height()});a.doLog("click","LocationPrompt_Yes")}function s(u){u.preventDefault();q("1");t();a.doLog("click","LocationPrompt_No")}function c(){var v=a.getCookieSupport(),x=bbccookies.readPolicy().personalisation,y=(e("#bbccookies").length===1);if(!y&&v&&x&&!g()&&!d.hasLocation()){var w=e('<div id="'+p+'"></div>');k.append(w);k.append(b);var u=h.find(".date").offset();b.css("left",u.left);b.fadeIn("slow",function(){w.bind("click",function(){t();a.doLog("click","LocationPrompt_Cancel")})})}}function n(){c();f.on("click touchend",j);o.on("click touchend",s)}return{init:n}});