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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst repairSlider = () => {\r\n  const repairForm = document.querySelector('.repair-types');\r\n  const repairSlider = repairForm.querySelectorAll('.repair-types-slider>div');\r\n  const repairTab = repairForm.querySelectorAll('.nav-list.nav-list-repair>button');\r\n  const mobNavigationLeft = repairForm.querySelector('.nav-arrow.nav-arrow_left');\r\n  const mobNavigationRight = repairForm.querySelector('.nav-arrow.nav-arrow_right');\r\n  const currentCounterSlide = repairForm.querySelector('.slider-counter-content__current');\r\n  const overallSlides = repairForm.querySelector('.slider-counter-content__total');\r\n\r\n  const mobVersionWidth = 1024;\r\n  let currentSlide = 0;\r\n  let currentElem = 0;\r\n\r\n  let slides = repairSlider[currentElem].querySelectorAll('.repair-types-slider__slide');\r\n\r\n  const updateCounter = (index) => {\r\n    slides = repairSlider[index].querySelectorAll('.repair-types-slider__slide');\r\n\r\n    currentCounterSlide.textContent = `${currentSlide + 1}`;\r\n    overallSlides.textContent = `${slides.length}`;\r\n  }\r\n\r\n  repairForm.addEventListener('click', (e) => {\r\n    checkActiveButton(repairTab);\r\n    if(!e.target.classList.contains('active') && e.target.tagName === 'BUTTON'){\r\n      currentSlide = 0;\r\n      removeActive();\r\n      e.target.classList.add('active');\r\n      checkActiveButton(repairTab);\r\n      updateCounter(currentElem);\r\n      handleSlider(currentElem);\r\n    }\r\n\r\n    prevSlide(slides, currentSlide);\r\n    if(e.target.matches('#repair-types-arrow_left')){\r\n    currentSlide--;\r\n    currentCounterSlide.textContent = `${currentSlide + 1}`\r\n    } else if(e.target.matches('#repair-types-arrow_right')){\r\n      currentSlide++;\r\n      currentCounterSlide.textContent = `${currentSlide + 1}`\r\n    }\r\n\r\n    if(currentSlide >= slides.length){\r\n      currentSlide = 0;\r\n      currentCounterSlide.textContent = `${currentSlide + 1}`\r\n    }\r\n\r\n    if(currentSlide < 0){\r\n      currentSlide = slides.length - 1\r\n      currentCounterSlide.textContent = `${currentSlide + 1}`\r\n    }\r\n    nextSlide(slides, currentSlide);\r\n  })\r\n\r\n  const checkActiveButton = (itemList) => {\r\n    for (let i = 0; i < itemList.length; i++){\r\n      if (itemList[i].classList.contains('active')){\r\n        currentElem = i;\r\n      }\r\n    }\r\n  }\r\n\r\n  if(document.documentElement.offsetWidth <= mobVersionWidth){\r\n    mobNavigationLeft.addEventListener('click', () => {\r\n      checkActiveButton(repairTab);\r\n      prevElem(repairTab, currentElem, 'active')\r\n      currentElem --;\r\n      if (currentElem < 0){\r\n        currentElem = repairTab.length - 1;\r\n      }\r\n      nextElem(repairTab, currentElem, 'active')\r\n    });\r\n    mobNavigationRight.addEventListener('click', () => {\r\n      checkActiveButton(repairTab);\r\n      prevElem(repairTab, currentElem, 'active')\r\n      currentElem ++;\r\n      if (currentElem >= repairTab.length - 1){\r\n        currentElem = 0;\r\n      }\r\n      nextElem(repairTab, currentElem, 'active')\r\n    })\r\n  }\r\n\r\n const removeActive = () => {\r\n   repairTab.forEach(tab => {\r\n     if(tab.classList.contains('active')){\r\n       tab.classList.remove('active')\r\n     }\r\n   })\r\n }\r\n  const handleSlider = (index) => {\r\n    repairSlider.forEach(item => {\r\n      item.style.display = 'none';\r\n    })\r\n    repairSlider[index].style.display = 'block';\r\n\r\n  }\r\n\r\n  const prevElem = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  }\r\n  const nextElem = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass);\r\n  }\r\n\r\n  const prevSlide = (elems, index) => {\r\n    elems[index].style.display = 'none';\r\n  }\r\n  const nextSlide = (elems, index) => {\r\n    elems[index].style.display = 'block';\r\n  }\r\n\r\nupdateCounter(currentElem);\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (repairSlider);\r\n\n\n//# sourceURL=webpack:///./modules/repairSlider.js?");

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