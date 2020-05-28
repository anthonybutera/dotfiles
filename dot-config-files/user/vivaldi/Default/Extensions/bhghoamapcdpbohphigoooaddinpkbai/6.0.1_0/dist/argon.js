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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/argon.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/argon2-browser/dist/argon2.js":
/*!****************************************************!*\
  !*** ./node_modules/argon2-browser/dist/argon2.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, __dirname) {var Module=typeof self!=="undefined"&&typeof self.Module!=="undefined"?self.Module:{};var jsModule=Module;var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var arguments_=[];var thisProgram="./this.program";var quit_=function(status,toThrow){throw toThrow};var ENVIRONMENT_IS_WEB=false;var ENVIRONMENT_IS_WORKER=false;var ENVIRONMENT_IS_NODE=false;var ENVIRONMENT_HAS_NODE=false;var ENVIRONMENT_IS_SHELL=false;ENVIRONMENT_IS_WEB=typeof window==="object";ENVIRONMENT_IS_WORKER=typeof importScripts==="function";ENVIRONMENT_HAS_NODE=typeof process==="object"&&typeof process.versions==="object"&&typeof process.versions.node==="string";ENVIRONMENT_IS_NODE=ENVIRONMENT_HAS_NODE&&!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_WORKER;ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;if(ENVIRONMENT_IS_NODE){scriptDirectory=__dirname+"/";var nodeFS;var nodePath;read_=function shell_read(filename,binary){var ret;if(!nodeFS)nodeFS=__webpack_require__(/*! fs */ "./node_modules/node-libs-browser/mock/empty.js");if(!nodePath)nodePath=__webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");filename=nodePath["normalize"](filename);ret=nodeFS["readFileSync"](filename);return binary?ret:ret.toString()};readBinary=function readBinary(filename){var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};if(process["argv"].length>1){thisProgram=process["argv"][1].replace(/\\/g,"/")}arguments_=process["argv"].slice(2);if(true){module["exports"]=Module}process["on"]("uncaughtException",function(ex){if(!(ex instanceof ExitStatus)){throw ex}});process["on"]("unhandledRejection",abort);quit_=function(status){process["exit"](status)};Module["inspect"]=function(){return"[Emscripten Module object]"}}else if(ENVIRONMENT_IS_SHELL){if(typeof read!="undefined"){read_=function shell_read(f){return read(f)}}readBinary=function readBinary(f){var data;if(typeof readbuffer==="function"){return new Uint8Array(readbuffer(f))}data=read(f,"binary");assert(typeof data==="object");return data};if(typeof scriptArgs!="undefined"){arguments_=scriptArgs}else if(typeof arguments!="undefined"){arguments_=arguments}if(typeof quit==="function"){quit_=function(status){quit(status)}}if(typeof print!=="undefined"){if(typeof console==="undefined")console={};console.log=print;console.warn=console.error=typeof printErr!=="undefined"?printErr:print}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(document.currentScript){scriptDirectory=document.currentScript.src}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.lastIndexOf("/")+1)}else{scriptDirectory=""}read_=function shell_read(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=function readBinary(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=function readAsync(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function xhr_onload(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)};setWindowTitle=function(title){document.title=title}}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];function dynamicAlloc(size){var ret=HEAP32[DYNAMICTOP_PTR>>2];var end=ret+size+15&-16;if(end>_emscripten_get_heap_size()){abort()}HEAP32[DYNAMICTOP_PTR>>2]=end;return ret}function getNativeTypeSize(type){switch(type){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:{if(type[type.length-1]==="*"){return 4}else if(type[0]==="i"){var bits=parseInt(type.substr(1));assert(bits%8===0,"getNativeTypeSize invalid bits "+bits+", type "+type);return bits/8}else{return 0}}}}var asm2wasmImports={"f64-rem":function(x,y){return x%y},"debugger":function(){}};var functionPointers=new Array(0);var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime;if(Module["noExitRuntime"])noExitRuntime=Module["noExitRuntime"];if(typeof WebAssembly!=="object"){err("no native wasm support detected")}function setValue(ptr,value,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":HEAP8[ptr>>0]=value;break;case"i8":HEAP8[ptr>>0]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":tempI64=[value>>>0,(tempDouble=value,+Math_abs(tempDouble)>=1?tempDouble>0?(Math_min(+Math_floor(tempDouble/4294967296),4294967295)|0)>>>0:~~+Math_ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[ptr>>2]=tempI64[0],HEAP32[ptr+4>>2]=tempI64[1];break;case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;default:abort("invalid type for setValue: "+type)}}var wasmMemory;var wasmTable=new WebAssembly.Table({"initial":9,"maximum":9,"element":"anyfunc"});var ABORT=false;var EXITSTATUS=0;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}var ALLOC_NORMAL=0;var ALLOC_NONE=3;function allocate(slab,types,allocator,ptr){var zeroinit,size;if(typeof slab==="number"){zeroinit=true;size=slab}else{zeroinit=false;size=slab.length}var singleType=typeof types==="string"?types:null;var ret;if(allocator==ALLOC_NONE){ret=ptr}else{ret=[_malloc,stackAlloc,dynamicAlloc][allocator](Math.max(size,singleType?1:types.length))}if(zeroinit){var stop;ptr=ret;assert((ret&3)==0);stop=ret+(size&~3);for(;ptr<stop;ptr+=4){HEAP32[ptr>>2]=0}stop=ret+size;while(ptr<stop){HEAP8[ptr++>>0]=0}return ret}if(singleType==="i8"){if(slab.subarray||slab.slice){HEAPU8.set(slab,ret)}else{HEAPU8.set(new Uint8Array(slab),ret)}return ret}var i=0,type,typeSize,previousType;while(i<size){var curr=slab[i];type=singleType||types[i];if(type===0){i++;continue}if(type=="i64")type="i32";setValue(ret+i,curr,type);if(previousType!==type){typeSize=getNativeTypeSize(type);previousType=type}i+=typeSize}return ret}var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(u8Array,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(u8Array[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&u8Array.subarray&&UTF8Decoder){return UTF8Decoder.decode(u8Array.subarray(idx,endPtr))}else{var str="";while(idx<endPtr){var u0=u8Array[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=u8Array[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=u8Array[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|u8Array[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}var UTF16Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf-16le"):undefined;var WASM_PAGE_SIZE=65536;function alignUp(x,multiple){if(x%multiple>0){x+=multiple-x%multiple}return x}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=HEAP16=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=HEAPU16=new Uint16Array(buf);Module["HEAPU32"]=HEAPU32=new Uint32Array(buf);Module["HEAPF32"]=HEAPF32=new Float32Array(buf);Module["HEAPF64"]=HEAPF64=new Float64Array(buf)}var DYNAMIC_BASE=5248528,DYNAMICTOP_PTR=5440;var INITIAL_TOTAL_MEMORY=Module["TOTAL_MEMORY"]||16777216;if(Module["wasmMemory"]){wasmMemory=Module["wasmMemory"]}else{wasmMemory=new WebAssembly.Memory({"initial":INITIAL_TOTAL_MEMORY/WASM_PAGE_SIZE,"maximum":2147418112/WASM_PAGE_SIZE})}if(wasmMemory){buffer=wasmMemory.buffer}INITIAL_TOTAL_MEMORY=buffer.byteLength;updateGlobalBufferAndViews(buffer);HEAP32[DYNAMICTOP_PTR>>2]=DYNAMIC_BASE;function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback();continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){Module["dynCall_v"](func)}else{Module["dynCall_vi"](func,callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var Math_abs=Math.abs;var Math_ceil=Math.ceil;var Math_floor=Math.floor;var Math_min=Math.min;var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["preloadedImages"]={};Module["preloadedAudios"]={};function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what+="";out(what);err(what);ABORT=true;EXITSTATUS=1;throw"abort("+what+"). Build with -s ASSERTIONS=1 for more info."}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return String.prototype.startsWith?filename.startsWith(dataURIPrefix):filename.indexOf(dataURIPrefix)===0}var wasmBinaryFile="argon2.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinary(){try{if(wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(wasmBinaryFile)}else{throw"both async and sync fetching of the wasm failed"}}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)&&typeof fetch==="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary()})}return new Promise(function(resolve,reject){resolve(getBinary())})}function createWasm(){var info={"env":asmLibraryArg,"wasi_unstable":asmLibraryArg,"global":{"NaN":NaN,Infinity:Infinity},"global.Math":Math,"asm2wasm":asm2wasmImports};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiatedSource(output){Module=jsModule;if(typeof self!=="undefined")self.Module=Module;receiveInstance(output["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming==="function"&&!isDataURI(wasmBinaryFile)&&typeof fetch==="function"){fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiatedSource,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");instantiateArrayBuffer(receiveInstantiatedSource)})})}else{return instantiateArrayBuffer(receiveInstantiatedSource)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync();return{}}Module["asm"]=createWasm;var tempDouble;var tempI64;function _emscripten_get_heap_size(){return HEAP8.length}function emscripten_realloc_buffer(size){try{wasmMemory.grow(size-buffer.byteLength+65535>>16);updateGlobalBufferAndViews(wasmMemory.buffer);return 1}catch(e){}}function _emscripten_resize_heap(requestedSize){var oldSize=_emscripten_get_heap_size();var PAGE_MULTIPLE=65536;var LIMIT=2147483648-PAGE_MULTIPLE;if(requestedSize>LIMIT){return false}var MIN_TOTAL_MEMORY=16777216;var newSize=Math.max(oldSize,MIN_TOTAL_MEMORY);while(newSize<requestedSize){if(newSize<=536870912){newSize=alignUp(2*newSize,PAGE_MULTIPLE)}else{newSize=Math.min(alignUp((3*newSize+2147483648)/4,PAGE_MULTIPLE),LIMIT)}}newSize=Math.min(newSize,2147418112);if(newSize==oldSize){return false}var replacement=emscripten_realloc_buffer(newSize);if(!replacement){return false}return true}function _emscripten_memcpy_big(dest,src,num){HEAPU8.set(HEAPU8.subarray(src,src+num),dest)}function _pthread_join(){}var asmGlobalArg={};var asmLibraryArg={"__memory_base":1024,"__table_base":0,"e":_emscripten_get_heap_size,"d":_emscripten_memcpy_big,"c":_emscripten_resize_heap,"b":_pthread_join,"a":abort,"memory":wasmMemory,"table":wasmTable};var asm=Module["asm"](asmGlobalArg,asmLibraryArg,buffer);Module["asm"]=asm;var _argon2_error_message=Module["_argon2_error_message"]=function(){return Module["asm"]["f"].apply(null,arguments)};var _argon2_hash=Module["_argon2_hash"]=function(){return Module["asm"]["g"].apply(null,arguments)};var _argon2_verify=Module["_argon2_verify"]=function(){return Module["asm"]["h"].apply(null,arguments)};var _free=Module["_free"]=function(){return Module["asm"]["i"].apply(null,arguments)};var _malloc=Module["_malloc"]=function(){return Module["asm"]["j"].apply(null,arguments)};var stackAlloc=Module["stackAlloc"]=function(){return Module["asm"]["k"].apply(null,arguments)};Module["asm"]=asm;Module["allocate"]=allocate;Module["UTF8ToString"]=UTF8ToString;Module["ALLOC_NORMAL"]=ALLOC_NORMAL;var calledRun;function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(args){args=args||arguments_;if(runDependencies>0){return}preRun();if(runDependencies>0)return;function doRun(){if(calledRun)return;calledRun=true;if(ABORT)return;initRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}Module["run"]=run;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}noExitRuntime=true;run();if(true)module.exports=Module;Module.unloadRuntime=function(){if(typeof self!=="undefined"){delete self.Module}Module=jsModule=wasmMemory=wasmTable=asm=buffer=HEAP8=HEAPU8=HEAP16=HEAPU16=HEAP32=HEAPU32=HEAPF32=HEAPF64=undefined;if(true){delete module.exports}};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), "/"))

