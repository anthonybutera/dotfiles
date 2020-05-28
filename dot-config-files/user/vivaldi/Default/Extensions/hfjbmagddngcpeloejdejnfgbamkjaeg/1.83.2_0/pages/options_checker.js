"use strict";var $={Ss:null,Ot:function(){function n(n,t,r){var i,e,s=t.toLowerCase(),u=r.length>1,o=s.includes("s-"),c=r.toUpperCase();if(!u){if(!s)return n;if(o&&s.length<3)return c}return i=r.toLowerCase(),s=(e=s).length<4?e:e.slice(0,-1).split("-").sort().join("-")+"-",r!==i&&!o&&(s+="s-"),s||u?"<"+s+i+">":r}this.Ss=function(t){return t.replace(/<(?!<)((?:[ACMSacms]-){0,4})(.[^>]*)>/g,n)},this.ks=this.ks.bind(this),this.ys=this.ys.bind(this),this.Bs=this.Bs.bind(this),this.Ot=null},Us:function(n,t){return t?"\\u00"+t:"\\\\"},Bs:function(n,t,r,i){var e,s;r?t='"'+(r=r.replace(/\\(?:x([\da-z]{2})|\\)/gi,this.Us))+'"':i||"\\\\"!==t||(t="\\"),e="",t.startsWith("{")&&(e=t=t.replace(/([{,] ?)(\w+):/g,'$1"$2":'));try{if("string"!=typeof(s=JSON.parse(t)))return true!==s?e?"="+e+i:n:"";t=s}catch(n){r&&(t=r)}return"="+(t=(t=t&&t.replace(/\\(\\|s)/g,function(n,t){return"s"===t?" ":n}))&&JSON.stringify(t).replace(/\s/g,this.Cs))+i},Cs:function(n){return"\\u"+(n.charCodeAt(0)+1048576).toString(16).slice(2)},ks:function(n,t,r,i){var e,s,u,o=this.Ss(r);return o!==r&&(console.log("KeyMappings Checker:",r,"is corrected into",o),r=o),"mapkey"===t.replace("#","").trim().toLowerCase()&&(u=(s=(e=i.match(/^\s*\S+/))&&e[0].trim())&&this.Ss(s))!==s&&(console.log("KeyMappings Checker:",s,"is corrected into",u),i=i.replace(s,u),s=u),this.ys("",t,r,i)},ys:function(n,t,r,i){return(i.includes("createTab")||i.includes("openUrl"))&&/^\s+(createTab|openUrl)\s/.test(i)&&!/\surls?=/i.test(i)&&(i=this.Gs(i)),t+r+(i?i.replace(/=("(\S*(?:\s[^=]*)?)"|\S+)(\s|$)/g,this.Bs):"")},Gs:function(n){var t,r=[];return(n=(n+" ").replace(/\s(\w+:[^=\s]+|[^\s=]+:\/\/\S+)(?=\s|$)/g,function(n,t){return r.push(t),""}).trimRight())+((t=r.length)>1?" urls=":t?" url=":"")+(t?JSON.stringify(t>1?r:r[0]):"")},hu:function(n){return n?(this.Ot&&this.Ot(),n=(n=(n=(n="\n"+n.replace(/\\\\?\n/g,function(n){return 3===n.length?n:"\\\r"})).replace(/(\n[ \t]*(?:#\s?)?(?:un)?map(?:[kK]ey)?\s+)(\S+)([^\n]*)/g,this.ks)).replace(/(\n[ \t]*(?:#\s?)?(?:command|shortcut)\s+)(\S+)([^\n]*)/g,this.ys)).replace(/\\\r/g,"\\\n").trim()):n}};_.Po.keyMappings.fu=$,$=null,_.Po.searchUrl.fu={hu:function(n){var t,r,i,e=Object.create(null);return u.r.Un("k:"+n,e),null==(t=e.k)?N.de("searchUrl",true):(r=u.r.J(t.In,null,-2),u.r.Y>2?(i=s("nonPlainURL",[t.In]),console.log("searchUrl checker:",i),_.Po.searchUrl.Ts(i),N.de("searchUrl",true)):(r=r.replace(u.r.B,"%20"),t.Hn&&"k"!==t.Hn&&(r+=" "+t.Hn),_.Po.searchUrl.Ts(""),r))}},_.Po.vimSync.du=function(){var n,t,r,i;if(!this.ou&&true===this.mu()){for(r in t=0,n=_.Po)n[r].ou||++t;if(i=t>1,setTimeout(alert,100,s(i?"changedBeforeSync":"warningForSync")),i)return false}return true},_.Po.keyboard.fu={hu:function(n){return null!=n&&2===n.length&&n[0]>0&&n[0]<4e3&&n[1]>0&&n[1]<1e3?[+n[0],n[1]]:N.me.keyboard}},(function(){function n(t){u.Commands||u.r.pn("Commands"),t&&this.removeEventListener("input",n)}var t,r,i,e=G,s=e.ns;for(e.ns="",t=0,r=w("[data-check]");t<r.length;t++)(i=r[t]).removeEventListener(i.dataset.check||"input",e);if("keyMappings"===s)return n();_.Po.keyMappings.tu.addEventListener("input",n)})();