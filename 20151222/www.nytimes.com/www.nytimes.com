<!DOCTYPE html>
<!--[if (gt IE 9)|!(IE)]> <!--> <html lang="en" class="no-js edition-domestic app-homepage"  itemscope xmlns:og="http://opengraphprotocol.org/schema/"> <!--<![endif]-->
<!--[if IE 9]> <html lang="en" class="no-js ie9 lt-ie10 edition-domestic app-homepage" xmlns:og="http://opengraphprotocol.org/schema/"> <![endif]-->
<!--[if IE 8]> <html lang="en" class="no-js ie8 lt-ie10 lt-ie9 edition-domestic app-homepage" xmlns:og="http://opengraphprotocol.org/schema/"> <![endif]-->
<!--[if (lt IE 8)]> <html lang="en" class="no-js lt-ie10 lt-ie9 lt-ie8 edition-domestic app-homepage" xmlns:og="http://opengraphprotocol.org/schema/"> <![endif]-->
<head>
    <title>The New York Times - Breaking News, World News & Multimedia</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><script type="text/javascript">window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var o=n[t]={exports:{}};e[t][0].call(o.exports,function(n){var o=e[t][1][n];return r(o?o:n)},o,o.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<t.length;o++)r(t[o]);return r}({QJf3ax:[function(e,n){function t(e){function n(n,t,a){e&&e(n,t,a),a||(a={});for(var u=c(n),f=u.length,s=i(a,o,r),p=0;f>p;p++)u[p].apply(s,t);return s}function a(e,n){f[e]=c(e).concat(n)}function c(e){return f[e]||[]}function u(){return t(n)}var f={};return{on:a,emit:n,create:u,listeners:c,_events:f}}function r(){return{}}var o="nr@context",i=e("gos");n.exports=t()},{gos:"7eSDFh"}],ee:[function(e,n){n.exports=e("QJf3ax")},{}],3:[function(e,n){function t(e){return function(){r(e,[(new Date).getTime()].concat(i(arguments)))}}var r=e("handle"),o=e(1),i=e(2);"undefined"==typeof window.newrelic&&(newrelic=window.NREUM);var a=["setPageViewName","addPageAction","setCustomAttribute","finished","addToTrace","inlineHit","noticeError"];o(a,function(e,n){window.NREUM[n]=t("api-"+n)}),n.exports=window.NREUM},{1:12,2:13,handle:"D5DuLP"}],gos:[function(e,n){n.exports=e("7eSDFh")},{}],"7eSDFh":[function(e,n){function t(e,n,t){if(r.call(e,n))return e[n];var o=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:o,writable:!0,enumerable:!1}),o}catch(i){}return e[n]=o,o}var r=Object.prototype.hasOwnProperty;n.exports=t},{}],D5DuLP:[function(e,n){function t(e,n,t){return r.listeners(e).length?r.emit(e,n,t):void(r.q&&(r.q[e]||(r.q[e]=[]),r.q[e].push(n)))}var r=e("ee").create();n.exports=t,t.ee=r,r.q={}},{ee:"QJf3ax"}],handle:[function(e,n){n.exports=e("D5DuLP")},{}],XL7HBI:[function(e,n){function t(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:i(e,o,function(){return r++})}var r=1,o="nr@id",i=e("gos");n.exports=t},{gos:"7eSDFh"}],id:[function(e,n){n.exports=e("XL7HBI")},{}],G9z0Bl:[function(e,n){function t(){var e=d.info=NREUM.info,n=f.getElementsByTagName("script")[0];if(e&&e.licenseKey&&e.applicationID&&n){c(p,function(n,t){n in e||(e[n]=t)});var t="https"===s.split(":")[0]||e.sslForHttp;d.proto=t?"https://":"http://",a("mark",["onload",i()]);var r=f.createElement("script");r.src=d.proto+e.agent,n.parentNode.insertBefore(r,n)}}function r(){"complete"===f.readyState&&o()}function o(){a("mark",["domContent",i()])}function i(){return(new Date).getTime()}var a=e("handle"),c=e(1),u=window,f=u.document;e(2);var s=(""+location).split("?")[0],p={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-686.min.js"},d=n.exports={offset:i(),origin:s,features:{}};f.addEventListener?(f.addEventListener("DOMContentLoaded",o,!1),u.addEventListener("load",t,!1)):(f.attachEvent("onreadystatechange",r),u.attachEvent("onload",t)),a("mark",["firstbyte",i()])},{1:12,2:3,handle:"D5DuLP"}],loader:[function(e,n){n.exports=e("G9z0Bl")},{}],12:[function(e,n){function t(e,n){var t=[],o="",i=0;for(o in e)r.call(e,o)&&(t[i]=n(o,e[o]),i+=1);return t}var r=Object.prototype.hasOwnProperty;n.exports=t},{}],13:[function(e,n){function t(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,o=t-n||0,i=Array(0>o?0:o);++r<o;)i[r]=e[n+r];return i}n.exports=t},{}]},{},["G9z0Bl"]);</script>
<link rel="shortcut icon" href="http://static01.nyt.com/favicon.ico" />
<link rel="apple-touch-icon-precomposed" sizes="144Ã144" href="http://static01.nyt.com/images/icons/ios-ipad-144x144.png" />
<link rel="apple-touch-icon-precomposed" sizes="114Ã114" href="http://static01.nyt.com/images/icons/ios-iphone-114x144.png" />
<link rel="apple-touch-icon-precomposed" href="http://static01.nyt.com/images/icons/ios-default-homescreen-57x57.png" />
<meta name="sourceApp" content="nyt-v5" />
<meta id="applicationName" name="applicationName" content="homepage" />
<meta id="foundation-build-id" name="foundation-build-id" content="" />
<link rel="canonical" href="http://www.nytimes.com" />
<link rel="alternate" type="application/rss+xml" title="RSS" href="http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml" />
<link rel="alternate" media="handheld" href="http://mobile.nytimes.com" />
<meta name="robots" content="noarchive,noodp,noydir" />
<meta name="description" content="The New York Times: Find breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, books, jobs, education, real estate, cars & more at nytimes.com." />
<meta name="CG" content="Homepage" />
<meta name="SCG" content="" />
<meta name="PT" content="Homepage" />
<meta name="PST" content="" />
<meta name="application-name" content="The New York Times" />
<meta name="msapplication-starturl" content="http://www.nytimes.com" />
<meta name="msapplication-task" content="name=Search;action-uri=http://query.nytimes.com/search/sitesearch?src=iepin;icon-uri=http://css.nyt.com/images/icons/search.ico" />
<meta name="msapplication-task" content="name=Most Popular;action-uri=http://www.nytimes.com/gst/mostpopular.html?src=iepin;icon-uri=http://css.nyt.com/images/icons/mostpopular.ico" />
<meta name="msapplication-task" content="name=Video;action-uri=http://video.nytimes.com/?src=iepin;icon-uri=http://css.nyt.com/images/icons/video.ico" />
<meta name="msapplication-task" content="name=Homepage;action-uri=http://www.nytimes.com?src=iepin&amp;adxnnl=1;icon-uri=http://css.nyt.com/images/icons/homepage.ico" />
<meta property="og:url" content="http://www.nytimes.com" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Breaking News, World News & Multimedia" />
<meta property="og:description" content="The New York Times: Find breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, books, jobs, education, real estate, cars & more at nytimes.com." />
<meta property="og:image" content="http://static01.nyt.com/images/icons/t_logo_291_black.png" />
<meta property="fb:app_id" content="9869919170" />
<meta name="apple-itunes-app" content="app-id=357066198, affiliate-data=at=10lIEQ&ct=Web%20iPad%20Smart%20App%20Banner&pt=13036" />
<meta name="keywords" content="Arbitration, Conciliation and Mediation,Consumer Protection,Suits and Litigation (Civil),Debt Collection,Consumer Financial Protection Bureau,Series,Arbitration, Conciliation and Mediation,Corporations,Consumer Protection,Suits and Litigation (Civil),Banking and Financial Institutions,Beware the Fine Print (Series),Arbitration, Conciliation and Mediation,Series,Corporations,Suits and Litigation (Civil),Beware the Fine Print (Series),Arbitration, Conciliation and Mediation,Religion and Belief,Ellison, Nicklaus (1990-2011),Series,Suits and Litigation (Civil),Church of Scientology,Teen Challenge of Florida Inc,Beware the Fine Print (Series),Iraqi Army,Islamic State in Iraq and Syria (ISIS),Ramadi (Iraq),Iraq,Terrorism,Refugees and Displaced Persons,Muslims and Islam,International Relations,Islamic State in Iraq and Syria (ISIS),Syria,Turkey,European Union,Greece,Refugees and Displaced Persons,Immigration and Emigration,International Organization for Migration,Kurdi, Aylan (2011-15),Europe,Presidential Election of 2016,United States Economy,Defense of Marriage Act (1996),Clinton, Hillary Rodham,Clinton, Bill,Landslides and Mudslides,Shenzhen (China),Deaths (Fatalities),Rescues,Waste Materials and Disposal,Factories and Manufacturing,In Vitro Fertilization,Pregnancy and Childbirth,Infertility,Journal of the American Medical Assn,American Society for Reproductive Medicine,Muslim Americans,Terrorism,Chattanooga (Tenn),Islamic State in Iraq and Syria (ISIS),Muslims and Islam,San Bernardino, Calif, Shooting (2015),Lemm, Joseph,Police Department (NYC),Afghanistan,Texas,Police Brutality, Misconduct and Shootings,Bland, Sandra (1987-2015),Blacks,Waller County (Tex),Private Spaceflight,Space Exploration Technologies Corp,Space and Astronomy,Musk, Elon,China,Pu Zhiqiang,Human Rights and Human Rights Violations,Beijing (China),Political Prisoners,Freedom of the Press,Xi Jinping,Theater,Erivo, Cynthia,The Color Purple (Play),Architecture,Sanitation Department (NYC),Area Planning and Renewal,Dattner Architects,New York City,Amazon.com Inc,Workplace Environment,Executives and Management (Theory),Bezos, Jeffrey P,Labor and Jobs,Computers and the Internet" />
<meta name="video:playerId" content="2640832222001" />
<meta name="video:publisherId" content="1749339200" />
<meta name="video:publisherReadToken" content="cE97ArV7TzqBzkmeRVVhJ8O6GWME2iG_bRvjBTlNb4o." />
<meta name="dfp-ad-unit-path" content="homepage/us" />
<meta name="dfp-amazon-enabled" content="false" />
<meta name="adxPage" content="homepage.nytimes.com/index.html" />
    
            <!--[if (gt IE 9)|!(IE)]> <!-->
    <link rel="stylesheet" type="text/css" media="screen" href="http://a1.nyt.com/assets/homepage/20151216-175935/css/homepage/styles.css" />
<!--<![endif]-->
<!--[if lte IE 9]>
    <link rel="stylesheet" type="text/css" media="screen" href="http://a1.nyt.com/assets/homepage/20151216-175935/css/homepage/styles-ie.css" />
<![endif]-->
        <script type="text/javascript">var googletag=googletag||{};googletag.cmd=googletag.cmd||[],function(){var t=document.createElement("script");t.async=!0,t.type="text/javascript";var e="https:"==document.location.protocol;t.src=(e?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(t,o)}();</script>
<script src="//typeface.nytimes.com/zam5nzz.js"></script>
<script>try{Typekit.load();}catch(e){}</script>
<script src="//cdn.optimizely.com/js/3338050995.js"></script>

<script id="abtestconfig" type="application/json">

[
    {
        "testId": "0012",
        "testName": "tallWatchingModule",
        "throttle": 1.0,
        "allocation": 0.9,
        "variants": 1,
        "applications": ["homepage"]
    },
    {
        "testId": "0033",
        "testName": "recommendedLabelTest",
        "throttle": 1,
        "allocation": 0.833,
        "variants": 5,
        "applications": ["article"]
    },
    {
        "testId": "0036",
        "testName": "velcroSocialFollow",
        "throttle": 0.1,
        "allocation": 0.5,
        "variants": 1,
        "applications": ["article", "homepage"]
    },
    {
        "testId": "0051",
        "testName": "shuffleRecommendations",
        "throttle": 1.0,
        "allocation": 0.667,
        "variants": 1,
        "applications": ["article"]
    },
    {
        "testId": "0052",
        "testName": "paidPostDriver",
        "throttle": 1.0,
        "allocation": 0.875,
        "variants": 7,
        "applications": ["article"]
    },
    {
        "testId": "0061",
        "testName": "paidPostFivePackMock",
        "throttle": 0,
        "allocation": 0,
        "variants": 1,
        "applications": ["homepage"]
    },
    {
        "testId": "0063",
        "testName": "paidPostFivePack",
        "throttle": 1,
        "allocation": 0.5,
        "variants": 1,
        "applications": ["homepage"]
    },
    {
        "testId": "0064",
        "testName": "realEstateSearch",
        "throttle": 1,
        "allocation": 1,
        "variants": 1,
        "applications": ["realestate", "article"]
     },
     {
         "testId": "0066",
         "testName": "ribbonChartbeatMostEmailed",
         "throttle": 1,
         "allocation": 0.5,
         "variants": 1,
         "applications": ["article"]
     },
     {
         "testId": "0067",
         "testName": "pinnedMasthead",
         "throttle": 0.02,
         "allocation": 0.5,
         "variants": 1,
         "applications": ["homepage"]
     },
     {
         "testId": "0069",
      	 "testName": "coloredSharetools",
         "throttle": 1,
         "allocation": 0.5,
         "variants": 1,
         "applications": ["slideshow"]
     },
    {
        "testId": "0077",
        "testName": "shareToolsUnderHeadline",
        "throttle": 0.05,
        "allocation": 0.5,
        "variants": 1,
        "applications": ["article"]
    },
    {
        "testId": "0078",
        "testName": "showUserSubscriptions",
        "throttle": 0.2,
        "allocation": 0.75,
        "variants": 3,
        "applications": ["homepage"]
    }
]

</script>


<script id="user-info-data" type="application/json">
{ "meta": {},
  "data": {
    "id": "0",
    "name": "",
    "subscription": [],
    "demographics": {}
  }
}
</script>

<script>
var require = {
    baseUrl: 'http://a1.nyt.com/assets/',
    waitSeconds: 20,
    paths: {
        'foundation': 'homepage/20151216-175935/js/foundation',
        'shared': 'homepage/20151216-175935/js/shared',
        'homepage': 'homepage/20151216-175935/js/homepage',
        'application': 'homepage/20151216-175935/js/homepage/',
        'videoFactory': 'http://static01.nyt.com/js2/build/video/2.0/videofactoryrequire',
        'videoPlaylist': 'http://static01.nyt.com/js2/build/video/players/extended/2.0/appRequire',
        'auth/mtr': 'http://static01.nyt.com/js/mtr',
        'auth/growl': 'http://static01.nyt.com/js/auth/growl/default',
        'vhs': 'http://static01.nyt.com/video/vhs/build/vhs-2.x.min'
    }
};
</script>
<!--[if (gte IE 9)|!(IE)]> <!-->
<script data-main="foundation/main" src="http://a1.nyt.com/assets/homepage/20151216-175935/js/foundation/lib/framework.js"></script>
<!--<![endif]-->
<!--[if lt IE 9]>
<script>
    require.map = { '*': { 'foundation/main': 'foundation/legacy_main' } };
</script>
<script data-main="foundation/legacy_main" src="http://a1.nyt.com/assets/homepage/20151216-175935/js/foundation/lib/framework.js"></script>
<![endif]-->
<script>
window.magnum.processFlags(["limitFabrikSave","moreFollowSuggestions","unfollowComments","homepageOpinionKickerCss","followFeature","allTheEmphases","videoVHSCover","videoVHSHomepageCover","additionalOpinionRegions","hpViewability","miniNavCount","newsEventHierarchy","freeTrial","insiderLaunch","showUserSubscriptions"]);
</script>
</head>
<body>
    
    <style>
    .lt-ie10 .messenger.suggestions {
        display: block !important;
        height: 50px;
    }

    .lt-ie10 .messenger.suggestions .message-bed {
        background-color: #f8e9d2;
        border-bottom: 1px solid #ccc;
    }

    .lt-ie10 .messenger.suggestions .message-container {
        padding: 11px 18px 11px 30px;
    }

    .lt-ie10 .messenger.suggestions .action-link {
        font-family: "nyt-franklin", arial, helvetica, sans-serif;
        font-size: 10px;
        font-weight: bold;
        color: #a81817;
        text-transform: uppercase;
    }

    .lt-ie10 .messenger.suggestions .alert-icon {
        background: url('http://i1.nyt.com/images/icons/icon-alert-12x12-a81817.png') no-repeat;
        width: 12px;
        height: 12px;
        display: inline-block;
        margin-top: -2px;
        float: none;
    }

    .lt-ie10 .masthead,
    .lt-ie10 .navigation,
    .lt-ie10 .comments-panel {
        margin-top: 50px !important;
    }

    .lt-ie10 .ribbon {
        margin-top: 97px !important;
    }
</style>
<div id="suggestions" class="suggestions messenger nocontent robots-nocontent" style="display:none;">
    <div class="message-bed">
        <div class="message-container last-message-container">
            <div class="message">
                <span class="message-content">
                    <i class="icon alert-icon"></i><span class="message-title">NYTimes.com no longer supports Internet Explorer 9 or earlier. Please upgrade your browser.</span>
                    <a href="http://www.nytimes.com/content/help/site/ie9-support.html" class="action-link">LEARN MORE Â»</a>
                </span>
            </div>
        </div>
    </div>
</div>

    <div id="shell" class="shell">
    <header id="masthead" class="masthead theme-pinned-masthead" role="banner">

    <div id="announcements-container" class="announcements-container"></div>

    <div id="Header1" class="ad header1-ad"></div>

    <div class="masthead-cap-container">

        <div id="masthead-cap" class="masthead-cap">

            <div class="quick-navigation button-group">

                <button class="button sections-button enable-a11y">
                    <i class="icon sprite-icon"></i><span class="button-text">Sections</span>
                </button>
                <button class="button search-button">
                    <i class="icon sprite-icon"></i><span class="button-text">Search</span>
                </button>
                <a class="button skip-button skip-to-content visually-hidden focusable" href="#top-news">Skip to content</a>
                <a class="button skip-button skip-to-navigation visually-hidden focusable" href="#site-index-navigation">Skip to navigation</a>
            </div><!-- close quick-navigation -->

            <div class="user-tools">

                <div id="Bar1" class="ad bar1-ad"></div>

                <div class="user-tools-button-group button-group">
                    <button class="button subscribe-button hidden" data-href="http://www.nytimes.com/subscriptions/Multiproduct/lp3004.html">Subscribe Now</button>
                    <button class="button login-button login-modal-trigger hidden">Log In</button>
                    <button class="button notifications-button hidden"><i class="icon sprite-icon"></i><span class="button-text">0</span></button>
                    <button class="button user-settings-button">
                        <i class="icon sprite-icon"></i><span class="button-text">Settings</span>
                    </button>
                </div>

            </div><!-- close user-tools -->

        </div><!-- close masthead-cap -->

    </div><!-- close masthead-cap-container -->

    <div class="masthead-meta">

        <div class="editions tab">

            <ul class="editions-menu">
                                    <li class="edition-domestic-toggle active">U.S.</li>
                    <li class="edition-international-toggle"><a href="http://international.nytimes.com" data-edition="global">International</a></li>
                
                <li class="edition-chinese-toggle"><a href="http://cn.nytimes.com" target="_blank" data-edition="chinese">ä¸­æ</a></li>
            </ul>

        </div><!-- close editions -->

        <div id="TopLeft" class="ad top-left-ad"></div>
        <div id="TopRight" class="ad top-right-ad"></div>

        <h2 class="branding"><a href="http://www.nytimes.com/">
    <svg class="nyt-logo" width="379" height="64" role="img" aria-label="The New York Times">
        <image width="379" height="64" xlink:href="http://a1.nyt.com/assets/homepage/20151216-175935/images/foundation/logos/nyt-logo-379x64.svg" src="http://a1.nyt.com/assets/homepage/20151216-175935/images/foundation/logos/nyt-logo-379x64.png" alt="The New York Times" border="0"/>
    </svg>

</a></h2>
        <ul class="masthead-menu">
            <li class="date">Tuesday, December 22, 2015</li><li class="todays-paper"><a href="http://www.nytimes.com/pages/todayspaper/index.html" data-collection="todays-paper"><i class="icon sprite-icon"></i>Todayâs Paper</a></li><li class="video"><a href="http://www.nytimes.com/video" data-collection="video"><i class="icon sprite-icon"></i>Video</a></li><li id="weather" class="weather hidden" data-collection="weather"></li><li id="markets" class="markets hidden" data-collection="markets"></li>
        </ul>

    </div><!-- close masthead-meta -->

    <nav id="mini-navigation" class="mini-navigation">
    <h2 class="visually-hidden">Quick Site Sections Navigation</h2>
    <ul class="mini-navigation-menu">
        <li>
            <button class="button sections-button">
                <i class="icon sprite-icon"></i>
                <span class="button-text">Sections</span>
            </button>
        </li><li>
            <button class="button search-button">
                <i class="icon sprite-icon"></i>
                <span class="button-text">Search</span>
            </button>
        </li>
            
                <li class="shortcuts-9A43D8FC-F4CF-44D9-9B34-138D30468F8F ">
                    <a href="http://www.nytimes.com/pages/world/index.html">World</a>
                </li>

            
                <li class="shortcuts-23FD6C8B-62D5-4CEA-A331-6C2A9A1223BE ">
                    <a href="http://www.nytimes.com/pages/national/index.html">U.S.</a>
                </li>

            
                <li class="shortcuts-80E6DEE6-87E4-4AD0-9152-14FA6B07E5AB ">
                    <a href="http://www.nytimes.com/pages/politics/index.html">Politics</a>
                </li>

            
                <li class="shortcuts-C4DC8C0C-E148-4201-BF10-82F1C903DBFB ">
                    <a href="http://www.nytimes.com/pages/nyregion/index.html">N.Y.</a>
                </li>

            
                <li class="shortcuts-104D1E63-9701-497B-8CF4-A4D120C9014E domestic">
                    <a href="http://www.nytimes.com/pages/business/index.html">Business</a>
                </li>

            
                <li class="shortcuts-A257D89A-0D3C-40AF-9C34-1A25A7947D94 international">
                    <a href="http://www.nytimes.com/pages/business/international/index.html">Business</a>
                </li>

            
                <li class="shortcuts-AD8090D7-4137-4D71-84C8-70DA3BD89778 domestic">
                    <a href="http://www.nytimes.com/pages/opinion/index.html">Opinion</a>
                </li>

            
                <li class="shortcuts-09736473-CB3F-4B2F-9772-3AF128ABE12D international">
                    <a href="http://www.nytimes.com/pages/opinion/international/index.html">Opinion</a>
                </li>

            
                <li class="shortcuts-78FBAD45-31A9-4EC7-B172-7D62A2B9955E ">
                    <a href="http://www.nytimes.com/pages/technology/index.html">Tech</a>
                </li>

            
                <li class="shortcuts-A4B35924-DB6C-4EA3-997D-450810F4FEE6 ">
                    <a href="http://www.nytimes.com/section/science">Science</a>
                </li>

            
                <li class="shortcuts-7D6BE1AF-8CD8-430B-8B2A-17CD0EAA99AC ">
                    <a href="http://www.nytimes.com/pages/health/index.html">Health</a>
                </li>

            
                <li class="shortcuts-DE2B278B-2783-4506-AAD5-C15A5BB6DA1A domestic">
                    <a href="http://www.nytimes.com/pages/sports/index.html">Sports</a>
                </li>

            
                <li class="shortcuts-BE66F420-C51B-461D-B487-CACF62E94AAE international">
                    <a href="http://www.nytimes.com/pages/sports/international/index.html">Sports</a>
                </li>

            
                <li class="shortcuts-C5BFA7D5-359C-427B-90E6-6B7245A6CDD8 domestic">
                    <a href="http://www.nytimes.com/pages/arts/index.html">Arts</a>
                </li>

            
                <li class="shortcuts-0202D0E4-C59B-479A-BD42-6F1766459781 international">
                    <a href="http://www.nytimes.com/pages/arts/international/index.html">Arts</a>
                </li>

            
                <li class="shortcuts-B3DFBD82-F298-43B3-9458-219B4F6AA2A5 domestic">
                    <a href="http://www.nytimes.com/pages/fashion/index.html">Style</a>
                </li>

            
                <li class="shortcuts-CC9E2674-F6C4-4A39-813B-F5AB0C515CEA international">
                    <a href="http://www.nytimes.com/pages/style/international/index.html">Style</a>
                </li>

            
                <li class="shortcuts-D9C94A2B-0364-4D25-8383-592CC66F82D4 domestic">
                    <a href="http://www.nytimes.com/pages/dining/index.html">Food</a>
                </li>

            
                <li class="shortcuts-FDEFB811-B483-4C3D-A25A-FD07BE5EAD96 international">
                    <a href="http://www.nytimes.com/pages/dining/international/index.html">Food</a>
                </li>

            
                <li class="shortcuts-FDA10AC4-4738-4099-91E8-15584765C8D7 ">
                    <a href="http://www.nytimes.com/pages/travel/index.html">Travel</a>
                </li>

            
                <li class="shortcuts-E57A148E-0CB9-4C02-966D-28B119710151 ">
                    <a href="http://www.nytimes.com/pages/magazine/index.html">Magazine</a>
                </li>

            
                <li class="shortcuts-052C33AD-1404-4DB6-AA70-0901DB1AD95B ">
                    <a href="http://www.nytimes.com/section/t-magazine">T Magazine</a>
                </li>

            
                <li class="shortcuts-92720057-BCB6-4BDB-9351-12F29393259F ">
                    <a href="http://www.nytimes.com/pages/realestate/index.html">Real Estate</a>
                </li>

                        <li><button class="button all-sections-button">all</button></li>
    </ul>
</nav>
    <div class="search-flyout-panel flyout-panel">
    <button class="button close-button" type="button"><i class="icon"></i><span class="visually-hidden">Close search</span></button>
    <div class="ad">
        <div id="SponsorAd" class="sponsor-ad">
            <small class="ad-sponsor">search sponsored by</small>
        </div>
    </div>
    <nav class="search-form-control form-control layout-horizontal">
    <h2 class="visually-hidden">Site Search Navigation</h2>
    <form class="search-form" role="search">
        <div class="control">
            <div class="label-container visually-hidden">
                                <label for="search-input">Search NYTimes.com</label>
                            </div>
            <div class="field-container">
                                <input id="search-input" name="search-input" type="text" class="search-input text" autocomplete="off" placeholder="Search NYTimes.com" />
                
                <button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-search-input"><i class="icon"></i><span id="clear-search-input" class="visually-hidden">Clear this text input</span></button>
                <div class="auto-suggest" style="display: none;">
                    <ol></ol>
                </div>
                <button class="button submit-button" type="submit">Go</button>
            </div>
        </div><!-- close control -->
    </form>
</nav>


</div><!-- close flyout-panel -->
    <div id="notification-modals" class="notification-modals"></div>

</header><!-- close masthead -->
<div id="masthead-placeholder" class="masthead-placeholder"></div>
                    <nav id="navigation" class="navigation">
    <h2 class="visually-hidden">Site Navigation</h2>
</nav><!-- close navigation -->

<nav id="mobile-navigation" class="mobile-navigation hidden">
    <h2 class="visually-hidden">Site Mobile Navigation</h2>
</nav><!-- close mobile-navigation -->

    <div id="navigation-edge" class="navigation-edge"></div>
    <div id="page" class="page">
                <main id="main" class="main" role="main">
                <div id="Top" class="ad hp-top-ad hidden nocontent robots-nocontent"></div>
<div id="Top_Close" class="ad hp-top-ad-close hidden nocontent robots-nocontent"></div>
<div id="Top5" class="ad top5-ad nocontent robots-nocontent"></div>

    <div class="span-abc-region region">
        <div class="collection">
            <!-- test 23 -->

<style>




/* Fix MM icons in kickers */
.kicker .icon:before { top: 0px; }
.kicker .media.slideshow { margin-bottom: 0px; }



/* Hiding Hacks */

.nythpHideKickers .kicker, .nythpHideBylines .byline, .nythpHideTimestamps .timestamp {
    display: none;
}

/* banner hed modifications */
.span-ab-top-region .story.theme-summary .story-heading {
  line-height: 2.1rem;
}


/* Alterations to the Centered Feature Photo Spot Treatment */

.b-column .photo-spot-region .story.theme-feature .story-heading {
    font-size: 1.35rem;
    line-height: 1.65rem;
}

.b-column  .photo-spot-region .story.theme-feature .story-heading {
    padding: 0 22px; /* for headline wrapping  */
}
.b-column .photo-spot-region .story.theme-feature .summary {
    line-height: 18px;
}

/* Breaking News/Developing Headers */
.nythpBreaking {
	color: #A81817;
	border-top: 3px solid #A81817;
	padding-top: 2px;
	padding-bottom: 3px;
        margin-top: 12px;
}

.nythpBreaking h6 {
	text-transform: uppercase;
	font-family: "nyt-franklin",arial,helvetica,sans-serif;
	font-weight: 700;
}

.nythpDeveloping {
	color: #FD8249;
	border-top-color: #FD8249;
}

.nythpBreaking.nythpNoRule {
	border: none;
        margin-top: 0px;
}

.above-banner-region .nythpBreaking {
margin-bottom: 10px;
}

/* Daypart Styles */

.pocket-region .story, .c-column #nythpDaypartRegion .story { margin-bottom: 15px !important; }

.pocket-region h4.sectionHeaderHome, .c-column #nythpDaypartRegion h4.sectionHeaderHome {
    font-size: 12px;
    line-height: 14px;
    font-weight: 700;
    font-family: "nyt-cheltenham-sh",georgia,"times new roman",times,serif;
    text-transform: uppercase;
    margin-bottom: 6px;
}

.pocket-region h5, .c-column #nythpDaypartRegion h5 {
	font-size: 14px;
	line-height: 16px;
	font-weight: 700;
	font-family: "nyt-cheltenham-sh",georgia,"times new roman",times,serif;
	margin-bottom: 2px;
}

.pocket-region .runaroundRight, .c-column #nythpDaypartRegion .runaroundRight {
	float: right;
	clear: right;
	margin: 3px 0px 6px 6px;
}

.pocket-region .summary, .c-column #nythpDaypartRegion .summary {
    font-size: 13px;
    line-height: 18px;
    font-weight: 400;
    font-family: georgia,"times new roman",times,serif;
    margin-bottom: 0px;
}

