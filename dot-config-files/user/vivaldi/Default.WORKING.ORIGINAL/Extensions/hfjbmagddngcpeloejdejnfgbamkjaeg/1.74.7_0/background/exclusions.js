"use strict";var Exclusions;!Settings.ic("vimSync")&&("[]"===localStorage.getItem("exclusionRules")&&Backend.fl||Settings.lc.exclusionRules)?Exclusions=null:((Exclusions=!Exclusions||Exclusions instanceof Promise?{e:null,r:function(t){var n,e=this.e[t];return e||(e="^"===t[0]&&(n=Utils.Ea(t,"",false))?n:t.substring(1),this.e[t]=e)},l:false,c:false,o:false,Hc:[],n:function(t){var n;if(0===t.length)return this.Hc=[],Backend.Fc=Utils.Ba,this.l&&(n=this.a())&&(chrome.webNavigation.onHistoryStateUpdated.removeListener(n),this.c&&(this.c=false,chrome.webNavigation.onReferenceFragmentUpdated.removeListener(n))),void(this.l=false);this.e||(this.e=Object.create(null)),this.Hc=this.h(t),this.o=Settings.ic("exclusionOnlyFirstMatch"),this.e=null,Backend.Fc=this.d,this.l||(this.l=true,(n=this.a())&&(chrome.webNavigation.onHistoryStateUpdated.addListener(n),Settings.ic("exclusionListenHash")&&!this.c&&(this.c=true,chrome.webNavigation.onReferenceFragmentUpdated.addListener(n))))},d:function(t,n){var e,i,s,r,u,l=Exclusions.Hc,c="";for(e=0,i=l.length;e<i;e+=2)if("string"===typeof(s=l[e])?t.startsWith(s):s.test(t)){if(0===(r=l[e+1]).length||Exclusions.o||"^"===r[0]&&r.length>2)return r;c+=r}return!c&&n.i&&t.lastIndexOf("://",5)<0&&!Utils.qo.test(t)&&(u=Backend.mc(n.t,0))?Backend.Fc(u.s.u,u.s):c||null},a:function(){var t=chrome.webNavigation?ChromeVer>=41?function(t){Backend.cl(t)}:function(t){var n,e=Backend.mc(t.tabId),i={N:3,H:8};for(n=e?e.length:0;0<--n;)e[n].postMessage(i)}:null;return this.a=function(){return t},t},h:function(t){var n,e,i,s=[];for(n=0,e=t.length;n<e;n++)s.push(this.r((i=t[n]).pattern),Utils.Fa(i.passKeys));return s},m:function(){var t,n,e,i,s,r=this.Hc,u=Object.create(null),l=0;for(t=1,n=r.length;t<n;t+=2)if(e=r[t]){if("^"===e[0]&&e.length>2)return true;for(i=0,s=e.split(" ");i<s.length;i++)u[s[i]]=1,l++}return l?u:null},v:function(t,n,e){var i,s=this.Hc;return this.Hc=this.h(e),i=this.d(t,n),this.Hc=s,i},S:function(t){var n,e,i,s,r,u,l,c,o,a=Exclusions.Hc.length>0?null:{N:1,p:null};if(Utils.ba("Commands").then(function(){return Settings.sc("keyMappings",null)}),t)a||Settings.fc({N:3,H:8});else for(r in n=Backend.mc(),e=!!(Backend.ll&&(Backend.ll()||Settings.ic("showActionIcon"))),i=null,s=0,n){for(l=(u=n[+r])[0].s.s,c=u.length;0<--c;){if(o=u[c],a){if(0===o.s.s)continue}else if(s=null===(i=Backend.Fc(o.s.u,o.s))?0:i?1:2,!i&&o.s.s===s)continue;1&o.s.f||(o.postMessage(a||{N:1,p:i}),o.s.s=s)}e&&l!==(s=u[0].s.s)&&Backend.Wc(+r,s)}}}:Exclusions).n(Settings.ic("exclusionRules")),Settings.lc.exclusionRules=function(t){setTimeout(function(){var n=Exclusions.Hc.length<=0;Exclusions.n(t),setTimeout(Exclusions.S,17,n)},17)},Settings.lc.exclusionOnlyFirstMatch=function(t){Exclusions.o=t},Settings.lc.exclusionListenHash=function(t){var n,e,i=Exclusions;i.l&&(n=i.a())&&(i.c=t,e=chrome.webNavigation.onReferenceFragmentUpdated,t?e.addListener(n):e.removeListener(n))});