define(function(){function a(b){var d=new RegExp("[^a-zA-Z0-9-+\\.;/=| _]+","g"),c;for(c=0;c<b.length;c++){if(b[c].match(d)!==null){return true}}return false}return{get:function(g){if(!g){return g}var f="",d=document.cookie,e=d.indexOf(g+"=");if(e>-1){var c=e+g.length,b=d.indexOf(";",c);f=(b===-1)?d.substring(c+1):d.substring(c+1,b)}return f},set:function(g,h,j){if(!g.length){return false}var b=j||{},d=h||"",f=b.domain?"; domain="+b.domain:"",i=b.path||"/";if(a([g,d,f,i])){return false}var e=new Date();e.setTime(e.getTime()+((b.expires||100)*24*60*60*1000));var c=e.toGMTString();document.cookie=g+"="+d+"; expires="+c+f+"; path="+i;return true},remove:function(f,b){if(!f.length){return false}var c=b||{},d=c.domain?"; domain="+c.domain:"",e=c.path||"/";if(a([f,d,e])){return false}document.cookie=f+'=""; expires=Thu, 01-Jan-1970 00:00:01 GMT'+d+"; path="+e;return true}}});