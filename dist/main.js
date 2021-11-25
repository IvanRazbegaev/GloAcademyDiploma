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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_popupAnnotation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/popupAnnotation */ \"./modules/popupAnnotation.js\");\n\r\n\r\n(0,_modules_popupAnnotation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/popupAnnotation.js":
/*!************************************!*\
  !*** ./modules/popupAnnotation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popupAnnotation = () => {\r\n  const formulaForm = document.querySelector('.formula');\r\n  const formulaItemsMobile = formulaForm.querySelectorAll('.formula-item.formula-slider__slide');\r\n  const navArrowLeft = document.getElementById('formula-arrow_left');\r\n  const navArrowRight = document.getElementById('formula-arrow_right');\r\n  const mobileVersionWidth = 1024;\r\n\r\n  let formulaItemsDesktop = document.querySelectorAll('.wrapper_small.mobile-hide.tablet-hide>.row>.formula-item');\r\n  let activeItem = 0;\r\n\r\n  formulaItemsDesktop.forEach((item, index) => {\r\n    item.addEventListener('mouseover', (e) => {\r\n      if (e.target.closest(\".formula-item__icon\")){\r\n        item.classList.add('active-item');\r\n\r\n      } else {\r\n        item.classList.remove('active-item');\r\n      }\r\n    })\r\n  })\r\n\r\n  const showSlide= (elem, index) => {\r\n    elem[index].style.display = 'flex';\r\n    elem[index].classList.add('active-item');\r\n  }\r\n\r\n  const exposeOfSlide = (elem, index) => {\r\n    elem[index].style.display = 'none';\r\n    elem[index].classList.remove('active-item');\r\n  }\r\n\r\n  const hideSlides = () => {\r\n    for  (let i = 0; i < formulaItemsMobile.length; i++){\r\n      formulaItemsMobile[i].style.display = 'none'\r\n    }\r\n  }\r\n\r\n  if (document.documentElement.offsetWidth <= mobileVersionWidth){\r\n    hideSlides();\r\n    showSlide(formulaItemsMobile,activeItem);\r\n    navArrowLeft.addEventListener('click', () => {\r\n      exposeOfSlide(formulaItemsMobile, activeItem);\r\n      activeItem--;\r\n      console.log(activeItem);\r\n      if (activeItem < 0){\r\n        activeItem = formulaItemsMobile.length -1;\r\n      }\r\n      showSlide(formulaItemsMobile, activeItem)\r\n    })\r\n    navArrowRight.addEventListener('click', () => {\r\n      exposeOfSlide(formulaItemsMobile, activeItem);\r\n      console.log(activeItem);\r\n      activeItem++;\r\n      if (activeItem >= formulaItemsMobile.length){\r\n        activeItem = 0;\r\n      }\r\n      showSlide(formulaItemsMobile, activeItem)\r\n    })\r\n  }\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupAnnotation);\r\n\n\n//# sourceURL=webpack:///./modules/popupAnnotation.js?");

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