/***/ }),

/***/ "./node_modules/argon2-browser/dist/argon2.wasm":
/*!******************************************************!*\
  !*** ./node_modules/argon2-browser/dist/argon2.wasm ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "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ZW5ndGggaXMgbm90IDAAU2VjcmV0IHBvaW50ZXIgaXMgTlVMTCwgYnV0IHNlY3JldCBsZW5ndGggaXMgbm90IDAAU2FsdCBwb2ludGVyIGlzIE5VTEwsIGJ1dCBzYWx0IGxlbmd0aCBpcyBub3QgMABQYXNzd29yZCBwb2ludGVyIGlzIE5VTEwsIGJ1dCBwYXNzd29yZCBsZW5ndGggaXMgbm90IDAAVG9vIG1hbnkgbGFuZXMAVG9vIGZldyBsYW5lcwBNZW1vcnkgY29zdCBpcyB0b28gbGFyZ2UATWVtb3J5IGNvc3QgaXMgdG9vIHNtYWxsAFRpbWUgY29zdCBpcyB0b28gbGFyZ2UAVGltZSBjb3N0IGlzIHRvbyBzbWFsbABTZWNyZXQgaXMgdG9vIGxvbmcAU2VjcmV0IGlzIHRvbyBzaG9ydABBc3NvY2lhdGVkIGRhdGEgaXMgdG9vIGxvbmcAQXNzb2NpYXRlZCBkYXRhIGlzIHRvbyBzaG9ydABTYWx0IGlzIHRvbyBsb25nAFNhbHQgaXMgdG9vIHNob3J0AFBhc3N3b3JkIGlzIHRvbyBsb25nAFBhc3N3b3JkIGlzIHRvbyBzaG9ydABPdXRwdXQgaXMgdG9vIGxvbmcAT3V0cHV0IGlzIHRvbyBzaG9ydABPdXRwdXQgcG9pbnRlciBpcyBOVUxMAE9LACR2PQAkbT0ALHQ9ACxwPQAlbHUALSsgICAwWDB4AChudWxsKQAtMFgrMFggMFgtMHgrMHggMHgAaW5mAElORgBuYW4ATkFOAC4="

/***/ }),