.pocket-region .refer li, .c-column #nythpDaypartRegion .refer li {
	background-image: url(http://css.nyt.com/images/icons/bullet4x4.gif);
	background-repeat: no-repeat;
	background-position: 0 .4em;
	padding-left: 8px;
	font-size: 12px;
	line-height: 14px;
	font-weight: 700;
	font-family: "nyt-cheltenham-sh",georgia,"times new roman",times,serif;
}



/* BEGIN .HPHEADER STYLING */

.wf-loading .hpHeader h6 {
    visibility: hidden;
  }

.hpHeader {
  margin-bottom: 8px;
}

.hpHeader h6 {
  font-family: "nyt-franklin",helvetica,arial,sans-serif;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 12px 4px 2px 0;
  border-bottom: 1px solid #999;
  border-top: 1px solid #E2E2E2;
}


.hpHeader h6 a, 
.hpHeader h6 a:visited  {
  text-decoration: none;
  color: #000;
}

.hpHeader h6:hover, .span-ab-top-region .hpHeader h6 a:hover, .top-news .b-column .hpHeader h6 a:hover, .b-column .split-layout .hpHeader h6:hover,  
.hpHeader h6:active, .span-ab-top-region .hpHeader h6 a:active, .top-news .b-column .hpHeader h6 a:active, .b-column .split-layout .hpHeader h6:active {
  border-bottom-color: #000;
}

