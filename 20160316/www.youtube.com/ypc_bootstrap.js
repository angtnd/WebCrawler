(function(g){var window=this;var WJa=function(a,b,c){g.rm(a,b,c,null)||g.lb(g.ra(b,a))},XJa=function(){var a=O3;
return new g.dm(function(b,c){var d=a.length,e=[];if(d)for(var h=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},n=0,r;n<a.length;n++)r=a[n],WJa(r,g.ra(h,n),k);
else b(e)})},P3=function(a){var b=g.t("YPC_LOADER_CSS",void 0),c=g.t("YPC_LOADER_JS",void 0);
YJa&&(c="www/ypc_core");O3.length||(O3.push(new g.dm(function(a){g.jf(b,a)})),O3.push(new g.dm(function(a){g.Cc(c,a)})));
XJa().then(function(){a&&a()})},R3=function(a,b,c,d,e){if(g.tr())P3(function(){g.m("yt.www.ypc.checkout.showYpcOverlay")(a,b,c,d,e)});
else{var h={ypc_it:a,ypc_ii:b,ypc_ft:c};d&&(h.ypc_irp=d);e&&(h.ypc_cc=e);h=Q3(h);g.ze(h)}},ZJa=function(a,b){if(g.tr())P3(function(){g.m("yt.www.ypc.checkout.showYpcOverlayForInnertubeRequestParams")(a,b)});
else{var c=Q3({ypc_ft:a,ypc_irp:b});g.ze(c)}},$Ja=function(a,b,c,d,e,h){if(g.tr())P3(function(){g.m("yt.www.ypc.checkout.offerpurchaser.purchaseOffer")(a,b,c,"D",d,e,h)});
else{var k={ypc_it:b,ypc_ii:c,ypc_ft:"D"};h&&(k.ypc_irp=h);k=Q3(k);g.ze(k)}},aKa=function(a,b){if(g.tr())P3(function(){g.m("yt.www.ypc.subscription.openUnsubscribeOverlay")(a,b)});
else throw Error("Unsubscribe triggered when user not signed in.");},Q3=function(a){a=g.qk(window.location.href,a);
var b=g.t("YPC_SIGNIN_URL",void 0),c=g.rk(b)["continue"],c=g.qk(c,{next:a});return g.qk(b,{"continue":c})},bKa=function(a){if(a=a.currentTarget){var b=g.w(a,"ypc-offer-id"),c=g.w(a,"ypc-item-type"),d=g.w(a,"ypc-item-id"),e=g.w(a,"ypc-offer-jwt"),h=g.w(a,"ypc-offer-encrypted-purchase-params"),k=g.w(a,"ypc-irp");
try{var n=g.w(a,"innertube-clicktracking");n&&!g.t("SERVICE_CLICKTRACKING_ENABLED")&&g.Po(g.t("EVENT_ID",void 0),new g.pe(n))}catch(r){S3("offer-button-click-logging-failed")}$Ja(b,c,d,e,h,k)}},dKa=function(a){(a=a.currentTarget)&&cKa(a)},eKa=function(a){P3(a.Yb)},fKa=function(a){var b;
S3("container-button-click-attempt");b=g.y("ypc-checkout-button",a.A);a=g.y("ytr-purchase-button",a.A);if(b||a&&a.href)a&&a.href?g.Ae(a.href):b&&cKa(b)},gKa=function(a){var b=a.A;
a=b.itemId;var c=b.itemType,b=b.flowType;S3("paid-subscribe-button-click",{itemType:c,itemId:a});R3(c,a,b)},cKa=function(a){var b=g.w(a,"ypc-item-type"),c=g.w(a,"ypc-item-id"),d=g.w(a,"ypc-flow-type");
a=g.w(a,"ypc-irp")||void 0;g.tr()?S3("purchase-button-click",{itemId:c,itemType:b}):S3("signin-button-click");R3(b,c,d,a)},hKa=function(a){var b=a.currentTarget;
a=g.w(b,"ypc-item-type");b=g.w(b,"ypc-item-id");a&&b&&(S3("unsubscribe-button-click",{itemId:b,itemType:a}),aKa(a,b))},iKa=function(a){var b=a.A;
a=b.itemType;b=b.itemId;S3("paid-unsubscribe-button-click",{itemType:a,itemId:b});aKa(a,b)},S3=function(a,b){var c={};
g.Wa(c,{label:a,pageName:g.t("PAGE_NAME")});b&&g.Wa(c,b);c=g.qd(c);g.Ti("ypc-checkout",c,void 0)},U3=function(a,b,c){this.D=this.B=this.A=null;
this.C=a;this.G=T3?b:null;this.P=c||window;this.F=this.P.location;this.J=this.F.href.split("#")[0];this.M=(0,g.p)(this.O,this)},V3=function(a){a=a.F.href;
var b=a.indexOf("#");return 0>b?"":a.substring(b+1)},jKa=function(a,b){var c=a.J+"#"+b,d=a.F.href;
d!=c&&d+"#"!=c&&g.xc(a.F,c)},W3=function(a,b){var c=a.G.contentWindow.document,d="#"+g.va(b);
if((c.body?c.body.innerHTML:"")!=d){var e=g.vc(g.uc("title",{},window.document.title||""),g.uc("body"));c.open("text/html");c.write(g.pc(e));g.mh(c.body,d);c.close()}},X3=function(a,b){this.C=this.G=this.A=null;
this.D=a;this.F=b||window;this.B=this.F.location;this.M=(0,g.p)(this.P,this)},lKa=function(){var a=kKa("state");
a.setEnabled.call(a,!0,!0)},mKa=function(a){var b=kKa();
b.replace.call(b,a,window.history&&window.history.state,!0)},kKa=function(a){a=a||"hash";
var b=g.m("yt.history.instance_");b||("state"==a?(b=new X3(nKa),X3.prototype.setEnabled=X3.prototype.Db,X3.prototype.add=X3.prototype.Y,X3.prototype.replace=X3.prototype.replace):(b=new U3(nKa,g.x("legacy-history-iframe")),U3.prototype.setEnabled=U3.prototype.Db,U3.prototype.add=U3.prototype.Y,U3.prototype.replace=U3.prototype.Y),oKa=b,g.l("yt.history.instance_",oKa,void 0));return b},nKa=function(a,b){g.v("navigate",a,b)},rKa=function(){var a=g.rk(window.location.href);
if(pKa){g.Pa(qKa,function(b){g.Sa(a,b)});
var b=g.rd(window.location.href.split("?",2)[0],a);lKa();mKa(b)}},O3=[],YJa=!1;var Y3=[],Z3=[];var oKa,sKa=g.z&&8<=window.document.documentMode||g.Ce&&g.Kc("1.9.2")||g.Wc&&g.Kc("532.1"),T3=g.z&&!sKa;U3.prototype.Db=function(a,b){this.B&&(g.Ni(this.B),delete this.B);this.D&&(g.Bb(this.D),delete this.D);if(a){this.A=V3(this);if(T3){var c=this.G.contentWindow.document.body;c&&c.innerHTML||W3(this,this.A)}b||this.C(this.A);sKa?this.B=g.F(this.P,"hashchange",this.M):this.D=g.zb(this.M,200)}};
U3.prototype.O=function(){if(T3){var a;a=(a=this.G.contentWindow.document.body)?g.Ah(g.Gk(a).substring(1)):"";a!=this.A?(this.A=a,jKa(this,a),this.C(a)):(a=V3(this),a!=this.A&&(this.A=a,W3(this,a),this.C(a)))}else a=V3(this),a!=this.A&&(this.A=a,this.C(a))};
U3.prototype.Y=function(a,b,c){this.A=""+a;T3&&W3(this,a);jKa(this,a);c||this.C(this.A)};var pKa=!!window.history.pushState&&(!g.Wc||g.Wc&&g.Kc("534.11"));X3.prototype.Db=function(a,b){this.C&&(g.Ni(this.C),delete this.C);this.G&&(g.Bb(this.G),delete this.G);a&&pKa&&(this.A=this.B.href,b||this.D(this.A),this.C=g.F(this.F,"popstate",this.M))};
X3.prototype.P=function(a){var b=this.B.href;if((a=a.state)||b!=this.A)this.A=b,this.D(b,a)};
X3.prototype.Y=function(a,b,c){if(a||b)a=a||this.B.href,this.F.history.pushState(b,"",a),this.A=a,c||this.D(a,b)};
X3.prototype.replace=function(a,b,c){if(a||b)a=a||this.B.href,this.F.history.replaceState(b,"",a),this.A=a,c||this.D(a,b)};var qKa={IR:"ypc_cc",VR:"ypc_ft",qS:"ypc_irp",yS:"ypc_ii",zS:"ypc_it"};g.Xb(g.Tk({name:"www/ypc_bootstrap",deps:["www/common"],page:"feed index results watch channel playlist subscription_manager unlimited".split(" "),init:function(){YJa=!0;g.y("ypc-delayedloader-target")&&P3();var a=g.rk(window.location.href),b=a.ypc_it,c=a.ypc_ii,d=a.ypc_ft||"D",e=a.ypc_irp,h=a.ypc_cc;"channel"==g.t("PAGE_NAME")&&"fan_fund"in a&&(d="T",b="U",c=g.t("CHANNEL_ID",void 0));"channel"==g.t("PAGE_NAME")&&"ypc_cc"in a&&(b="U",c=g.t("CHANNEL_ID",void 0));if(e||c&&b)rKa(),c&&b?R3(b,c,d,e,h):
ZJa(d,e);Y3.push(g.Vj(window.document.body,"click",dKa,"ypc-checkout-button"),g.Vj(window.document.body,"click",bKa,"ypc-offer-button"),g.Vj(window.document.documentElement,"click",hKa,"ypc-unsubscribe-link"),g.Vj(window.document.documentElement,"click",hKa,"ypc-unsubscribe-button"));Z3.push(g.uk(g.kv,eKa),g.uk(g.uka,fKa),g.uk(g.lv,gKa),g.uk(g.ov,iKa))},
dispose:function(){O3.length=0;g.Ni(Y3);Y3.length=0;g.tk(Z3);Z3.length=0}}));
g.l("yt.www.ypc.bootstrap.api.loadOffers",R3,void 0);g.l("yt.www.ypc.bootstrap.api.loadOffersForInnertubeRequestParams",ZJa,void 0);})(_yt_www);
