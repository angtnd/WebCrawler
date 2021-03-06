<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<link rel="shortcut icon" href="/images/favicon_vk.ico?3" />

<link rel="apple-touch-icon" href="/images/safari_60.png">
<link rel="apple-touch-icon" sizes="76x76" href="/images/safari_76.png">
<link rel="apple-touch-icon" sizes="120x120" href="/images/safari_120.png">
<link rel="apple-touch-icon" sizes="152x152" href="/images/safari_152.png">

<meta http-equiv="content-type" content="text/html; charset=windows-1251" />
<meta name="description" content="VK is the largest European social network with more than a 100 million active users. Our goal is to keep old friends, ex-classmates, neighbours and co-workers in touch." />


<title>Welcome&#33; | VK</title>

<noscript><meta http-equiv="refresh" content="0; URL=/badbrowser.php"></noscript>

<script type="text/javascript">
var vk = {
  ads_rotate_interval: 120000,
  al: parseInt('4') || 4,
  id: 0,
  intnat: '1' ? true : false,
  host: 'vk.com',
  lang: 3,
  rtl: parseInt('') || 0,
  version: 19087,
  stDomains: 0,
  zero: false,
  contlen: 7851,
  loginscheme: 'https',
  ip_h: 'e135747c4645a5660d',
  vc_h: 'ddbc49f6490a14facbb027509cdcfdbc',
  navPrefix: '/',
  dt: parseInt('0') || 0,
  fs: parseInt('11') || 11,
  ts: 1455644966,
  tz: 10800,
  pd: 0,
  pads: 1,
  vcost: 7,
  time: [2016, 2, 16, 20, 49, 26],
  sampleUser: -1, spentLastSendTS: new Date().getTime()
};

