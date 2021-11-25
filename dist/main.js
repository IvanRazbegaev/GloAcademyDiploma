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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerPhones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerPhones */ \"./modules/headerPhones.js\");\n/* harmony import */ var _modules_feedback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/feedback */ \"./modules/feedback.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/portfolio */ \"./modules/portfolio.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_feedback__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_headerPhones__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__.menu)();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_portfolio__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/feedback.js":
/*!*****************************!*\
  !*** ./modules/feedback.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst feedback = () => {\r\n\r\n  const feedbackForm = document.querySelectorAll('.feedback');\r\n  const termsCloseBtn = document.querySelector('.popup-privacy>.close');\r\n  const terms = document.querySelector('.popup-privacy');\r\n\r\n  termsCloseBtn.addEventListener('click', () => {\r\n    terms.style.visibility  = 'hidden';\r\n  })\r\n\r\n  feedbackForm.forEach(item => {\r\n    const phoneInput = item.querySelector('.input.feedback__input-input');\r\n    const feedbackBtn = item.querySelector('.button');\r\n    const privacyLink = item.querySelector('.link-privacy');\r\n\r\n    let confCheckbox = item.querySelector('.checkbox__input');\r\n\r\n    privacyLink.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      terms.style.visibility  = 'visible'\r\n    })\r\n\r\n    phoneInput.addEventListener('input', (e) => {\r\n      const pattern = /[^\\d+\\-\\)\\(]/gi\r\n      e.target.value = e.target.value.replace(pattern, '')\r\n    })\r\n    feedbackBtn.addEventListener('click', async (e) => {\r\n      confCheckbox = item.querySelector('.checkbox__input');\r\n      e.preventDefault();\r\n      if (phoneInput.value.length < 11){\r\n        alert('Телефонный номер не может быть менее 11 символов!')\r\n        return false;\r\n      } else if (!confCheckbox.checked) {\r\n        alert('Примите политику безопасности!')\r\n        return false;\r\n      } else {\r\n        phoneInput.value = '';\r\n        confCheckbox.checked = false;\r\n      }\r\n      const response = await sendFeedback(phoneInput.value);\r\n      console.log(response);\r\n    })\r\n  })\r\n}\r\n\r\nconst sendFeedback = async (data) => {\r\n  const path = 'server.php'\r\n  const getData = await fetch(path,{\r\n    method: 'POST',\r\n    body: JSON.stringify(data),\r\n    headers: {\r\n      'Content-type': 'application/json',\r\n      'Accept': 'application/json'\r\n    }\r\n  }).then(response => response.json())\r\n    .catch((e) => console.log(e));\r\n\r\n  return getData;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (feedback);\r\n\n\n//# sourceURL=webpack:///./modules/feedback.js?");

/***/ }),

/***/ "./modules/headerPhones.js":
/*!*********************************!*\
  !*** ./modules/headerPhones.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerPhones = () => {\r\n  const phoneArrow = document.querySelector('.header-contacts__arrow img');\r\n  const secondPhone = document.querySelector('.header-contacts__phone-number-accord')\r\n\r\n  let arrowPressed = false;\r\n\r\n  phoneArrow.addEventListener('click', (e) => {\r\n    if(!arrowPressed){\r\n      secondPhone.style.position = 'relative';\r\n      secondPhone.querySelector('a').style.opacity = '1';\r\n      phoneArrow.style.transform = 'rotate(180deg)';\r\n      arrowPressed = true;\r\n    } else {\r\n      secondPhone.style.position = 'absolute';\r\n      secondPhone.querySelector('a').style.opacity = '0';\r\n      phoneArrow.style.transform = 'rotate(0deg)';\r\n      arrowPressed = false;\r\n    }\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerPhones);\r\n\n\n//# sourceURL=webpack:///./modules/headerPhones.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu),\n/* harmony export */   \"menuClosing\": () => (/* binding */ menuClosing)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuIcon = document.querySelector('.menu__icon');\r\n  const popup = document.querySelector('.popup-dialog-menu')\r\n  const closeBtn = document.querySelector('.close-menu');\r\n  const menuItem = document.querySelectorAll('.popup-menu-nav__item > a');\r\n  const upBtn = document.querySelector('.button-footer>a');\r\n\r\n  menuIcon.addEventListener('click', () => {\r\n    popup.style.transform = 'translate3d(0, 0%, 0)';\r\n  })\r\n\r\n  closeBtn.addEventListener('click', () => {\r\n    menuClosing();\r\n  })\r\n\r\n  menuItem.forEach(item => {\r\n    item.addEventListener('click', (e) => {\r\n      const href = document.querySelector(item.getAttribute(\"href\"));\r\n      menuClosing();\r\n      e.preventDefault();\r\n      href.scrollIntoView({block:\"center\", behavior: \"smooth\"})\r\n    })\r\n  })\r\n\r\n  upBtn.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    const href = document.querySelector(upBtn.getAttribute(\"href\"));\r\n    href.scrollIntoView({block:\"center\", behavior: \"smooth\"})\r\n  })\r\n\r\n}\r\nconst menuClosing = () => {\r\n  const popup = document.querySelector('.popup-dialog-menu')\r\n  if(document.documentElement.offsetWidth <= 576){\r\n    popup.style.transform = 'translate3d(0,-100%, 0)';\r\n  }else {\r\n    popup.style.transform = 'translate3d(100%, 0, 0)'\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./modules/menu.js\");\n\r\n\r\nconst modal = () => {\r\n  const modalWindow = document.querySelector('.popup-repair-types');\r\n  const fullList = document.querySelectorAll('.link-list');\r\n  const modalCloseBtn = modalWindow.querySelector('.close')\r\n\r\n  fullList.forEach(item => {\r\n    item.addEventListener('click', (e) => {\r\n      if(item.querySelector('.menu-link')){\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_0__.menuClosing)();\r\n      }\r\n      modalWindow.style.visibility = 'visible';\r\n    })\r\n  })\r\n\r\n  modalCloseBtn.addEventListener('click', () => {\r\n    modalWindow.style.visibility = 'hidden';\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/portfolio.js":
