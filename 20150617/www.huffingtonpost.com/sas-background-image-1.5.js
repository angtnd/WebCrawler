ï»¿var sas=sas||{};sas.SAS=sas.SAS||{};(function(){if(!sas.SAS.rev||sas.SAS.rev<20140724){document.window=window;sas.SAS.rev=20140724;sas.get=function(b){return document.getElementById(b)};sas.getWindowWidth=function(){return(typeof(window.innerWidth)=="number")?window.innerWidth:document.documentElement.clientWidth};sas.getWindowHeight=function(){return(typeof(window.innerHeight)=="number")?window.innerHeight:document.documentElement.clientHeight};sas.getScreenWidth=function(){return(screen)?screen.width:0};sas.getScreenHeight=function(){return(screen)?screen.height:0};sas.getScrollBarWidth=function(){var h=document.createElement("p");h.style.width="100%";h.style.height="200px";var j=document.createElement("div");j.style.position="absolute";j.style.top="0px";j.style.left="0px";j.style.visibility="hidden";j.style.width="200px";j.style.height="150px";j.style.overflow="hidden";j.appendChild(h);document.body.appendChild(j);var g=h.offsetWidth;j.style.overflow="scroll";var f=h.offsetWidth;if(g==f){f=j.clientWidth}document.body.removeChild(j);return(g-f)};sas.addEventListener=function(h,j,k,g){if(h.addEventListener){h.addEventListener(j,k,g);return true}else{if(h.attachEvent){var l=h.attachEvent("on"+j,k);return l}else{h["on"+j]=k}}};sas.removeEventListener=function(h,j,k,g){if(h.removeEventListener){h.removeEventListener(j,k,g);return true}else{if(h.detachEvent){var l=h.detachEvent("on"+j,k);return l}else{h["on"+j]=undefined}}};sas.getScrollTop=function(){return(document.documentElement&&document.documentElement.scrollTop)?document.documentElement.scrollTop:document.body.scrollTop};sas.getScrollLeft=function(){return(document.documentElement&&document.documentElement.scrollLeft)?document.documentElement.scrollLeft:document.body.scrollLeft};sas.ready=function(b){this.addEventListener(d,"readystatechange",function(){if(document.readyState=="complete"){b()}})}}})();var sas=sas||{};sas.Browser=sas.Browser||{};(function(){if(!sas.Browser.rev||sas.Browser.rev<20110214){document.window=window;var h=navigator.userAgent.toLowerCase(),g=navigator.platform.toLowerCase(),j=h.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],k=j[1]=="ie"&&document.documentMode;sas.Browser.rev=20110214;sas.Browser.name=(j[1]=="version")?j[3]:j[1];sas.Browser.version=k||parseFloat((j[1]=="opera"&&j[4])?j[4]:j[2]);sas.Browser.Platform={name:h.match(/ip(?:ad|od|hone)/)?"ios":(h.match(/(?:webos|android)/)||g.match(/mac|win|linux/)||["other"])[0]};sas.Browser.Flash={};sas.Browser.mode=document.compatMode=="CSS1Compat"?"standard":"quirks";for(i=0;i<20;i++){var m=(i==0)?"":i;var l=sas.Browser;l["opera"+m]=l["ie"+m]=l["firefox"+m]=l["chrome"+m]=l["safari"+m]=false}sas.Browser[sas.Browser.name]=true;sas.Browser[sas.Browser.name+parseInt(sas.Browser.version,10)]=true;sas.Browser.Platform[sas.Browser.Platform.name]=true;sas.Browser.Flash={version:parseInt((function(){var c={};c.gfp=function(){var f=[0,0,0];if(navigator.plugins&&navigator.mimeTypes.length){var e=navigator.plugins["Shockwave Flash"];if(e&&e.description){return e.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")}}else{var o;try{o=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(p){try{var o=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");f=[6,0,21];o.AllowScriptAccess="always"}catch(p){if(f[0]==6){return f}}try{o=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(p){}}if(o!=null){return o.GetVariable("$version").split(" ")[1].split(",")}}return f};c.v=c.gfp();var a=(c.v.length>0)?c.v[0]:0;var b=(c.v.length>1)?c.v[1]:0;if(a==10&&b==2){a=11}else{if(a==10&&b>=3){a=12}else{if(a==11&&b==0){a=13}else{if(a==11&&b==1){a=14}else{if(a==11&&b==2){a=15}else{if(a==11&&b==3){a=16}else{if(a==11&&b==4){a=17}else{if(a==11&&b==5){a=18}else{if(a==11&&b==6){a=19}else{if(a==11&&b>=7){a=20}else{if(a==11&&b>=8){a=21}else{if(a==11&&b>=9){a=22}else{if(a>=12){a=23}}}}}}}}}}}}}return a})())}}})();var sas=sas||{};if(!sas.Browser){throw"sas.Browser object required"}sas.DOM=sas.DOM||{};(function(){if(!sas.DOM.rev||sas.DOM.rev<20140820){document.window=window;sas.DOM.rev=20140820;sas.createCSSElt=function(f){var g=document.createElement("style");g.setAttribute("type","text/css");if(g.styleSheet){g.styleSheet.cssText=f}else{var e=document.createTextNode(f);g.appendChild(e)}return g};sas.createBackgroundCSSElt=function(e){if(e.imageUrl!==undefined&&e.imageUrl!=""){e.image='url("'+e.imageUrl+'")'}else{e.image=""}if(e.color===undefined){e.color=""}if(e.repeat===undefined){e.repeat=""}if(e.position===undefined){e.position={top:"",left:""}}if(e.attachment===undefined){e.attachment=""}var c=(e.image==""&&e.color=="")?"":"body {background: "+e.color+" "+e.image+" "+e.repeat+" "+e.position.top+"  "+e.position.left+" "+e.attachment+";}";return sas.createCSSElt(c)};sas.createScriptElt=function(c){var e=document.createElement("script");e.type="text/javascript";e.innerHTML=c.src;return e};sas.createImgHTML=function(k){var g=(k.clickUrl!==undefined)&&k.clickUrl!="";var c=(k.clickTarget!==undefined)&&k.clickTarget!="";var h=alt=size=target="";var j=(k.pixelRatio!==undefined)?parseInt(k.pixelRatio):1;if(c){target=' target="'+k.clickTarget+'"'}if(g){h+='<a href="'+k.clickUrl+'"'+target+">"}if(k.altText!==undefined){alt=' alt="'+k.altText+'"'}if(k.width!==undefined){size+=' width="'+(k.width/j)+'"'}if(k.height!==undefined){size+=' height="'+(k.height/j)+'"'}h+='<img id="'+k.id+'" src="'+k.url+'"'+alt+size+'border="0"/>';if(g){h+="</a>"}return h};sas.createImgElt=function(e){var c=document.createElement("div");c.id=e.id+"Div";c.innerHTML=sas.createImgHTML(e);return c};sas.createSwfHTML=function(m){if(m.wMode===undefined){m.wMode="window"}if(m.flashVars===undefined){m.flashVars=""}var h={height:m.height,width:m.width};var l={quality:"high",allowScriptAccess:"always",wMode:m.wMode,swLiveConnect:true,flashVars:m.flashVars};if(sas.Browser.ie){h.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";l.movie=m.url}else{h.type="application/x-shockwave-flash"}h.data=m.url;var c='<object id="'+m.id+'Object"';for(var j in h){c+=" "+j+'="'+h[j]+'"'}c+=">";for(var k in l){if(l[k]){c+='<param name="'+k+'" value="'+l[k]+'" />'}}c+="</object>";return c};sas.createSwfElt=function(e){var c=document.createElement("div");c.id=e.id+"Div";c.innerHTML=sas.createSwfHTML(e);return c}}})();(function(){if(sasBackgroundImageConfig!==undefined){var a=sasBackgroundImageConfig,f=document,r=window;if(a.imageUrl===undefined){throw"Missing required imageUrl parameter"}if(a.backgroundRepeat===undefined){a.backgroundRepeat="repeat"}if(a.backgroundColor===undefined){a.backgroundColor="transparent"}if(a.backgroundTopOffset===undefined){a.backgroundTopOffset=0}if(a.verticalPosition===undefined){a.verticalPosition=0}if(a.horizontalPosition===undefined){a.horizontalPosition=0}if(a.wrapperHasWidth===undefined){a.wrapperHasWidth=1}if(a.allowOffsetClick===undefined){a.allowOffsetClick=1}if(a.contentWidth===undefined){a.contentWidth=0}if(a.wrapperSpacer===undefined){a.wrapperSpacer=0}if(a.wrapperCssRef===undefined){a.wrapperCssRef="ID"}if(a.fakeBodyIdTag===undefined||a.fakeBodyIdTag==""){a.fakeBodyIdTag="body"}fakebit=a.fakeBodyIdTag;if(a.fakeBodyIdTag!="body"){a.fakeBodyIdTag="#"+a.fakeBodyIdTag}a.wrapperHasWidth=Boolean(a.wrapperHasWidth);a.allowOffsetClick=Boolean(a.allowOffsetClick);a.wrapperCssRef=(a.wrapperCssRef=="ID")?"#":".";a.backgroundImage='url("'+a.imageUrl+'")';if(a.verticalPosition=="top with offset"){backgroundPosition=a.horizontalPosition+" "+a.backgroundTopOffset+"px"}else{backgroundPosition=a.horizontalPosition+" "+a.verticalPosition}padding="";if(a.contentTopOffset!==undefined){padding="padding-top:"+a.contentTopOffset+"px;"}attachment="";if(a.backgroundAttachment!==undefined){attachment=a.backgroundAttachment}if(a.forcePointerCursor==1){cursor="pointer"}else{cursor="default"}if(a.originalClickUrl!==undefined&&a.originalClickUrl!=""){if(a.clickTarget===undefined){a.clickTarget="_blank"}if(a.fakeBodyIdTag=="body"){document.onclick=function(s){var c=a.clickUrl;EE=s?s:event;if(!EE){return}var t=EE.target?EE.target:EE.srcElement;var u=navigator.userAgent;if(u.match(/iPad/i)){if(t.nodeType==3){t=t.parentNode}}if((!t||t.tagName!="BODY")&&t.parentNode.tagName!="BODY"){return}if(a.allowOffsetClick){try{if(a.backgroundTopOffset!==undefined&&EE.clientY<a.backgroundTopOffset){return}}catch(s){}}k(""+c)};var o;var n;var m;var l;if("ontouchstart" in window){var q=navigator.userAgent;if(q.match(/iPad/i)){document.ontouchstart=function(t){if(!t){var t=window.event}var c=a.clickUrl;EE=t?t:event;if(!EE){return}var u=EE.target?EE.target:EE.srcElement;if(u.nodeType==3){u=u.parentNode}if((!u||u.tagName!="BODY")&&u.parentNode.tagName!="BODY"){return}var s=new Date();o=s.getTime();n=j(EE);EE.preventDefault()};document.ontouchend=function(t){if(!t){var t=window.event}var c=a.clickUrl;EE=t?t:event;if(!EE){return}var u=EE.target?EE.target:EE.srcElement;if(u.nodeType==3){u=u.parentNode}if((!u||u.tagName!="BODY")&&u.parentNode.tagName!="BODY"){return}var s=new Date();m=s.getTime();l=j(EE);if(a.allowOffsetClick){var v=EE.touches[0];try{if(a.backgroundTopOffset!==undefined&&v.pageY<a.backgroundTopOffset){return}}catch(t){}}p();EE.preventDefault()};function j(c){if(c.touches.length==1){var v=c.touches[0];var u=0,t=0,s=Math.round(Math.sqrt(Math.pow(u-v.pageY,2)+Math.pow(t-v.pageX,2)));return s}return 0}function p(){var s=l-n;var t=m-o;var c=a.clickUrl;if(t<=100&&s<=10){k(""+c)}}}}}else{r.onload=function(){var c=a.clickUrl;if(!document.getElementById(fakebit)){var s=document.createElement("DIV");s.id=fakebit;document.body.appendChild(s)}document.getElementById(fakebit).onclick=function(t){EE=t?t:event;if(!EE){return}var u=EE.target?EE.target:EE.srcElement;if(u.id!=fakebit){return}k(""+c)}}}}var e=a.fakeBodyIdTag+" {background:"+a.backgroundColor+" "+a.backgroundImage+" "+a.backgroundRepeat+" "+backgroundPosition+" "+attachment+"!important;"+padding+"cursor:"+cursor+";width:100%!important;} "+a.fakeBodyIdTag+" > *{cursor: auto !important;}";if(a.wrapperHasWidth&&Number(a.contentWidth)>0){e=e+" "+a.wrapperCssRef+a.wrapperDivId+" { width:"+a.contentWidth+"px; margin-left:auto; margin-right:auto; }"}if(a.wrapperSpacer>0){e=e+" "+a.wrapperCssRef+a.wrapperDivId+" { margin-top:"+a.wrapperSpacer+"px; }"}var b=sas.createCSSElt(e);if(typeof(sas_ajax)!="undefined"&&sas_ajax&&a.formatId){sas_appendToContainer(a.formatId,b);sas_addCleanListener(a.formatId,function(){document.onclick=null})}else{var g=document.getElementsByTagName("head")[0];g.appendChild(b)}function k(c){if(a.clickTarget=="_blank"){window.open(c)}else{document.location=c}}var h=navigator.userAgent.match("MSIE (.)");if(h&&h[1]<=7&&a.wrapperDivId&&a.contentTopOffset>0){document.getElementById(a.wrapperDivId).style.marginTop=a.contentTopOffset+"px"}}else{throw"Missing configuration!"}})();