window.locDomain = vk.host.match(/[a-zA-Z]+\.[a-zA-Z]+\.?$/)[0];
var _ua = navigator.userAgent.toLowerCase();
if (/opera/i.test(_ua) || !/msie 6/i.test(_ua) || document.domain != locDomain) document.domain = locDomain;
var ___htest = (location.toString().match(/#(.*)/) || {})[1] || '', ___to;
if (vk.al != 1 && ___htest.length && ___htest.substr(0, 1) == vk.navPrefix) {
  if (vk.al != 3 || vk.navPrefix != '!') {
    ___to = ___htest.replace(/^(\/|!)/, '');
    if (___to.match(/^([^\?]*\.php|login|mobile)([^a-z0-9\.]|$)/)) ___to = '';
    location.replace(location.protocol + '//' + location.host + '/' + ___to);
  }
}

var StaticFiles = {
  'common.js' : {v: 1129},
  'common.css': {v: 511},
  'ie6.css'   : {v: 26},
  'ie7.css'   : {v: 18}
  ,'lang3_0.js':{v:3568},'index.css':{v:27},'index.js':{v:33},'ui_controls.css':{v:66},'ui_controls.js':{v:189}
}
</script>

<link rel="stylesheet" type="text/css" href="/css/al/common.css?511" />
<!--[if lte IE 6]><style type="text/css" media="screen">/* <![CDATA[ */ @import url(/css/al/ie6.css?26); /* ]]> */</style><![endif]-->
<!--[if IE 7]><style type="text/css" media="screen">/* <![CDATA[ */ @import url(/css/al/ie7.css?18); /* ]]> */</style><![endif]-->
<link type="text/css" rel="stylesheet" href="/css/al/index.css?27"></link><link type="text/css" rel="stylesheet" href="/css/ui_controls.css?66"></link><script type="text/javascript" src="/js/loader_nav19087_3.js"></script><script type="text/javascript" src="/js/al/common.js?1129_184"></script><script type="text/javascript" src="/js/lang3_0.js?3568"></script><link rel="alternate" media="only screen and (max-width: 640px)" href="http://m.vk.com/" /><link rel="alternate" href="android-app://com.vkontakte.android/vkontakte/m.vk.com/" /><script type="text/javascript" src="/js/al/index.js?33"></script><script type="text/javascript" src="/js/lib/ui_controls.js?189"></script>

</head>

<body onresize="onBodyResize()" class="is_rtl font_default pads ">
  <div id="system_msg" class="fixed"></div>
  <div id="utils"></div>

  <div id="layer_bg" class="fixed"></div><div id="layer_wrap" class="scroll_fix_wrap fixed"><div id="layer"></div></div>
  <div id="box_layer_bg" class="fixed"></div><div id="box_layer_wrap" class="scroll_fix_wrap fixed"><div id="box_layer"><div id="box_loader"><div class="loader"></div><div class="back"></div></div></div></div>

  <div id="stl_left"></div><div id="stl_side"></div>

  <script type="text/javascript">domStarted();</script>

  <div class="scroll_fix_wrap" id="page_wrap"><div id="reg_bar" class="top_info_wrap fixed">
  <div class="scroll_fix">
    <div id="reg_bar_content">
      Join VK now and always stay in contact with your friends and relatives
      <div class="button_blue" id="reg_bar_button"><a class="button_link" href="/join" onclick="return !showBox('join.php', {act: 'box', from: nav.strLoc}, {}, event)"><button id="reg_bar_btn"><span id="reg_bar_with_arr">Sign up</span></button></a></div>
    </div>
  </div>
</div>
<div><div class="scroll_fix">
  <div id="page_layout" style="width: 791px;">
    <div id="page_header" class="p_head1 p_head_l3">
      <div class="back"></div>
      <div class="left"></div>
      <div class="right"></div>
      <div class="content">
        <div id="top_nav" class="head_nav">
  <div id="top_logo_down" class="fl_l"></div>
  <a id="top_home_link" class="top_home_link fl_l" href="/" onmousedown="addClass('top_logo_down','tld_d');" onclick="return nav.go(this, event);"></a>
  <div id="top_links">
    <div class="fl_r" id="top_menu_wrap" style="">
      <a id="top_reg_link" class="fl_r top_nav_link" href="/join" style="display: none" onclick="return !showBox('join.php', {act: 'box', from: nav.strLoc}, {}, event)" onmousedown="tnActive(this)">sign up</a>
      <a id="top_switch_lang" class="fl_r top_nav_link"  style="display: none;" onclick="ajax.post('al_index.php', {act: 'change_lang', lang_id: 3, hash: ''});" onmousedown="tnActive(this)">Switch to English</a>
    </div>
    <a class="fl_l top_nav_link" href="" id="top_back_link" onclick="return nav.go(this, event, {back: true})" onmousedown="tnActive(this)"></a>
  </div>
</div>
      </div>
    </div>

    <div id="side_bar" class="fl_l" style="">
      <div id="quick_login">
  <form method="POST" name="login" id="quick_login_form" action="https://login.vk.com/?act=login" onsubmit="if (vklogin) {return true} else {quick_login();return false;}">
    <input type="hidden" name="act" value="login" />
    <input type="hidden" name="role" value="al_frame" />
    <input type="hidden" name="expire" id="quick_expire_input" value="" />
    <input type="hidden" name="captcha_sid" id="quick_captcha_sid" value="" />
    <input type="hidden" name="captcha_key" id="quick_captcha_key" value="" />
    <input type="hidden" name="_origin" value="http://vk.com" />
    <input type="hidden" name="ip_h" value="e135747c4645a5660d" />
    <input type="hidden" name="lg_h" value="9f781f733a9ad7ea65" />
    <div class="label">Phone or email</div>
    <div class="labeled"><input type="text" name="email" class="text" id="quick_email" /></div>
    <div class="label">Password</div>
    <div class="labeled"><input type="password" name="pass" class="text" id="quick_pass" onkeyup="toggle('quick_expire', !!this.value);toggle('quick_forgot', !this.value)" /></div>
    <input type="submit" class="submit" />
  </form>
  <button class="flat_button button_wide button_big" id="quick_login_button">Log in</button>
  <button class="flat_button button_wide button_big" id="quick_reg_button" style="display: none" onclick="top.showBox('join.php', {act: 'box', from: nav.strLoc})">Sign up</button>
  <div class="clear forgot"><a id="quick_forgot" href="/restore" target="_top">Forgot your password?</a><div class="checkbox ta_l" id="quick_expire" onclick="checkbox(this);ge('quick_expire_input').value=isChecked(this)?1:'';"><div></div>Don&#39;t remember me</div></div>
</div>
    </div>

    <div id="page_body" class="fl_r" style="width: 631px;">
      <div id="header_wrap2">
        <div id="header_wrap1">
          <div id="header" style="">
            <h1 id="title">Welcome&#33;</h1>
          </div>
        </div>
      </div>
      <div id="wrap_between"></div>
      <div id="wrap3"><div id="wrap2">
  <div id="wrap1">
    <div id="content"><div id="index">
  <iframe class="upload_frame" src="https://login.vk.com/?role=al_frame&_origin=http://vk.com&ip_h=e135747c4645a5660d"></iframe>
  <div class="content">
    <p><b>VK</b> is the largest European social network with more than a <b>100 million</b> active users.</p>

    <h2>Sign up for VK</h2>

    <div class="msg" id="ij_msg"></div>

    <div class="ij_form">
      <div class="ij_reg_row">
        <input type="text" class="big_text" id="ij_first_name" value="" placeholder="Your first name" onkeydown="if (event.keyCode == 10 || event.keyCode == 13) Index.submitJoinStart();" />
      </div>
      <div class="ij_reg_row">
        <input type="text" class="big_text" id="ij_last_name" value="" placeholder="Your last name" onkeydown="if (event.keyCode == 10 || event.keyCode == 13) Index.submitJoinStart();" />
      </div>
      <div class="ij_reg_row" id="ij_sex_row">
        <input type="hidden" id="ij_sex" name="ij_sex" />
      </div>
      <center>
        <button class="flat_button button_big ij_button" id="ij_submit" onclick="Index.submitJoinStart()">
          <span class="ij_with_arr">Sign up</span>
        </button>
      </center>
      <div id="index_fbsign">
        <div class="index_fbb">
          <div class="index_or"><div class="index_or_l"></div><span class="index_or_s">or</span></div>
          <center>
            <button class="flat_button ij_button index_fb_btn" id="index_fb" onclick="Index.fbJoin();">
              <div class="index_fb_logo"></div>
              <div class="index_fb_l">Sign in with Facebook</div>
            </button>
          </center>
        </div>
      </div>
    </div>

    <h2>What can you do on VK?</h2>
    <ul class="listing">
      <li><span>Find people with whom you&#39;ve studied, worked or met on vacation.</span></li>
      <li><span>Learn more about people around you and make new friends.</span></li>
      <li><span>Stay in touch with loved ones.</span></li>
    </ul>
  </div>
  <div class="reg">
    <table cellspacing="0" cellpadding="0" id="ij_screens"><tr>
      <td><a class="ij_scr" onclick="JoinPhotoview.show(0)"><img src="/images/join/prof_vk_m.png?4" class="ijs_img" /></a></td>
      <td><a class="ij_scr" onclick="JoinPhotoview.show(1)"><img src="/images/join/news_vk_m.png?4" class="ijs_img" /></a></td>
      <td><a class="ij_scr" onclick="JoinPhotoview.show(2)"><img src="/images/join/dial_vk_m.png?4" class="ijs_img" /></a></td>
    </tr></table>
  </div>
</div></div>
  </div>
</div></div>
    </div>

    <div id="footer_wrap" class="fl_r" style="width: 661px;">
      <div id="bottom_nav">
  <a class="bnav_a" href="/about">about</a>
  <a class="bnav_a" href="/support?act=home" onclick="return nav.go(this, event);" style="display: none;">help</a>
  <a class="bnav_a" href="/terms">terms</a>
  <a class="bnav_a" href="/people">people</a><a class="bnav_a" href="/communities">communities</a>
  <a class="bnav_a" href="/dev">developers</a>
</div>
<p id="footer">
  <div class="copy_lang"><a href="/about">VK</a> &copy; 2016 <a class="bnav_lang" onclick="ajax.post('al_index.php', {act: 'change_lang', lang_id: 16, hash: '2fb682181f6e4f1352'})">Fran&#231;ais</a><a class="bnav_lang" onclick="ajax.post('al_index.php', {act: 'change_lang', lang_id: 3, hash: '2fb682181f6e4f1352'})">English</a><a class="bnav_lang" onclick="ajax.post('al_index.php', {act: 'change_lang', lang_id: 0, hash: '2fb682181f6e4f1352'})">Ðóññêèé</a><a class="bnav_lang" onclick="ajax.post('al_index.php', {act: 'change_lang', lang_id: 1, hash: '2fb682181f6e4f1352'})">Óêðà¿íñüêà</a><a class="bnav_lang" onclick="if (vk.al) { showBox('lang.php', {act: 'lang_dialog', all: 1}, {params: {dark: true, bodyStyle: 'padding: 0px'}, noreload: true}); } else { changeLang(1); } return false;">all languages »</a></div>
  
  <div>
    
    
  </div>
</p>
    </div>
    <div class="clear"></div>
  </div>
</div></div><noscript><div style="position:absolute;left:-10000px;">
<img src="//top-fwz1.mail.ru/counter?id=2579437;pid=0;js=na" style="border:0;" height="1" width="1" />
</div></noscript></div>
  <div class="progress" id="global_prg"></div>

  <script type="text/javascript">
    if (parent && parent != window && (browser.msie || browser.opera || browser.mozilla || browser.chrome || browser.safari || browser.iphone)) {
      document.getElementsByTagName('body')[0].innerHTML = '';
    } else {
      domReady();
      updateMoney(0);
gSearch.init();
if (window.qArr && qArr[5]) qArr[5] = [5, "by item", "", "goods", 0x00000100];
if (browser.iphone || browser.ipad || browser.ipod) {
  setStyle(bodyNode, {webkitTextSizeAdjust: 'none'});
}var qf = ge('quick_login_form'), ql = ge('quick_login'), qe = ge('quick_email'), qp = ge('quick_pass');
var qlb = ge('quick_login_button'), prgBtn = qlb;

var qinit = function() {
  setTimeout(function() {
    ql.insertBefore(ce('div', {innerHTML: '<iframe class="upload_frame" id="quick_login_frame" name="quick_login_frame"></iframe>'}), qf);
    qf.target = 'quick_login_frame';
  }, 1);
}

if (window.top && window.top != window) {
  window.onload = qinit;
} else {
  setTimeout(qinit, 0);
}

qf.onsubmit = function() {
  if (!ge('quick_login_frame')) return false;
  if (!trim(qe.value)) {
    notaBene(qe);
    return false;
  } else if (!trim(qp.value)) {
    notaBene(qp);
    return false;
  }
  lockButton(window.__qfBtn = prgBtn);
  prgBtn = qlb;
  clearTimeout(__qlTimer);
  __qlTimer = setTimeout(loginSubmitError, 30000);
  domFC(domPS(qf)).onload = function() {
    clearTimeout(__qlTimer);
    __qlTimer = setTimeout(loginSubmitError, 2500);
  }
  return true;
}

window.loginSubmitError = function() {
  showFastBox('Warning', 'Unable to complete encrypted authorization. This can happen if your date and time settings are not configured correctly on your system. Please check your date &amp; time settings and restart the browser.');
}
window.focusLoginInput = function() {
  scrollToTop(0);
  notaBene('quick_email');
}
window.changeQuickRegButton = function(noShow) {
  if (noShow) {
    hide('top_reg_link', 'quick_reg_button');
    show('top_search_link');
  } else {
    hide('top_search_link');
    show('top_reg_link', 'quick_reg_button');
  }
  toggle('top_switch_lang', noShow && window.langConfig && window.langConfig.id != 3);
}
window.submitQuickLoginForm = function(email, pass, opts) {
  setQuickLoginData(email, pass, opts);
  if (opts && opts.prg) prgBtn = opts.prg;
  if (qf.onsubmit()) qf.submit();
}
window.setQuickLoginData = function(email, pass, opts) {
  if (email !== undefined) ge('quick_email').value = email;
  if (pass !== undefined) ge('quick_pass').value = pass;
  var params = opts && opts.params || {};
  for (var i in params) {
    var el = ge('quick_login_' + i);
    if (el) {
      val(el, params[i]);
    } else {
      qf.appendChild(ce('input', {type: 'hidden', name: i, id: 'quick_login_' + i, value: params[i]}));
    }
  }
}

if (qlb) {
  qlb.onclick = function() { if (qf.onsubmit()) qf.submit(); };
}

if (browser.opera_mobile) show('quick_expire');

if (1) {
  hide('support_link_td');
}
var ts_input = ge('ts_input'), oldFF = browser.mozilla && parseInt(browser.version) < 8;
if (browser.mozilla && !oldFF) {
  setStyle(ts_input, {padding: (vk.rtl ? '3px 20px 6px 40px' : '3px 41px 6px 20px')});
}
placeholderSetup(ts_input, {back: false, reload: true});
if (browser.opera || browser.msie || browser.mozilla) {
  setStyle(ts_input, {padding: (vk.rtl ? '4px 20px 5px 40px' : '4px 41px 5px 20px')});
} else if (browser.chrome || browser.safari) {
  setStyle(ts_input, {padding: (vk.rtl ? '4px 21px 5px 40px' : '4px 40px 5px 21px')});
}

TopSearch.init();
if (browser.msie8 || browser.msie7) {
  var st = {border: '1px solid #a6b6c6'};
  if (hasClass(ge('ts_wrap'), 'vk')) {
    if (vk.rtl) st.left = '1px';
    else st.right = '0px';
  } else {
    if (vk.rtl) st.right = '146px';
    else st.left = '146px';
  }
  setStyle(ge('ts_cont_wrap'), st);
}
window.tsHintsEnabled = 1;;shortCurrency();
handlePageParams({"id":0,"pads":1,"loc":"","wrap_page":1,"width":791,"width_dec":160,"width_dec_footer":130,"body_class":"is_rtl font_default pads ","counters":"","pvbig":0,"pvdark":1});addEvent(document, 'click', onDocumentClick);Index.initNew();
JoinPhotoview.init([{"src":"\/images\/join\/prof_vk_1.png?5","width":790,"height":600,"desc":"Create a profile and share your news with friends and followers"},{"src":"\/images\/join\/news_vk_1.png?5","width":790,"height":600,"desc":"Stay in touch with your friends, relatives and celebrities"},{"src":"\/images\/join\/dial_vk_1.png?5","width":790,"height":600,"desc":"Chat with friends or groups of people via private messages"}]);
cur.lang = extend(cur.lang || {}, {
  index_screen_m_of_n: 'Screenshot {num} of {count}',
  index_to_main: 'Home',
  index_choose_sex: 'Select sex'
});
var sd = [[1,"Female"],[2,"Male "]];
if (sd) Index.initSexDD(sd);
placeholderSetup('ij_first_name', {back: true});
placeholderSetup('ij_last_name', {back: true});
var login = ge('quick_email');
if (login) {
  login.focus();
}
;(function (d, w) {
var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true;
ts.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//top-fwz1.mail.ru/js/code.js";
var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window);
    }
  </script>
</body>

</html>