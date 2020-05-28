"use strict";var VData=null;(function(){function n(n){(n?addEventListener:removeEventListener)("wheel",e,{passive:false,capture:true})}function e(n){n.ctrlKey&&(n.preventDefault(),n.stopImmediatePropagation(),c(n))}function t(){var n=x.scrollWidth;A.style.height=x.scrollHeight+"px",A.style.width=n+"px",A.style.display=""}function i(n,e){var t,i;if(e.preventDefault(),VData.url){for(i in t=document.createElement("a"),n)t.setAttribute(i,n[i]);t.href=VData.url,r(t,e)}}function r(n,e){var t=document.createEvent("MouseEvents");return t.initMouseEvent("click",true,true,window,1,0,0,0,0,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(t)}function o(n,e){2===e||-2===e?n.rotate(45*e):n.zoom(e/10,true)}function u(n,e){try{n=(e||decodeURIComponent)(n)}catch(n){}return n}function a(n){var e=I("#bodyTemplate"),t=document.importNode(e.content.querySelector("#"+n),true);return document.body.insertBefore(t,e),t}function c(n){if(n.altKey)return n.stopImmediatePropagation(),i({download:VData.file||""},n);switch(VData.type){case"url":i({target:"_blank"},n);break;case"image":if(VData.error)return;m().then(w).catch(h)}}function l(n){n.preventDefault(),x.onclick&&x.onclick(n)}function f(n,e){n="number"==typeof n?["math","copy","search","ERROR","status","paste","url"][n]:n,I("#textTip").dataset.text=R("t_"+n)||n,I(".colon").dataset.colon=R("colon")+R("NS");var i=I("#textBody");return e?(i.textContent="string"!=typeof e?e.join(" "):e,x.onclick=s):i.classList.add("null"),t()}function s(n){var e;""+getSelection()||("image"===VData.type&&VData.url&&(e=navigator.clipboard)&&e.write?(null!=C?Promise.resolve(C):fetch(VData.url,{cache:"force-cache",referrer:"no-referrer"}).then(function(n){return n.blob()}).catch(function(){return d(VData.url),0}).then(function(n){return C=n})).then(function(n){return n&&e.write([new ClipboardItem({"image/png":new Blob([n],{type:"image/png"}),"text/plain":new Blob([VData.url],{type:"text/plain"})})])}).catch(function(n){console.log(n),d(VData.url)}):d("url"===VData.type?I("#textBody").textContent:VData.url,n))}function d(n,e){n&&window.VApi&&(e&&e.preventDefault(),VApi.p({H:16,s:n}))}function h(n){n&&console.log("%o",n)}function m(){var e,t,i=window.Viewer;return i?Promise.resolve(i):((function(n){if(!I('link[href="'+n+'"]')){var e=document.createElement("link");e.rel="stylesheet",e.href=n,document.head.insertBefore(e,I('link[href$="show.css"]'))}})("../lib/viewer.min.css"),(e="Viewer",t="../lib/viewer.min.js",window[e]?Promise.resolve(window[e]):window[e]=new Promise(function(n){var i=document.createElement("script");i.src=t,i.onload=function(){var t=window[e];n(t)},document.head.appendChild(i)})).then(function(e){return e.setDefaults({navbar:false,shown:function(){A.style.display="none"},viewed:function(){L&&(n(false),L(true))},hide:function(){A.style.display="",n(true),L&&L(false)}}),e}))}function w(n){var e,t=scrollX||scrollY,i=getSelection();return"Range"===i.type&&i.collapseToStart(),(e=U=U||new n(x)).isShown||e.show(),t&&scrollTo(0,0),e.viewed?(e.zoomTo(1),e):(Object.defineProperty(e,"initialImageData",{get:function(){return T},set:function(n){var e,t,i,r;T=n,U&&(r=(i=(e=U.imageData).naturalHeight*1)-e.height,e.left-=((t=1*e.naturalWidth)-e.width)/2,e.top-=r/2,e.width=t,e.height=i,e.ratio=1)}}),new Promise(function(n,t){L=function(i){L=null,i?n(e):t("failed to view the image")}}))}function g(){z&&(URL.revokeObjectURL(z),z="")}function p(){console.log("Failed to visit the predicted URL, so go back to the original version."),v(),VData.auto=false,window.onhashchange()}function v(){var n=false;return"once"===VData.auto&&(VData.auto=false,n=true),n&&b(),n}function b(n){var e,t,i=VData.type;i&&(e="#!"+i+" "+(VData.incognito?"incognito=1&":"")+(VData.file?"download="+encodeURIComponent(VData.file)+"&":"")+(VData.auto?"auto="+("once"===VData.auto?"once":1)+"&":"")+VData.original,VData.full=e,n||(t=y(e,S,true),history.replaceState(t,"","")))}function y(n,e,t){var i,r,o,u;if(-1===e)return n;if(i=[],t)n=encodeURIComponent(n);else try{n=atob(n)}catch(e){n=""}for(r=0,o=n;r<o.length;r++)i.push(o[r].charCodeAt(0));for(u=0;u<i.length;u++)i[u]=255&(i[u]^e>>>8*(3&u));if(n=String.fromCharCode.apply(String,i),t)n=btoa(n);else try{n=decodeURIComponent(n)}catch(e){n=""}return n}function k(n){return VData.full?location.href.split("#",1)[0]+VData.full:n}var I,R,_,x,A,L,U,T,S,j,z,C,P=chrome.extension&&chrome.extension.getBackgroundPage();P&&P.r&&P.r.J||(P=null),I=function(n){return document.querySelector(n)},R=chrome.i18n.getMessage,_={},x=null,A=I("#bgLink"),L=null,U=null,T=null,S=+window.name||0,j=/\.(bmp|gif|icon?|jpe?g|a?png|tiff?|webp)(?=[.\-_]|\b)/i,z="",C=null,chrome.i18n.getMessage("lang1")&&(document.title=R("vDisplay")||document.title),window.onhashchange=function(){var e,r,o,s,d,h,m,w,I,L,T,E;for(x&&(g(),Promise.resolve().then(function(){C=null}),"image"===VData.type&&(document.body.classList.remove("filled"),x.removeAttribute("src"),U&&(U.destroy(),U=null)),A.style.display="none",x.remove(),x=null,n(false)),(VData=Object.create(null)).o=k,r="",o="",!(e=location.hash)&&P&&P.l&&P.l.Yn.ie?(e=P.l.Yn.ie(),/^[^:]+[ &]data:/i.test(e)&&(S=-1),s=y(e,S=S||Math.floor(4294967296*Math.random())||3286711320,true),history.state?history.pushState(s,"",""):history.replaceState(s,"",""),window.name=""+S):e||!history.state||(S?(e=y(history.state,S,false),window.name=""+S):history.replaceState(null,"","")),VData.full=e,e.length<3||(e.startsWith("#!image")?(e=e.slice(7),r="image"):e.startsWith("#!url")&&(e=e.slice(5),r="url")),e=e.startsWith("%20")?e.slice(3):e.trim(),d=0;d=e.indexOf("&")+1;e=e.slice(d))if(m=(h=e.slice(0,d).indexOf("="))>0?e.slice(0,h):"",w=h>0?e.slice(h+1,d-1):"","download"===m)o=(o=u(w).split(/\||\uff5c| [-\xb7] /,1)[0].trim()).replace(/[\r\n"]/g,""),VData.file=o;else if(w=w.toLowerCase(),"auto"===m)VData.auto="once"===w?w:"true"===w||"false"!==w&&parseInt(w,10)>0;else{if("incognito"!==m)break;VData.incognito="true"===w||"false"!==w&&parseInt(w,10)>0}switch((e=u(e,e.includes(":")||e.includes("/")?decodeURI:null).trim())?e.toLowerCase().startsWith("javascript:")?r=e=o=VData.file="":P?(I=P.r.J(e,null,-2),P.r.Y<=2&&(e=I)):e.startsWith("//")?e="http:"+e:/^([-.\dA-Za-z]+|\[[\dA-Fa-f:]+])(:\d{2,5})?\//.test(e)&&(e="http://"+e):"image"===r&&(r=""),VData.type=r,/^data:/i.test(e)&&(e="data:"+e.slice(5)),VData.url=VData.original=e,r){case"image":VData.auto&&(L=(function(n){function e(n){try{return new URL(n)}catch(n){}return null}function t(n){try{n=decodeURIComponent(n||"")}catch(n){}return n}var i,r,o,u,a,c,l,f,s,d,h,m,w,g,p,v,b,y,k=n;if(!(i=e(n=P&&P.r.Sn(n,4)||n))||!/^(ht|s?f)tp/i.test(i.protocol))return null;if(r=i.origin,o=i.pathname,(u=i.search).length>10)for(a=0,c=u.slice(1).split("&");a<c.length;a++)if(f=(l=c[a]).split("=",1)[0],(d=s=l.slice(f.length+1)).length>7)if(!d.includes("://")&&/%(?:3[aA]|2[fF])/.test(d)&&(d=t(d).trim()),d.includes("/")&&null!=e(d)){if(/^(?:imgurl|mediaurl|objurl|origin(?:al)?|real\w*|src|url)$/i.test(f))return d;if(h=d.split("?")[0].split("/"),j.test(h[h.length-1])&&!/\bthumb/i.test(f))return d}else if("id"===f&&/&w=\d{2,4}&h=\d{2,4}/.test(u))return r+o+"?id="+s;if(m=null,(m=/[?&]s=\d{2,4}(&|$)/.exec(u))&&u.split("=").length<=3)return r+o;if(w=(u=o).lastIndexOf("/")+1,v=null,p=(g=(u=u.slice(w)).lastIndexOf("@")+1||u.lastIndexOf("!")+1)>2||j.test(u)){for(w+=g,u=u.slice(g),b=/(?:[.\-_]|\b)(?:[1-9]\d{2,3}[a-z]{1,3}[_\-]?|[1-9]\d?[a-z][_\-]?|0[a-z][_\-]?|[1-9]\d{1,3}[_\-]|[1-9]\d{1,2}(?=[.\-_]|\b)){2,6}(?=[.\-_]|\b)/gi;v=b.exec(u);m=v);m&&/.[_\-].|\d\dx\d/i.test(m[0])?(v=j.exec(u.slice(m.index+m[0].length)),y=m[0].length,v&&0===v.index&&(y+=v[0].length),u=o.slice((w+=m.index)+y),/[@!]$/.test(u||o.charAt(w-1))?u?u=u.slice(0,-1):w--:u||!v||0!==v.index||j.test(o.slice(Math.max(0,w-6),w))||(u=v[0])):(m=/\b([\da-f]{8,48})([_-][a-z]{1,2})\.[a-z]{2,4}$/.exec(u))?(w+=m.index+m[1].length,u=u.slice(m.index+m[1].length+m[2].length)):p=false}return p||g>2?p=p||0:(m=/_(0x)?[1-9]\d{2,3}(x0)?\./.exec(u))?u=u.slice(0,m.index)+u.slice(m.index+m[0].length-1):u.startsWith("thumb_")?u=u.slice(6):/^[1-9]\d+$/.test(u)&&+u>0&&+u<640?(w--,u=""):p=0,0!==p?r+o.slice(0,w)+u:k!==n?n:null})(e))&&(console.log("Auto predict a better URL:\n %o =>\n %o",e,L),e=VData.url=L),(x=a("shownImage")).onerror=function(){VData.url!==VData.original&&VData.url?p():(v(),VData.auto=false,this.onerror=this.onload=null,this.alt=VData.error=R("failInLoading")||"\xa0(fail in loading)\xa0",P&&P.l&&P.f>=60&&this.classList.add("broken"),setTimeout(t,34),this.onclick=function(n){n.ctrlKey||n.shiftKey||n.altKey||!chrome.tabs||!chrome.tabs.update?i({target:"_top"},n):chrome.tabs.update({url:VData.url})})},/[:.]/.test(e)?(x.onclick=c,x.onload=function(){var n=this.naturalWidth;if(n<12&&this.naturalHeight<12){if(VData.auto)return void p();if(n<2&&this.naturalHeight<2)return console.log("The image is too small to see."),void this.onerror(null)}VData.original=VData.url,v(),VData.url.startsWith("data:")&&!this.src.startsWith("data")&&(A.dataset.vimUrl=VData.original=VData.url=this.src,b(1)),this.onerror=this.onload=null,this.src.startsWith("blob:")||setTimeout(function(){x.src=x.src},0),t(),this.classList.add("zoom-in"),n>=.9*innerWidth&&document.body.classList.add("filled")},(function(n,e){var t,i=new Text,r=document.body,o=function(){e.removeEventListener("load",o),e.removeEventListener("error",o),clearInterval(t),i.remove(),t=0};e.addEventListener("load",o,true),e.addEventListener("error",o,true),(VData.incognito||P.l.de("showInIncognito")||n.startsWith("data:"))&&/^(ht|s?f)tp|^data:/i.test(n)&&"cache"in Request.prototype?(g(),r.replaceChild(i,e),Promise.resolve(_[n]||fetch(n,{cache:"no-store",referrer:"no-referrer"}).then(function(n){return n.blob()})).then(function(e){return _[n]=e,z=URL.createObjectURL(C=e)},function(){return n}).then(function(n){e.src=n,r.replaceChild(e,i)})):e.src=n,t=setInterval(function(){e.scrollHeight>=24||e.scrollWidth>=80?o():i.parentNode||(r.insertBefore(i,e),i.data=R("loading")||"loading\u2026")},400)})(e,x)):(e=VData.url="",x.onerror(null),x.alt=VData.error=R("none")||"\xa0(null)\xa0"),o&&(VData.file=o=(function(n){var e,t,i,r;if(n&&!/.\.[a-z]{3,4}\b/i.test(n)){if(e=j.exec(VData.url))return n+e[0];if((t=C?C.type.toLowerCase():"").startsWith("image/"))for(r in i={jpeg:"jpg",png:0,bmp:0,svg:0,gif:0,tif:0,ico:0})if(i.hasOwnProperty(r)&&t.includes(r))return i[r]||"."+r}})(o)||o,(T=o.split(/[/\\]+/)).length>1&&x.setAttribute("download",T[T.length-1]),x.alt=o,x.title=o),n(true);break;case"url":if(x=a("shownText"),e&&P){if(E=null,e.startsWith("vimium://")&&(E=P.r.Z(e.slice(9),1,true)),"string"==typeof(E=null!==E?E:P.r.J(e,null,-1)))E=P.r.an(E),E=P.r.En(E);else{if(E instanceof P.Promise){E.then(function(n){f(n[1],n[0]||n[2]||"")});break}if(E instanceof P.Array){f(E[1],E[0]);break}}e=E}"string"==typeof e&&(e=(function n(e){var t=e.split(":",1)[0];switch(t.toLowerCase()){case"thunder":case"flashget":case"qqdl":e=e.slice(t.length+3).split("&",1)[0];break;default:return""}try{e=atob(e)}catch(n){return""}return e.startsWith("AA")&&e.endsWith("ZZ")&&(e=e.slice(2,-2)),e.startsWith("[FLASHGET]")&&e.endsWith("[FLASHGET]")&&(e=e.slice(10,-10)),n(e)||e})(e)||e),f(r,e);break;default:e="",(x=a("shownImage")).src="../icons/icon128.png",A.style.display="none",n(true)}A.dataset.vimUrl=e,o?(A.dataset.vimText=o,A.download=o):(A.removeAttribute("data-vim-text"),A.removeAttribute("download")),A.onclick=x?l:c},window.onhashchange(),window.onpopstate=function(){window.onhashchange()},window.onunload=g,document.addEventListener("keydown",function(n){if(("image"!==VData.type||!(function(n){var e,t,i,u;if(VData.error)return false;if(e=n.keyCode,"space"===(i=(t=window.VApi&&VApi.z?VApi.m({c:" ",e:n,i:e},8):32===e?"space":13===e?"enter":"").slice(t.lastIndexOf("-")+1)||t&&"-")||"enter"===i)return n.preventDefault(),"enter"===i&&U&&U.isShown&&!U.played?U.play(true):U&&U.isShown||r(x,n),true;switch(u=0,t){case"c-=":case"m-=":case"+":case"=":case"up":u=1;break;case"left":u=-2;break;case"right":u=2;break;case"c--":case"m--":case"-":case"down":u=-1;break;default:return false}return n.preventDefault(),n.stopImmediatePropagation(),U&&U.viewed?o(U,u):m().then(w).then(function(n){o(n,u)}).catch(h),true})(n))&&(n.ctrlKey||n.metaKey)&&!n.altKey&&!n.shiftKey&&!n.repeat){var e=String.fromCharCode(n.keyCode);if("S"===e)return i({download:VData.file||""},n);if("C"!==e)return"A"===e?(function(n){"image"===VData.type&&(VData.error||U&&U.isShown?n.preventDefault():x.classList.toggle("invert"))})(n):void 0;s(n)}})})();