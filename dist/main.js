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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_popupAnnotation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/popupAnnotation */ \"./modules/popupAnnotation.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n/* harmony import */ var _modules_consultation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/consultation */ \"./modules/consultation.js\");\n/* harmony import */ var _modules_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contracts */ \"./modules/contracts.js\");\n/* harmony import */ var _modules_feedback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/feedback */ \"./modules/feedback.js\");\n/* harmony import */ var _modules_feedbackBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/feedbackBlock */ \"./modules/feedbackBlock.js\");\n/* harmony import */ var _modules_headerPhones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/headerPhones */ \"./modules/headerPhones.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_portfolio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/portfolio */ \"./modules/portfolio.js\");\n/* harmony import */ var _modules_repairSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/repairSlider */ \"./modules/repairSlider.js\");\n/* harmony import */ var _modules_reviews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/reviews */ \"./modules/reviews.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_popupAnnotation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_consultation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_contracts__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_feedback__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('.feedback');\r\n(0,_modules_feedbackBlock__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_headerPhones__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_7__.menu)();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_portfolio__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_repairSlider__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n(0,_modules_reviews__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordeon.js":
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordion = () => {\r\n  const accordionForm = document.querySelector('.accordion');\r\n  const itemList = accordionForm.querySelectorAll('ul>li');\r\n  const itemMessage = accordionForm.querySelectorAll('.msg');\r\n\r\n  const hideAllMessages = () => {\r\n    itemMessage.forEach(message => {\r\n      message.style.display = 'none'\r\n    })\r\n  }\r\n\r\n  hideAllMessages();\r\n\r\n  for (let i = 0; i < itemList.length; i++) {\r\n    itemList[i].addEventListener('click', () => {\r\n      if(itemMessage[i].style.display === 'contents'){\r\n        itemMessage[i].style.display = 'none';\r\n      } else {\r\n        hideAllMessages();\r\n        itemMessage[i].style.display = 'contents';\r\n      }\r\n    })\r\n  }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);\r\n\n\n//# sourceURL=webpack:///./modules/accordeon.js?");

/***/ }),

/***/ "./modules/consultation.js":
/*!*********************************!*\
  !*** ./modules/consultation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _feedback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback */ \"./modules/feedback.js\");\n\r\n\r\n\r\nconst consult = () => {\r\n  const consultBtn = document.querySelectorAll('.button.button_wide');\r\n  const consultPopup = document.querySelector('.popup-consultation');\r\n  const consultCloseBtn = consultPopup.querySelector('.close');\r\n\r\n  (0,_feedback__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.popup.popup-consultation');\r\n\r\n  consultBtn.forEach(item => {\r\n    item.addEventListener('click', (e) => {\r\n      consultPopup.style.visibility = 'visible';\r\n    })\r\n  })\r\n\r\n  consultPopup.addEventListener('click', (e) => {\r\n    if (e.target.closest('.feedback-wrap')) {\r\n      consultPopup.style.visibility = 'visible';\r\n    } else {\r\n      consultPopup.style.visibility = 'hidden';\r\n    }\r\n  })\r\n\r\n  consultCloseBtn.addEventListener('clicked', () => {\r\n    consultPopup.style.visibility = 'hidden';\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (consult);\r\n\n\n//# sourceURL=webpack:///./modules/consultation.js?");

/***/ }),

