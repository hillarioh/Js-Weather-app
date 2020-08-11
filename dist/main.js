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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\nlet measure = 'F';\nlet temperature = 0.0;\n\nconst makeRequest = city => new Promise((resolve, reject) => {\n  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e`, {\n    method: 'get'\n  }).then(response => {\n    if (response.status >= 200 && response.status < 300) {\n      resolve(response.json());\n    } else {\n      reject(new Error(response.statusText));\n    }\n  }).catch(err => {\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"requestStatus\"].classList.remove('hidden');\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"requestStatus\"].innerHTML = `<p>Request failed, ${err}</p>`;\n  });\n});\n\nfunction tempMeasure() {\n  if (measure === 'F') {\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"farenheit\"].style.backgroundColor = '#559999';\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"celsius\"].style.backgroundColor = '#375d5d';\n  } else {\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"farenheit\"].style.backgroundColor = '#375d5d';\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"celsius\"].style.backgroundColor = '#559999';\n  }\n}\n\nfunction dayOfWeek() {\n  const d = new Date();\n  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n  return days[d.getDay()];\n}\n\nfunction convertTime(utcTime) {\n  return new Date(utcTime * 1000).toLocaleString();\n}\n\nfunction convertTemp() {\n  return `${Math.round(5 / 9 * (temperature - 32)) / 10} °C`;\n}\n\nfunction populateView(cityResponse) {\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wMain\"].textContent = cityResponse.weather[0].main;\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"cityName\"].textContent = cityResponse.name;\n  temperature = cityResponse.main.temp;\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wTemp\"].textContent = `${temperature}°F`;\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wDate\"].textContent = dayOfWeek();\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wSunrise\"].textContent = convertTime(cityResponse.sys.sunrise);\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wSunset\"].textContent = convertTime(cityResponse.sys.sunset);\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wSpeed\"].textContent = cityResponse.wind.speed;\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wPressure\"].textContent = cityResponse.main.pressure;\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wDeg\"].textContent = cityResponse.wind.deg;\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wHumidity\"].textContent = cityResponse.main.humidity;\n}\n\nasync function submitCity(city) {\n  try {\n    const cityResponse = await makeRequest(city);\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"weatherCurrent\"].classList.remove('hidden');\n    tempMeasure();\n    populateView(cityResponse);\n  } catch (error) {\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"requestStatus\"].classList.remove('hidden');\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"requestStatus\"].innerHTML = `<p>${error}`;\n  }\n}\n\n_elements__WEBPACK_IMPORTED_MODULE_0__[\"myForm\"].addEventListener('submit', e => {\n  e.preventDefault();\n\n  if (!_elements__WEBPACK_IMPORTED_MODULE_0__[\"cityInput\"].value) {\n    // eslint-disable-next-line no-alert\n    alert('Enter city name');\n    return;\n  }\n\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"myContainer\"].classList.add('active');\n  submitCity(_elements__WEBPACK_IMPORTED_MODULE_0__[\"cityInput\"].value);\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"myForm\"].reset();\n});\n_elements__WEBPACK_IMPORTED_MODULE_0__[\"farenheit\"].addEventListener('click', () => {\n  measure = 'F';\n  tempMeasure();\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wTemp\"].textContent = `${temperature}°F`;\n});\n_elements__WEBPACK_IMPORTED_MODULE_0__[\"celsius\"].addEventListener('click', () => {\n  measure = 'C';\n  tempMeasure();\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"wTemp\"].textContent = convertTemp();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });