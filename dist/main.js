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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_feedback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/feedback */ \"./modules/feedback.js\");\n\r\n\r\n(0,_modules_feedback__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/feedback.js":
/*!*****************************!*\
  !*** ./modules/feedback.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst feedback = () => {\r\n  const phoneInput = document.querySelectorAll('[name=phone]');\r\n\r\n  for (let i = 1; i <= phoneInput.length; i++){\r\n    const feedbackForm = document.querySelector(`#feedback${i}`);\r\n    const phoneInput = feedbackForm.querySelector('[name=phone]');\r\n    const name = feedbackForm.querySelector('[type=text]');\r\n    const feedbackBtn = feedbackForm.querySelector('button');\r\n\r\n    let checkbox = feedbackForm.querySelector('[type=checkbox]');\r\n    let dataObj;\r\n\r\n    phoneInput.addEventListener('input', (e) => {\r\n        e.target.value = phoneMask(e.target.value);\r\n      })\r\n    feedbackBtn.addEventListener('click', async (e) => {\r\n        checkbox = feedbackForm.querySelector('[type=checkbox]');\r\n        e.preventDefault();\r\n        if (phoneInput.value.length < 11){\r\n          alert('Телефонный номер не может быть менее 11 символов!')\r\n          return false;\r\n        } else if (!checkbox.checked) {\r\n          alert('Примите политику безопасности!')\r\n          return false;\r\n        }\r\n        if(name){\r\n          dataObj ={\r\n            name: name.value,\r\n            mail: phoneInput.value\r\n          }\r\n        } else {\r\n          dataObj ={\r\n            mail: phoneInput.value\r\n          }\r\n        }\r\n        const response = await sendFeedback(dataObj);\r\n        checkbox.checked = false;\r\n        phoneInput.value = '';\r\n        if(name) {\r\n          name.value = '';\r\n        }\r\n        console.log(response);\r\n    })\r\n  }\r\n}\r\n\r\n\r\nfunction phoneMask (phone) {\r\n  return phone.replace(/\\D/g, '')\r\n    .replace(/^(\\d)(\\d{3})(\\d{3})(\\d{2})(\\d{2})/, '+$1($2)$3-$4-$5')\r\n}\r\n\r\nconst sendFeedback = async (data) => {\r\n  const path = 'https://en22hlwqnbzi7pj.m.pipedream.net'\r\n  const getData = await fetch(path,{\r\n    method: 'POST',\r\n    body: JSON.stringify(data),\r\n    headers: {\r\n      'Content-type': 'application/json'\r\n    }\r\n  }).then(response => response.json())\r\n    .catch((e) => console.log(e));\r\n\r\n  return getData;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (feedback);\r\n\n\n//# sourceURL=webpack:///./modules/feedback.js?");

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