/* B Column Centered Treatment */
.span-ab-top-region .hpHeader h6, .top-news .b-column .hpHeader h6  {
  text-align: center;
  border-bottom: none;
  padding: 0px;
}

.span-ab-top-region .hpHeader h6 a, .top-news .b-column .hpHeader h6 a  {
  display: inline-block;
  border-bottom: 1px solid #999;
  padding: 12px 4px 2px 4px;
}

/* Undo B Column Treatment for 3 Column Layouts and Split Code */
.b-column .split-layout .hpHeader h6 {
  text-align: left;    
  border-bottom: 1px solid #999;
  padding: 12px 4px 2px 0;
}

.b-column .split-layout .hpHeader h6 a {
  border-bottom: none;
  padding: 0;
}


/* Remove Top Rule When First in Region */
.collection:first-child .hpHeader h6, .collection:first-child .hpHeader h6 a {
  border-top: none;
  padding-top: 0;
}

/* Lens Header Styles */

.hpHeader h6, .span-ab-top-region .hpHeader h6 a, .top-news .b-column .hpHeader h6 a, .b-column .split-layout .hpHeader h6 { border-bottom-width: 2px; }

/* END .HPHEADER STYLING */


/* Briefing Newsletter */

.nythpBriefingNewsletterSignup {
	font-family: 'nyt-franklin', Arial, Helvetica, sans-serif;
	font-size: 11px;
	padding-left: 16px;
	background: url('http://graphics8.nytimes.com/packages/images/homepage/newsletter_icon.png') no-repeat;
	font-weight: 400;
}

a.nythpBriefingNewsletterSignup, a:link.nythpBriefingNewsletterSignup, a:visited.nythpBriefingNewsletterSignup {
	color: #326891;
}

</style>
<style>

.nythpBriefings h3.kicker {
    font-family: nyt-franklin,Arial,sans-serif;
    font-size: 12px;
    font-weight: 700;
    background: url('http://graphics8.nytimes.com/packages/images/homepage/briefings/dogear_sm.png') no-repeat scroll left top transparent;
    padding: 0 0 3px 20px;
    border-bottom: 1px solid #000;
    display: inline-block;
    color: #000;
    margin-bottom: 8px;
margin-top: 0px !important;
}

.nythpBriefings .timestamp {display: none;}

/* Gift Guide Promos */

.nythpGiftguide h3.kicker {

}

.nythpGiftguide article .kicker, .nythpGiftguide .byline {
	display: none;
}

.b-column .nythpGiftguide .image {
	margin-top: -40px;
}

.nythpGiftguide .theme-news-headlines li:before {
	background: none;
	border: none;
}

.nythpGiftguide .theme-news-headlines li {
	padding-left: 0px;
}

.nythpGiftguide .refer li .refer-heading {
	font-family: "nyt-franklin",arial,helvetica,sans-serif; 
	text-transform: uppercase; 
	font-size: 10px;
	font-weight: 400;
}

.nythpGiftguide .story.theme-summary .story-heading {
	font-size: 18px;
	line-height: 21px;
	font-weight: 700;
	font-family: "nyt-cheltenham",georgia,"times new roman",times,serif;
}

</style>

<script>
require(['foundation/main'], function () {
    require(['jquery/nyt', 'foundation/views/page-manager'], function ($, pageManager) {
        $(document).ready(function () {
             
              $("h3:contains('The Day Ahead')").parent().addClass("nythpBriefings");
              $("h3:contains('Holiday Gift Guide')").parent().addClass("nythpGiftguide");

        });
    });
});

</script></div>
    </div><!-- close span-abc-region -->

<div class="span-ab-layout layout">

    <div class="ab-column column">

        <section id="top-news" class="top-news">
            <h2 class="section-heading visually-hidden">Top News</h2>

            
            
            
            <div class="wide-b-layout layout">

                <div class="a-column column">

                    <div class="first-column-region region">

                        <div class="collection">
            <article class="story theme-summary lede" id="topnews-100000004097686" data-story-id="100000004097686" data-rank="0" data-collection-renderstyle="LedeSum">
    
        <h2 class="story-heading"><a href="http://www.nytimes.com/2015/12/23/business/dealbook/sued-over-old-debt-and-blocked-from-suing-back.html">Sued Over Old Debt, and Blocked From Suing Back</a></h2>

            <p class="byline">By JESSICA SILVER-GREENBERG and MICHAEL CORKERY </p>
    
    <p class="summary">Debt buyers are using the courts to sue consumers and collect debt, then preventing those same consumers from using the courts to mount a challenge.</p>

		    <p class="theme-comments">
    <a href="http://www.nytimes.com/2015/12/23/business/dealbook/sued-over-old-debt-and-blocked-from-suing-back.html?hp&amp;target=comments#commentsContainer" class="comments-link"><i class="icon sprite-icon comments-icon"></i><span class="comment-count">&nbsp;Comments</span></a>
</p>
	
	</article>


</div>
<div class="collection headlines">
                <h3 class="kicker collection-kicker">Beware the Fine Print</h3>
        <ul class="theme-news-headlines">
                    <li>
            <article class="story" id="topnews-100000003993272" data-story-id="100000003993272" data-rank="0" data-collection-renderstyle="HpHeadline">
        <h2 class="story-heading"><i class="icon"></i><a href="http://www.nytimes.com/2015/11/01/business/dealbook/arbitration-everywhere-stacking-the-deck-of-justice.html">Arbitration Everywhere</a> </h2>
</article>
            </li>
                    <li>
            <article class="story" id="topnews-100000003995735" data-story-id="100000003995735" data-rank="1" data-collection-renderstyle="HpHeadline">
        <h2 class="story-heading"><i class="icon"></i><a href="http://www.nytimes.com/2015/11/02/business/dealbook/in-arbitration-a-privatization-of-the-justice-system.html">A Private Justice System</a> </h2>
</article>
            </li>
                    <li>
            <article class="story" id="topnews-100000003998039" data-story-id="100000003998039" data-rank="2" data-collection-renderstyle="HpHeadline">
        <h2 class="story-heading"><i class="icon"></i><a href="http://www.nytimes.com/2015/11/03/business/dealbook/in-religious-arbitration-scripture-is-the-rule-of-law.html">When Scripture Is Law</a> </h2>
</article>
            </li>
            </ul>
</div>
<hr class="single-rule"><div class="collection">
            <article class="story theme-summary" id="topnews-100000004107448" data-story-id="100000004107448" data-rank="0" data-collection-renderstyle="HpSumSmallMedia">
    
    
    <h2 class="story-heading"><a href="http://www.nytimes.com/2015/12/23/world/middleeast/iraqi-army-isis-ramadi.html">Iraq Forces Advance in Fight to Retake Key City From ISIS</a></h2>

            <p class="byline">By OMAR AL-JAWOSHY and SEWELL CHAN <time class="timestamp" datetime="2015-12-22" data-eastern-timestamp="10:26 AM" data-utc-timestamp="1450797991">10:26 AM ET</time></p>
    
            <div class="thumb">
            <a href="http://www.nytimes.com/2015/12/23/world/middleeast/iraqi-army-isis-ramadi.html"><img src="http://static01.nyt.com/images/2015/12/23/world/23ramadi-web2/23ramadi-web2-thumbStandard.jpg" alt=""></a>
        </div>
    
    <p class="summary">
        Soldiers began a fierce assault to wrest Ramadi from the Islamic State on Monday night, and by midday Tuesday had advanced despite heavy resistance, an army commander said.    </p>

    
    </article>

</div>
<hr class="single-rule"><div class="collection">
            <article class="story theme-summary" id="topnews-100000004096360" data-story-id="100000004096360" data-rank="0" data-collection-renderstyle="HpSum">
    
        <h2 class="story-heading"><a href="http://www.nytimes.com/2015/12/23/world/europe/turkey-border-refugees.html">Turkey Tightens Border, a Sore Point in Two Major Crises</a></h2>

            <p class="byline">By TIM ARANGO <time class="timestamp" datetime="2015-12-22" data-eastern-timestamp="11:21 AM" data-utc-timestamp="1450801295">11:21 AM ET</time></p>
    
    <p class="summary">On land and at sea, Turkey is moving to clamp down on a revolving door of Syrian refugees, foreign fighters and the smugglers who enable them.</p>

		    <p class="theme-comments">
    <a href="http://www.nytimes.com/2015/12/23/world/europe/turkey-border-refugees.html?hp&amp;target=comments#commentsContainer" class="comments-link"><i class="icon sprite-icon comments-icon"></i><span class="comment-count">&nbsp;Comments</span></a>
</p>
	
	</article>

</div>
<div class="collection headlines">
            <ul class="theme-news-headlines">
                    <li>
            <div style="margin-top: -10px;"></div>            </li>
                    <li>
            <article class="story" id="topnews-100000004107342" data-story-id="100000004107342" data-rank="1" data-collection-renderstyle="HpBlogHeadline">
        <h2 class="story-heading"><i class="icon"></i><a href="http://www.nytimes.com/2015/12/23/world/europe/migrant-crisis-europe-million.html">Over 1 Million Migrants Have Entered Europe in 2015</a></h2>
</article>
            </li>
            </ul>
</div>
<hr class="single-rule"><div class="collection">
            <style type="text/css">

.nythpElection2016Header {

}

