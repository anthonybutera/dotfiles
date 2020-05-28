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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/test/test.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/test/test.ts":
/*!**************************!*\
  !*** ./src/test/test.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var cases = [
    {
        name: "Missing fields",
        data: { "7733be61632fa6af88d31218e6c4afb2": { secret: "abcd2345" } }
    },
    {
        name: "Bad hash in key",
        data: {
            badhash: {
                account: "test",
                counter: 0,
                encrypted: false,
                hash: "7733be61632fa6af88d31218e6c4afb2",
                index: 0,
                issuer: "",
                secret: "abcd2345",
                type: "totp"
            }
        }
    },
    {
        name: "Bad hash",
        data: {
            badhash: {
                account: "test",
                counter: 0,
                encrypted: false,
                hash: "badhash",
                index: 0,
                issuer: "",
                secret: "abcd2345",
                type: "totp"
            }
        }
    },
    {
        name: "Bad type for HEX",
        data: {
            e19d5cd5af0378da05f63f891c7467af: {
                account: "test",
                counter: 0,
                encrypted: false,
                hash: "e19d5cd5af0378da05f63f891c7467af",
                index: 0,
                issuer: "",
                secret: "abcd1234",
                type: "totp"
            }
        }
    },
    {
        name: "Unicode in issuer",
        data: {
            "7733be61632fa6af88d31218e6c4afb2": {
                account: "test",
                counter: 0,
                encrypted: false,
                hash: "7733be61632fa6af88d31218e6c4afb2",
                index: 0,
                issuer: "✓ à la mode",
                secret: "abcd2345",
                type: "totp"
            }
        }
    },
    {
        name: "Battle migrate",
        data: {
            "95c869de1221960c7f7e6892f78d7062": {
                account: "test",
                counter: 0,
                encrypted: false,
                hash: "95c869de1221960c7f7e6892f78d7062",
                index: 0,
                issuer: "",
                secret: "blz-abcd2345",
                type: "totp"
            }
        }
    },
    {
        name: "Steam migrate",
        data: {
            "95c869de1221960c7f7e6892f78d7062": {
                account: "test",
                counter: 0,
                encrypted: false,
                hash: "95c869de1221960c7f7e6892f78d7062",
                index: 0,
                issuer: "",
                secret: "stm-abcd2345",
                type: "totp"
            }
        }
    },
    {
        name: "Missing field with HEX secret",
        data: { e19d5cd5af0378da05f63f891c7467af: { secret: "abcd1234" } }
    },
    {
        name: "Mess index",
        data: {
            "7733be61632fa6af88d31218e6c4afb2": {
                account: "test",
                counter: 0,
                encrypted: false,
                hash: "7733be61632fa6af88d31218e6c4afb2",
                index: 6,
                issuer: "",
                secret: "abcd2345",
                type: "totp"
            },
            "770f51f23603ddae810e446630c2f673": {
                account: "test",
                counter: 0,
                encrypted: false,
                hash: "770f51f23603ddae810e446630c2f673",
                index: 6,
                issuer: "",
                secret: "abcd2346",
                type: "totp"
            }
        }
    },
    {
        name: "Base32 with padding",
        data: {
            b905232a977347a0a113a7d1c924fb8d: {
                account: "test",
                counter: 0,
                encrypted: false,
                hash: "b905232a977347a0a113a7d1c924fb8d",
                index: 0,
                issuer: "",
                secret: "DKCE3SQPHJRJQGBGI322QA7Z5E======",
                type: "totp"
            }
        }
    },
    {
        name: "Incorrect but valid hash",
        data: {
            ffffffffffffffffffffffffffffffff: {
                account: "test",
                counter: 0,
                encrypted: false,
                hash: "ffffffffffffffffffffffffffffffff",
                index: 0,
                issuer: "",
                secret: "abcd2345",
                type: "totp"
            }
        }
    },
    {
        name: "HOTP with HEX secret",
        data: {
            "7c117a118e015b6232ff359958b9e270": {
                account: "test",
                counter: 0,
                encrypted: false,
                hash: "7c117a118e015b6232ff359958b9e270",
                index: 0,
                issuer: "",
                secret: "2c52e8fcfac34091da63ef7b118f1cc50b925a42",
                type: "hhex"
            }
        }
    },
    {
        name: "Amazon 2FA",
        data: {
            "0e00b601f60a4d7154d54ba94c429afb": {
                account: "test",
                counter: 0,
                encrypted: false,
                hash: "0e00b601f60a4d7154d54ba94c429afb",
                index: 0,
                issuer: "",
                secret: "QLGNXJ2KLSOACXOEKJ47X6VA6ZPGT5HE2GBO5NPXTLD7FJAKD4JQ",
                type: "totp"
            }
        }
    },
    {
        name: "Secret contains spaces",
        data: {
            "1b0c21ad1ec44264f665708ef82dae84": {
                account: "test",
                counter: 0,
                encrypted: false,
                hash: "1b0c21ad1ec44264f665708ef82dae84",
                index: 0,
                issuer: "",
                secret: "p5s7 k2in z3mj oqfg",
                type: "totp"
            }
        }
    }
];
var testCaseIndex = 0;
var testRes = [];
var testResData = [];
function testStart() {
    if (document.getElementById("lock")) {
        var checkbox = document.getElementById("lock");
        if (!checkbox.checked) {
            return;
        }
    }
    var startBtn = document.getElementById("start");
    if (startBtn) {
        startBtn.setAttribute("disabled", "true");
    }
    testCaseIndex = 0;
    testRes = [];
    test();
}
function testFinished() {
    clear();
    console.log("Test finished.");
    for (var _i = 0, testRes_1 = testRes; _i < testRes_1.length; _i++) {
        var res = testRes_1[_i];
        if (!res.pass) {
            alert("Test failed!");
            return;
        }
    }
    alert("Test passed!");
    return;
}
function clear() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    try {
                        chrome.storage.sync.clear(resolve);
                    }
                    catch (error) {
                        reject(error);
                    }
                })];
        });
    });
}
function get() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    try {
                        chrome.storage.sync.get(resolve);
                    }
                    catch (error) {
                        reject(error);
                    }
                })];
        });
    });
}
function set(items) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            /* tslint:disable-next-line:no-any */
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    try {
                        chrome.storage.sync.set(items, resolve);
                    }
                    catch (error) {
                        reject(error);
                    }
                })];
        });
    });
}
function test() {
    return __awaiter(this, void 0, void 0, function () {
        var iframe;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (testCaseIndex === cases.length * 2) {
                        testFinished();
                        return [2 /*return*/];
                    }
                    console.log(cases[Math.floor(testCaseIndex / 2)].name, testCaseIndex % 2 ? "Reopen" : "");
                    if (!(testCaseIndex % 2 === 0)) return [3 /*break*/, 2];
                    clear();
                    return [4 /*yield*/, set(cases[Math.floor(testCaseIndex / 2)].data)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    iframe = document.getElementsByTagName("iframe")[0];
                    if (iframe) {
                        testRes[testCaseIndex] = { pass: true, error: "" };
                        iframe.src = "popup.html";
                        iframe.onload = function () {
                            if (!iframe.contentWindow) {
                                return;
                            }
                            iframe.contentWindow.addEventListener("unhandledrejection", function (event) {
                                var rejectionEvent = event;
                                testRes[testCaseIndex] = { pass: false, error: rejectionEvent.reason };
                            });
                            iframe.contentWindow.onerror = function (error) {
                                testRes[testCaseIndex] = { pass: false, error: error };
                            };
                        };
                    }
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var data, _i, _a, hash, item, keys, _b, keys_1, key;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, get()];
                                case 1:
                                    data = _c.sent();
                                    testResData[testCaseIndex] = JSON.stringify(data, null, 2);
                                    if (testRes[testCaseIndex].pass) {
                                        if (Object.keys(data).length !==
                                            Object.keys(cases[Math.floor(testCaseIndex / 2)].data).length) {
                                            testRes[testCaseIndex] = { pass: false, error: "Missing data" };
                                        }
                                        else {
                                            for (_i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
                                                hash = _a[_i];
                                                item = data[hash];
                                                keys = [
                                                    "issuer",
                                                    "account",
                                                    "secret",
                                                    "hash",
                                                    "index",
                                                    "type",
                                                    "counter",
                                                    "encrypted"
                                                ];
                                                for (_b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
                                                    key = keys_1[_b];
                                                    if (item[key] === undefined) {
                                                        testRes[testCaseIndex] = {
                                                            pass: false,
                                                            error: "Missing key<" + key + ">: " + JSON.stringify(item)
                                                        };
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    showTestResult();
                                    testCaseIndex++;
                                    if (document.getElementsByTagName("iframe") && iframe) {
                                        iframe.src = "about:blank";
                                    }
                                    return [4 /*yield*/, test()];
                                case 2:
                                    _c.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 1000);
                    return [2 /*return*/];
            }
        });
    });
}
function showTestResult() {
    var testResultContainer = document.getElementById("test");
    if (!testResultContainer) {
        return;
    }
    testResultContainer.innerHTML = "";
    for (var i = 0; i < testRes.length; i++) {
        var el = document.createElement("tr");
        el.innerHTML = "<td style=\"vertical-align: text-top; width: 50px; color: " + (testRes[i].pass ? "green" : "red") + "\">[" + (testRes[i].pass ? "Pass" : "Fail") + "]</td>";
        el.innerHTML += "<td><h3 style=\"margin: 0\">" + cases[Math.floor(i / 2)].name + (i % 2 === 1 ? " (Reopen)" : "") + "</h3>" + testRes[i].error + "<br><pre><code>" + testResData[i] + "</code></pre><br></td>";
        testResultContainer.appendChild(el);
    }
}
var startBtn = document.getElementById("start");
if (startBtn) {
    startBtn.onclick = testStart;
}
window.addEventListener("message", function (event) {
    testRes[testCaseIndex] = { pass: false, error: event.data };
}, false);


/***/ })

/******/ });
//# sourceMappingURL=test.js.map