/***/ "./modules/contracts.js":
/*!******************************!*\
  !*** ./modules/contracts.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contracts = () => {\r\n  const contractsList = document.querySelectorAll('.transparency-item');\r\n  const contractForm = document.querySelector('.popup.popup-transparency');\r\n  const contract = document.querySelectorAll('.popup-transparency-slider__slide');\r\n\r\n  const currentCount = contractForm.querySelector('.slider-counter-content__current');\r\n  const overallCount = contractForm.querySelector('.slider-counter-content__total');\r\n\r\n  const arrowLeft = contractForm.querySelector('.popup-arrow_transparency_left');\r\n  const arrowRight = contractForm.querySelector('.popup-arrow_transparency_right');\r\n  const mobileVersionWidth = 1024;\r\n\r\n  const sliderArrowLeft = document.getElementById('transparency-arrow_left');\r\n  const sliderArrowRight = document.getElementById('transparency-arrow_right');\r\n\r\n  let currentContract = 0;\r\n  let currentList = 0;\r\n\r\n  const hideList = () => {\r\n    for (let i = 0; i < contractsList.length; i++){\r\n      contractsList[i].style.display = 'none'\r\n    }\r\n  }\r\n\r\n  const showActiveList = (currentList) => {\r\n    contractsList[currentList].style.display = 'flex'\r\n  }\r\n\r\n  const removeActiveList = (currentList) => {\r\n    contractsList[currentList].style.display = 'none'\r\n  }\r\n\r\n  if (document.documentElement.offsetWidth <= mobileVersionWidth){\r\n    hideList();\r\n    showActiveList(currentList);\r\n    sliderArrowLeft.addEventListener('click', () => {\r\n      removeActiveList(currentList);\r\n      currentList--;\r\n      if (currentList < 0){\r\n        currentList = contractsList.length -1;\r\n      }\r\n      showActiveList(currentList);\r\n    });\r\n    sliderArrowRight.addEventListener('click', () => {\r\n      removeActiveList(currentList);\r\n      currentList++;\r\n      if (currentList >= contractsList.length){\r\n        currentList = 0;\r\n      }\r\n      showActiveList(currentList);\r\n    })\r\n  }\r\n\r\n  for (let i = 0; i < contractsList.length; i++){\r\n    contractsList[i].addEventListener('click', (e) => {\r\n      hideContracts();\r\n      contractForm.style.visibility = 'visible';\r\n      contract[i].style.display = 'block';\r\n      currentContract = i;\r\n      updateCounter(i);\r\n    })\r\n  }\r\n    contractForm.addEventListener('click', (e) => {\r\n      if (!e.target.closest('.popup-dialog-transparency')) {\r\n         contractForm.style.visibility = 'hidden';\r\n      }\r\n    })\r\n\r\n  arrowRight.addEventListener('click', () => {\r\n    prevSlide(contract, currentContract)\r\n    currentContract++;\r\n    if (currentContract >= contract.length){\r\n      currentContract = 0;\r\n    }\r\n    nextSlide(contract, currentContract)\r\n    updateCounter();\r\n  })\r\n  arrowLeft.addEventListener('click', () => {\r\n    prevSlide(contract, currentContract)\r\n    currentContract--;\r\n    if (currentContract < 0){\r\n      currentContract = contract.length - 1;\r\n    }\r\n    nextSlide(contract, currentContract)\r\n    updateCounter();\r\n  })\r\n  const prevSlide = (elem, index) => {\r\n    elem[index].style.display = 'none';\r\n  }\r\n\r\n  const nextSlide = (elem, index) => {\r\n    elem[index].style.display = 'block';\r\n  }\r\n\r\n  const hideContracts = () => {\r\n    for (let i = 0; i < contract.length; i++){\r\n      contract[i].style.display = 'none'\r\n    }\r\n  }\r\n\r\n  const updateCounter = () => {\r\n    currentCount.textContent = `${currentContract + 1}`;\r\n    overallCount.textContent = `${contract.length}`;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contracts);\r\n\n\n//# sourceURL=webpack:///./modules/contracts.js?");

/***/ }),

