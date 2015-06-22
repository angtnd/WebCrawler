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

			document.body.appendChild(sideTool);
			
			this.sideT = document.getElementById(this.tool);
			if(!this.sideT){
				return false;
			}else{
				this.sideT.style.display='block';
			}
			
        },
		bind: function(){
			var _this = this;

			//è´­ç©è½¦
			_this.showModleEventBind(_this.modleicon.eshop);
			
			//ç¹å»åå°é¡¶é¨æé®
			if($(_this.modleicon.gotop.modleitemid)){
				_this.showModleEventBind(_this.modleicon.gotop);
				
				this.sideToolGoTop();
				this._addEvent(window,'scroll',function(){
					_this.sideToolGoTop();
				});
			}

			//å¼ç¯å³ç¯
			if(_this.light.isshow == true){
				_this.showModleEventBind(_this.modleicon.lightoff);
				
				var lightOff = $(_this.modleicon.lightoff.modleitemid);
				var lightOn = $(_this.light.on);
				
				if(lightOff){
					lightOff.onclick = function(){
						_this.curpanel = '';
						if(Light) Light.off();
					};
				}
				if(lightOn){
					lightOn.onclick = function(){
						if(Light) Light.on();
					};  
				}  
				var stat = window.location.href.indexOf("_l_off");
				if(stat !== -1){ 
					if(Light) Light.off(); 
				}
			}
			
			//åé¦
			_this.showModleEventBind(_this.modleicon.feedback);
			
			//çªå£ç¹å»å³é­å³ä¾§å·¥å·æ æµ®å±
			if(this.sideT){
				this.sideT.onclick = function(event){
					var e =  event || window.event;
					if(e.stopPropagation) { 
						e.stopPropagation(); 
					}else{ 
						e.cancelBubble = true; 
					}
				}
			}
			if($('qheader_userlog')){
				$('qheader_userlog').onclick = function(event){
					var e =  event || window.event;
					if(e.stopPropagation) { 
						e.stopPropagation(); 
					}else{ 
						e.cancelBubble = true; 
					}
				}
			}
			_this._addEvent(document,'click',function(){
				if($(_this.modleicon.eshop.modlegroupid) && $(_this.modleicon.eshop.modlegroupid).className.indexOf(_this.classOpen) != -1){
					_this.showModleEvent(SideTool.modleicon.eshop , 2);
				}
				_this.curpanel = '';
			});
			
			//æ´»å¨
			_this.lottery();
			
			//é£å¨ææ
			_this.flyInit();
			
		},
		
		showModleEventBind: function(modleobj){
			if(!modleobj.modlename || !modleobj.modleitemid || !modleobj.modlegroupid || !modleobj.isshow){
				return false;
			}
			var modlename = modleobj.modlename;
			var modleitemid = modleobj.modleitemid;
			var modlegroupid = modleobj.modlegroupid;
			var callback = '';
			if(modleobj.callback){
				callback = eval(modleobj.callback);
			}
			if($(modleitemid)){
				SideTool._addEvent($(modleitemid), 'mouseenter', function(){ 
					if($(modlegroupid).className.indexOf(SideTool.classOpen) == -1){
						SideTool._addHover($(modlegroupid) , SideTool.classHover);
					}
				});
				SideTool._addEvent($(modleitemid), 'mouseleave', function(){
					SideTool._removeHover($(modlegroupid) , SideTool.classHover);
				});
				
				if(modlename != 'gotop' && modlename != 'lightoff' && modlename != 'feedback'){
					$(modleitemid).onclick  = function(){
						if(modlename != 'setting'){
							SideTool.slideToggle.call(this , SideTool);
						}
						setTimeout(function(){
							if($(modlegroupid).className.indexOf(SideTool.classOpen) != -1){
								SideTool.curpanel = modlename;
								if(callback){
									callback();
								}
							}else{
								SideTool.curpanel = '';
								if(modlename == 'setting' && callback){
									callback();
								}
							}
						},50);
						
						//è´­ç©è½¦ç»è®¡å¸ç¹
						if(modlename == 'eshop'){
							SideTool._eshopStatisticsClothCoad('click' , 'cart_icon' , '' , '' , '' , '' , '' , '');
						}
					};
				}
			}
		},
		showModleEvent: function(modleobj , type){
			if(!modleobj.modlename || !modleobj.modleitemid || !modleobj.modlegroupid || !modleobj.isshow){
				return false;
			}
			var modlename = modleobj.modlename;
			var modleitemid = modleobj.modleitemid;
			var modlegroupid = modleobj.modlegroupid;
			if(typeof(type) == 'undefined'){
				type = 1;
			}
			var callback = '';
			if(modleobj.callback){
				callback = eval(modleobj.callback);
			}
			if($(modleitemid)){
				if(modlename != 'gotop' && modlename != 'lightoff' && modlename != 'feedback' && modlename != 'setting'){
					if(type == 1){//1 å±å¼é¢æ¿
						SideTool.curpanel = modlename;
						if($(modlegroupid).className.indexOf(SideTool.classOpen) == -1){
							SideTool.slideToggle.call($(modleitemid) , SideTool);
						}
						setTimeout(function(){
							if(callback){
								callback();
							}
						},50);
					}else if(type == 2){//2 å³é­é¢æ¿	
						SideTool.curpanel = '';
						if($(modlegroupid).className.indexOf(SideTool.classOpen) != -1){
							SideTool.slideToggle.call($(modleitemid) , SideTool);
						}
					}
				}
			}
		},
		
		initSideTool: function(){
			
			if(SideTool.isfirstcome && islogin()){ 
		        
		        //è´­ç©è½¦ç»éåèªå¨å¯¼å¥
		        if(SideTool.shoppingisshow){
		        	var img = new Image();
					img.src = 'http://hudong.pl.youku.com/interact/eshop/do/importgoods';
		        }
			}
			
			//è´­ç©è½¦æªè¯»æ°æ·»å 
			var curUid = SideTool.getUID();
			if(!islogin()){
				curUid = Nova.Cookie.get('__ysuid');
			}
			var unreadNum = Nova.Cookie.get('st_n_s'+curUid) || 0;
			if(unreadNum > 0 && $('newnoticeiconshopping') || !Nova.Cookie.get('newpro')){
				//$('newnoticeiconshopping').innerHTML = unreadNum;
				$('newnoticeiconshopping').style.display = 'block';
			}
		},
		
		showShoppingList: function(){
			var shoppingListObj = $(SideTool.panel.shoppinglist);
			if(!shoppingListObj){
				return false;
			}
			shoppingListObj.innerHTML = SideTool.loading;
			Nova.addScript('http://nc.youku.com/index_QSideToolJSONP?function[]=getGoodsList&callback[]=SideTool.showShoppingListCallback');
		},
		
		showShoppingListCallback: function(data){
			var shoppingListObj = $(SideTool.panel.shoppinglist);
			var shoppingList = "";
			var shoppingDiv = document.createElement("div");
			if(data && data['goodslist']){
				var listlen = data['goodslist'].length;
				for(var i = 0;i < listlen;i++){
					shoppingList += '<div class="yk-toolbar-cart-items" name="shoppinglist" rim_source="'+data['goodslist'][i]['rim_source']+'" is_viewed="'+data['goodslist'][i]['is_viewed']+'" id="goods_hover_'+data['goodslist'][i]['id']+
									'" gid="'+data['goodslist'][i]['id']+'" mid="'+data['goodslist'][i]['mid']+'" vid="'+data['goodslist'][i]['video_id_encode']+'">';
					if(data['goodslist'][i]['m_status'] == 1){
						shoppingList += '<a target="_blank" href="http://nc.youku.com/index_shoppingCartToBuy?vid='+data['goodslist'][i]['video_id_encode']+'&mid='+data['goodslist'][i]['mid']+'&murl='+
										encodeURIComponent(data['goodslist'][i]['m_url'])+'" onclick="SideTool._eshopStatisticsClothCoad(\'click\',\'buy\',\'\',\''+
										data['goodslist'][i]['video_id_encode']+'\',\''+data['goodslist'][i]['mid']+'\',\'\',\''+encodeURIComponent(data['goodslist'][i]['m_url'])+
										'\',\''+data['goodslist'][i]['rim_source']+'\');">';
					}
					shoppingList += '<div class="yk-toolbar-cart-icon"><img class="product-from" src="'+data['goodslist'][i]['m_source_icon']+'" alt=""><img src="'+
									data['goodslist'][i]['m_image']+'" alt="'+data['goodslist'][i]['m_title']+'"></div><div class="yk-toolbar-cart-title" title="'+
									data['goodslist'][i]['m_title']+'">'+data['goodslist'][i]['m_title']+'</div><div class="yk-toolbar-cart-price">'+
									'<span class="yk-toolbar-cart-curren-price">Â¥ '+data['goodslist'][i]['m_cprice']+'</span><span class="yk-toolbar-cart-old-price"><del>Â¥ '+
									data['goodslist'][i]['m_price']+'</del></span></div>';
					if(data['goodslist'][i]['m_status'] == 1){
						shoppingList += '</a>';
					}
					shoppingList += '<div class="yk-toolbar-cart-link"><div class="yk-toolbar-cart-link-icon"></div><a onclick="SideTool._eshopStatisticsClothCoad(\'click\',\'cart_video\',\'\',\''+
									data['goodslist'][i]['video_id_encode']+'\',\''+data['goodslist'][i]['mid']+'\',\'\',\'http://v.youku.com/v_show/id_'+data['goodslist'][i]['video_id_encode']+
									'.html?firsttime='+data['goodslist'][i]['video_time']+'\',\''+data['goodslist'][i]['rim_source']+'\');" href="http://v.youku.com/v_show/id_'+data['goodslist'][i]['video_id_encode']+'.html?firsttime='+
									data['goodslist'][i]['video_time']+'" title="'+data['goodslist'][i]['video_title']+'" target="_blank">'+SideTool._cutStr(data['goodslist'][i]['video_title'], 18 , '...')+'</a></div>';
					if(data['goodslist'][i]['m_status'] == 1){
						shoppingList += '<div class="yk-toolbar-cart-goshoping"><a target="_blank" href="http://nc.youku.com/index_shoppingCartToBuy?vid='+
										data['goodslist'][i]['video_id_encode']+'&mid='+data['goodslist'][i]['mid']+'&murl='+encodeURIComponent(data['goodslist'][i]['m_url'])+
										'" onclick="SideTool._eshopStatisticsClothCoad(\'click\',\'buy\',\'\',\''+data['goodslist'][i]['video_id_encode']+'\',\''+
										data['goodslist'][i]['mid']+'\',\'\',\''+encodeURIComponent(data['goodslist'][i]['m_url'])+'\',\''+data['goodslist'][i]['rim_source']+'\');">å»è´­ä¹°&gt;</a></div>';
					}else if(data['goodslist'][i]['m_status'] == -4){
						shoppingList += '<div class="yk-toolbar-cart-unshoping">å·²ä¸æ¶</div>';
					}
					shoppingList += '<div class="yk-toolbar-item-closeicon" id="goods_del_'+data['goodslist'][i]['id']+'"></div></div>';
				}
			}
					
			if(shoppingList){
				if(!islogin()){
					shoppingList = SideTool.logoutshopping + shoppingList;
				}
				shoppingDiv.innerHTML = SideTool.shoppingheader + '<div class="yk-toolbar-mod-bd" id="shoppinglists"><div class="yk-toolbar-cart-11ad">'+
											'<a onclick="SideTool._eshopStatisticsClothCoad(\'click\',\'cart_banner\',\'\',\'\',\'\',\'\',\''+
											encodeURIComponent('http://c.youku.com/bkbm/index')+'\',\'\');" href="http://c.youku.com/bkbm/index.html" target="_blank"></a></div>'+
											shoppingList + '</div>';
				shoppingListObj.appendChild(shoppingDiv);
				setTimeout(function(){
					SideTool.shoppingShowHover();
				},300);
			}else{
				shoppingDiv.innerHTML = SideTool.shoppingheader + SideTool.shoppingnull;
				shoppingListObj.appendChild(shoppingDiv);
			}
			
			
			var max_total = 20;
			if(islogin()){
				max_total = 100;
			}
			if($('goodsnum') && data['total']){
				$('goodsnum').innerHTML = '<span id="realgoodsnum">'+data['total']+'</span>/<span>'+max_total+'</span>';
			}
			
			//å°"newpro"åå¥cookie
			if(Nova.Cookie.get('newpro') == null){Nova.Cookie.set('newpro','had seen',365)};
			
            //æ¸é¤è´­ç©è½¦çº¢ç¹æç¤º
            $('newnoticeiconshopping').style.display = "none";
            $('newnoticeiconshopping').innerHTML = "";
            
            //è´­ç©è½¦ç»è®¡å¸ç¹
			SideTool._eshopStatisticsClothCoad('show' , 'cart_list' , data['total'] , '' , '' , '' , '' , '');
			
			//"newhot"çº¢ç¹é»è¾
			if($('newhot')){
				if(Nova.Cookie.get('newhot') != null){
					$('iconnewhot').style.display = "none";
				}else{
					$('newhot').onclick = function(event){
						//é»æ­¢åæ³¡
						var e =  event || window.event;
						if(e.stopPropagation) { 
							e.stopPropagation(); 
						}else{ 
							e.cancelBubble = true; 
						}
						Nova.Cookie.set('newhot','had clicked',365);
						$('iconnewhot').style.display = "none";
					};
				}
			}
		},
		
		shoppingShowHover: function(){
			var shoppingDivList = SideTool._getElementsByName('div','shoppinglist');
			if(shoppingDivList){
				var not_viewed_id = '';
				var listLen = shoppingDivList.length;
				for(var i = 0; i<listLen; i++){
					var gid = shoppingDivList[i].getAttribute('gid');
					var is_viewed = shoppingDivList[i].getAttribute('is_viewed');
					var mid = shoppingDivList[i].getAttribute('mid');
					var vid = shoppingDivList[i].getAttribute('vid');
					var rim_source = shoppingDivList[i].getAttribute('rim_source');
					if(parseInt(is_viewed) === 0){
						not_viewed_id += gid+',';
					}
					(function(gid , mid , vid){
						if($('goods_hover_'+gid)){
							SideTool._addEvent($('goods_hover_'+gid), 'mouseenter', function(){
								this.className = "yk-toolbar-cart-items yk-toolbar-cart-items-mouseover";
							});
							SideTool._addEvent($('goods_hover_'+gid), 'mouseleave', function(){
								this.className = "yk-toolbar-cart-items";
							});	
						}
						if($('goods_del_'+gid)){
							$('goods_del_'+gid).onclick = function(){
								Nova.addScript('http://nc.youku.com/index_QSideToolJSONP?function[]=shoppingCartDelGoods&callback[]=SideTool.shoppingCartDelGoodsCallback&gid='+gid);
								
								//ç»è®¡å¸ç¹
								SideTool._eshopStatisticsClothCoad('click' , 'delete' , '' , vid , mid , '' , '',rim_source);
							};
						}
					})(gid , mid , vid);
				}
				
				//æ¸é¤æªè¯»æ°
				not_viewed_id = not_viewed_id.substr(0 , not_viewed_id.length - 1);
				if(not_viewed_id){
					var img = new Image();
					img.src = 'http://hudong.pl.youku.com/interact/eshop/do/updatestatus?data={"ids":"'+not_viewed_id+'"}';
				}
				var curUid = SideTool.getUID();
				if(!islogin()){
					curUid = Nova.Cookie.get('__ysuid');
				}
	            if(Nova.Cookie.get('st_n_s'+curUid)){
	        		Nova.Cookie.set('st_n_s'+curUid , '' , -1);
	        	}
			}
		},
		
		shoppingCartDelGoodsCallback: function(data){
			if(data && data['ret'] === true && data['gid']){
				if($('goods_hover_'+data['gid'])){
					$('goods_hover_'+data['gid']).parentNode.removeChild($('goods_hover_'+data['gid']));
				}
				if($('realgoodsnum')){
					var realgoodsnum = parseInt($('realgoodsnum').innerHTML) - 1;
					if(realgoodsnum <= 0){
						realgoodsnum = 0;
					}
					$('realgoodsnum').innerHTML = realgoodsnum;
					if(realgoodsnum === 0){
						$(SideTool.panel.shoppinglist).innerHTML = SideTool.shoppingheader + SideTool.shoppingnull;
					}
				}
			}
		},
		playerDoAction: function(obj){
			if(!obj || !obj.type){ 
				return false; 
			}
			if(!obj.unread){
				obj.unread = 1;
			}
			var curUid = SideTool.loginUID;
			if(!SideTool.isLogin){
				curUid = SideTool.tmpUID;
			}
            var unreadNumKey = 'st_n_s'+curUid;
            var isShowLayerKey = 'st_e_g_l';
			if(obj.type == 1){
            	if(!Nova.Cookie.get(isShowLayerKey)){
        			var shoppingGuidLayer = document.createElement('div');
        			shoppingGuidLayer.className = 'yk-cart-cover';
        			shoppingGuidLayer.setAttribute("id","sidetoolshoppingguidlayer");
        			shoppingGuidLayer.innerHTML = '<div class="yk-cart-cover-left"></div><div class="yk-cart-cover-right"></div><div class="yk-cart-cover-tips">'+
        										  '<span class="yk-cart-cover-tips-title">æ¨éçå®è´å¨è¿éå</span><span class="yk-cart-cover-tips-btn"><a>æç¥éäº</a></span></div>';
        			document.body.appendChild(shoppingGuidLayer);
        			setTimeout(function(){
        				if($('sidetoolshoppingguidlayer')){
        					$('sidetoolshoppingguidlayer').onclick = function(event){
        						//é»æ­¢åæ³¡
        						var e =  event || window.event;
        						if(e.stopPropagation) { 
        							e.stopPropagation(); 
        						}else{ 
        							e.cancelBubble = true; 
        						}
        						$('sidetoolshoppingguidlayer').parentNode.removeChild($('sidetoolshoppingguidlayer'));
        						SideTool.showModleEvent(SideTool.modleicon.eshop);
        					}
        				}
        			},100);
        			Nova.Cookie.set(isShowLayerKey , 1 , 365);
        			//è´­ç©è½¦ç»è®¡å¸ç¹
        			SideTool._eshopStatisticsClothCoad('show' , 'cart_cover' , '' , '' , '' , '' , '','');
            	}
            	if($('newnoticeiconshopping')){
					//$('newnoticeiconshopping').innerHTML = obj.unread;
					$('newnoticeiconshopping').style.display = 'block';
				}
        		Nova.Cookie.set(unreadNumKey , obj.unread , 30);
			}else if(obj.type == 2){
				if($('sidetoolshoppingguidlayer')){
					$('sidetoolshoppingguidlayer').parentNode.removeChild($('sidetoolshoppingguidlayer'));
				}
				if(Nova.Cookie.get(isShowLayerKey)){
					Nova.Cookie.set(isShowLayerKey , '' , -1);
				}
				SideTool.showModleEvent(SideTool.modleicon.eshop);
			}else if(obj.type == 3){
				SideTool.showModleEvent(SideTool.modleicon.eshop , 2);
				SideTool.checkPositionOfCart(obj.xcoor , obj.ycoor , 'cart' , SideTool);
				setTimeout(function(){
					if($('newnoticeiconshopping')){
						if(!$('newnoticeiconshopping').innerHTML){
							//$('newnoticeiconshopping').innerHTML = obj.unread;
							$('newnoticeiconshopping').style.display = 'block';
							Nova.Cookie.set(unreadNumKey , obj.unread , 30);
						}else{
							var oldNum = parseInt($('newnoticeiconshopping').innerHTML);
							//$('newnoticeiconshopping').innerHTML = oldNum + 1;
							$('newnoticeiconshopping').style.display = 'block';
							Nova.Cookie.set(unreadNumKey , oldNum + 1 , 30);
						}
					}
				},1000);
			}
		},
		sideToolGoTop:function(){
			var _this = this;
			var sideT = this.sideT;
			var goTop = document.getElementById(_this.modleicon.gotop.modlegroupid);
			var clientHeight = this.getWindowHeight();
			var scrollTop = this.getScrollTop();
			if(parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE")+5))==6){//IE6
				var h = sideT.offsetHeight;
				var top = scrollTop + clientHeight - h - 20;
				sideT.style.top = top + 'px';
				var t = scrollTop + clientHeight - 58 - 20;
				lightopen.style.top =  t + 'px';
			}
			if(!scrollTop || !clientHeight || scrollTop < clientHeight / 2){
				$('icongroupgotop').style.display = 'none';
			}else{
				$('icongroupgotop').style.display = 'block';
				goTop.onclick = function(){
					document.body.scrollTop = 0;
					document.documentElement.scrollTop = 0;
				};
			}
		},
		//é£å¨åå§å
		flyInit: function(){
			var _this = this;
			if(window.jQuery == undefined){
				var jqueryUrl = [location.protocol, '//', 'static.youku.com', '/js/jquery.js'].join('');
				_this._sidetoolLoadJS(jqueryUrl, function(){
					jQuery.noConflict();
					_this.fly();
				});
			}else{
				_this.fly();
			}
		},
		//é£å¨ææ
		fly:function(){
			var _this = this;
			var baseEasings = {};
			var $ = jQuery;
			$.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
				baseEasings[ name ] = function( p ) {
					return Math.pow( p, i + 2 );
				};
			});
			$.extend( baseEasings, {
				Sine: function( p ) {
					return 1 - Math.cos( p * Math.PI / 2 );
				},
				Circ: function( p ) {
					return 1 - Math.sqrt( 1 - p * p );
				},
				Elastic: function( p ) {
					return p === 0 || p === 1 ? p :
						-Math.pow( 2, 8 * (p - 1) ) * Math.sin( ( (p - 1) * 80 - 7.5 ) * Math.PI / 15 );
				},
				Back: function( p ) {
					return p * p * ( 3 * p - 2 );
				},
				Bounce: function( p ) {
					var pow2,
						bounce = 4;

					while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
					return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
				}
			});
			$.each( baseEasings, function( name, easeIn ) {
				$.easing[ "easeIn" + name ] = easeIn;
				$.easing[ "easeOut" + name ] = function( p ) {
					return 1 - easeIn( 1 - p );
				};
				$.easing[ "easeInOut" + name ] = function( p ) {
					return p < 0.5 ?
						easeIn( p * 2 ) / 2 :
						1 - easeIn( p * -2 + 2 ) / 2;
				};
			});		
		},
		
		//æ­æ¾å¨é£å¨åå§å
		checkPositionOfCart: function(offsetX,offsetY,modle,self){
			var $ = jQuery;
			var _this = self;
	        var playBox = document.getElementById('playerBox'),
	        	offset_x = offsetX+'px',
				offset_y = offsetY+'px',
				cartDiv = $('<div data-dest = "'+modle+'"></div>')
	                .appendTo(playBox)
	                .css('position','absolute')
	                .css('top',offset_y)
	                .css('left',offset_x);
	        _this.flyShowInfo(cartDiv);
	        cartDiv.remove();
	    },
	    //é£å¨ææ
		flyShowInfo:function($el){
			var $ = jQuery,
			_this = this;
			var $this = $($el),
			type  = $this.data('dest'),
			$dest = $(_this.sideT).find('.js-dest-'+type),
			$sprite= $('<div class="yk-toolbar-sprite"><span style="margin-top: 0" class="yk-toolbar-group-item-icon sprite-icon-'+type+'"></span></div>').appendTo($dest),
			OffsetThis = $this.offset(),
			OffsetSprite = $sprite.offset();
			var $thisGroup = $dest.parent();
	        var flyDistance = 1000,
	            timeFly = 1000,
	            breatheDelay = 1000,
	            delay = 0;
	        var cloneItem = null;

	        var w = 22,h = 22;
	        if(type == 'cart'){
	        	w = 32;
	        	h = 32;
	        }
			$sprite.css({
				top: 12 + OffsetThis.top - OffsetSprite.top, 
				left: 12 + OffsetThis.left - OffsetSprite.left 
			}).animate({
				top: 0,
				left: 10,
				width: w,
				height: h
			},timeFly,function(){
				$dest.parent().find('.yk-toolbar-group-item-clone') && $dest.parent().find('.yk-toolbar-group-item-clone').remove();
				cloneItem = $dest.clone().addClass('yk-toolbar-group-item-clone');
				$(cloneItem).appendTo($dest.parent());
				$sprite.animate({
					opacity : 0
				},breatheDelay,function(){
					$sprite.remove();
				});
				$(cloneItem).animate({opacity : 0},breatheDelay,function(){
					$(cloneItem).remove();
				});
				//å¼¹åºæ°æ³¡
				if(type == 'subscription'){
					setTimeout(function(){
						_this.showTips(type);
					},600);
				}
				}
			);
		},
		//ä¸çº§é¢æ¿å±ç¤ºåéè
		slideToggle: function(self){
			var $ = jQuery;
			var _this = self;
			var ClassOpen = _this.classOpen,
			ClassHover = _this.classHover,
			YkToolbarPanel = 'yk-toolbar-group-panel';
			var $thisGroup = $(this).parent();
			var $thisPanel = $thisGroup.find("." + YkToolbarPanel);
			var $groups = $(".yk-toolbar-group");
			var $groupItems = $(".right-sideBar .yk-toolbar-group-item");
			var $mask = $thisGroup.find("iframe.mask");
			var $hint;

			if($thisGroup.hasClass(ClassOpen)){
				$thisGroup.removeClass(ClassOpen);
				_this.$curOpenGroup = null;
				$hint = $(".hint-tmp");

				if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0"){
					$thisPanel.css("display","none");
					$mask.css("display","none").css("right","-330px");
					if($hint.length != 0){
						$hint.removeClass("hint-tmp").show();
					}
				}else{
					$thisPanel.animate({
						right:0,
						opacity:0
					},{
						duration: +200,
						specialEasing:{
							top:"easeOutCubic",
							left:"linear"
						},
						done:function(){
							$groupItems.css("position","");
							$thisPanel.css("z-index",10);
							$thisPanel.css("display","none");
							if(navigator.userAgent.indexOf("MSIE")>0){
								$groups.css("z-index","20");
							}
						}
					});
					$mask.animate({
						right : -330
					},200,function(){
						$mask.css("display","none");
					})
					if($hint.length != 0){
						$hint.removeClass("hint-tmp").show();
					}
				}
			}else{
				$hint = $(".yk-toolbar-group-hint:visible");
				if(_this.$curOpenGroup){
					$(_this.$curOpenGroup).removeClass(ClassOpen);
				}

				$thisGroup.addClass(ClassOpen);
				$thisGroup.removeClass(ClassHover);

				if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0"){
					$thisPanel.css("display","block");
					$thisPanel.css("height",window.screen.availHeight +"px");
					$(_this.$curOpenGroup).find("." + YkToolbarPanel).css("display","none");
					$(_this.$curOpenGroup).find("iframe.mask").css("display","none").css("right","-330px");
					$mask.css("display","block").css("right","50px");
					_this.$curOpenGroup = $thisGroup;
					if($hint.length != 0){
						$hint.addClass("hint-tmp").hide();
					}
				}else{
					$groupItems.css("position","relative");

					$(_this.$curOpenGroup).find("." + YkToolbarPanel).css("display","none");
					$(_this.$curOpenGroup).find("iframe.mask").css("display","none").css("right","-330px");
					if(navigator.userAgent.indexOf("MSIE")>0){
						$groups.css("z-index","50");
						$thisGroup.css("z-index","20");
					}
					if(_this.$curOpenGroup){
						_this.$curOpenGroup = $thisGroup;
						$thisPanel.css({"display":"block","right":"50px","opacity":1});
						$mask.css("display","block").css("right","50px");
					}else{
						_this.$curOpenGroup = $thisGroup;
						$thisPanel.css({
							right:0,
							opacity:0,
							display:"block"
						}).animate({
							right:50,
							opacity:1
							},{
								duration: +200,
								specialEasing:{
								top:"easeOutCubic",
								right:"linear"
							},
							done:function(){
								if($hint.length != 0){
									$hint.addClass("hint-tmp").hide();
								}
							}
						});
						$mask.css({
							display : "block"
						}).animate({
							right : 50
						},200)
					}
				}
			}
		},

		//äºçº§é¢æ¿å±å¼æ¶èµ·å¨ç»
		slideToggleTwoPanels: function(onepanelid , twopanelid , action){
			if(action == 'go'){
				if(jQuery("#"+onepanelid)){
	        		jQuery("#"+onepanelid).animate({
							right:330
						},{
							duration: +200,
							specialEasing:{
								top:"easeOutCubic",
								right:"linear"
							},
							done:function(){
								jQuery(this).css("display","none");
							}
						});
	        	}
				if(jQuery('#'+twopanelid)){
					jQuery('#'+twopanelid).css({
						display:"block"
					}).animate({
						right:0
					},{
						duration: +200,
						specialEasing:{
							top:"easeOutCubic",
							right:"linear"
						},
						done:function(){
			
						}
					});
				}
			}else if(action == 'goback'){
				if(jQuery("#"+onepanelid)){
					jQuery("#"+onepanelid).css({
        				display:"block"
					}).animate({
						right:0
					},{
						duration: +200,
						specialEasing:{
							top:"easeOutCubic",
							right:"linear"
						},
						done:function(){
						}
					});
        		}
        		if(jQuery('#'+twopanelid)){
        			jQuery('#'+twopanelid).animate({
						right:-330
					},{
						duration: +200,
						specialEasing:{
							top:"easeOutCubic",
							right:"linear"
						},
						done:function(){
							jQuery(this).css("display","none");
						}
					});
        		}
			}
		},

		onResizeEvent: function(){		
			//æ¨ªåä½ç½®
			var windowWidth = this.getWindowWidth();;
			var toolbarRight = 0;
			if(windowWidth < 1255) {
				if(windowWidth > 1110) {
					toolbarRight = (windowWidth - 970)/2-65;
				} else {
					toolbarRight = 15;
				}
			} else {
				if(windowWidth > 1330) {
					toolbarRight = (windowWidth - 1190)/2-65;
				} else {
					toolbarRight = 15;
				}
			} 
			$(this.toolbar.service).style.right = toolbarRight + 'px';
			$(this.toolbar.util).style.right = toolbarRight + 'px';

			if(this.light.isshow == true){
				$(this.light.dark).style.right = toolbarRight + 'px';
			}
		},
		
		getUID: function(){
			if(!islogin()){ return 0; }
			var ckie = Nova.Cookie.get('yktk');
			var uid = 0;
			if(ckie){
				try{
					var u_info = decode64(decodeURIComponent(ckie).split('|')[3]);
					if(u_info.indexOf(',') > -1 && u_info.indexOf('nn:') > -1 && u_info.indexOf('id:') > -1){
						uid = u_info.split(',')[0].split(':')[1];
					}
				}catch(e){ }
			}
			
			return parseInt(uid);
		},

		//è·åæ»å¨æ¡å®½åº¦
		getScrollWidth: function(){
			var __scrollBarWidth;
	        var scrollBarHelper = document.createElement("div");

	        scrollBarHelper.style.cssText = "overflow:scroll;width:100px;height:100px;"; 
	        document.body.appendChild(scrollBarHelper);
	        if (scrollBarHelper) {
	            __scrollBarWidth = scrollBarHelper.offsetWidth - scrollBarHelper.clientWidth
	        }
	        document.body.removeChild(scrollBarHelper);
	        return __scrollBarWidth;
	       
	    },

		//è·åå¯è§å®½åº¦
		getWindowWidth:function(){
			return document.documentElement.clientWidth || document.body.clientWidth;//ä¸åå«æ»å¨æ¡ 
		},
		//è·åå¯è§é«åº¦
		getWindowHeight:function(){
			return document.documentElement.clientHeight || document.body.clientHeight;
		},
		//è·åæ»å¨Top
		getScrollTop:function(){
			return document.documentElement.scrollTop || document.body.scrollTop;
		},
		
		_addHover: function(obj , cname){
			if(!obj.className){
				obj.className = cname;
			}else if(obj.className.indexOf(cname) == -1){
				obj.className += ' '+cname; 
			}
			return this;
		},
		_removeHover: function(obj , cname){
			if(obj.className && obj.className.indexOf(' '+cname) != -1){
				obj.className = obj.className.replace(' '+cname, '');
			}else if(obj.className && obj.className.indexOf(cname) != -1){
				obj.className = obj.className.replace(cname, '');
			}
			return this;
		},
		_addExpand: function(idname){
			if($(idname).className.indexOf(this.classOpen) == -1){
				$(idname).className += ' yk-toolbar-group-open';
			}
			return this;
		},
		_removeExpand: function(idname){
			if($(idname).className.indexOf(this.classOpen) != -1){
				$(idname).className = $(idname).className.replace(/ yk-toolbar-group-open/, '');
			}		
			return this;
		},
		_addEvent: function(dom, eventname, func){
			if(window.addEventListener){
				if(eventname == 'mouseenter' || eventname == 'mouseleave'){
					function fn(e){
						var a = e.currentTarget, b = e.relatedTarget;
						if(!elContains(a, b) && a!=b){
							func.call(e.currentTarget,e);
						}	
					}
					function elContains(a, b){
						try{ return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16); }catch(e){}
					}
					if(eventname == 'mouseenter'){
						dom.addEventListener('mouseover', fn, false);
					}else{
						dom.addEventListener('mouseout', fn, false);
					}
				}else{
					dom.addEventListener(eventname, func, false);
				}
			}else if(window.attachEvent){
				dom.attachEvent('on' + eventname, func);
			}
		},
		_delEvent: function(dom, eventname, func){
			if(window.addEventListener){
				dom.removeEventListener(eventname, func, true);
			}else if(window.attachEvent){
				dom.detachEvent("on"+ eventname, func);
			}
		},
		
		_getWatchLevelIcon: function(watchlevel){
			var watchLevelIcon = 0;
			if(watchlevel > 40){
				watchLevelIcon = 4;
			}else if(watchlevel > 30 && watchlevel <= 40){
				watchLevelIcon = 3;
			}else if(watchlevel > 20 && watchlevel <= 30){
				watchLevelIcon = 2;
			}else if(watchlevel > 10 && watchlevel <= 20){
				watchLevelIcon = 1;
			}else{
				watchLevelIcon = 0;
			}
			return watchLevelIcon;
		},

		_getElementsByName: function(tag, name){
			var returns = document.getElementsByName(name);
			if(returns.length > 0) return returns;
			returns = new Array();
			var e = document.getElementsByTagName(tag);
			for(var i = 0; i < e.length; i++){
				if(e[i].getAttribute("name") == name){
					returns[returns.length] = e[i];
				}
			}
			return returns;
		},
		
		_sidetoolLoadJS: function(url, callback, cleanNode){
			var script = document.createElement('script');
			var head = document.getElementsByTagName('head')[0];
			script.type = "text/javascript";
			script.src = url;
			script.onload = script.onreadystatechange = function (){
				if(!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete'){
					if(callback && typeof(callback) == 'function'){
						callback();
					}
					if(cleanNode){
						head.removeChild(script);
					}
				}
			};
			head.appendChild(script);
		},
			
		_cutStr: function(str , len , truncation){
			if(!str){
                return '';
            }
			var str_length = SideTool._strLen(str);
			if(str_length <= len){
				return  str;
			}else{
				var str_cur_len = 0;
				var str_len = 0;
				str_cut = new String();
				str_len = str.length;
				for(var i = 0; i < str_len; i++){
					str_cur_len++;
					a = str.charAt(i);
					if(escape(a).length > 4){
						//ä¸­æå­ç¬¦çé¿åº¦ç»ç¼ç ä¹åå¤§äº4  
						str_cur_len++;
					}
					if(str_cur_len>len){
						if(truncation){
							str_cut = str_cut.concat(truncation);
						}
						return str_cut;  
					}
					str_cut = str_cut.concat(a);
				}
			}
		},
		_strLen: function(str){
			if(!str){
                return 0;
            }
			var str_length = 0;  
			var str_len = 0;   
			str_len = str.length;  
			for(var i = 0; i < str_len; i++){  
				str_length++;  
				a = str.charAt(i);  
				if(escape(a).length > 4)  {  
					//ä¸­æå­ç¬¦çé¿åº¦ç»ç¼ç ä¹åå¤§äº4  
					str_length++;  
				}   
			}  
			return  str_length;  		 
		},
		
		_formatDate: function(fdate){
			var fDate = new Date(Date.parse(fdate.replace(/-/g,"/"))); 	
			var ftime = fDate.valueOf();
			var cDate = new Date();
			var ctime = cDate.valueOf();
			var diff = ctime - ftime;
			var cyear = cDate.getFullYear();
			var cmonth = cDate.getMonth() + 1;
			var cday = cDate.getDate();
			var cdate0 = cyear+'/'+cmonth+'/'+cday+' 00:00:00';
			var cDate0 = new Date(cdate0);
			var ctime0 = cDate0.valueOf();
			var fhours = fDate.getHours();
			if(fhours < 10 && fhours.toString().length < 2){
				fhours = '0'+fhours;
			}
			var fminutes = fDate.getMinutes();
			if(fminutes < 10 && fminutes.toString().length < 2){
				fminutes ='0'+fminutes;
			}

			if(diff > 0 &&diff < 60000){
				fdate = 'åå';
			}else if(diff >= 60000 && diff <= 3600000){
				fdate = (Math.floor(diff/60000)) + 'åéå';
			}else if(diff > 3600000 && ftime > ctime0){
				fdate = (Math.floor(diff/3600000)) + 'å°æ¶å';
			}else if(ftime < ctime0 && ftime >= (ctime0-3600000*24)){
				fdate = 'æ¨å¤©'+ fhours + ':' + fminutes;
			}else if(ftime < (ctime0-3600000*24) && ftime >= (ctime0-3600000*24*2)){
				fdate = 'åå¤©'+ fhours + ':' + fminutes;
			}else if(ftime < (ctime0-3600000*24*2) && ftime >= (ctime0-3600000*24*7)){
				fdate = (Math.floor(diff/(3600000*24)))	+ 'å¤©å';
			}else if(cDate.getFullYear() == fDate.getFullYear()){
				fdate = fdate.substr(5,5);
			}else{
				fdate = fdate.substr(0,10);
			}
			return fdate;
		},
		
		_formatCount: function(str, step, sep) {
			var length = str.length,
				floor = parseInt(length / step),
				mod = str.length % step;
			var arr = [],
				result = "";
			if(mod != 0){
				arr.push(str.substring(0,mod));
			}
			for(var i = 0;i<floor;i++){
				arr.push(str.substr(mod + step*i,step));
			}
			result = arr.join(sep);

			return result;
		},

        _addScript: function(src){
            if (typeof arguments[0] != 'string'){ return; }
            var head = document.getElementsByTagName('HEAD')[0];
            var script = document.createElement('SCRIPT');
            script.type = 'text/javascript';
            script.src = src;
            head.appendChild(script);
        },

        _getUA: function() {
    		var Sys = {};
    		var ua = navigator.userAgent.toLowerCase();
    		var s;
    		(s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
    			(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    			(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
    			(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
    			(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
    			(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    		return Sys;
    	},
    	
    	//æ´»å¨
		lottery:function(){
			
			if(!window.lottery_open_sidetool || window.lottery_open_sidetool == '' || !$('lotteryToolbarBig') || !$('lotteryToolbar')) {
				return false;
			}
			
			var lotteryCon = eval(window.lottery_sidetool);
			if(!lotteryCon || typeof(lotteryCon) != 'object'){
				return false;
			}
			
			var lotterystart = ''; //å¤§å¾å±ç¤ºå¼å§æ¶é´
			var lotteryend = ''; //å¤§å¾å±ç¤ºç»ææ¶é´
			var lottery_small_start = ''; //å°å¾å±ç¤ºå¼å§æ¶é´
			var lottery_small_end = ''; //å°å¾å±ç¤ºç»ææ¶é´
			
			var lotterybackground = ''; //æ´»å¨èæ¯å¾ç
			var lotterytype = ''; //1 è·³è½¬ ï¼ 2 å¼¹å±
			var lotteryurl = ''; //lotterytypeä¸º1æ¶è¡¨ç¤ºè·³è½¬å°å lotterytypeä¸º2æ¶è¡¨ç¤ºiframeå°å
			var lotteryLayerW = ''; //æ´»å¨å¼¹å±å®å®½
			var lotteryLayerH = ''; //æ´»å¨å¼¹å±å®é«
			for(var i = 0; i < lotteryCon.length;i++){
				if(typeof(lotteryCon[i]) != 'object' || !lotteryCon[i].start || !lotteryCon[i].end || !lotteryCon[i].type || !lotteryCon[i].background){
					continue;
				}
				lotterystart = lotteryCon[i].start;
				lotteryend = lotteryCon[i].end;
				lottery_small_start = lotteryCon[i].small_start;
				lottery_small_end = lotteryCon[i].small_end;
				
				lotterybackground = lotteryCon[i].background+'?t='+Math.random();
				lotterytype = lotteryCon[i].type;
				lotteryurl = lotteryCon[i].url;
				if(lotterytype == 2){
					lotteryLayerW = !lotteryCon[i].layerw ? 485 : lotteryCon[i].layerw;
					lotteryLayerH = !lotteryCon[i].layerh ? 426 : lotteryCon[i].layerh;
				}

				var starttime = (new Date(lotterystart)).valueOf();//å¤§å¾å¼å§æ¶é´
				var endtime = (new Date(lotteryend)).valueOf();//å¤§å¾ç»ææ¶é´
				var small_starttime = (new Date(lottery_small_start)).valueOf();//å°å¾å¼å§æ¶é´
				var small_endtime = (new Date(lottery_small_end)).valueOf();//å°å¾ç»ææ¶é´
				
				var nowDate = new Date();
				var nowtime = nowDate.valueOf(); 
				var nowDay = nowDate.getDate().toString();
				var nowMonth = nowDate.getMonth().toString();
				var nowYear = nowDate.getFullYear().toString();
				var clolseCookieValueNow = nowYear + nowMonth + nowDay;
				
				var lotteryToolbarInner = '';
				var lotteryToolbarBigInner ='';
				if(nowtime > starttime && nowtime < endtime || nowtime > small_starttime && nowtime < small_endtime){
					
					$('lotteryToolbar').style.display = 'block';
					
					lotteryToolbarInner = '<div class="yk-toolbar-draw js-draw"><div class="yk-toolbar-group yk-toolbar-group-draw">'+'<div class="ykDraw-mark" id="lotteryRight">';
					
					if(lotterytype == 1){	
						lotteryToolbarInner += '<a href="'+lotteryurl+'" target="_blank" onclick="Log.log(1, \'tp=1&cp=4010338&cpp=1000940\');" style="position:relative;display:block;height:38px;">'+
											   '<span class="ykDraw-m-item ykDraw-m-item-bag" style="background:url('+lotterybackground+') no-repeat;width:100%;height:100%;background-position:0 0;'+
											   'z-index:1;display:block;margin:0 auto;"></span></a>';
						
					}else if(lotterytype == 2){	
						lotteryToolbarInner += '<span onclick="SideTool.lotteryLayer(\''+lotteryurl+'\',\''+lotteryLayerW+'\',\''+lotteryLayerH+'\');Log.log(1, \'tp=1&cp=4010338&cpp=1000940\');" style="cursor:pointer;position:relative;display:block;height:38px;">'+
											   '<span class="ykDraw-m-item ykDraw-m-item-bag" style="background:url('+lotterybackground+') no-repeat;width:100%;height:100%;background-position:0 0;'+
											   'z-index:1;display:block;margin:0 auto;"></span></span>';
					}else{	
						lotteryToolbarInner += '<span style="cursor:pointer;position:relative;display:block;height:38px;">'+
						   '<span class="ykDraw-m-item ykDraw-m-item-bag" style="background:url('+lotterybackground+') no-repeat;width:100%;height:100%;background-position:0 0;'+
						   'z-index:1;display:block;margin:0 auto;"></span></span>';
					}
					lotteryToolbarInner += '</div>';
					
					lotteryToolbarBigInner += '<div id="lotteryLeft" class="ykDraw-panel ykDraw-panel-reward" style="position:relative;width:100%;height:100%;">';
					
					
					if(lotterytype == 1){
						
						lotteryToolbarBigInner += '<a href="'+lotteryurl+'" target="_blank" onclick="Log.log(1, \'tp=1&cp=4010337&cpp=1000940\');" '+
						   'style="cursor:pointer;position:absolute;width:100%;height:100%;background:url('+lotterybackground+') no-repeat;background-position:0 -40px;margin-top:10px;"></a>';
						
					}else if(lotterytype == 2){
						
						lotteryToolbarBigInner += '<span onclick="SideTool.lotteryLayer(\''+lotteryurl+'\',\''+lotteryLayerW+'\',\''+lotteryLayerH+'\');Log.log(1, \'tp=1&cp=4010337&cpp=1000940\');" '+
	   					   'style="cursor:pointer;position:absolute;width:100%;height:100%;background:url('+lotterybackground+') no-repeat;background-position:0 -40px;margin-top:10px;"></span>';
					}else{
						
						lotteryToolbarBigInner += '<span style="cursor:pointer;position:absolute;width:100%;height:100%;background:url('+lotterybackground+') no-repeat;background-position:0 -40px;margin-top:10px"></span>';
					}
					
					lotteryToolbarBigInner += '<span id="lotteryHand" class="ykDraw-p-itemykDraw-p-item-close" style="cursor:pointer;position:absolute;width:13px;'+
					   'height:13px;left:0px;top:0px;background:url('+lotterybackground+') no-repeat;background-position:-42px 0;"></span>'+
					   '</div></div></div>';

					$('lotteryToolbarBig').innerHTML = lotteryToolbarBigInner;
					if(nowtime > starttime && nowtime < endtime){$('lotteryToolbarBig').style.display = 'block';}
					$('lotteryToolbar').innerHTML = lotteryToolbarInner;
					
					if(clolseCookieValueNow == Nova.Cookie.get('lottery_day')){
						$('lotteryToolbarBig').style.display = 'none';
						$('lotteryToolbar').style.display = 'block';
					}
					if($('lotteryHand')){
						$('lotteryHand').onclick = function(event){
							$('lotteryToolbarBig').style.display = 'none';
							$('lotteryToolbar').style.display = 'block';
							Log.log(1,"tp=1&cp=4009622&cpp=1000217");
							var myDate = new Date();
							var myDay = myDate.getDate().toString();
							var myMonth = myDate.getMonth().toString();
							var myYear = myDate.getFullYear().toString();
							var clolseCookieValueMy = myYear + myMonth + myDay;
							Nova.Cookie.set('lottery_day', clolseCookieValueMy, 1);
							//é»æ­¢åæ³¡
							var e =  event || window.event;
							if(e.stopPropagation) e.stopPropagation(); 
							return false;
						};
					}
				}
			}
		},
		lotteryLayer : function(lLayerurl , lLayerW , lLayerH){
			if(!lLayerurl || !lLayerW || !lLayerH){
				return false;
			}
			if(typeof(PlayerPause) == "function"){
				PlayerPause(1);
			}
			if(window.popwin) popwin.hide();
			window.popwinLottery = new Qwindow();
			window.popwinLottery.
			setSize(lLayerW, lLayerH).
			setContent('iframe', lLayerurl).
			setHideCallback(function(){
				if(typeof(PlayerPause) == "function"){
					PlayerPause(0);
				}
			}).
			show();
			Log.log(1,"tp=1&cp=4009623&cpp=1000217");
		},
		
		//è´­ç©è½¦ç»è®¡å¸ç¹
		_eshopStatisticsClothCoad: function(type , type_code , ext , videoid , pkgid ,  plugindata , target_url , rim_source){
			var winTypeOBJ = {1:103,2:101,3:100,4:104,5:102};
			var winType = 200;
			var playmode = window.playmode || '';
			if(playmode && typeof(winTypeOBJ[playmode]) != 'undefined'){
				winType = winTypeOBJ[playmode];
			}
			var sid = window.logPvid || '';
			var showid = window.showid || '';
			var vid = videoid || '';
			var video_curtime = 0;
			var PkgId = pkgid || '';
			var fullscreen = 0;
			var ref_url = encodeURIComponent(window.location.href);
			var subtype = 1;
			var plugintype = 'rim';
			if(ext != '' || rim_source != ''){
				if(ext != '' && rim_source == ''){
					ext = 'rim_num='+ext;
				}else if(ext == '' && rim_source != ''){
					ext = 'rim_source='+rim_source;
				}else if(ext != '' && rim_source != ''){
					ext = 'rim_num='+ext+'&rim_source='+rim_source;
				}
				ext = encodeURIComponent(ext);
			}else{
				ext = '';
			}
			if(target_url){
				target_url = encodeURIComponent(target_url);
			}
			
			var sendUrl = 'http://p.l.youku.com/interact?vvid='+sid+'&sid='+showid+'&vid='+vid+'&cpt='+video_curtime+'&pid='+PkgId+'&ptype='+plugintype+'&pdata='+plugindata+'&type='+type+'&tcode='+type_code+'&full='+fullscreen+'&wintype='+winType+'&turl='+target_url+'&rurl='+ref_url+'&ext='+ext+'&stype='+subtype;
			
			var img = new Image();
			img.src = sendUrl;
		}
	};

/**
 * å¯¹å¤æ¥å£
 */

window['SideTool'] = SideTool;

window.nova_init_hook_toobarinit = function(){SideTool.init();}; 
})();