/***/ "./node_modules/argon2-browser/lib/argon2.js":
/*!***************************************************!*\
  !*** ./node_modules/argon2-browser/lib/argon2.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(typeof self !== 'undefined' ? self : this, function() {
    const global = typeof self !== 'undefined' ? self : this;

    /**
     * @enum
     */
    const ArgonType = {
        Argon2d: 0,
        Argon2i: 1,
        Argon2id: 2
    };

    function loadModule(mem) {
        if (loadModule._promise) {
            return loadModule._promise;
        }
        if (loadModule._module) {
            return Promise.resolve(loadModule._module);
        }
        let promise;
        if (
            global.process &&
            global.process.versions &&
            global.process.versions.node
        ) {
            promise = loadWasmModule().then(
                Module =>
                    new Promise(resolve => {
                        Module.postRun = () => resolve(Module);
                    })
            );
        } else {
            promise = loadWasmBinary().then(wasmBinary => {
                const wasmMemory = mem ? createWasmMemory(mem) : undefined;
                return initWasm(wasmBinary, wasmMemory);
            });
        }
        loadModule._promise = promise;
        return promise.then(Module => {
            loadModule._module = Module;
            delete loadModule._promise;
            return Module;
        });
    }

    function initWasm(wasmBinary, wasmMemory) {
        return new Promise(resolve => {
            global.Module = {
                wasmBinary,
                wasmMemory,
                postRun() {
                    resolve(Module);
                }
            };
            return loadWasmModule();
        });
    }

    function loadWasmModule() {
        if (global.loadArgon2WasmModule) {
            return global.loadArgon2WasmModule();
        }
        if (true) {
            return Promise.resolve(__webpack_require__(/*! ../dist/argon2.js */ "./node_modules/argon2-browser/dist/argon2.js"));
        }
        return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! ../dist/argon2.js */ "./node_modules/argon2-browser/dist/argon2.js", 7));
    }

    function loadWasmBinary() {
        if (global.loadArgon2WasmBinary) {
            return global.loadArgon2WasmBinary();
        }
        if (true) {
            return Promise.resolve(__webpack_require__(/*! ../dist/argon2.wasm */ "./node_modules/argon2-browser/dist/argon2.wasm")).then(
                wasmModule => {
                    return decodeWasmBinary(wasmModule);
                }
            );
        }
        const wasmPath =
            global.argon2WasmPath ||
            'node_modules/argon2-browser/dist/argon2.wasm';
        return fetch(wasmPath)
            .then(response => response.arrayBuffer())
            .then(ab => new Uint8Array(ab));
    }

    function decodeWasmBinary(base64) {
        const text = atob(base64);
        const binary = new Uint8Array(new ArrayBuffer(text.length));
        for (let i = 0; i < text.length; i++) {
            binary[i] = text.charCodeAt(i);
        }
        return binary;
    }

    function createWasmMemory(mem) {
        const KB = 1024 * 1024;
        const MB = 1024 * KB;
        const GB = 1024 * MB;
        const WASM_PAGE_SIZE = 64 * 1024;

        const totalMemory = (2 * GB - 64 * KB) / 1024 / WASM_PAGE_SIZE;
        const initialMemory = Math.min(
            Math.max(Math.ceil((mem * 1024) / WASM_PAGE_SIZE), 256) + 256,
            totalMemory
        );

        return new WebAssembly.Memory({
            initial: initialMemory,
            maximum: totalMemory
        });
    }

    function allocateArray(Module, strOrArr) {
        const arr =
            strOrArr instanceof Uint8Array || strOrArr instanceof Array
                ? strOrArr
                : encodeUtf8(strOrArr);
        const nullTerminatedArray = new Uint8Array([...arr, 0]);
        return Module.allocate(nullTerminatedArray, 'i8', Module.ALLOC_NORMAL);
    }

    function encodeUtf8(str) {
        if (typeof TextEncoder === 'function') {
            return new TextEncoder().encode(str);
        } else if (typeof Buffer === 'function') {
            return Buffer.from(str);
        } else {
            throw new Error("Don't know how to decode UTF8");
        }
    }

    /**
     * Argon2 hash
     * @param {string|Uint8Array} params.pass - password string
     * @param {string|Uint8Array} params.salt - salt string
     * @param {number} [params.time=1] - the number of iterations
     * @param {number} [params.mem=1024] - used memory, in KiB
     * @param {number} [params.hashLen=24] - desired hash length
     * @param {number} [params.parallelism=1] - desired parallelism
     * @param {number} [params.type=argon2.ArgonType.Argon2d] - hash type:
     *      argon2.ArgonType.Argon2d
     *      argon2.ArgonType.Argon2i
     *      argon2.ArgonType.Argon2id
     *
     * @return Promise
     *
     * @example
     *  argon2.hash({ pass: 'password', salt: 'somesalt' })
     *      .then(h => console.log(h.hash, h.hashHex, h.encoded))
     *      .catch(e => console.error(e.message, e.code))
     */
    function argon2Hash(params) {
        const mCost = params.mem || 1024;
        return loadModule(mCost).then(Module => {
            const tCost = params.time || 1;
            const parallelism = params.parallelism || 1;
            const pwd = allocateArray(Module, params.pass);
            const pwdlen = params.pass.length;
            const salt = allocateArray(Module, params.salt);
            const saltlen = params.salt.length;
            const hash = Module.allocate(
                new Array(params.hashLen || 24),
                'i8',
                Module.ALLOC_NORMAL
            );
            const hashlen = params.hashLen || 24;
            const encoded = Module.allocate(
                new Array(512),
                'i8',
                Module.ALLOC_NORMAL
            );
            const encodedlen = 512;
            const argon2Type = params.type || ArgonType.Argon2d;
            const version = 0x13;
            let err;
            let res;
            try {
                res = Module._argon2_hash(
                    tCost,
                    mCost,
                    parallelism,
                    pwd,
                    pwdlen,
                    salt,
                    saltlen,
                    hash,
                    hashlen,
                    encoded,
                    encodedlen,
                    argon2Type,
                    version
                );
            } catch (e) {
                err = e;
            }
            let result;
            if (res === 0 && !err) {
                let hashStr = '';
                const hashArr = new Uint8Array(hashlen);
                for (let i = 0; i < hashlen; i++) {
                    const byte = Module.HEAP8[hash + i];
                    hashArr[i] = byte;
                    hashStr += ('0' + (0xff & byte).toString(16)).slice(-2);
                }
                const encodedStr = Module.UTF8ToString(encoded);
                result = {
                    hash: hashArr,
                    hashHex: hashStr,
                    encoded: encodedStr
                };
            } else {
                try {
                    if (!err) {
                        err = Module.UTF8ToString(
                            Module._argon2_error_message(res)
                        );
                    }
                } catch (e) {}
                result = { message: err, code: res };
            }
            try {
                Module._free(pwd);
                Module._free(salt);
                Module._free(hash);
                Module._free(encoded);
            } catch (e) {}
            if (err) {
                throw result;
            } else {
                return result;
            }
        });
    }

    /**
     * Argon2 verify function
     * @param {string} params.pass - password string
     * @param {string|Uint8Array} params.encoded - encoded hash
     * @param {number} [params.type=argon2.ArgonType.Argon2d] - hash type:
     *      argon2.ArgonType.Argon2d
     *      argon2.ArgonType.Argon2i
     *      argon2.ArgonType.Argon2id
     *
     * @returns Promise
     *
     * @example
     *  argon2.verify({ pass: 'password', encoded: 'encoded-hash' })
     *      .then(() => console.log('OK'))
     *      .catch(e => console.error(e.message, e.code))
     */
    function argon2Verify(params) {
        return loadModule().then(Module => {
            const pwd = allocateArray(Module, params.pass);
            const pwdlen = params.pass.length;
            const enc = allocateArray(Module, params.encoded);
            let argon2Type = params.type;
            if (argon2Type === undefined) {
                let typeStr = params.encoded.split('$')[1];
                if (typeStr) {
                    typeStr = typeStr.replace('a', 'A');
                    argon2Type = ArgonType[typeStr] || ArgonType.Argon2d;
                }
            }
            let err;
            let res;
            try {
                res = Module._argon2_verify(enc, pwd, pwdlen, argon2Type);
            } catch (e) {
                err = e;
            }
            let result;
            if (res || err) {
                try {
                    if (!err) {
                        err = Module.UTF8ToString(
                            Module._argon2_error_message(res)
                        );
                    }
                } catch (e) {}
                result = { message: err, code: res };
            }
            try {
                Module._free(pwd);
                Module._free(enc);
            } catch (e) {}
            if (err) {
                throw result;
            } else {
                return result;
            }
        });
    }

    function unloadRuntime() {
        if (loadModule._module) {
            loadModule._module.unloadRuntime();
            delete loadModule._promise;
            delete loadModule._module;
        }
    }

    return {
        ArgonType,
        hash: argon2Hash,
        verify: argon2Verify,
        unloadRuntime
    };
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/node-libs-browser/mock/empty.js":
/*!******************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/empty.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/argon.ts":
/*!**********************!*\
  !*** ./src/argon.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var argon2_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! argon2-browser */ "./node_modules/argon2-browser/lib/argon2.js");