/***/ "./modules/feedback.js":
/*!*****************************!*\
  !*** ./modules/feedback.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst feedback = (form) => {\r\n\r\n  const feedbackForm = document.querySelectorAll(`${form}`);\r\n\r\n  const termsCloseBtn = document.querySelector('.popup-privacy>.close');\r\n  const terms = document.querySelector('.popup-privacy');\r\n\r\n  const thanksPopup = document.querySelector('.popup-thank');\r\n  const thanksForm = thanksPopup.querySelector('.feedback-wrap.popup-thank-bg');\r\n  const thanksPopupClose = thanksPopup.querySelector('.close');\r\n\r\n  termsCloseBtn.addEventListener('click', () => {\r\n    terms.style.visibility  = 'hidden';\r\n  })\r\n\r\n  feedbackForm.forEach(item => {\r\n    const phoneInput = item.querySelector('.input.feedback__input-input');\r\n    const feedbackBtn = item.querySelector('.button');\r\n    const privacyLink = item.querySelector('.link-privacy');\r\n\r\n    let confCheckbox = item.querySelector('.checkbox__input');\r\n\r\n    privacyLink.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      terms.style.visibility  = 'visible'\r\n    })\r\n\r\n    feedbackForm.forEach(item => {\r\n      const phoneInput = item.querySelector('.input.feedback__input-input');\r\n      phoneInput.addEventListener('input', (e) => {\r\n        e.target.value = phoneMask(e.target.value)\r\n      })\r\n    })\r\n    function phoneMask (phone) {\r\n      return phone.replace(/\\D/g, '')\r\n        .slice(0, 11)\r\n        .replace(/^(\\d{1,2})(\\d{3})(\\d{3})(\\d{2})(\\d{2})/, '+$1($2)$3-$4-$5');\r\n    }\r\n    feedbackBtn.addEventListener('click', async (e) => {\r\n      confCheckbox = item.querySelector('.checkbox__input');\r\n      e.preventDefault();\r\n      if (phoneInput.value.length < 11){\r\n        alert('Телефонный номер не может быть менее 11 символов!')\r\n        return false;\r\n      } else if (!confCheckbox.checked) {\r\n        alert('Примите политику безопасности!')\r\n        return false;\r\n      }\r\n      thanksPopup.style.visibility = 'visible';\r\n      thanksPopup.addEventListener('click', (e) => {\r\n        if(!e.target.closest('.popup-thank-bg')){\r\n          thanksPopup.style.visibility = 'hidden';\r\n        }\r\n      })\r\n      thanksPopupClose.addEventListener('click', () => {\r\n        thanksPopup.style.visibility = 'hidden';\r\n      })\r\n\r\n      const response = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.sendFeedback)(phoneInput.value);\r\n      if (form.includes('popup')){\r\n        document.querySelector(form).style.visibility = 'hidden';\r\n      }\r\n      phoneInput.value = '';\r\n      confCheckbox.checked = false;\r\n      console.log(response);\r\n    })\r\n  })\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (feedback);\r\n\n\n//# sourceURL=webpack:///./modules/feedback.js?");

/***/ }),

