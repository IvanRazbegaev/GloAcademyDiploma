/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_repairSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/repairSlider */ \"./modules/repairSlider.js\");\n\n\n(0,_modules_repairSlider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/repairSlider.js":
/*!*********************************!*\
  !*** ./modules/repairSlider.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst repairSlider = () => {\n  const repairForm = document.querySelector('.repair-types');\n  const repairSlider = repairForm.querySelectorAll('.repair-types-slider>div');\n  const repairTab = repairForm.querySelectorAll('.nav-list.nav-list-repair>button');\n  const mobNavigationLeft = repairForm.querySelector('.nav-arrow.nav-arrow_left');\n  const mobNavigationRight = repairForm.querySelector('.nav-arrow.nav-arrow_right');\n  const mobVersionWidth = 560;\n\n  console.log(mobNavigationLeft);\n  console.log(mobNavigationRight)\n\n  if(document.documentElement.offsetWidth <= mobVersionWidth){\n    mobNavigationLeft.addEventListener('click', () => {\n      console.log('Clicked Left!')\n    });\n    mobNavigationRight.addEventListener('click', () => {\n      console.log('Clicked Right!')\n    })\n  }\n\n  for (let i = 0; i < repairTab.length; i++){\n   repairTab[i].addEventListener('click', () => {\n     removeActive();\n     repairTab[i].classList.add('active');\n     handleSlider();\n   })\n }\n\n const removeActive = () => {\n   repairTab.forEach(tab => {\n     if(tab.classList.contains('active')){\n       tab.classList.remove('active')\n     }\n   })\n }\n  const handleSlider = () => {\n    repairSlider.forEach((slider, index) => {\n      if(!repairTab[index].classList.contains('active')){\n        slider.style.display = 'none';\n      } else {\n        slider.style.display = 'block';\n      }\n    })\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (repairSlider);\n\n\n//# sourceURL=webpack:///./modules/repairSlider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;