/*!******************************!*\
  !*** ./modules/portfolio.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst portfolio = () => {\n  const portfolioForm = document.querySelector('.portfolio');\n  const portfolioSlide = portfolioForm.querySelectorAll('.portfolio-slider__slide.fade-tab');\n  const portfolioSlider = portfolioForm.querySelector('.portfolio-slider');\n  const arrowRight = document.getElementById('portfolio-arrow_right');\n  const arrowLeft = document.getElementById('portfolio-arrow_left');\n\n  let currentlyShownSlides;\n  let activeSet = [];\n\n  if (document.documentElement.offsetWidth < 1010){\n    currentlyShownSlides = 2;\n  } else {\n    currentlyShownSlides = 3;\n  }\n\n  const showSlide = (elem, index) => {\n    elem[index].style.display = 'flex';\n  }\n\n  const hideSlide = (elem, index) => {\n    elem[index].style.display = 'none';\n  }\n\n  for (let i = 0; i < portfolioSlide.length; i++){\n    hideSlide(portfolioSlide, i);\n  }\n  for (let i = 0; i < currentlyShownSlides; i++){\n    showSlide(portfolioSlide, i);\n  }\n\n\n  const getActiveSlidesSet = (slidesList) => {\n    activeSet = [];\n    for (let i = 0; i < slidesList.length; i++){\n      if(slidesList[i].style.display === 'flex'){\n        activeSet.push(i);\n      }\n    }\n  }\n\n  arrowRight.addEventListener('click', () => {\n\n    getActiveSlidesSet(portfolioSlide);\n    if (activeSet[0] !== 0){\n      arrowLeft.style.display = 'flex';\n    }\n\n    for (let i = 0; i < activeSet.length; i++){\n      hideSlide(portfolioSlide, activeSet[i]);\n    }\n\n    for (let i = 0; i < activeSet.length; i++){\n      activeSet[i] += 1;\n    }\n\n    if (activeSet[activeSet.length - 1] === portfolioSlide.length - 1){\n      arrowRight.style.display = 'none';\n    }\n\n    for (let i = 0; i < activeSet.length; i++){\n      showSlide(portfolioSlide, activeSet[i]);\n    }\n  })\n\n  arrowLeft.addEventListener('click', () => {\n\n    getActiveSlidesSet(portfolioSlide);\n\n    if (activeSet[activeSet.length - 1] !== portfolioSlide.length - 1){\n      arrowRight.style.display = 'flex';\n    }\n\n    for (let i = 0; i < activeSet.length; i++){\n      hideSlide(portfolioSlide, activeSet[i]);\n    }\n\n    for (let i = 0; i < activeSet.length; i++){\n      activeSet[i] -= 1;\n    }\n\n    if (activeSet[0] === 0){\n      arrowLeft.style.display = 'none';\n    }\n\n    for (let i = 0; i < activeSet.length; i++){\n      showSlide(portfolioSlide, activeSet[i]);\n    }\n  })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (portfolio);\n\n\n//# sourceURL=webpack:///./modules/portfolio.js?");

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