/***/ "./modules/feedbackBlock.js":
/*!**********************************!*\
  !*** ./modules/feedbackBlock.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\nconst feedbackBlock = async () => {\r\n  const feedbackBlockForm = document.querySelectorAll('.feedback-block__form');\r\n\r\n  const termsCloseBtn = document.querySelector('.popup-privacy>.close');\r\n  const terms = document.querySelector('.popup-privacy');\r\n\r\n  const thanksPopup = document.querySelector('.popup-thank');\r\n  const thanksPopupClose = thanksPopup.querySelector('.close');\r\n\r\n  termsCloseBtn.addEventListener('click', () => {\r\n    terms.style.visibility = 'hidden';\r\n  })\r\n\r\n  feedbackBlockForm.forEach(block => {\r\n    const phoneInput = block.querySelector('.feedback-block__form-input_phone');\r\n    const nameInput = block.querySelector('.feedback-block__form-input_name');\r\n    const feedbackBtn = block.querySelector('.button');\r\n    const privacyLink = block.querySelector('.link-privacy');\r\n\r\n    let confCheckbox = block.querySelector('.checkbox__input');\r\n\r\n    privacyLink.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      terms.style.visibility = 'visible'\r\n    })\r\n\r\n    phoneInput.addEventListener('input', (e) => {\r\n      e.target.value = phoneMask(e.target.value)\r\n    })\r\n\r\n    nameInput.addEventListener('input', (e) => {\r\n      e.target.value = nameMask(e.target.value);\r\n    })\r\n\r\n    feedbackBtn.addEventListener('click', async (e) => {\r\n      confCheckbox = block.querySelector('.checkbox__input');\r\n      e.preventDefault();\r\n      if (phoneInput.value.length < 11) {\r\n        alert('Телефонный номер не может быть менее 11 символов!')\r\n        return false;\r\n      } else if (!confCheckbox.checked) {\r\n        alert('Примите политику безопасности!')\r\n        return false;\r\n      } else if (nameInput.value.length < 2){\r\n        alert('Имя не может быть менее 2ух символов!');\r\n        return false;\r\n      }\r\n\r\n      thanksPopup.style.visibility = 'visible';\r\n      thanksPopup.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-thank-bg')) {\r\n          thanksPopup.style.visibility = 'hidden';\r\n        }\r\n      })\r\n      thanksPopupClose.addEventListener('click', () => {\r\n        thanksPopup.style.visibility = 'hidden';\r\n      })\r\n\r\n      const response = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.sendFeedback)(phoneInput.value, nameInput.value);\r\n      console.log(response)\r\n\r\n      phoneInput.value = '';\r\n      nameInput.value = '';\r\n      confCheckbox.checked = false;\r\n    })\r\n  })\r\n}\r\n  const nameMask = (name) => {\r\n    return name.replace(/\\d/gi, '')\r\n  }\r\n\r\n\r\n\r\n  const phoneMask = (phone) => {\r\n    return phone.replace(/\\D/g, '')\r\n      .slice(0, 11)\r\n      .replace(/^(\\d{1,2})(\\d{3})(\\d{3})(\\d{2})(\\d{2})/, '+$1($2)$3-$4-$5');\r\n  }\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (feedbackBlock);\r\n\n\n//# sourceURL=webpack:///./modules/feedbackBlock.js?");

/***/ }),

