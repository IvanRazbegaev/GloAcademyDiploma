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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_repairSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/repairSlider */ \"./modules/repairSlider.js\");\n\r\n\r\n(0,_modules_repairSlider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/repairSlider.js":
/*!*********************************!*\
  !*** ./modules/repairSlider.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst repairSlider = () => {\n  const repairForm = document.querySelector('.repair-types');\n  const repairSlider = repairForm.querySelectorAll('.repair-types-slider>div');\n  const repairTab = repairForm.querySelectorAll('.nav-list.nav-list-repair>button');\n  const mobNavigationLeft = repairForm.querySelector('.nav-arrow.nav-arrow_left');\n  const mobNavigationRight = repairForm.querySelector('.nav-arrow.nav-arrow_right');\n  const currentCounterSlide = repairForm.querySelector('.slider-counter-content__current');\n  const overallSlides = repairForm.querySelector('.slider-counter-content__total');\n\n  const mobVersionWidth = 1024;\n  let currentSlide = 0;\n  let currentElem = 0;\n\n  let slides = repairSlider[currentElem].querySelectorAll('.repair-types-slider__slide');\n\n  const updateCounter = (index) => {\n    slides = repairSlider[index].querySelectorAll('.repair-types-slider__slide');\n\n    currentCounterSlide.textContent = `${currentSlide + 1}`;\n    overallSlides.textContent = `${slides.length}`;\n  }\n\n  repairForm.addEventListener('click', (e) => {\n    checkActiveButton(repairTab);\n    if(!e.target.classList.contains('active') && e.target.tagName === 'BUTTON'){\n      currentSlide = 0;\n      removeActive();\n      e.target.classList.add('active');\n      checkActiveButton(repairTab);\n      updateCounter(currentElem);\n      handleSlider(currentElem);\n    }\n\n    prevSlide(slides, currentSlide);\n    if(e.target.matches('#repair-types-arrow_left')){\n    currentSlide--;\n    currentCounterSlide.textContent = `${currentSlide + 1}`\n    } else if(e.target.matches('#repair-types-arrow_right')){\n      currentSlide++;\n      currentCounterSlide.textContent = `${currentSlide + 1}`\n    }\n\n    if(currentSlide >= slides.length){\n      currentSlide = 0;\n      currentCounterSlide.textContent = `${currentSlide + 1}`\n    }\n\n    if(currentSlide < 0){\n      currentSlide = slides.length - 1\n      currentCounterSlide.textContent = `${currentSlide + 1}`\n    }\n    nextSlide(slides, currentSlide);\n  })\n\n  const checkActiveButton = (itemList) => {\n    for (let i = 0; i < itemList.length; i++){\n      if (itemList[i].classList.contains('active')){\n        currentElem = i;\n      }\n    }\n  }\n\n  if(document.documentElement.offsetWidth <= mobVersionWidth){\n    mobNavigationLeft.addEventListener('click', () => {\n      checkActiveButton(repairTab);\n      prevElem(repairTab, currentElem, 'active')\n      currentElem --;\n      if (currentElem < 0){\n        currentElem = repairTab.length - 1;\n      }\n      nextElem(repairTab, currentElem, 'active')\n    });\n    mobNavigationRight.addEventListener('click', () => {\n      checkActiveButton(repairTab);\n      prevElem(repairTab, currentElem, 'active')\n      currentElem ++;\n      if (currentElem >= repairTab.length - 1){\n        currentElem = 0;\n      }\n      nextElem(repairTab, currentElem, 'active')\n    })\n  }\n\n const removeActive = () => {\n   repairTab.forEach(tab => {\n     if(tab.classList.contains('active')){\n       tab.classList.remove('active')\n     }\n   })\n }\n  const handleSlider = (index) => {\n    repairSlider.forEach(item => {\n      item.style.display = 'none';\n    })\n    repairSlider[index].style.display = 'block';\n\n  }\n\n  const prevElem = (elems, index, strClass) => {\n    elems[index].classList.remove(strClass);\n  }\n  const nextElem = (elems, index, strClass) => {\n    elems[index].classList.add(strClass);\n  }\n\n  const prevSlide = (elems, index) => {\n    elems[index].style.display = 'none';\n  }\n  const nextSlide = (elems, index) => {\n    elems[index].style.display = 'block';\n  }\n\nupdateCounter(currentElem);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (repairSlider);\n\n\n//# sourceURL=webpack:///./modules/repairSlider.js?");

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