"use strict";var r,e={k:function(){var t=document.createElement("textarea");return t.style.position="absolute",t.style.left="-99px",t.style.width="0",this.k=function(){return t},t},w:/[ \t]+(\r\n?|\n)|\r\n?/g,h:function(t){var n=(t=t.replace(Utils.vr," ").replace(this.w,"\n")).charCodeAt(t.length-1);return 32!==n&&9!==n||((n=t.lastIndexOf("\n")+1)?t=t.substring(0,n)+t.substring(n).trimRight():32!==(n=t.charCodeAt(0))&&9!==n&&(t=t.trimRight())),t},q:function(t){return t=t.replace(Utils.vr," "),Utils.C(),t},Zc:Settings.hn.Sc?function(){var t,n=this.k();return n.maxLength=8192,document.documentElement.appendChild(n),n.focus(),document.execCommand("paste"),t=n.value.substring(0,8192),n.value="",n.remove(),n.removeAttribute("maxlength"),this.q(t)}:function(){return null}},v={H:function(t,n){return"vimiumContent|"+t+(n?"|"+n:"")},Ac:function(t,n){return chrome.contentSettings?!chrome.contentSettings[t]||/^[A-Z]/.test(t)?(Backend.Oc("Unknown content settings type: "+t),true):!(Utils.qo.test(n)&&!n.startsWith(f))&&(Backend.Ac("change its content settings"),true):(Backend.Oc("This version of Vimium C has no permissions to set CSs"),true)},ts:function(t,n){var e,i,r,o,u,s,l,c,a,f;if(t.startsWith("file:"))return(e=ChromeVer>=56?1:n>1?2:0)?(Backend.Ac(1===e?"set file CSs since Chrome 56":"set CS of file folders"),[]):[t.split(/[?#]/,1)[0]];if(t.startsWith("ftp:"))return Backend.Ac("set FTP pages' content settings"),[];if(i=t.match(/^([^:]+:\/\/)([^\/]+)/),r=Utils.No.exec(i[2]),o=[(t=i[1])+(u=r[3]+(r[4]||""))+"/*"],n<2||Utils.na(r[3],0))return o;for(r=null,l=(s=Utils.ua(u))[0],c=s[1],a=Math.min(l.length-c,n-1),f=0;f<a;f++)u=u.substring(l[f].length+1),o.push(t+u+"/*");return o.push(t+"*."+u+"/*"),a===l.length-c&&"http://"===t&&o.push("https://*."+u+"/*"),o},ns:function(t,n){if(chrome.contentSettings){var e=chrome.contentSettings[t];e&&e.clear&&(n?e.clear({scope:n.a?"incognito_session_only":"regular"}):(e.clear({scope:"regular"}),e.clear({scope:"incognito_session_only"},Utils.T),localStorage.removeItem(v.H(t))))}},Jc:function(t,n){var e=""+t.type;if(!this.Ac(e,"https://a.cc/"))return this.ns(e,n.s),Backend.Oc(e+" content settings have been cleared.")},Yc:function(t,n,e){var i=""+n.type,r=e[0];return n.incognito?this.es(t,i,r):this.rs(t,i,r,"reopen"===n.action)},rs:function(t,n,e,i){var r=Utils.ia(e.url);v.Ac(n,r)||chrome.contentSettings[n].get({primaryUrl:r,incognito:e.incognito},function(o){v.os(n,r,t,{scope:e.incognito?"incognito_session_only":"regular",setting:o&&"allow"===o.setting?"block":"allow"},function(t){if(!t){if(!e.incognito){var r=v.H(n);"1"!==localStorage.getItem(r)&&localStorage.setItem(r,"1")}return e.incognito||i?(++e.index,Backend.Kc(e)):e.index>0&&chrome.sessions?Backend.Kc(e,true):void chrome.windows.getCurrent({populate:true},function(t){return t&&"normal"===t.type?Backend.Kc(e,t.tabs.length>1&&!!chrome.sessions):chrome.tabs.reload(Utils.T),Utils.T()})}})})},es:function(t,n,e){if(Settings.hn.Cc)return Backend.Ac("change incognito settings");var i=Utils.ia(e.url);v.Ac(n,i)||chrome.contentSettings[n].get({primaryUrl:i,incognito:true},function(r){return Utils.T()?(chrome.contentSettings[n].get({primaryUrl:i},function(r){if(!r||"allow"!==r.setting){var o={type:"normal",incognito:true,focused:false,url:"about:blank"};0,chrome.windows.create(o,function(r){var o=r.tabs[0].id;return v.us(t,n,e,i,r.id,true,function(){chrome.tabs.remove(o)})})}}),Utils.T()):r&&"allow"===r.setting&&e.incognito?v.ss(e):void chrome.windows.getAll(function(o){if((o=o.filter(function(t){return t.incognito&&"normal"===t.type})).length){if(r&&"allow"===r.setting)return v.ss(e,o[o.length-1].id);var u=e.windowId,s=e.incognito&&o.some(function(t){return t.id===u});return v.us(t,n,e,i,s?void 0:o[o.length-1].id)}console.log("%cContentSettings.ensure","color:red","get incognito content settings",r," but can not find an incognito window.")})})},us:function(t,n,e,i,r,o,u){var s=v.ls.bind(null,e,r,u);return v.os(n,i,t,{scope:"incognito_session_only",setting:"allow"},o&&r!==e.windowId?function(t){if(t)return s(t);chrome.windows.get(e.windowId,s)}:s)},os:function(t,n,e,i,r){var o,u,s,l,c=false,a=chrome.contentSettings[t],f=function(){var t=Utils.T();return t&&console.log("[%o]",Date.now(),t),c?t:(--h,((c=!!t)||0===h)&&setTimeout(r,0,c),t)},m=v.ts(n,0|e),h=m.length;if(h<=0)return r(true);for(o=0,u=m;o<u.length;o++)s=u[o],(l=Utils.g(Object.create(null),i)).primaryPattern=s,a.set(l,f)},ls:function(t,n,e,i){true!==i&&v.ss(t,n),e&&e(),true!==i&&n&&chrome.windows.update(n,{focused:true,state:i?i.state:void 0})},ss:function(t,n){t.active=true,"number"!==typeof n||t.windowId===n?++t.index:(t.index=void 0,t.windowId=n),Backend.Kc(t)}},c={J:localStorage,cs:null,as:function(){var t=Object.create(null);return t.setItem=function(t,n){this[t]=n},t},fs:function(n,e,i){var r,o=n.l,u=n.n,s=n.u,l=n.s,c=e?this.cs||(t.ms(),this.cs=this.as()):this.J;o&&0===l[0]&&0===l[1]&&(2===l.length?(r=s.indexOf("#"))>0&&r<s.length-1&&l.push(s.substring(r)):(l[2]||"").length<2&&l.pop()),c.setItem(this.Zu(u,o?s:""),JSON.stringify(o?l:{tabId:i,url:s,scroll:l}))},Qu:function(t,n){t.postMessage({N:10,S:null,c:6,n:1,a:n})},eo:function(t,n){var e=n.s.t;if(t.s)return c.fs(t,n.s.a,e);(n=Backend.mc(e,0)||n)&&n.postMessage({N:11,n:t.n})},ol:function(t,n){var e,i,r,o,u,s,l,a=t.l,f=t.n,m=c.Zu(f,a?t.u:""),h=c.cs&&n.s.a&&c.cs[m]||c.J.getItem(m);return a&&((e=h?JSON.parse(h):null)||(r=void 0,o=void 0,(i=t.o)&&(r=+i.x)>=0&&(o=+i.y)>=0&&(t.s=e=[r,o,i.h],c.fs(t,n.s.a))),e)?c.Qu(n,{n:f,s:e,l:true}):h?(s=+(u=JSON.parse(h)).tabId,(l={u:u.url,s:u.scroll,t:u.tabId,n:f,p:true}).p=false!==t.p&&0===l.s[1]&&0===l.s[0]&&!!Utils.Aa(l.u),s>=0&&Backend.mc(s)?void chrome.tabs.get(s,c.hs.bind(l)):Backend.fi(l)):Backend.Oc((a?"Local":"Global")+" mark not set : ' "+f+" '.")},hs:function(t){var n=t.url.split("#",1)[0];return n===this.u||this.p&&this.u.startsWith(n)?(Backend.al({s:t.id}),c.Gc(this,t)):Backend.fi(this)},Zu:function(t,n){return(n?"vimiumMark|"+Utils.$a(n.split("#",1)[0]):"vimiumGlobalMark")+"|"+t},Gc:function(t,n){var e=n.id,i=Backend.mc(e,0);if(i&&c.Qu(i,{n:t.n,s:t.s}),t.t!==e&&t.n)return c.fs(t,2===d.qc,e)},el:function(t){var n,e,i,r,o,u,s,l=c.Zu("",t),a=[],f=c.J;for(n=0,e=f.length;n<e;n++)(i=f.key(n)).startsWith(l)&&a.push(i);for(r=0,o=a;r<o.length;r++)f.removeItem(i=o[r]);if(u=a.length,c.cs)for(i in s=c.cs)i.startsWith(l)&&(u++,delete s[i]);return Backend.Oc(u+" "+(t?"local":"global")+" mark"+(1!==u?"s have":" has")+" been removed.")}},b={cn:"findModeRawQueryList",_s:null,ds:null,Dn:0,$i:function(){var t=Settings.ic(this.cn);this._s=t?t.split("\n"):[],this.$i=null},Qi:function(n,e,i){var r,o,u=b;return u.$i&&u.$i(),r=n?u.ds||(t.ms(),u.ds=u._s.slice(0)):u._s,e?n?u.vs(e,r,true):((o=u.vs(e,r))&&Settings.uc(u.cn,o),u.ds?u.vs(e,u.ds,true):void 0):r[r.length-(i||1)]||""},vs:function(t,n,e){var i=n.lastIndexOf(t);if(i>=0){if(i===n.length-1)return;n.splice(i,1)}else n.length>=50&&n.shift();if(n.push(t),!e)return n.join("\n")},nl:function(t){t?this.ds&&(this.ds=[]):(this.$i=null,this._s=[],Settings.uc(this.cn,""))}},t={gs:false,Dn:0,ms:function(){this.gs||(chrome.windows.onRemoved.addListener(this.ps),this.gs=true)},ps:function(){t.gs&&(t.Dn=t.Dn||setTimeout(t.Us,34))},Us:function(){var n,e,i;if(t.Dn=0,ChromeVer>=52){for(i in n=false,e=Backend.mc())if(e[+i][0].s.a){n=true;break}if(n)return}chrome.windows.getAll(function(n){n.some(function(t){return t.incognito})||t.Ss()})},Ss:function(){b.ds=null,c.cs=null,chrome.windows.onRemoved.removeListener(this.ps),this.gs=false}},d={Qc:Object.create(null),ho:chrome.tabs.TAB_ID_NONE||-1,Bc:chrome.windows.WINDOW_ID_NONE||-1,qc:1,Xc:null};setTimeout(function(){function t(){var t,n=u;for(t in n)n[t]<=896?delete n[t]:n[t]-=895;l=128}function n(n){var e=performance.now();e-c>666&&(u[d.ho]=++l,1023===l&&t()),d.ho=n.tabId,c=e}function e(t){if(!t)return Utils.T();var e=t[0];return e?(d.Bc=e.windowId,d.qc=e.incognito?2:1,n({tabId:e.id})):void 0}var i,r,o,u=d.Qc,s=chrome.windows.WINDOW_ID_NONE||-1,l=1,c=0;for(chrome.tabs.onActivated.addListener(n),chrome.windows.onFocusChanged.addListener(function(t){t!==s&&chrome.tabs.query({windowId:t,active:true},e)}),chrome.tabs.query({currentWindow:true,active:true},function(t){c=performance.now();var n=t&&t[0];if(!n)return Utils.T();d.ho=n.id,d.Bc=n.windowId,d.qc=n.incognito?2:1}),d.Xc=function(t,n){return u[n.id]-u[t.id]},i=0,r=["images","plugins","javascript","cookies"];i<r.length;i++)o=r[i],null!=localStorage.getItem(v.H(o))&&setTimeout(v.ns,100,o)},120),Utils.wa=function(t){t=e.h(t);var n=e.k();n.value=t,document.documentElement.appendChild(n),n.select(),document.execCommand("copy"),n.remove(),n.value="",Utils.C()},Backend.fl(),chrome.extension.isAllowedIncognitoAccess&&chrome.extension.isAllowedIncognitoAccess(function(t){Settings.hn.Cc=false===t}),setTimeout(function(){function t(t){if(null==t.textSplit){t.title=n(t.title);var e=t.text,r=i(e);t.text=e.length!==t.url.length?r:"",t.textSplit=s(r,o(r),e.length-r.length,_?v-13-Math.min(t.title.length,40):v)}else t.text===t.url&&(t.text="")}function n(t){var n=t.length>v+40;return n&&(t=Utils.j(t,0,v+39)),e(n?t+"\u2026":t,o(t))}function e(t,n){var e,i,r,o,u;if(0===n.length)return Utils.z(t);for(e="",i=0,r=0;r<n.length;r+=2)o=n[r],u=n[r+1],e+=Utils.z(t.substring(i,o)),e+="<match>",e+=Utils.z(t.substring(o,u)),e+="</match>",i=u;return e+Utils.z(t.substring(i))}function i(t){var n=Utils.Aa(t);return!n||n>=t.length?t:t.substring(n,t.length-+(t.endsWith("/")&&!t.endsWith("://")))}function o(t){var n,e,i,r,o,s,l,c,a,f,m,h=[];for(n=0,e=b.length;n<e;n++)for(i=0,r=0,o=void 0,l=(s=t.split(P.bs[n])).length-1,c=b[n].length;i<l;i++,r=o)o=(r+=s[i].length)+c,h.push([r,o]);if(0===h.length)return h;if(1===h.length)return h[0];for(h.sort(u),a=h[0],n=1,f=1,e=h.length;f<e;f++)a[n]>=(m=h[f])[0]?a[n]<m[1]&&(a[n]=m[1]):(a.push(m[0],m[1]),n+=2);return a}function u(t,n){return t[0]-n[0]}function s(t,n,e,i){var r,o,u,s,l,c="",a=t.length,f=a;if(a<=i||(e>1?f=t.indexOf("/")+1||a:(f=t.indexOf(":"))<0?f=a:Utils.qo.test(t.substring(0,f+3).toLowerCase())?f=t.indexOf("/",f+4)+1||a:f+=22),f<a)for(r=n.length,o=a+8;(r-=2)>=0&&o>=f;o=n[r])if(u=n[r+1],(s=o-20-Math.max(u,f))>0&&(a-=s)<=i){f=u+(i-a);break}for(a=0,r=0;a<i&&r<n.length;r+=2)(s=(o=n[r])-20-(l=Math.max(a,f)))>0?(i+=s,c+=Utils.z(Utils.j(t,a,l+11)),c+="\u2026",c+=Utils.z(Utils.P(t,o-8,o))):a<o&&(c+=Utils.z(t.substring(a,o))),a=n[r+1],c+="<match>",c+=Utils.z(t.substring(o,a)),c+="</match>";return t.length<=i?c+Utils.z(t.substring(a)):c+Utils.z(Utils.j(t,a,i-1>a?i-1:a+10))+"\u2026"}function l(t){return N.ks(t.text,t.title)}function c(t,n,e){var i=N.ys(e),r=N.ks(t,n);return i<=r?r:(r+i)/2}var a=0,f=0,m=null,h=false,_=false,v=0,g=0,p=0,U=0,S=0,b=[""],k="",y="",w=false,T="",x=null,C=true,B=function(t,n,e,i,r,o){this.type=t,this.url=n,this.text=e,this.title=i,this.relevancy=r(this,o)},O={ws:[],Ts:[],xs:null,Cs:"",Bs:0,Ai:0,tl:function(t,n){if(0===b.length){if(D.Os([]),0!==n)return}else{if(2===O.Ai)return O.Ms();O.xs=t}if(0===O.Ai)return O.js()},Is:function(t){return 47===t.charCodeAt(0)},Ms:function(){var t,e,i,r,o,s,l,c,f=b.some(this.Is),m=this.ws,h=m.length,_=[];for(t=0;t<h;t++)N.Rs((e=m[t]).text,f?e.path:e.title)&&(C||e.visible)&&_.push([-N.ks(e.text,e.title),t]);for(U+=_.length,1!==a&&0!==S||(_.sort(u),S>0?(_=_.slice(S,S+g),S=0):_.length>g&&(_.length=g)),i=0,r=function(){return i},o=[],s=0,l=_;s<l.length;s++)i=-(t=l[s])[0],c=new B("bookm",(e=m[t[1]]).url,e.text,f?e.path:e.title,r),o.push(c),null!==e.jsUrl&&(c.url=e.jsUrl,c.title=n(c.title),c.textSplit="javascript: \u2026",c.text=e.jsText);return D.Os(o)},Ds:function(){var t=chrome.bookmarks,n=O.Es,e=O.Ns;t.onCreated&&(t.onCreated.addListener(n),t.onRemoved.addListener(e),t.onChanged.addListener(e),t.onMoved.addListener(n),t.onImportBegan&&t.onImportBegan.addListener(function(){chrome.bookmarks.onCreated.removeListener(O.Es)}),t.onImportEnded&&t.onImportEnded.addListener(function(){var t=O.Es;chrome.bookmarks.onCreated.addListener(t),t()}))},js:function(){O.Ai=1,O.Ni&&(clearTimeout(O.Ni),O.Ni=0),chrome.bookmarks.getTree(O.Ps.bind(O))},Ps:function(t){var n,e=this;if(e.Ai=2,e.ws=[],e.Ts=[],t.forEach(e.As,e),n=e.xs,e.xs=null,setTimeout(function(){return L.Vs(O.ws)},50),e.Ds&&(setTimeout(e.Ds,0),e.Ds=null),n&&!n.o)return e.Ms()},As:function(t){var n,e,i,r,o=O,u=t.title,s=t.id,l=o.Cs+"/"+(u||s);if(t.children)return o.Ts.push(s),n=o.Cs,2<++o.Bs&&(o.Cs=l),t.children.forEach(o.As,o),--o.Bs,void(o.Cs=n);r=(e=t.url).startsWith(i="javascript:"),o.ws.push({id:s,path:l,title:u,text:r?i:e,visible:x?V.Ls(e,u):1,url:r?i:e,jsUrl:r?e:null,jsText:r?Utils.Jo(e):null})},Ni:0,Ws:0,Fs:false,Js:function(){var t=O,n=performance.now()-t.Ws;0===t.Ai&&(n>=6e4||n<-5e3?(t.Ni=t.Ws=0,t.Fs=false,t.js()):(t.ws=[],t.Ts=[],t.Ni=setTimeout(t.Js,3e4)))},Es:function(){O.Ws=performance.now(),O.Ai<2||(O.Ni=setTimeout(O.Js,6e4),O.Ai=0)},Ns:function(t,n){for(var e,i,r,o,u,s,l,c=O,a=c.ws,f=a.length,m=n&&n.title,h=0;h<f&&a[h].id!==t;h++);if(h<f)return i=(e=a[h]).url,r=n&&n.url,L.Bt&&(null==m?i!==e.text||!n:null!=r&&i!==r)&&i in L.Ks&&A.qs(i)<0&&delete L.Ks[i],void(null!=m?(e.path=e.path.substring(0,e.path.length-e.title.length)+(m||e.id),e.title=m||e.id,r&&(e.url=r,e.text=L.I(r,e),L.Gs()),x&&(e.visible=V.Ls(e.url,e.title))):(a.splice(h,1),n||c.Es()));if(!(c.Ts.indexOf(t)<0)){if(null!=m)return c.Es();if(!c.Fs&&L.Bt){for(o=L.Ks,u=A.qs,s=0,l=a;s<l.length;s++)(i=l[s].url)in o&&u(i)<0&&delete o[i];c.Fs=false}return c.Es()}}},M={tl:function(t,n){if(!chrome.history)return D.Os([]);var e=A.$s;if(1===a&&(a=0===b.length||0===n?3:67),b.length>0)return e?D.Os(M.Hs(e)):A.Qs(function(n){if(!t.o)return D.Os(M.Hs(n))});e?(A.Xs>10||A.zs>0)&&A.Zs():A.Ys||setTimeout(function(){A.Qs()},50),h=false,0===n?D.ml(M.hl,t):chrome.sessions?chrome.sessions.getRecentlyClosed(M._l.bind(M,t)):M.dl([],t,{},0,0)},Hs:function(t){var n,e,i,r,o,u=1===b.length&&("."===b[0][0]?Utils.ca.test(b[0]):(Utils.Yo(b[0],null,-2),Utils.Ko<=2)),s=[0,0],l=[],f=N.Rs,m=P.bs[0],h=c,_=g+(3===(63&a)?S:0),d=0,v=0,p=0;for(T&&_++,v=_;--v;)s.push(0,0);for(_=2*_-2,n=0,e=t.length;d<e;d++)if(i=t[d],(u?m.test(i.text):f(i.text,i.title))&&(C||i.visible)&&(p++,!(n>=(r=u?N.ys(i.time):h(i.text,i.title,i.time))))){for(v=_-2;0<=v&&s[v]<r;v-=2)s[v+2]=s[v],s[v+3]=s[v+1];s[v+2]=r,s[v+3]=d,n=s[_]}for(U+=p,o=this.vl,3===a?(d=2*S,S=0):d=0;d<=_&&!((r=s[d])<=0);d+=2)(i=t[s[d+1]]).url!==T&&l.push(new B("history",i.url,i.text,i.title,o,r));return L.Gs(),l},hl:function(t,n){var e,i,r,o,u,s;if(!t.o){for(e=Object.create(null),i=0,r=0,o=n;r<o.length;r++)s=(u=o[r]).url,u.incognito&&m||s in e||(e[s]=1,i++);return M.dl([],t,e,S,i)}},_l:function(t,n){var e,i,r;if(!t.o)return e=[],i={},r=3===a?-S:0,n.some(function(t){var n,o=t.tab;return!!o&&(!(!C&&!V.Ls(o.url,o.title))&&(!((n=o.url+"\n"+o.title)in i)&&(i[n]=1,i[o.url]=1,++r>0&&e.push(o),e.length>=g)))})?this.gl(e):this.dl(e,t,i,-r,0)},dl:function(t,n,e,i,r){chrome.history.search({text:"",maxResults:S+g*(C?1:2)+r},function(r){if(!n.o)return r=r.filter(M.pl,e),C||(r=r.filter(function(t){return V.Ls(t.url,t.title||"")})),i<0?(r.length=Math.min(r.length,g-t.length),r=t.concat(r)):i>0&&(r=r.slice(i,i+g)),M.gl(r)})},gl:function(t){return t.forEach(this.Ul),S=0,L.Gs(),D.Os(t)},Ul:function(t,n,e){var i=t.url,r=new B("history",i,L.I(i,i),t.title||"",M.vl,(99-n)/100);t.sessionId&&(r.sessionId=t.sessionId,r.label="&#8617;"),e[n]=r},vl:function(t,n){return n},pl:function(t){return!(t.url in this)}},j={tl:function(t,n){var e,i;if(1!==b.length||2===a||(e=b[0].indexOf("/")+1)&&e<b[0].length)return D.Os([]);if((i=A).go);else{if(!i.$s)return n>0?D.Os([]):i.Qs(function(){if(!t.o)return j.tl(t,0)});this.js(i.$s)}return this.Ms()},Ms:function(){var n,e,i,r,o,u,s,l,a,f,m,_,d,v,p,k=Utils.go,y=N.Sl,w=b[0].replace("/","").toLowerCase(),x="",O=-1;for(i in N.Sl=3,k)-1!==i.indexOf(w)&&(e=k[i],(C||e.count>0)&&(r=c(i,"",e.time))>O&&(O=r,x=i));return o=x.length===w.length,x&&!o&&(x.startsWith("www.")||x.startsWith(w)||-1!==(u=x.substring(x.indexOf(".")+1)).indexOf(w)&&(s=void 0,(s=k[u="www."+u])&&(C||s.count>0)&&(x=u,e=s)),(l=x.startsWith(w)?0:x.startsWith("www."+w)?4:-1)>=0&&(_=(f=(a=Utils.ua(x))[0]).length-1,(m=a[1])>1&&(!(l=x.length-l-w.length-f[_].length-1)||3===m&&l===f[_-1].length+1)&&(o=true))),x&&(U++,T=d=(e.https?"https://":"http://")+x+"/",S>0?S--:(h=o||h,t(n=new B("domain",d,w===b[0]?x:x+"/","",this.bl)),v=A.qs(d),(p=A.$s[v])&&(C||p.visible)&&(n.title=Utils.z(p.title)),--g)),N.Sl=y,D.Os(n?[n]:[])},js:function(t){var n,e,i,r,o,u,s,l,c,a,f;for(this.js=null,n=this.kl,e=A.go=Utils.go,i=0,r=t;i<r.length;i++)u=(o=r[i]).time,s=o.visible,(l=n(o.url))&&(a=l.schema,(f=e[c=l.domain])?(f.time<u&&(f.time=u),f.count+=s,a>=7&&(f.https=8===a?1:0)):e[c]={time:u,count:s,https:8===a?1:0})},kl:function(t){var n;if(t.startsWith("http://"))n=7;else if(t.startsWith("https://"))n=8;else{if(!t.startsWith("ftp://"))return null;n=6}return{domain:"__proto__"!==(t=t.substring(n,t.indexOf("/",n)))?t:".__proto__",schema:n}},bl:function(){return 2}},I={tl:function(t){D.ml(this.Ms,t)},Ms:function(t,n){var e,i,r,o,u,s,c,f,h,_,v,p,k,y,w,T,x,C,O,M;if(!t.o){for(1===a&&(a=4),e=d.ho,i=b.length<=0,r=[],o=[],u=[],s=0,c=n;s<c.length;s++)(f=c[s]).incognito&&m||(_=L.I(h=f.url,!f.incognito&&h),(i||N.Rs(_,f.title))&&(f.text=_,u.lastIndexOf(v=f.windowId)<0&&u.push(v),o.push(f)));if(U+=o.length,S>=o.length)return 4===a?S=0:S-=o.length,D.Os(r);for(u=u.sort(I.yl),p=i?I.wl:l,k=0,y=o;k<y.length;k++)f=y[k],w="#",u.length>1&&(w+=u.indexOf(f.windowId)+1+":"),w+=""+(f.index+1),f.incognito&&(w+="*"),f.discarded&&(w+="~"),x=new B("tab",f.url,f.text,f.title,p,T=f.id),e===T&&(x.relevancy=1),x.sessionId=T,x.label=w,r.push(x);if(4!==a&&0!==S);else if(r.sort(D.Tl).length>S+g||!i)S>0?(r=r.slice(S,S+g),S=0):r.length>g&&(r.length=g);else if(S>0){for(C=0,M=O=(r=r.slice(S).concat(r.slice(0,g+S-r.length))).length;C<O;C++)r[C].relevancy=M--;S=0}return L.Gs(),D.Os(r)}},yl:function(t,n){return t-n},wl:function(t,n){return d.Qc[n]||-n}},R={ha:0,tl:Utils.y,xl:function(t,n){var r,o,u,s,l,c,m,_,d,v,p=b,w=p.length>0?p[0]:"";if(0===p.length);else{if(true!==n&&"\\"===w[0]&&"\\"!==w[1])return w.length>1?p[0]=w.substring(1):p.shift(),w=k.substring(1).trimLeft(),r=R.Cl(w,"\\"+w),h=true,g--,U++,C=C&&V.Bl([w]),D.Os([r]);o=Settings.J.searchEngineMap[w]}if(true===n){if(!o)return true}else{if(!o)return 0===f&&p.length<=1&&(f=p.length?R.Ol():-1),D.Os([]);h=true,g--,U++,1===a&&(p.push(y),S=0),p.length>1?a=2:f=-1}if(p.length>1?(p.shift(),k.length>200&&(p=k.split(" ")).shift()):p=[],C=C&&V.Bl([w]),c=(s=Utils.Ca(p,o.url,o.blank,[])).indexes,m=l=s.url,"~"===w);else if(l.startsWith("vimium://")){if((_=Utils.Zo(l.substring(9),1,true))instanceof Promise)u=_;else if(_ instanceof Array)switch(_[1]){case"search":if(b=_[0],(d=R.ha++)>12)break;if(v=R.xl(t,true),d<=0&&(R.ha=0),true!==v)return}}else l=Utils.Yo(l,null,-2);if(r=new B("search",l,m,o.name+": "+p.join(" "),R.Ml),p.length>0?(r.text=R.jl(m,c),r.textSplit=e(r.text,c),r.title=e(r.title,[o.name.length+2,r.title.length]),r.visited=!!A.$s&&A.qs(l)>=0):(r.text=Utils.Jo(i(m)),r.textSplit=Utils.z(r.text),r.title=Utils.z(r.title)),r.pattern=o.name,!u)return D.Os([r]);u.then(R.Il.bind(R,t,r))},Il:function(t,n,e){var i,r;if(!t.o)return(i=e[0])?(--(r=new B("math","vimium://copy "+i,i,i,this.Ml)).relevancy,r.title='<match style="text-decoration: none;">'+Utils.z(r.title)+"<match>",r.textSplit=Utils.z(e[2]),g--,U++,D.Os([n,r])):D.Os([n])},Rl:0,Dn:0,Ol:function(){var t,n=b[0],e=Settings.J.searchKeywords;return e?n.length>=R.Rl?0:(t=R.Dl(n,e))<e.length&&e[t].startsWith(n)?-2:0:(R.Dn=R.Dn||setTimeout(R.El,67),-2)},jl:function(t,n){var e,i,r,o=n.length;if(i=Utils.Jo(n.length>0?t.substring(0,n[0]):t),(e=Utils.Aa(i))&&(i=i.substring(e),e=0),n.length<=0)return i;for(r=n[0];n[e]=i.length,o>++e;)i+=Utils.Jo(t.substring(r,n[e])),r=n[e];return r<t.length&&(i+=Utils.Jo(t.substring(r))),i},Cl:function(t,n){var r=Utils.Yo(t,null,-2),o=4===Utils.Ko,u=new B("search",r,n||Utils.Jo(i(r)),"",this.Ml);return u.textSplit=Utils.z(u.text),u.title=o?"~: "+e(t,[0,t.length]):Utils.z(t),u.pattern=o?"~":"",u},El:function(){var t,n,e,i=Object.keys(Settings.J.searchEngineMap),r=0;for(i.sort(),t=0,n=i;t<n.length;t++)r<(e=n[t].length)&&(r=e);Settings.uc("searchKeywords",i),R.Rl=r,R.Dn=0},Dl:function(t,n){for(var e=n.length-1,i=0,r=0;i<=e;)n[r=i+e>>>1]>t?e=r-1:i=r+1;return i},Ml:function(){return 9}},D={Nl:0,Pl:0,Al:null,Vl:null,Ll:null,tl:function(t){var n,e,i;if(D.Vl&&(D.Vl.o=true),n=D.Vl={o:false},e=D.Pl=0,i=D.Nl=t.length,D.Al=[],f=S&&-1,t[0]===R){if(i<2)return R.xl(n);R.xl(n),e=1}for(N.Wl=Date.now()-18144e5,N.Sl=3*b.length||.01,b.indexOf("__proto__")>=0&&(b=b.join(" ").replace(/(^| )__proto__(?=$| )/g," __proto_").trimLeft().split(" ")),P.Fl(),i--;e<=i;e++)t[e].tl(n,e)},ml:function(t,n){var e=t.bind(null,n);return null===m&&(m=1!==d.qc?2!==d.qc:ChromeVer>=52||Settings.hn.Cc||null),null!==m?chrome.tabs.query(w?{currentWindow:true}:{},e):chrome.windows.getCurrent({populate:w},function(t){if(!n.o){if(d.qc=(m=!t||!t.incognito)?0:2,w)return e(t.tabs);chrome.tabs.query({},e)}})},Os:function(t){var n=D.Al;if(t.length>0&&(D.Pl++,D.Al=0===n.length?t:n.concat(t)),0===--D.Nl)return n=null,D.Jl()},Jl:function(){var n,e,r,o,u,s,l,c=D.Al;return D.Al=null,c.sort(D.Tl),S>0?(c=c.slice(S,S+p),S=0):c.length>p&&(c.length=p),P.Kl=P.ql=null,b.length>0&&(e=i(n=b[0]),((r=n.length!==e.length)||n.endsWith("/")&&n.length>1)&&(b[0]=r?e:n.substring(0,n.length-1),P.Gl())),c.forEach(t),o=h&&c.length>0,u=U,s=f<0?-2===f&&0===c.length?3:0:C?0===c.length?b.length>0?1:0:1===D.Pl?2:0:0,l=D.Ll,D.$l(),l(c,o,s,u)},$l:function(){D.Vl=D.Ll=m=null,b=[],k=y=T="",P.bs=null,N.Sl=3,N.Wl=D.Pl=f=g=p=U=v=0,a=0,h=_=false,w=false,C=true},Hl:function(){var t,n,e=k;if(S=0,a=0,y="",!(0===e.length||(t=(e=e.slice(-5)).lastIndexOf("+"))<0||0!==t&&32!==e.charCodeAt(t-1))){if(e=e.substring(t),t=k.length-e.length,(n=parseInt(e,10))>=0&&"+"+n===e&&n<=(t>0?100:200))S=n;else if("+"!==e)return;k=k.substring(0,t-1),y=e,a=1}},Tl:function(t,n){return n.relevancy-t.relevancy}},E={__proto__:null,bookm:[O],domain:[j],history:[M],omni:[R,j,M,O],search:[R],tab:[I]},N={Rs:function(t,n){var e,i,r=P.bs;for(e=0,i=b.length;e<i;e++)if(!(r[e].test(t)||r[e].test(n)))return false;return true},Sl:3,Ql:[0,0],Xl:function(t,n){var e,i=0;return(e=n.split(P.bs[t]).length)<1?this.Ql:(i=1,P.ql[t].test(n)&&(i+=1,P.Kl[t].test(n)&&(i+=1)),[i,(e-1)*b[t].length])},ks:function(t,n){var e,i,r,o=0,u=0,s=0,l=0,c=!!n;for(P.ql||P.zl(),e=0,i=b.length;e<i;e++)l+=(r=this.Xl(e,t))[0],s+=r[1],c&&(u+=(r=this.Xl(e,n))[0],o+=r[1]);return l=l/this.Sl*this.Zl(s,t.length),0===o?n?l/2:l:l<(u=u/this.Sl*this.Zl(o,n.length))?u:(l+u)/2},Wl:0,ys:function(t){var n=(t-this.Wl)/18144e5;return n<0?0:n<1?n*n*.666667:n<1.000165?.666446:0},Zl:function(t,n){return t<n?t/n:n/t}},P={bs:null,ql:null,Kl:null,Fl:function(){var t,n,e,i=this.bs=[];for(this.ql=this.Kl=null,t=0,n=b;t<n.length;t++)e=n[t],i.push(new RegExp(e.replace(Utils.Oa,"\\$&"),Utils.Ka(e)?"":"i"))},zl:function(){var t,n,e,i,r,o=this.ql=[],u=this.Kl=[];for(t=0,n=b;t<n.length;t++)i="\\b"+(e=n[t]).replace(Utils.Oa,"\\$&"),r=Utils.Ka(e)?"":"i",o.push(new RegExp(i,r)),u.push(new RegExp(i+"\\b",r))},Gl:function(){if(this.bs){var t=b[0];this.bs[0]=new RegExp(t.replace(Utils.Oa,"\\$&"),Utils.Ka(t)?"":"i")}}},A={Ys:0,Xs:0,zs:0,$s:null,_o:null,go:null,Qs:function(t){this._o?t&&this._o.push(t):(this._o=t?[t]:[],this.Ys=Date.now(),chrome.history.search({text:"",maxResults:2e4,startTime:0},function(t){setTimeout(A.Yl,0,t)}))},Yl:function(t){var n,e,i,r=A,o=t.length;for(r.Yl=null,n=0;n<o;n++)t[n]={text:(e=t[n]).url,title:e.title,time:e.lastVisitTime,visible:1,url:e.url};if(x)for(n=0;n<o;n++)0===V.Ls((i=t[n]).text,i.title)&&(i.visible=0);setTimeout(function(){setTimeout(function(){L.Vs(A.$s),A.go||setTimeout(function(){j.js&&j.js(A.$s)},200)},100),A.$s.sort(function(t,n){return t.url>n.url?1:-1}),chrome.history.onVisitRemoved.addListener(A.tf),chrome.history.onVisited.addListener(A.nf)},100),r.$s=t,r.Qs=function(t){t&&t(this.$s)},r._o&&r._o.length>0&&setTimeout(function(t){var n,e;for(n=0,e=t;n<e.length;n++)(0,e[n])(A.$s)},1,r._o),r._o=null},nf:function(t){var n,e,i,r,o=A,u=t.url,s=t.lastVisitTime,l=t.title,c=++o.Xs,a=o.go,f=o.qs(u);if(f<0&&o.zs++,(c>59||c>10&&Date.now()-o.Ys>3e5)&&o.Zs(),n=f>=0?o.$s[f]:{text:"",title:l,time:s,visible:x?V.Ls(u,l):1,url:u},a&&(i=j.kl(u))&&((e=a[i.domain])?(e.time=s,f<0&&(e.count+=n.visible),i.schema>=7&&(e.https=8===i.schema?1:0)):a[i.domain]={time:s,count:n.visible,https:8===i.schema?1:0}),f>=0)return n.time=s,void(l&&l!==n.title&&(n.title=l,x&&(r=V.Ls(u,l),n.visible!==r&&(n.visible=r,e&&(e.count+=r||-1)))));n.text=L.I(u,n),o.$s.splice(~f,0,n)},tf:function(t){var n,e,i,r,o,u,s,l,c,a,f,m,h,_,d;if(L.ef.length=0,n=L.Ks,t.allHistory){for(A.$s=[],A.go&&(A.go=Utils.go=Object.create(null)),e=Object.create(null),i=0,r=O.ws;i<r.length;i++)(u=n[(o=r[i]).url])&&(e[o.url]=u);L.Ks=e}else for(l=(s=A).qs,c=s.$s,a=s.go,m=0,h=t.urls;m<h.length;m++)(o=l(_=h[m]))>=0&&(a&&c[o].visible&&(d=j.kl(_))&&(f=a[d.domain])&&--f.count<=0&&delete a[d.domain],c.splice(o,1),delete n[_])},Zs:function(){var t=A,n=Date.now();if(t.zs<=0);else{if(n<t.Ys+1e3&&n>=t.Ys)return;setTimeout(chrome.history.search,50,{text:"",maxResults:Math.min(999,t.Xs+10),startTime:n<t.Ys?n-3e5:t.Ys},t.if)}return t.Ys=n,t.zs=t.Xs=0,L.Gs()},if:function(t){var n,e,i,r,o,u=A.$s,s=A.qs;if(!(u.length<=0))for(n=0,e=t;n<e.length;n++){if((r=s((i=e[n]).url))<0)A.zs--;else if(!(o=i.title)||o===u[r].title)continue;A.Xs--,A.nf(i)}},qs:function(t){for(var n="",e=A.$s,i=e.length-1,r=0,o=0;r<=i;)if((n=e[o=r+i>>>1].url)>t)i=o-1;else{if(n===t)return o;r=o+1}return~r}},V={Ls:function(t,n){var e,i,r;for(e=0,i=x;e<i.length;e++)if(n.indexOf(r=i[e])>=0||t.indexOf(r)>=0)return 0;return 1},Bl:function(t){var n,e,i,r,o,u;if(!x)return true;for(n=0,e=t;n<e.length;n++)for(i=e[n],r=0,o=x;r<o.length;r++)if(u=(u=o[r]).trim(),i.indexOf(u)>=0||u.length>9&&i.length+2>=u.length&&u.indexOf(i)>=0)return true;return false},rf:function(){var t,n,e,i,r,o,u,s,l;if(O.ws)for(t=0,n=O.ws;t<n.length;t++)(e=n[t]).visible=x?V.Ls(e.text,e.path):1;if(A.$s)for(i=A.go,r=0,o=A.$s;r<o.length;r++)e=o[r],u=x?V.Ls(e.text,e.title):1,e.visible!==u&&(e.visible=u,i&&(s=j.kl(e.url))&&(l=i[s.domain])&&(l.count+=u||-1))},uf:function(t){var n,e,i,r=[];for(n=0,e=t.split("\n");n<e.length;n++)(i=e[n])&&i.trimLeft().charCodeAt(0)>35&&i.trim()&&r.push(i);x=r.length>0?r:null,(A.$s||O.ws)&&setTimeout(V.rf,100)}},L={sf:decodeURIComponent,I:function(t,n){if(t.length>=400||t.indexOf("%")<0)return t;try{return this.sf(t)}catch(t){}return this.Ks[t]||(false!==n&&this.ef.push(n),t)},Vs:function(t){for(var n,e,i=this,r=i.sf,o=i.Ks,u=i.ef,s=-1,l=t.length;;)try{for(;++s<l;)(n=t[s]).text=(e=n.url).length>=400||e.indexOf("%")<0?e:r(e);break}catch(t){n.text=o[e]||(u.push(n),e)}return this.Gs()},Ks:Object.create(null),ef:[],lf:-1,Gs:function(){0!==this.ef.length&&-1===this.lf&&(this.lf=0,setTimeout(this.cf,17,null))},cf:function(t){for(var n,e,i,r;L.lf<L.ef.length;L.lf++){if(!(n=L.Ks[r=(i="string"===typeof(e=L.ef[L.lf]))?e:e.url]))return t||(t=L.$i())?(t.open("GET",L.af+(ChromeVer>=66?r.replace("#","%25"):r),true),t.send()):(L.ef.length=0,void(L.lf=-1));i||(e.text=n)}},ff:function(){if(!(L.lf<0)){var t=this.responseText,n=L.ef[L.lf++];if("string"!==typeof n?L.Ks[n.url]=n.text=t:L.Ks[n]=t,L.lf<L.ef.length)return L.cf(this);L.ef.length=0,L.lf=-1}},Bt:true,af:"1",mf:function(){if(!this.af)return null;var t=new XMLHttpRequest;return t.responseType="text",t.onload=this.ff,t.onerror=this.ff,t},hf:function(t){var n=!!t&&!(t=t.toLowerCase()).startsWith("utf"),e=n?"data:text/plain;charset="+t+",":"";e===L.af||(L.af=e,n?L.$i===L.mf&&setTimeout(function(){return A.$s&&L.Vs(A.$s),L.Vs(O.ws)},100):(L.Ks=Object.create(null),L.ef.length=0),L.Bt!==n&&(L.ef=n?[]:{length:0,push:Utils.y},L.Bt=n,L.lf=-1))},$i:function(){return Settings.lc.localeEncoding=L.hf,L.hf(Settings.ic("localeEncoding")),L.$i=L.mf,L.mf()}};r={tl:function(t,n,e){h=false,k=(t=t.trim())&&t.replace(Utils.zo," "),D.Hl(),b=(t=k)?(t.length>200?t.substring(0,200).trimRight():t).split(" "):[],v=Math.max(50,Math.min(0|n.c||128,320)),_=!!n.s,p=g=Math.min(Math.max(3,0|n.r||10),25),U=0,D.Ll=e;var i=E[n.o],r=b.length>=1?b[0]:"";i===E.tab&&(w=!!(n.f&&1&n.f)),h=null!=i&&1===i.length,2===r.length&&":"===r[0]?(i="b"===(r=r[1])?E.bookm:"h"===r?E.history:"t"===r||"w"===r?(w="w"===r,E.tab):"d"===r?E.domain:"s"===r?E.search:"o"===r?E.omni:null)&&(h=1===i.length,b.shift(),k=t.substring(3)):i=null,b.length>=1&&(b[0]=Utils.Ia(b[0])),C=V.Bl(b),D.tl(i||E[n.t]||E.omni)},ul:function(t,n,e){switch(n){case"tab":chrome.tabs.remove(+t,function(){var t=Utils.T();return e(!t),t});break;case"history":var i=!A.$s||A.qs(t)>=0;chrome.history.deleteUrl({url:t}),e(i)}}},Settings.lc.phraseBlacklist=V.uf,Settings.sc("phraseBlacklist"),setTimeout(function(){Settings.sc("searchEngines",null)},80)},200),r={tl:function(t,n,e){setTimeout(function(){return r.tl(t,n,e)},210)},ul:function(){}},setTimeout(function(){function t(){return chrome.storage&&chrome.storage.sync}function n(t,n){var e,r;if("sync"===n)for(e in t)i(e,null!=(r=t[e])?r.newValue:null)}function e(){return(new Date).toLocaleString()}function i(t,n){var i,o,u,s,c;t in Settings.oc&&!(t in Settings.ac)&&l(t)&&(i=Settings.oc[t],null!=n?(o=Settings.ic(t),(c="string"===typeof i)?(s=n,u=o):(s=JSON.stringify(n),u=JSON.stringify(o)),s!==u&&(s===(o=c?i:JSON.stringify(i))&&(n=i),console.log(e(),"sync.local: update",t,"string"===typeof n?(n.length>32?n.substring(0,30)+"...":n).replace(/\n/g,"\\n"):n),r(t,n))):null!=localStorage.getItem(t)&&(console.log(e(),"sync.local: reset",t),r(t,i)))}function r(t,n){var e="keyMappings"===t?"Commands":t.startsWith("exclusion")?"Exclusions":"";if(!e)return o(t,n);Promise.all(["Exclusions"===e&&Utils.ba("Commands"),Utils.ba(e)]).then(function(){return o(t,n)}),Utils.Ga()}function o(t,n){if(Settings.uc(t,n),t in Settings.Xa){var e=Object.create(null),i={N:6,d:e};e[t]=Settings.ic(t),Settings.fc(i)}}function u(t,n){l(t)&&(c||(setTimeout(s,800),c=Object.create(null)),c[t]=n)}function s(){var n,i=c,r=[],o=0;if(c=null,i&&Settings.cc===u){for(n in i)null!=i[n]?++o:(delete i[n],r.push(n));r.length>0&&(console.log(e(),"sync.cloud: reset",r.join(" ")),t().remove(r)),o>0&&(console.log(e(),"sync.cloud: update",Object.keys(i).join(" ")),t().set(i))}}function l(t){return!(t in a)}var c,a,f;Utils.Ga(),c=null,a=Object.setPrototypeOf({findModeRawQueryList:1,innerCSS:1,keyboard:1,newTabUrl_f:1,vomnibarPage_f:1},null),Settings.lc.vimSync=function(e){if(t()){var i=chrome.storage.onChanged;e?Settings.cc!==u&&(i.addListener(n),Settings.cc=u):(i.removeListener(n),Settings.cc=Utils.y)}},false===(f=Settings.ic("vimSync"))||!f&&(localStorage.length>6||Settings.ic("newTabUrl")!==Settings.hn.Nc)||t()&&t().get(null,function(n){var r,o,u,s,c,a,f,m=Utils.T();if(m)return console.log(e(),"Error: failed to get storage:",m,"\n\tSo disable syncing temporarily."),Settings.lc.vimSync=Settings.cc=Utils.y,m;if(r=n.vimSync||Settings.ic("vimSync")){for(n.vimSync||(console.log("sync.cloud: enable vimSync"),n.vimSync=r,t().set({vimSync:r})),o=[],u=0,s=localStorage.length;u<s;u++)!((c=localStorage.key(u))in n)&&c in Settings.oc&&l(c)&&o.push(c);for(a=0,f=o;a<f.length;a++)i(c=f[a],null);for(c in n)i(c,n[c]);Settings.sc("vimSync")}})},1e3),setTimeout(function(){function t(t,n){function r(){console.error("Could not load action icon:",this.getAttribute("src"))}function o(){var n,r,o,u;if(a||((n=document.createElement("canvas")).width=n.height=38,a=n.getContext("2d")),a.clearRect(0,0,r=this.width,o=this.height),a.drawImage(this,0,0,r,o),l[r]=a.getImageData(0,0,r,o),c++)a=null;else for(e[t]=l,u=i[t],delete i[t],r=0,o=u.length;r<o;r++)Backend.Wc(u[r],t,true)}var u,s,l=Object.create(null),c=0,a=null;for(s in n)(u=new Image).onload=o,u.onerror=r,u.src=n[s]}var n,e,i;chrome.browserAction&&(n=Settings.lc.showActionIcon,Backend.ll=function(t){if(void 0===t)return e;t?e||(e=Object.create(null),i=Object.create(null)):e&&setTimeout(function(){Settings.ic("showActionIcon")||(e=i=null)},200)},Backend.Wc=function(n,r,o){var u,s,l,c;(u=e[r])?(l=chrome.browserAction.setIcon,c={tabId:n,imageData:u},o?l(c,Utils.T):l(c)):i[r]?i[r].push(n):(s=Settings.yc[r])&&(setTimeout(t,0,r,s),i[r]=[n])},Settings.lc.showActionIcon=function(t){n(t),Backend.ll(t);var e="Vimium C";t||(e+="\n\nAs configured, here's no active state."),chrome.browserAction.setTitle({title:e})},Settings.sc("showActionIcon"))},150),setTimeout(function(){function t(){f&&(f.suggest=null),h=v=f=c=null,g&&clearTimeout(g),m&&clearTimeout(m),p=S=g=m=0,b=a="",Utils.C()}function n(){var e=Date.now()-p;if(e>5e3||e<-5e3)return t();g=setTimeout(n,3e4)}function e(){var t,n;if(m=0,(t=f)&&!t.sent)return f=null,t.suggest?((n=Date.now())<p&&(p=n-1e3),o(t.key,t.suggest)):void 0}function i(t,n,e,i){var r,o,u,s,m,_,g,p,y,w,T,x,C,B,O,M;if(t.suggest){f=null,o=(r=n.length>0)?n[0]:null,u={},b=r?o.type:"",S=i,r&&(l||"sessionId"in n[0])&&(h=Object.create(null)),v=[],s=Object.create(null);for(m=0,_=e?0:1,g=n.length;m<g;m++)y=(p=n[m]).title,T=p.type,x="",C=null!=p.sessionId,B=l&&!(e&&0===m)&&("tab"===T?p.sessionId!==d.ho:"history"===T&&!C),(w=p.url)in s?w=":"+(m+_)+" "+w:s[w]=1,B&&(u.type=T,x=" ~"+(m+_)+"~"),O={content:w,description:x="<url>"+p.textSplit+(x=y?"</url><dim> - "+y+x+"</dim>":x?"</url><dim>"+x+"</dim>":"</url>")},B&&(O.deletable=true),C&&(u.sessionId=p.sessionId),(B||C)&&(h[w]=u,u={}),v.push(O);if(e)if("search"===o.type){if(M=((M=o.pattern)&&"<dim>"+Utils.z(M)+" - </dim>")+"<url>"+o.textSplit+"</url>",U=2,chrome.omnibox.setDefaultSuggestion({description:M}),o=n[1])switch(o.type){case"math":v[1].description="<dim>"+o.textSplit+" = </dim><url><match>"+o.text+"</match></url>"}}else U=3,chrome.omnibox.setDefaultSuggestion({description:v[0].description});else 1!==U&&(chrome.omnibox.setDefaultSuggestion(k),U=1);e&&(a=n[0].url,v.shift()),c=t.key,Utils.C(),t.suggest(v)}else f===t&&(f=null)}function o(t,o){var u,s,l,d;if(t=t.trim().replace(Utils.zo," "),!f||(f.suggest=(u=t===f.key)?o:null,!u))if(t!==c){if(1===S&&t.startsWith(c))o([]);else if(f={suggest:o,key:t,sent:false},!m){if(s=Date.now(),!((l=Settings.J.vomnibarOptions.queryInterval+p-s)>30&&l<3e3))return f.sent=true,g||(g=setTimeout(n,3e4)),p=s,h=v=null,a="",d=S<2||!t.startsWith(c)?"omni":3===S?"search":b||"omni",r.tl(t,{o:"omni",t:d,r:y,c:_,s:true},i.bind(null,f));m=setTimeout(e,l)}}else v&&o(v)}function u(t,n,e){return t?":"===t[0]&&/^:([1-9]|1[0-2]) /.test(t)&&(t=t.substring(" "===t[2]?3:4)):t=Utils.Yo(""),"file://"===t.substring(0,7).toLowerCase()&&(t=Utils.ja(t)),null!=e?Backend.al({s:e}):Backend.ti({u:t,o:true,r:"currentTab"===n?0:"newForegroundTab"===n?-1:-2})}var s,l,c,a,f,m,h,_,v,g,p,U,S,b,k,y;chrome.omnibox&&(s=chrome.omnibox.onDeleteSuggestion,l=!!s&&"function"===typeof s.addListener,c=null,a="",f=null,m=0,h=null,_=128,v=null,g=0,U=0,S=0,k={description:"<dim>Open: </dim><url>%s</url>"},null,y=ChromeVer<60?6:12,chrome.omnibox.onInputStarted.addListener(function(){if(chrome.windows.getCurrent(function(t){var n=t&&t.width;_=n?Math.floor((n-160/devicePixelRatio)/7.72):128}),g)return t()}),chrome.omnibox.onInputChanged.addListener(o),chrome.omnibox.onInputEntered.addListener(function n(i,o){var s,l=f;if(l&&l.suggest){if(l.suggest=n.bind(null,i,o),l.sent)return;return m&&clearTimeout(m),e()}return i=i.trim().replace(Utils.zo," "),null===c&&i?r.tl(i,{o:"omni",t:"omni",r:3,c:_,s:true},function(t,n){return n?u(t[0].url,o,t[0].sessionId):u(i,o)}):(a&&i===c&&(i=a),s=h&&h[i]&&h[i].sessionId,t(),u(i,o,s))}),l&&s.addListener(function(t){var n=parseInt(t.substring(t.lastIndexOf("~",t.length-2)+1))-1,e=v&&v[n].content,i=e&&h&&h[e],r=i&&i.type;if(r)return":"===e[0]&&(e=e.substring(e.indexOf(" ")+1)),Backend.ul({t:r,u:"tab"===r?i.sessionId:e});console.log("Error: want to delete a suggestion but no related info found (may spend too long before deleting).")}))},600),chrome.runtime.onInstalled.addListener(Settings.Ya.Ja=function(t){var n=t.reason;if("install"===n)n="";else{if("update"!==n)return;n=t.previousVersion}setTimeout(function(){chrome.tabs.query({status:"complete"},function(t){var n,e,i,r,o,u=chrome.tabs,s=Utils.T,l=location.origin.length,c=Settings.hn.Rc;for(n=t.length,e=c.length-1;0<=--n;)if(!(i=t[n].url).startsWith(f)&&-1!==i.indexOf("://"))for(r=t[n].id,o=0;o<e;++o)u.executeScript(r,{file:c[o].substring(l),allFrames:true},s)}),console.log("%cVimium C%c has been %cinstalled%c with %o at %c%s%c.","color:red","color:auto","color:#0c85e9","color:auto",t,"color:#0c85e9",new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toJSON().substring(0,19).replace("T"," "),"color:auto"),Settings.hn.Cc&&console.log("Sorry, but some commands of Vimium C require the permission to run in incognito mode."),n&&(parseFloat(Settings.hn.wc)<=parseFloat(n)||(n="vimium-c_upgrade-notification",chrome.notifications&&chrome.notifications.create(n,{type:"basic",iconUrl:location.origin+"/icons/icon128.png",title:"Vimium C Upgrade",message:"Vimium C has been upgraded to version v"+Settings.hn.Tc+".\nKey mapping usage has UPDATED.",contextMessage:"Click here for more information.",isClickable:true},function(t){var e;if(e=Utils.T())return e;n=t||n,chrome.notifications.onClicked.addListener(function(t){t===n&&(chrome.notifications.clear(n),Backend.fi({u:Utils.Yo("vimium://changelog")}))})})))},500)}),Utils.Ga=function(){function t(){var i,r=Date.now()-n;r<6e4&&r>-5e3?e=setTimeout(t,6e4-r):(e=0,chrome.extension.getViews().some(function(t){var n=t.location.pathname.toLowerCase();return n.startsWith("/pages/options")||n.startsWith("/pages/popup")})||(i=Settings.lc,Commands&&(i.keyMappings=null,Commands=null),Exclusions&&0===Exclusions.Hc.length&&(i.exclusionRules=i.exclusionOnlyFirstMatch=i.exclusionListenHash=null,Exclusions=null)))}var n=0,e=0;return Utils.Ga=function(){(Commands||Exclusions)&&(n=Date.now(),e>0||(e=setTimeout(t,6e4)))},Utils.Ga()},setTimeout(function(){chrome.runtime.onInstalled.removeListener(Settings.Ya.Ja),Settings.Ya.Ja=null,document.documentElement.textContent="",Utils.C()},1200);