/***/ "./modules/headerPhones.js":
/*!*********************************!*\
  !*** ./modules/headerPhones.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerPhones = () => {\r\n  const phoneArrow = document.querySelector('.header-contacts__arrow img');\r\n  const secondPhone = document.querySelector('.header-contacts__phone-number-accord')\r\n\r\n  let arrowPressed = false;\r\n\r\n  phoneArrow.addEventListener('click', (e) => {\r\n    if(!arrowPressed){\r\n      secondPhone.style.position = 'relative';\r\n      secondPhone.querySelector('a').style.opacity = '1';\r\n      phoneArrow.style.transform = 'rotate(180deg)';\r\n      arrowPressed = true;\r\n    } else {\r\n      secondPhone.style.position = 'absolute';\r\n      secondPhone.querySelector('a').style.opacity = '0';\r\n      phoneArrow.style.transform = 'rotate(0deg)';\r\n      arrowPressed = false;\r\n    }\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerPhones);\r\n\n\n//# sourceURL=webpack:///./modules/headerPhones.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendFeedback\": () => (/* binding */ sendFeedback)\n/* harmony export */ });\nconst sendFeedback = async (...params) => {\r\n\r\n  const path = 'https://en22hlwqnbzi7pj.m.pipedream.net'\r\n  const getData = await fetch(path,{\r\n    method: 'POST',\r\n    body: JSON.stringify(params),\r\n    headers: {\r\n      'Content-type': 'application/json',\r\n      'Accept': 'application/json'\r\n    }\r\n  }).then(response => response.json())\r\n    .catch((e) => console.log(e));\r\n\r\n  return getData;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

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

/***/ "./modules/popupAnnotation.js":
/*!************************************!*\
  !*** ./modules/popupAnnotation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popupAnnotation = () => {\r\n  const formulaForm = document.querySelector('.formula');\r\n  const formulaItemsMobile = formulaForm.querySelectorAll('.formula-item.formula-slider__slide');\r\n  const navArrowLeft = document.getElementById('formula-arrow_left');\r\n  const navArrowRight = document.getElementById('formula-arrow_right');\r\n  const mobileVersionWidth = 1024;\r\n\r\n  let formulaItemsDesktop = document.querySelectorAll('.wrapper_small.mobile-hide.tablet-hide>.row>.formula-item');\r\n  let activeItem = 0;\r\n\r\n  formulaItemsDesktop.forEach((item, index) => {\r\n    item.addEventListener('mouseover', (e) => {\r\n      if (e.target.closest(\".formula-item__icon\")){\r\n        item.classList.add('active-item');\r\n\r\n      } else {\r\n        item.classList.remove('active-item');\r\n      }\r\n    })\r\n  })\r\n\r\n  const showSlide= (elem, index) => {\r\n    elem[index].style.display = 'flex';\r\n    elem[index].classList.add('active-item');\r\n  }\r\n\r\n  const exposeOfSlide = (elem, index) => {\r\n    elem[index].style.display = 'none';\r\n    elem[index].classList.remove('active-item');\r\n  }\r\n\r\n  const hideSlides = () => {\r\n    for  (let i = 0; i < formulaItemsMobile.length; i++){\r\n      formulaItemsMobile[i].style.display = 'none'\r\n    }\r\n  }\r\n\r\n  if (document.documentElement.offsetWidth <= mobileVersionWidth){\r\n    hideSlides();\r\n    showSlide(formulaItemsMobile,activeItem);\r\n    navArrowLeft.addEventListener('click', () => {\r\n      exposeOfSlide(formulaItemsMobile, activeItem);\r\n      activeItem--;\r\n      console.log(activeItem);\r\n      if (activeItem < 0){\r\n        activeItem = formulaItemsMobile.length -1;\r\n      }\r\n      showSlide(formulaItemsMobile, activeItem)\r\n    })\r\n    navArrowRight.addEventListener('click', () => {\r\n      exposeOfSlide(formulaItemsMobile, activeItem);\r\n      console.log(activeItem);\r\n      activeItem++;\r\n      if (activeItem >= formulaItemsMobile.length){\r\n        activeItem = 0;\r\n      }\r\n      showSlide(formulaItemsMobile, activeItem)\r\n    })\r\n  }\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupAnnotation);\r\n\n\n//# sourceURL=webpack:///./modules/popupAnnotation.js?");

/***/ }),

