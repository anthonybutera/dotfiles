LPPlatform=function(){var t="";window.lp_setmethod=function(n){t=n};var n=function(){return t},r="0.0.0";window.lp_setversion=function(t){r=t};var e,o=(u=function(t){return host.translate(t)},s=function(t){return t},function(t){return"undefined"!=typeof host&&"function"==typeof host.translate?(LPPlatform.translate=u,u(t)):(LPPlatform.translate=s,s(t))}),u,s,f=(i=function(t,n,r){host.status(t,n,r?JSON.stringify(r):null)},c=function(t,n,r){console.log(t+" "+n)},function(t,n,r){"undefined"!=typeof host&&"function"==typeof host.status?(LPPlatform.returnResult=i,i(t,n,r)):(LPPlatform.returnResult=c,c(t,n,r))}),i,c,a=function(t,n){f(!0,t,n)},l=function(t,n){f(!1,t,n)},d;return{translate:o,returnResult:f,returnSuccess:a,returnError:l,makeRequest:function(n,e,o,u,s){var f=a;"function"==typeof u?f=function(t,n){u(!0,t,n?JSON.stringify(n):null)}:void 0===s&&(s=u),s.requestArgs={token:e,wxsessid:o,method:t,lpversion:r},s.success=s.success||f,s.error=s.error||l,n(s)},getMethod:n,getVersion:function(){return r}}}();
//# sourceMappingURL=sourcemaps/platformMobile.js.map
