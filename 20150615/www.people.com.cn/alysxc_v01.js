function alysxc(u,w,h,p,d,c,b,i,r,a,t,v){//2.0.5
var o=document.getElementById(d),ad;
p=!p?'Transparent':p==1?'Opaque':'Window';
ad='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+w+'" height="'+h+'" id="f'+b+'"><param name="movie" value="'+u+'">'+((i&&t)?'<param name="flashvars" value="'+v+'='+encodeURIComponent(a)+'" />':'')+'<param name="wmode" value="'+p+'"><param name="allowscriptaccess" value="always"><embed src="'+u+'" width="'+w+'" height="'+h+'" wmode="'+p+'"'+((i&&t)?' flashvars="'+v+'='+encodeURIComponent(a)+'"':'')+' type="application/x-shockwave-flash" allowscriptaccess="always" name="f'+b+'" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object>';
o.innerHTML=(!i)?'<div style="width:'+w+'px;height:'+h+'px;padding:0;margin:0;overflow:hidden;">'+ad+'<div onclick="window.open(&quot;' +a+'&quot;)" style="position:relative;cursor:pointer;padding:0;margin:0;filter:alpha(opacity=0);-moz-opacity:0;opacity:0;background-color:tan;left:'+((r)?r[3]:0)+'px;top:'+((r)?r[0]-h:-h)+'px;z-index:1;width:'+((r)?(w-r[1]-r[3]):(w*1+4))+'px;height:'+((r)?(h-r[0]-r[2]):(h*1+4))+'px;"></div></div>':ad;
return d;}