/***/ "./modules/portfolio.js":
/*!******************************!*\
  !*** ./modules/portfolio.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst portfolio = () => {\n  const portfolioForm = document.querySelector('.portfolio');\n  const portfolioSlide = portfolioForm.querySelectorAll('.portfolio-slider__slide.fade-tab');\n  const arrowRight = document.getElementById('portfolio-arrow_right');\n  const arrowLeft = document.getElementById('portfolio-arrow_left');\n  const slidesList = portfolioForm.querySelectorAll('.portfolio-slider__slide-frame');\n  const portfolioPopup = document.querySelector('.popup-portfolio');\n  const sliderText = portfolioPopup.querySelectorAll('.popup-portfolio-text');\n  const SliderPicture = portfolioPopup.querySelectorAll('.popup-portfolio-slider__slide')\n  const contentCounterTotal = portfolioPopup.querySelector('.slider-counter-content__total');\n  const popupArrowLeft = portfolioPopup.querySelector('.popup-arrow.popup-arrow_left');\n  const popupArrowRight = portfolioPopup.querySelector('.popup-arrow.popup-arrow_right');\n\n  let contentCounterCurrent = portfolioPopup.querySelector('.slider-counter-content__current');\n  let currentlyShownSlides;\n  let activeSet = [];\n  let activePicture = 0;\n\n\n  contentCounterTotal.textContent = `${SliderPicture.length}`;\n\n  const hidePictures = (elem, indexes) => {\n    for (let i = 0; i < indexes; i++){\n      elem[i].style.display = 'none';\n    }\n  }\n  const showSlide = (elem, index) => {\n    elem[index].style.display = 'flex';\n  }\n\n  if (document.documentElement.offsetWidth < 1010){\n    currentlyShownSlides = 2;\n  } else if (document.documentElement.offsetWidth >= 1010) {\n    currentlyShownSlides = 3;\n  } else if (document.documentElement.offsetWidth < 560) {\n    currentlyShownSlides = 1;\n  }\n\n  const hideSlide = (elem, index) => {\n    elem[index].style.display = 'none';\n  }\n\n  for (let i = 0; i < portfolioSlide.length; i++){\n    hideSlide(portfolioSlide, i);\n  }\n  for (let i = 0; i < currentlyShownSlides; i++){\n    showSlide(portfolioSlide, i);\n  }\n\n\n  const getActiveSlidesSet = (slidesList) => {\n    activeSet = [];\n    for (let i = 0; i < slidesList.length; i++){\n      if(slidesList[i].style.display === 'flex'){\n        activeSet.push(i);\n      }\n    }\n  }\n\n  arrowRight.addEventListener('click', () => {\n\n    getActiveSlidesSet(portfolioSlide);\n\n    for (let i = 0; i < activeSet.length; i++){\n      hideSlide(portfolioSlide, activeSet[i]);\n    }\n\n    for (let i = 0; i < activeSet.length; i++){\n      activeSet[i] += 1;\n    }\n\n    if (activeSet[0] !== 0){\n      arrowLeft.style.display = 'flex';\n    }\n    if (activeSet[activeSet.length - 1] === portfolioSlide.length - 1){\n      arrowRight.style.display = 'none';\n    } else {\n      arrowRight.style.display = 'flex';\n    }\n\n    for (let i = 0; i < activeSet.length; i++){\n      showSlide(portfolioSlide, activeSet[i]);\n    }\n  })\n\n  arrowLeft.addEventListener('click', () => {\n\n    getActiveSlidesSet(portfolioSlide);\n\n    for (let i = 0; i < activeSet.length; i++){\n      hideSlide(portfolioSlide, activeSet[i]);\n    }\n\n    for (let i = 0; i < activeSet.length; i++){\n      activeSet[i] -= 1;\n    }\n\n    if (activeSet[activeSet.length - 1] !== portfolioSlide.length - 1){\n      arrowRight.style.display = 'flex';\n    }\n\n    if (activeSet[0] === 0){\n      arrowLeft.style.display = 'none';\n    } else {\n      arrowLeft.style.display = 'flex';\n    }\n\n    for (let i = 0; i < activeSet.length; i++){\n      showSlide(portfolioSlide, activeSet[i]);\n    }\n  })\n\n  slidesList.forEach((slide, index) => {\n    slide.addEventListener('click', (e) => {\n      portfolioPopup.style.visibility = 'visible';\n      hidePictures(sliderText, sliderText.length);\n      hidePictures(SliderPicture, sliderText.length);\n      showSlide(sliderText, index.toString().slice(-1));\n      showSlide(SliderPicture, index.toString().slice(-1));\n      activePicture = +index.toString().slice(-1);\n      contentCounterCurrent.textContent = `${activePicture + 1}`;\n    })\n  })\n\n  portfolioPopup.addEventListener('click', (e) => {\n    const close = portfolioPopup.querySelector('.close');\n    if(!e.target.closest('.popup-dialog')){\n      portfolioPopup.style.visibility = 'hidden';\n    }\n    if (e.target === close){\n      portfolioPopup.style.visibility = 'hidden';\n    }\n  })\n\n  popupArrowLeft.addEventListener('click', () => {\n    activePicture--\n    if (activePicture < 0){\n      activePicture = SliderPicture.length - 1;\n    }\n    hidePictures(sliderText, sliderText.length);\n    hidePictures(SliderPicture, sliderText.length);\n    showSlide(sliderText, activePicture);\n    showSlide(SliderPicture, activePicture);\n    contentCounterCurrent.textContent = `${activePicture + 1}`;\n  })\n\n  popupArrowRight.addEventListener('click', () => {\n    activePicture++\n    if (activePicture >= SliderPicture.length){\n      activePicture = 0;\n    }\n    hidePictures(sliderText, sliderText.length);\n    hidePictures(SliderPicture, sliderText.length);\n    showSlide(sliderText, activePicture);\n    showSlide(SliderPicture, activePicture);\n    contentCounterCurrent.textContent = `${activePicture + 1}`;\n  })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (portfolio);\n\n\n//# sourceURL=webpack:///./modules/portfolio.js?");

/***/ }),

