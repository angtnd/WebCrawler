	 
<!DOCTYPE html> <html> <head> <meta charset="gb2312"> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <title>Ö§¸¶±¦ ÖªÍÐ¸¶£¡</title> <meta name="keywords" content="Ö§¸¶±¦,µç×ÓÖ§¸¶/ÍøÉÏÖ§¸¶/°²È«Ö§¸¶/ÊÖ»úÖ§¸¶,°²È«¹ºÎï/ÍøÂç¹ºÎï¸¶¿î/¸¶¿î/ÊÕ¿î,Ë®µçÃº½É·Ñ/ÐÅÓÃ¿¨»¹¿î/AAÊÕ¿î,Ö§¸¶±¦ÍøÕ¾"> <meta name="description" content="Ö§¸¶±¦£¬È«ÇòÁìÏÈµÄ¶ÀÁ¢µÚÈý·½Ö§¸¶Æ½Ì¨£¬ÖÂÁ¦ÓÚÎª¹ã´óÓÃ»§Ìá¹©°²È«¿ìËÙµÄµç×ÓÖ§¸¶/ÍøÉÏÖ§¸¶/°²È«Ö§¸¶/ÊÖ»úÖ§¸¶ÌåÑé£¬¼°×ªÕËÊÕ¿î/Ë®µçÃº½É·Ñ/ÐÅÓÃ¿¨»¹¿î/AAÊÕ¿îµÈÉú»î·þÎñÓ¦ÓÃ¡£"> <!--[if lte IE 7]>
	<script type="text/javascript">
    window.location.href = 'https://www.alipay.com/x/kill-ie.htm';
	</script>
    <![endif]--> <link href="https://a.alipayobjects.com" rel="dns-prefetch" /> <link href="https://app.alipay.com" rel="dns-prefetch" /> <link href="https://my.alipay.com" rel="dns-prefetch" /> <link href="https://lab.alipay.com" rel="dns-prefetch" /> <link href="https://cashier.alipay.com" rel="dns-prefetch" /> <link href="https://financeprod.alipay.com" rel="dns-prefetch" /> <link href="https://shenghuo.alipay.com" rel="dns-prefetch" /> <script type="text/javascript">
  window._to = { start: new Date() };
</script> <script type="text/javascript">
(function(e){if(!e.monitor){var a=e.monitor={};a._DATAS=[];var f=a._EVENTS=[];a.on=function(a,d){f.push([a,d])};a.off=function(){};a.log=function(c,d){if(c&&!(3<=arguments.length)){var b;"[object Object]"===Object.prototype.toString.call(c)?(b=c,b.profile=d||b.profile||"log"):b={profile:d||"log",seed:c};a._DATAS.push(b);return b}}}})(this);
(function(h,c){function q(a){return(a=String(a).match(r))?a[0]:"global"}function f(a,m,n,g,f,d,k){if(!k&&arguments.callee.caller){for(var b=arguments.callee.caller,e=[],h=0;b.arguments&&b.arguments.callee&&b.arguments.callee.caller;){b=b.arguments.callee.caller;e.push("at "+q(b));if(b.caller===b)break;if(h++>s)break}k=e.join("\n")}b={profile:t,type:a,msg:m||"",file:n||"",line:g||0,col:f||0,num:d||"",stack:k||"",lang:navigator.language||navigator.browserLanguage||"",lost:l.join(",")};
e=n+":"+g+":"+m;p.hasOwnProperty(e)||(b.uv=1,p[e]=!0);return c.log(b)}if(c){var t="jserror",s=20,r=/^\s*function\b[^\)]+\)/,l=[],d={};c.lost=function(a){if(!d.hasOwnProperty(a))return d[a]=!0,l.push(a),l};var p={};c.error=function(a){if(a instanceof Error)return f("catched",a.message||a.description,a.filename||a.fileName||a.sourceURL,a.lineno||a.lineNumber||a.line,a.colno||a.columnNumber,a.number,a.stack||a.stacktrace)};h.onerror=function(a,c,d,g){f("global",a,c,d,g);return!1}}})(this,this.monitor);
</script> 	 <script>
(function(win){
  if(!win.monitor){win.monitor = {};}

  var METHODS = ["lost", "log", "error", "on", "off"];

  for(var i=0,method,l=METHODS.length; i<l; i++){
    method = METHODS[i];
    if("function" !== typeof win.monitor[method]){
      win.monitor[method] = function(){};
    }
  }
})(window);
</script> <script charset="utf-8" crossorigin="anonymous" id="seajsnode" onerror="window.monitor && monitor.lost && monitor.lost(this.src)" src="https://a.alipayobjects.com/??seajs/seajs/2.2.3/sea.js,seajs/seajs-combo/1.0.0/seajs-combo.js,seajs/seajs-style/1.0.2/seajs-style.js,seajs/seajs-log/1.0.0/seajs-log.js,jquery/jquery/1.7.2/jquery.js,gallery/json/1.0.3/json.js,alipay-request/3.0.3/index.js"></script> <script>
seajs.config({
  alias: {
    '$': 'jquery/jquery/1.7.2/jquery',
    '$-debug': 'jquery/jquery/1.7.2/jquery',
    'jquery': 'jquery/jquery/1.7.2/jquery',
    'jquery-debug': 'jquery/jquery/1.7.2/jquery-debug',
    'seajs-debug': 'seajs/seajs-debug/1.1.1/seajs-debug'
  },
  crossorigin: function(uri){
  
    function typeOf(type){
	  return function(object){
	    return Object.prototype.toString.call(object) === '[object ' + type + ']';
	  }
	}
	var isString = typeOf("String");
	var isRegExp = typeOf("RegExp");
    
	var whitelist = [];
	
                  whitelist.push('https://a.alipayobjects.com/');
          	
	for (var i=0, rule, l=whitelist.length; i<l; i++){
	  rule = whitelist[i];
	  if (
	    (isString(rule) && uri.indexOf(rule) === 0) ||
	    (isRegExp(rule) && rule.test(uri))
		) {
		
	    return "anonymous";
	  }
	}
  },
  vars: {
    locale: 'zh-cn'
  }
});
</script> <script>
seajs.pluginSDK = seajs.pluginSDK || {
  Module: {
    _resolve: function() {}
  },
  config: {
    locale: ''
  }
};
// ¸ÉµôÔØÈë plugin-i18n.js£¬±ÜÃâ 404
seajs.config({
  map: [
	[/^.*\/seajs\/plugin-i18n\.js$/, ''],
	[/^.*\i18n!lang\.js$/, '']
  ] 
});
</script> <script>
(function(){

var JQ = '/jquery/1.7.2/jquery.js';
seajs.cache['https://a.alipayobjects.com/gallery' + JQ] = seajs.cache['https://a.alipayobjects.com/jquery' + JQ];

var GALLERY_MODULES = [
  'async','backbone','coffee','cookie','es5-safe','handlebars','iscroll',
  'jasmine','jasmine-jquery','jquery','jquery-color','json','keymaster',
  'labjs','less','marked','moment','mustache','querystring','raphael',
  'socketio','store','swfobject','underscore','zepto','ztree'
];

var ARALE_MODULES = [
  'autocomplete','base','calendar','class','cookie','dialog','easing',
  'events','iframe-uploader','iframe-shim','messenger','overlay','popup',
  'position','select','switchable','tip','validator','widget'
];

var util = {};
util.indexOf = Array.prototype.indexOf ?
  function(arr, item) {
    return arr.indexOf(item);
  } :
  function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  };
util.map = Array.prototype.map ?
  function(arr, fn) {
    return arr.map(fn);
  } :
  function(arr, fn) {
    var ret = [];
	for (var i = 0; i < arr.length; i++) {
        ret.push(fn(arr[i], i, arr));
    }
    return ret;
  };

function contains(arr, item) {
  return util.indexOf(arr, item) > -1
}

function map(id) {
  id = id.replace('#', '');

  var parts = id.split('/');
  var len = parts.length;
  var root, name;

  // id = root/name/x.y.z/name
  if (len === 4) {
    root = parts[0];
    name = parts[1];

    // gallery »ò alipay ¿ªÍ·µÄÃ»ÓÐÎÊÌâ
    if (root === 'alipay' || root === 'gallery') {
      return id;
    }

    // arale ¿ªÍ·µÄ
    if (root === 'arale') {
      // ´¦Àí arale/handlebars µÄÇé¿ö
      if (contains(GALLERY_MODULES, name)) {
        return id.replace('arale/', 'gallery/');
      } else {
        return id;
      }
    }
  }
  // id = name/x.y.z/name
  else if (len === 3) {
    name = parts[0]

    // ¿ªÍ·ÔÚ GALLERY_MODULES »ò ARALE_MODULES
    if (contains(GALLERY_MODULES, name)) {
      return 'gallery/' + id;
    } else if (contains(ARALE_MODULES, name)) {
      return 'arale/' + id;
    }
  }

  return id;
}

var _use = seajs.use;

seajs.use = function(ids, callback) {
  if (typeof ids === 'string') {
    ids = [ids];
  }

  ids = util.map(ids, function(id) {
    return map(id);
  });

  return _use(ids, callback);
}

})();
</script> <meta name="ABTest" content="" /> <script type="text/javascript">
if (!window._to) {
  window._to = { start: new Date() };
}
</script> <script charset="utf-8" crossorigin="crossorigin" src="https://a.alipayobjects.com/??static/ar/alipay.light.base-1.8.js,tracker-all/2.1.2/index.js,alipay/smartracker/2.0.0/smartracker.js"></script> <script>
  window.Tracker && Tracker.start && Tracker.start();
  

  
                                                                      
  
        
  