.nythpElection2016Header h6 {
    font-family: "nyt-franklin", arial, helvetica, sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    background-image: url(http://graphics8.nytimes.com/newsgraphics/2015/02/25/election-navigation/assets/images/election-2016-logo.png);
    background-repeat: no-repeat;
    margin-bottom: 6px;
    height: 18px;
    background-position: left bottom;
    margin: 0 auto 6px;
    background-size: 18px 18px;
    padding: 5px 5px 0 25px;
    letter-spacing: 1px;
}

.nythpElection2016Header h6 a {
    text-decoration: none;
    color: #000;
}

 .nythpElection2016Header h6:hover,
 .nythpElection2016Header h6:active {
}

.nythpElection2016Header h6 a, 
.nythpElection2016Header h6 a:visited  {
    text-decoration: none;
    color: #000;
}

.nythpElection2016Header h6 em {
  color: #999;
  font-style: normal;
}

.span-ab-top-region .nythpElection2016Header, .b-column .nythpElection2016Header {
    text-align: center;
}

.span-ab-top-region .nythpElection2016Header h6, .b-column .nythpElection2016Header h6 {
    display: inline-block;

}

</style>

<div class="nythpHeader nythpElection2016Header">
  <h6><a href="http://www.nytimes.com/pages/politics/index.html">Election 2016</a></h6>
</div>

<article class="story theme-summary" id="topnews-100000004106740" data-story-id="100000004106740" data-rank="1" data-collection-renderstyle="HpSum">
    
        <h2 class="story-heading"><a href="http://www.nytimes.com/2015/12/23/us/politics/hillary-clinton-embraces-bill-clintons-economic-legacy.html">Clinton Embraces Her Husbandâs Economic Legacy</a></h2>

            <p class="byline">By AMY CHOZICK </p>
    
    <p class="summary">Leaning on Bill Clintonâs record of lifting wages and creating jobs, Hillary Clinton is castigating Republicans for policies she says led to the downturns Mr. Clinton and President Obama inherited.</p>

	
	</article>

</div>
<div class="collection headlines">
            <ul class="theme-news-headlines">
                    <li>
            <div style="margin-top: -10px;"></div>            </li>
                    <li>
            <article class="story" id="topnews-100000004107591" data-story-id="100000004107591" data-rank="1" data-collection-renderstyle="HpHeadline">
        <h2 class="story-heading"><i class="icon"></i><a href="http://www.nytimes.com/politics/first-draft/2015/12/22/donald-trump-goes-vulgar-in-swipe-at-hillary-clinton/">Trump Goes Vulgar in Swipe at Clinton</a> <time class="timestamp" datetime="2015-12-22" data-eastern-timestamp="10:19 AM" data-utc-timestamp="1450797558">10:19 AM ET</time></h2>
</article>
            </li>
                    <li>
            <article class="story" id="topnews-100000004108047" data-story-id="100000004108047" data-rank="2" data-collection-renderstyle="HpHeadline">
        <h2 class="story-heading"><i class="icon"></i><a href="http://www.nytimes.com/politics/first-draft/2015/12/22/analysis-of-donald-trump-tax-plan-sees-a-boon-for-wealthy-and-trillions-in-debt/">Analysis of Trump Tax Plan Sees Boon for Wealthy and More Debt</a> <time class="timestamp" datetime="2015-12-22" data-eastern-timestamp="1:18 PM" data-utc-timestamp="1450808320">1:18 PM ET</time></h2>
</article>
            </li>
            </ul>
</div>
                                                                        
                    </div><!-- close first-column-region -->

                </div><!-- close a-column -->

                <div class="b-column column">

                                            <div class="photo-spot-region region">

                            <div class="collection">
            <script>function getFlexData() { return {"data":{"width":"100%","height":"auto","video":{"vid":"","poster":"http:\/\/int.nyt.com\/data\/videotape\/finished\/2015\/12\/1450785382\/BestInGraphics2015_sq-376_0.jpg","mp4":"http:\/\/int.nyt.com\/data\/videotape\/finished\/2015\/12\/1450785382\/BestInGraphics2015_sq-376.mp4","webm":"http:\/\/int.nyt.com\/data\/videotape\/finished\/2015\/12\/1450785382\/BestInGraphics2015_sq-376.webm","loop":false,"muted":true},"link":"http:\/\/www.nytimes.com\/interactive\/2015\/us\/year-in-interactive-storytelling.html","caption":"","credit":"","target":""}}; }var NYTD=NYTD || {}; NYTD.FlexTypes = NYTD.FlexTypes || []; NYTD.FlexTypes.push({"target":"FT100000004106784","type":"VideoLoopPromo_v2","data":{"width":"100%","height":"auto","video":{"vid":"","poster":"http:\/\/int.nyt.com\/data\/videotape\/finished\/2015\/12\/1450785382\/BestInGraphics2015_sq-376_0.jpg","mp4":"http:\/\/int.nyt.com\/data\/videotape\/finished\/2015\/12\/1450785382\/BestInGraphics2015_sq-376.mp4","webm":"http:\/\/int.nyt.com\/data\/videotape\/finished\/2015\/12\/1450785382\/BestInGraphics2015_sq-376.webm","loop":false,"muted":true},"link":"http:\/\/www.nytimes.com\/interactive\/2015\/us\/year-in-interactive-storytelling.html","caption":"","credit":"","target":""}});</script><script>
  require(['foundation/main'], function() {
    require(['http://graphics8.nytimes.com/newsgraphics/2015/07/17/simple-video-flextype/assets/build.js']);
  });
</script>
<style>
#FT100000004106784 { min-height: 374px; background: #000; }
</style><div id="FT100000004106784"></div><div style="margin-bottom: 15px;"></div><article class="story theme-feature" id="topnews-100000004106806" data-story-id="100000004106806" data-rank="2" data-collection-renderstyle="LargeMediaHeadlineSumCentered">
    
    
    
    <h1 class="story-heading"><a href="http://www.nytimes.com/interactive/2015/us/year-in-interactive-storytelling.html">2015: Our Best Visual<br /> Stories and Graphics</a></h1>

    <p class="summary">Images of the <strong>Earth</strong> taken every 10 minutes. A trip along the rock face of <strong>El Capitan</strong>. The evolution of a <strong>Justin Bieber</strong> hit. These were among 2015âs best graphics, visualizations and multimedia stories from The Times.</p>

    
    
    </article>
</div>

                        </div><!-- close photo-spot-region -->

                        <hr class="scotch-rule" />
                    
                    
                        <div class="second-column-region region">

                            <div class="collection">
            <article class="story theme-summary" id="topnews-100000004107281" data-story-id="100000004107281" data-rank="0" data-collection-renderstyle="HpSumSmallMediaHigh">
    
        <h2 class="story-heading"><a href="http://www.nytimes.com/2015/12/23/world/asia/landslide-shenzhen-china.html">âIt Had to Collapse Sometime,â Many in Shenzhen Thought</a></h2>

            <div class="thumb">
            <a href="http://www.nytimes.com/2015/12/23/world/asia/landslide-shenzhen-china.html"><img src="http://static01.nyt.com/images/2015/12/23/world/asia/23shenzhen-web/23shenzhen-web-thumbStandard-v2.jpg" alt=""></a>
        </div>
    
            <p class="byline">By CHRIS BUCKLEY and AUSTIN RAMZY <time class="timestamp" datetime="2015-12-22" data-eastern-timestamp="1:03 PM" data-utc-timestamp="1450807393">1:03 PM ET</time></p>
    
    <p class="summary">
        The first body was recovered Tuesday from the site of Sundayâs massive landslide in the southern Chinese boomtown of Shenzhen, where some saw the disaster as inevitable.    </p>

            <p class="theme-comments">
    <a href="http://www.nytimes.com/2015/12/23/world/asia/landslide-shenzhen-china.html?hp&amp;target=comments#commentsContainer" class="comments-link"><i class="icon sprite-icon comments-icon"></i><span class="comment-count">&nbsp;Comments</span></a>
</p>
    
    </article>
</div>
<hr class="single-rule"><div class="collection">
            <article class="story theme-summary" id="topnews-100000004104498" data-story-id="100000004104498" data-rank="0" data-collection-renderstyle="HpSumSmallMediaHigh">
    
        <h2 class="story-heading"><a href="http://www.nytimes.com/2015/12/23/health/with-in-vitro-fertilization-persistence-pays-off-study-suggests.html">With In Vitro Fertilization, Persistence Can Pay Off</a></h2>

            <div class="thumb">
            <a href="http://www.nytimes.com/2015/12/23/health/with-in-vitro-fertilization-persistence-pays-off-study-suggests.html"><img src="http://static01.nyt.com/images/2015/12/23/science/23IVF1/23IVF1-thumbStandard.jpg" alt=""></a>
        </div>
    
            <p class="byline">By CATHERINE SAINT LOUIS <time class="timestamp" datetime="2015-12-22" data-eastern-timestamp="11:14 AM" data-utc-timestamp="1450800845">11:14 AM ET</time></p>
    
    <p class="summary">
        In a large study, two-thirds of women reported having a child by the sixth cycle, upending the assumption that the chances after three or four failed tries are dismal.    </p>

            <p class="theme-comments">
    <a href="http://www.nytimes.com/2015/12/23/health/with-in-vitro-fertilization-persistence-pays-off-study-suggests.html?hp&amp;target=comments#commentsContainer" class="comments-link"><i class="icon sprite-icon comments-icon"></i><span class="comment-count">&nbsp;Comments</span></a>
</p>
    
    </article>
</div>
<hr class="single-rule"><div class="collection">
            <article class="story theme-summary" id="topnews-100000004099493" data-story-id="100000004099493" data-rank="0" data-collection-renderstyle="HpSumSmallMediaHigh">
    
        <h2 class="story-heading"><a href="http://www.nytimes.com/2015/12/23/us/us-muslims-begin-to-publicly-confront-questions-on-islam-and-violence.html">U.S. Muslims Try New Approach in Confronting Terror</a></h2>

            <div class="thumb">
            <a href="http://www.nytimes.com/2015/12/23/us/us-muslims-begin-to-publicly-confront-questions-on-islam-and-violence.html"><img src="http://static01.nyt.com/images/2015/12/18/us/00muslims-web01/00muslims-web01-thumbStandard.jpg" alt=""></a>
        </div>
    
            <p class="byline">By LAURIE GOODSTEIN <time class="timestamp" datetime="2015-12-22" data-eastern-timestamp="11:41 AM" data-utc-timestamp="1450802494">11:41 AM ET</time></p>
    
    <p class="summary">
        Across the country, many American Muslims are now saying it is no longer enough to denounce terrorism and assert that Islam is a religion of peace.    </p>

    
    </article>
</div>
<hr class="single-rule"><div class="collection">
            <article class="story theme-summary" id="topnews-100000004107278" data-story-id="100000004107278" data-rank="0" data-collection-renderstyle="HpSumMediumMediaHigh">
    
            <figure class="media photo medium-thumb">
    <div class="image">
        <a href="http://www.nytimes.com/interactive/projects/cp/politics/congressional-holiday-cards-2015"><img src="http://static01.nyt.com/images/2015/12/21/us/politics/kaine-holiday-card/kaine-holiday-card-mediumFlexible177-v2.jpg" alt="" /></a>
    </div>
</figure>
    
    
    <h2 class="story-heading"><a href="http://www.nytimes.com/interactive/projects/cp/politics/congressional-holiday-cards-2015">Seasonâs Greetings,</br> From Your Senator</a></h2>

            <p class="byline">By EMMARIE HUETTEMAN and MIKAYLA BOUCHARD </p>
    
    <p class="summary">
        We asked all 100 senators (as well as Speaker Paul D. Ryan) for their holiday cards. Here are some of our favorites.    </p>

    
    
</article>
</div>
<hr class="single-rule"><div class="collection headlines">
                <h3 class="kicker collection-kicker">More News</h3>
        <ul class="theme-news-headlines">
                    <li>
            <article class="story" id="topnews-100000004107669" data-story-id="100000004107669" data-rank="0" data-collection-renderstyle="HpHeadline">
        <h2 class="story-heading"><i class="icon"></i><a href="http://www.nytimes.com/2015/12/23/nyregion/new-york-detective-killed-in-afghanistan-is-mourned-as-an-unassuming-hero.html">New York Detective Killed in Afghanistan Is Mourned</a> <time class="timestamp" datetime="2015-12-22" data-eastern-timestamp="12:03 PM" data-utc-timestamp="1450803791">12:03 PM ET</time></h2>
</article>
            </li>
                    <li>
            <article class="story" id="topnews-100000004107055" data-story-id="100000004107055" data-rank="1" data-collection-renderstyle="HpHeadline">
        <h2 class="story-heading"><i class="icon"></i><a href="http://www.nytimes.com/2015/12/22/us/grand-jury-finds-no-felony-committed-by-jailers-in-death-of-sandra-bland.html">No Indictments in Sandra Blandâs Death in Texas</a> </h2>
</article>
            </li>
                    <li>
            <article class="story" id="topnews-100000004105976" data-story-id="100000004105976" data-rank="2" data-collection-renderstyle="HpHeadline">
        <h2 class="story-heading"><i class="icon"></i><a href="http://www.nytimes.com/2015/12/22/science/spacex-rocket-landing.html">SpaceX Lands Rocket After Launch of Satellites</a> <time class="timestamp" datetime="2015-12-22" data-eastern-timestamp="11:29 AM" data-utc-timestamp="1450801765">11:29 AM ET</time></h2>
</article>
            </li>
                    <li>
            <article class="story" id="topnews-100000004105426" data-story-id="100000004105426" data-rank="3" data-collection-renderstyle="HpHeadline">
        <h2 class="story-heading"><i class="icon"></i><a href="http://www.nytimes.com/2015/12/22/world/asia/china-pu-zhiqiang-sentence.html">Chinese Rights Lawyer Is Given Suspended Sentence</a> </h2>
</article>
            </li>
            </ul>
</div>

                        </div><!-- close second-column-region -->

                    
                </div><!-- close b-column -->

            </div><!-- close wide-b-layout -->

            
                            <div class="span-ab-bottom-region region">
                    <hr class="scotch-rule" />
<div class="split-3-layout layout theme-base">
<h2 class="section-heading">
</h2>
<div class="column">
    <article class="story theme-summary " id="topnews-100000004078903" data-story-id="100000004078903" data-rank="0" data-collection-renderstyle="HPMediumMediaHedSumDaypart">
                <a href="http://www.nytimes.com/2015/12/23/theater/the-actress-cynthia-erivo-rises-with-the-color-purple.html">
                        <div class="wide-thumb">
                    <img src="http://static01.nyt.com/images/2015/12/23/arts/CYNTHIA/CYNTHIA-mediumThreeByTwo210-v2.jpg" />
                                    </div>
                 </a>
        <h2 class="story-heading">
            <a href="http://www.nytimes.com/2015/12/23/theater/the-actress-cynthia-erivo-rises-with-the-color-purple.html">Broadway Newcomer Shines in âColor Purpleâ</a>
        </h2>
        <p class="summary">
            The daughter of Nigerian immigrants to London, Cynthia Erivo has received the kind of praise that can change a career for her portrayal of Celie in this Broadway revival.        </p>
    </article>
</div>
<div class="column">
    <article class="story theme-summary " id="topnews-100000004094551" data-story-id="100000004094551" data-rank="1" data-collection-renderstyle="HPMediumMediaHedSumDaypart">
                <a href="http://www.nytimes.com/2015/12/22/arts/design/in-sanitation-and-salt-complex-in-tribeca-a-salutary-lesson-in-urban-responsibility.html">
                        <div class="wide-thumb">
                    <img src="http://static01.nyt.com/images/2015/12/22/arts/22SANITATION1/22SANITATION1-mediumThreeByTwo210.jpg" />
                                    </div>
                 </a>
        <h2 class="story-heading">
            <a href="http://www.nytimes.com/2015/12/22/arts/design/in-sanitation-and-salt-complex-in-tribeca-a-salutary-lesson-in-urban-responsibility.html">Salt Facility Near Tribeca Offers Lesson in Design</a>
        </h2>
        <p class="summary">
            What opponents feared would be a blight on their neighborhood has turned out to be a boon: a crystalline, eye-catching tribute to inventive design, Michael Kimmelman writes.        </p>
    </article>
</div>
<h2 class="section-heading">
</h2>
<div class="column">
    <article class="story theme-summary " id="topnews-100000003831734" data-story-id="100000003831734" data-rank="0" data-collection-renderstyle="HPMediumMediaHedSumDaypart">
                <a href="http://www.nytimes.com/2015/08/16/technology/inside-amazon-wrestling-big-ideas-in-a-bruising-workplace.html">
                        <div class="wide-thumb">
                    <img src="http://static01.nyt.com/images/2015/08/13/business/13amazon-selects-slide-ZSZ3/13amazon-selects-slide-ZSZ3-mediumThreeByTwo210-v3.jpg" />
                                    </div>
                 </a>
        <h2 class="story-heading">
            <a href="http://www.nytimes.com/2015/08/16/technology/inside-amazon-wrestling-big-ideas-in-a-bruising-workplace.html">Best of 2015: Inside Amazon</a>
        </h2>
        <p class="summary">
            The Times is highlighting some of its most engaging journalism of the year: Readers were captivated by a look at the bruising work environment at the online retailer.        </p>
    </article>
</div>
</div>
                </div><!-- close span-ab-bottom-region -->
            
        </section><!-- close top-news -->

    </div><!-- close ab-column -->

    <div class="c-column column">

        <div id="Middle" class="ad middle-ad hidden nocontent robots-nocontent"></div>

        <div class="region c-column-top-span-region">

            
        </div><!-- close c-column-top-span-region -->

        <section class="opinion">

            <div class="region opinion-c-col-top-region">
                <div class="collection">
            <section class="opinion">
  <h2 class="section-heading"><a href="http://www.nytimes.com/pages/opinion/index.html">The Opinion Pages</a>
  </h2>
</section></div>
            </div> <!-- close opinion-c-col-top-region -->

            <div class="layout split-layout">

                <div class="column">
                    <div class="region opinion-c-col-left-region">
                                            <div class="collection">
            <article class="story theme-summary" id="topnews-100000004106129" data-story-id="100000004106129" data-rank="0" data-collection-renderstyle="HpSumXSMedia">
    
            <h3 class="kicker">Campaign Stops </h3>
        <h2 class="story-heading"><a href="http://www.nytimes.com/2015/12/22/opinion/campaign-stops/the-democrats-database-fight.html">The Democratsâ Database Fight</a></h2>

            <div class="small-thumb">
            <a href="http://www.nytimes.com/2015/12/22/opinion/campaign-stops/the-democrats-database-fight.html"><img src="http://static01.nyt.com/images/2015/12/22/opinion/22rollerWeb/22rollerWeb-blogSmallThumb.jpg" alt=""></a>
        </div>
    
            <p class="byline">By EMMA ROLLER </p>
    
    <p class="summary">
        A squabble over breached voter files shows the dominance of data.    </p>

            <p class="theme-comments">
    <a href="http://www.nytimes.com/2015/12/22/opinion/campaign-stops/the-democrats-database-fight.html?hp&amp;target=comments#commentsContainer" class="comments-link"><i class="icon sprite-icon comments-icon"></i><span class="comment-count">&nbsp;Comments</span></a>
</p>
    
    </article>

</div>
                                            <div class="collection headlines">
            <ul class="theme-news-headlines">
                    <li>
            <article class="story" id="topnews-100000004106086" data-story-id="100000004106086" data-rank="0" data-collection-renderstyle="HpHeadline">
        <h2 class="story-heading"><i class="icon"></i><a href="http://www.nytimes.com/2015/12/22/opinion/the-2015-sidney-awards-part-2.html">Brooks: The 2015 Sidney Awards, Part 2</a> </h2>
</article>
            </li>
                    <li>
            <article class="story" id="topnews-100000004107270" data-story-id="100000004107270" data-rank="1" data-collection-renderstyle="HpHeadline">
        <h2 class="story-heading"><i class="icon"></i><a href="http://www.nytimes.com/roomfordebate/2015/12/22/what-is-the-appeal-of-astrology">Room for Debate: Whatâs the Appeal of Astrology?</a> <time class="timestamp" datetime="2015-12-22" data-eastern-timestamp="11:33 AM" data-utc-timestamp="1450802032">11:33 AM ET</time></h2>
</article>
            </li>
                    <li>
            <article class="story" id="topnews-100000004106128" data-story-id="100000004106128" data-rank="2" data-collection-renderstyle="HpHeadline">
        <h2 class="story-heading"><i class="icon"></i><a href="http://www.nytimes.com/2015/12/22/opinion/the-security-council-wakes-up-on-syria.html">Editorial: The Security Council Wakes Up on Syria</a> </h2>
</article>
            </li>
                    <li>
            <article class="story" id="topnews-100000004043172" data-story-id="100000004043172" data-rank="3" data-collection-renderstyle="HpHeadline">
        <h2 class="story-heading"><i class="icon"></i><a href="http://www.nytimes.com/2015/12/22/opinion/parents-stop-obsessing-over-concussions.html">Op-Ed: Parents, Stop Obsessing Over Concussions</a> </h2>
</article>
            </li>
            </ul>
</div>
                    </div>
                </div>

                <div class="column">
                    <div class="region opinion-c-col-right-region">
                                            <div class="collection">
            <article class="story theme-summary" id="topnews-100000004105966" data-story-id="100000004105966" data-rank="0" data-collection-renderstyle="HpMediumMediaSummary">
    
            <h3 class="kicker">Op-Docs </h3>
    
            <figure class="media photo medium-thumb">
    <div class="image">
        <a href="http://www.nytimes.com/2015/12/22/opinion/animated-life-the-living-fossil-fish.html"><img src="http://static01.nyt.com/images/2015/12/21/multimedia/opdoc-fish/opdoc-fish-mediumFlexible177.jpg" alt="" /></a>
    </div>
</figure>
    
    <h2 class="story-heading"><a href="http://www.nytimes.com/2015/12/22/opinion/animated-life-the-living-fossil-fish.html"><span class="icon video"></span> âAnimated Life: The Living Fossil Fishâ</a></h2>

            <p class="byline">By FLORA LICHTMAN and SHARON SHATTUCK </p>
    
    <p class="summary">
        Celebrating the discovery of the coelecanth, the fish time left behind.    </p>

            <p class="theme-comments">
    <a href="http://www.nytimes.com/2015/12/22/opinion/animated-life-the-living-fossil-fish.html?hp&amp;target=comments#commentsContainer" class="comments-link"><i class="icon sprite-icon comments-icon"></i><span class="comment-count">&nbsp;Comments</span></a>
</p>
    
    
</article>
</div>
                                            <div class="collection headlines">
            <ul class="theme-news-headlines">
                    <li>
            <article class="story" id="topnews-100000003665755" data-story-id="100000003665755" data-rank="0" data-collection-renderstyle="HpHeadline">
        <h2 class="story-heading"><i class="icon"></i><a href="http://www.facebook.com/nytopinion">Join us on Facebook Â»</a> </h2>
</article>
            </li>
            </ul>
</div>
                    </div>
                </div>

            </div> <!-- close split-layout -->

            <div class="region opinion-c-col-bottom-region">
                <div class="collection">
            <style>	


.c-column.column section.opinion div time.timestamp{
	display:none;
}


</style><style>	
.c-column.column section.opinion div p.theme-comments{
	display:none;
}



</style></div>
            </div> <!-- close opinion-c-col-bottom-region -->

        </section> <!-- close opinion -->

        <section class="user-subscriptions hidden">

            <h2 class="section-heading visually-hidden">User Subscriptions</h2>

            <div class="collection insider-collection">
  <div id="times-insider-subscription" class="times-insider-subscription hidden">
    <ul class="theme-news-headlines">
                              <li>
              <article class="story">
                <h2 class="story-heading">
                  <a href="http://www.nytimes.com/2015/11/11/insider/lessons-from-a-decade-of-peering-through-the-lens.html">Wolves, Whales and War Zones: 10 Years of Times Video</a>
                </h2>
              </article>
            </li>
                      <li>
              <article class="story">
                <h2 class="story-heading">
                  <a href="http://www.nytimes.com/2015/12/16/insider/notes-from-the-rewrite-desk.html">Get Me Rewrite!</a>
                </h2>
              </article>
            </li>
                      <li>
              <article class="story">
                <h2 class="story-heading">
                  <a href="http://www.nytimes.com/2015/12/18/insider/podcast-a-gop-debate-wrap-up.html">Podcast: A G.O.P. Debate Wrap-Up</a>
                </h2>
              </article>
            </li>
                      </ul>
  <div class="thumb">
        <a href="http://www.nytimes.com/section/insider">
        <svg class="insider-logo" width="65" height="20" role="img" aria-label="Insider">
            <image width="65" height="20" xlink:href="http://a1.nyt.com/assets/homepage/20151216-175935/images/foundation/logos/insider-logo-240x72.svg" src="http://a1.nyt.com/assets/homepage/20151216-175935/images/foundation/logos/insider-logo-240x72.png" alt="Insider" />
        </svg>
      </a>
    </div>
</div><!--close times-insider-subscription -->
</div><!-- close collection -->

<div class="collection">
  <div id="times-premier-crossword-subscription" class="times-premier-crossword-subscription hidden">
      <div class="layout split-layout">
        <div class="column">
          <div class="collection insider-collection">
            <article class="story">
              <h3 class="kicker">
                <a href="http://www.nytimes.com/section/insider">Times Insider &raquo;</a>
              </h3>
                              <h2 class="story-heading">
                  <a href="http://www.nytimes.com/2015/11/11/insider/lessons-from-a-decade-of-peering-through-the-lens.html">Wolves, Whales and War Zones: 10 Years of Times Video</a>
                </h2>
                          </article>
          </div>
        </div><!-- close column -->
        <div class="column">
	<div class="collection crosswords-collection">
	    <article class="story">
	    	<h3 class="kicker">
	    		<a href="http://www.nytimes.com/crosswords">The Crossword &raquo;</a>
	    	</h3>
			<h2 class="story-heading">
				<a href="http://www.nytimes.com/crosswords">Play Today&rsquo;s Puzzle </a>
			</h2>
			<div class="thumb">
				<a href="http://www.nytimes.com/crosswords">
					<img src="http://static01.nyt.com/images/crosswords/crosswords_30x30.png" alt="" />
				</a>
			</div>
	    </article>
	</div>
</div>
      </div><!--close TimesPremiercrossword -->
    </div><!--close times-premier-crossword-subscription -->
</div><!-- close collection -->

<div class="collection">
    <div id="crossword-subscription" class="crossword-subscription hidden">
        <div class="layout split-layout">
            <div class="column">
	<div class="collection crosswords-collection">
	    <article class="story">
	    	<h3 class="kicker">
	    		<a href="http://www.nytimes.com/crosswords">The Crossword &raquo;</a>
	    	</h3>
			<h2 class="story-heading">
				<a href="http://www.nytimes.com/crosswords">Play Today&rsquo;s Puzzle </a>
			</h2>
			<div class="thumb">
				<a href="http://www.nytimes.com/crosswords">
					<img src="http://static01.nyt.com/images/crosswords/crosswords_30x30.png" alt="" />
				</a>
			</div>
	    </article>
	</div>
</div>
            <div class="column">
                <div class="collection crosswords-collection">
                    <article class="story">
                        <h3 class="kicker">
                          <a href="http://wordplay.blogs.nytimes.com">Wordplay &raquo;</a>
                        </h3>
                                                  <h2 class="story-heading">
                            <a href="http://wordplay.blogs.nytimes.com/2015/12/21/atypical/">Atypical</a>
                          </h2>
                                            </article>
                </div>
            </div><!-- close column -->
        </div><!-- close layout -->
    </div><!-- close crossword-subscription -->
</div><!--close collection -->

        </section><!-- close user-subscriptions -->

        <div id="HPMiddle" class="ad hpmiddle-ad nocontent robots-nocontent"></div>

        <div class="region c-column-middle-span-region">

            <div class="collection">
            <link rel="stylesheet" type="text/css" href="http://int.nyt.com/applications/portals/assets/portal-3dc2bf0e7593a689f857e1edec4a2566.css"/>

<div id="nytint-hp-watching">
  <div class="portal-container">
    <header class="portal-header">
      <h4>Watching</h4>
    </header>
    <div class="portal-posts-frame expanded"></div>
    <footer class="portal-footer"></footer>
  </div>
</div>

<script type="text/javascript" src="http://int.nyt.com/applications/portals/assets/portal/app-d37d526acc5f1ea70c6a0bee273416cc.js"></script>
<script type="text/javascript">
require(['foundation/main'], function() {
  require(['homepage/main'], function() {
    require(['portal/app'], function(Portal) {
        
      var opts = {
        env: 'production_published',
        matchHeight: {
          match: '.span-ab-layout.layout > .ab-column',
          container: '.c-column.column',
          maxHeight: 2000
        }
      }

      var force = window.location.search.indexOf('portal_variant=watchingNoScroll') !== -1;
      if (force || (NYTABTEST && NYTABTEST.engine &&
          NYTABTEST.engine.isUserVariant('watchingNoScroll') === '1')) {
        opts.variation = 'simple';
        opts.poll = false;
        opts.limit = 20;
      }

      var watching = Portal.create('#nytint-hp-watching', opts);
    });
  });
});
</script>

<!-- HpPrototype: WatchingEnabled: DO NOT REMOVE --></div>

        </div><!-- close c-column-middle-span-region -->

        <div class="region c-column-above-moth-fixed-region">

            
        </div><!-- close c-column-above-moth-fixed-region -->

        <div class="region c-column-above-moth-region">

            
        </div><!-- close c-column-above-moth-region -->

    </div><!-- close c-column -->

</div><!-- close span-ab-layout -->


<section id="paid-post-five-pack" class="paid-post-five-pack hidden nocontent robots-nocontent">
<h2 class="section-heading">From Our Advertisers</h2>
    <ul class="story-menu">
        <li id="PaidPostFivePack1" class="story-menu-item ad"></li>
        <li id="PaidPostFivePack2" class="story-menu-item ad"></li>
        <li id="PaidPostFivePack3" class="story-menu-item ad"></li>
        <li id="PaidPostFivePack4" class="story-menu-item ad"></li>
        <li id="PaidPostFivePack5" class="story-menu-item ad"></li>
    </ul>
</section>
<div id="HPBreak" class="ad hpbreak-ad nocontent robots-nocontent hidden"></div>

<div id="video-player-region" class="video-player-region region">
    <div class="collection">
            <div id="video-module-loader" class="loader-container video-section-loader-container">
    <div class="loader loader-t-logo-32x32-ecedeb-ffffff"><span class="visually-hidden">Loading...</span></div>
</div>
<section id="video-section"
         class="video-section invisible"
         data-playlist-id="1194811622188"
         data-api-token="cE97ArV7TzqBzkmeRVVhJ8O6GWME2iG_bRvjBTlNb4o."
         data-player-id="2640832222001"
         data-publisher-id="1749339200">
    <header class="section-header">
        <h2 class="section-heading"><a class="times-video-link" href="http://www.nytimes.com/video">times<span>video</span></a></h2>
        <a href="http://www.nytimes.com/video?src=vidm" class="user-action explore-all-videos-link"> explore all videos &raquo;</a>
    </header>
    <div class="column a-column">
        <article class="story">
            <figure class="media video video-player" aria-label="media" role="group">
                <span class="visually-hidden">Video Player</span>
                <img src="" class="poster" alt="" />
                <div class="video-player-container"></div>
                <div class="media-action-overlay"></div>
                <div class="sharetools video-sharetools"
                    data-shares="email|,facebook|,twitter|,embed|,show-all|"
                    data-url=""
                    data-title=""
                    data-description=""
                    data-content-type="video">
                </div>
                <figcaption class="credit"></figcaption>
            </figure>
        </article>
    </div>
    <div class="column b-column">
        <div id="video-playlist-container" class="video-playlist-container">
            <ul id="video-playlist" class="video-playlist"></ul>
        </div>
    </div> <!-- end b-column -->
</section>
</div>
</div><!-- close video-player-region -->

<section class="inside-nyt">
    <div class="inside-nyt-region region">
        <h2 class="section-heading">Inside Nytimes.com</h2>
        <div id="inside-nyt-browser" class="inside-nyt-browser">
            <div class="navigation-control">
                <button class="button previous deactivated">
                    <div class="arrow arrow-left">
                    <span class="visually-hidden">Go to the previous story</span>
                    <div class="arrow-conceal"></div>
                    </div>
                </button>
                <button class="button next">
                    <div class="arrow arrow-right">
                    <span class="visually-hidden">Go to the next story</span>
                    <div class="arrow-conceal"></div>
                    </div>
                </button>
            </div>
            <div class="carousel">
                <ol class="menu layout-horizontal theme-story">
                    <li>
        <section>
        <h2 class="section-heading"><a href="http://www.nytimes.com/pages/arts/music/index.html">Music</a></h2>

    <article class="story theme-summary" data-story-id="100000004105730" data-rank="0" data-collection-renderstyle="Moth">
        <a class="story-link" href="http://www.nytimes.com/2015/12/22/arts/music/for-dj-khaled-snapchat-is-a-major-key-to-success.html">
            <div class="wide-thumb">
                <img src="http://static01.nyt.com/images/2015/12/22/arts/22KHALEDSNAP/22KHALEDSNAP-mediumSquare149.jpg" alt="">
            </div>
            <h2 class="story-heading">For DJ Khaled, Snapchat Is a Major Key to Success</h2>
        </a>
    </article>

        </section>
    </li>
    <li>
        <section>
        <h2 class="section-heading"><a href="http://www.nytimes.com/section/travel">Travel</a></h2>

    <article class="story theme-summary" data-story-id="100000004096334" data-rank="1" data-collection-renderstyle="Moth">
        <a class="story-link" href="http://www.nytimes.com/2015/12/27/travel/vacation-iphone-apps.html">
            <div class="wide-thumb">
                <img src="http://static01.nyt.com/images/2015/12/27/travel/27GETAWAY1/27GETAWAY1-mediumSquare149.jpg" alt="">
            </div>
            <h2 class="story-heading">12 Travel Apps Worth Keeping in 2016</h2>
        </a>
    </article>

        </section>
    </li>
    <li>
        <section>
        <h2 class="section-heading"><a href="http://www.nytimes.com/pages/opinion/index.html">Opinion</a></h2>

    <article class="story theme-summary no-thumb" data-story-id="100000004107459" data-rank="2" data-collection-renderstyle="Moth">
        <a class="story-link" href="http://www.nytimes.com/2015/12/22/opinion/limit-state-access-to-federal-court.html?ref=opinion">
            <h2 class="story-heading">Op-Ed: Limit State Access to Federal Court</h2>
            <p class="summary">An immigration case could give too much power to the U.S. judiciary.</p>
        </a>
    </article>

        </section>
    </li>
    <li>
        <section>
        <h2 class="section-heading"><a href="http://www.nytimes.com/upshot">The Upshot</a></h2>

    <article class="story theme-summary" data-story-id="100000004106498" data-rank="3" data-collection-renderstyle="Moth">
        <a class="story-link" href="http://www.nytimes.com/2015/12/23/upshot/coaches-are-so-close-but-cant-see-it-just-run-the-ball.html">
            <div class="wide-thumb">
                <img src="http://static01.nyt.com/images/2015/12/22/upshot/22UP-TMQ-B/22UP-TMQ-B-mediumSquare149.jpg" alt="">
            </div>
            <h2 class="story-heading">Tuesday Morning Quarterback</h2>
        </a>
    </article>

        </section>
    </li>
    <li>
        <section>
        <h2 class="section-heading"><a href="http://www.nytimes.com/pages/opinion/index.html">Opinion</a></h2>

    <article class="story theme-summary" data-story-id="100000004107455" data-rank="4" data-collection-renderstyle="Moth">
        <a class="story-link" href="http://www.nytimes.com/2015/12/23/opinion/courage-on-trial-in-china.html?ref=opinion">
            <div class="wide-thumb">
                <img src="http://static01.nyt.com/images/2015/12/22/opinion/22weiweiart/22weiweiart-mediumSquare149.jpg" alt="">
            </div>
            <h2 class="story-heading">Ai Weiwei: Courage on Trial in China</h2>
        </a>
    </article>

        </section>
    </li>
    <li>
        <section>
        <h2 class="section-heading"><a href="http://www.nytimes.com/pages/business/dealbook/index.html">DealBook</a></h2>

    <article class="story theme-summary" data-story-id="100000004105465" data-rank="5" data-collection-renderstyle="Moth">
        <a class="story-link" href="http://www.nytimes.com/2015/12/22/business/dealbook/at-disney-a-dark-force-looms-large-unbundling.html">
            <div class="wide-thumb">
                <img src="http://static01.nyt.com/images/2015/12/22/business/22db-sorkin-web/22db-sorkin-web-mediumSquare149.jpg" alt="">
            </div>
            <h2 class="story-heading">Beyond âStar Wars,â Dark Force Looms for Disney</h2>
        </a>
    </article>

        </section>
    </li>

    <li>
        <section>
        <h2 class="section-heading"><a href="http://www.nytimes.com/section/nyregion">N.Y. / Region</a></h2>

    <article class="story theme-summary" data-story-id="100000004088534" data-rank="0" data-collection-renderstyle="Moth">
        <a class="story-link" href="http://www.nytimes.com/2015/12/22/nyregion/a-chimneys-poignant-surprise-letters-santa-missed-long-ago.html">
            <div class="wide-thumb">
                <img src="http://static01.nyt.com/images/2015/12/22/nyregion/LETTERSjp1/LETTERSjp1-mediumSquare149.jpg" alt="">
            </div>
            <h2 class="story-heading">Long-Lost Letters to Santa, and a Girlâs Plea</h2>
        </a>
    </article>

        </section>
    </li>
    <li>
        <section>
        <h2 class="section-heading"><a href="http://www.nytimes.com/section/nyregion">N.Y. / Region</a></h2>

    <article class="story theme-summary" data-story-id="100000004106899" data-rank="1" data-collection-renderstyle="Moth">
        <a class="story-link" href="http://www.nytimes.com/interactive/2015/12/18/nyregion/emoji-your-holiday-card.html">
            <div class="wide-thumb">
                <img src="http://static01.nyt.com/images/2015/12/18/nyregion/emoji-your-holiday-card-promo/emoji-your-holiday-card-promo-mediumSquare149-v6.png" alt="">
            </div>
            <h2 class="story-heading">Your Fill-in-the-______ Holiday Card</h2>
        </a>
    </article>

        </section>
    </li>
    <li>
        <section>
        <h2 class="section-heading"><a href="http://www.nytimes.com/pages/opinion/index.html">Opinion</a></h2>

    <article class="story theme-summary no-thumb" data-story-id="100000004107454" data-rank="2" data-collection-renderstyle="Moth">
        <a class="story-link" href="http://www.nytimes.com/2015/12/22/opinion/campaign-stops/the-democrats-database-fight.html?ref=opinion">
            <h2 class="story-heading">Campaign Stops: The Democratsâ Database Fight</h2>
            <p class="summary">A squabble over breached voter files shows the dominance of data.</p>
        </a>
    </article>

        </section>
    </li>
    <li>
        <section>
        <h2 class="section-heading"><a href="http://www.nytimes.com/upshot">The Upshot</a></h2>

    <article class="story theme-summary" data-story-id="100000004081911" data-rank="3" data-collection-renderstyle="Moth">
        <a class="story-link" href="http://www.nytimes.com/2015/12/22/upshot/alcohols-effect-on-health-what-the-science-says.html">
            <div class="wide-thumb">
                <img src="http://static01.nyt.com/images/2015/12/11/upshot/14UP-Health-Booze/14UP-Health-Booze-mediumSquare149.jpg" alt="">
            </div>
            <h2 class="story-heading">Drink to Your Health, in Moderation, Science Says</h2>
        </a>
    </article>

        </section>
    </li>
    <li>
        <section>
        <h2 class="section-heading"><a href="http://www.nytimes.com/pages/opinion/index.html">Opinion</a></h2>

    <article class="story theme-summary" data-story-id="100000004107449" data-rank="4" data-collection-renderstyle="Moth">
        <a class="story-link" href="http://www.nytimes.com/roomfordebate/2015/12/22/what-is-the-appeal-of-astrology?ref=opinion">
            <div class="wide-thumb">
                <img src="http://static01.nyt.com/images/2015/12/18/opinion/RFDastrology/RFDastrology-mediumSquare149.jpg" alt="">
            </div>
            <h2 class="story-heading">Room for Debate: Whatâs the Appeal of Astrology?</h2>
        </a>
    </article>

        </section>
    </li>
    <li>
        <section>
        <h2 class="section-heading"><a href="http://www.nytimes.com/section/science">Science</a></h2>

    <article class="story theme-summary" data-story-id="100000003922449" data-rank="5" data-collection-renderstyle="Moth">
        <a class="story-link" href="http://www.nytimes.com/2015/12/22/science/california-wants-to-store-water-for-farmers-but-struggles-over-how-to-do-it.html">
            <div class="wide-thumb">
                <img src="http://static01.nyt.com/images/2015/12/18/science/22Agriculture-web1/22Agriculture-web1-mediumSquare149-v2.jpg" alt="">
            </div>
            <h2 class="story-heading">California Ponders Where to Put the Rain</h2>
        </a>
    </article>

        </section>
    </li>

                </ol>
            </div>
        </div>
    </div>
</section>

<div id="HPMidLeader" class="ad hpmidleader-ad nocontent robots-nocontent"></div>

<div class="span-ab-layout layout">

    <div class="ab-column column">

        <hr class="scotch-rule" />

            <section class="well">
    <div class="region well-region">
        <h2 class="section-heading visually-hidden">Sections</h2>

                
            <div class="split-3-layout layout theme-base">

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/world/index.html">World &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004096360" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/23/world/europe/turkey-border-refugees.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/17/world/middleeast/17Border-web/17Border-web-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        Turkey Moves to Clamp Down on Border, Long a Revolving Door        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004107726" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/23/world/europe/migrants-refugees-germany.html">
            Migrants Find an Edge in Germanyâs Economy Through Language        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004107281" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/23/world/asia/landslide-shenzhen-china.html">
            Before Shenzhen Landslide, Many Saw Warning Signs as Debris Swelled        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/business/index.html">Business Day &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004097686" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/23/business/dealbook/sued-over-old-debt-and-blocked-from-suing-back.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/22/business/22db-debtbuyers-web/22db-debtbuyers-web-thumbStandard-v2.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        Beware the Fine Print: Sued Over Old Debt, and Blocked From Suing Back        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004107565" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/23/business/daily-stock-market-activity.html">
            Midday Report: Wall St. Edges Up Along With Oil Prices        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004107491" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/23/business/economy/us-economy-gdp-q3-final.html">
            U.S. Economic Growth Was Tepid in Third Quarter        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column last-column">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/opinion/index.html">Opinion &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004043172" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/22/opinion/parents-stop-obsessing-over-concussions.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/22/opinion/22rothman/22rothman-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        Op-Ed Contributor: Parents, Stop Obsessing Over Concussions        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004106128" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/22/opinion/the-security-council-wakes-up-on-syria.html">
            Editorial: The Security Council Wakes Up on Syria        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004106086" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/22/opinion/the-2015-sidney-awards-part-2.html">
            David Brooks: The 2015 Sidney Awards, Part 2        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
            </div><!-- close split-3-layout -->

        
            <div class="split-3-layout layout theme-base">

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/national/index.html">U.S. &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004107628" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/23/us/affluenza-teenager-ethan-couch-mother-tonya-couch-missing-person-texas.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/22/us/23xp2-couch/23xp2-couch-thumbStandard-v2.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        Mother Named a Missing Person in Hunt for âAffluenzaâ Teenager        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004099493" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/23/us/us-muslims-begin-to-publicly-confront-questions-on-islam-and-violence.html">
            U.S. Muslims Begin to Publicly Confront Questions on Islam and Violence        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004105561" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/23/us/politics/hillary-clinton-ties-economic-strength-to-national-security-in-new-ad.html">
            The Ad Campaign: Hillary Clinton Ties Economic Strength to National Security in New Ad        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/technology/index.html">Technology &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004105976" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/22/science/spacex-rocket-landing.html">

        
        <h3 class="story-heading">
        SpaceX Successfully Lands Rocket After Launch of Satellites Into Orbit        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004105730" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/22/arts/music/for-dj-khaled-snapchat-is-a-major-key-to-success.html">
            For DJ Khaled, Snapchat Is a Major Key to Success        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004094632" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/17/technology/in-a-self-serve-world-start-ups-find-value-in-human-helpers.html">
            State of the Art: In a Self-Serve World, Start-Ups Find Value in Human Helpers        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column last-column">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/arts/index.html">Arts &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004078903" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/23/theater/the-actress-cynthia-erivo-rises-with-the-color-purple.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/23/arts/CYNTHIA/CYNTHIA-thumbStandard-v2.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        The Actress Cynthia Erivo Rises With âThe Color Purpleâ        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004096752" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/27/movies/about-that-bear-alejandro-g-inarritu-discusses-making-the-revenant.html">
            About That Bear: Alejandro G. IÃ±Ã¡rritu Discusses Making âThe Revenantâ        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004094551" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/22/arts/design/in-sanitation-and-salt-complex-in-tribeca-a-salutary-lesson-in-urban-responsibility.html">
            Criticâs Notebook: In Sanitation-and-Salt Complex Near TriBeCa, a Salutary Lesson in Urban Responsibility        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
            </div><!-- close split-3-layout -->

        
            <div class="split-3-layout layout theme-base">

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/politics/index.html">Politics &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004108047" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/politics/first-draft/2015/12/22/analysis-of-donald-trump-tax-plan-sees-a-boon-for-wealthy-and-trillions-in-debt/">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/22/us/22firstdraft-trumptax/22firstdraft-trumptax-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        First Draft: Analysis of Donald Trump Tax Plan Sees a Boon for Wealthy and Trillions in Debt        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004107591" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/politics/first-draft/2015/12/22/donald-trump-goes-vulgar-in-swipe-at-hillary-clinton/">
            First Draft: Donald Trump Goes Vulgar in Swipe at Hillary Clinton        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004105561" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/23/us/politics/hillary-clinton-ties-economic-strength-to-national-security-in-new-ad.html">
            The Ad Campaign: Hillary Clinton Ties Economic Strength to National Security in New Ad        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/fashion/index.html">Fashion & Style &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004096713" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/24/fashion/the-real-housewife-of-new-york.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/24/fashion/24ELLIS1/24ELLIS1-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        The Real Housewife of New York        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004096822" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/24/fashion/lipstick-mdmflow-florence-adepoju.html">
            Skin Deep: Hip-Hop Colors for Your Lips        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004092462" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/24/fashion/net-a-porters-unexpected-king-of-beauty.html">
            Net-a-Porterâs Unexpected King of Beauty        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column last-column">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/movies/index.html">Movies &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004096752" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/27/movies/about-that-bear-alejandro-g-inarritu-discusses-making-the-revenant.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/27/arts/27REVENANTJP3/27REVENANTJP3-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        About That Bear: Alejandro G. IÃ±Ã¡rritu Discusses Making âThe Revenantâ        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004102375" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/22/movies/the-liberation-of-lili-in-the-danish-girl.html">
            The Carpetbagger: The Liberation of Lili in âThe Danish Girlâ        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004102654" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/21/movies/star-wars-the-force-awakens-shatters-box-office-records.html">
            âStar Wars: The Force Awakensâ Shatters Box Office Records        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
            </div><!-- close split-3-layout -->

        
            <div class="split-3-layout layout theme-base">

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/nyregion/index.html">New York &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004107794" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/23/nyregion/new-york-to-offer-6-weeks-paid-parental-leave-to-nonunion-workers.html">

        
        <h3 class="story-heading">
        New York to Offer 6 Weeks Paid Parental Leave to Nonunion Workers        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004107669" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/23/nyregion/new-york-detective-killed-in-afghanistan-is-mourned-as-an-unassuming-hero.html">
            New York Detective Killed in Afghanistan Is Mourned as an âUnassuming Heroâ        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004107147" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/22/nyregion/new-york-detective-on-3rd-tour-of-duty-is-among-dead-in-afghanistan.html">
            New York Detective on 3rd Tour of Duty Is Among Dead in Afghanistan        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/sports/index.html">Sports &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004106023" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/23/sports/football/grant-of-nearly-16-million-for-cte-researchers.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/23/sports/23CONCUSSION3/23CONCUSSION3-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        Grant of Nearly $16 Million for C.T.E. Researchers        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004106975" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/22/sports/football/beckham-suspension-nfl-once-again-acts-to-cover-itself.html">
            Sports of The Times: With Beckham Suspension, N.F.L. Belatedly Acts to Cover Itself        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004105432" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/22/sports/odell-beckham-jr-suspended-one-game-ny-giants.html">
            Odell Beckham Jr. Suspended for One Game        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column last-column">

                        <section>
    <h2 class="section-heading">
        <a href="http://theater.nytimes.com/">Theater &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004078903" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/23/theater/the-actress-cynthia-erivo-rises-with-the-color-purple.html">

        
        <h3 class="story-heading">
        The Actress Cynthia Erivo Rises With âThe Color Purpleâ        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004105951" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/21/arts/black-hermione-harry-potter-theme.html">
            Casting a Black Hermione Granger Underscores a Key âHarry Potterâ Theme        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004097392" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/22/theater/in-a-wilder-christmas-darkness-laced-with-sentiment.html">
            Review: Darkness Laced With Sentiment in âA Wilder Christmasâ        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
            </div><!-- close split-3-layout -->

        
            <div class="split-3-layout layout theme-base">

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/section/science">Science &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004105976" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/22/science/spacex-rocket-landing.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/22/science/22rocket-hp/22rocket-hp-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        SpaceX Successfully Lands Rocket After Launch of Satellites Into Orbit        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004105639" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/22/science/domesticated-dogs-lag-in-reproduction.html">
            Observatory: Domesticated Dogs Lag in Reproduction        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004099169" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/22/science/after-poaching-deaths-elephants-rearrange-families.html">
            Observatory: After Poaching Deaths, Elephants Rearrange Families        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/section/obituaries">Obituaries &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004106903" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/22/arts/robert-kobayashi-artist-of-whimsy-dies-at-90.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/22/arts/22kobayashi-obit/22kobayashi-obit-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        Robert Kobayashi, Artist of Whimsy, Dies at 90        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004105418" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/22/us/rev-rick-curry-priest-who-considered-disability-a-blessing-dies-at-72.html">
            Rev. Rick Curry, 72, Dies; Used Stagecraft to Help Wounded and Disabled        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004104084" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/20/sports/hockey/dickie-moore-a-feisty-piece-of-a-canadiens-dynasty-dies-at-84.html">
            Dickie Moore, a Feisty Piece of a Canadiens Dynasty, Dies at 84        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column last-column">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/arts/television/index.html">Television &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004105940" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/22/business/media/weinstein-company-reaches-deal-to-produce-tv-shows.html">

        
        <h3 class="story-heading">
        Weinstein Company Reaches Deal to Produce TV Shows        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004105009" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/22/arts/television/homeland-season-5-finale-review.html">
            Homeland: âHomelandâ Recap, Season 5 Finale: The Last Illusion        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004105024" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/20/arts/television/affair-season-2-finale-review.html">
            The Affair: âThe Affairâ Season 2 Finale: Youâll Have to Choose        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
            </div><!-- close split-3-layout -->

        
            <div class="split-3-layout layout theme-base">

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/health/index.html">Health &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004104498" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/23/health/with-in-vitro-fertilization-persistence-pays-off-study-suggests.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/23/science/23IVF1/23IVF1-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        With In Vitro Fertilization, Persistence Pays Off, Study Suggests        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004107430" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://well.blogs.nytimes.com/2015/12/22/ask-well-can-you-reverse-fatty-liver/">
            Ask Well: Can You Reverse Fatty Liver?        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004106321" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://well.blogs.nytimes.com/2015/12/21/new-diagnostic-tools-for-prostate-cancer/">
            Well: New Diagnostic Tools for Prostate Cancer        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/section/travel">Travel &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004086173" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/27/travel/franz-kafka-prague.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/27/travel/27KAFKA8/27KAFKA8-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        Footsteps: On the Trail of Kafka in Prague        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000003899720" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/27/travel/elqui-valley-chile.html">
            Explorer: Finding a Warm Welcome in the Elqui Valley        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004072456" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/27/travel/backpacks-carry-on-luggage.html">
            In Transit: Backpacks: The Carry-On Bag of Choice        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column last-column">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/books/index.html">Books &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004102721" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/22/books/review-philip-sparrow-tells-all-paints-a-samuel-steward-portrait.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/22/arts/22BOOKSTEWARD/22BOOKSTEWARD-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        Books of The Times: Review: âPhilip Sparrow Tells Allâ Paints a Samuel Steward Portrait        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004097694" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/27/books/review/whats-your-favorite-poem.html">
            Poetry Round Table: Whatâs Your Favorite Poem?        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004099786" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/21/books/review-the-point-of-vanishing-howard-axelrods-memoir-about-solitude.html">
            Books of The Times: Review: âThe Point of Vanishing,â Howard Axelrodâs Memoir About Solitude        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
            </div><!-- close split-3-layout -->

        
            <div class="split-3-layout layout theme-base">

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/education/index.html">Education &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004088620" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/22/us/nyu-presidents-penthouse-gets-a-1-1-million-face-lift.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/18/us/00residence-web01/00residence-web01-thumbStandard-v2.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        N.Y.U. Presidentâs Penthouse Gets a Face-Lift Worth $1.1 Million (or More)        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004094462" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/20/upshot/three-reasons-for-those-hefty-college-tuition-bills.html">
            Economic View: Three Reasons for Those Hefty College Tuition Bills        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000003991092" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/11/01/education/edlife/everything-you-need-to-know-about-the-new-sat.html">
            Everything You Need to Know About the New SAT        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/dining/index.html">Food &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004098882" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/23/dining/seafood-restaurants-sustainable-fish.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/23/dining/23FISH-slide-DM9T/23FISH-slide-DM9T-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        Seafood Restaurants Cast a Wider Net for Sustainable Fish        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004096824" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/23/dining/tuscan-bean-soup-recipe.html">
            Recipes for Health: Tuscan Beans and Farro in a Hearty Soup        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000003801345" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/23/dining/david-lebovitz-mortar-and-pestle.html">
            Close at Hand: For David Lebovitz, a Mortar and Pestle Trumps Any Gadget        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column last-column">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/opinion/index.html#sundayreview">Sunday Review &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004101395" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/20/opinion/campaign-stops/political-party-meltdown.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/20/opinion/sunday/20bakersub/20bakersub-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        Campaign Stops: Political Party Meltdown        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004100267" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/20/opinion/sunday/the-reproductive-rights-rollback-of-2015.html">
            Editorial: The Reproductive Rights Rollback of 2015        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004098045" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/20/opinion/sunday/being-smart-about-your-childs-brain.html">
            Frank Bruni: Being Smart About Your Childâs Brain        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
            </div><!-- close split-3-layout -->

        
            <div class="split-3-layout layout theme-base">

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/realestate/index.html">Real Estate &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004099781" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/20/realestate/fireplaces-new-york.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/20/realestate/20COV1/20COV1-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        In New York, the Fireplace Flickers        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004097485" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/20/realestate/trash-never-looked-so-stylish.html">
            Trash Never Looked So Stylish        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004095090" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/20/realestate/this-time-make-it-brooklyn.html">
            The Hunt: This Time, Make It Brooklyn        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/upshot/">The Upshot &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004101858" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/22/upshot/how-marco-rubio-could-lose-all-the-key-early-states-and-still-win.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/20/upshot/20up-rubio/20up-rubio-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        Road to 2016: How Marco Rubio Could Lose All the Key Early States and Still Win        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004106498" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/23/upshot/coaches-are-so-close-but-cant-see-it-just-run-the-ball.html">
            T.M.Q. â Tuesday Morning Quarterback: Coaches Are So Close but Canât See It: Just Run the Ball        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004081911" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/22/upshot/alcohols-effect-on-health-what-the-science-says.html">
            The New Health Care: Drink to Your Health (in Moderation), the Science Says        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column last-column">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/section/magazine">Magazine &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004105887" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/21/magazine/the-great-british-baking-show-is-the-key-to-understanding-todays-britain.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/21/magazine/21mag-bakeoff-1/21mag-bakeoff-1-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        Notebook: âThe Great British Baking Showâ Is the Key to Understanding Todayâs Britain        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004089720" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/20/magazine/the-identity-thief.html">
            Lives: The Identity Thief        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004089715" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/20/magazine/the-12-615-issue.html">
            The Thread: The 12.6.15 Issue        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
            </div><!-- close split-3-layout -->

        
            <div class="split-3-layout layout theme-base">

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/pages/automobiles/index.html">Automobiles &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004088699" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/20/nyregion/midtown-shop-the-red-caboose-leaves-its-competition-and-its-trains-in-the-dust.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/20/nyregion/20JOINTSS-slide-9ELP/20JOINTSS-slide-9ELP-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        Neighborhood Joint: At a Midtown Shop, Trains, Planes, Buses. And More Trains.        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004099690" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/19/your-money/how-much-car-do-you-buy-to-keep-your-teenager-safe.html">
            Your Money: How Much Car Do You Buy to Keep Your Teenager Safe?        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004097541" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/18/automobiles/autoreviews/the-new-audi-tt-still-a-fun-dash-down-the-road.html">
            Driven: Video Review: The New Audi TT Still a Fun Dash Down the Road        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column ">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/section/t-magazine">T Magazine &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004100152" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/22/t-magazine/fashion/gucci-westman-makeup-tips-new-years-eve.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/22/t-magazine/22tmag-gucci1/22tmag-gucci1-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        On Beauty: Glowing (but Not Glittery) Skin to Ring in the New Year        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004080928" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/22/t-magazine/quotes-t-rihanna-kanye-cate-blanchett.html">
            The 12 Best Things Anyone Told T in 2015        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004100362" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/21/t-magazine/fashion/zddz-london-dasha-selyanova-profile.html">
            On the Verge: A Fashion Designer Finds Inspiration in Her Troubled Past        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
                    <div class="column last-column">

                        <section>
    <h2 class="section-heading">
        <a href="http://www.nytimes.com/times-insider/">Times Insider &raquo;</a>
    </h2>
    <ul>
                    <li>
            <article class="story theme-summary" data-story-id="100000004098860" data-rank="0" data-collection-renderstyle="HpHedThumbWell">

    <a class="story-link" href="http://www.nytimes.com/2015/12/18/insider/podcast-a-gop-debate-wrap-up.html">

                    <div class="thumb">
                <img src="http://static01.nyt.com/images/2015/12/16/us/16firstdraftnl-debate/16firstdraftnl-debate-thumbStandard.jpg" alt="" />
            </div>
        
        <h3 class="story-heading">
        Insider Podcasts: Podcast: A G.O.P. Debate Wrap-Up        </h3>
    </a>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004094962" data-rank="1" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/17/insider/1920-why-so-hard-on-harding.html">
            Looking Back: 1920 | Why So Hard on Harding?        </a>
    </h2>
</article>
            </li>
                    <li>
            <article class="story" data-story-id="100000004099138" data-rank="2" data-collection-renderstyle="HpHedThumbWell">
    <h2 class="story-heading">
        <a href="http://www.nytimes.com/2015/12/17/insider/events/panel-unpacking-the-2016-presidential-election.html">
            Save the Date: Panel: Unpacking the 2016 Presidential Election        </a>
    </h2>
</article>
            </li>
            </ul>
</section>

                    </div> <!-- close column -->

                                
            </div><!-- close split-3-layout -->

            </div>
</section><!-- close well section -->

    </div><!-- close ab-column -->

    <div class="c-column column">

        
                    <section class="real-estate">
                <div class="layout split-layout theme-base">
                    <div class="column">
                        <div class="region real-estate-left-region">

                            <div class="collection">
                <h2 class="section-heading">
            <a href="http://www.nytimes.com/pages/realestate/index.html">Real Estate &raquo;</a>
        </h2>
        <article class="story theme-summary" id="topnews-100000004099448" data-story-id="100000004099448" data-rank="0" data-collection-renderstyle="HpSectionSumSmallMedia">
    
    
    <h2 class="story-heading"><a href="http://www.nytimes.com/2015/12/20/realestate/east-village-condos-in-a-synagogue.html">East Village Condos in a Synagogue</a></h2>

            <p class="byline">By AILEEN JACOBSON </p>
    
            <div class="thumb">
            <a href="http://www.nytimes.com/2015/12/20/realestate/east-village-condos-in-a-synagogue.html"><img src="http://static01.nyt.com/images/2015/12/20/realestate/20SYNAGOGUE1/20SYNAGOGUE1-thumbStandard-v2.jpg" alt=""></a>
        </div>
    
    <p class="summary">
        Three condominium apartments have been carved out of a historic synagogue in the East Village.    </p>

    
    </article>

</div>
<div class="collection">
            <ul class="theme-module-headlines">
<li><article class="story" data-collection-renderstyle="HpHeadline"><h2 class="story-heading"><a href="http://www.nytimes.com/real-estate/find-a-home">Search for Homes for Sale or Rent</a></h2></article></li>

<li><article class="story" data-collection-renderstyle="HpHeadline"><h2 class="story-heading"><a href="http://realestateads.nytimes.com/">Sell Your Home</a></h2></article></li></ul>

</div>

                        </div><!-- close real-estate-left-region -->
                    </div>
                    <div class="column">
                        <div class="region real-estate-right-region">

                            <div class="collection">
            <div id="HPmodule-RE2-alternate-content"><div></div>
<div class="collection">
                <h3 class="kicker collection-kicker">&nbsp;</h3>
        <article class="story theme-summary" id="topnews-100000004095462" data-story-id="100000004095462" data-rank="0" data-collection-renderstyle="HpSumSmallMedia">
    
            <h3 class="kicker">What I Love </h3>
    
    <h2 class="story-heading"><a href="http://www.nytimes.com/2015/12/20/realestate/restaurateur-mark-barak.html">RestaurateurÂ Mark Barakâs Home as an Elegant Scrapbook</a></h2>

            <p class="byline">By DAN SHAW </p>
    
            <div class="thumb">
            <a href="http://www.nytimes.com/2015/12/20/realestate/restaurateur-mark-barak.html"><img src="http://static01.nyt.com/images/2015/12/20/realestate/20WHATILOVE-MARK-BARAK-slide-L17S/20WHATILOVE-MARK-BARAK-slide-L17S-thumbStandard.jpg" alt=""></a>
        </div>
    
    <p class="summary">
        The owner of La Pecora Bianca lives in a one-bedroom in a Greek Revival townhouse within walking distance of his Italian farmhouse restaurant.    </p>

    
        <ul class="refer theme-news-headlines">
            <li>
            <article class="story" id="topnews-100000004095462">
                <h2 class="refer-heading"><a href="http://www.nytimes.com/column/what-i-love">More Articles in the Series</a></h2>
            </article>
        </li>
        </ul>
</article>

</div>
<div class="collection">
            </div></div></div>

                            <div id="HPmodule-RE2" class="ad hpmodule-re2-ad nocontent robots-nocontent"></div>
                        </div><!-- close real-estate-right-region -->
                    </div>
                </div>
            </section>
        
        
        <section id="recommendations" class="recommendations">
    <div class="tabs-container">
        <ul class="tabs">
            <li data-type="most-emailed"><a href="http://www.nytimes.com/gst/mostemailed.html">Most Emailed</a></li><li data-type="most-viewed"><a href="http://www.nytimes.com/gst/mostpopular.html">Most Viewed</a></li><li data-type="recommended"><a href="http://www.nytimes.com/recommendations">Recommended for you</a></li>
        </ul>
    </div>
    <div class="tab-content most-emailed">
        <div class="loader"></div>
    </div>
    <div class="tab-content most-viewed">
        <div class="loader"></div>
    </div>
    <div class="tab-content recommended">
        <div class="loader"></div>
    </div><!-- end tabs-container -->
    <div id="recommendations-module-loader" class="loader-container">
        <div class="loader loader-t-logo-32x32-ecedeb-ffffff"><span class="visually-hidden">Loading...</span></div>
    </div>
</section>

        <div id="Box1" class="ad box1-ad nocontent robots-nocontent"></div>
        <div id="HPPromo" class="ad hppromo-ad nocontent robots-nocontent"></div>

                    <div class="tile-ads nocontent robots-nocontent">
    <div id="tile-ad-1" class="ad tile-ad tile-ad-1"></div>
    <div id="tile-ad-2" class="ad tile-ad tile-ad-2"></div>
</div>        
        <div id="HPBottom1" class="ad hpbottom1-ad nocontent robots-nocontent"></div>

    </div><!-- close c-column -->

</div><!-- close span-ab-layout -->

<div id="HPSponLink" class="ad hpsponlink-ad nocontent robots-nocontent"></div>
<div id="Bottom8" class="ad bottom8-ad nocontent robots-nocontent"></div>
<div id="Bottom9" class="ad bottom9-ad nocontent robots-nocontent"></div>
                    <div class="search-overlay"></div>
            </main><!-- close main -->
            <section id="site-index" class="site-index">
    <header class="section-header">
        <p class="user-action"><a href="http://www.nytimes.com/">Go to Home Page &raquo;</a></p>
        <h2 class="section-heading">
            <span class="visually-hidden">Site Index</span>
            <a id="site-index-branding-link" href="http://www.nytimes.com/">
                <span class="visually-hidden">The New York Times</span>
            </a>
        </h2>
        <script>window.magnum.writeLogo('small', 'http://a1.nyt.com/assets/homepage/20151216-175935/images/foundation/logos/', '', '', 'standard', 'site-index-branding-link', '');</script>
    </header>

    <nav id="site-index-navigation" class="site-index-navigation" role="navigation">
        <h2 class="visually-hidden">Site Index Navigation</h2>
        <div class="split-6-layout layout">

                                                                                    
                    <div class="column">
                        <h3 class="menu-heading">News</h3>
                        <ul class="menu">

                                                                                                                                                                                                                                                
                                    <li>
                                        <a href="http://www.nytimes.com/pages/world/index.html">World</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/national/index.html">U.S.</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/politics/index.html">Politics</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/nyregion/index.html">N.Y.</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/business/index.html">Business</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/technology/index.html">Tech</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/section/science">Science</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/health/index.html">Health</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/sports/index.html">Sports</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/education/index.html">Education</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/obituaries/index.html">Obituaries</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/todayspaper/index.html">Today's Paper</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/corrections/index.html">Corrections</a>
                                    </li>

                                                            
                        </ul>
                    </div><!-- close column -->

                                            
                    <div class="column">
                        <h3 class="menu-heading">Opinion</h3>
                        <ul class="menu">

                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/opinion/index.html">Today's Opinion</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/opinion/index.html#columnists">Op-Ed Columnists</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/opinion/index.html#editorials">Editorials</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/opinion/index.html#contributing">Contributing Writers</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/opinion/index.html#op-ed">Op-Ed Contributors</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/opinion/index.html#opinionator">Opinionator</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/opinion/index.html#letters">Letters</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/opinion/index.html#sundayreview">Sunday Review</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/opinion/index.html#takingNote">Taking Note</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/roomfordebate">Room for Debate</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://topics.nytimes.com/top/opinion/thepubliceditor/index.html">Public Editor</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/video/opinion">Video: Opinion</a>
                                    </li>

                                                            
                        </ul>
                    </div><!-- close column -->

                                            
                    <div class="column">
                        <h3 class="menu-heading">Arts</h3>
                        <ul class="menu">

                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/arts/index.html">Today's Arts</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/arts/design/index.html">Art & Design</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://artsbeat.blogs.nytimes.com/">ArtsBeat</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/books/index.html">Books</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/arts/dance/index.html">Dance</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/movies/index.html">Movies</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/arts/music/index.html">Music</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/events/">N.Y.C. Events Guide</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/arts/television/index.html">Television</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/theater/index.html">Theater</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/arts/video-games/index.html">Video Games</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/video/arts">Video: Arts</a>
                                    </li>

                                                            
                        </ul>
                    </div><!-- close column -->

                                            
                    <div class="column">
                        <h3 class="menu-heading">Living</h3>
                        <ul class="menu">

                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/automobiles/index.html">Automobiles</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/crosswords/">Crossword</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/dining/index.html">Food</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/education/index.html">Education</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/fashion/index.html">Fashion & Style</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/health/index.html">Health</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/section/jobs">Jobs</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/magazine/index.html">Magazine</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/events/">N.Y.C. Events Guide</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/realestate/index.html">Real Estate</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/section/t-magazine">T Magazine</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/travel/index.html">Travel</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/fashion/weddings/index.html">Weddings & Celebrations</a>
                                    </li>

                                                            
                        </ul>
                    </div><!-- close column -->

                                            
                    <div class="column">
                        <h3 class="menu-heading">Listings & More</h3>
                        <ul class="menu">

                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/ref/classifieds/">Classifieds</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/marketing/tools-and-services/">Tools & Services</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/topics/">Times Topics</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://topics.nytimes.com/top/opinion/thepubliceditor/index.html">Public Editor</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/events/">N.Y.C. Events Guide</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://tvlistings.nytimes.com/tvlistings/ZCGrid.do?aid=nyt">TV Listings</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/interactive/blogs/directory.html">Blogs</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/pages/multimedia/index.html">Multimedia</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://lens.blogs.nytimes.com/">Photography</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/video">Video</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="https://www.nytimes.com/store/?&t=qry542&utm_source=nytimes&utm_medium=HPB&utm_content=hp_browsetree&utm_campaign=NYT-HP&module=SectionsNav&action=click&region=TopBar&version=BrowseTree&contentCollection=NYT%20Store&contentPlacement=2&pgtype=Homepage">NYT Store</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/times-journeys/?utm_source=nytimes&utm_medium=HPLink&utm_content=hp_browsetree&utm_campaign=NYT-HP">Times Journeys</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/seeallnav">Subscribe</a>
                                    </li>

                                                                                            
                                    <li>
                                        <a href="http://www.nytimes.com/membercenter">Manage My Account</a>
                                    </li>

                                                            
                        </ul>
                    </div><!-- close column -->

                            
            <div class="column last-column">
                
<h3 class="menu-heading">Subscribe</h3>

<ul class="menu primary-menu">
    <li class="menu-label">Subscribe</li>
    <li class="times-premier">
        <i class="icon sprite-icon"></i>
        <a href="http://www.nytimes.com/tpnav">Times Insider</a>
    </li>

    <li class="home-delivery">
        <i class="icon sprite-icon"></i>
                    <a href="http://www.nytimes.com/hdleftnav">Home Delivery</a>
            </li>
    <li class="digital-subscriptions">
        <i class="icon sprite-icon"></i>
                    <a href="http://www.nytimes.com/digitalleftnav">Digital Subscriptions</a>
            </li>
    <li class="nyt-opinion">
        <i class="icon sprite-icon"></i>
        <a href="http://www.nytimes.com/opinionindex">NYT Opinion</a>
    </li>
    <li class="nyt-crossword last-item">
        <i class="icon sprite-icon"></i>
        <a id="nyt-crossword" href="http://www.nytimes.com/crosswords/index.html">Crossword</a>
    </li>

</ul>

<ul class="menu secondary-menu">

    <li>
        <a href="http://www.nytimes.com/marketing/newsletters">Email Newsletters</a>
    </li>
    <li>
        <a href="https://myaccount.nytimes.com/mem/tnt.html">Alerts</a>
    </li>
    <li>
                    <a href="http://www.nytimes.com/giftleftnav">Gift Subscriptions</a>
            </li>
    <li>
                    <a href="http://www.nytimes.com/corporateleftnav">Corporate Subscriptions</a>
            </li>
    <li>
                    <a href="http://www.nytimes.com/educationleftnav">Education Rate</a>
            </li>

</ul>
<ul class="menu secondary-menu">
    <li>
        <a href="http://www.nytimes.com/services/mobile/index.html">Mobile Applications</a>
    </li>
    <li>
                    <a href="http://eedition.nytimes.com/cgi-bin/signup.cgi?cc=37FYY">Replica Edition</a>
            </li>
                <li>
            <a href="http://subscribe.inyt.com">International New York Times</a>
        </li>
    
</ul>

            </div><!-- close column -->

        </div><!-- close split-6-layout -->

    </nav><!-- close nav -->

</section><!-- close site-index -->

            <footer id="page-footer" class="page-footer" role="contentinfo">
    <nav>
        <h2 class="visually-hidden">Site Information Navigation</h2>
         <ul>
             <li>
                <a href="http://www.nytimes.com/content/help/rights/copyright/copyright-notice.html" itemprop="copyrightNotice">
                    &copy; <span itemprop="copyrightYear">2015</span><span itemprop="copyrightHolder provider sourceOrganization" itemscope itemtype="http://schema.org/Organization" itemid="http://www.nytimes.com"><span itemprop="name"> The New York Times Company</span><meta itemprop="tickerSymbol" content="NYSE NYT"/></span>
                </a>
            </li>
            <li class="wide-viewport-item"><a href="http://www.nytimes.com/ref/membercenter/help/infoservdirectory.html">Contact Us</a></li>
            <li class="wide-viewport-item"><a href="http://www.nytco.com/careers">Work With Us</a></li>
            <li class="wide-viewport-item"><a href="http://www.nytimes.whsites.net/mediakit">Advertise</a></li>
            <li class="wide-viewport-item"><a href="http://www.nytimes.com/content/help/rights/privacy/policy/privacy-policy.html#pp">Your Ad Choices</a></li>
            <li><a href="http://www.nytimes.com/privacy">Privacy</a></li>
            <li><a href="http://www.nytimes.com/ref/membercenter/help/agree.html" itemprop="usageTerms">Terms of Service</a></li>
            <li class="wide-viewport-item last-item"><a href="http://www.nytimes.com/content/help/rights/sale/terms-of-sale.html">Terms of Sale</a></li>
         </ul>
    </nav>
    <nav class="last-nav">
        <h2 class="visually-hidden">Site Information Navigation</h2>
        <ul>
            <li><a href="http://spiderbites.nytimes.com">Site Map</a></li>
            <li><a href="http://www.nytimes.com/membercenter/sitehelp.html">Help</a></li>
            <li><a href="https://myaccount.nytimes.com/membercenter/feedback.html">Site Feedback</a></li>
            <li class="wide-viewport-item last-item"><a href="http://www.nytimes.com/subscriptions/Multiproduct/lp5558.html?campaignId=37WXW">Subscriptions</a></li>
        </ul>
    </nav>

    <div id="mobile-banner" class="mobile-banner hidden">
        <a class="banner-message" href="http://mobile.nytimes.com/">View Mobile Version</a>
    </div>

    <div id="dfp-perf-test" class="ad hidden"></div>
</footer>
        </div><!-- close page -->
    </div><!-- close shell -->
    <script>
require(['foundation/main'], function () {
    require(['homepage/main']);
    require(['jquery/nyt', 'foundation/views/page-manager'], function ($, pageManager) {
        if (window.location.search.indexOf('disable_tagx') > 0) {
            return;
        }
        $(document).ready(function () {
            require(['http://static01.nyt.com/bi/js/tagx/tagx.js'], function () {
                pageManager.trackingFireEventQueue();
            });
        });
    });
});
</script>

    <div id="Inv1" class="ad inv1-ad hidden"></div>
<div id="Inv2" class="ad inv2-ad hidden"></div>
<div id="Inv3" class="ad inv3-ad hidden"></div>
<div id="ab1" class="ad ab1-ad hidden"></div>
<div id="ab2" class="ad ab2-ad hidden"></div>
<div id="ab3" class="ad ab3-ad hidden"></div>
<div id="prop1" class="ad prop1-ad hidden"></div>
<div id="prop2" class="ad prop2-ad hidden"></div>
<div id="Anchor" class="ad anchor-ad hidden"></div>
<div id="ADX_CLIENTSIDE" class="ad adx-clientside-ad hidden"></div>
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"b5bcf2eba4","applicationID":"4491938","transactionName":"YwFXZhRYVhAEVUZcX1pLYEAPFlkTFRhCXUA=","queueTime":0,"applicationTime":463,"ttGuid":"","agentToken":"","userAttributes":"","errorBeacon":"bam.nr-data.net","agent":"js-agent.newrelic.com\/nr-686.min.js"}</script></body>
</html>