/***/ "./modules/repairSlider.js":
/*!*********************************!*\
  !*** ./modules/repairSlider.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst repairSlider = () => {\r\n  const repairForm = document.querySelector('.repair-types');\r\n  const repairSlider = repairForm.querySelectorAll('.repair-types-slider>div');\r\n  const repairTab = repairForm.querySelectorAll('.nav-list.nav-list-repair>button');\r\n  const currentCounterSlide = repairForm.querySelector('.slider-counter-content__current');\r\n  const overallSlides = repairForm.querySelector('.slider-counter-content__total');\r\n  const sliderForm = repairForm.querySelector('.nav-list.nav-list-repair');\r\n  const sliderItems = repairForm.querySelectorAll('.button_o');\r\n  const navLeft = repairForm.querySelector('.nav-arrow.nav-arrow_left');\r\n  const navRight = repairForm.querySelector('.nav-arrow.nav-arrow_right');\r\n\r\n\r\n  const mobVersionWidth = 1024;\r\n  let currentSlide = 0;\r\n  let currentElem = 0;\r\n  let currentTranslate = 0;\r\n\r\n  let slides = repairSlider[currentElem].querySelectorAll('.repair-types-slider__slide');\r\n\r\n  const updateCounter = (index) => {\r\n    slides = repairSlider[index].querySelectorAll('.repair-types-slider__slide');\r\n\r\n    currentCounterSlide.textContent = `${currentSlide + 1}`;\r\n    overallSlides.textContent = `${slides.length}`;\r\n  }\r\n\r\n  repairForm.addEventListener('click', (e) => {\r\n    checkActiveButton(repairTab);\r\n    if(!e.target.classList.contains('active') && e.target.tagName === 'BUTTON'){\r\n      currentSlide = 0;\r\n      removeActive();\r\n      e.target.classList.add('active');\r\n      checkActiveButton(repairTab);\r\n      updateCounter(currentElem);\r\n      handleSlider(currentElem);\r\n    }\r\n\r\n    prevSlide(slides, currentSlide);\r\n    if(e.target.matches('#repair-types-arrow_left')){\r\n    currentSlide--;\r\n    currentCounterSlide.textContent = `${currentSlide + 1}`\r\n    } else if(e.target.matches('#repair-types-arrow_right')){\r\n      currentSlide++;\r\n      currentCounterSlide.textContent = `${currentSlide + 1}`\r\n    }\r\n\r\n    if(document.documentElement.offsetWidth < mobVersionWidth){\r\n      if (e.target.matches('.nav-arrow.nav-arrow_left')){\r\n        checkActiveButton(repairTab);\r\n        prevElem(repairTab, currentElem, 'active')\r\n        currentElem --;\r\n        if (currentElem < 0){\r\n          currentElem = 0;\r\n          navLeft.disabled = true\r\n        } else {\r\n          navLeft.disabled = false;\r\n        }\r\n        currentTranslate -= 18;\r\n        if (currentTranslate <= 0){\r\n          currentTranslate = 0;\r\n        }\r\n        sliderForm.style.transform = `translateX(-${+currentTranslate}%)`;\r\n        currentSlide = 0;\r\n        updateCounter(currentElem);\r\n        handleSlider(currentElem);\r\n        nextElem(repairTab, currentElem, 'active')\r\n      } else if (e.target.matches('.nav-arrow.nav-arrow_right')){\r\n        checkActiveButton(repairTab);\r\n        prevElem(repairTab, currentElem, 'active')\r\n        currentElem ++;\r\n        currentTranslate += 18;\r\n        if (currentTranslate >= 38){\r\n          currentTranslate = 38;\r\n        }\r\n        sliderForm.style.transform = `translateX(-${+currentTranslate}%)`\r\n        if (currentElem >= repairTab.length){\r\n          currentElem = repairTab.length - 1;\r\n          navRight.disabled = true;\r\n        } else {\r\n          navRight.disabled = false;\r\n        };\r\n        currentSlide = 0;\r\n        updateCounter(currentElem);\r\n        handleSlider(currentElem);\r\n        nextElem(repairTab, currentElem, 'active')\r\n      }\r\n    }\r\n\r\n    if(currentSlide >= slides.length){\r\n      currentSlide = 0;\r\n      currentCounterSlide.textContent = `${currentSlide + 1}`\r\n    }\r\n\r\n    if(currentSlide < 0){\r\n      currentSlide = slides.length - 1\r\n      currentCounterSlide.textContent = `${currentSlide + 1}`\r\n    }\r\n    nextSlide(slides, currentSlide);\r\n  })\r\n\r\n  const checkActiveButton = (itemList) => {\r\n    for (let i = 0; i < itemList.length; i++){\r\n      if (itemList[i].classList.contains('active')){\r\n        currentElem = i;\r\n      }\r\n    }\r\n  }\r\n\r\n const removeActive = () => {\r\n   repairTab.forEach(tab => {\r\n     if(tab.classList.contains('active')){\r\n       tab.classList.remove('active')\r\n     }\r\n   })\r\n }\r\n  const handleSlider = (index) => {\r\n    repairSlider.forEach(item => {\r\n      item.style.display = 'none';\r\n    })\r\n    repairSlider[index].style.display = 'block';\r\n\r\n  }\r\n\r\n  const prevElem = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  }\r\n  const nextElem = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass);\r\n  }\r\n\r\n  const prevSlide = (elems, index) => {\r\n    elems[index].style.display = 'none';\r\n  }\r\n  const nextSlide = (elems, index) => {\r\n    elems[index].style.display = 'block';\r\n  }\r\n\r\nupdateCounter(currentElem);\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (repairSlider);\r\n\n\n//# sourceURL=webpack:///./modules/repairSlider.js?");

/***/ }),

