!function(n){var t="unknown",o={init:function(o){var e=n.extend({},o),r=!0===/MacPPC|MacIntel/.test(window.navigator.platform),i=function(n){var o=!1;n.shiftKey?o=n.shiftKey:n.modifiers&&(o=!!(4&n.modifiers));var e=String.fromCharCode(n.which);return e.toUpperCase()===e.toLowerCase()||(e.toUpperCase()===e?!0===r&&o||(t=!o):e.toLowerCase()===e&&(t=o)),t},a=function(n){var o;return 20===n.which&&"unknown"!==t&&(t=!t),t},c=function(t,o){t!==o&&(n("body").trigger("capsChanged"),!0===o?n("body").trigger("capsOn"):!1===o?n("body").trigger("capsOff"):"unknown"===o&&n("body").trigger("capsUnknown"))};return n("body").bind("keypress.capslockstate",function(n){var o=t;t=i(n),c(o,t)}),n("body").bind("keydown.capslockstate",function(n){var o=t;t=a(n),c(o,t)}),n(window).bind("focus.capslockstate",function(){var n;c(t,t="unknown")}),c(null,"unknown"),this.each(function(){})},state:function(){return t},destroy:function(){return this.each(function(){n("body").unbind(".capslockstate"),n(window).unbind(".capslockstate")})}};jQuery.fn.capslockstate=function(t){return o[t]?o[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void n.error("Method "+t+" does not exist on jQuery.capslockstate"):o.init.apply(this,arguments)}}(jQuery);
//# sourceMappingURL=sourcemaps/capslockstate.js.map