LPSiteNotification=function(){var t=!1,e=!1,n=!1,r=function(t){for(var e=0;e<t.fields.length;++e)if("password"===t.fields[e].type)return!0;return!1},i=(a=!1,function(e){a||(a=!0,setTimeout(function(){a=!1},0),r(e)?(e.generatedPassword||(t=!0),bg.LPTabState.processPasswordSubmit({formData:e,callback:e.generatedPassword||LPContentScriptTools.isUnloading()?null:P})):e.fields.length>0&&(bg.LPTabState.processTextSubmit(e),bg.LPTabState.clear()))}),a,o=(u='input:not([type]),input[type="text"],input[type="email"],input[type="password"]',s=function(t){return t.value&&(t.value!==t.getAttribute("value")||t.value.length>1)&&LPContentScriptTools.isVisible(t)},c=function(t){for(var e,n=[],r=(t||document.body).querySelectorAll(u),i=0;i<r.length;++i)s(r[i])&&n.push(r[i]);return n},l=function(t){for(var e=[],n={},r={},i=t.length<1e3?t.length:1e3,a=0;a<i;++a){var o=t[a];switch(o.type){case"hidden":case"text":case"email":!o.value||"hidden"!==o.type&&LPContentScriptTools.isVisible(o)||(n.hasOwnProperty(o.value)?delete r[o.value]:(r[o.value]=o,n[o.value]=!0))}}var u,s={};return LPContentScriptTools.findTextNodes({searches:Object.keys(r),searchAll:!0,exactMatch:!0,allowEmails:!0}).filter(function(t){return!s.hasOwnProperty(t.match)&&(s[t.match]=!0,!0)}).forEach(function(t){t.parent&&"OPTION"!==t.parent.nodeName&&LPContentScriptTools.isVisible(t.parent)&&e.push(r[t.match])}),e},f=function(t){var e={type:t.type,value:t.value,id:t.id,label:LPContentScriptTools.getLabel(t),attributes:LPContentScriptTools.getAttributes(t,["name","ng-model","data-reactid"])};return"password"!==e.type&&"disc"===LPContentScriptTools.getCSS(t,"text-security")&&(e.type="password"),e},d=function(t,e){for(var n=[],r=0;r<t.length;++r){var i=t[r];"password"!==i.inputData.type&&(i.inputData.value=R.getUnmaskedValue({input:i.input,inputValue:i.inputData.value,form:e.form})),i.inputData.formname=e.form&&e.form.getAttribute("name")||"",n.push(i.inputData)}return{url:document.location.href,top:window===top,fields:n,generatedPassword:e.generatedPassword,username:R.getUsername()}},function(t){var e=c(t.form);t.form&&(e=l(t.form).concat(e));for(var n=[],r=0;r<e.length;++r){var a=e[r],o=f(a);n.push({input:a,inputData:o})}var u=d(n,t);return t.deferred||i(u),u}),u,s,c,l,f,d,p=(v=null,g=function(){v=null},function(t){return function(e){if(v=!1!==e.isTrusted&&!1!==v)try{t(e)}catch(t){Raven.captureException(t)}setTimeout(g,0)}}),v,g,m=(b=function(t,n,r){var i=h(t);return!(!i||!LPContentScriptTools.isVisible(i))&&(r&&!LPContentScriptTools.isClickable(i)?(e=!0,!1):!n.passwordChangeForm||i.value===t.value)},h=function(t){if(t.id)return document.getElementById(t.id);for(var e in t.attributes){var n=document.querySelector("input["+e+'="'+t.attributes[e]+'"]');if(n)return n}return null},T=function(t,e){for(var n=0;n<t.fields.length;++n){var r=t.fields[n];if("password"===r.type)return b(r,t,e)}return!1},w=function(t,e){var n=h(t);n&&n.addEventListener("input",p(function(){e(!0)}))},S=function(t,e){for(var n=0;n<t.fields.length;++n){var r=t.fields[n];"password"===r.type&&w(r,e)}},function(e,n){var r=0,i=5,a=null,o=!1,u=function(e){o||(t=!1,o=!0,clearInterval(a),n(e))};t?(a=setInterval(function(){var t=5==++r,n=T(e,t);n&&!t||u(n)},1e3),S(e,u)):u(T(e))}),b,h,T,S,w,L=function(t){if(!n){var e;if(n=!0,t.postSetup=function(){Topics.get(Topics.SITE_NOTIFICATION).publish(r)},bg.get("LPContentScriptFeatures").angularFrontendEnabled)var r=LPFrame.openAngularDialog("save-new",t,{css:{top:0,right:0}});else var r=LPFrame.openDialog("contentScriptSite",t,{css:{top:10,right:10}});r.onClose(function(){n=!1})}},P=function(t){LPContentScriptTools.isUnloading()||(Topics.get(Topics.SITE_NOTIFICATION_STATE).publish(t),bg.get("LPContentScriptFeatures").new_save_site&&t.dialogData&&!e&&csTop.LPSiteNotification.showSiteNotification(t))},C=(y=function(t){return(t=t.toLowerCase()).indexOf("submit")>-1||t.indexOf("save")>-1},E=function(t){for(var e=t.attributes,n=0;n<e.length;++n){var r=e[n];if(y(r.name)||y(r.value))return!0}return!1},function(t){if("INPUT"===t.nodeName)return"submit"===t.type||"button"===t.type&&E(t);for(var e=t;e&&0===e.getElementsByTagName("input").length;){if("BUTTON"===e.nodeName)return"submit"===e.type||E(e);if(E(e))return!0;e=e.parentElement}return!1}),y,E,N=function(t){switch(t.nodeName){case"TEXTAREA":case"SELECT":return!0;case"INPUT":switch(t.type){case"button":case"submit":return!1;default:return!0}default:return!1}},I=(D=null,O=[],A=function(t){for(var e=0;e<t.length;++e){var n=t[e];switch(n.type){case"attributes":if(n.target.getAttribute(n.attributeName)!==n.oldValue)return!0;break;default:return!0}}return!1},k=function(t){A(t)&&(O.forEach(function(t){t()}),x())},{reset:x=function(){D&&(D.disconnect(),D=null),O=[]},onChange:function(t){"undefined"!=typeof MutationObserver&&(D||(D=new MutationObserver(k)).observe(document.body,{childList:!0,attributes:!0,characterData:!0,subtree:!0,attributeOldValue:!0}),-1===O.indexOf(t)&&O.push(t),setTimeout(function(){x()},0))}}),D,O,x,A,k,V,F=(U=[],{startTracking:function(t,e){var n=function(r){if(t(r.detail)){window.removeEventListener("lprequeststart",n);var i=function(t){r.detail.requestID===t.detail.requestID&&(window.removeEventListener("lprequestend",i),e(t.detail))};window.addEventListener("lprequestend",i)}};window.addEventListener("lprequeststart",n),U.push(n)},stopTracking:function(){U.forEach(function(t){window.removeEventListener("lprequeststart",t)}),U=[]}}),U,q,_,R=function(){var e=null,n=!1,r=[];Topics.get(Topics.FILLED_GENERATED_PW).subscribe(function(t){a({target:t.element,generatedPassword:t.password})}),Topics.get(Topics.CLEAR_DATA).subscribe(function(t){T()}),Topics.get(Topics.LOGIN).subscribe(function(t){bg.LPTabState.getState(function(t){t.enabled&&h(t)})});var a=function(t){return t.form=LPContentScriptTools.getForm(t.target),o(t)},u=function(){t=!1,bg.LPTabState.clear()},s=function(t){try{return decodeURIComponent(t)}catch(t){}return null},c=function(t){var e=t&&t.formData;e&&e.fields.length>0&&(F.stopTracking(),F.startTracking(function(t){if(t&&t.data)for(var n=s(t.data),r=0;r<e.fields.length;++r){var i=e.fields[r].value;if(n&&n.indexOf(i)>-1||t.data.indexOf(i)>-1)return!0}return!1},t.responseHandler))},l=(f=/^2[0-9][0-9]$/,function(t){return f.test(t)}),f,d=function(t){c({formData:t,responseHandler:function(t){l(t.statusCode)||u()}})},v=function(t){var e=a({target:t,deferred:!0});c({formData:e,responseHandler:function(t){l(t.statusCode)&&i(e)}})},g={submit:p(function(t){I.reset(),d(o({form:LPContentScriptTools.getForm(t.target),type:t.type}))}),lpsubmit:function(t){I.reset(),o({form:t.target,type:"submit"})},mouseup:p(function(e){var n=e.target;C(n)?(I.reset(),d(a({target:n,type:e.type}))):N(n)||(t&&I.onChange(u),v(n))}),keydown:p(function(e){if(13===(e.keyCode||e.which)){var n=e.target;N(n)||C(n)?(I.reset(),d(a({target:n,type:e.type}))):(t&&I.onChange(u),v(n))}}),change:p(function(t){var e=t.target;if("INPUT"===e.nodeName&&e.value)switch(e.type){case"text":case"email":for(var n=0;n<r.length;++n)if(r[n].input===e)return void(r[n].value=e.value);r.push({input:e,value:e.value})}}),paste:p(function(t){var e=t.target;N(t.target)&&bg.LPTabState.getCopiedGeneratedPassword(function(t){e.value===t&&a({target:e,generatedPassword:t})})})},m=function(t){e=t},b=function(){if(e.usernames&&e.usernames.length>0)return LPContentScriptTools.findText({searches:e.usernames,wordMatch:!0})},h=function(t){if(m(t),!n){for(var e in g)document.addEventListener(e,g[e],!0);n=!0}},T=function(){if(n){for(var t in g)document.removeEventListener(t,g[t],!0);n=!1}r=[]},S=function(t){return t.indexOf("*")>-1||t.indexOf(String.fromCharCode(8226))>-1},w=function(t,e){return t.value&&!S(t.value)&&t.value.length===e.length&&(t.value[0]===e[0]||t.value[t.value.length-1]===e[e.length-1])},L=function(t){if(S(t.inputValue)){var e;for(e=0;e<r.length;++e){var n=r[e];if(n.input===t.input&&n.value!==t.inputValue)return n.value}if(t.form)for(e=0;e<t.form.length;++e){var i=t.form[e];if(w(i,t.inputValue))return i.value}}return t.inputValue};return function(){var t=document.documentElement;if(t&&"HTML"===t.nodeName)if(g_ischrome||g_issafari_appext){var e=document.createElement("script");e.appendChild(document.createTextNode(LPContentScriptConstants.JS.PageWebRequestEvents)),t.appendChild(e),t.removeChild(e)}else Topics.get(Topics.INITIALIZED).subscribe(function(){var e=bg.get("extensionBaseURL");if(e){var n=document.createElement("script");n.src=e+"pageWebRequestEvents.js",t.appendChild(n),t.removeChild(n)}})}(),{setup:h,teardown:T,getUnmaskedValue:L,getUsername:b}}(),M=LPContentScriptTools.debounce(function(){bg.LPTabState.getSiteNotification({callback:P})},1e3,!0);return Topics.get(Topics.INITIALIZED).subscribe(function(){bg.LPTabState.getState(function(t){t.enabled&&(R.setup(t),window===top?M():t.formSubmittedFrame&&csTop.LPSiteNotification.getSiteNotification())})}),window!==top&&window.addEventListener("beforeunload",function(){t&&csTop.LPSiteNotification.getSiteNotification()},!0),{formExists:m,showSiteNotification:L,getSiteNotification:M}}();
//# sourceMappingURL=sourcemaps/addSiteNotification.js.map