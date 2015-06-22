(function(){var bds=window.bds||{};bds.se=bds.se||{};bds.se.store=(function(){var l={},h=window,k=h.document,c="localStorage",o="globalStorage",d="__storejs__",g;l.disabled=false;l.set=function(e,p){};l.get=function(e){};l.remove=function(e){};l.clear=function(){};l.transact=function(e,r,p){var q=l.get(e);if(p==null){p=r;r=null}if(typeof q=="undefined"){q=r||{}}p(q);l.set(e,q)};l.getAll=function(){};l.serialize=function(e){return String(e)};l.deserialize=function(e){if(typeof e!="string"){return undefined}return e};function b(){try{return(c in h&&h[c])}catch(e){return false}}function n(){try{return(o in h&&h[o]&&h[o][h.location.hostname])}catch(e){return false}}if(b()){g=h[c];l.set=function(e,p){if(p===undefined){return l.remove(e)}g.setItem(e,l.serialize(p))};l.get=function(e){return l.deserialize(g.getItem(e))};l.remove=function(e){g.removeItem(e)};l.clear=function(){g.clear()};l.getAll=function(){var e={};for(var q=0;q<g.length;++q){var p=g.key(q);e[p]=l.get(p)}return e}}else{if(n()){g=h[o][h.location.hostname];
l.set=function(e,p){if(p===undefined){return l.remove(e)}g[e]=l.serialize(p)};l.get=function(e){return l.deserialize(g[e]&&g[e].value)};l.remove=function(e){delete g[e]};l.clear=function(){for(var e in g){delete g[e]}};l.getAll=function(){var e={};for(var q=0;q<g.length;++q){var p=g.key(q);e[p]=l.get(p)}return e}}else{if(k.documentElement.addBehavior){var j,f;try{f=new ActiveXObject("htmlfile");f.open();f.write("<script>document.w=window<\/script><iframe src='/favicon.ico'></iframe>");f.close();j=f.w.frames[0].document;g=j.createElement("div")}catch(i){g=k.createElement("div");j=k.body}function a(e){return function(){var q=Array.prototype.slice.call(arguments,0);q.unshift(g);j.appendChild(g);g.addBehavior("#default#userData");g.load(c);var p=e.apply(l,q);j.removeChild(g);return p}}function m(e){return"_"+e}l.set=a(function(q,e,p){e=m(e);if(p===undefined){return l.remove(e)}q.setAttribute(e,l.serialize(p));q.save(c)});l.get=a(function(p,e){e=m(e);return l.deserialize(p.getAttribute(e))});
l.remove=a(function(p,e){e=m(e);p.removeAttribute(e);p.save(c)});l.clear=a(function(r){var p=r.XMLDocument.documentElement.attributes;r.load(c);for(var q=0,e;e=p[q];q++){r.removeAttribute(e.name)}r.save(c)});l.getAll=a(function(s){var p=s.XMLDocument.documentElement.attributes;s.load(c);var q={};for(var r=0,e;e=p[r];++r){q[e]=l.get(e)}return q})}}}try{l.set(d,d);if(l.get(d)!=d){l.disabled=true}l.remove(d)}catch(i){l.disabled=true}return l})();function checkHsugIn(word){if(window.__sample_hsug_length){return word.length>=4||encodeURIComponent(word).length>=18}return word.length>=6||encodeURIComponent(word).length>=27}function checkHsugShow(word){return word.length>1&&encodeURIComponent(word).length>3}var ImeTrack=(function(){function getCursortPosition(ctrl){var CaretPos=0;if(document.selection){ctrl.focus();var Sel=document.selection.createRange();Sel.moveStart("character",-ctrl.value.length);CaretPos=Sel.text.length-1}else{if(ctrl.selectionStart||ctrl.selectionStart=="0"){CaretPos=ctrl.selectionStart
}}return(CaretPos)}function ImeTrack(opts){var me=this;me.logs=[];me.opts=opts||{};me.opts.logmaxnum=opts.logmaxnum||10;me.opts.adv=opts.adv||false;this.onLogChange=opts.onLogChange;if(me.opts.innerchange===undefined){me.opts.innerchange=true}me.ipt=document.getElementById(me.opts.iptId);me._kdcode=0;me._kdevt={};me._keyposition=0;me.ipt.onkeydown=function(evt){var e=evt||window.event;me._kdcode=e.keyCode||e.which;me._kdevt=e};me.ipt.onkeyup=function(evt){var e=evt||window.event;var _kucode=e.keyCode||e.which;var val=me.ipt.value||"";var _position=getCursortPosition(me.ipt);if(!me._kdcode){return}me.addLog({ku:_kucode,type:"upsave"});me._kdcode=0;me._kdevt={};me.oldval=me.ipt.value};me.ipt.onpaste=function(e){if(me._kdevt.ctrlKey){me.addLog({type:"unval-paste-key"})}else{me.addLog({type:"unval-paste-mouse"})}};me.oldval=me.ipt.value||"";me.inputchangeHandle=function(e){if(me._kdcode){me.addLog({type:"unval-change-key"})}else{var prix="";if(me.logs.length){if(new Date().getTime()-getValTime()<300){prix="unval-"
}}me.addLog({type:prix+"change-unkey"})}};function check(e){if(me.ipt.value!=me.oldval){me.oldval=me.ipt.value;me.inputchangeHandle(e)}}function getValTime(){var time=0;for(var i=me.logs.length-1;i<me.logs.length-1;i--){if(me.logs[i].type.indexOf("unval-")==-1){return me.logs[i].time}}return time}me.timmer;if(me.opts.innerchange){me.ipt.onfocus=function(e){me.timmer=setInterval(function(){check(e)},200)};me.ipt.onblur=function(){clearInterval(me.timmer)}}}ImeTrack.prototype={checkLog:function(log){var i=this.logs.length,reval=false;while(i>0){i--;if(this.logs[i].type.indexOf("unval-")!=-1){log.type=(log.type.indexOf("unval-")==-1?"":"unval-")+this.logs[i].type.replace("unval-","")+"-"+log.type.replace("unval-","");this.logs[i]=log;reval=true}else{i=-2}}if(reval){return false}while(this.logs.length>=this.opts.logmaxnum){this.logs.shift()}return true},analyseLog:function(){var me=this;if(this.logs.length>0&&this.logs[this.logs.length-1].type.indexOf("unval")==-1){var last=this.logs[this.logs.length-1];
var strA=last.val.substring(0,last.start);var strB=last.val.substring(last.start,last.cursor);var strC=last.val.substring(last.cursor);var strB1="",strB2="";function adv(){if(!me.opts.adv){return}for(var i=0;i<strB.length;i++){if(strB.charCodeAt(i)>256){strB1=strB.substring(0,i+1);strB2=strB.substring(i+1)}}}if(last.kd==229){if(strB.charCodeAt(strB.length-1)>256||!strB.match(/[\x00-\x80]/g)){this._keyposition=getCursortPosition(this.ipt);last.type+="-endime";if(strB.length==0){last.type+="-cancelime"}}else{last.type+="-imeinput";adv()}}else{if(last.type.indexOf("paste-mouse")>-1){this._keyposition=getCursortPosition(this.ipt)}else{if(last.type.indexOf("change-unkey")>-1){if(strB.length==0){this._keyposition=getCursortPosition(this.ipt);if(this.logs.length>1&&this.logs[this.logs.length-2].type.indexOf("upsave")>-1){last.type+="-link"}}else{if(strB.charCodeAt(strB.length-1)>256||!strB.match(/[\x00-\x80]/g)){this._keyposition=getCursortPosition(this.ipt);last.type+="-endime"}else{last.type+="-imeinput";
adv()}}}else{this._keyposition=getCursortPosition(this.ipt)}}}if(this.opts.adv){last.type+="-adv";last.strA=strA;last.strB=strB;last.strB1=strB1;last.strB2=strB2;last.strC=strC}this.onLogChange&&this.onLogChange.call(this,last)}},addLog:function(log){log.kd=this._kdcode;log.val=this.ipt.value;log.start=this._keyposition;log.cursor=getCursortPosition(this.ipt);log.type=log.type||0;log.time=new Date().getTime();if(this.logs.length==0||(this.logs[this.logs.length-1].val!=log.val)||(this.logs[this.logs.length-1].type.indexOf("unval-")!=-1)||(log.type.indexOf("unval-")!=-1)){if(this.checkLog(log)){this.logs.push(log)}this.analyseLog()}},getLog:function(){var _rs=this.logs.slice(0);return _rs},triggerInputChange:function(e){this.inputchangeHandle(e)},diffLog:function(){var rs=[];var imeon=false;for(var i in this.logs){if(i==0){continue}var log=this.logs[i];if(log.strB&&log.strA){if(log.strB.length===0&&log.strA.length<this.logs[i-1].strA.length){rs=[];continue}if(log.type.indexOf("link")>-1||log.type.indexOf("paste")>-1){rs=[];
continue}}var timeint=log.time-this.logs[i-1].time;if(timeint>3000){rs=[]}var type=0;var diff=(log.val.match(/[^\x00-\x80]/g)||[]).length-(this.logs[i-1].val.match(/[^\x00-\x80]/g)||[]).length;if(diff>0){type=1}else{diff=(log.val.match(/[\x00-\x80]/g)||[]).length-(this.logs[i-1].val.match(/[\x00-\x80]/g)||[]).length}if(log.type.indexOf("ime")>-1){type+=2;imeon=true}else{if(log.type.indexOf("unval")>-1&&imeon){type+=2}else{imeon=false}}if(diff>0){rs.push(type,diff,timeint)}}return rs}};return ImeTrack})();bds.se.sug=function(opts){var sug=new bdsug(opts);return sug.outInterface()};var supportInputEvent="oninput" in document.createElement("input")&&!navigator.userAgent.match(/MSIE 9/)&&!navigator.userAgent.match(/chrome\/(28|29|30|31)/i);var BDSUG_TIMESTAMP_START=1418342400000;var BDSUG_QUERY_LEV=4;function bdsug(opts){var me=this,opts=me.opts=opts||{};me.ipt=opts.ipt||null;me.reverse=opts.reverse||false;me.form=opts.form||null;me.submission=opts.submission||null;me.maxNum=opts.maxNum||10;
me.withoutMode=opts.withoutMode||false;me.withoutRich=opts.withoutRich||false;me.withoutStat=opts.withoutStat||false;me.withoutZhixin=opts.withoutZhixin||false;me.visible=false;me.stopRefresh=false;me.renderCallback=opts.renderCallback||function(){};me.selectCallback=opts.selectCallback||function(){};me.storestr=me.storestr||"";me.storearr=me.storearr||[];me.zhixinsug=[];me.zhixintemplate={};me.zhixinused={};me.zhixindata={};var F=F||{uri:function(url){return url}};me.zhixintemplate.tvsingle="http://s1.bdstatic.com/r/www/cache/static/sug/js/zhixin/tvsingle_625a9dba.js";me.query=me.ipt&&me.ipt.value||"";me.inputValue=me.query;me.showValue=me.query;me.sugValue="";me.queryValue="";me.reqValue="";me.value=me.query;me.index=-1;me.sugcontainer;me.dataCached={};me.dataArray=[];me.dataStored=[];me.dataAladdin=[];me.dataDirect=[];me.directSugSelected=false;me.dataHot=[];me.timer;me.rsv_sug=0;me.rsv_sug1=0;me.rsv_sug3=0;me.rsv_sug4=0;me.rsv_sug9=0;me.initTime=0;me.inputT=0;me.rsv_bp=bds&&bds.comm&&bds.comm.ishome===1?0:1;
me.jqXhr=null;me.ipt&&me.init()}bdsug.prototype={updateInitData:function(type){var me=this,opts=me.opts||{};me.setsug=true;me.setsugstorage=true;me.sets={};me.sugcookie=navigator.cookieEnabled&&/sug=(\d)/.test(document.cookie)?RegExp.$1:3;me.sugstorecookie=navigator.cookieEnabled&&/sugstore=(\d)/.test(document.cookie)?RegExp.$1:1;if(bds.comm&&bds.comm.personalData){if(typeof bds.comm.personalData=="string"){me.sets=eval("("+bds.comm.personalData+")")}else{me.sets=bds.comm.personalData}}if(me.sets.errno&&me.sets.errno==0&&me.sets.sugSet&&me.sets.sugSet.ErrMsg&&me.sets.sugSet.ErrMsg=="SUCCESS"){if(me.sets.sugSet.value==0){me.setsug=false}}else{if(me.sugcookie==0){me.setsug=false}}if(me.sets.errno&&me.sets.errno==0&&me.sets.sugStoreSet&&me.sets.sugStoreSet.ErrMsg&&me.sets.sugStoreSet.ErrMsg=="SUCCESS"){if(me.sets.sugStoreSet.value==0){me.setsugstorage=false}}else{if(me.sugstorecookie==0){me.setsugstorage=false}}me.loggedon=bds.comm&&bds.se.store&&!bds.se.store.disabled&&navigator.cookieEnabled;
me.showsug=opts.showsug?opts.showsug:me.setsug;me.showsugstore=opts.showsugstore?opts.showsugstore:(me.showsug&&me.loggedon&&me.setsugstorage);me.query=bds.comm.query;me.pinyin=bds.comm.pinyin;me.sugHost=bds.comm.sugHost||"";me.sid=navigator.cookieEnabled&&/H_PS_PSSID=([0-9_]+)/.test(document.cookie)?RegExp.$1:bds.comm.sid;if(type!="init"||document.referrer){me.writeStore()}},check:function(){var me=this;if(me.value!=me.ipt.value&&me.showValue!=me.ipt.value){me.inputValue=me.showValue=me.value=me.ipt.value;$(me.ipt).trigger("inputChange",[me]);me.request(me.value)}},startCircle:function(){var me=this;if(me.timer){return}$(me.ipt).trigger("start",[me]);me.timer=setTimeout(function(){me.check();me.timer=setTimeout(arguments.callee,200)},200);if(supportInputEvent){$(me.ipt).bind("input",function(){me.check()})}},stopCircle:function(){var me=this;if(me.timer){clearTimeout(me.timer);if(supportInputEvent){$(me.ipt).unbind("input")}me.timer=null;$(me.ipt).trigger("stop",[me])}},callback:function(data,mode){var me=this;
if(data&&data.exp){me.addStat("rsv_sug6",data.exp)}else{me.removeStat("rsv_sug6")}if(data&&(data.g||data.z||(me.checkStore(data)&&me.checkStore(data).length>0))){me.queryValue=data.q;if(data.q&&mode!=2){me.dataCached[data.q]=data}if(!$(me.form).hasClass("showsugzhixin")){me.withoutZhixin=true}$(me.ipt).trigger("dataReady",[me]);if(!me.withoutZhixin){function useTemplate(type){if(me.zhixintemplate[type]&&!me.zhixinused[type]){me.zhixinused[type]=$.ajax({crossDomain:true,url:me.zhixintemplate[type],dataType:"script",scriptCharset:"UTF-8"})}}if(data.zzx){for(var i=0;i<data.zzx.length;i++){if(data.zzx[i]&&data.zzx[i].type){me.zhixinsug.push({value:data.g[i].q,type:data.zzx[i].type,url:data.zzx[i].url});useTemplate(data.zzx[i].type)}}}}me.dataArray=me.packData(data);me.render(me.dataArray)}else{me.hideSug()}},buildUrl:function(val,mode,isPreReq){var me=this;var requestUrl=me.sugHost||"http://suggestion.baidu.com/su";var sugMode=mode?"&sugmode="+mode:"";var zxMode=me.withoutZhixin?"":"&zxmode=1";
if(me.sugcookie>0){me.sugcookie=3}var url=requestUrl+"?wd="+encodeURIComponent(val)+sugMode+zxMode+"&json=1&p="+me.sugcookie+"&sid="+me.sid;if(window.__preload_request){url+="&req=1"}else{if(bds.comm.supportis){url+="&req=2"}}if(window.bds&&bds.comm&&bds.comm.cur_query){url+="&bs="+encodeURIComponent(bds.comm.cur_query)}if(window.bds&&bds.comm&&bds.comm.cur_disp_query){url+="&pbs="+encodeURIComponent(bds.comm.cur_disp_query)}if(window._is_sugemptyhot_sam&&bds.comm.ishome&&!bds.comm.username&&!val&&!isPreReq){url+="&sc=hot"}else{if(!val&&!isPreReq){url+="&sc=eb"}}return url},request:function(val,mode){var me=this;val&&(val=$.limitWd(val,160));me.directSugSelected=false;if($(me.form).attr("target")=="_blank"&&$(me.ipt).attr("data-bfocus")==1){$(me.ipt).focus().attr("data-bfocus",0)}else{if(me.showsug){me.reqValue=val;if((mode!=2||bds.comm.supportis)&&me.dataCached[val]){me.callback(me.dataCached[val]);return}if(me.jqXhr){me.jqXhr.abort()}me.jqXhr=$.ajax({dataType:"jsonp",async:true,scriptCharset:"gbk",url:me.buildUrl(val,mode),jsonp:"cb",timeout:5000,success:function(data){me.callback(data,mode)
},always:function(){me.jqXhr=null}});me.rsv_sug3++;me.addStat("rsv_sug3",me.rsv_sug3);me.initTime=new Date().getTime()}else{}}},packData:function(data){var me=this;var arr=[];me.checkHot(data);me.checkAla(data);me.checkStore(data);if(!bds.comm.supportis){me.checkDirect(data)}var dataMerged=me.mergeData(data);for(var i=0;i<dataMerged.length;i++){if(bds&&bds.comm&&bds.comm.ishome==1&&bds.comm.supportis){if(i>9){break}}else{if(i>me.maxNum-1){break}}if(me.reverse){arr.unshift(dataMerged[i])}else{arr.push(dataMerged[i])}}return arr},checkHot:function(data){var me=this;me.dataHot=[];if(data.g&&data.g.length){for(var i=0;i<data.g.length;i++){var d=data.g[i];if(d.t&&d.t=="hot"){me.dataHot.push({value:d.q,otherData:d.st})}}}},checkDirect:function(data){var me=this;me.dataDirect=[];if(data.tzx&&data.tzx.type=="6"&&data.tzx.info){var d=data.tzx.info;me.dataDirect.push({value:d.site,otherData:d})}},checkAla:function(data){var me=this;me.dataAladdin=[];if(data.z&&data.z.length>0&&!me.withoutRich){for(var i=0;
i<data.z.length;i++){var d=data.z[i];if(d.id&&d.type&&d.key&&d.word){me.dataAladdin.push({value:d.key,otherData:d})}}}else{me.dataAladdin=[]}},writeStore:function(pinyin,query){var me=this;if(me.showsugstore&&me.query&&me.pinyin&&checkHsugIn(me.query)){me.getStore();var q=encodeURIComponent(me.query.toLowerCase());var p=encodeURIComponent(me.pinyin.toLowerCase());var s=BDSUG_QUERY_LEV;var t=new Date().getTime()-BDSUG_TIMESTAMP_START;var duplicate=-1;$.each(me.storearr,function(i,a){if(a.p==p){a.q=q;a.s=s;a.t=t;duplicate=i}});if(duplicate>-1){me.storearr.splice(duplicate,1)}me.storearr.push({q:q,p:p,s:s,t:t});if(me.storearr.length>(window.__sug_history_mod==11?100:50)){me.storearr.shift()}me.setStore()}},checkStore:function(data){var me=this;me.dataStored=[];if(me.showsugstore&&checkHsugShow(me.value)){if(1&&data&&data.g&&data.g.length){for(var i=0;i<data.g.length;i++){var d=data.g[i];if(d.t&&d.t=="hs"&&$.trim(d.q)){me.dataStored.push({value:$.trim(d.q),pinyin:"|",s:4,t:""})}}}if(me.dataStored.length==0){me.getStore();
$.each(me.storearr,function(i,a){var q=decodeURIComponent(a.q);var p=decodeURIComponent(a.p);if(q.indexOf(me.value.toLowerCase())==0||p.indexOf(me.value.toLowerCase())==0){if(window.__sug_history_mod==10&&(q.length<6&&encodeURIComponent(q).length<27)){}else{me.dataStored.unshift({value:q,pinyin:p,s:a.s,t:a.t})}}})}}else{if(me.showsugstore&&me.value===""){if(1&&data&&data.g&&data.g.length){for(var i=0;i<data.g.length;i++){var d=data.g[i];if(d.t&&d.t=="hs"&&$.trim(d.q)){me.dataStored.push({value:$.trim(d.q),pinyin:"|",s:4,t:""})}}}if(window._is_sugempty_sam&&!(window.bds&&bds.comm&&bds.comm.username)){me.getStore();$.each(me.storearr,function(i,a){var q=decodeURIComponent(a.q);var p=decodeURIComponent(a.p);me.dataStored.unshift({value:q,pinyin:p,s:a.s,t:a.t})})}}}return me.dataStored},getStore:function(){var me=this;try{me.storestr=bds.se.store.get("BDSUGSTORED");me.storearr=(me.storestr&&$.parseJSON(me.storestr))||[]}catch(e){me.storestr="[]";me.storearr=[]}$.each(me.storearr,function(i,a){a.t=a.t||0;
a.s=a.s||4})},setStore:function(){var me=this;var str="";$.each(me.storearr,function(i,a){str+=(i==0?"":",")+'{"q":"'+a.q+'","p":"'+a.p+'","s":'+a.s+',"t":'+a.t+"}"});me.storestr="["+str+"]";try{bds.se.store.set("BDSUGSTORED",me.storestr)}catch(e){}},mergeData:function(data){var me=this;var arr=[];var index=0;me.rsv_sug=0;if(me.dataHot.length>0&&me.value===""){for(var i=0;i<me.dataHot.length;i++){index++;arr.push(buildSug(me.dataHot[i].value,"hot",me.dataHot[i].otherData));if(index>=8){break}}return arr}if(me.dataDirect.length>0){arr.push(buildSug(me.dataDirect[0].value,"direct",me.dataDirect[0].otherData));ns_c({pj_name:"zhida_sug",zhida_prefix:encodeURIComponent(me.inputValue),zhida_query:encodeURIComponent(me.dataDirect[0].value),zhida_chufa:encodeURIComponent(me.dataDirect[0].otherData.hit_q),zhida_bp:(bds.comm.ishome)?0:1})}if(me.dataAladdin.length>0){for(var i=0;i<me.dataAladdin.length;i++){arr.push(buildSug(me.dataAladdin[0].value,"ala",me.dataAladdin[0].otherData));index++;if(index>=1){break
}}}if(me.dataStored.length>0){for(var i=0;i<me.dataStored.length;i++){var duplicate=false;for(var j=0;j<arr.length;j++){if((arr[j].type!="direct")&&me.dataStored[i].value==arr[j].value){duplicate=true}}if(!duplicate){arr.push(buildSug(me.dataStored[i].value,"store",me.dataStored[i].pinyin,me.dataStored[i].s||0));index++}me.rsv_sug++;if(me.value===""&&index>=9){break}else{if(me.value!==""&&index>=2){break}}}}var arrNormal=[];if(data.g&&data.g.length>0){for(var i=0;i<data.g.length;i++){if(data.g[i].t==="n"){var duplicate=false;for(var j=0;j<arr.length;j++){if((arr[j].type!="direct")&&data.g[i].q==arr[j].value){duplicate=true}}if(!duplicate){arrNormal.push(buildSug(data.g[i].q,data.g[i].t,data.g[i].st))}}}if(me.value===""&&arrNormal.length){if(bds.comm.supportis){arr=arrNormal.slice(0,Math.max(4-arr.length,2)).concat(arr)}else{arr=arrNormal.slice(0,Math.max(10-arr.length,5)).concat(arr)}}else{arr=arr.concat(arrNormal)}}return arr;function buildSug(v,type,otherData,s){var obj={};obj.value=v;
var escapedV=setBold(v,me.queryValue);switch(type){case"hot":var indexColor=["#f54545","#f54545","#ff8547","#ffac38"];obj.html='<span style="display:inline-block; padding:1px 0; color:#fff; width:14px; line-height:100%; font-size:12px; text-align:center; background:'+(indexColor[index]||"#aaa")+'; margin-right:5px;">'+index+"</span>";obj.html+='<span style="color:#666">'+otherData.q+"</span>";if(otherData.n&&otherData.n==1){obj.html+='<span style="display:inline-block; padding:2px; color:#fff; line-height:100%; font-size:12px; text-align:center; background:#f13f40; margin-left:5px;">æ°</span>'}obj.type="hot";break;case"direct":if(otherData.iconurl=="-"){obj.html='<p link="'+otherData.siteurl+'">'+otherData.site+"<span>"+otherData.showurl+"</span><i>å®ç½</i></p>"}else{obj.html='<p link="'+otherData.siteurl+'"><img src="'+otherData.iconurl+'"/>'+otherData.site+"<span>"+otherData.showurl+"</span></p>"}obj.type="direct";break;case"ala":obj.html="<h3>"+escapedV+"</h3><p>"+otherData.word+"</p>";
obj.type="ala";obj.alaid=otherData.id;break;case"store":if(otherData=="|"){obj.html="<span>"+escapedV+'</span><u class="bdsug-store-del bdsug-store-del-cloud" title="å¦æ¨ä¸éè¦æ­¤æç´¢åå²æç¤ºï¼&#13;å¯å¨å³ä¸è§æç´¢è®¾ç½®ä¸­å³é­">å é¤</u>'}else{obj.html="<span>"+escapedV+'</span><u class="bdsug-store-del" title="å¦æ¨ä¸éè¦æ­¤æç´¢åå²æç¤ºï¼&#13;å¯å¨å³ä¸è§æç´¢è®¾ç½®ä¸­å³é­">å é¤</u>'}obj.type="store";obj.pinyin=otherData;obj.s=s;break;default:obj.html=escapedV;break}if(!me.withoutZhixin&&me.zhixinsug.length>0){for(var z=0;z<me.zhixinsug.length;z++){if(obj.value==me.zhixinsug[z].value&&obj.type!="ala"){obj.zxtype=me.zhixinsug[z].type;obj.zxurl=me.zhixinsug[z].url;var arrowhtml='<i class="bdsug-arrow"></i>';if(obj.html.split(arrowhtml).length<=1){obj.html+=arrowhtml}}}}return obj;function setBold(str,q){var str=$.subByte(str,"41");if(q&&str){str=$.trim(str);q=$.trim(q);if(str.indexOf(q)==0&&str!==q){str=boldText(str,q)}else{str=escapeHTML(str)}}else{str=escapeHTML(str)}return str}function boldText(text,key){text=escapeHTML(text);key=escapeHTML(key);var str_begin=key;
var len=key.length;var str_end="<b>"+text.substring(len)+"</b>";return(str_begin+str_end)}function escapeHTML(str){str=str.replace(/&/g,"&amp;");str=str.replace(/</g,"&lt;");str=str.replace(/>/g,"&gt;");return str}}},render:function(dataArray){var me=this;me.is_selecting=false;if(!me.sugcontainer){me.sugcontainer=document.createElement("DIV");me.sugcontainer.className="bdsug";$(me.sugcontainer).delegate("li","mouseenter",function(){var v=$(this).data("key");me.blurSug($(me.sugcontainer).find("li"));me.focusSug(this,v);me.index=$(me.sugcontainer).find("li").index($(this))}).delegate("li","mouseleave",function(){$(this).removeClass("bdsug-s")}).delegate("li","click",function(){var v=$(this).data("key");me.directSugSelected=($(this).hasClass("bdsug-direct"))?true:false;me.sugValue=me.showValue=me.value=me.ipt.value=v;me.index=$(me.sugcontainer).find("li").index($(this));me.hideSug();me.addStat("oq",me.inputValue);me.addStat("sug",v);me.addStat("rsv_sug2",1);me.formSubmit()});$(me.sugcontainer).click(function(e){e.stopPropagation()
})}if(dataArray.length>0){var suglist=document.createElement("UL");var sclickUrl=bds&&bds.util&&bds.util.domain?bds.util.domain.get("http://sclick.baidu.com"):"http://sclick.baidu.com";for(var i=0;i<dataArray.length;i++){var sugli=document.createElement("LI");sugli.innerHTML=dataArray[i].html;if(dataArray[i].zxtype&&dataArray[i].zxurl){var v=dataArray[i].value;var t=dataArray[i].zxtype;var url=dataArray[i].zxurl;var hasData=(me.zhixindata[v]&&me.zhixindata[v].responseJSON&&me.zhixindata[v].responseJSON.status==0&&me.zhixindata[v].responseJSON.data&&me.zhixindata[v].responseJSON.data.length>0);if(!hasData){me.zhixindata[v]=$.ajax({dataType:"jsonp",async:true,url:url,jsonp:"cb"})}$(sugli).addClass("bdsug-zx").on("focused",function(){var v=$(this).data("key");var hasData=(me.zhixindata[v]&&me.zhixindata[v].responseJSON&&me.zhixindata[v].responseJSON.status==0&&me.zhixindata[v].responseJSON.data&&me.zhixindata[v].responseJSON.data.length>0);var sugzxbox=$(me.sugcontainer).find(".bdsug-box")[0];
if(hasData&&sugzxbox){if(bds.se.sugzx&&bds.se.sugzx[t]){var $sugzxbox=bds.se.sugzx[t](me.zhixindata[v].responseJSON.data,v,me.outInterface(),me);if($sugzxbox instanceof jQuery){$(me.sugcontainer).addClass("bdsug-showzx");$(sugzxbox).empty().append($sugzxbox);if($(me.sugcontainer).height()<$(me.sugcontainer).find(".bdsug-box").height()){$(me.sugcontainer).css({height:$(me.sugcontainer).find(".bdsug-box").height()})}}}}}).on("blured",function(){$(me.sugcontainer).removeClass("bdsug-showzx");$(me.sugcontainer).css({height:"auto"})})}me.setSug(sugli,dataArray[i].value,dataArray[i].type);suglist.appendChild(sugli)}if(me.form){$(me.sugcontainer).insertBefore(me.form.firstChild)}else{$(me.ipt).after(me.sugcontainer)}me.sugcontainer.innerHTML="";me.sugcontainer.appendChild(suglist);$(me.sugcontainer).removeClass("bdsug-showzx");$(me.sugcontainer).css({height:"auto"});var suglis=$(me.sugcontainer).find("ul li");if(!me.withoutZhixin){$(me.sugcontainer).addClass("bdsug-showarrow");$(me.sugcontainer).append($('<div class="bdsug-box"></div>'));
if(!$(me.form).find(".bdsug-tmp").length){$(me.form).append($('<div class="bdsug-tmp"></div>'))}$(me.sugcontainer).find(".bdsug-box").on("mouseenter",function(){$(me.sugcontainer).addClass("bdsug-showzx");$(suglis[me.index]).addClass("bdsug-s")}).on("mouseleave",function(){$(me.sugcontainer).removeClass("bdsug-showzx");$(suglis[me.index]).removeClass("bdsug-s");$(me.sugcontainer).css({height:"auto"})}).on("click",function(e){e.stopPropagation()})}$(me.form).find(".bdsug-tmp").empty();var $lishort=$("<li>").appendTo($("<div>").addClass("bdsug-showzx").appendTo($(me.form).find(".bdsug-tmp")));var $div=$("<div>").css({position:"absolute",display:"inline-block",top:"-10000px",left:"-10000px"}).appendTo($(me.form).find(".bdsug-tmp"));$.each(suglis,function(i,li){$div.html($(li).html());var cut=28;if($div.width()>($lishort.width()-$(me.sugcontainer).find(".bdsug-arrow").width()-cut)){$(li).addClass("bdsug-overflow")}});if(me.value===""&&me.dataHot.length){$(me.sugcontainer).prepend('<div style="height:25px; line-height:31px; padding-left:10px; font-size:12px; color:#333; overflow:hidden;">å®æ¶ç­æ</div>')
}var currentPage="0";if(bds.comm.ishome==0){currentPage="0"}else{if(bds.comm.ishome==1&&window.s_domain&&window.s_domain.base=="home"){currentPage="2"}else{if(bds.comm.ishome==1){currentPage="1"}}}if(me.value===""&&dataArray.length){var stoneSugNum=0;for(var i=0;i<dataArray.length;i++){if(dataArray[i].type&&dataArray[i].type=="store"){stoneSugNum++}}ns_c({pj_name:"es_sug",es_sug_num:dataArray.length,eb_sug_num:dataArray.length-stoneSugNum,es_sug_bp:currentPage+"_"+(bds.comm.supportis?1:0)});if((currentPage!=0||!bds.comm.supportis)&&me.dataStored.length&&me.dataStored.length>3){$(me.sugcontainer).append('<div style="text-align:right; background:#fafafa; color:#666; height:25px; line-height:25px;"><span class="setup_storeSug" style="margin-right:10px; text-decoration:underline; cursor:pointer;">å³é­åå²</span><span style="color:#e6e6e6;margin-right:10px;">|</span><span class="del_all_storeSug" style="margin-right:10px; text-decoration:underline; cursor:pointer;">å é¤åå²</span><span style="color:#e6e6e6;margin-right:10px;">|</span><a class="more_storeSug" href="http://i.baidu.com/my/history?from=pssug" target="_blank" style="color:#666; text-decoration:underline; margin-right:10px;">æ´å¤åå²</a></div>');
$(me.sugcontainer).find(".del_all_storeSug").click(function(){if(me.dataStored[0]&&me.dataStored[0].pinyin&&me.dataStored[0].pinyin=="|"){var deleteAllUrl=window.bds&&bds.util&&bds.util.domain&&bds.util.domain.get("http://api.open.baidu.com/pae/hsug/data/Deleteall");$.ajax({dataType:"jsonp",scriptCharset:"utf-8",jsonp:"cb",timeout:6000,url:deleteAllUrl,success:function(){return}})}me.storearr=[];me.setStore();me.hideSug();var img=window["BD_PS_C"+(new Date()).getTime()]=new Image();img.src=sclickUrl+"/w.gif?q=delall&fm=beha&rsv_sug=delall&rsv_sid="+bds.comm.sid+"&t="+new Date().getTime()+"&path=http://www.baidu.com&rsv_sug9=es_"+currentPage+"_"+(bds.comm.supportis?1:0)});$(me.sugcontainer).find(".more_storeSug").click(function(){ns_c({pj_name:"hs_sug_more"})});$(me.sugcontainer).find(".setup_storeSug").click(function(){bds.event.trigger("bd.se.loadpanel",{tabindex:0,tipsConfig:{content:(bds&&bds.comm&&bds.comm.username)?"è¯¥éé¡¹å¯ä»¥å³é­æ¨è´¦å·ä¸å¤ä¸ªè®¾å¤çæç´¢åå²":"è¯¥éé¡¹å¯ä»¥å³é­æ¨çåå²è®°å½",wrapper:"#se-setting-5"}});me.hideSug();
ns_c({pj_name:"hs_sug_setup"})})}}$.each(suglis,function(i,li){if(dataArray[i]&&dataArray[i].type=="store"){var index=i;$(li).find("u").click(function(e){e.stopPropagation();$(li).remove();if(bds&&bds.comm&&bds.comm.username){var deleteUrl=window.bds&&bds.util&&bds.util.domain&&bds.util.domain.get("http://api.open.baidu.com/pae/hsug/data/Delete");deleteUrl=deleteUrl+"?query="+encodeURIComponent(dataArray[index].value);$.ajax({dataType:"jsonp",scriptCharset:"utf-8",jsonp:"cb",timeout:6000,url:deleteUrl,success:function(){return}})}if(dataArray[index].pinyin&&dataArray[index].pinyin=="|"){me.dataCached={};var suginstore=false;$.each(me.storearr,function(dex,arr){if(encodeURIComponent(me.dataArray[index].value)==me.storearr[dex].q){suginstore=dex}});if(suginstore!==false){me.storearr.splice(suginstore,1);me.setStore()}}else{var suginstore=false;$.each(me.storearr,function(dex,arr){if(me.dataArray[index].pinyin==decodeURIComponent(me.storearr[dex].p)){suginstore=dex}});if(suginstore!==false){me.storearr.splice(suginstore,1);
me.setStore()}}var img=window["BD_PS_C"+(new Date()).getTime()]=new Image();img.src=sclickUrl+"/w.gif?q="+encodeURIComponent(dataArray[index].value)+"&fm=beha&rsv_sug=del&rsv_sid="+bds.comm.sid+"&t="+new Date().getTime()+"&path=http://www.baidu.com"+((me.value==="")?("&rsv_sug9=es_"+currentPage+"_"+(bds.comm.supportis?1:0)):"")})}});$(me.ipt).trigger("render",[me]);me.renderCallback();me.showSug();$(me.ipt).trigger("showSug",[me])}else{me.renderCallback();me.hideSug()}},setAutocomplete:function(c){var me=this;$(me.ipt).attr("autocomplete",c)},setSug:function(li,v,type){var me=this;$(li).attr("data-key",v);if(type){$(li).addClass("bdsug-"+type)}},clickIpt:function(){var me=this;if(!bds.comm.supportis&&me.query&&me.query==me.ipt.value){me.request(me.ipt.value,"2")}else{me.request(me.ipt.value)}},showSug:function(){var me=this;me.index=-1;if(me.ipt.value==me.reqValue){$(me.sugcontainer).show()}me.visible=true;me.rsv_sug1++;me.addStat("rsv_sug1",me.rsv_sug1)},hideSug:function(){var me=this;
me.is_selecting=false;$(me.ipt).trigger("hide",[me]);$(me.sugcontainer).hide();me.visible=false;if(me.jqXhr){me.jqXhr.abort()}me.jqXhr=null},selectSug:function(i){var me=this;var lis=$(me.sugcontainer).find("li");me.blurSug(lis);me.directSugSelected=(i!=-1&&lis.eq(i).hasClass("bdsug-direct"))?true:false;if(i!=-1){me.is_selecting=true;var v=$($(lis)[i]).data("key");me.focusSug(lis[i],v);me.sugValue=me.showValue=me.value=me.ipt.value=v;me.addStat("sug",v);me.addStat("oq",me.inputValue);me.addStat("rsv_n",1)}else{me.is_selecting=false;me.selectCallback(me.inputValue);me.showValue=me.value=me.ipt.value=me.inputValue;me.sugValue="";me.removeStat("sug");me.removeStat("oq");me.removeStat("rsv_n")}if(!me.inputValue&&bds.comm.ishome==1){me.stopRefresh=true}else{me.stopRefresh=false}$(me.ipt).trigger("selectSug",[me,i,v])},blurSug:function(lis){var me=this;$(lis).removeClass("bdsug-s");$(lis).trigger("blured")},focusSug:function(li,v){var me=this;$(li).addClass("bdsug-s");$(li).trigger("focused");
me.selectCallback(v)},pressUp:function(n){var me=this;var n=$(me.sugcontainer).find("li").length;me.index--;if(me.index<-1){me.index=n-1}me.selectSug(me.index)},pressDown:function(n){var me=this;var n=$(me.sugcontainer).find("li").length;me.index++;if(me.index>=n){me.index=-1}me.selectSug(me.index)},addStat:function(name,value){var me=this;if(!me.stat){me.stat={}}me.stat[name]=value;if(me.withoutStat){return}var ipthidden=$(me.form).find('input[type="hidden"][name="'+name+'"]');if(ipthidden.length){$(ipthidden).val(value)}else{$(me.form).append('<input type="hidden" name="'+name+'" value="'+value+'"/>')}},removeStat:function(name){var me=this;if(me.withoutStat){return}$(me.form).find('input[type="hidden"][name="'+name+'"]').remove();if(!me.stat){try{delete me.stat[name]}catch(e){}}},clearStat:function(){var me=this;me.removeStat("rsp");me.removeStat("rsv_n");me.removeStat("rsv_sug");me.removeStat("rsv_sug1");me.removeStat("rsv_sug2");me.removeStat("rsv_sug3");me.removeStat("rsv_sug4");me.removeStat("rsv_sug5");
me.removeStat("rsv_sug6");me.removeStat("rsv_sug9");me.stat={}},getRsvStatus:function(val){var me=this,list=[],status=[-2];if(me.rsv_sug){status=[-1];for(var i in me.dataArray){if(val==me.dataArray[i].value){status=[0,i];if(i<me.rsv_sug){status=[1,i]}}}for(var i=0;i<me.rsv_sug&&me.dataArray[i];i++){list.push(me.dataArray[i].value.length,me.dataArray[i].s)}status.push(me.index,me.rsv_sug,list.join("."))}return status.join("_")},formSubmit:function(ev){var me=this,ret=true;if(me.index!=-1){me.addStat("f",3);me.addStat("rsp",me.index);if(me.dataArray[me.index]&&me.dataArray[me.index].alaid){me.addStat("rsv_sug5",me.dataArray[me.index].alaid)}else{me.removeStat("rsv_sug5")}}if(me.inputValue===""&&me.dataArray[me.index]&&me.dataArray[me.index].type=="store"){var currentPage="0";if(bds.comm.ishome==0){currentPage="0"}else{if(bds.comm.ishome==1&&window.s_domain&&window.s_domain.base=="home"){currentPage="2"}else{if(bds.comm.ishome==1){currentPage="1"}}}me.addStat("rsv_sug9","es_"+currentPage+"_"+(bds.comm.supportis?1:0))
}else{if(me.inputValue===""){me.addStat("rsv_sug9","eb_"+(bds.comm.supportis?1:0))}}if(me.sugValue==me.value){me.removeStat("rsv_n");me.removeStat("sug")}if(me.inputT!=0){me.addStat("inputT",new Date().getTime()-me.inputT);me.directInputT=new Date().getTime()-me.inputT;me.inputT=0}if(me.rsv_sug4!=0){me.addStat("rsv_sug4",new Date().getTime()-me.rsv_sug4);me.rsv_sug4=0}me.rsv_sug&&me.addStat("rsv_sug",me.rsv_sug);if($($(me.sugcontainer).find("li")[me.index]).hasClass("bdsug-zx")){if($(me.sugcontainer).find(".bdsug-box").attr("bdsug-click")=="all"){me.addStat("rsv_sugtp",1)}else{me.addStat("rsv_sugtp",0)}}else{me.removeStat("rsv_sugtp")}try{(function(){var _t=new Date().getTime();document.cookie="WWW_ST="+_t+";expires="+new Date(_t+10000).toGMTString()})()}catch(e){}if(me.index==0&&me.dataDirect.length>0&&me.directSugSelected){window.open($(me.sugcontainer).find(".bdsug-direct p").attr("link"),"_blank");me.blankHandle();ns_c({pj_name:"zhida_sug",sug_prefix:encodeURIComponent(me.inputValue),sug_query:encodeURIComponent(me.dataDirect[0].value),sug_siteurl:encodeURIComponent(me.dataDirect[0].otherData.siteurl),sug_chufa:encodeURIComponent(me.dataDirect[0].otherData.hit_q),sug_inputT:(me.directInputT)?me.directInputT:0,rsv_bp:(bds.comm.ishome)?0:1});
if(bds&&bds.comm&&bds.comm.username){var writeUrl=window.bds&&bds.util&&bds.util.domain&&bds.util.domain.get("http://api.open.baidu.com/pae/hsug/data/write");writeUrl=writeUrl+"?query="+encodeURIComponent(me.dataDirect[0].value)+"&src=1&f=3&st="+(me.showsugstore?"1":"0");$.ajax({dataType:"jsonp",scriptCharset:"utf-8",jsonp:"cb",timeout:6000,url:writeUrl,success:function(){return}})}me.index=-1;me.directSugSelected=false}else{if($.isFunction(me.submission)){ret=me.submission.call(me.form,ev);me.hideSug();me.inputValue=me.value;me.dataCached={};me.clearStat()}if(ret){var wd=me.ipt.value;if(wd){wd=$.limitWd(wd);me.ipt.value=me.value=me.inputValue=me.showValue=wd}me.form.submit();me.blankHandle()}}if($(me.form).attr("target")!=="_blank"){me.addStat("rsv_bp",1)}},blankHandle:function(){var me=this;if(/12783/.test(bds.comm.sid)){setTimeout(function(){me.ipt.value=me.value=me.inputValue=me.showValue="";$(me.ipt).focus()},25)}else{if(/13488/.test(bds.comm.sid)){setTimeout(function(){$(me.ipt).select()
},25)}}},init:function(){var me=this;me.setAutocomplete("off");me.addStat("rsv_bp",me.rsv_bp);me.updateInitData("init");if(!bds.se.sugdnscached){$.ajax({dataType:"jsonp",async:true,scriptCharset:"gbk",url:me.buildUrl("","",true),jsonp:"cb",timeout:5000,success:function(data){}});bds.se.sugdnscached=1}me.imt=new ImeTrack({iptId:"kw",adv:true,innerchange:false});$(me.ipt).on("inputChange",function(e,me){me.imt.triggerInputChange(e)});me.startCircle();me.clearStat();$(me.ipt).on("click",function(e){e.stopPropagation();!me.withoutMode&&me.clickIpt();if(me.rsv_sug4==0){me.rsv_sug4=new Date().getTime()}}).on("focus",function(){me.startCircle()}).on("keydown",function(e){e=e||window.event;if(me.inputT==0){me.inputT=new Date().getTime()}if(me.rsv_sug4==0){me.rsv_sug4=new Date().getTime()}if(e.keyCode==9||e.keyCode==27){me.hideSug()}if(e.keyCode==13){me.addStat("rsv_sug2",0)}if(e.keyCode==86&&e.ctrlKey){me.addStat("rsv_n",2)}if(me.sugcontainer&&me.sugcontainer.style.display!="none"){if(e.keyCode==38){e.preventDefault();
me.pressUp()}if(e.keyCode==40){e.preventDefault();me.pressDown()}}else{if(e.keyCode==38||e.keyCode==40){e.preventDefault();me.request(me.value)}}});me.form&&$(me.form).submit(function(e){me.formSubmit(e);return false})},outInterface:function(){var me=this;return{setVisibleSug:(function(){var icon=$("<i class='c-icon c-icon-bear-round'></i>");return function(value){var i;icon.remove();for(i=0;i<me.dataArray.length;i++){if(me.dataArray[i].value==value){icon.appendTo($(me.sugcontainer).find("li").eq(i));break}}}})(),getStat:function(name){if(me.stat){return me.stat[name]}},clearStat:function(){return me.clearStat()},setKey:function(wd){me.ipt.value=me.value=me.inputValue=me.showValue=wd},visible:function(){return me.visible},is_selecting:function(){return me.visible&&me.is_selecting},data:function(){if(me.dataArray&&me.dataArray.length){return $.grep(me.dataArray,function(d){return d.type!="direct"})}else{return[]}},show:function(){return me.showSug()},hide:function(){return me.hideSug()},start:function(){return me.startCircle()
},stop:function(){return me.stopCircle()},setMaxNum:function(maxNum){return me.maxNum=maxNum},check:function(){return me.check()},formSubmit:function(){return me.formSubmit()},updateInitData:function(){return me.updateInitData()},on:function(){$(me.ipt).on.apply($(me.ipt),arguments)},height:function(){return $(me.sugcontainer).height()},off:function(){$(me.ipt).off.apply($(me.ipt),arguments)},getRsvStatus:function(val){return me.getRsvStatus(val)}}}}})();