</script> <link rel="stylesheet" href="https://a.alipayobjects.com/u/ecmng/css/201502/4Kub1mw0fF.css" type="css/text" /> <style>
      @font-face {
        font-family: 'alipayhome';
        src: url('//at.alicdn.com/t/font_1431504418_7238076.eot'); /* IE9*/
        src: url('//at.alicdn.com/t/font_1431504418_7238076.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('//at.alicdn.com/t/font_1431504418_7238076.woff') format('woff'), /* chrome¡¢firefox */
        url('//at.alicdn.com/t/font_1431504418_7238076.ttf') format('truetype'), /* chrome¡¢firefox¡¢opera¡¢Safari, Android, iOS 4.2+*/
        url('//at.alicdn.com/t/font_1431504418_7238076.svg#iconfont') format('svg'); /* iOS 4.1- */
      }
    </style> <style>
      body, ol, ul, h1, h2, h3, h4, h5, h6, p, th, td, dl, dd, form, fieldset, legend, input, textarea, select, img {margin: 0;padding: 0;}
      body { font:12px/1.5 "Microsoft YaHei",tahoma,arial,Hiragino Sans GB,\5b8b\4f53; overflow: hidden;position: relative;}
      html,body,.am-page,.am-body,.am-bg{height:100%; width:100%;}
      html,body,.am-page{ overflow:hidden; }
      ul,li {list-style:none;}
      .am-body { position: absolute; top: 0; left: 0; }
      .iconfont {font-family: "alipayhome";-webkit-font-smoothing: antialiased;font-style: normal; display:block;}
      .clearfix {zoom:1;}
      .clearfix:after {content:"";display:block;height:0;clear:both;visibility:hidden;}
      .fl{float:left !important;}
      .fr{float:right !important;}
      .w320 { width: 320px;}
      .fn-hide { display: none !important; }
      .arrow-down { display: inline-block; width:0px; height:0px; border-width: 5px 5px 0 5px; border-color:#eeeeee transparent transparent transparent; border-style: solid dashed dashed dashed;}
      .am-page,.am-bg { background-size:cover;background-repeat:no-repeat;background-position:center center;}
      .am-page { overflow:hidden; position: relative; z-index: 1;}
      .am-bg {position:absolute;z-index: 9;top: 0;left: 0;}
      .main-content,.ft-content {width:1200px;margin:0 auto;height:100%;}
      .main-content { position:relative;z-index:99;}
      .onepage-pagination {position: absolute;right: 25px;top: 50%;z-index: 996;}
      .onepage-pagination a,.onepage-pagination .dotted {display: block;width: 10px;height: 10px;}
      .onepage-pagination a { padding: 8px;}
      .onepage-pagination .dotted {border: 1px #cccccc solid;position: relative;display: block;border-radius:50%; -webkit-transition: all 500ms ease;-o-transition: all 500ms ease;-moz-transition: all 500ms ease;-ms-transition: all 500ms ease; transition: all 500ms ease;}
      .onepage-pagination .active .dotted {border-color: #0cf; background-color:#0cf !important;}
      
      .ftbar { height:60px; overflow:hidden;z-index: 101; position:absolute;left:0;bottom:0; width:100%; background: rgba(0,0,0,.3); }
      .ft-content { }
      
      .products {padding-top: 12px;}
      .product {float:left;}
      .product .icon {font-family: "alipayhome"; color: #fff; font-size: 32px; float:left; font-style: normal; display:block;height: 32px;width: 32px;line-height: 32px; text-align: center;-webkit-font-smoothing: antialiased; }
      .product .tips { padding-left:12px; margin-left:42px; position:relative;}
      .product .tips:before { content:"";display:block; background-color:#b5b5b5; position:absolute; height:90%;width:1px;top:1px; left:-1px; }
      .product .tips p,.product .tips span {line-height: 1;}
      .product .tips p,.product .tips span  { color: #fff;}
      .product .tips p { font-size:16px;}
      .product .tips span { font-size:12px;margin-top: 5px;display: inline-block;}
      .products .zzfk,.products .gh,.products .ewmfk,.products .wjsy,.products .gjys { margin-left: 40px;}
      .products .gjhk,.products .ssqx,.products .ckbg,.products .sbfk,.products .rmbfk {float: right; margin-right: 40px;}
      /*.products .ewmfk,.products .fkmfk,.products .gjys,.products .ppzp { width: 320px;}*/
      .products .fkmfk {margin-left:150px;}
      .products .ppzp {margin-left: 130px;}
      .products .ewmfk {}
      .products .gh {}
      .products .yhf,.products .zndz {margin-left:80px;}
      /*.products .wjsy {margin-left: 80px;}*/
      .products .aqbz{margin-left: 80px;}
      .header {position:fixed;width:100%;top:0;left:0; z-index:999;}
      .header .am-header-inner { position: relative; z-index: 2;}
      .header .topNav .laymid,.topNav {background:#1e1b29;}
      .header .laymid {width:1200px; margin:0 auto;}
      .topNav {font-size:12px; height:28px; line-height:28px; }
      .topNav li {float:left;margin:0 15px; text-align:center;}
      .topNav li.first { margin-left: 0 !important;}
      .topNav,.topNav a,.topNav span {color:#fff;font-size:12px;}
      .topNav a {text-decoration:none; }
      .topNav a:hover,.topNav li.on a {color:#00bbee;}
      .topNav .rlink li {margin:0 5px;}
      .am-bannarAd-box {position:relative;z-index:1;display:none;}
      
      .mainNav {background-color:#ffffff;border-bottom: 1px #eeeeee solid;background-color:rgba(255,255,255,.9); }
      .mainMenu { margin-left:360px; }
      .alipay-logo {display:block;width:115px;position: relative;left:0;top:20px;float:left;height:40px;background-position:0 0;background-repeat:no-repeat;background-image: url(https://i.alipayobjects.com/i/localhost/png/201406/2m8C9z7xQ5_src.png);}
      .mainNav,.mainMenu,.channel .downlist .close {height:80px;}
      
      .channel {float:left; height:80px; line-height:80px;position:relative;}
      .channel .channel-a,.channel .downlist a {text-decoration:none; color:#333; font-size:16px; display:block;}
      .channel .downlist { display: none; box-shadow:0 0 2px rgba(128,128,128,0.5);  position:absolute; top:0; left:-5px; width:100%; padding:0 5px 0;text-align:center; background:#ffffff;}
      .channel .downlist a {line-height:28px;padding: 0 5px; margin: 0 -5px;}
      .channel .downlist .together { padding-bottom: 15px; }
      .channel .downlist .tp a { font-size:14px; }
      .channel .downlist .ft { border-top:1px #eeeeee solid;}
      .channel .downlist .ft span { font-size:16px; color: #999; display: block; height: 80px; line-height: 80px;}
      .channel .downlist a:hover {background:#00bbee;color:#fff;}
      .channel .downlist .close {display:block;cursor:pointer;line-height:80px;text-align:center;font-size:24px;color:#999; font-family: "alipayhome"; -webkit-font-smoothing: antialiased;}
      .mainMenu .hover .downlist {display:block;}
      
      .channel-a { padding:0 30px;}
      .channel-a:hover,.mainMenu .on .channel-a,.am-service .downlist a:hover {color:#00bbee;}
      .hasleftline {padding-left:20px;margin-left:20px;}
      .hasleftline:before { content:"";display:block;position:absolute;top:32px;left:0;width:1px;height:16px;background:#444;}
      
      .buttons { margin-top: 25px; float: right; }
      .buttons .am-button-innerNav { text-decoration: none; text-align: center; display: block; height: 28px; line-height: 28px; margin-left: 15px; }
      .buttons .button-myalipay,.buttons .button-login,.video-area .button-login {background: #00bbee; color: #ffffff;}
      .buttons .button-myalipay,.buttons .button-login { border-radius: 2px;}
      .buttons .button-login { font-size: 14px; width: 84px;}
      .buttons .button-register { color: #00bbee; font-size: 12px;}
      .buttons .button-myalipay { padding: 0 15px; margin-right: 8px; margin-left: 0; }
      .buttons dd {float: left; }
      
      .am-service {position: relative; }
      .am-service .arrow-down {*position: relative; *top:-3px; *left:3px; margin-left: 3px; -webkit-transition: .5s 0s all; -o-transition: .5s 0s all;-moz-transition: .5s 0s all; -ms-transition: .5s 0s all; transition: .5s 0s all; }
      .am-service:hover .arrow-down { -webkit-transform:rotate(180deg);-o-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg); transform:rotate(180deg);}
      .am-service .downlist { padding: 5px 0; top: 28px; left: -10px; width: 80px; text-align:center; display: none; border: 1px #f1f1f1 solid; border-width: 0 1px 1px 1px; background: #fff; position: absolute; }
      .am-service .downlist a { color: #333;display:block; }
      .am-service:hover .downlist { display: block;}
      
      /*µÚÒ»Ò³*/
      .video-loading { display: block; visibility: hidden; position: absolute; bottom: 130px; right: -40px; width: 50px; height: 50px; background: url(https://t.alipayobjects.com/images/T11pNfXnRnXXXXXXXX.gif) center center no-repeat;}
      .play { display: block; visibility: hidden; height:36px;width:36px; line-height: 36px; font-size: 34px; text-decoration: none;color: #ffffff; bottom: 130px;right: -40px;position: absolute; z-index: 99;}
      .haslogin {bottom:130px !important;}
      .video-player {background-color: transparent;min-width: 100%; min-height: 100%; display: block; position: absolute; z-index: 1; visibility: hidden;}
      .video-area { background-color: #666666;}
      .video-area .logo { margin-bottom:10px;/* width:520px;height:109px;*/ width: 420px; height: 88px; background-repeat: no-repeat; background-position: -10px 0; background-size:100% 100%;background-image: url(https://i.alipayobjects.com/i/ecmng/png/201501/4JdljnmTmX.png);}
      .video-area .laymid { position:absolute;top:50%;left:50%;width:420px;height:200px;margin-left:-195px;margin-top: -40px; }
      .video-area .am-bg { overflow: hidden;}
      .video-area .click-me a {display:block; text-decoration:none; float: left; }
      .video-area .am-button { text-align: center; cursor:pointer; display:block;border-radius:3px;outline:none; border:none;font-size: 14px; line-height: 30px; height: 30px; width: 186px; color:#fff; border-width: 1px; border-style: solid;margin-right: 20px;}
      .video-area .button-login { letter-spacing:5px; border-color: #00bbee; }
      .video-area .button-register { border-color: #ffffff; }
      
      .video-area .button-login:hover,.buttons .button-login:hover,.buttons .button-myalipay:hover {background: #00a3d2;}
      .video-area .button-login:hover {border-color: #00a3d2;}
      .video-mask,.poster {visibility: hidden; position: absolute; z-index: 9; top: 0; left: 0; width: 100%; height: 100%; opacity: 0;}
      .poster { -webkit-transition: 2s 0s opacity;-o-transition: 2s 0s opacity;-moz-transition: 2s 0s opacity;-ms-transition: 2s 0s opacity; transition: 2s 0s opacity; background-repeat:no-repeat; background-position: center center; background-size: cover; }
      
      .video-mask { visibility: hidden; z-index: 99; background: #000; opacity: 0.35; filter:alpha(opacity=40);}
      .stat-novideo .video-player,.stat-ready .video-mask { visibility: hidden; }
      .stat-playing .video-mask,.stat-end .video-mask,.stat-novideo .video-mask,.stat-pause .video-mask,.stat-pause .video-player,.stat-playing .video-player { visibility: visible;}
      .stat-playing .play { visibility: hidden; }
      .stat-pause .play { visibility: visible; }
      .stat-end .poster,.stat-novideo .poster { opacity: 1; visibility: visible;}
      .stat-end .play { visibility: visible; }
      .stat-end .video-player { visibility: hidden; }
      .stat-ready .video-loading { visibility: visible;}
      
      .popbox { display: none; height: 0;}
      .popbox .popmask { visibility: hidden; display: block; position: fixed; z-index: 997; top: 0; left: 0;background: rgba(0,0,0,0.6);}
      .popbox .loginbox .iframe,.popbox .loginbox iframe,.popbox .popmask { width: 100%; height: 100%;}
      .popbox .loginbox .iframe { position: relative;}
      .popbox .loginbox iframe { visibility: hidden; width:286px;overflow:hidden;}
      .popbox .loginbox .loading { width: 100%; height: 100%; position: absolute;top: 0; left: 0; background: url(https://t.alipayobjects.com/images/T1fONeXlBpXXXXXXXX.gif) #000000 no-repeat center center;}
      .popbox .loginbox { width: 286px; height: 380px; border-radius: 5px; overflow: hidden; visibility: hidden; position: absolute; z-index: 1001; top: 50%; left: 50%; margin-left: -143px; margin-top: -120px;}
      .popbox .popbox-close { position: absolute; z-index: 9; top: 5px; left: 10px; font-size: 16px; color: #ccc; text-decoration: none;}
      .popbox .popbox-close:hover {color:#f1f1f1;}
      .stat-login { display: block !important; }
      .stat-login .loginbox,.popbox .popmask {visibility: visible;}
      
      /*µÚ¶þÒ³*/
      .am-cloud {position: absolute; z-index: 9; background-position: 0 0; background-repeat: no-repeat;}
      .am-boy {width: 120px; left: 30%; top: 55%;}
      .am-kind {width: 600px; right: 10%; top: 10%;}
      .am-smart {width: 227px;left: -20%; top: 10px;}
      .am-flying {width: 340px; left: 0%; top: 150px;}
      .am-stupid {width: 224px; left: 5%; top: 150px;}
      .am-seeyou {width: 343px; right: -5%; top: 10px;}
      .am-here {width: 400px; right: -5%; top: 5%;}
      .songbao { -webkit-transition:.2s 0 width linear; position: absolute; z-index: 10; width: 900px; /*height: 748px;*/ bottom: 0; right: -15%;}
      
      /*×îºóÒ»Ò³*/
      .am-five .am-bg .am-part-white,.am-five .am-bg .am-part-black {width:100%;display:block;position:absolute;z-index:0;}
      .am-five .am-bg .am-part-white {top:0;left:0;background:#f5f5f5;}
      .am-five .am-bg .am-part-black {bottom:0;left:0;background:#1e1b29;}
      .am-five .am-bg .am-part-white,.am-five .white-area {height:70%;min-height: 430px;z-index: 2;}
      .am-five .am-bg .am-part-black,.am-five .black-area {height:30%;z-index: 1;}
      .am-five .white-area .layout {width:98%; margin: 0 auto;}
      
      .happy-life { padding-top:110px; }
      .youcans { padding-top:40px; padding-bottom: 40px;}
      .youcan {float:left; width: 25%; *width: 24.8%; }
      .youcan .icon {color: #aaaaaa; font-family: "alipayhome"; text-align: center; line-height: 36px; font-size: 36px; font-style: normal; float:left; display:block; height:36px; width:36px;-webkit-font-smoothing: antialiased; }
      .youcan .tips { margin-top: 4px;}
      .youcan .tips p { font-size:14px;}
      .youcan .tips span { font-size:14px; color:#999;}
      .youcan .tips a { text-decoration: none; color: #999;}
      .youcan .tips a:hover,.newslist li a:hover,.tlink a:hover {text-decoration: underline;}
      .youcan .icon-pay {color:#ffb400;}
      .youcan .icon-member {color:#47a8ef;}
      .youcan .icon-oversea  {color:#ff6600;}
      .youcan .icon-play {color:#47a8ef;}
      .youcan .title { height: 36px; line-height: 36px; font-size: 14px; margin-left: 45px;}
      
      .filed { border-top: 1px #eeeeee solid;}
      .filed a {text-decoration:none;color:#333;}
      .filed .block { padding-top: 40px; width: 25%; *width:24.8%; float: left; }
      .notice span {float:left;color:#666;}
      .newslist {margin-left: 32px;}
      .newslist li {line-height:20px; width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: pre; }
      .newslist li a,.follow-us .weibo,.follow-us,.tlink a {color:#999;}
      .tlink { margin-bottom: 10px; margin-top:2px;}
      .tlink a {line-height:1; float:left;margin-bottom:5px; margin-left:8px; padding-left:8px; border-left: 1px #999 solid;}
      .tlink a.first {margin-left: 0 !important; padding-left: 0 !important; border-left: 0 !important;}
      .follow-us {line-height: 14px;}
      .follow-us .weibo { text-decoration: underline; margin-left:5px;}
      
      .alipay-app {}
      .alipay-app p { color: #999999;}
      .qrcode { display:block; width: 80px; height: 80px; padding: 1px; border: 1px #e9e9e9 solid;}
      
      .footer,.footer a {color:#999999;}
      .footer {padding-top:30px;}
      .footer .links {line-height:1; padding:0 0 5px;}
      .footer .links a {float:left;text-decoration:none;margin-bottom:5px;border-left:1px #999999 solid; margin-right:5px; padding-left:5px;}
      .footer .links a:first-child {border-left:0;padding-left: 0 !important;}
      .footer .certs { margin-top:5px; height: 38px; }
      .footer .certs a { display: block; float: left; height: 38px; background: url(https://i.alipayobjects.com/i/ecmng/png/201501/4JdkuzOiwP.png) no-repeat 0 0; margin-right: 20px;}
      .footer .certs .pic1 {background-position: -4px -20px; width: 32px; }
      .footer .certs .pic1:hover {background-position: -2px -64px; }
      .footer .certs .pic2 {background-position: -64px -15px; width: 70px; }
      .footer .certs .pic2:hover { background-position: -62px -60px; }
      .footer .certs .pic3 {background-position: -140px -15px; width: 65px;}
      .footer .certs .pic3:hover {background-position: -138px -60px; }
      .footer .certs .pic4 {background-position: -225px -15px; width: 30px;}
      .footer .certs .pic4:hover {background-position: -223px -60px; }
      .footer .certs .pic5 {background-position: -260px -15px; width: 60px;}
      .footer .certs .pic5:hover {background-position: -258px -59px; }
      .footer .certs .pic6 {background-position: -390px -18px; width: 30px;}
      .footer .certs .pic6:hover {background-position: -390px -58px; }
      .footer .certs .pic7 {background-position: -335px -18px; width: 40px;}
      .footer .certs .pic7:hover {background-position: -334px -58px; }
      .footer .certs .pic8 {background-position: -428px -18px; width: 40px;}
      .footer .certs .pic8:hover {background-position: -428px -58px; }
      
      /*ÔªËØ³õÊ¼×´Ì¬*/
      .am-page .words { visibility:hidden; opacity:0; position:absolute; z-index: 11; background-position:0 0; background-repeat:no-repeat;}
      .am-page .words img { width: 100%; height: 100%;}
      .view2 .words {-webkit-transition:1s .2s opacity;  -o-transition:1s .2s opacity;  -moz-transition:1s .2s opacity; -ms-transition:1s .2s opacity; transition:1s .2s opacity; top:30%; left:25%; width: 315px;}
      .view3 .words {-webkit-transition:1s 1.2s opacity;-o-transition:1s 1.2s opacity;-moz-transition:1s 1.2s opacity; -ms-transition:1s 1.2s opacity; transition:1s 1.2s opacity; top:29%;left: 50%; width:345px;}
      .view4 .words {-webkit-transition:1s 1.5s opacity;-o-transition:1s 1.5s opacity;-moz-transition:1s 1.5s opacity; -ms-transition:1s 1.5s opacity; transition:1s 1.5s opacity; top:30%;left: 100px; width: 300px;}
      .view5 .words {-webkit-transition:1s .5s opacity;-o-transition:1s .5s opacity;-moz-transition:1s .5s opacity; -ms-transition:1s .5s opacity; transition:1s .5s opacity; top:30%;right:18%; width: 300px;}
      .view3 .up { position:absolute; -webkit-transition: .8s .5s all;-o-transition: .8s .5s all;-moz-transition: .8s .5s all;-ms-transition: .8s .5s all; transition: .8s .5s all; }
      .view3 .down { position:absolute; -webkit-transition: .5s .2s all;-o-transition: .5s .2s all;-moz-transition: .5s .2s all;-ms-transition: .5s .2s all; transition: .5s .2s all; }
      .view3 .up { z-index: 2; top:-500px; left:-530px; width:480px; }
      .view3 .down { z-index: 1; top:102%; left:55%; width:1600px; }
      .am-six .words {-webkit-transition:1s 1.5s opacity;-o-transition:1s 1.5s opacity;-moz-transition:1s 1.5s opacity; -ms-transition:1s 1.5s opacity; transition:1s 1.5s opacity; top:30%;left: 13%; width: 355px;}
      /* ½øÈë¶¯»­*/
      .animateIn-one .words,.animateIn-two .words,.animateIn-three .words,.animateIn-four .words,.animateIn-six .words { visibility: visible; opacity:1;}
      .am-three .am-bg,.am-one .am-bg {-webkit-transform-origin: 50% 50%; -moz-transform-origin: 50% 50%; -o-transform-origin: 50% 50%; -ms-transform-origin: 50% 50%; transform-origin: 50% 50%; }
      /*º£Íâ¹ºÎï*/
      .am-six .am-bg {-webkit-transition: 16s 0s all ease;-o-transition: 16s 0s all ease;-moz-transition: 16s 0s all ease; transition: 16s 0s all ease; -webkit-transform:scale(1,1);-o-transform:scale(1,1);-moz-transform:scale(1,1);transform:scale(1,1);}
      .animateIn-six .am-bg { -webkit-transform:scale(1.1,1.1); -o-transform:scale(1.1,1.1); -moz-transform:scale(1.1,1.1);transform:scale(1.1,1.1); }
      /*ÖÇ»ÛÒ½ÁÆ*/
      .am-three .am-bg {-webkit-transition: 16s 0s all ease;-o-transition: 16s 0s all ease;-moz-transition: 16s 0s all ease; transition: 16s 0s all ease; -webkit-transform:scale(1.1,1.1); -o-transform:scale(1.1,1.1); -moz-transform:scale(1.1,1.1);transform:scale(1.1,1.1); }
      .animateIn-three .am-bg {-webkit-transform:scale(1,1);-o-transform:scale(1,1);-moz-transform:scale(1,1);transform:scale(1,1);}
      /*ËÉ±¦*/
      .am-one .am-bg { -webkit-transition: 3s 0s all;-o-transition: 3s 0s all;-moz-transition: 3s 0s all; transition: 3s 0s all ease; -webkit-transform:scale(1.02,1.02); -o-transform:scale(1.02,1.02); -moz-transform:scale(1.02,1.02);transform:scale(1.02,1.02);}
      .animateIn-one .am-bg {-webkit-transform:scale(1,1);-o-transform:scale(1,1);-moz-transform:scale(1,1);transform:scale(1,1);}
      
      .animateIn-two .up {top: -100px; left:2%;}
      .animateIn-two .down {top:400px; left:12%;}
      
      .am-four .am-bg .mask { visibility:hidden; -webkit-transition: 2s 2s opacity; -o-transition: 2s 2s opacity; -moz-transition: 2s 2s opacity; -ms-transition: 2s 2s opacity; transition: 2s 2s opacity; opacity:0; content: ""; background: #2D0E0E; display: block; width: 100%; height: 100%; position: absolute; top: 0; left: 0; }
      .animateIn-four .am-bg .mask { opacity: 0.6; filter:alpha(opacity=60); visibility: visible; }
      
      .alipay-ads { position: relative; }
      .alipay-ads h4 { color: #000; font-weight: 800; font-size: 14px;}
      .alipay-ads p {width:160px; padding: 5px 0 10px; color: #999;}
      .alipay-ads .ads-img { border: 0; position: absolute; right: -10px; top: -10px; z-index: 1; display: block; width: 150px;}
      .alipay-ads .ads-text { position: relative; z-index: 2;}
      .alipay-ads .ads-text .link-detail {text-decoration: none; float: left; display: block; line-height: 1.5; padding: 2px 15px; background: #959595; color: #fff;}
      
      /*µ±Éè±¸¿íÐ¡Óë1200pxÊ±µÄÊÊÅä*/
      .belowW1200 .header .laymid,.belowW1200 .ft-content,.belowW1200 .main-content { width: 990px;}
      .belowW1200 .mainMenu { margin-left: 260px;}
      .belowW1200 .products .gjhk,.belowW1200 .products .sbfk { }
      .belowW1200 .products .yhf,.belowW1200 .products .zndz { margin-left: 28px;}
      .belowW1200 .products .aqbz { margin-left: 0px;}
      .belowW1200 .products .fkmfk { margin-left: 50px;}
      .belowW1200 .products .ppzp {margin-left: 20px;}
      .belowW1200 .products .wjsy {margin-left: 0;}
      .belowW1200 .products .ewmfk {}
      .belowW1200 .products .zzfk,.belowW1200 .products .ewmfk,.belowW1200 .products .wjsy { margin-left: 40px;}
      .belowW1200 .products .gh {margin-left:10px;}
      .belowW1200 .products .ckbg {margin-right:10px;}
      .belowW1200 .songbao { right: -30%;}
      .belowW1200 .am-two .words { left: 54%;}
      .belowW1200 .am-three .words { left: 50px; }
      .belowW1200 .animateIn-two .up {top: -100px; left:0%;}
      .belowW1200 .animateIn-two .down {top:400px; left:10%;}
      .belowW1200 .channel-a { padding: 0 25px;}
      .belowW1200 .alipay-ads .ads-img {right: -30px; width: 120px;}
      
      .w3 {width: 385px; margin-left: 15px;}
	  .w4 {width: 285px; margin-left: 15px;}
	  .belowW1200 .w3 {width: 320px; margin-left: 10px;}
	  .belowW1200 .w4 {width: 235px; margin-left: 12px;}
      
      /*µ±Éè±¸¸ßÐ¡Óë650pxÊ±µÄÊÊÅä*/
      .maxH650 .songbao { width: 800px; bottom: -50px;}
      .maxH650 .up { width: 420px; top: -380px; }
      .maxH650 .down { width: 1300px; }
      .maxH650 .animateIn-two .up { width: 420px; top: -100px; }
      .maxH650 .animateIn-two .down { width: 1300px; top: 300px; }
      
      .maxH800 .songbao { width: 820px; bottom: 0px;}
      .maxH800 .am-two .words { top: 35%;}
      .maxH800 .animateIn-two .up { width: 440px; top: -80px; left: 5%; }
      .maxH800 .animateIn-two .down { width: 1340px; top: 380px; left: 15%; }
      
      .big800 .am-one .words { top: 35%; left: 18%;}
      
      .big800 .am-two .words { top: 300px;}
      .big800 .animateIn-two .up { width: 500px; top: -100px; }
      .big800 .animateIn-two .down { width: 1600px; top: 460px; }
      
      /*µ±Éè±¸¸ßÓë800pxÊ±µÄÊÊÅä*/
      .bigscreen .am-five .am-bg .am-part-white,.bigscreen .am-five .white-area { height: 50%; min-width: 400px; }
      .bigscreen .am-five .am-bg .am-part-black,.bigscreen .am-five .black-area { height: 50%;}
      /*
      .go-next {text-align: center; color: #fff; font-size: 36px; position: fixed; bottom: 80px; left: 50%; margin-left: -15px; display: block; width: 40px; height: 40px; line-height: 40px; z-index: 99; cursor: pointer; }
      .upanddown {
        -webkit-animation: pulse 1.5s 0 linear infinite;
        animation: pulse 1.5s 0 linear infinite;
      }*/
      
      .laynext { position: relative; z-index: 99; line-height: 0; height: 0;top: 100%; left: 0; }
      .go-next {text-decoration: none; text-align: center; color: #ffffff; font-size: 36px; position: absolute; bottom: 80px; left: 50%; margin-left: -15px; display: block; width: 40px; height: 40px; line-height: 40px; z-index: 99; cursor: pointer;}
      
      @-webkit-keyframes upanddown {
        0%, 100% {
          bottom: 80px
        }
        50% {
          bottom: 70px
        }
      }
      
      @-webkit-keyframes aw-pulse {
        0%, 100% {
          -webkit-transform: translate3d(0,0,0);
          transform: translate3d(0,0,0);
        }
        50% {
          -webkit-transform: translate3d(0,10px,0);
          transform: translate3d(0,10px,0);
        }
      }
      
      
      .upanddown {
        -webkit-animation: pulse 2s 0 linear infinite;
        /*
        -webkit-backface-visibility: hidden;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);*/
      }
      
      /* when device-pixel-ratio == 2 */
      @media only screen and (-webkit-min-device-pixel-ratio: 2), not all, not all, not all, only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {
        .video-area .logo {background-image: url(https://i.alipayobjects.com/i/ecmng/png/201501/4JdkvPYoOr.png);}
        .alipay-logo {background-image:url(https://i.alipayobjects.com/i/localhost/png/201406/2m8CambYir_src.png);}
      
        .am-page .words,.alipay-logo,.youcan .icon,.am-three .up,.am-three .down {background-size:100% 100%;}
      
        .am-two .words {}
        .am-three .words {}
        .am-four .words {right: 15%;}
        .footer .certs a { background-image: url(https://i.alipayobjects.com/i/ecmng/png/201501/4JdloFhW69.png); background-size: 500px 100px;}
      }
      .am-page,.am-bg,.am-page .main-content,.video-mask,.ftbar {-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}
      .fuck-ie { display: none;}
      
	  .alipay-flash-logo { width: 260px; height: 45px; overflow: hidden;}
      .alipay-noflash {text-indent:-500px;overflow:hidden;}
      .white-nav .mainNav { background-color: #ffffff !important; filter: alpha(opacity=100);}
      .white-nav .header {border-bottom:0;}
      #ServerNum,#ServerNum p {line-height:1;text-align:center;color:#1e1b29;}
    </style> <!--[if lte IE 8]>
    <style type="text/css">
        .channel .downlist { border:1px #f1f1f1 solid; }
        .ftbar .ft-content { position: relative; z-index: 2; top:0; left:0;}
        .ftbar .fuck-ie { zoom:1; background:#000; filter:alpha(opacity=30); display:block; width:100%; height:100%; position: absolute; top:0; left:0; z-index: 1;}
        .popmask {background: #000; filter:alpha(opacity=60);}
    </style>
    <![endif]--> <!--[if gte IE 9]>
    <style type="text/css">
		.channel .downlist { border:1px #f1f1f1 solid; border-top:0; box-shadow: none; }
    </style>
  <![endif]--> <!--[if IE 9]>
    <script type="text/javascript">
	var loginboxHack = true;
	</script>
    <![endif]--> <script type="text/javascript" charset="utf-8">
    try{
      var oldDomain=document.domain;
      var num=oldDomain.indexOf('alipay');
      var newDomain=oldDomain.substring(num,oldDomain.length)
      document.domain=newDomain;
    } catch(msg) {
      document.domain = 'alipay.com';
    }
  </script> <script type="text/javascript">
      var autoPlay = true;
    </script> <script type="text/javascript" src="https://a.alipayobjects.com/static/aliapyhome/index/1.0.3.js"></script> </head> <body> <div class="header"> <div class="am-header-inner"> <div class="topNav"> <div class="laymid"> <ul class="fl"> <li class="on first"><a href="https://www.alipay.com/i/indexNew.htm" target="_blank" seed="">¸öÈË</a></li> <li><a href="https://enterpriseportal.alipay.com/login.htm" target="_blank" seed="">ÆóÒµ</a></li> </ul> <ul class="fr rlink"> <li><a href="https://mobile.alipay.com/index.htm" target="_blank" seed="">Ö§¸¶±¦Ç®°ü</a></li> <li><span>|</span></li> <li class="am-service"> <a class="down-a" href="javascript:;">¿Í»§·þÎñ<i class="arrow-down"></i></a> <div class="downlist"> <div class=""> <a href="http://help.alipay.com/lab/index.htm" target="_blank">·þÎñ´óÌü</a> <a href="https://cshall.alipay.com/lab/selfHelp.htm" target="_blank">×ÔÖú·þÎñ</a> <a href="http://egg.alipay.com/" target="_blank">Ìá½¨Òé</a> </div> </div> </li> </ul> </div> </div> <div class="mainNav"> <div class="laymid"> <div class="alipay-logo"></div> <div id="J_mainMenu" class="mainMenu"> <ul> <li class="channel on"> <a class="channel-a" href="https://www.alipay.com/">Ê×Ò³</a> </li> <li id="J_channel_cfzx" class="channel"> <a class="channel-a" href="javascript:;">²Æ¸»ÖÐÐÄ</a> <div class="downlist"> <div class="together"> <div class="close">&#xe611;</div> <div class="tp"> <a href="https://bao.alipay.com" class="listitem" target="_blank">Óà¶î±¦</a> <a href="https://zhaocaibao.alipay.com" class="listitem" target="_blank">ÕÐ²Æ±¦</a> <a href="https://goldetfprod.alipay.com/gold/guide.htm" class="listitem" target="_blank">´æ½ð±¦</a> <a href="http://www.taobao.com/go/chn/licai/fund.php" class="listitem" target="_blank">ÌÔÀí²Æ</a> </div> </div> <div class="ft"> <span>²Æ¸»ÖÐÐÄ</span> </div> </div> </li> <li id="J_channel_shfw" class="channel"> <a class="channel-a" href="https://appstore.alipay.com/container/web/index.htm">Éú»î·þÎñ</a> </li> <li id="J_channel_aqbz" class="channel"> <a class="channel-a" href="javascript:;">°²È«±£ÕÏ</a> <div class="downlist"> <div class="together"> <div class="close">&#xe611;</div> <div class="tp"> <a href="https://110.alipay.com/sc/index.htm" class="listitem" target="_blank">°²È«ÖÐÐÄ</a> <a href="https://personalportal.alipay.com/portal/account/safeguard.htm" class="listitem" target="_blank">»áÔ±±£ÕÏ</a> </div> </div> <div class="ft"> <span>°²È«±£ÕÏ</span> </div> </div> </li> <li id="J_channel_shfw" class="channel hasleftline"> <a class="channel-a" href="https://app.alipay.com/market/index.htm">ÉÌ¼Ò·þÎñ</a> </li> </ul> <dl id="J_buttons" class="buttons fn-hide"> <dd><a class="am-button-innerNav button-login" href="javascript:;">µÇÂ¼</a></dd> <dd><a class="am-button-innerNav button-register" href="https://memberprod.alipay.com/account/reg/index.htm" target="_blank">×¢²á</a></dd> </dl> </div> </div> </div> </div> <div id="J_bannar_box" class="am-bannarAd-box"></div> </div> <div id="J_onepage" class="am-body"> <div id="J_videoContainer" class="am-page video-area"> <div class="am-bg am-videoPlayer"> <video id="J_video_player" poster="https://i.alipayobjects.com/i/ecmng/png/201501/4Jdkug9K2v.png" class="video-player" data-height="1080" data-width="1920" height="1080" width="1920"> <source src="https://t.alipayobjects.com/images/T1T78eXapfXXXXXXXX.mp4" type="video/mp4"> </video> <div class="video-mask"></div> <div id="J_poster" class="poster" style="background-image:url(https://t.alipayobjects.com/images/T1k5ReXXlkXXXXXXXX.jpg)"></div> </div> <div class="main-content"> <div class="laymid"> <div class="logo"></div> <div class="click-me clearfix"> <a href="javascript:;" class="am-button button-login">µÇÂ¼</a> <a href="https://memberprod.alipay.com/account/reg/index.htm" target="_blank" class="am-button button-register">Á¢¼´×¢²á</a> </div> <a id="J_play" href="javascript:;" class="iconfont play">&#xe615;</a> <div class="video-loading"></div> </div> </div> </div> <div class="am-page am-one" data-animate="animateIn-one animateIn-three"> <div class="am-bg" data-lazyimg="https://t.alipayobjects.com/images/T1yXVfXfddXXXXXXXX.jpg"></div> <div class="main-content view2"> <img class="words" data-lazyimg="https://i.alipayobjects.com/i/ecmng/png/201501/4JdlKWNmB3.png" alt="" /> <img class="songbao" data-lazyimg="800,https://t.alipayobjects.com/images/T1zm4fXadgXXXXXXXX.png|https://t.alipayobjects.com/images/T1GDtfXeRcXXXXXXXX.png" alt="" /> <img class="am-cloud am-boy" data-animate="move-boy" data-lazyimg="https://i.alipayobjects.com/i/ecmng/png/201501/4JdkvPL4wX.png" alt="" /> <img class="am-cloud am-kind" data-animate="move-kind" data-lazyimg="https://t.alipayobjects.com/images/T10QFeXdlgXXXXXXXX.png" alt="" /> <img class="am-cloud am-stupid" data-animate="move-stupid" data-lazyimg="https://i.alipayobjects.com/i/ecmng/png/201501/4JdkuzHbDJ.png" /> <img class="am-cloud am-here" data-animate="move-here" data-lazyimg="https://t.alipayobjects.com/images/T19AteXc4xXXXXXXXX.png" /> </div> <div class="ftbar"> <div class="fuck-ie"></div> <div class="ft-content"> <div class="products"> <div class="product zzfk"> <i class="icon icon-zzfk">&#xe60a;</i> <div class="tips"> <p>×ªÕË¸¶¿î</p> <span>×ªµ½Ö§¸¶±¦ÕË»§£¬Ë²¼äµ½ÕË | ×ªµ½ÒøÐÐ¿¨£¬2Ð¡Ê±µ½ÕË</span> </div> </div> <div class="product gjhk"> <i class="icon icon-gjhk">&#xe600;</i> <div class="tips"> <p>¹ú¼Ê»ã¿î</p> <span>ËæÊ±ËæµØ£¬»ã±éÈ«Çò£¬ÊÖÐø·Ñ½ÚÊ¡40%¡£</span> </div> </div> </div> </div> </div> </div> <div class="am-page am-two" data-animate="animateIn-two"> <div class="am-bg" data-lazyimg="https://i.alipayobjects.com/i/ecmng/jpg/201501/4JdlRITPmX.jpg"></div> <div class="main-content view3"> <img class="words" data-lazyimg="https://t.alipayobjects.com/images/T148deXkVlXXXXXXXX.png" alt=""> <img class="up" data-lazyimg="800,https://t.alipayobjects.com/images/T1w7VeXeXXXXXXXXXX.png|https://t.alipayobjects.com/images/T1zABeXkxsXXXXXXXX.png" alt=""> <img class="down" data-lazyimg="800,https://t.alipayobjects.com/images/T177xeXdXwXXXXXXXX.png|https://t.alipayobjects.com/images/T1PQteXadyXXXXXXXX.png" alt=""> </div> <div class="ftbar"> <div class="fuck-ie"></div> <div class="ft-content"> <div class="products"> <div class="product ewmfk w320"> <i class="icon icon-ewmfk">&#xe616;</i> <div class="tips"> <p>É¨Ãè¶þÎ¬Âë»òÌõÂë¸¶¿î</p> <span>×Ô¶¯Ê¶±ð²»°²È«Á´½Ó£¬°²ÐÄ¸¶¿î</span> </div> </div> <div class="product fkmfk w320"> <i class="icon icon-fkmfk">&#xe60c;</i> <div class="tips"> <p>³öÊ¾¸¶¿îÂë¸¶¿î</p> <span>¸¶¿îÂëÃ¿´Î²»Í¬£¬±£ÕÏ¸¶¿î°²È«</span> </div> </div> <div class="product sbfk"> <i class="icon icon-sbfk">&#xe604;</i> <div class="tips"> <p>Í¨¹ýÉù²¨ÊÕ¸¶¿î</p> <span>Ã»ÓÐÍøÂçÒ²ÄÜÊÕ¿î¸¶¿î</span> </div> </div> </div> </div> </div> </div> <div class="am-page am-six" data-animate="animateIn-six"> <div class="am-bg" data-lazyimg="https://t.alipayobjects.com/images/T1y3dfXfFlXXXXXXXX.jpg"></div> <div class="main-content"> <img class="words" data-lazyimg="https://t.alipayobjects.com/images/T14uXfXdBXXXXXXXXX.png"alt=""> </div> <div class="ftbar"> <div class="fuck-ie"> </div> <div class="ft-content"> <div class="products"> <div class="product gjys w320"> <i class="icon icon-gjys">&#xe601;</i> <div class="tips"> <p>¹ú¼ÊÔËÊä</p> <span>ÈçÌÔ±¦¹ºÎï°ã¼òµ¥£¬ÎÞÐè°ìÀí×ªÔË</span> </div> </div> <div class="product ppzp w320"> <i class="icon icon-ppzp">&#xe60b;</i> <div class="tips"> <p>Æ·ÅÆÕýÆ·</p> <span>º£ÍâÉÌ¼ÒÖ±·¢£¬100%ÕýÆ·±£Ö¤</span> </div> </div> <div class="product rmbfk"> <i class="icon icon-rmbfk">&#xe60e;</i> <div class="tips"> <p>ÈËÃñ±Ò¸¶¿î</p> <span>ÎÞÐèÍâ±Ò¶Ò»»·Ñ£¬ÎÞÐèË«±ÒÖÖÐÅÓÃ¿¨</span> </div> </div> </div> </div> </div> </div> <div class="am-page am-four" data-animate="animateIn-four"> <div class="am-bg" data-lazyimg="https://i.alipayobjects.com/i/ecmng/jpg/201501/4JdkvtFg7B.jpg"> <div class="mask"></div> </div> <div class="main-content view5"> <img class="words" data-lazyimg="https://t.alipayobjects.com/images/T1fCVfXg0hXXXXXXXX.png" alt=""> </div> <div class="ftbar"> <div class="fuck-ie"></div> <div class="ft-content"> <div class="products"> <div class="product w4"> <i class="icon">&#xe61b;</i> <div class="tips"> <p>×¬µÄ¸ü¶à</p> <span>¶¨ÆÚÎÈ¶¨ÊÕÒæ£¬ÈÃÄã×¬¸ü¶à</span> </div> </div> <div class="product w4"> <i class="icon">&#xe618;</i> <div class="tips"> <p>°²È«±£ÕÏ</p> <span>È¨Íþ½ðÈÚ»ú¹¹¸ºÔð·çÏÕ¹ÜÀí</span> </div> </div> <div class="product w4"> <i class="icon">&#xe61a;</i> <div class="tips"> <p>ÂòµÄ·½±ã</p> <span>Ò»¼üÔ¤Ô¼¹ºÂò£¬×Ô¶¯Æ¥Åä³É½»</span> </div> </div> <div class="product w4"> <i class="icon">&#xe619;</i> <div class="tips"> <p>Áé»î±äÏÖ</p> <span>²úÆ·µ½ÆÚÇ°£¬¼±ÓÃÇ®Ê±¿ÉÌáÇ°±äÏÖ</span> </div> </div> </div> </div> </div> </div> <div class="am-page am-three" data-animate="animateIn-three"> <div class="am-bg" data-lazyimg="https://i.alipayobjects.com/i/ecmng/jpg/201501/4JdidBF3Kn.jpg"></div> <div class="main-content view4"> <img class="words" data-lazyimg="https://i.alipayobjects.com/i/ecmng/png/201502/4OdnkirZ89.png" alt=""> </div> <div class="ftbar"> <div class="fuck-ie"></div> <div class="ft-content"> <div class="products"> <div class="product w4"> <i class="icon">&#xe613;</i> <div class="tips"> <p>¹ÒºÅ</p> <span>ÓàºÅ²éÑ¯£¬×ã²»³ö»§¾ÍÄÜ¹ÒºÅ</span> </div> </div> <div class="product w4"> <i class="icon">&#xe609;</i> <div class="tips"> <p>ÖÇÄÜµ¼Õï</p> <span>½ÐºÅÓëµ¼º½£¬°´Ê±µ½´ï¿ÆÊÒ²»ÃÔÂ·</span> </div> </div> <div class="product w4"> <i class="icon">&#xe60d;</i> <div class="tips"> <p>¸¶Ò½Ò©·Ñ</p> <span>ÊÖ»úÖ§¸¶£¬¸÷ÀàÒ½Ò©·Ñ±ß×ß±ß¸¶</span> </div> </div> <div class="product w4"> <i class="icon">&#xe603;</i> <div class="tips"> <p>²é¿´±¨¸æ</p> <span>ÏûÏ¢Í¨Öª£¬ËæÊ±²é¿´¾ÍÕï±¨¸æ</span> </div> </div> </div> </div> </div> </div> <div class="am-page am-five"> <div class="am-bg"> <div class="am-part-white"></div> <div class="am-part-black"></div> </div> <div class="main-content"> <div class="white-area"> <div class="layout"> <div class="happy-life"> <div class="youcans clearfix"> <div class="youcan"> <div class="up clearfix"> <i class="icon icon-pay">&#xe614;</i> <p class="title">¸¶¿î£¬ÊÇ¼þÈÝÒ×µÄÊÂ</p> </div> <div class="tips"> <span><a href="http://home.alipay.com/bank/paymentKJ.htm" target="_blank">¸¶¿î·½Ê½</a> | <a href="http://ab.alipay.com/yinhang.htm" target="_blank">134 ¼Ò½ðÈÚ»ú¹¹</a></span> </div> </div> <div class="youcan"> <div class="up clearfix"> <i class="icon icon-member">&#xe60f;</i> <p class="title">»áÔ±±£ÕÏ£¬°²ÐÄ¸¶¿î</p> </div> <div class="tips"> <span><a href="https://110.alipay.com/sc/index.htm" target="_blank">°²È«Éý¼¶</a> | <a href="https://110.alipay.com/sc/study/index.htm" target="_blank">Ó¦¼±·þÎñ</a> | <a href="https://personalportal.alipay.com/portal/account/safeguard.htm" target="_blank">ÀíÅâ·þÎñ</a></span> </div> </div> <div class="youcan"> <div class="up clearfix"> <i class="icon icon-oversea">&#xe606;</i> <p class="title">º£ÍâÉÌÆ·¡¢Ïë¹º¾Í¹º</p> </div> <div class="tips"> <span><a href="javascript:;" target="_blank">È«ÇòÖ±¹º</a> | <a href="http://g.alipay.com/haitao/vip-web.htm" target="_blank">º£ÍâÖ±ÓÊ</a></span> </div> </div> <div class="youcan"> <div class="up clearfix"> <i class="icon icon-play">&#xe607;</i> <p class="title">Íæ×ªÖ§¸¶±¦</p> </div> <div class="tips"> <span><a href="http://abc.alipay.com/cool/taobao.htm" target="_blank">ÈçºÎ¹ºÎï</a> | <a href="http://abc.alipay.com/cool/xsqh.htm" target="_blank">ÐÂÊÖÐëÖª</a> | <a href="http://abc.alipay.com/cool/shopInformation.htm" target="_blank">ÎÒÒª¿ªµê</a></span> </div> </div> </div> </div> <div class="filed clearfix"> <div class="block"> <div class="tlink clearfix"> <a class="first" href="http://help.alipay.com/lab/help_detail.htm?help_id=212412" title="Ö§¸¶±¦·þÎñÐ­Òé" target="_blank">Ö§¸¶±¦ÊÕ·Ñ¹æÔò</a> <a href="http://help.alipay.com/lab/help_detail.htm?help_id=211403" title="Ö§¸¶±¦·þÎñÐ­Òé" target="_blank">Ö§¸¶±¦·þÎñÐ­Òé</a> <a href="https://cshall.alipay.com/lab/help_detail.htm?help_id=259939" title="Ö§¸¶±¦·þÎñÐ­Òé" target="_blank">ÒþË½È¨¹æÔò</a> </div> <div class="notice"> <span>¹«¸æ</span> <ul class="newslist"> <li><a href="https://cshall.alipay.com/lab/help_detail.htm?help_id=551191" target="_blank">±ä¸üÖ§¸¶±¦·þÎñÐ­ÒéµÄ¹«¸æ</a></li> </ul> </div> </div> <div class="block"> <div class="follow-us"> <span>Ö§¸¶±¦¹Ù·½Î¢²© <a class="weibo" href="http://weibo.com/alipay" target="_blank">+¹Ø×¢</a></span> </div> </div> <div class="block"> <div class="alipay-app"> <p>ÏÂÔØÖ§¸¶±¦Ç®°ü</p> <img src="https://i.alipayobjects.com/i/ecmng/jpg/201501/4JeKe0VC1t.jpg" class="qrcode" alt="Ö§¸¶±¦Ç®°ü"> </div> </div> <div class="block"> <div class="alipay-ads"> <div class="ads-text"> <h4>Ö§¸¶±¦E¹«Òæ</h4> <p>°ïÖúÌýÁ¦ÖÇÕÏ¶ùÍ¯£¬Ï×°®ÐÄ¡£</p> <a class="link-detail" href="https://love.alipay.com/donate/index.htm" target="_blank">Á¢¼´²é¿´</a> </div> <img class="ads-img" src="https://t.alipayobjects.com/images/T1L0JfXdhmXXXXXXXX.jpg" /> </div> </div> </div> </div> </div> <div class="black-area"> <div class="footer"> <div class="links clearfix"> <a href="http://ab.alipay.com/i/index.htm" target="_blank">¹ØÓÚÖ§¸¶±¦</a> <a href="http://job.alipay.com/index.php" target="_blank">³ÏÕ÷Ó¢²Å</a> <a href="http://ab.alipay.com/i/lianxi.htm" target="_blank">ÁªÏµÎÒÃÇ</a> <a href="http://global.alipay.com/ospay/home.htm" target="_blank">International Business</a> <a href="http://ab.alipay.com/i/jieshao.htm#en" target="_blank">About Alipay</a> <span>Ö§¸¶±¦°æÈ¨ËùÓÐ 2004-2015 ICPÖ¤: ÕãB2-20120045</span> </div> <div class="links"> <p class="clearfix"> <a href="http://www.antgroup.com" target="_blank">ÂìÒÏ½ð·þ¼¯ÍÅ</a> <a href="http://www.alipay.com" target="_blank">Ö§¸¶±¦</a> <a href="https://mobile.alipay.com/index.htm" target="_blank">Ö§¸¶±¦Ç®°ü</a> <a href="https://bao.alipay.com/fund/index.htm" target="_blank">Óà¶î±¦</a> <a href="http://zhaocaibao.alipay.com/" target="_blank">ÕÐ²Æ±¦</a> <a href="javascript:;" target="_blank">ÂìÒÏÎ¢´û</a> <a href="javascript:;" target="_blank">ÍøÉÌÒøÐÐ£¨³ï£©</a> </p> </div> <div class="links clearfix"> <a href="http://page.1688.com/shtml/about/ali_group1.shtml" target="_blank">°¢Àï°Í°Í¼¯ÍÅ</a> <a href="http://www.taobao.com/" target="_blank">ÌÔ±¦Íø</a> <a href="http://www.tmall.com/" target="_blank">ÌìÃ¨</a> <a href="http://ju.taobao.com/" target="_blank">¾Û»®Ëã</a> <a href="http://www.aliexpress.com/" target="_blank">È«ÇòËÙÂôÍ¨</a> <a href="http://www.alibaba.com/" target="_blank">°¢Àï°Í°Í¹ú¼Ê½»Ò×ÊÐ³¡</a> <a href="http://www.1688.com/" target="_blank">1688</a> <a href="http://www.alimama.com/index.htm" target="_blank">°¢ÀïÂèÂè</a> <a href="http://www.alitrip.com/" target="_blank">°¢ÀïÂÃÐÐ¡¤È¥°¡</a> <a href="http://www.aliyun.com/" target="_blank">°¢ÀïÔÆ¼ÆËã</a> <a href="http://www.yunos.com/" target="_blank">YunOS</a> <a href="http://www.aliqin.cn/" target="_blank">°¢ÀïÍ¨ÐÅ</a> <a href="http://www.net.cn/" target="_blank">ÍòÍø</a> <a href="http://www.autonavi.com/" target="_blank">¸ßµÂ</a> <a href="http://www.uc.cn/" target="_blank">ÓÅÊÓ</a> <a href="http://www.umeng.com/" target="_blank">ÓÑÃË</a> <a href="https://kanbox.com/" target="_blank">¿áÅÌ</a> <a href="http://www.xiami.com/" target="_blank">ÏºÃ×</a> <a href="http://www.ttpod.com/" target="_blank">ÌìÌì¶¯Ìý</a> <a href="http://www.laiwang.com/" target="_blank">À´Íù</a> <a href="http://www.dingtalk.com/?lwfrom=20150202140030825" target="_blank">¶¤¶¤</a> <a href="https://11main.com/" target="_blank">11 Main</a> </div> <div class="certs"> <a class="pic1" href="http://fun.alipay.com/certificate/zfxkz.htm" target="_blank"></a> <a class="pic2" href="http://fun.alipay.com/certificate/index.htm" target="_blank"></a> <a class="pic3" href="javascript:;"></a> <a class="pic4" href="https://sealinfo.verisign.com/splash?form_file=fdf/splash.fdf&dn=WWW.ALIPAY.COM&lang=zh_cn" target="_blank"></a> <a class="pic5" href="http://zjnet.zjaic.gov.cn/index.action" target="_blank"></a> <a class="pic6" href="http://fun.alipay.com/certificate/index.htm" target="_blank"></a> <a class="pic7" href="http://www.pingpinganan.gov.cn/" target="_blank"></a> <a class="pic8" href="https://ss.knet.cn/verifyseal.dll?sn=e12051633010021345301459&ct=df&pa=803798" target="_blank"></a> </div> <div id="ServerNum"><p>cmscenter-60-76</p></div> </div> </div> </div> </div> </div> <a id="J_gonext" href="javascript:;" class="iconfont go-next upanddown">&#xe612;</a> <div id="J_popbox" class="popbox"> <div id="J_popmask" class="popmask"></div> <div id="J_loginbox" class="loginbox"> <a href="javascript:;" class="popbox-close">¡Á</a> <div class="iframe"> <div id="J_iframeMask" class="loading"></div> <iframe id="J_loginIframe" allowtransparency="true" width="286" scrolling="no" data-src="https://auth.alipay.com/login/homeB.htm?redirectType=parent" frameborder="0"></iframe> </div> </div> </div> <script type="text/javascript">
    //ÅÐ¶ÏÊÇ·ñÓÐflash
    function hadFlash(){
        var result = false;
        var obj = null;
        var activeXEnabled = function(){
            if(!window.ActiveXObject) return false;
            var external = window.external;
            try{
                if(external && typeof external.msActiveXFilteringEnabled != "undefined" && external.msActiveXFilteringEnabled()){
                    return false;
                }
            }catch(e){}
            return true;
        };

        if (activeXEnabled()) {
            try {
                obj =  new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                result = !!obj;
            }
            catch (e) {} finally {obj = null;}
        }
        else {
            if(navigator.plugins) result = navigator.plugins['Shockwave Flash'];
        }
        return !!result;
    }
    </script> <script type="text/javascript">
        if (typeof console === 'undefined') { console = { log: function() {} }; }
        var $, jq;
        function consoleSomething(){
          if(jq.browser.webkit) {
            console.log('%c AliPay %c Copyright @%s', 'font-size:48px;color:#47a8ef;-webkit-text-fill-color:#47a8ef;-webkit-text-stroke: 1px black;', 'font-size:12px;color:#999;', new Date().getFullYear());
            console.log('%c \u6e29\u99a8\u63d0\u793a\uff1a\u8bf7\u4e0d\u8981\u8c03\u76ae\u7684\u5728\u6b64\u7c98\u8d34\u6267\u884c\u4efb\u4f55\u5185\u5bb9\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u60a8\u7684\u8d26\u6237\u53d7\u5230\u653b\u51fb\uff0c\u7ed9\u60a8\u5e26\u6765\u635f\u5931\u0020\uff01\u005e\u005f\u005e', 'color:#333;font-size:16px;')
            console.log('\n  \u505a\u5730\u7403\u4e0a\u6700\u5177\u4e92\u8054\u7f51\u6027\u3001\u521b\u65b0\u6027\u3001\u4e13\u4e1a\u6709\u7231\u7684\u56e2\u961f\u3002 %s', 'https://github.com/lifesinger/lifesinger.github.com/issues/201')
          }
        }
        seajs.use('jquery', function(jquery) {
          $ = jq = jquery;
          seajs.use('init');
          consoleSomething();
          if(!hadFlash()) {
            var flash = $('#J_alipay_flash_logo');
            var noflash = $('#J_alipay_noflash');
            if(flash.length > 0) {
              flash.css({"display":"none"});
              flash.addClass("fn-hide");
              noflash.removeClass("fn-hide");
            }
          }
        });
    </script> <script type="text/javascript">
window.Smartracker && Smartracker.sow&&Smartracker.sow();
</script> <script type="text/javascript">
function _use_monitor(){

  if(!window.seajs){return;}

  // ÃüÖÐÂÊ£º[0,1]: Êµ¼Ê¶ÔÓ¦²ÉÑùÂÊ£º[0%,100%]
  // ×¢Òâ£ºsens_rate ¸ú sens_rate ÊÇÓÐ¹ØÁªµÄ¡£
  //      Êµ¼ÊÉèÖÃµÄÄÚÈÝÊ±£¬Ó¦¸Ã²Î¿¼ÒÔÏÂËã·¨£º
  //      Ãô¸ÐÐÅÏ¢¼à¿ØÊµ¼Ê²ÉÑùÂÊ = sens_rate * jserr_rate;
  var jserr_rate = 1;
  var sens_rate = 0.01;
  var performance_rate = 0.1;

  // Ëæ»ú²ÉÑùÃüÖÐËã·¨¡£
  // @param {Nuber} rate, ²ÉÑùÂÊ£¬[0,1] Çø¼äµÄÊýÖµ¡£
  // @return {Boolean}
  function hit(rate){
    return 0 === Math.floor(Math.random() / rate);
  }
  
  // ÒýÈëÐÔÄÜ´òµãÎÄ¼þ	
  if(hit(performance_rate)){ 
	window.PAGE_TIMING = {
	  pageId: new String(new Date().getTime()),
	  parentPageId: "",
      pageType: "/i/indexNew.htm",
      site: "AlipayCN",
      receiverUrl: "https://kcart.alipay.com/p.gif"
    };
		
    if(window._to && _to.start){
      window.PAGE_TIMING.startRender = _to.start.getTime();
	};
		
	seajs.use("aliexpress.page-timing/0.2.0/index");
  }


  if(!hit(jserr_rate)){return;}

  seajs.use(["$", "alipay/monitor/2.3.1/monitor",
    "alipay/sensinfo/1.2.0/sensinfo"], function($, monitor, sensinfo){

    if(!monitor){return;}

    $(function(){
      var sysName = "cmscenter-60-76";

      monitor.on("*", function(meta){
        meta.sys = sysName;
      });


      if(!hit(sens_rate) || !sensinfo){return;}
      try{
        var html = (document.documentElement || document.body).innerHTML;
        window.setTimeout(function(){
          sensinfo.scan(html, {
            "*": function(cardType, privacy_card, context) {
              monitor.log(cardType+"="+privacy_card+"```"+context, "sens");
            }
          });
        }, 1200);
      }catch(ex){}

    });
  });

}

if(window._monitor_autoload !== false){
  _use_monitor();
}
</script> 	 </body> </html> 