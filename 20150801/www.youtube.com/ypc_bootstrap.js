(function(g){var window=this;var ppa=function(a,b,c){g.lm(a,b,c,null)||g.Ol(g.r(b,a))};var qpa=function(){var a=N1;return new g.Xl(function(b,c){var d=a.length,e=[];if(d)for(var h=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,p;l<a.length;l++)p=a[l],ppa(p,g.r(h,l),k);else b(e)})};var O1=function(a){var b=g.x("YPC_LOADER_CSS"),c=g.x("YPC_LOADER_JS");P1&&(c="www/ypc_core");N1.length||(N1.push(new g.Xl(function(a){g.ff(b,a)})),N1.push(new g.Xl(function(a){g.gc(c,a)})));qpa().then(function(){a&&a()})};
var Q1=function(a,b,c,d,e){if(g.pq())O1(function(){g.n("yt.www.ypc.checkout.showYpcOverlay")(a,b,c,d,e)});else{var h={ypc_it:a,ypc_ii:b,ypc_ft:c};d&&(h.ypc_irp=d);e&&(h.ypc_cc=e);h=R1(h);g.ce(h)}};var S1=function(a,b){if(g.pq())O1(function(){g.n("yt.www.ypc.subscription.openUnsubscribeOverlay")(a,b)});else throw Error("Unsubscribe triggered when user not signed in.");};
var T1=function(a,b){if(g.pq())O1(function(){g.n("yt.www.ypc.checkout.showYpcRedeemGiftOverlay")(a,b)});else{var c=R1({ypc_grc:a,ypc_ft:b});g.ce(c)}};var R1=function(a){a=g.gk(window.location.href,a);var b=g.x("YPC_SIGNIN_URL"),c=g.hk(b)["continue"],c=g.gk(c,{next:a});return g.gk(b,{"continue":c})};var rpa=function(a){(a=a.currentTarget)&&U1(a)};var spa=function(a){O1(a.lc)};var tpa=function(a){V1("container-button-click-attempt");(a=g.F("ypc-checkout-button",a.j))&&U1(a)};
var upa=function(a){var b=a.j;a=b.itemId;var c=b.itemType,b=b.flowType;V1("paid-subscribe-button-click",{itemType:c,itemId:a});Q1(c,a,b)};var U1=function(a){var b=g.C(a,"ypc-item-type"),c=g.C(a,"ypc-item-id"),d=g.C(a,"ypc-flow-type");a=g.C(a,"ypc-irp")||void 0;g.pq()?V1("purchase-button-click",{itemId:c,itemType:b}):V1("signin-button-click");Q1(b,c,d,a)};
var W1=function(a){var b=a.currentTarget;a=g.C(b,"ypc-item-type");b=g.C(b,"ypc-item-id");a&&b&&(V1("unsubscribe-button-click",{itemId:b,itemType:a}),S1(a,b))};var vpa=function(a){var b=a.j;a=b.itemType;b=b.itemId;V1("paid-unsubscribe-button-click",{itemType:a,itemId:b});S1(a,b)};var V1=function(a,b){var c={};g.Cb(c,{label:a,pageName:g.x("PAGE_NAME")});b&&g.Cb(c,b);c=g.Zc(c);g.Ji("ypc-checkout",c,void 0)};
var X1=function(a,b,c){this.l=a;Y1&&(this.C=b);this.L=c||window;this.A=this.L.location;this.G=this.A.href.split("#")[0];this.D=(0,g.q)(this.K,this)};var Z1=function(a){a=a.A.href;var b=a.indexOf("#");return 0>b?"":a.substring(b+1)};var $1=function(a,b){var c=a.G+"#"+b,d=a.A.href;d!=c&&d+"#"!=c&&g.cc(a.A,c)};
var a2=function(a,b){var c=a.C.contentWindow.document,d="#"+g.va(b);if((c.body?c.body.innerHTML:"")!=d){var e=g.ac(g.Yb("title",{},window.document.title||""),g.Yb("body"));c.open("text/html");c.write(g.Vb(e));g.eh(c.body,d);c.close()}};var b2=function(a,b){this.A=a;this.B=b||window;this.l=this.B.location;this.D=(0,g.q)(this.L,this)};var wpa=function(){var a=c2("state");a.setEnabled.call(a,!0,!0)};var xpa=function(a){var b=c2();b.replace.call(b,a,window.history&&window.history.state,!0)};
var c2=function(a){a=a||"hash";var b=g.n("yt.history.instance_");b||("state"==a?(b=new b2(d2),b2.prototype.setEnabled=b2.prototype.Gb,b2.prototype.add=b2.prototype.add,b2.prototype.replace=b2.prototype.replace):(b=new X1(d2,g.E("legacy-history-iframe")),X1.prototype.setEnabled=X1.prototype.Gb,X1.prototype.add=X1.prototype.add,X1.prototype.replace=X1.prototype.add),e2=b,g.m("yt.history.instance_",e2,void 0));return b};var d2=function(a,b){g.B("navigate",a,b)};
var f2=function(a){var b=g.hk(window.location.href);g2&&(g.wb(a,function(a){g.zb(b,a)}),a=g.$c(window.location.href.split("?",2)[0],b),wpa(),xpa(a))};var N1=[],P1=!1;var h2=[],i2=[];var e2,j2=g.D&&8<=window.document.documentMode||g.oc&&g.sc("1.9.2")||g.qc&&g.sc("532.1"),Y1=g.D&&!j2;X1.prototype.Gb=function(a,b){this.B&&(g.M(this.B),delete this.B);this.F&&(g.Za(this.F),delete this.F);if(a){this.j=Z1(this);if(Y1){var c=this.C.contentWindow.document.body;c&&c.innerHTML||a2(this,this.j)}b||this.l(this.j);j2?this.B=g.L(this.L,"hashchange",this.D):this.F=g.Wa(this.D,200)}};
X1.prototype.K=function(){if(Y1){var a;a=(a=this.C.contentWindow.document.body)?g.vh(g.uk(a).substring(1)):"";a!=this.j?(this.j=a,$1(this,a),this.l(a)):(a=Z1(this),a!=this.j&&(this.j=a,a2(this,a),this.l(a)))}else a=Z1(this),a!=this.j&&(this.j=a,this.l(a))};X1.prototype.add=function(a,b,c){this.j=""+a;Y1&&a2(this,a);$1(this,a);c||this.l(this.j)};var g2=!!window.history.pushState&&(!g.qc||g.qc&&g.sc("534.11"));b2.prototype.Gb=function(a,b){this.C&&(g.M(this.C),delete this.C);this.F&&(g.Za(this.F),delete this.F);a&&g2&&(this.j=this.l.href,b||this.A(this.j),this.C=g.L(this.B,"popstate",this.D))};b2.prototype.L=function(a){var b=this.l.href;if((a=a.state)||b!=this.j)this.j=b,this.A(b,a)};b2.prototype.add=function(a,b,c){if(a||b)a=a||this.l.href,this.B.history.pushState(b,"",a),this.j=a,c||this.A(a,b)};
b2.prototype.replace=function(a,b,c){if(a||b)a=a||this.l.href,this.B.history.replaceState(b,"",a),this.j=a,c||this.A(a,b)};var ypa={GK:"ypc_cc",Rv:"ypc_ft",mL:"ypc_irp",uL:"ypc_ii",vL:"ypc_it"},zpa={cL:"ypc_grc",Rv:"ypc_ft"};g.tb(g.Mk({name:"www/ypc_bootstrap",deps:["www/common"],page:"feed index results watch channel playlist subscription_manager unlimited".split(" "),init:function(){P1=!0;g.F("ypc-delayedloader-target")&&O1();var a=g.hk(window.location.href),b=a.ypc_it,c=a.ypc_ii,d=a.ypc_ft||"D",e=a.ypc_irp,h=a.ypc_cc;"channel"==g.x("PAGE_NAME")&&"fan_fund"in a&&(d="T",b="U",c=g.x("CHANNEL_ID"));"channel"==g.x("PAGE_NAME")&&"ypc_cc"in a&&(b="U",c=g.x("CHANNEL_ID"));"RG"==d?(a=a.ypc_grc,f2(zpa),T1(a,d)):c&&b&&(f2(ypa),
Q1(b,c,d,e,h));h2.push(g.R(window.document.body,"click",rpa,"ypc-checkout-button"),g.R(window.document.documentElement,"click",W1,"ypc-unsubscribe-link"),g.R(window.document.documentElement,"click",W1,"ypc-unsubscribe-button"));i2.push(g.kk(g.ut,spa),g.kk(g.dG,tpa),g.kk(g.vt,upa),g.kk(g.zt,vpa))},dispose:function(){N1.length=0;g.M(h2);h2.length=0;g.jk(i2);i2.length=0}}));g.m("yt.www.ypc.bootstrap.api.loadOffers",Q1,void 0);g.m("yt.www.ypc.bootstrap.api.loadRedeemGiftOverlay",T1,void 0);})(_yt_www);
