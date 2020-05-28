/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/qrdebug.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/qrdebug.ts":
/*!************************!*\
  !*** ./src/qrdebug.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "position") {
        if (!sender.tab) {
            return;
        }
        getQrDebug(sender.tab, message.info.left, message.info.top, message.info.width, message.info.height, message.info.windowWidth);
    }
});
function getQrDebug(tab, left, top, width, height, windowWidth) {
    chrome.tabs.captureVisibleTab(tab.windowId, { format: "png" }, function (dataUrl) {
        var qr = new Image();
        qr.src = dataUrl;
        qr.onload = function () {
            var devicePixelRatio = qr.width / windowWidth;
            var captureCanvas = document.createElement("canvas");
            captureCanvas.width = width * devicePixelRatio;
            captureCanvas.height = height * devicePixelRatio;
            var ctx = captureCanvas.getContext("2d");
            if (!ctx) {
                return;
            }
            ctx.drawImage(qr, left * devicePixelRatio, top * devicePixelRatio, width * devicePixelRatio, height * devicePixelRatio, 0, 0, width * devicePixelRatio, height * devicePixelRatio);
            var url = captureCanvas.toDataURL();
            var infoDom = document.getElementById("info");
            if (infoDom) {
                infoDom.innerHTML =
                    "<b>Scan Data:</b><br>" +
                        "<br>" +
                        ("Window Inner Width: " + windowWidth + "<br>") +
                        ("Width: " + width + "<br>") +
                        ("Height: " + height + "<br>") +
                        ("Left: " + left + "<br>") +
                        ("Top: " + top + "<br>") +
                        ("Screen Width: " + window.screen.width + "<br>") +
                        ("Screen Height: " + window.screen.height + "<br>") +
                        ("Capture Width: " + qr.width + "<br>") +
                        ("Capture Height: " + qr.height + "<br>") +
                        ("Device Pixel Ratio: " + devicePixelRatio + " / " + window.devicePixelRatio + "<br>") +
                        ("Tab ID: " + tab.id + "<br>") +
                        "<br>" +
                        "<b>Captured Screenshot:</b>";
            }
            var qrDom = document.getElementById("qr");
            if (qrDom) {
                qrDom.src = url;
            }
        };
    });
}


/***/ })

/******/ });
//# sourceMappingURL=qrdebug.js.map