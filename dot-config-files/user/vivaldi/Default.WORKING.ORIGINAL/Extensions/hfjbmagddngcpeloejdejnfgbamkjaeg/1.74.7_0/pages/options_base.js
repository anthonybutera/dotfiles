"use strict";var n,i,s,u,o,l,h,p,m,x;n=/<(?!<)(?:a-)?(?:c-)?(?:m-)?(?:s-)?(?:[a-z][\da-z]+|[^\sA-Z])>|\S/g,i=function(t,n){var e=function(){this.constructor=t};e.prototype=n.prototype,t.prototype=new e},s=function(t,n,e,i){var s,u=0,r=function(){var o=Date.now()-s;if(!(o<n&&o>=0))return u=0,s!==i?t.call(e):void 0;u=setTimeout(r,n-o)};return i=i?1:0,function(){if(s=Date.now(),!u)return u=setTimeout(r,n),i?(i=s,t.call(e)):void 0}},u=function(t){return document.querySelector(t)},o=chrome.extension.getBackgroundPage(),l=o.Settings,h=1,p=o.ChromeVer,m=(function(){function t(t,n){this.Ci=t,this.th=t.id,this.zu=this.nh=null,this.eh=true,this.th in l.Xa&&(n=this.ih.bind(this,n)),this.sh(),this.nh=s(n,330,this,1)}return t.prototype.sh=function(){return this.eh=true,this.uh(this.zu=l.ic(this.th))},t.prototype.rh=function(t,n,e){var i=this.oh;return n?(e=i||!e?JSON.stringify(i?i.ah(t):t):e,o.JSON.parse(e)):i?i.ah(t):t},t.prototype.ch=function(){return true},t.prototype.lh=function(){var n=this.hh(),e="object"===typeof n,i=e?JSON.stringify(this.zu):this.zu,s=e?JSON.stringify(n):n;s!==i&&(i=s,n=this.rh(n,e,e?s:""),e&&(s=JSON.stringify(n))===JSON.stringify(l.oc[this.th])&&(n=l.oc[this.th]),l.uc(this.th,n),this.zu=n=l.ic(this.th),this.eh=true,i!==(e?JSON.stringify(n):n)&&this.uh(n,true),this.th in l.Xa&&t.fh.push(this.th),this.dh&&this.dh())},t.ph=function(t,n){return JSON.stringify(t)===JSON.stringify(n)},t.vh=Object.create(null),t})(),(x=(function(t){function e(n,i){var s=t.call(this,n,i)||this;return s.bh=m.ph,l.bc("exclusionTemplate",function(){return s.Ci.innerHTML=l.J.exclusionTemplate,s.xh=u("#exclusionRuleTemplate").content.firstChild,s.gh=s.Ci.getElementsByTagName("tbody")[0],s._s=[],s.sh=t.prototype.sh,s.sh(),s.gh.addEventListener("input",e.wh),s.gh.addEventListener("input",s.nh),s.gh.addEventListener("click",function(t){return s.yh(t)}),u("#exclusionAddButton").onclick=function(){return s.Oh("")},s.fl()}),s}return i(e,t),e.prototype.sh=function(){},e.prototype.Sh=function(t){},e.wh=function(t){var n=t.target.vnode;n&&(n.Rh=true)},e.prototype.Oh=function(t){this.Nh(this.gh,{pattern:t,passKeys:""}),this._s[this._s.length-1].kh.focus(),t&&this.nh(),this.Sh(1)},e.prototype.uh=function(t){if(this.gh.textContent="",this._s=[],t.length<=0);else if(1===t.length)this.Nh(this.gh,t[0]);else{var n=document.createDocumentFragment();t.forEach(this.Nh.bind(this,n)),this.gh.appendChild(n)}return this.Sh(t.length)},e.prototype.Jh=function(t){return true},e.prototype.Nh=function(t,n){var e,i,s,u,r,o=n.pattern,a=n.passKeys,c={Ch:{pattern:o,passKeys:a},Rh:false,Th:false,kh:null,$h:null};this.Jh(o)?(i=(e=document.importNode(this.xh,true)).querySelector(".pattern"),s=e.querySelector(".passKeys"),u=a.trimRight(),i.value=o,o&&(i.placeholder=""),s.value=u,u&&(s.placeholder=""),(r=c).Th=true,r.kh=i,r.$h=s,i.vnode=r,s.vnode=r,this._s.push(r),t.appendChild(e)):this._s.push(c)},e._h=function(t){var n=t.placeholder;n&&(t.title="Example: "+n,t.placeholder="")},e.prototype.yh=function(t){var n,e=t.target;if(e.classList.contains("exclusionRemoveButton"))return(e=e.parentNode.parentNode).classList.contains("exclusionRuleInstance")?(n=e.querySelector(".pattern").vnode,e.remove(),this._s.splice(this._s.indexOf(n),1),this.nh(),this.Sh(0)):void 0},e.prototype.hh=function(t){var e,i,s,u,r,a,c,l,h=[];for(t=true===t,e=0,i=this._s;e<i.length;e++)s=i[e],t&&!s.Th||(s.Rh?(u=s.kh.value.trim())&&(r=false,a=s.$h.value,":"===u[0]||(this.mh.test(u)?"^"!==u[0]&&(r=u.indexOf("/",u.indexOf("://")+3)<0,u=(-1===u.indexOf("://")?"^https?://":"^")+("*"!==u[0]||"."===u[1]?"*"!==(u=u.replace(/\./g,"\\."))[0]?u.replace("://*\\.","://(?:[^./]+\\.)*?"):u.replace("*\\.","(?:[^./]+\\.)*?"):"[^/]"+u)):(r=u.indexOf("/",u.indexOf("://")+3)<0,u=(-1===(u=u.replace(this.jh,"$1")).indexOf("://")?":http://":":")+u)),r&&(u+="/"),a&&((c=(a=o.Utils.Fa(a)).match(n))&&((l="^"===c[0]&&c.length>1)&&c.shift(),c.sort(),l?c.unshift("^"):"^"===c[0]&&(c.shift(),c.push("^"))),a=c?c.join(" ")+" ":""),this.Kh(s,{pattern:u,passKeys:a}),h.push(s.Ch)):h.push(s.Ch));return h},e.prototype.Kh=function(t,n){!t.Ch.passKeys&&n.passKeys&&e._h(t.$h),t.Ch=n,t.Rh=false},e.prototype.fl=function(){},e})(m)).prototype.mh=/^[\^*]|[^\\][$()*+?\[\]{|}]/,x.prototype.jh=/\\(.)/g,(p<48||devicePixelRatio<2&&p>=61)&&(function(){var t=document.createElement("style"),n=devicePixelRatio,e=p>=61&&n>=1,i=e||p>=48?1/n:1;i=(""+(i+=999e-8)).substring(0,7).replace(/\.?0+$/,""),t.textContent=e?"input, textarea { border-width: "+i+"px; }":"* { border-width: "+i+"px !important; }",document.head.appendChild(t)})(),u(".version").textContent=l.hn.Tc,-1!==location.pathname.toLowerCase().indexOf("/popup.html")&&o.Utils.ba("Exclusions").then((function(t){return function(){o.Utils.ba("Commands"),chrome.tabs.query({currentWindow:true,active:true},t)}})(function(t){function n(t){var n,e,i,s,u,r;for((n=(t=t.trim())&&"^"===t[0])&&(t=t.substring(1).trimLeft()),e=Object.create(null),i=0,s=t.split(" ");i<s.length;i++)r=(u=s[i]).charCodeAt(0),e[u=60===r?"&lt;":62===r?"&gt;":38===r?"&amp;":u]=1;return(n?"^ ":"")+Object.keys(e).join(" ")}function e(t){var e,i,s,u,r=d.v(g,p,D.hh(true));r&&(r=n(r)),t&&(S=N>=2?r:null),e=3===N,N=2,i=r===S,s=!!r&&r.length>2&&"^"===r[0],u='<span class="Vim">Vim</span>ium <span class="C">C</span> '+(e?r?"becomes to "+(s?"only hook":"exclude"):"becomes":(i?"keeps to ":"will ")+(r?s?"only hook":"exclude":"be"))+(r?': <span class="state-value code">'+(s?r.substring(2):r)+"</span>":':<span class="state-value fixed-width">'+(null!==r?"disabled":" enabled")+"</span>"),-1!==R&&!e&&i&&(u+=" (on this tab, "+(0===R?"enabled":"disabled")+" for once)"),m.innerHTML=u,b.disabled=i,b.firstChild.data=i?"No Changes":"Save Changes"}function s(){if(!b.disabled){var t=d.e;o.Backend.Dc("reset",p.t),D.lh(),setTimeout(function(){d.e=t},50),N=3,e(true),b.firstChild.data="Saved",b.disabled=true,O=true}}function r(t,n){n&&n.preventDefault(),o.Backend.Dc(t.toLowerCase(),p.t),window.close()}var a,c,h,f,d,p,v,m,b,g,w,y,O,S,R,N,k,J,C,T,$,_,j,K,D,E=t[0],z=o.Backend.mc(E.id),A=u("#blocked-msg"),B=!z&&!(E&&E.url&&"loading"===E.status&&(0===E.url.lastIndexOf("http",0)||0===E.url.lastIndexOf("ftp",0)));if(B?((a=document.body).textContent="",A.style.display="",A.querySelector(".version").textContent=l.hn.Tc,c=A.querySelector("#refresh-after-install"),E&&E.url&&(0===E.url.lastIndexOf("http",0)||0===E.url.lastIndexOf("ftp",0))||c.remove(),a.style.width="auto",a.appendChild(A),document.documentElement.style.height=""):(A.remove(),A=null),(h=u(".options-link")).href!==(f=l.hn.jc)&&(h.href=f),h.onclick=function(t){t.preventDefault();var n=o.Object.create(null);n.u=l.hn.jc,o.Backend.fi(n),window.close()},!B){for(d=o.Exclusions,v=(p=z?z[0].s:{i:0,a:E.incognito,s:0,f:0,t:E.id,u:E.url}).i&&((o.Backend.mc(E.id,0)||{}).s||{}).u||"",m=u("#state"),b=u("#saveOptions"),g=p.u,w=function(){null!=D&&(w=null,e(true),document.documentElement.style.height="")},y=(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return i(n,t),n.prototype.Oh=function(){t.prototype.Oh.call(this,n.Dh())},n.prototype.Jh=function(t){if(!t)return false;var n=d.e[t];return!("string"===typeof n?g.lastIndexOf(n,0)||v&&v.lastIndexOf(n,0):!n.test(g)||v&&!n.test(v))},n.prototype.uh=function(e){if(t.prototype.uh.call(this,e),n.prototype.Jh=x.prototype.Jh,N<=0){var i=this._s.filter(function(t){return t.Th}),s=i.length>0;s?i[0].$h.focus():this.Oh(),N=s?2:1}},n.prototype.Kh=function(n,e){var i,s,u=e.pattern,r=n.Ch.pattern===u;t.prototype.Kh.call(this,n,e),r||(i=d.r(u),s=n.kh,("string"===typeof i?!g.lastIndexOf(i,0):i.test(g))?s.title=s.style.color="":(s.style.color="red",s.title="Red text means that the pattern does not\nmatch the current URL."))},n.Dh=function(){var t=0===g.lastIndexOf("https:",0)?"^https?://"+g.split("/",3)[2].replace(/[.[\]]/g,"\\$&")+"/":/^[^:]+:\/\/./.test(g)&&g.lastIndexOf("file:",0)<0?":"+g.split("/",3).join("/")+"/":":"+g;return n.Dh=function(){return t},t},n})(x),O=true,S=null,R=-1,N=0,b.onclick=s,document.addEventListener("keyup",function(t){if(13===t.keyCode&&(t.ctrlKey||t.metaKey)&&(setTimeout(window.close,300),!O))return s()}),k=l.ic("exclusionRules"),J=d.e=o.Object.create(null),C=d.Hc,T=0,$=k.length;T<$;T++)J[k[T].pattern]=C[2*T];j=2!==(_=z?z[0].s:{s:0,f:0}).s?"Disable":"Enable",R=1&_.f?_.s:-1,(K=u("#toggleOnce")).textContent=j+" for once",K.onclick=r.bind(null,j),1&_.f&&((K=K.nextElementSibling).classList.remove("hidden"),(K=K.firstElementChild).onclick=r.bind(null,"Reset")),D=null,y.prototype.fl=w,D=new y(u("#exclusionRules"),function(){if(O){O=false;var t=u("#helpSpan");t&&(t.nextElementSibling.style.display="",t.remove()),b.removeAttribute("disabled"),b.firstChild.data="Save Changes"}w||e(false)}),N>0&&w(),window.onunload=function(){d.e=null,o.Utils.Ga()}}}));