"use strict";"object"==typeof VApi&&VApi&&"function"==typeof VApi.d&&VApi.d(1);var t=t||"",u=u||"",s={g:0,y:function(e){var t,n,r,o,i,u,a;return _.T(e),(t=s).I.o=(e.mode||"")+""||"omni",t.I.t=0,t.M(2,!!e.currentWindow),t.M(4,(e.preferTabs||"").includes("new")),t.M(8,!!e.tree),t.M(16,null),t.M(32,!!e.noTabs),t.S=!!e.icase,t.A=!!e.newtab,t.E=e.autoSelect,t.O=false===e.searchInput,t.R=null,n=e.url,r=e.keyword,o=e.p,u=devicePixelRatio,a=t.x=u<.98?1/u:1,t.C((.8*e.w+24*e.z)/u),t.I.r=Math.max(3,Math.min(0|(e.h/a/u-t.U-78)/t.L,t.F)),t.K&&t.B(e.t),t.P.zoom=a>1?a+"":"",t.I.i&&(t.$='" style="background-image: url(&quot;chrome://favicon/size/16@'+(u=1===u?1:u<3?2:u<3.5?3:4)+"x/"),r=(r||"")+"",null==n?t.D(r&&r+" "):(o?(i=o.s,n=o.u,r||(r=o.k)):null===o?(n=_.W(n).replace(/\s$/g,"%20"),!r&&/^https?:\/\//i.test(n)&&(t.R=115==(32|n.charCodeAt(4)),n=n.slice(t.R?8:7,n.indexOf("/",8)===n.length-1?-1:void 0))):n=_.W(n,decodeURIComponent).trim().replace(t.V," "),r?t.D(r+" "+n,i=(i||0)+r.length+1,i+n.length):t.D(n))},Q:false,G:"",Z:"",J:"",X:true,Y:null,ee:0,te:Math.min(Math.max(3,0|window.VomnibarMaxPageNum||10),100),ne:false,re:false,R:null,oe:null,ie:false,ue:0,ae:0,le:0,ce:false,se:false,fe:0,de:false,_e:false,A:false,E:false,pe:false,O:false,me:false,ve:0,he:false,x:1,we:0,ge:0,ye:null,P:null,be:null,ke:null,Te:true,Ie:0,Me:0,Se:null,Ne:null,Ae:null,Ee:null,Oe:-1,Re:0,xe:0,He:0,Ce:0,Ue:0,Le:0,Fe:1,qe:998,Ke:2,S:false,Be:0,Pe:null,F:0,je:0,$e:77,U:80,L:44,De:"",We:null,Ve:null,Qe:{passive:false,capture:true},ze:function(){var e=s;e.se=true,setTimeout(e.Ge,34),document.body.addEventListener("wheel",e.Ze,e.Qe)},Je:function(e){var t=s,n=t.ye;if(t.Q=t.se=t.ne=t.re=t._e=t.de=false,t.fe=0,document.body.removeEventListener("wheel",t.Ze,t.Qe),t.xe>0&&clearTimeout(t.xe),window.onkeyup=null,n.blur(),e||w.Xe({H:9,t:2,k:t.Ie}),t.P.cssText="display: none;",t.Se.textContent=n.value="",t.Se.style.height="",t.ke.remove("empty"),t.Se.classList.remove("no-favicon"),t.Ye(0),t.me)return t.et();t.Re=requestAnimationFrame(t.tt),t.xe=setTimeout(t.tt,35)},tt:function(){var e=s;cancelAnimationFrame(e.Re),clearTimeout(e.xe),e.ge&&e.et()},et:function(){w.nt({N:0});var e=s;e.xe=e.ge=e.ae=e.le=e.Ce=e.Ue=e.ue=e.ee=e.Ie=e.Le=0,e.x=1,e.Y=e.Ne=e.oe=e.R=null,e.I.q=e.Z=e.G=e.J="",e.I.o="omni",e.I.t=0,e.ie=false,e.Ae?setTimeout(e.Ae,0):/a?/.test(""),e.Ae=null},D:function(e,t,n){var r=s;r.G=e,r.X=r.se=false,r.oe=r.R,r.I.q=r.Z=e&&e.trim().replace(r.V," "),r.ge=0,r.Q=true,r.rt(0,t<=n?function(){s.ye.value===s.G&&s.ye.setSelectionRange(t,n)}:null),r.K&&r.K(),r.ye.value=r.G},Ge:function(e){var t=s;if(!t.se)return t.fe=0,void(t.de=false);t.fe=performance.now(),t.de=false,false!==e?(t.ye.focus(),t.de&&t.ce||(e=e?0|e:0)<5&&e>=0&&setTimeout(t.Ge,33,e+1)):w.Xe({H:9,t:2,k:t.Ie})},rt:function(e,t){var n=s;if(n.Ne=t||null,e>=0){if(n.re=false,n.xe>0&&clearTimeout(n.xe),0===e)return n.ot()}else{if(n.xe>0)return;e=n.je}n.xe=setTimeout(n.it,e)},ut:function(e){var t=s.Oe,n=s.Te;s.X=false,s.C(),s.rt(e,function(){var e=s.Y.length;!n&&t>=0&&e>0&&(t=Math.min(t,e-1),s.Oe=0,s.Te=false,s.at(t)),s.ce||s._e||s.Ge()})},lt:function(e){var t,n,r,o,i,u=s,a=u.ce,l=u._e;return u.Te=false,-1===e?(u.oe=u.R,u.ne=false,u.ye.value=u.G,void(a||(u.Ge(),u._e=l))):(l&&a&&u.ye.blur(),(t=u.Y[e]).ct?u.st(t,t.ct):(null==t.ft&&(t.ft=t.u.startsWith("https://")),"history"!==t.e&&"tab"!==t.e?(null==t.ct&&(_.dt(t),t.ct=""),u.st(t,t.t),void("math"===t.e&&u.ye.select())):(n=!t.t,r=t.u,o=_.dt(t),i=n?r:_.W(r,decodeURIComponent),!n&&i.length===r.length&&r.includes("%")&&(i=t.t,o&&(i.lastIndexOf("://",5)<0&&(i=(7===o?"http://":"https://")+i),!r.endsWith("/")&&i.endsWith("/")||(i+="/"))),void w.Xe({H:2,i:e,u:i}))))},ct:function(e){var t=e.i,n=e.s,r=s.Y[t];if(r.ct=n?(s.I.o.endsWith("omni")?"":":o ")+n.k+" "+n.u+" ":r.t,t===s.Oe)return s.st(r,r.ct)},_t:function(){var e,t,n=s;if(!(n.Oe<0))return n.Te?(n.G=n.ye.value,n.lt(n.Oe)):(e=n.Y[n.Oe],t=n.ye.value.trim(),n.st(e,t=t===(e.title||e.u)?e.ct||e.t:e.title&&t===e.u?e.title:t===e.t?e.u:e.t))},st:function(e,t){var n=10*t.length,r=n>innerWidth-84;s.ye.value=t,r&&(s.ye.scrollLeft=n),s.oe=e.ft&&t===e.t,s.ne=t!==e.ct||e.ct===e.t},at:function(e){var t,n,r=s;r.xe||(t=r.Se.children,n=r.Oe,(r.Te||n<0)&&(r.G=r.ye.value),r.lt(e),r.Oe=e,n>=1&&t[n-1].classList.remove("p"),n>=0&&t[n].classList.remove("s"),e>=1&&t[e-1].classList.add("p"),e>=0&&t[e].classList.add("s"))},pt:["space","pageup","pagedown","end","home","left","up","right","down","","","","","insert","delete"],mt:["Semicolon","Equal","Comma","Minus","Period","Slash","Backquote","BracketLeft","Backslash","BracketRight","Quote","IntlBackslash"],vt:{__proto__:null,Alt:1,AltGraph:1,Control:1,Meta:1,OS:1,Shift:1},ht:185,wt:function(e){var t,n,r,o,i,u=e.key,a=e.shiftKey;return u?(i=void 0,"Nu"!==(o=(r=e.code).slice(0,2))&&("Ke"!==o&&"Di"!==o&&"Ar"!==o||(r=r.slice(r<"K"?5:3)),u=1===r.length?!a||r<"0"||r>"9"?r:")!@#$%^&*("[+r]:this.vt[u]?s.Be&&e.location===s.Be?"modifier":"Alt"===u?u:"":"Escape"===u?"esc":r?(i=this.mt.indexOf(r))<0?r:";=,-./`[\\]'\\:+<_>?~{|}\"|"[i+12*+a]:u),u=a&&u.length<2?u:"Unidentified"===u?"":u.toLowerCase()):(n=void 0,u=(t=e.keyCode)>31&&t<47?this.pt[t-32]:t<47||93===t?8===t?"backspace":27===t?"esc":9===t?"tab":13===t?"enter":(93===t||t>15&&t<19)&&s.Be&&s.Be===e.location?"modifier":18===t?"alt":"":t>111&&t<132?"f"+(t-111):(u=e.keyIdentifier).startsWith("U+")&&(n=parseInt(u.slice(2),16))?n<91&&n>32?a&&n>47&&n<58?")!@#$%^&*("[n-48]:String.fromCharCode(n<65||a?n:n+32):n>this.ht&&((n-=186)<7||(n-=26)>6&&n<11)?";=,-./`[\\]'\\:+<_>?~{|}\"|"[n+12*+a]:"":""),u},gt:function(e){var t,n,r,o,i,u=s.wt(e),a=u;return u&&(n=(e.altKey?"a-":"")+(e.ctrlKey?"c-":"")+(e.metaKey?"m-":""),r=u.toLowerCase(),o=u.length>1,i=e.shiftKey&&(o||n&&u.toUpperCase()!==r)?n+"s-":n,a=o||i?i+r:u,s.Pe&&(a=(t=s.Pe[a+":o"]||s.Pe[a])||(!o&&(t=s.Pe[r])&&t.length<2?u===r?i+t:i+t.toUpperCase():a))),a},yt:{space:9,b:10,j:8,k:6,n:8,p:6,"[":1,"]":9,up:10,down:11,tab:6,delete:12},bt:{tab:8,esc:1,pageup:10,pagedown:11,up:6,down:8,f1:4,f2:5},kt:function(e){var t,n,r,o,i=s,u=e.keyCode,a=i.ce,l=229!==u?i.gt(e):"";if(i.Ie=u,!l)return i.He&&i.Ye(0),void(i.Me=!a||93===u&&i.Ke||229===u?0:1);if(t=0,r=l.slice(l.lastIndexOf("-")+1)||l&&"-","a-"===(o=l.length>1?l.slice(0,l.indexOf("-")+1):"")||"m-"===o){if("f2"===r)return i.Tt(a?3:2);if("a-"===o){if("a-alt"===l||"a-modifier"===l)return void(s.He=s.He||setTimeout(s.Ye,260,-1));if("down"===r||"up"===r)return i.Tt(r<"u"?8:6);if(i.He&&i.Ye(0),r>="0"&&r<="9"&&(i.Ke||l.includes("c-")))return void((n=+r||10)<=i.Y.length&&i.It(true,n-1));if("enter"===r)return void i.It(l,!i.Oe&&i.Te?-1:i.Oe)}if(a&&(1===r.length&&r>"a"&&r<"g"&&"c"!==r||"backspace"===r&&i.Ke))return i.Mt(1===r.length?r.charCodeAt(0)-96:-1);if("a-"===o)return void(i.Me=0)}if("enter"!==r){if("c-"===o||"m-"===o)if(l.includes("s-"))t="f"===r?11:"b"===r?10:0;else{if("up"===r||"down"===r||"end"===r||"home"===r)return e.preventDefault(),i.we=Date.now(),window.onkeyup=s.St,void w.nt({N:6,k:l,b:r});if("backspace"===r&&!i.Ke)return i.Mt(-1);"delete"===r?i.Me=1:t="["===r?1:"]"===r?9:i.yt[r]||0}else if("s-"===o)t=i.yt[r]||0;else if(t=i.bt[r]||0);else{if(r>"f0"&&r<"f:")return void(i.Me=0);if(8===u)return void(a&&(i.Me=1));if("space"!==r);else if(a){if((i.Oe>=0||i.Y.length<=1)&&i.ye.value.endsWith("  "))return i.It(true)}else t=2}if(t)return i.Tt(t);a||1!==r.length||isNaN(n=parseInt(r,10))?i.Me=(a?!(93===u&&i.Ke):l.length>1)?1:0:(n=n||10)<=i.Y.length&&i.It(l,n-1)}else"Enter"===e.key||13===u?window.onkeyup=i.Nt:i.It(l)},Tt:function(e){var t,n,r=s;switch(e){case 1:if("Range"!==getSelection().type||!r.ce)return r.Je();(n=r.ye).setSelectionRange(t="backward"!==n.selectionDirection&&n.selectionEnd<n.value.length?n.selectionStart:n.selectionEnd,t);break;case 2:r.Ge();break;case 3:r._e=true,r.ye.blur();break;case 4:case 5:r.ce?5===e?r.Ge(false):document.execCommand("delete"):r.Ge();break;case 6:case 8:return r.at(t=((t=r.Y.length+1)+r.Oe+(e-6))%t-1);case 9:return r._t();case 10:case 11:return r.At(10!==e);case 12:return r.Et()}},Mt:function(e){var t=getSelection(),n=4===e||e<0;"Caret"===t.type&&t.modify(n?"extend":"move",e<4?"backward":"forward","word"),n&&s.ye.selectionStart<s.ye.selectionEnd&&document.execCommand("delete")},Ot:/(?:^|\s)(\+\d{0,2})$/,At:function(e){var t,n,r,o,i,u,a,l,c,f=s;if(!f.ie){if(n=f.I.r,r=(t=f.Y.length)?f.Y[0].e:"",o=+e||-1,r=(f.Te||f.Oe<0?f.ye.value:f.G).trimRight(),u=0|((i=f.Ot.exec(r))&&i[0]),t>=n)o*=n;else if(u>0&&o<0)o*=u>=n?n:1;else if(t<(t&&"tab"!==f.Y[0].e?n:3))return;a=Math.min(Math.max(0,u+o),f.te*n-n),o>0&&(a===u||a>=f.ee&&f.ee>0)||(i&&(r=r.slice(0,-i[0].length)),r=r.trimRight(),u=Math.min(f.ye.selectionEnd,r.length),a>0&&(r+=" +"+a),l=f.ye.selectionStart,c=f.ye.selectionDirection,f.ye.value=r,f.ye.setSelectionRange(l,u,c),f.re=false,f.rt(0))}},It:function(e,t){var n,r,o,i,u,a,l=s,c=null!=t?t:l.Oe;if("string"==typeof e&&(e=(e.includes("a-")?1:0)+(e.includes("c-")?2:0)+(e.includes("m-")?4:0)+(e.includes("s-")?8:0)),l.ue=null==e?l.ue:true===e?l.A?-1:0:6&e?8&e?-2:-1:8&e||!l.A?0:-1,-1===c){if(!(n=l.ye.value.trim()))return;if(l.O&&!e&&!n.includes("://"))try{new URL(n)}catch(e){return}}if(null==t&&l.xe){if(!l.ne)return l.xe>0?l.rt(0,l.It):void(l.Ne=l.It);c=-1}if(r=c>=0?l.Y[c]:{u:l.ye.value.trim()},o=l.ue,i=l.oe,u=function(){null!=r.s?s.Rt(r):s.xt(r.u,o,i),/a?/.test("")},-1===c&&e&&!0!==e&&1&e&&/^\w+(-\w+)?$/.test(r.u)&&(a=l.Y.filter(function(e){return"domain"===e.e}),r.u=a.length?a[0].u:"www."+r.u+".com"),l.ue<-1)return u();l.Ae=u,l.Je()},Nt:function(e){var t=e.keyCode;false!==e.isTrusted&&(window.onkeyup=null,s.Ie=0,s.It((e.altKey||18===t?1:0)+(e.ctrlKey||17===t?2:0)+(e.metaKey||t>90&&t<94?4:0)+(e.shiftKey||16===t?8:0)))},Et:function(){if(!(s.Oe<0)){var e=s.Y[s.Oe],t=e.e;if("tab"===t||"history"===t&&null==e.s)return w.Xe({H:21,t:t,u:"tab"===t?e.s+"":e.u}),s.Ht();w.nt({N:4,k:95})}},Ct:function(e){var t=s,n=e.target;if(false!==e.isTrusted&&e instanceof MouseEvent&&!e.button&&n!==t.ye&&"Range"!==getSelection().type){if(n===t.ye.parentElement)return t.Ge();if(t.xe)_.Ut(e,1);else{for(;n&&n.parentElement!==t.Se;)n=n.parentElement;n&&(t.Ie=0,t.It(e.altKey|2*e.ctrlKey|4*e.metaKey|8*e.shiftKey,[].indexOf.call(t.Se.children,n)))}}},Lt:function(e){var t,n,r=e.target,o=HTMLAnchorElement;if(r instanceof o||(r=r.parentElement),r instanceof o&&!r.href){for(t=r;t&&t.parentElement!==s.Se;t=t.parentElement);(n=[].indexOf.call(s.Se.children,t))>=0&&(r.href=s.Y[n].u)}},Ft:function(){var e,t,n=this;0===n.selectionStart&&"backward"===n.selectionDirection&&32===(e=n.value).charCodeAt(t=n.selectionEnd-1)&&t!==e.length-1&&((e=e.slice(0,t).trimRight()).includes(" ")||n.setSelectionRange(0,e.length,"backward"))},it:function(){if(s)return s.ot()},Ze:function(e){var t,n,r,o,i,u;e.ctrlKey||e.metaKey||false===e.isTrusted||(t=s,n=e.deltaY,r=Date.now(),o=e.deltaMode,t.Q&&t.be.contains(e.target)||(_.Ut(e,1),!e.deltaX&&n&&t.Q&&!t.ie&&((r-t.Ue>(o?330:120)||r+33<t.Ue)&&(t.Le=0,t.Ce=0),t.Ue=r,i=t.Le+(o?1===o?100*n:300*n:n),(u=Math.abs(i))<300||t.Ce&&r-t.Ce<150&&r+33>t.Ce?t.Le=i:(t.Le=u%300*(u>0?1:-1),t.Ce=r,t.At(n>0)))))},qt:function(e){var t,n,r,o,i,u=s,a=u.Z,l=u.ye.value,c=l.trim();if(u._e=false,c!==(-1===u.Oe||u.Te?a:u.Y[u.Oe].t)&&(1!==u.ae||!c.startsWith(a))){if(c||(u.oe=u.R=null),t=u.ye.selectionStart,u.ie);else if(t>l.length-2){if(l.endsWith(" +")&&!u.xe&&c.slice(0,-2).trimRight()===a)return}else(n=u.Ot.exec(a))&&c.endsWith(n[0])&&(r=n[0].length,(o=l.slice(0,l.trimRight().length-r)).trim()!==a.slice(0,-r).trimRight()&&(u.ye.value=o.trimRight(),u.ye.setSelectionRange(t,t)));null!=(i=!!e&&e.isComposing)&&(i&&!u.re&&(u.J=u.ye.value.trim()),u.re=i),u.rt(-1)}},Kt:function(e){var t,n,r,o,i,u,a,l=s,c=e.l,f=c.length,d=f>0,_=l.ge,p=l.Se;if(l.Q){if(l.ee=e.t,l.ve=e.i,l.ae=e.m,l.le=e.s,l.Y=c,l.ie=f>0&&"search"===c[0].e,l.Oe=l.ie||(null==l.E?e.a:l.E&&d)?0:-1,l.Te=true,t=l.ge=Math.ceil(d?f*l.L+l.U:l.$e),n=t!==_,r=t>_||l.me,o=l.x*devicePixelRatio,i={N:2,h:t*o},_||(i.m=Math.ceil(l.I.r*l.L+l.U)*o),n&&r&&w.nt(i),l.Y.forEach(l.Bt),l.Ee(l.Y,p),l.Pt("inputmode",l.ie?"search":"url"),l.Pt("enterkeyhint",l.ie?"Search":"Go"),_||(l.P.display=""),u=l.ke,a="empty",d?u.remove(a):u.add(a),u=p.classList,a="no-favicon",l.ve?u.remove(a):u.add(a),d&&(0===l.Oe&&p.firstElementChild.classList.add("s"),p.lastElementChild.classList.add("b")),r)return l.jt();requestAnimationFrame(function(){return n&&w.nt(i),s.jt()})}},jt:function(){var e,t=s;if(t.se||t.ze(),!(t.xe>0))return t.xe=0,t.ne=false,(e=t.Ne)?(t.Ne=null,e.call(t)):void 0},Pt:function(e,t,n){n&&0===s.g&&(t=chrome.i18n.getMessage(t)||t),s.ye.getAttribute(e)!==t&&s.ye.setAttribute(e,t)},$t:function(e){var t=s.De&&" "+s.De+" ",n=" "+e.t+" ",r=!t.includes(n),o=(r?t+e.t:t.replace(n," ")).trim().replace(s.V," ");s.De=o,s.Dt(o),e.c||w.Xe({H:24,t:e.t,o:1,e:r})},Dt:function(e){var t,n,r,o,i,u,a,l;for(t=(e=" "+e+" ").includes(" dark "),s.Ve&&(s.Ve.textContent=t?"\u2600":"\u263d",s.Ve.classList.toggle("toggled",t)),n=e.includes(" mono-url "),r=0,o=document.querySelectorAll("style[id]");r<o.length;r++)a=" custom "==(u=" "+(i=o[r]).id+" ")||e.includes(u),i.sheet.disabled=!a,a&&(e=e.replace(u," "));e=e.trim().replace(s.V," "),(l=document.documentElement).className!==e&&(l.className=e),!!(16&s.I.f)!==n&&(s.M(16,n),s.Q&&!s.K&&s.Ht(document.hidden))},Wt:function(e){var t,n,r,o,i=_.T(e.d),u=i.s;null!=u&&s.De!==u&&(s.De=u,s.Dt(u)),null!=i.c&&s.Vt(i.c),null!=i.a&&(s.Be=i.a),null!=i.n&&(s.F=i.n),null!=i.t&&(s.je=i.t),void 0!==i.k&&(s.Pe=i.k),null!=i.l&&(n=+(t=i.l.split(","))[0],r=Math.min,o=Math.max,s.$e=o(24,r(n||77,320)),s.U=o(24,r(s.$e+((n=+t[1])||3),320)),s.L=o(14,r((n=+t[2])||44,120)))},Qt:function(e){var t=s,n=t.fe&&performance.now()-t.fe<120,r="blur"===e.type,o=e.target;false!==e.isTrusted&&w&&(t.de=true,t.Q&&o===window?(t.fe=0,n?t.zt(r):(setTimeout(t.zt,50,null),r?s.Ye(0):(w.Xe({H:20,c:"",n:1,i:-1,r:0}),1===t.g&&w&&setTimeout(function(){w&&!w.Gt&&w.nt({N:9})},50)))):o===t.ye&&(s.ce=!r)&&(s._e=false))},zt:function(e){if(s){var t=document,n=t.body.classList;!s.Q||(null!=e?!e:t.hidden||t.hasFocus())?n.remove("transparent"):n.add("transparent")}},K:function(){var e,t,n,r,o,i,u,a,l,c,f,d,p,m,v=s;if(window.onclick=function(e){s.Ct(e)},v.Ze=v.Ze.bind(v),_.T(v.yt),_.T(v.bt),e=v.Se=document.getElementById("list"),t=v.qe,n=addEventListener,r=v.ye=document.getElementById("input"),v.be=document.getElementById("bar"),v.ke=r.parentElement.classList,e.onmouseover=e.oncontextmenu=v.Lt,document.getElementById("close").onclick=function(){return s.Je()},n("keydown",v.St,true),n("focus",v.Qt,true),n("blur",v.Qt,true),r.oninput=v.qt.bind(v),r.onselect=v.Ft,v.Ee=_.Zt(document.getElementById("template").innerHTML),t<73&&(o=document.querySelector("style"))&&(o.textContent=o.textContent.replace("0 2px 7px","0 2px 10px").replace("0 0 1.5px","0 0 1px")),t<61&&((o=document.createElement("style")).type="text/css",o.textContent=".item, #input { border-width: "+(t<48?1:.01)+"px; }",document.head.appendChild(o)),i=function(e){(s.re="compositionstart"===e.type)&&(s.J=this.value.trim())},t<60&&r.addEventListener("compositionstart",i),r.addEventListener("compositionend",i),v.We&&document.head.appendChild(v.We),v.Ve=document.querySelector("#toggle-dark"),v.Ve&&(v.Ve.onclick=function(e){s.$t({t:"dark",c:e.ctrlKey}),s.ye.focus()}),v.Dt(v.De),0===v.g)for(u=0,a=document.querySelectorAll("[title]");u<a.length;u++)l=a[u],(c=chrome.i18n.getMessage(l.title.replace(" ","_")))&&(l.title=c);if(v.K=_.Zt=null,!(t>=52||null!=v.P.d)){for(f=(document.querySelector("style")||{}).textContent||"",d=/\.([a-z]+)\s?\{(?:[^}]+;)?\s*d\s?:\s*path\r?\s?\(\s?['"](.+?)['"]\s?\)/g,p=Object.create(null);m=d.exec(f);)p[m[1]]=m[2];v.Jt=function(e){var t=e.e,n=p[t];return n?t+'" d="'+n:t}}},Vt:function(e){var t=s.We;if(!e)return t&&t.remove(),void(s.We=null);t||((t=s.We=document.querySelector("#custom")||document.createElement("style")).type="text/css",t.id="custom",s.K||document.head.appendChild(t)),t.textContent=e},Jt:function(e){return e.e},B:function(e){var t,n,r,o,i,u,a=s,l=document.documentElement;a.P=l.style,a.g=e,t=0,i=a.qe>=58,2!==e&&location.origin.includes("-")&&(0===e?t=i||a.me?2:0:(i||a.me)&&null!=(o=l.dataset.favicons)?t=o&&"true"!==o.toLowerCase()?0:2:(i||a.me)&&(n=chrome.runtime.getManifest)&&(r=n())&&(t=(u=r.permissions||[]).indexOf("<all_urls>")>=0||u.indexOf("chrome://favicon/")>=0?a.me?2:1:0)),a.I.i=t},St:function(e){if(true===e.isTrusted||null==e.isTrusted&&e instanceof KeyboardEvent){if(s.Me=2,window.onkeyup){var t=e.keyCode,n=!e.repeat,r=0;s.we?(n||(r=Date.now())-s.we>40||r<s.we)&&(w.nt({N:n?8:7}),s.we=r):n=t>18||t<16,n&&(window.onkeyup=null)}else s.Q&&s.kt(e);0!==s.Me&&_.Ut(e,2===s.Me)}},Ye:function(e){var t=s.He;if(-1!==e&&0!==e){if(18!==e.keyCode)return;e=0}t!==e&&(t>0&&!e&&clearTimeout(t),-1===t!=!!e&&(document.body.classList.toggle("alt",!!e),(e?addEventListener:removeEventListener)("keyup",s.Ye,true)),s.He=e)},Xt:function(e){setTimeout(w.nt,0,{N:1,l:e.l})},Yt:0,C:function(e){s.I.c=Math.floor(((e||innerWidth)/s.x-84)/(16&s.I.f?7.7:4))},M:function(e,t){var n,r=null==t;r&&16===e&&(t=(" "+s.De+" ").includes(" mono-url ")),s.I.f!==(n=s.I.f&~e|(t?e:0))&&(s.I.f=n,16!==e||r||s.C())},en:null,I:{H:15,o:"omni",t:0,c:0,r:0,f:0,i:0,q:""},V:/\s+/g,ot:function(){var e,t,n,r=s,o=r.I,i=0;if(r.xe=-1,r.X){if(r.Z=e=r.ye.value.trim(),r.re&&(n=e.startsWith(t=r.J),e=(n?t:"")+(n?e.slice(t.length):e).replace(/'/g,"")),e=e.replace(r.V," "),r.S&&(e=e.toLowerCase()),e===o.q)return r.jt();o.t=r.ae<2||!e.startsWith(o.q)?0:3===r.ae?e.includes(" ")?0:8:(i=r.ae,r.le),o.q=e,r.ae=i,r.C()}else r.X=true,r.S&&(o.q=o.q.toLowerCase());return w.Xe(o)},$:"",Bt:function(e){var t;e.r=s.he?'\n\t\t\t<span class="relevancy">'+e.r+"</span>":"",(t=e.label)&&(e.label=' <span class="label">'+t+"</span>"),e.favIcon=(t=s.ve?e.u:"")&&s.$+_.tn(s.nn(e,t)||"about:blank")+"&quot;);"},nn:function(e,t){var n,r=t.slice(0,11).toLowerCase();return r.startsWith("vimium://")?1!==s.g?chrome.runtime.getURL("/pages/options.html"):location.protocol+"//"+u+"/pages/options.html":t.length>512||"javascript:"===r||r.startsWith("data:")?"":e.v||("history"===e.e||"tab"===e.e)&&t||(r.startsWith("http")||r.lastIndexOf("-",r.indexOf(":")+1||8)>0&&t.lastIndexOf("://",21)>0?(n=t.indexOf("/",t.indexOf("://")+3))>0?t.slice(0,n+1):t+"/":t)},xt:function(e,t,n){if(!/javascript:/i.test(e))return w.Xe({H:6,r:t,h:n,u:e,o:true}),-2!==t||s.Z&&!/^\+\d{0,2}$/.exec(s.Z)?void 0:s.Ht();w.nt({N:5,u:e})},Rt:function(e){if(w.Xe({H:5,a:s.ue>-2,s:e.s}),-2===s.ue)return s.Ht("tab"===e.e)},Ht:function(e){if(getSelection().removeAllRanges(),!e)return s.ut(150);window.onfocus=function(e){window.onfocus=null,false!==e.isTrusted&&w.Gt&&s.ut(17)}},rn:function(e){w&&false!==e.isTrusted&&(s.Q=false,s.xe>0&&clearTimeout(s.xe),w.nt({N:10}))}},_={T:function(e){return Object.setPrototypeOf(e,null)},Zt:function(e){var t=e.split(/\{\{(\w+)}}/g);return function(e,n){var r,o,i,u="",a=t.length-1;for(r=0;r<e.length;r++){for(o=0;o<a;o+=2)u+=t[o],u+="typeIcon"===(i=t[o+1])?s.Jt(e[r]):"index"===i?r+1:e[r][i]||"";u+=t[a]}n.innerHTML=u}},W:function(e,t){try{e=(t||decodeURI)(e)}catch(e){}return e},dt:function(e){var t,n,r=e.u,o=e.t,i=r.slice(0,8).toLowerCase(),u=i.startsWith("http://")?7:"https://"===i?8:0;return u>=r.length&&(u=0),t=!u,8===u&&((n=r.indexOf("/",u))>0?n<r.length:/:\d+\/?$/.test(r))&&(t=true),o?u&&(t&&!o.startsWith(i)&&(o=i+o),r.endsWith("/")&&!i.endsWith("/")&&i.includes("/")&&(o+="/")):o=!t&&u?r.slice(u):r,e.t=o,(i=e.title)&&(e.title=i.replace(/<\/?match>/g,"").replace(/&(amp|apos|gt|lt|quot);|\u2026/g,_.onHTMLEntity)),u},onHTMLEntity:function(e,t){return"amp"===t?"&":"apos"===t?"'":"quot"===t?'"':"gt"===t?">":"lt"===t?"<":""},tn:function(e){function t(e){var t=e.charCodeAt(0);return 38===t?"&amp;":39===t?"&apos;":t<39?"%22":60===t?"%3C":"%3E"}var n=/["&'<>]/g;return _.tn=function(e){return e.replace(n,t)},_.tn(e)},Ut:function(e,t){t&&e.preventDefault(),e.stopImmediatePropagation()}},w={Gt:null,nt:null,Xe:function(e){try{(this.Gt||this.on(9)).postMessage(e)}catch(e){w=null,this.nt({N:9})}},in:function(e){var t=e.N;43===t?s.Kt(e):44===t?s.ct(e):42===t?s.en&&s.en(e):45===t?s.Xt(e):46===t?s.$t(e):47===t&&s.Wt(e)},un:function(e){var t=e.data,n="number"==typeof t?t:t.N;0===n?s.y(t):2===n?s.Ge():1===n&&s.Je(1)},an:function(){w.Gt=null},on:function(e){var n={name:t?"vimium-c."+e+"@949380c":""+e},r=w.Gt=t?chrome.runtime.connect(t,n):chrome.runtime.connect(n);return r.onDisconnect.addListener(w.an),r.onMessage.addListener(w.in),r}};(function(){function e(e){if(e.source===parent){var t=e.data;if(!(t&&2===t.length&&t[0]>=0))return;o&&_.Ut(e,0),a(t[0],e.ports[0],t[1])}}var n,r,o,i,a,l;if("1.73"===document.documentElement.dataset.version){if(location.pathname.startsWith("/front/")||!(n=document.currentScript));else{if(!n.src.endsWith("/front/vomnibar.js")||/^(ht|s?f)tp/.test(n.src))return void n.remove();t=new URL(n.src).host,u=t}r=[],o=null===n,i=0,a=function(t,n,u){i<1||t!==i?i||r.push([t,n,u]):(i=-1,clearTimeout(l),o?removeEventListener("message",e,true):window.onmessage=null,s.me=!!n.sameOrigin,w.nt=n.postMessage.bind(n),n.onmessage=w.un,window.onunload=s.rn,w.nt({N:3,o:u?1:0}),u&&s.y(u))},l=setTimeout(function(){location.href="about:blank"},700),s.en=function(e){var t,n,o,u=e.l,l=e.s;for(s.en=null,s.qe=u.v,u.o||(s.ht=300),s.Ke=u.o,s.Pe=u.k,s.De=u.s,s.Wt({N:47,d:{c:u.c,n:u.n,t:u.t,l:u.l}}),i=l,t=0,n=r;t<n.length;t++)if((o=n[t])[0]===l)return r.length=0,a(o[0],o[1],o[2])},o?addEventListener("message",e,true):window.onmessage=e,w.on(8)}else location.href="about:blank"})();