/* harmony import */ var argon2_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(argon2_browser__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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

window.addEventListener("message", function (event) {
    var message = event.data;
    var source = event.source;
    if (!source) {
        return;
    }
    switch (message.action) {
        case "hash":
            argon.hash(message.value).then(function (hash) {
                source.postMessage({ response: hash }, event.origin);
            });
            break;
        case "verify":
            argon.compareHash(message.hash, message.value).then(function (result) {
                source.postMessage({ response: result }, event.origin);
            });
            break;
        default:
            break;
    }
    return;
});
var argon = /** @class */ (function () {
    function argon() {
    }
    argon.hash = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var salt, hash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salt = window.crypto.getRandomValues(new Uint8Array(16));
                        return [4 /*yield*/, argon2_browser__WEBPACK_IMPORTED_MODULE_0__["hash"]({
                                pass: value,
                                salt: salt,
                                mem: 1024 * 16,
                                type: argon2_browser__WEBPACK_IMPORTED_MODULE_0__["ArgonType"].Argon2id
                            })];
                    case 1:
                        hash = _a.sent();
                        return [2 /*return*/, hash.encoded];
                }
            });
        });
    };
    argon.compareHash = function (hash, value) {
        return new Promise(function (resolve) {
            argon2_browser__WEBPACK_IMPORTED_MODULE_0__["verify"]({
                pass: value,
                encoded: hash
            })
                .then(function () { return resolve(true); })
                .catch(function (e) {
                console.error("Error decoding hash", e);
                resolve(false);
            });
        });
    };
    return argon;
}());


/***/ })

/******/ });
//# sourceMappingURL=argon.js.map