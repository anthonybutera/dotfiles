!function(t){var e="poor",a="bad",r="ok",n="good",s="great",i="best",o=function(t,e,a){var r=0;if(""===e&&""===t)return 0;var n=t.toLowerCase(),s=e.toLowerCase();if(n===s||s&&-1!==n.indexOf(s)||s&&-1!==s.indexOf(n))return 1;if(r+=t.length,t.length>0&&t.length<=7)return 1;t.length>=8&&t.length<=15?r+=12:t.length>=16&&(r+=18),t.match(/[a-z]/)&&(r+=1),t.match(/[A-Z]/)&&(r+=5),t.match(/\d/)&&(r+=5),t.match(/.*\d.*\d.*\d/)&&(r+=5),t.match(/[!,@,#,$,%,^,&,*,?,_,~]/)&&(r+=5),t.match(/.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~]/)&&(r+=5),t.match(/(?=.*[a-z])(?=.*[A-Z])/)&&(r+=2),t.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/)&&(r+=2),t.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!,@,#,$,%,^,&,*,?,_,~])/)&&(r+=2);for(var i={},o=0,l=0,d=t.length;l<d;++l){var h=t.charAt(l);void 0===i[h]&&(i[h]=1,++o)}return 1===o?2:((r*=2)<0?r=0:r>100&&(r=100),r)},l=function(l,d,h,c,g){var p=o(l,h,c),m=e,v=Strings.translateString("Invalid");if(p<17||(p<34?(m=a,v=Strings.translateString("Weak")):p<51?(m=r,v=Strings.translateString("Okay")):p<68?(m=n,v=Strings.translateString("Good")):p<85?(m=s,v=Strings.translateString("Secure")):(m=i,v=Strings.translateString("Super!"))),g){d.attr("class","score-segment").addClass(m),d.css("width","20%");var f=d.parent();f.empty(),f.append(d);for(var u=Math.floor(p/20)||1,S=1;S<5;S++){var L=d.clone();S>=u&&L.removeClass(m),L.insertAfter("div.score-segment:last")}}else d.attr("class",m),d.css("width",p+"%");c&&(l?(t(c.parent()).css("opacity",1),c.text(v),c.removeClass("strength")):(t(c.parent()).css("opacity",.5),c.text(Strings.translateString("Strength")),d.attr("class","strength"),d.css("width","100%")))};jQuery.fn.LP_addGeneratePasswordMeter=function(e){if(this&&this.length>0){var a=t(LPTools.createElement("div","meter-gen-pass")),r=t(LPTools.createElement("div"));this.parent().append(a.append(r));var n=e||!1,s=function(){l(t(this).val(),r,"somestringthathopefullydoesnotmatchpassword",null,n)};this.on("input",s).on("change",s)}},jQuery.fn.LP_addPasswordMeter=function(e,a,r){var n=LPTools.createElement("div","meterContainer"),s=LPTools.createElement("div","meter"),i=LPTools.createElement("div"),o=null;s.appendChild(i),n.appendChild(s),s=t(s),i=t(i),a&&(o=LPTools.createElement("label","meterLabel","Strength"),n.appendChild(o),o=t(o),s.css("width","88%"),o.css("width","12%")),this.parent().append(n);var d=r||!1;this.LP_input("passwordMeter",function(t){l(t,i,e?e.val():"",o,d)})}}(jQuery);
//# sourceMappingURL=sourcemaps/passwordMeter.js.map