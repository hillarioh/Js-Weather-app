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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: \\\"Quicksand\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.containe {\\r\\n  height: 100vh;\\r\\n  background: linear-gradient(147deg, #757a7dbe 0%, #edf395f5 74%);\\r\\n  font-family: \\\"Quicksand\\\", sans-serif;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding-top: 40vh;\\r\\n  transition: padding-top 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n.containe.active {\\r\\n  padding-top: 5vh;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#w-title {\\r\\n  font-size: 3rem;\\r\\n  font-family: sans-serif;\\r\\n  font-weight: 800;\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  line-height: 3rem;\\r\\n  margin: 1rem 0;\\r\\n  color: #6e6675;\\r\\n}\\r\\n\\r\\n.weather {\\r\\n  width: 60%;\\r\\n  padding: 8px 0;\\r\\n}\\r\\n\\r\\nform {\\r\\n  text-align: center;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#city {\\r\\n  line-height: 3rem;\\r\\n  font-size: 2rem;\\r\\n  border: none;\\r\\n  padding: 0 8px;\\r\\n  border-radius: 7px;\\r\\n  text-decoration: none;\\r\\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\\r\\n  margin-right: 6px;\\r\\n}\\r\\n\\r\\n#submit {\\r\\n  font-size: 1.5rem;\\r\\n  line-height: 3rem;\\r\\n  padding: 0 12px;\\r\\n  color: aliceblue;\\r\\n  border: none;\\r\\n  border-radius: 7px;\\r\\n  background-color: #8a8028;\\r\\n}\\r\\n\\r\\n#status {\\r\\n  height: 50vh;\\r\\n}\\r\\n\\r\\n#current-weather {\\r\\n  margin-top: 2rem;\\r\\n  width: 60%;\\r\\n  background: #e7d8f5;\\r\\n  opacity: 60%;\\r\\n  padding: 8px 1.5rem;\\r\\n}\\r\\n\\r\\n.location {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.convert {\\r\\n  background: #375d5d;\\r\\n  padding: 12px 8px;\\r\\n  width: fit-content;\\r\\n  margin-left: auto;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.convert > span {\\r\\n  padding: 8px;\\r\\n  border-radius: 5px;\\r\\n  color: white;\\r\\n  transition: background-color 0.5s ease-in-out;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.location h2 {\\r\\n  font-size: 3.5rem;\\r\\n  line-height: 3rem;\\r\\n}\\r\\n\\r\\n.location h4 {\\r\\n  font-size: 2.8rem;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.weather-detail {\\r\\n  margin-top: 2rem;\\r\\n}\\r\\n\\r\\n.weather-detail > div {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid #757a7dbe;\\r\\n  padding: 8px 0;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.end small,\\r\\n.end p {\\r\\n  text-align: end;\\r\\n}\\r\\n\\r\\n#status p {\\r\\n  font-size: 3rem;\\r\\n  font-weight: 500;\\r\\n  text-align: center;\\r\\n  margin-top: 2rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/*! exports provided: myForm, cityInput, submitInput, myContainer, requestStatus, weatherCurrent, wMain, cityName, wTemp, wDate, wSunrise, wSunset, wSpeed, wPressure, wDeg, wHumidity, celsius, farenheit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myForm\", function() { return myForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cityInput\", function() { return cityInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitInput\", function() { return submitInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myContainer\", function() { return myContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestStatus\", function() { return requestStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"weatherCurrent\", function() { return weatherCurrent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wMain\", function() { return wMain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cityName\", function() { return cityName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wTemp\", function() { return wTemp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wDate\", function() { return wDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wSunrise\", function() { return wSunrise; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wSunset\", function() { return wSunset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wSpeed\", function() { return wSpeed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wPressure\", function() { return wPressure; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wDeg\", function() { return wDeg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wHumidity\", function() { return wHumidity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"celsius\", function() { return celsius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"farenheit\", function() { return farenheit; });\nconst myForm = document.querySelector('form');\nconst cityInput = document.getElementById('city');\nconst submitInput = document.getElementById('submit');\nconst myContainer = document.querySelector('.containe');\nconst requestStatus = document.getElementById('status');\nconst weatherCurrent = document.getElementById('current-weather');\nconst wMain = document.getElementById('w-main');\nconst cityName = document.getElementById('city-name');\nconst wTemp = document.getElementById('w-temp');\nconst wDate = document.getElementById('w-date');\nconst wSunrise = document.getElementById('w-sunrise');\nconst wSunset = document.getElementById('w-sunset');\nconst wSpeed = document.getElementById('w-speed');\nconst wPressure = document.getElementById('w-pressure');\nconst wDeg = document.getElementById('w-deg');\nconst wHumidity = document.getElementById('w-humidity');\nconst celsius = document.getElementById('C');\nconst farenheit = document.getElementById('F');\n\n\n//# sourceURL=webpack:///./src/elements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ \"./style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet measure = 'C';\nlet temperature = 0.0;\n\nconst makeRequest = city => new Promise((resolve, reject) => {\n  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e`, {\n    method: 'get'\n  }).then(response => {\n    if (response.status >= 200 && response.status < 300) {\n      resolve(response.json());\n    } else {\n      reject(new Error(response.statusText));\n    }\n  }).catch(err => {\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"requestStatus\"].classList.remove('hidden');\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"requestStatus\"].innerHTML = `<p>Request failed, ${err}</p>`;\n  });\n});\n\nfunction tempMeasure() {\n  if (measure === 'F') {\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"farenheit\"].style.backgroundColor = '#559999';\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"celsius\"].style.backgroundColor = '#375d5d';\n  } else {\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"farenheit\"].style.backgroundColor = '#375d5d';\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"celsius\"].style.backgroundColor = '#559999';\n  }\n}\n\nfunction dayOfWeek() {\n  const d = new Date();\n  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n  return days[d.getDay()];\n}\n\nfunction convertTime(utcTime) {\n  return new Date(utcTime * 1000).toLocaleString();\n}\n\nfunction convertToFaren() {\n  return `${Math.trunc(temperature * (9 / 5) - 459.67)} °F`;\n}\n\nfunction convertToCelsius() {\n  return `${Math.trunc(temperature - 273)} °C`;\n}\n\nfunction populateView(cityResponse) {\n  Object(_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cityResponse.weather[0].main.toLowerCase());\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wMain\"].textContent = cityResponse.weather[0].main;\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"cityName\"].textContent = cityResponse.name;\n  temperature = cityResponse.main.temp;\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wTemp\"].textContent = convertToCelsius();\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wDate\"].textContent = dayOfWeek();\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wSunrise\"].textContent = convertTime(cityResponse.sys.sunrise);\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wSunset\"].textContent = convertTime(cityResponse.sys.sunset);\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wSpeed\"].textContent = cityResponse.wind.speed;\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wPressure\"].textContent = cityResponse.main.pressure;\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wDeg\"].textContent = cityResponse.wind.deg;\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wHumidity\"].textContent = cityResponse.main.humidity;\n}\n\nasync function submitCity(city) {\n  try {\n    const cityResponse = await makeRequest(city);\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"requestStatus\"].classList.add('hidden');\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"weatherCurrent\"].classList.remove('hidden');\n    tempMeasure();\n    populateView(cityResponse);\n  } catch (error) {\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"requestStatus\"].classList.remove('hidden');\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"weatherCurrent\"].classList.add('hidden');\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"requestStatus\"].innerHTML = `<p>${error}</p>`;\n  }\n}\n\n_elements__WEBPACK_IMPORTED_MODULE_0__[\"myForm\"].addEventListener('submit', e => {\n  e.preventDefault();\n\n  if (!_elements__WEBPACK_IMPORTED_MODULE_0__[\"cityInput\"].value) {\n    // eslint-disable-next-line no-alert\n    alert('Enter city name');\n    return;\n  }\n\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"myContainer\"].classList.add('active');\n  submitCity(_elements__WEBPACK_IMPORTED_MODULE_0__[\"cityInput\"].value);\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"myForm\"].reset();\n});\n_elements__WEBPACK_IMPORTED_MODULE_0__[\"farenheit\"].addEventListener('click', () => {\n  measure = 'F';\n  tempMeasure();\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wTemp\"].textContent = convertToFaren();\n});\n_elements__WEBPACK_IMPORTED_MODULE_0__[\"celsius\"].addEventListener('click', () => {\n  measure = 'C';\n  tempMeasure();\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wTemp\"].textContent = convertToCelsius();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return changeBackground; });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\nfunction changeBackground(climate) {\n  const gradient = 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.35))';\n  const images = ['https://images.unsplash.com/photo-1516038858785-1cf85ef58b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1595884589048-639ac0efef99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1506588345361-5e12b7840845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1532178910-7815d6919875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'];\n\n  switch (climate) {\n    case 'clouds':\n      _elements__WEBPACK_IMPORTED_MODULE_0__[\"myContainer\"].style = `background-Image: ${gradient},url(${images[3]})`;\n      break;\n\n    case 'rain':\n    case 'drizzle':\n      _elements__WEBPACK_IMPORTED_MODULE_0__[\"myContainer\"].style = `background-image: ${gradient},url(${images[0]})`;\n      break;\n\n    case 'clear':\n      _elements__WEBPACK_IMPORTED_MODULE_0__[\"myContainer\"].style = `background-image: ${gradient},url(${images[2]})`;\n      break;\n\n    default:\n      _elements__WEBPACK_IMPORTED_MODULE_0__[\"myContainer\"].style = 'background: linear-gradient(147deg, #757a7dbe 0%, #edf395f5 74%)';\n  }\n}\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./style.css?");

/***/ })

/******/ });