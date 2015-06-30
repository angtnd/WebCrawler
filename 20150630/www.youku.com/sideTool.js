/**
  * ä¾§è¾¹æ 
  * @author fuwenqing@youku.com
  *
  */
(function(){
	
	UC_DOMAIN = window.UC_DOMAIN || "i.youku.com";
	
	var SideTool = {
		tool: 'sideTool',
		token: '',
		curpanel: '',
		loginUID: 0,
		tmpUID: 0,
		isfirstcome: true,
		shoppingisshow: true,
		gotopisshow: true,

		classOpen: 'yk-toolbar-group-open',
		classHover: 'yk-toolbar-group-hover',
		$curOpenGroup:null,
		scrollBarWidth:null,

		modleicon:{
        	eshop: {modlename:'eshop',modleitemid:'iconitemshopping',modlegroupid:'icongroupshopping',callback:'SideTool.showShoppingList',isshow:true},
        	gotop: {modlename:'gotop',modleitemid:'iconitemgotop',modlegroupid:'icongroupgotop',callback:'',isshow:true},
        	lightoff: {modlename:'lightoff',modleitemid:'iconitemlighton',modlegroupid:'lightoff',callback:'',isshow:true},
        	feedback: {modlename:'feedback',modleitemid:'iconitemfeedback',modlegroupid:'icongroupfeedback',callback:'',isshow:true}
		},
		panel: {
			shopping:		'panelshopping',
			shoppinginfo:   'panelshoppinginfo',
			shoppinglist:   'panelshoppinglist'
		},
		toolbar:{
			service:         'toolbarservice'
        },
		light:{
			isshow:			false,
			lstatus:		'on',
			mask:			'playshow_mask',
			dark:			'sideToolDark',
			on:				'lighton',
			cookie:			{ name: 'light', value: { on:  'on', off: 'off' }, expires: 3600 }
		},
		tips:{
			eshop: {showmodle:'icongroupshopping',modleotherid:'cart',text:'',cookietime:365,isshow:false}
		},

		logoutshopping: '<div class="yk-toolbar-subscript-nologin"><span>ç»å½åï¼è´­ç©è½¦ä¸­çååå°æ°¸ä¹ä¿å­~</span><a class="yk-toolbar-link-block yk-toolbar-link-block-blue" href="javascript:;" onclick="login({type:\'toolbar\',callBack:\'SideTool.showModleEvent\'},SideTool.modleicon.eshop);return false;">ç«å³ç»å½</a></div>',
		shoppingfooter: '<div class="yk-toolbar-mod-ft"><img src="http://static.youku.com/index/img/toolbar/scroll_cover_ft.png" class="yk-toolbar-scover yk-toolbar-scover-ft"><div class="yk-toolbar-mod-links "><a href="http://'+UC_DOMAIN+'/i/">æ¥çå¨é¨</a></div></div>',
		noshoppingfooter: '<div class="yk-toolbar-mod-ft"><img src="http://static.youku.com/index/img/toolbar/scroll_cover_ft.png" class="yk-toolbar-scover yk-toolbar-scover-ft"><div class="yk-toolbar-mod-links "><a href="http://'+UC_DOMAIN+'/i/">æ¥çå¨é¨</a></div></div>',
		shoppingheader: '<div class="yk-toolbar-mod-hd"><img src="http://static.youku.com/index/img/toolbar/scroll_cover_hd.png" class="yk-toolbar-scover yk-toolbar-scover-hd"><div class="yk-toolbar-mod-title"><a class="mod-title-link mod-title-link-extend"><span class="yk-toolbar-group-item-icon yk-toolbar-group-item-icon-extend icon-cart-hd"></span><span class="yk-toolbar-mod-title-txt">è´­ç©è½¦</span></a></div><!--<span class="hd-cart-num" id="goodsnum"></span>--><a id="newhot" onclick="SideTool._eshopStatisticsClothCoad(\'click\',\'cart_link \',\'\',\'\',\'\',\'\',\''+encodeURIComponent('http://wanhuo.tudou.com/')+'\',\'\');" href="http://wanhuo.tudou.com/" target="_blank" class="hd-cart-activity"><i class="yk-toolbar-ico icon-flame"></i>æ°åç­å<span class="yk-toolbar-notice-aim" id="iconnewhot"></span></a></div>',
		shoppingnull: '<div class="yk-toolbar-mod-bd"><div class="yk-toolbar-cart-11ad"><a onclick="SideTool._eshopStatisticsClothCoad(\'click\',\'cart_banner \',\'\',\'\',\'\',\'\',\''+encodeURIComponent('http://c.youku.com/bkbm/index')+'\',\'\');" href="http://c.youku.com/bkbm/index.html" target="_blank"></a></div><div class="yk-toolbar-subscript-nologin"><span>æ¨è¿æ²¡æéè´­ååå¢~</span></div><img class="cart-tips" src="http://static.youku.com/index/img/toolbar/toolbar_tips_04.png"></div>',

		loading: '<div class="yk-toolbar-loading-wrap" style="display:;"><div class="yk-toolbar-loading"><span class="ico__loading_64"></span></div></div>',
		
		init:function(){

			var _this = this;
			var isHide = _this.isHideSideTool();
			if(isHide){
				return;	
			}
			_this.initSideToolFrame();
			setTimeout(function(){
				_this.initSideTool();
				_this.bind();
			},100);
		},
		isHideSideTool: function(){
			if($(this.light.mask) && $(this.light.dark)){
				this.light.isshow = true;	
			}
			if(typeof(window.isshoweshop) != "undefined" && window.isshoweshop == "false"){
				this.shoppingisshow = false; //é¦é¡µå±è½è´­ç©è½¦
			}
			if(typeof(window.isshowtop) != "undefined" && window.isshowtop == "false"){
				this.gotopisshow = false;
				window.lottery_open_sidetool = false; //è®¢éé¡µä¸éè¦è¿è¥ä½ååå°é¡¶é¨å¾æ 
			}
			if(typeof(window.yk_toolbar_close) != "undefined"){
				return true;
			}
			var ua = navigator.userAgent.toLowerCase();
			if(ua.match(/iphone|ipod|itouch|android|windows phone|ipad/i) && $('padsideTool')){
				return true;
			}
		},
		initSideToolFrame: function(){
            var sideTool = document.createElement('div');
            sideTool.setAttribute("id","sideTool");
            sideTool.className = "right-sideBar";
            	
            var sideToolService = document.createElement('ul');
			sideToolService.className = "yk-toolbar-service js-toolbar";
            sideToolService.setAttribute("id","toolbarservice");
			sideToolService.setAttribute("data-stat-role","ck");
			
			//æ´»å¨å¤§å¾å±ç¤º
			if(window.lottery_open_sidetool){
				var sideToollotteryBig = document.createElement('li');
				sideToollotteryBig.className = "bigImg yk-toolbar-draw js-draw";
				sideToollotteryBig.style.cssText = "display:none;";
				sideToollotteryBig.setAttribute('id' , 'lotteryToolbarBig');
				sideToolService.appendChild(sideToollotteryBig);
				sideTool.appendChild(sideToolService);
			}
			
			//æ´»å¨å¥å£(å°å¾)
			if(window.lottery_open_sidetool){
				var sideToollottery = document.createElement('li');
				sideToollottery.className = "yk-toolbar-draw js-draw";
				sideToollottery.style.cssText = "display:none;";
				sideToollottery.setAttribute('id' , 'lotteryToolbar');
				sideToolService.appendChild(sideToollottery);
				sideTool.appendChild(sideToolService);
			}
			
			//è´­ç©è½¦
			if(this.shoppingisshow){
				var sideToolshopping = document.createElement('li');
				sideToolshopping.className = "yk-toolbar-group";
				sideToolshopping.innerHTML = '<a class="toolbar icon-1" id="icongroupshopping"><div class="yk-toolbar-group-item yk-toolbar-group-item-top js-dest-cart" id="iconitemshopping" data-stat-role="ck"><div class="yk-toolbar-notice-aim yk-toolbar-notice-aim-extend" id="newnoticeiconshopping" style="display:none"></div></div><div class="yk-toolbar-group-panel"  id="panelshoppinginfo"><div class="right-side-arrow"></div><div class="yk-toolbar-mod" id="panelshoppinglist"></div></div><iframe class="mask" scrolling="0" frameborder="0" id="shoppingmask"></iframe></a>';
				sideToolService.appendChild(sideToolshopping);
				sideTool.appendChild(sideToolService);
			}
			
			//ç¹å»åå°é¡¶é¨æé®
			if(this.gotopisshow){
				var sideToolgotop = document.createElement('li');
				sideToolgotop.className = "yk-toolbar-group";
				sideToolgotop.setAttribute('id' , 'icongroupgotop');
				sideToolgotop.style.display = 'none';
				sideToolgotop.innerHTML = '<a class="toolbar icon-2"><div class="yk-toolbar-group-item js-dest-goTop" data-stat-role="ck" id="iconitemgotop"></div></a>';
				sideToolService.appendChild(sideToolgotop);
				sideTool.appendChild(sideToolService);
			}
			//å¼ç¯å³ç¯
			if(this.light.isshow == true){
				var sideToollighton = document.createElement('li');
				sideToollighton.className = "yk-toolbar-group";
	            sideToollighton.setAttribute('id' , 'lightoff');
				sideToollighton.innerHTML = '<a class="toolbar icon-4"><div class="yk-toolbar-group-item js-dest-lightOn" id="iconitemlighton" data-stat-role="ck" title="å³ç¯"></div></a>';
				sideToolService.appendChild(sideToollighton);
				sideTool.appendChild(sideToolService);
			}
			//åé¦æé®
			var sideToolfeedback = document.createElement('li');
			sideToolfeedback.className = "yk-toolbar-group";
			sideToolfeedback.setAttribute('id' , 'icongroupfeedback');
			sideToolfeedback.innerHTML = '<a class="toolbar icon-3" href="http://www.youku.com/service/feed/subtype_16/" target="_blank" title="åé¦"><div class="yk-toolbar-group-item js-dest-feedback" id="iconitemfeedback" data-stat-role="ck"></div></a>';
			sideToolService.appendChild(sideToolfeedback);
			sideTool.appendChild(sideToolService);

			document.body.appendChild(sideTool