/***/ "./modules/reviews.js":
/*!****************************!*\
  !*** ./modules/reviews.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reviews = () => {\r\n\r\n  const reviewsForm = document.querySelector('.reviews');\r\n  const reviewsSlides = reviewsForm.querySelectorAll('.reviews-slider__slide');\r\n  const arrowRight = document.getElementById('reviews-arrow_right');\r\n  const arrowLeft = document.getElementById('reviews-arrow_left');\r\n\r\n  let activeSlide = 0;\r\n\r\n  const hideSlide = (elem, index) => {\r\n    elem[index].style.display = 'none';\r\n  }\r\n\r\n  const showSlide = (elem, index) => {\r\n    elem[index].style.display = 'flex';\r\n  }\r\n\r\n  arrowRight.addEventListener('click', () => {\r\n    hideSlide(reviewsSlides, activeSlide);\r\n    activeSlide++;\r\n    if(activeSlide >= reviewsSlides.length) {\r\n      activeSlide = 0;\r\n    }\r\n    showSlide(reviewsSlides, activeSlide);\r\n  })\r\n\r\n  arrowLeft.addEventListener('click', () => {\r\n    hideSlide(reviewsSlides, activeSlide);\r\n    activeSlide--;\r\n    if(activeSlide < reviewsSlides.length) {\r\n      activeSlide = reviewsSlides.length - 1;\r\n    }\r\n    showSlide(reviewsSlides, activeSlide);\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reviews);\r\n\n\n//# sourceURL=webpack:///./modules/reviews.js?");

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