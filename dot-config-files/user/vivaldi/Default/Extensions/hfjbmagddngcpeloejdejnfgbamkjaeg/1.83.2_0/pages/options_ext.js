"use strict";function Q(n){return new Date(+n-6e4*(new Date).getTimezoneOffset()).toJSON().slice(0,19).replace("T"," ")}function X(n){return n&&"$base64:"+btoa(n)}function q(n){return n instanceof Array&&(n=n.join("\n").trimRight()),(n=n.replace(/\r\n?/g,"\n")).replace(/(^|\n)\$base64:(.*)/g,function(n,t,e){try{return t+atob(e)}catch(n){}return n})}function K(n,e,o){var i,r,a,c,l,u,f,g,p,d,m,S,b,w,v,T=e.environment,h=T&&T.platform||"",y=T&&parseFloat(T.extension||0)||0,O=y>parseFloat(N.$.Ee);if(h&&(h=(""+h).slice(0,10)),confirm(s("confirmImport",[s(true!==o?"backupFile":"recommendedFile"),y>1?s("fileVCVer").replace("*",""+y):"",(y>1?s("fileVCVer_2").replace("*",""+y):"")+(O?s("fileVCNewer"):""),h?s("filePlatform",[s(h)||h[0].toUpperCase()+h.slice(1)]):s("commonPlatform"),n?s("atTime",[Q(n)]):s("before")]))){for(l in null==e.vimSync&&(r=(i=N.de("vimSync"))&&confirm(s("keepSyncing")),e.vimSync=r||null,i&&console.log("Before importing: You chose to",r?"keep settings synced.":"stop syncing settings.")),a=function(n,t,e,o){var i=arguments.length>3,r=i?o:e,s=["%s %c%s",n,"color:darkred",t];r="string"!=typeof r||r.length<=72?r:r.slice(0,71).trimRight()+"\u2026",i&&s.push(e),s.push(r),console.log.apply(console,s)},n>1e4?console.info("IMPORT settings saved at %c%s%c.","color:darkblue",Q(n),"color:auto"):console.info("IMPORT settings:",o?"recommended.":"saved before."),(c=function(n){return n.split(" ").forEach(function(n){return delete e[n]})})("name time environment author description"),e)"@"===l[0]&&delete e[l];for(u=localStorage,f=N.me,g=_.Po,p=u.length;0<=--p;)(l=u.key(p)).includes("|")||l in e||(e[l]=null);for(l in c("findModeRawQuery findModeRawQueryList innerCSS findCSS omniCSS newTabUrl_f hookAccessKeys vomnibarPage_f"),N.Ue)l in e&&(e[N.Ue[l]]=e[l],delete e[l]);for(m in e.vimSync!==N.de("vimSync")&&(a("import","vimSync",e.vimSync),N.he("vimSync",e.vimSync),g.vimSync.su()),void 0!==(d=g.keyMappings)&&(delete g.keyMappings,g.keyMappings=d),g)if(b=e[l=(S=g[m]).nu],delete e[l],null==b?b=f[l]:("string"==typeof f[l]&&(b=q(b)),b=S.lu(b,"object"==typeof f[l])),S.yu(N.de(l),b)){if(S.ou)continue;S.su()}else a("import",l,b),N.he(l,b),l in N.ge&&_.wu.push(l),S.su(),S.ru&&S.ru();for(l in e)if(null!=(b=e[l]))"string"==typeof f[l]&&(b=q(b)),l in f?N.de(l)!==b&&(N.he(l,b),a("update",l,b)):(u.setItem(l,b),a("save",l,b));else{if(l in f){if(b=f[l],N.de(l)!==b){N.he(l,b),a("reset",l,b);continue}b=N.de(l)}else b=u.getItem(l);u.removeItem(l),a("remove",l,":=",b)}t("#saveOptions").onclick(false),t("#advancedOptionsButton").getAttribute("aria-checked")!==""+N.de("showAdvancedOptions")&&t("#advancedOptionsButton").onclick(null,true),console.info("IMPORT settings: finished."),(v=(w=window.VApi&&VApi.y().r)&&w.querySelector("#HClose"))&&(v.click(),t("#showCommands").click()),window.VApi&&VApi.t(102,1e3)}else window.VApi&&VApi.t(101,1e3)}function Y(n,e,o){var i,r,a,c,l,f=null,g=null,p="";try{(i=W(o?e:e.replace(/\xa0/g," ")))instanceof Error?g=i:i?f=i:p=s("notJSON")}catch(n){g=n}return null!=g&&(p=(r=/^(\d+):(\d+)$/.exec(p=g?(g.message||g)+"":s("exc")+(""!==g?g:s("unknown"))))?s("JSONParseError",[r[1],r[2]]):p),f?(n=+new Date(f&&f.time||("object"==typeof n?+n:n))||0,"Vimium C"!==f.name&&"Vimium++"!==f.name||n<1e4&&n>0?(p=s("notVCJSON"),alert(p)):(a=_.Po.keyMappings.fu?1:new Promise(function(n){var e=t("script[src*=options_checker]")||B("options_checker.js"),o=function(){e.removeEventListener("load",o),n(1)};G.ns="",e.addEventListener("load",o)}),c=n,l=f,void Promise.all([u.r.pn("Commands"),u.r.pn("Exclusions"),a]).then(function(){setTimeout(K,17,c,l,o)}))):alert(p)}function W(n){function t(){return/a?/.test("")}function e(n){for(var t=n.length;i.length<t;i+=i);return i.slice(0,t)}var o,i,r,s,a,c,l,u=/[^\r\n]+/g;if(!n||!(n=n.trimRight()))return null;i=" ";try{return r=JSON.parse(n.replace(/"(?:\\[\\\"]|[^"])*"|'(?:\\[\\\']|[^'])*'|\/\/[^\r\n]*|\/\*[^]*?\*\/|#[^\r\n]*/g,function(n){var t=n[0];return"/"===t||"#"===t?n.startsWith("/*")?n.replace(u,e):e(n):n})),t(),r}catch(n){if(o=/\b(?:position (\d+)|line (\d+) column (\d+))/.exec(n+""),t(),!o||!o[0])throw n}return o[2]?(s=+o[2],a=+o[3]):+o[1]>0?(c=n.includes("\r")?n.includes("\r\n")?"\r\n":"\r":"\n",a=(l=n.slice(0,+o[1]).split(c))[(s=l.length)-1].length+1):s=a=1,new SyntaxError(s+":"+a)}var Z,nn;t("#showCommands").onclick=function(n){var t,e,o;if(window.VApi&&VApi.z){if(e=VApi.y().r,n&&n.preventDefault(),e&&(t=e.querySelector("#HClose"))&&(o=null!=e.querySelector(".HelpCommandName"),E(t),o))return;VApi.p({H:12}),n||setTimeout(function(){var n=VApi.y(),t=n.r&&n.r.querySelector("#HelpDialog");t&&t.querySelector("#HClose").addEventListener("click",function(){location.hash=""})},100)}},J.prototype.Vs=function(n){var t,e,o,i,r,a,c,l,u;if(!n||!this.Nt){for(e=/^([:^]?[a-z\-?*]+:\/\/)?((?:[^\/]|\/])+)(\/[^\]].*|\/?$)/,o=/\\\./g,a=0,c=t=this.mu();a<c.length;a++)(r=e.exec(i=(l=c[a]).pattern.replace("(?:[^./]+\\.)*?","*.")))&&r[1]&&r[2]&&(i=r[3]?r[3].replace(o,"."):"",(r=r[2].replace(o,".").split(".")).reverse(),i=r.join(".")+i),l.q=i;t.sort(function(n,t){return n.q<t.q?-1:n.q===t.q?0:1}),this.au(t),this.eu(),n&&(u=this,this.Nt=setTimeout(function(n,t){n.firstChild.data=t,u.Nt=0},1e3,n,n.firstChild.data),n.firstChild.data=s("o3_2"))}},t("#exclusionSortButton").onclick=function(){return _.Po.exclusionRules.Vs(this)},Z="",window.addEventListener("unload",function(){Z&&URL.revokeObjectURL(Z)}),t("#exportButton").onclick=function(n){var t,e,o,i,r,s,a,c,l,u,f,g,p,d,_,m,b;for(Z&&(URL.revokeObjectURL(Z),Z=""),e=!!n&&(n.ctrlKey||n.metaKey||n.shiftKey),o=new Date,(t=Object.create(null)).name="Vimium C",e||(t["@time"]=o.toLocaleString(),t.time=o.getTime()),t.environment={extension:N.$.Ee,platform:N.$.Ye},t.environment.chrome=S,i=[],r=localStorage,s=N.me,a=0,c=r.length;a<c;a++)(l=r.key(a)).includes("|")||l.endsWith("_f")||"findModeRawQueryList"===l||l.endsWith("CSS")||i.push(l);for(i.sort(),u=0,f=i;u<f.length;u++)g=r.getItem(l=f[u]),"string"!=typeof s[l]?t[l]=l in s?N.de(l):g:g.includes("\n")?(t[l]=g.split("\n")).push(""):t[l]=g,"omniBlockList"===l&&t[l]&&(t[l]="string"==typeof t[l]?X(t[l]):t[l].map(X));p=JSON.stringify(t,null,"\t"),d=Q(o),"win"===t.environment.platform&&(p=p.replace(/\n/g,"\r\n")),t=null,_="vimium_c-",_+=e?"settings":d.replace(/[\-:]/g,"").replace(" ","_"),_+=".json",m=new Blob([p],{type:"application/json",endings:"native"}),(b=document.createElement("a")).download=_,b.href=URL.createObjectURL(m),E(b),Z=b.href,console.info("EXPORT settings to %c%s%c at %c%s%c.","color:darkred",_,"color:auto","color:darkblue",d,"color:auto")},(nn=t("#settingsFile")).onclick=null,nn.onchange=function(){var n,t,e,o=this.files[0];this.value="",o&&(n=_.Po.vimSync.iu?102400:10485760,o.size&&o.size>n?alert(s("JSONTooLarge",[o.name,n/1024])):(t=new FileReader,e=o.lastModified||o.lastModifiedDate||0,t.onload=function(){return Y(e,this.result,false)},t.readAsText(o)))},(nn=t("#importOptions")).onclick=null,nn.onchange=function(){var n;t("#importButton").focus(),"exported"!==this.value?("../settings_template.json",S>=47?fetch("../settings_template.json").then(function(n){return n.text()}).then(function(n){return Y(0,n,true)}):((n=new XMLHttpRequest).open("GET","../settings_template.json",true),n.responseType="text",n.onload=function(){return Y(0,this.responseText,true)},n.send())):E(t("#settingsFile"))},nn=null,window.Os&&(function(){var n,e=window.Os;delete window.Os,(n=t(e[0])).onclick&&n.onclick(e[1])})();