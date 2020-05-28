"use strict";var Commands={t:function(e,o){var t,a,n,i,r=o,s=e.length;if(s<=r)return null;for(t=Object.create(null);r<s;)0===(a=(n=e[r++]).indexOf("="))||"__proto__"===n?console.log(0===a?"Missing":"Unsupported","option key:",n):a<0?t[n]=true:(i=n.substring(a+1),t[n=n.substring(0,a)]=i&&this.i(i));return n?t:null},i:function(e){try{return JSON.parse(e)}catch(e){}if(!e.startsWith('"'))return e;try{return JSON.parse(e)}catch(e){}return e},s:function(e){var o,t,n,i,r,s,l,c,u,d=0,b=0,m=Object.create(null),p=Object.create(null),g=Object.create(null),T=Object.create(null),v=a.Wa,k="color:red",f=e.replace(/\\\n/g,"").replace(/[\t ]+/g," ").split("\n");if("unmapAll"!==f[0]&&"unmapall"!==f[0])for(n=(l=this.u).length;0<n;)m[l[n-=2]]=Utils.Va(l[n+1]);else n=1;for(i=f.length;n<i;n++)if((e=f[n].trim())&&e.charCodeAt(0)>35){if("map"===(o=(t=e.split(" "))[0]))if((o=Utils.Fa(t[1]||""))&&"__proto__"!==o)if(o in g)console.log("Key %c%s",k,o,"has been mapped to",m[o].command);else if(t.length<3)console.log("Lacking command when mapping %c%s",k,o);else if(r=v[t[2]]){if(!((s=o.charCodeAt(0))>47&&s<58)){m[o]=Utils.Va(t[2],this.t(t,3),r),g[o]=true;continue}console.log("Invalid key: %c%s",k,o,"(the first char can not be '-' or number)")}else console.log("Command %c%s",k,t[2],"doesn't exist!");else console.log("Unsupported key sequence %c%s",k,o||'""','for "'+(t[2]||"")+'"');else{if("unmapAll"===o||"unmapall"===o){m=Object.create(null),p=Object.create(null),g=Object.create(null),T=Object.create(null),d=0,b>0&&console.log("All key mappings is unmapped, but there %s been %c%d error%s%c before this instruction",b>1?"have":"has",k,b,b>1?"s":"","color:auto");continue}if("mapkey"===o||"mapKey"===o)if(3!==t.length)console.log("MapKey needs both source and target keys:",e);else if((o=t[1]).length>1&&o.match(Utils.Ha).length>1||t[2].length>1&&t[2].match(Utils.Ha).length>1)console.log("MapKey: a source / target key should be a single key:",e);else{if(!(o in T)){T[o]=t[2],d++;continue}console.log("This key %c%s",k,o,"has been mapped to another key:",T[o])}else if("shortcut"===o||"commmand"===o)if(o=t[1],t.length<3)console.log("Lacking command name and options in shortcut:",e);else if(Settings.hn.Uc.indexOf(o)<0)console.log("Shortcut %c%s",k,o,"doesn't exist!");else{if(!(o in p)){p[o]=Utils.Va(o,this.t(t,2),v[o]);continue}console.log("Shortcut %c%s",k,o,"has been configured")}else if("unmap"!==o)console.log("Unknown mapping command: %c%s",k,o,"in",e);else if(2!==t.length)console.log("Unmap needs one mapped key:",e);else{if((o=Utils.Fa(t[1]))in m){delete g[o],delete m[o];continue}console.log("Unmapping: %c%s",k,o,"has not been mapped")}}++b}for(c=0,u=Settings.hn.Uc;c<u.length;c++)p[o=u[c]]||(p[o]=Utils.Va(o,null,v[o]));a.il=m,a.Lc=p,a.Vc=d>0?T:null,Settings.Ya.Za=Settings.Ya.Za>0?~b:b},b:function(){var e,o,t,n,i,r,s,l,c,u,d,b=a,m=b.Cu=Object.create(null),p=Utils.Ha,g=Settings.Ya,T=g.Za;for(T<0&&(g.Za=~T),e=10;0<=--e;)m[e]=1;for(t in m["-"]=1,o=Commands,b.il)if(0!==(i=(n=t.match(p)).length-1)){for(s=r=m,l=0;(s=r[n[l]])&&l<i;)l++,r=s;if(0!==s){for(null!=s&&o.p(s,t);l<i;)r=r[n[l++]]=Object.create(null);r[n[i]]=0}else o.p(t,n.slice(0,l+1).join(""))}else t in m&&o.p(m[t],t),m[t]=0;for(t in g.Za?console.log("%cKey Mappings: %o errors found.","background-color:#fffbe5",g.Za):T<0&&console.log("The new key mappings have no errors"),c=Exclusions?Exclusions.m():null,u=function(e){var o,t;for(o in e)0!==(t=e[o])?u(t):true===c||0!==m[o]||c&&o in c||delete e[o]},m)0!==(d=m[t])&&1!==d&&u(d)},p:function(e,o){console.log("inactive key:",e,"with",o),++Settings.Ya.Za},u:["?","showHelp","j","scrollDown","k","scrollUp","h","scrollLeft","l","scrollRight","gg","scrollToTop","G","scrollToBottom","zH","scrollToLeft","zL","scrollToRight","<c-e>","scrollDown","<c-y>","scrollUp","d","scrollPageDown","u","scrollPageUp","r","reload","gs","toggleViewSource","R","reloadGivenTab","<a-R>","reopenTab","<a-r>","reloadTab","<a-t>","createTab","<a-c>","previousTab","<a-C>","nextTab","<a-v>","nextTab","i","enterInsertMode","v","enterVisualMode","V","enterVisualLineMode","<f8>","enterVisualMode","H","goBack","L","goForward","gu","goUp","gU","goToRoot","gi","focusInput","f","LinkHints.activate","F","LinkHints.activateModeToOpenInNewTab","<a-f>","LinkHints.activateModeWithQueue","/","enterFindMode","n","performFind","N","performBackwardsFind","<a-n>","performAnotherFind","[[","goPrevious","]]","goNext","yy","copyCurrentUrl","yf","LinkHints.activateModeToCopyLinkUrl","p","openCopiedUrlInCurrentTab","P","openCopiedUrlInNewTab","K","nextTab","J","previousTab","gt","nextTab","gT","previousTab","^","visitPreviousTab","<<","moveTabLeft",">>","moveTabRight","g0","firstTab","g$","lastTab","W","moveTabToNextWindow","t","createTab","yt","duplicateTab","x","removeTab","X","restoreTab","<a-p>","togglePinTab","<a-m>","toggleMuteTab","o","Vomnibar.activate","O","Vomnibar.activateInNewTab","T","Vomnibar.activateTabSelection","b","Vomnibar.activateBookmarks","B","Vomnibar.activateBookmarksInNewTab","ge","Vomnibar.activateUrl","gE","Vomnibar.activateUrlInNewTab","gf","nextFrame","gF","mainFrame","gn","toggleVomnibarStyle","<f1>","simBackspace","<F1>","switchFocus","<f2>","switchFocus","m","Marks.activateCreateMode","`","Marks.activate"]},a=a||{il:null,Cu:null,Lc:null,Vc:null,Wa:{__proto__:null,"LinkHints.activate":[0,0,0,2],"LinkHints.activateMode":[0,0,0,2],"LinkHints.activateModeToCopyLinkText":[0,0,0,2,{mode:130}],"LinkHints.activateModeToCopyLinkUrl":[0,0,0,2,{mode:137}],"LinkHints.activateModeToDownloadImage":[0,0,0,2,{mode:132}],"LinkHints.activateModeToDownloadLink":[0,0,0,2,{mode:136}],"LinkHints.activateModeToEdit":[0,1,0,2,{mode:258}],"LinkHints.activateModeToHover":[0,0,0,2,{mode:128}],"LinkHints.activateModeToLeave":[0,0,0,2,{mode:129}],"LinkHints.activateModeToOpenImage":[0,0,0,2,{mode:133}],"LinkHints.activateModeToOpenIncognito":[0,0,0,2,{mode:138}],"LinkHints.activateModeToOpenInNewForegroundTab":[0,0,0,2,{mode:3}],"LinkHints.activateModeToOpenInNewTab":[0,0,0,2,{mode:2}],"LinkHints.activateModeToOpenVomnibar":[0,1,0,2,{mode:257}],"LinkHints.activateModeToSearchLinkText":[0,0,0,2,{mode:131}],"LinkHints.activateModeWithQueue":[0,0,0,2,{mode:66}],"LinkHints.unhoverLast":[0,1,0,4],"Marks.activate":[0,0,0,5],"Marks.activateCreateMode":[0,0,0,5,{mode:"create"}],"Marks.clearGlobal":[0,1,1,37],"Marks.clearLocal":[0,1,1,37,{local:true}],"Vomnibar.activate":[0,0,1,33],"Vomnibar.activateBookmarks":[0,1,1,33,{mode:"bookm"}],"Vomnibar.activateBookmarksInNewTab":[0,1,1,33,{mode:"bookm",newtab:true}],"Vomnibar.activateEditUrl":[0,0,1,33,{url:true}],"Vomnibar.activateEditUrlInNewTab":[0,0,1,33,{url:true,newtab:true}],"Vomnibar.activateHistory":[0,1,1,33,{mode:"history"}],"Vomnibar.activateHistoryInNewTab":[0,1,1,33,{mode:"history",newtab:true}],"Vomnibar.activateInNewTab":[0,0,1,33,{newtab:true}],"Vomnibar.activateTabSelection":[0,1,1,33,{mode:"tab",newtab:true}],"Vomnibar.activateUrl":[0,0,1,33,{url:true}],"Vomnibar.activateUrlInNewTab":[0,0,1,33,{url:true,newtab:true}],autoCopy:[0,1,0,18],autoOpen:[0,1,0,19],blank:[0,1,1,13],clearCS:[0,1,1,5,{type:"images"}],clearFindHistory:[0,1,1,34],clearGlobalMarks:[0,1,1,37],closeOtherTabs:[0,1,1,8],closeTabsOnLeft:[0,0,1,8,{dir:-1}],closeTabsOnRight:[0,0,1,8,{dir:1}],copyCurrentTitle:[0,1,1,28,{type:"title"}],copyCurrentUrl:[0,1,1,28],createTab:["Create new tab(s)",20,1,0],debugBackground:[0,1,1,14,{reuse:1,url:"chrome://extensions/?id=$id",id_mask:"$id"}],discardTab:["Discard some other tab(s)",0,1,12],duplicateTab:["Duplicate current tab for N times",20,1,1],enableCSTemp:[0,0,1,4,{type:"images",incognito:true}],enterFindMode:[0,1,1,32,{active:true}],enterInsertMode:[0,1,1,30],enterVisualLineMode:[0,1,1,31,{mode:"line"}],enterVisualMode:[0,1,1,31],firstTab:[0,0,1,6,{absolute:true}],focusInput:[0,0,0,21],focusOrLaunch:[0,1,1,14,{reuse:1}],goBack:[0,0,0,0,{count:-1}],goForward:[0,0,0,0],goNext:[0,1,1,29],goPrevious:[0,1,1,29,{rel:"prev"}],goToRoot:[0,0,1,21],goUp:[0,0,1,22],lastTab:[0,0,1,6,{count:-1,absolute:true}],mainFrame:[0,1,1,25],moveTabLeft:[0,0,1,23],moveTabRight:[0,0,1,23,{dir:1}],moveTabToIncognito:[0,1,1,2,{incognito:true}],moveTabToNewWindow:["Move N tab(s) to new window (use limited=null/&lt;boolean&gt;)",0,1,2],moveTabToNextWindow:[0,0,1,3],nextFrame:[0,0,1,24],nextTab:[0,0,1,6],openCopiedUrlInCurrentTab:[0,1,1,14,{reuse:0,copied:true}],openCopiedUrlInNewTab:["Open the clipboard's URL in N new tab(s)",20,1,14,{copied:true}],openUrl:['open URL (use url="", urls:string[], reuse=-1/0/1/-2, incognito, window, end)',20,1,14],parentFrame:[0,0,1,26],passNextKey:[0,0,0,13],performAnotherFind:[0,0,1,32,{index:"other"}],performBackwardsFind:[0,0,1,32,{count:-1}],performFind:[0,0,1,32],previousTab:[0,0,1,6,{count:-1}],quickNext:[0,0,1,6],reload:[0,1,0,15],reloadGivenTab:[0,0,1,19,{single:true}],reloadTab:["Reload N tab(s) (use hard, bypassCache)",0,1,18],removeRightTab:[0,0,1,9],removeTab:["Close N tab(s) (use allow_close, limited=null/&lt;boolean&gt;, left)",0,1,7],reopenTab:[0,1,1,20],restoreGivenTab:[0,0,1,11],restoreTab:["Restore closed tab(s)",25,1,10],scrollDown:[0,0,0,7],scrollFullPageDown:[0,0,0,7,{view:"view"}],scrollFullPageUp:[0,0,0,7,{count:-1,view:"view"}],scrollLeft:[0,0,0,7,{count:-1,axis:"x"}],scrollPageDown:[0,0,0,7,{dir:.5,view:"view"}],scrollPageUp:[0,0,0,7,{dir:-.5,view:"view"}],scrollPxDown:[0,0,0,7,{view:1}],scrollPxLeft:[0,0,0,7,{count:-1,axis:"x",view:1}],scrollPxRight:[0,0,0,7,{axis:"x",view:1}],scrollPxUp:[0,0,0,7,{count:-1,view:1}],scrollRight:[0,0,0,7,{axis:"x"}],scrollTo:[0,0,0,7,{dest:"min"}],scrollToBottom:[0,0,0,7,{dest:"max"}],scrollToLeft:[0,0,0,7,{axis:"x",dest:"min"}],scrollToRight:[0,0,0,7,{axis:"x",dest:"max"}],scrollToTop:[0,0,0,7,{dest:"min"}],scrollUp:[0,0,0,7,{count:-1}],searchAs:[0,1,0,20,{copied:true,selected:true}],searchInAnother:[0,1,1,15],showHelp:[0,1,1,35],simBackspace:[0,1,0,16,{act:"backspace"}],switchFocus:[0,1,0,16],toggleCS:[0,0,1,4,{type:"images"}],toggleLinkHintCharacters:[0,1,1,38,{key:"linkHintCharacters"}],toggleMuteTab:[0,1,1,17],togglePinTab:["Pin or unpin N tab(s)",0,1,16],toggleSwitchTemp:[0,1,1,38],toggleViewSource:[0,1,1,36],toggleVomnibarStyle:[0,1,1,39,{style:"dark"}],visitPreviousTab:[0,0,1,27]}};Backend.fl&&(Commands.s(Settings.ic("keyMappings")),Commands.b(),Settings.ic("vimSync")||(Commands=null),chrome.commands.onCommand.addListener(Backend.sl)),Commands&&(Settings.lc.keyMappings=function(e){return null!=e&&Commands.s(e),Commands.b(),this.fc({N:9,m:a.Vc,k:a.Cu})});