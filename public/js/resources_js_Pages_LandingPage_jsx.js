"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_LandingPage_jsx"],{

/***/ "./resources/js/Components/LandingComponents/Button.jsx":
/*!**************************************************************!*\
  !*** ./resources/js/Components/LandingComponents/Button.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "ButtonLink": () => (/* binding */ ButtonLink)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["variant", "color", "className"],
    _excluded2 = ["variant", "color", "href", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var baseStyles = {
  solid: 'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline: 'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none'
};
var variantStyles = {
  solid: {
    slate: 'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white: 'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white'
  },
  outline: {
    slate: 'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white: 'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white'
  }
};
function Button(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'solid' : _ref$variant,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'slate' : _ref$color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", _objectSpread({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(baseStyles[variant], variantStyles[variant][color], className)
  }, props));
}
function ButtonLink(_ref2) {
  var _ref2$variant = _ref2.variant,
      variant = _ref2$variant === void 0 ? 'solid' : _ref2$variant,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? 'slate' : _ref2$color,
      href = _ref2.href,
      className = _ref2.className,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, _objectSpread({
    href: href,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(baseStyles[variant], variantStyles[variant][color], className)
  }, props));
}

/***/ }),

/***/ "./resources/js/Components/LandingComponents/CallToAction.jsx":
/*!********************************************************************!*\
  !*** ./resources/js/Components/LandingComponents/CallToAction.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallToAction": () => (/* binding */ CallToAction)
/* harmony export */ });
/* harmony import */ var _Components_LandingComponents_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/LandingComponents/Button */ "./resources/js/Components/LandingComponents/Button.jsx");
/* harmony import */ var _Components_LandingComponents_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/LandingComponents/Container */ "./resources/js/Components/LandingComponents/Container.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// import Image from 'next/image'





function CallToAction() {
  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)().props,
      appTitle = _usePage$props.appTitle,
      backgroundImage = _usePage$props.backgroundImage;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
    id: "get-started-today",
    className: "relative overflow-hidden bg-blue-600 py-32",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      src: backgroundImage,
      alt: "",
      width: 2347,
      height: 1244,
      className: "absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Components_LandingComponents_Container__WEBPACK_IMPORTED_MODULE_1__.Container, {
      className: "relative",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mx-auto max-w-lg text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          className: "font-display text-3xl tracking-tight text-white sm:text-4xl",
          children: "Get started today"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          className: "mt-4 text-lg tracking-tight text-white",
          children: [appTitle, " is totally free to use."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Components_LandingComponents_Button__WEBPACK_IMPORTED_MODULE_0__.ButtonLink, {
          href: "/register",
          color: "white",
          className: "mt-10",
          children: "Register Now"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Components/LandingComponents/Container.jsx":
/*!*****************************************************************!*\
  !*** ./resources/js/Components/LandingComponents/Container.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Container(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", _objectSpread({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)
  }, props));
}

/***/ }),

/***/ "./resources/js/Components/LandingComponents/Faqs.jsx":
/*!************************************************************!*\
  !*** ./resources/js/Components/LandingComponents/Faqs.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Faqs": () => (/* binding */ Faqs)
/* harmony export */ });
/* harmony import */ var _Components_LandingComponents_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/LandingComponents/Container */ "./resources/js/Components/LandingComponents/Container.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// import Image from 'next/image'




var faqs = [[{
  question: 'Does TaxPal handle VAT?',
  answer: 'Well no, but if you move your company offshore you can probably ignore it.'
}, {
  question: 'Can I pay for my subscription via purchase order?',
  answer: 'Absolutely, we are happy to take your money in all forms.'
}, {
  question: 'How do I apply for a job at TaxPal?',
  answer: 'We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.'
}], [{
  question: 'What was that testimonial about tax fraud all about?',
  answer: 'TaxPal is just a software application, ultimately your books are your responsibility.'
}, {
  question: 'TaxPal sounds horrible but why do I still feel compelled to purchase?',
  answer: 'This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.'
}, {
  question: 'I found other companies called TaxPal, are you sure you can use this name?',
  answer: 'Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.'
}], [{
  question: 'How do you generate reports?',
  answer: 'You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.'
}, {
  question: 'Can we expect more inventory features?',
  answer: 'In life it’s really better to never expect anything at all.'
}, {
  question: 'I lost my password, how do I get into my account?',
  answer: 'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.'
}]];
function Faqs() {
  var backgroundFaqImage = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.backgroundFaqImage;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    id: "faq",
    "aria-labelledby": "faq-title",
    className: "relative overflow-hidden bg-slate-50 py-20 sm:py-32",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
      id: "faq-title",
      className: "sr-only",
      children: "Frequently asked questions"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
      src: backgroundFaqImage,
      alt: "",
      width: 1558,
      height: 946,
      className: "absolute top-0 left-1/2 -translate-x-[30%] -translate-y-[25%]"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Components_LandingComponents_Container__WEBPACK_IMPORTED_MODULE_0__.Container, {
      className: "relative",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "mx-auto max-w-2xl lg:mx-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "font-display text-3xl tracking-tight text-slate-900 sm:text-4xl",
          children: "Frequently asked questions"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "mt-4 text-lg tracking-tight text-slate-700",
          children: "If you can\u2019t find what you\u2019re looking for, email our support team and if you\u2019re lucky someone will get back to you."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
        className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3",
        children: faqs.map(function (column, columnIndex) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
              className: "space-y-8",
              children: column.map(function (faq, faqIndex) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                    className: "font-display text-lg leading-7 text-slate-900",
                    children: faq.question
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                    className: "mt-4 text-sm text-slate-700",
                    children: faq.answer
                  })]
                }, faqIndex);
              })
            })
          }, columnIndex);
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Components/LandingComponents/Footer.jsx":
/*!**************************************************************!*\
  !*** ./resources/js/Components/LandingComponents/Footer.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _Components_LandingComponents_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/LandingComponents/Container */ "./resources/js/Components/LandingComponents/Container.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function Footer() {
  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.usePage)().props,
      logo = _usePage$props.logo,
      appTitle = _usePage$props.appTitle;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("footer", {
    className: "bg-slate-50",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Components_LandingComponents_Container__WEBPACK_IMPORTED_MODULE_1__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "py-16",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          src: logo,
          className: "mx-auto h-10 w-auto"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("nav", {
          className: "mt-10 text-sm",
          "aria-label": "quick links",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
            className: "-my-1 flex justify-center space-x-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                href: "#features",
                className: "rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                children: "Features"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                href: "#secondary-features",
                className: "rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                children: "How it Works"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                href: "/register",
                className: "rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                children: "Register"
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "flex space-x-6"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
          className: "mt-6 text-sm text-slate-500 sm:mt-0",
          children: ["Copyright \xA9 ", new Date().getFullYear(), " ", appTitle, ". All rights reserved."]
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Components/LandingComponents/Header.jsx":
/*!**************************************************************!*\
  !*** ./resources/js/Components/LandingComponents/Header.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/popover/popover.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Components_LandingComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/LandingComponents/Button */ "./resources/js/Components/LandingComponents/Button.jsx");
/* harmony import */ var _Components_LandingComponents_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/LandingComponents/Container */ "./resources/js/Components/LandingComponents/Container.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










function MobileNavigation() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Popover, {
    children: function children(_ref) {
      var open = _ref.open,
          close = _ref.close;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Popover.Button, {
          className: "relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "sr-only",
            children: "Toggle Navigation"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("svg", {
            "aria-hidden": "true",
            className: "h-3.5 w-3.5 overflow-visible stroke-slate-700",
            fill: "none",
            strokeWidth: 2,
            strokeLinecap: "round",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
              d: "M0 1H14M0 7H14M0 13H14",
              className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('origin-center transition', {
                'scale-90 opacity-0': open
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
              d: "M2 2L12 12M12 2L2 12",
              className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])('origin-center transition', {
                'scale-90 opacity-0': !open
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Transition.Root, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Transition.Child, {
            as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            enter: "duration-150 ease-out",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "duration-150 ease-in",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Popover.Overlay, {
              className: "fixed inset-0 bg-slate-300/50"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Transition.Child, {
            as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            enter: "duration-150 ease-out",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "duration-100 ease-in",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Popover.Panel, {
              as: "ul",
              className: "absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                  href: "#features",
                  className: "block w-full",
                  onClick: function onClick() {
                    return close();
                  },
                  children: "Features"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                  href: "#secondary-features",
                  className: "block w-full",
                  onClick: function onClick() {
                    return close();
                  },
                  children: "How it Works"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
                className: "border-t border-slate-300/40 pt-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                  href: "/login",
                  className: "block w-full",
                  children: "Sign in"
                })
              })]
            })
          })]
        })]
      });
    }
  });
}

function Header() {
  var logo = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.logo;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("header", {
    className: "py-10",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_LandingComponents_Container__WEBPACK_IMPORTED_MODULE_4__.Container, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("nav", {
        className: "relative z-50 text-sm",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
          className: "flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              href: "#",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "sr-only",
                children: "Home"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                className: "h-10 w-auto",
                src: logo
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
            className: "ml-12 hidden md:block",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
              href: "#features",
              className: "rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900",
              children: "Features"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
            className: "ml-6 hidden md:block",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              href: "#secondary-features",
              className: "rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900",
              children: "How it Works"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
            className: "ml-auto hidden md:block",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              href: "/login",
              className: "rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900",
              children: "Sign in"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
            className: "ml-auto md:ml-8",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_LandingComponents_Button__WEBPACK_IMPORTED_MODULE_3__.ButtonLink, {
              href: "/register",
              color: "blue",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                children: ["Get started", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "hidden lg:inline",
                  children: " today"
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
            className: "ml-5 -mr-1 md:hidden",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MobileNavigation, {})
          })]
        })
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Components/LandingComponents/Hero.jsx":
/*!************************************************************!*\
  !*** ./resources/js/Components/LandingComponents/Hero.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hero": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var _Components_LandingComponents_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/LandingComponents/Button */ "./resources/js/Components/LandingComponents/Button.jsx");
/* harmony import */ var _Components_LandingComponents_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/LandingComponents/Container */ "./resources/js/Components/LandingComponents/Container.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function Hero() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Components_LandingComponents_Container__WEBPACK_IMPORTED_MODULE_1__.Container, {
    className: "pt-20 pb-16 text-center lg:pt-32",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h1", {
      className: "mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl",
      children: ["Donation Management", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
        className: "relative whitespace-nowrap text-blue-600",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
          "aria-hidden": "true",
          viewBox: "0 0 418 42",
          className: "absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70",
          preserveAspectRatio: "none",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
            d: "M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "relative",
          children: "made simple"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      className: "mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700",
      children: "Most donation managements out there are accurate, but hard to use. We make the opposite trade-off, and hope you don\u2019t get audited."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "mt-10 flex justify-center space-x-6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Components_LandingComponents_Button__WEBPACK_IMPORTED_MODULE_0__.ButtonLink, {
        href: "/register",
        children: "Get started"
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Components/LandingComponents/Pricing.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/Components/LandingComponents/Pricing.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pricing": () => (/* binding */ Pricing)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Components_LandingComponents_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/LandingComponents/Button */ "./resources/js/Components/LandingComponents/Button.jsx");
/* harmony import */ var _Components_LandingComponents_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/LandingComponents/Container */ "./resources/js/Components/LandingComponents/Container.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function Plan(_ref) {
  var name = _ref.name,
      price = _ref.price,
      description = _ref.description,
      href = _ref.href,
      features = _ref.features,
      _ref$featured = _ref.featured,
      featured = _ref$featured === void 0 ? false : _ref$featured;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('flex flex-col rounded-3xl px-6 sm:px-8', {
      'order-first bg-blue-600 py-8 lg:order-none': featured,
      'lg:py-8': !featured
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
      className: "mt-5 font-display text-lg text-white",
      children: name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('mt-2 text-base', {
        'text-white': featured,
        'text-slate-400': !featured
      }),
      children: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: "order-first font-display text-5xl font-light tracking-tight text-white",
      children: price
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('order-last mt-10 space-y-3 text-sm', {
        'text-white': featured,
        'text-slate-200': !featured
      }),
      children: features.map(function (feature) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
          className: "flex",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
            "aria-hidden": "true",
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('h-6 w-6 flex-none', {
              'fill-white stroke-white': featured,
              'fill-slate-400 stroke-slate-400': !featured
            }),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
              d: "M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z",
              strokeWidth: 0
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle", {
              cx: 12,
              cy: 12,
              r: 8.25,
              fill: "none",
              strokeWidth: 1.5,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "ml-4",
            children: feature
          })]
        }, feature);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Components_LandingComponents_Button__WEBPACK_IMPORTED_MODULE_1__.ButtonLink, {
      href: href,
      variant: featured ? 'solid' : 'outline',
      color: "white",
      className: "mt-8",
      "aria-label": "Get started with ".concat(name, " plan for ").concat(price),
      children: "Get started"
    })]
  });
}

function Pricing() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
    id: "pricing",
    "aria-labelledby": "pricing-title",
    className: "bg-slate-900 py-20 sm:py-32",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
      id: "pricing-title",
      className: "sr-only",
      children: "Pricing"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Components_LandingComponents_Container__WEBPACK_IMPORTED_MODULE_2__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "md:text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          className: "font-display text-3xl tracking-tight text-white sm:text-4xl",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "relative whitespace-nowrap",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
              "aria-hidden": "true",
              viewBox: "0 0 281 40",
              className: "absolute top-1/2 left-0 h-[1em] w-full fill-blue-400",
              preserveAspectRatio: "none",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "relative",
              children: "Simple pricing,"
            })]
          }), ' ', "for everyone."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mt-4 text-lg text-slate-400",
          children: "It doesn\u2019t matter what size your business is, our software won\u2019t work well for you."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Plan, {
          name: "Starter",
          price: "$9",
          description: "Good for anyone who is self-employed and just getting started.",
          href: "/register",
          features: ['Send 10 quotes and invoices', 'Connect up to 2 bank accounts', 'Track up to 15 expenses per month', 'Manual payroll support', 'Export up to 3 reports']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Plan, {
          featured: true,
          name: "Small business",
          price: "$15",
          description: "Perfect for small / medium sized businesses.",
          href: "/register",
          features: ['Send 25 quotes and invoices', 'Connect up to 5 bank accounts', 'Track up to 50 expenses per month', 'Automated payroll support', 'Export up to 12 reports', 'Bulk reconcile transactions', 'Track in multiple currencies']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Plan, {
          name: "Enterprise",
          price: "$39",
          description: "For even the biggest enterpise companies.",
          href: "/register",
          features: ['Send unlimited quotes and invoices', 'Connect up to 15 bank accounts', 'Track up to 200 expenses per month', 'Automated payroll support', 'Export up to 25 reports, including TPS']
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Components/LandingComponents/PrimaryFeatures.jsx":
/*!***********************************************************************!*\
  !*** ./resources/js/Components/LandingComponents/PrimaryFeatures.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimaryFeatures": () => (/* binding */ PrimaryFeatures)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/tabs/tabs.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Container */ "./resources/js/Components/LandingComponents/Container.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // import Image from 'next/image'








function PrimaryFeatures() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('horizontal'),
      _useState2 = _slicedToArray(_useState, 2),
      tabOrientation = _useState2[0],
      setTabOrientation = _useState2[1];

  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)().props,
      backgroundFeaturesImage = _usePage$props.backgroundFeaturesImage,
      screenshotHome = _usePage$props.screenshotHome,
      screenshotUsers = _usePage$props.screenshotUsers,
      screenshotDonations = _usePage$props.screenshotDonations,
      screenshotCharts = _usePage$props.screenshotCharts;
  var features = [{
    title: 'Charts',
    description: "Get highlevel view for everyone donations across your multiple campaigns and categories.",
    image: screenshotCharts
  }, {
    title: 'Users',
    description: "Add as many users as you want, each one can login, and if you want you can ask others to join your team by providing them the Group Key.",
    image: screenshotUsers
  }, {
    title: 'Donations',
    description: "See all the donations you've made and track each one and its contribution to given campaign.",
    image: screenshotDonations
  }, {
    title: 'Quick Actions',
    description: 'From your dashboard, easliy create the campaigns, categories, and donor accounts.',
    image: screenshotHome
  }];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    function onMediaQueryChange(_ref) {
      var matches = _ref.matches;
      setTabOrientation(matches ? 'vertical' : 'horizontal');
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);
    return function () {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
    id: "features",
    "aria-labelledby": "features-title",
    className: "relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
      src: backgroundFeaturesImage,
      alt: "",
      width: 2245,
      height: 1636,
      className: "absolute top-1/2 left-1/2 -translate-x-[44%] -translate-y-[42%]"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Container__WEBPACK_IMPORTED_MODULE_3__.Container, {
      className: "relative",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-2xl md:mx-auto md:text-center xl:max-w-none",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          id: "features-title",
          className: "font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl",
          children: "Everything you need to run donation campaigns."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "mt-6 text-lg tracking-tight text-blue-100",
          children: "Grouping by Category, ordering by value, checking which campaigns needs your attention and more."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.Group, {
        as: "div",
        className: "mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0",
        vertical: tabOrientation === 'vertical',
        children: function children(_ref2) {
          var selectedIndex = _ref2.selectedIndex;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.List, {
                className: "relative z-10 flex space-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:space-y-1 lg:space-x-0 lg:whitespace-normal",
                children: features.map(function (feature, featureIndex) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6', {
                      'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10': selectedIndex === featureIndex,
                      'hover:bg-white/10 lg:hover:bg-white/5': selectedIndex !== featureIndex
                    }),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab, {
                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('font-display text-lg [&:not(:focus-visible)]:focus:outline-none', {
                          'text-blue-600 lg:text-white': selectedIndex === featureIndex,
                          'text-blue-100 hover:text-white lg:text-white': selectedIndex !== featureIndex
                        }),
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                          className: "absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl"
                        }), feature.title]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('mt-2 hidden text-sm lg:block', {
                        'text-white': selectedIndex === featureIndex,
                        'text-blue-100 group-hover:text-white': selectedIndex !== featureIndex
                      }),
                      children: feature.description
                    })]
                  }, feature.title);
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.Panels, {
              className: "lg:col-span-7",
              children: features.map(function (feature) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Tab.Panel, {
                  unmount: false,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "relative sm:px-6 lg:hidden",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "absolute -inset-x-4 -top-[6.5rem] -bottom-[4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "relative mx-auto max-w-2xl text-base text-white sm:text-center",
                      children: feature.description
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "relative mt-10 aspect-[1085/730] w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                      src: feature.image,
                      alt: "",
                      layout: "fill",
                      sizes: "(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                    })
                  })]
                }, feature.title);
              })
            })]
          });
        }
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Components/LandingComponents/SecondaryFeatures.jsx":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/LandingComponents/SecondaryFeatures.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecondaryFeatures": () => (/* binding */ SecondaryFeatures)
/* harmony export */ });
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/tabs/tabs.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Components_LandingComponents_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/LandingComponents/Container */ "./resources/js/Components/LandingComponents/Container.jsx");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/TagIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/CakeIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/PencilAltIcon.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["feature", "isActive", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// import { useId } from 'react'
// import Image from 'next/image'









function Feature(_ref) {
  var feature = _ref.feature,
      isActive = _ref.isActive,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", _objectSpread(_objectSpread({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(className, {
      'opacity-75 hover:opacity-100': !isActive
    })
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('w-9 rounded-lg', {
        'bg-blue-600': isActive,
        'bg-slate-500': !isActive
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
        "aria-hidden": "true",
        className: "h-9 w-9",
        fill: "none",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(feature.icon, {
          className: "stroke-current text-white"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('mt-6 text-sm font-medium', {
        'text-blue-600': isActive,
        'text-slate-600': !isActive
      }),
      children: feature.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: "mt-2 font-display text-xl text-slate-900",
      children: feature.summary
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: "mt-4 text-sm text-slate-600",
      children: feature.description
    })]
  }));
}

function FeaturesMobile() {
  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)().props,
      screenshotCreate = _usePage$props.screenshotCreate,
      screenshotDonations = _usePage$props.screenshotDonations,
      screenshotCampaigns = _usePage$props.screenshotCampaigns;
  var features = [{
    name: 'Categories & Campaigns',
    summary: 'Organize your donations using campaigns.',
    description: 'Have as many Campaigns as needed, you can ditribute them across different Categories.',
    image: screenshotCampaigns,
    icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    name: 'Donors & Donations',
    summary: 'Never lose track of your donations.',
    description: 'Simple management tool that enables you to filter through your donations by donor name, category name ..., and even sort them by different fields.',
    image: screenshotDonations,
    icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, {
    name: 'Easy to Start',
    summary: 'Easily start your donations using simple form.',
    description: 'Our form creation tool helps you add donations easily once you have your category, campaign, and donor names set.',
    image: screenshotCreate,
    icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["default"]
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "-mx-4 mt-20 space-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden",
    children: features.map(function (feature) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Feature, {
          feature: feature,
          className: "mx-auto max-w-2xl",
          isActive: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "relative mt-10 pb-10",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
            src: feature.image,
            alt: "",
            layout: "fill",
            className: "relative mx-auto aspect-[844/428] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10",
            sizes: "52.75rem"
          })]
        })]
      }, feature.name);
    })
  });
}

function FeaturesDesktop() {
  var _usePage$props2 = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)().props,
      screenshotCreate = _usePage$props2.screenshotCreate,
      screenshotDonations = _usePage$props2.screenshotDonations,
      screenshotCampaigns = _usePage$props2.screenshotCampaigns;
  var features = [{
    name: 'Categories & Campaigns',
    summary: 'Organize your donations using campaigns.',
    description: 'Have as many Campaigns as needed, you can ditribute them across different Categories.',
    image: screenshotCampaigns,
    icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    name: 'Donors & Donations',
    summary: 'Never lose track of your donations.',
    description: 'Simple management tool that enables you to filter through your donations by donor name, category name ..., and even sort them by different fields.',
    image: screenshotDonations,
    icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, {
    name: 'Easy to Start',
    summary: 'Easily start your donations using simple form.',
    description: 'Our form creation tool helps you add donations easily once you have your category, campaign, and donor names set.',
    image: screenshotCreate,
    icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["default"]
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Tab.Group, {
    as: "div",
    className: "hidden lg:mt-20 lg:block",
    children: function children(_ref2) {
      var selectedIndex = _ref2.selectedIndex;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Tab.List, {
          className: "grid grid-cols-3 gap-x-8",
          children: features.map(function (feature, featureIndex) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Feature, {
              feature: _objectSpread(_objectSpread({}, feature), {}, {
                name: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Tab, {
                  className: "[&:not(:focus-visible)]:focus:outline-none",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "absolute inset-0"
                  }), feature.name]
                })
              }),
              isActive: featureIndex === selectedIndex,
              className: "relative"
            }, feature.name);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Tab.Panels, {
          className: "relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "-mx-5 flex",
            children: features.map(function (feature, featureIndex) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Tab.Panel, {
                "static": true,
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none', {
                  'opacity-60': featureIndex !== selectedIndex
                }),
                style: {
                  transform: "translateX(-".concat(selectedIndex * 100, "%)")
                },
                "aria-hidden": featureIndex !== selectedIndex,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "relative aspect-[844/428] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                    src: feature.image,
                    alt: "",
                    layout: "fill",
                    sizes: "52.75rem"
                  })
                })
              }, feature.name);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10"
          })]
        })]
      });
    }
  });
}

function SecondaryFeatures() {
  var appTitle = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)().props.appTitle;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
    id: "secondary-features",
    "aria-labelledby": "secondary-features-title",
    className: "pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Components_LandingComponents_Container__WEBPACK_IMPORTED_MODULE_1__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mx-auto max-w-2xl md:text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          id: "secondary-features-title",
          className: "font-display text-3xl tracking-tight text-slate-900 sm:text-4xl",
          children: "Simplify Donation's Process."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          className: "mt-4 text-lg tracking-tight text-slate-700",
          children: ["Instead of having a tool that has everything to do with donations, with this ", appTitle, " tool we focus only on few most used pages."]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(FeaturesMobile, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(FeaturesDesktop, {})]
    })
  });
}

/***/ }),

/***/ "./resources/js/Components/LandingComponents/Testimonials.jsx":
/*!********************************************************************!*\
  !*** ./resources/js/Components/LandingComponents/Testimonials.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Testimonials": () => (/* binding */ Testimonials)
/* harmony export */ });
/* harmony import */ var _Components_LandingComponents_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/LandingComponents/Container */ "./resources/js/Components/LandingComponents/Container.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// import Image from 'next/image'




function Testimonials() {
  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props,
      avatarImage1 = _usePage$props.avatarImage1,
      avatarImage2 = _usePage$props.avatarImage2,
      avatarImage3 = _usePage$props.avatarImage3,
      avatarImage4 = _usePage$props.avatarImage4,
      avatarImage5 = _usePage$props.avatarImage5;
  var testimonials = [[{
    content: 'TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.',
    author: {
      name: 'Sheryl Berge',
      role: 'CEO at Lynch LLC',
      image: avatarImage1
    }
  }, {
    content: 'I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.',
    author: {
      name: 'Amy Hahn',
      role: 'Director at Velocity Industries',
      image: avatarImage4
    }
  }], [{
    content: 'The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.',
    author: {
      name: 'Leland Kiehn',
      role: 'Founder of Kiehn and Sons',
      image: avatarImage5
    }
  }, {
    content: 'There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.',
    author: {
      name: 'Erin Powlowski',
      role: 'COO at Armstrong Inc',
      image: avatarImage2
    }
  }], [{
    content: 'I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.',
    author: {
      name: 'Peter Renolds',
      role: 'Founder of West Inc',
      image: avatarImage3
    }
  }, {
    content: 'This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.',
    author: {
      name: 'Amy Hahn',
      role: 'Director at Velocity Industries',
      image: avatarImage4
    }
  }]];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
    id: "testimonials",
    "aria-labelledby": "testimonials-title",
    className: "bg-slate-50 py-20 sm:py-32",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Components_LandingComponents_Container__WEBPACK_IMPORTED_MODULE_0__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "mx-auto max-w-2xl md:text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          id: "testimonials-title",
          className: "font-display text-3xl tracking-tight text-slate-900 sm:text-4xl",
          children: "Loved by businesses worldwide."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "mt-4 text-lg tracking-tight text-slate-700",
          children: "Our software is so simple that people can\u2019t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
        className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3",
        children: testimonials.map(function (column, columnIndex) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
              className: "space-y-6 sm:space-y-8",
              children: column.map(function (testimonial, testimonialIndex) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("figure", {
                    className: "relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
                      "aria-hidden": "true",
                      width: 105,
                      height: 78,
                      className: "absolute top-6 left-6 fill-slate-100",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                        d: "M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("blockquote", {
                      className: "relative",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                        className: "text-lg tracking-tight text-slate-900",
                        children: testimonial.content
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("figcaption", {
                      className: "relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                          className: "font-display text-base text-slate-900",
                          children: testimonial.author.name
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                          className: "mt-1 text-sm text-slate-500",
                          children: testimonial.author.role
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                        className: "h-14 w-14 overflow-hidden rounded-full bg-slate-50",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                          src: testimonial.author.image,
                          alt: ""
                        })
                      })]
                    })]
                  })
                }, testimonialIndex);
              })
            })
          }, columnIndex);
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Pages/LandingPage.jsx":
/*!********************************************!*\
  !*** ./resources/js/Pages/LandingPage.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LandingPage)
/* harmony export */ });
/* harmony import */ var _Components_LandingComponents_CallToAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/LandingComponents/CallToAction */ "./resources/js/Components/LandingComponents/CallToAction.jsx");
/* harmony import */ var _Components_LandingComponents_Faqs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/LandingComponents/Faqs */ "./resources/js/Components/LandingComponents/Faqs.jsx");
/* harmony import */ var _Components_LandingComponents_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/LandingComponents/Footer */ "./resources/js/Components/LandingComponents/Footer.jsx");
/* harmony import */ var _Components_LandingComponents_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/LandingComponents/Header */ "./resources/js/Components/LandingComponents/Header.jsx");
/* harmony import */ var _Components_LandingComponents_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/LandingComponents/Hero */ "./resources/js/Components/LandingComponents/Hero.jsx");
/* harmony import */ var _Components_LandingComponents_Pricing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/LandingComponents/Pricing */ "./resources/js/Components/LandingComponents/Pricing.jsx");
/* harmony import */ var _Components_LandingComponents_PrimaryFeatures__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/LandingComponents/PrimaryFeatures */ "./resources/js/Components/LandingComponents/PrimaryFeatures.jsx");
/* harmony import */ var _Components_LandingComponents_SecondaryFeatures__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/LandingComponents/SecondaryFeatures */ "./resources/js/Components/LandingComponents/SecondaryFeatures.jsx");
/* harmony import */ var _Components_LandingComponents_Testimonials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Components/LandingComponents/Testimonials */ "./resources/js/Components/LandingComponents/Testimonials.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













function LandingPage() {
  var appTitle = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_9__.usePage)().props.appTitle;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_9__.Head, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("title", {
        children: appTitle
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("meta", {
        name: "description",
        content: "".concat(appTitle, " is a tool that helps you and your team to\n                    see the contributions you've made on the long term.")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Components_LandingComponents_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("main", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Components_LandingComponents_Hero__WEBPACK_IMPORTED_MODULE_4__.Hero, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Components_LandingComponents_PrimaryFeatures__WEBPACK_IMPORTED_MODULE_6__.PrimaryFeatures, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Components_LandingComponents_SecondaryFeatures__WEBPACK_IMPORTED_MODULE_7__.SecondaryFeatures, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Components_LandingComponents_CallToAction__WEBPACK_IMPORTED_MODULE_0__.CallToAction, {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Components_LandingComponents_Footer__WEBPACK_IMPORTED_MODULE_2__.Footer, {})]
  });
}

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clsx": () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/popover/popover.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/popover/popover.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popover": () => (/* binding */ Tt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-outside-click.js */ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-event-listener.js */ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-tab-direction.js */ "./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js");
var Ae=(c=>(c[c.Open=0]="Open",c[c.Closed=1]="Closed",c))(Ae||{}),Ce=(n=>(n[n.TogglePopover=0]="TogglePopover",n[n.ClosePopover=1]="ClosePopover",n[n.SetButton=2]="SetButton",n[n.SetButtonId=3]="SetButtonId",n[n.SetPanel=4]="SetPanel",n[n.SetPanelId=5]="SetPanelId",n))(Ce||{});let Re={[0]:r=>({...r,popoverState:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(r.popoverState,{[0]:1,[1]:0})}),[1](r){return r.popoverState===1?r:{...r,popoverState:1}},[2](r,t){return r.button===t.button?r:{...r,button:t.button}},[3](r,t){return r.buttonId===t.buttonId?r:{...r,buttonId:t.buttonId}},[4](r,t){return r.panel===t.panel?r:{...r,panel:t.panel}},[5](r,t){return r.panelId===t.panelId?r:{...r,panelId:t.panelId}}},ee=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);ee.displayName="PopoverContext";function J(r){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ee);if(t===null){let c=new Error(`<${r} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,J),c}return t}let te=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);te.displayName="PopoverAPIContext";function oe(r){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(te);if(t===null){let c=new Error(`<${r} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,oe),c}return t}let re=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);re.displayName="PopoverGroupContext";function ce(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(re)}let ne=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);ne.displayName="PopoverPanelContext";function Oe(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ne)}function Le(r,t){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(t.type,Re,r,t)}let Fe="div",Ie=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,c){var R;let o=`headlessui-popover-button-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,d=`headlessui-popover-panel-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),n=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(c,(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.optionalRef)(e=>{a.current=e})),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Le,{popoverState:1,button:null,buttonId:o,panel:null,panelId:d,beforePanelSentinel:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),afterPanelSentinel:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)()}),[{popoverState:m,button:l,panel:v,beforePanelSentinel:p,afterPanelSentinel:B},s]=g,T=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_5__.useOwnerDocument)((R=a.current)!=null?R:l);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>s({type:3,buttonId:o}),[o,s]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>s({type:5,panelId:d}),[d,s]);let f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{if(!l||!v)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(e==null?void 0:e.contains(l))^Number(e==null?void 0:e.contains(v)))return!0;return!1},[l,v]),P=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({buttonId:o,panelId:d,close:()=>s({type:1})}),[o,d,s]),y=ce(),A=y==null?void 0:y.registerPopover,L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>{var e;return(e=y==null?void 0:y.isFocusWithinPopoverGroup())!=null?e:(T==null?void 0:T.activeElement)&&((l==null?void 0:l.contains(T.activeElement))||(v==null?void 0:v.contains(T.activeElement)))});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>A==null?void 0:A(P),[A,P]),(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_7__.useEventListener)(T==null?void 0:T.defaultView,"focus",e=>{var i,S,O,N;m===0&&(L()||!l||!v||(S=(i=p.current)==null?void 0:i.contains)!=null&&S.call(i,e.target)||(N=(O=B.current)==null?void 0:O.contains)!=null&&N.call(O,e.target)||s({type:1}))},!0),(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_8__.useOutsideClick)([l,v],(e,i)=>{s({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_9__.isFocusableElement)(i,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_9__.FocusableMode.Loose)||(e.preventDefault(),l==null||l.focus())},m===0);let F=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(e=>{s({type:1});let i=(()=>e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:l:l)();i==null||i.focus()}),D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({close:F,isPortalled:f}),[F,f]),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:m===0,close:F}),[m,F]),E=t,C={ref:n};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ee.Provider,{value:g},react__WEBPACK_IMPORTED_MODULE_0__.createElement(te.Provider,{value:D},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(m,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:C,theirProps:E,slot:u,defaultTag:Fe,name:"Popover"}))))}),Me="button",Be=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,c){let[o,d]=J("Popover.Button"),{isPortalled:a}=oe("Popover.Button"),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),g=`headlessui-focus-sentinel-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,m=ce(),l=m==null?void 0:m.closeOthers,v=Oe(),p=v===null?!1:v===o.panelId,B=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(n,c,p?null:e=>d({type:2,button:e})),s=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(n,c),T=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_5__.useOwnerDocument)(n),f=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(e=>{var i,S,O;if(p){if(o.popoverState===1)return;switch(e.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Enter:e.preventDefault(),(S=(i=e.target).click)==null||S.call(i),d({type:1}),(O=o.button)==null||O.focus();break}}else switch(e.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Enter:e.preventDefault(),e.stopPropagation(),o.popoverState===1&&(l==null||l(o.buttonId)),d({type:0});break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Escape:if(o.popoverState!==0)return l==null?void 0:l(o.buttonId);if(!n.current||(T==null?void 0:T.activeElement)&&!n.current.contains(T.activeElement))return;e.preventDefault(),e.stopPropagation(),d({type:1});break}}),P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(e=>{p||e.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space&&e.preventDefault()}),y=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(e=>{var i,S;(0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_12__.isDisabledReactIssue7711)(e.currentTarget)||t.disabled||(p?(d({type:1}),(i=o.button)==null||i.focus()):(e.preventDefault(),e.stopPropagation(),o.popoverState===1&&(l==null||l(o.buttonId)),d({type:0}),(S=o.button)==null||S.focus()))}),A=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(e=>{e.preventDefault(),e.stopPropagation()}),L=o.popoverState===0,F=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:L}),[L]),D=(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_13__.useResolveButtonType)(t,n),u=t,E=p?{ref:s,type:D,onKeyDown:f,onClick:y}:{ref:B,id:o.buttonId,type:D,"aria-expanded":t.disabled?void 0:o.popoverState===0,"aria-controls":o.panel?o.panelId:void 0,onKeyDown:f,onKeyUp:P,onClick:y,onMouseDown:A},C=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__.useTabDirection)(),R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>{let e=o.panel;if(!e)return;function i(){(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(C.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__.Direction.Forwards]:()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_9__.focusIn)(e,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_9__.Focus.First),[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__.Direction.Backwards]:()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_9__.focusIn)(e,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Last)})}i()});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:E,theirProps:u,slot:F,defaultTag:Me,name:"Popover.Button"}),L&&!p&&a&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_15__.Hidden,{id:g,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_15__.Features.Focusable,as:"button",type:"button",onFocus:R}))}),he="div",De=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.Static,xe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,c){let[{popoverState:o},d]=J("Popover.Overlay"),a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(c),n=`headlessui-popover-overlay-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,g=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.useOpenClosed)(),m=(()=>g!==null?g===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open:o===0)(),l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(s=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_12__.isDisabledReactIssue7711)(s.currentTarget))return s.preventDefault();d({type:1})}),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o===0}),[o]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{ref:a,id:n,"aria-hidden":!0,onClick:l},theirProps:t,slot:v,defaultTag:he,features:De,visible:m,name:"Popover.Overlay"})}),He="div",Ge=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.Static,ke=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,c){let{focus:o=!1,...d}=t,[a,n]=J("Popover.Panel"),{close:g,isPortalled:m}=oe("Popover.Panel"),l=`headlessui-focus-sentinel-before-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,v=`headlessui-focus-sentinel-after-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),B=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(p,c,u=>{n({type:4,panel:u})}),s=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_5__.useOwnerDocument)(p),T=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.useOpenClosed)(),f=(()=>T!==null?T===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open:a.popoverState===0)(),P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(u=>{var E;switch(u.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Escape:if(a.popoverState!==0||!p.current||(s==null?void 0:s.activeElement)&&!p.current.contains(s.activeElement))return;u.preventDefault(),u.stopPropagation(),n({type:1}),(E=a.button)==null||E.focus();break}});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var u;t.static||a.popoverState===1&&((u=t.unmount)!=null?u:!0)&&n({type:4,panel:null})},[a.popoverState,t.unmount,t.static,n]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!o||a.popoverState!==0||!p.current)return;let u=s==null?void 0:s.activeElement;p.current.contains(u)||(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_9__.focusIn)(p.current,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_9__.Focus.First)},[o,p,a.popoverState]);let y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:a.popoverState===0,close:g}),[a,g]),A={ref:B,id:a.panelId,onKeyDown:P,onBlur:o&&a.popoverState===0?u=>{var C,R,e,i,S;let E=u.relatedTarget;!E||!p.current||(C=p.current)!=null&&C.contains(E)||(n({type:1}),(((e=(R=a.beforePanelSentinel.current)==null?void 0:R.contains)==null?void 0:e.call(R,E))||((S=(i=a.afterPanelSentinel.current)==null?void 0:i.contains)==null?void 0:S.call(i,E)))&&E.focus({preventScroll:!0}))}:void 0,tabIndex:-1},L=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__.useTabDirection)(),F=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>{let u=p.current;if(!u)return;function E(){(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(L.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__.Direction.Forwards]:()=>{(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_9__.focusIn)(u,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_9__.Focus.First)},[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__.Direction.Backwards]:()=>{var C;(C=a.button)==null||C.focus({preventScroll:!0})}})}E()}),D=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>{let u=p.current;if(!u)return;function E(){(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(L.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__.Direction.Forwards]:()=>{var O,N,le;if(!a.button)return;let C=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_9__.getFocusableElements)(),R=C.indexOf(a.button),e=C.slice(0,R+1),S=[...C.slice(R+1),...e];for(let K of S.slice())if(((N=(O=K==null?void 0:K.id)==null?void 0:O.startsWith)==null?void 0:N.call(O,"headlessui-focus-sentinel-"))||((le=a.panel)==null?void 0:le.contains(K))){let ae=S.indexOf(K);ae!==-1&&S.splice(ae,1)}(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_9__.focusIn)(S,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_9__.Focus.First,!1)},[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_14__.Direction.Backwards]:()=>(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_9__.focusIn)(u,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_9__.Focus.Last)})}E()});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ne.Provider,{value:a.panelId},f&&m&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_15__.Hidden,{id:l,ref:a.beforePanelSentinel,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_15__.Features.Focusable,as:"button",type:"button",onFocus:F}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:A,theirProps:d,slot:y,defaultTag:He,features:Ge,visible:f,name:"Popover.Panel"}),f&&m&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_15__.Hidden,{id:v,ref:a.afterPanelSentinel,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_15__.Features.Focusable,as:"button",type:"button",onFocus:D}))}),_e="div",we=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,c){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),d=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(o,c),[a,n]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(f=>{n(P=>{let y=P.indexOf(f);if(y!==-1){let A=P.slice();return A.splice(y,1),A}return P})}),m=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(f=>(n(P=>[...P,f]),()=>g(f))),l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>{var y;let f=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_16__.getOwnerDocument)(o);if(!f)return!1;let P=f.activeElement;return(y=o.current)!=null&&y.contains(P)?!0:a.some(A=>{var L,F;return((L=f.getElementById(A.buttonId))==null?void 0:L.contains(P))||((F=f.getElementById(A.panelId))==null?void 0:F.contains(P))})}),v=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(f=>{for(let P of a)P.buttonId!==f&&P.close()}),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({registerPopover:m,unregisterPopover:g,isFocusWithinPopoverGroup:l,closeOthers:v}),[m,g,l,v]),B=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({}),[]),s=t,T={ref:d};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(re.Provider,{value:p},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:T,theirProps:s,slot:B,defaultTag:_e,name:"Popover.Group"}))}),Tt=Object.assign(Ie,{Button:Be,Overlay:xe,Panel:ke,Group:we});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/tabs/tabs.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/tabs/tabs.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab": () => (/* binding */ we)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _components_keyboard_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _internal_focus_sentinel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../internal/focus-sentinel.js */ "./node_modules/@headlessui/react/dist/internal/focus-sentinel.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
var re=(n=>(n[n.SetSelectedIndex=0]="SetSelectedIndex",n[n.RegisterTab=1]="RegisterTab",n[n.UnregisterTab=2]="UnregisterTab",n[n.RegisterPanel=3]="RegisterPanel",n[n.UnregisterPanel=4]="UnregisterPanel",n[n.ForceRerender=5]="ForceRerender",n))(re||{});let ne={[0](e,t){let r=e.tabs.filter(n=>{var l;return!((l=n.current)!=null&&l.hasAttribute("disabled"))});if(t.index<0)return{...e,selectedIndex:e.tabs.indexOf(r[0])};if(t.index>e.tabs.length)return{...e,selectedIndex:e.tabs.indexOf(r[r.length-1])};let s=e.tabs.slice(0,t.index),d=[...e.tabs.slice(t.index),...s].find(n=>r.includes(n));return d?{...e,selectedIndex:e.tabs.indexOf(d)}:e},[1](e,t){return e.tabs.includes(t.tab)?e:{...e,tabs:(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.sortByDomNode)([...e.tabs,t.tab],r=>r.current)}},[2](e,t){return{...e,tabs:(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.sortByDomNode)(e.tabs.filter(r=>r!==t.tab),r=>r.current)}},[3](e,t){return e.panels.includes(t.panel)?e:{...e,panels:[...e.panels,t.panel]}},[4](e,t){return{...e,panels:e.panels.filter(r=>r!==t.panel)}},[5](e){return{...e}}},N=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);N.displayName="TabsSSRContext";function B(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(N);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,B),r}return t}let K=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);K.displayName="TabsDataContext";function C(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(K);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,C),r}return t}let $=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);$.displayName="TabsActionsContext";function z(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,z),r}return t}function ae(e,t){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(t.type,ne,e,t)}let le=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,oe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(function(t,r){let{defaultIndex:s=0,vertical:f=!1,manual:d=!1,onChange:n,selectedIndex:l=null,...P}=t;const u=f?"vertical":"horizontal",y=d?"manual":"auto";let c=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(r),[p,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(ae,{selectedIndex:l!=null?l:s,tabs:[],panels:[]}),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selectedIndex:p.selectedIndex}),[p.selectedIndex]),g=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_5__.useLatestValue)(n||(()=>{})),L=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_5__.useLatestValue)(p.tabs),x=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({orientation:u,activation:y,...p}),[u,y,p]),R=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_5__.useLatestValue)(p.selectedIndex),h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({registerTab(i){return o({type:1,tab:i}),()=>o({type:2,tab:i})},registerPanel(i){return o({type:3,panel:i}),()=>o({type:4,panel:i})},forceRerender(){o({type:5})},change(i){R.current!==i&&g.current(i),R.current=i,o({type:0,index:i})}}),[o]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>{o({type:0,index:l!=null?l:s})},[l]);let H=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({tabs:[],panels:[]}),w={ref:c};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(N.Provider,{value:H},react__WEBPACK_IMPORTED_MODULE_0__.createElement($.Provider,{value:h},react__WEBPACK_IMPORTED_MODULE_0__.createElement(K.Provider,{value:x},x.tabs.length<=0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_focus_sentinel_js__WEBPACK_IMPORTED_MODULE_7__.FocusSentinel,{onFocus:()=>{var i,I;for(let D of L.current)if(((i=D.current)==null?void 0:i.tabIndex)===0)return(I=D.current)==null||I.focus(),!0;return!1}}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:w,theirProps:P,slot:b,defaultTag:le,name:"Tabs"}))))}),se="div",ie=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(function(t,r){let{orientation:s,selectedIndex:f}=C("Tab.List"),d=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(r);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:{ref:d,role:"tablist","aria-orientation":s},theirProps:t,slot:{selectedIndex:f},defaultTag:se,name:"Tabs.List"})}),ue="button",ce=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(function(t,r){var I,D;let s=`headlessui-tabs-tab-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_8__.useId)()}`,{orientation:f,activation:d,selectedIndex:n,tabs:l,panels:P}=C("Tab"),u=z("Tab"),y=B("Tab"),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),p=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(c,r,a=>{!a||u.forceRerender()});(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>u.registerTab(c),[u,c]);let o=y.current.tabs.indexOf(s);o===-1&&(o=y.current.tabs.push(s)-1);let b=l.indexOf(c);b===-1&&(b=o);let g=b===n,L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_9__.useEvent)(a=>{let A=l.map(X=>X.current).filter(Boolean);if(a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_10__.Keys.Space||a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_10__.Keys.Enter){a.preventDefault(),a.stopPropagation(),u.change(b);return}switch(a.key){case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_10__.Keys.Home:case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_10__.Keys.PageUp:return a.preventDefault(),a.stopPropagation(),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(A,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.First);case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_10__.Keys.End:case _components_keyboard_js__WEBPACK_IMPORTED_MODULE_10__.Keys.PageDown:return a.preventDefault(),a.stopPropagation(),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(A,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Last)}if((0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(f,{vertical(){if(a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_10__.Keys.ArrowUp)return (0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(A,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Previous|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.WrapAround);if(a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_10__.Keys.ArrowDown)return (0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(A,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Next|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.WrapAround)},horizontal(){if(a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_10__.Keys.ArrowLeft)return (0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(A,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Previous|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.WrapAround);if(a.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_10__.Keys.ArrowRight)return (0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusIn)(A,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Next|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.WrapAround)}}))return a.preventDefault()}),x=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_9__.useEvent)(()=>{var a;(a=c.current)==null||a.focus()}),R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_9__.useEvent)(()=>{var a;(a=c.current)==null||a.focus(),u.change(b)}),h=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_9__.useEvent)(a=>{a.preventDefault()}),H=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selected:g}),[g]),w=t,i={ref:p,onKeyDown:L,onFocus:d==="manual"?x:R,onMouseDown:h,onClick:R,id:s,role:"tab",type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_11__.useResolveButtonType)(t,c),"aria-controls":(D=(I=P[b])==null?void 0:I.current)==null?void 0:D.id,"aria-selected":g,tabIndex:g?0:-1};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:i,theirProps:w,slot:H,defaultTag:ue,name:"Tabs.Tab"})}),pe="div",de=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(function(t,r){let{selectedIndex:s}=C("Tab.Panels"),f=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(r),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selectedIndex:s}),[s]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:{ref:f},theirProps:t,slot:d,defaultTag:pe,name:"Tabs.Panels"})}),fe="div",be=_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.Features.Static,Te=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(function(t,r){var x,R;let{selectedIndex:s,tabs:f,panels:d}=C("Tab.Panel"),n=z("Tab.Panel"),l=B("Tab.Panel"),P=`headlessui-tabs-panel-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_8__.useId)()}`,u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),y=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(u,r,h=>{!h||n.forceRerender()});(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>n.registerPanel(u),[n,u]);let c=l.current.panels.indexOf(P);c===-1&&(c=l.current.panels.push(P)-1);let p=d.indexOf(u);p===-1&&(p=c);let o=p===s,b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({selected:o}),[o]),g=t,L={ref:y,id:P,role:"tabpanel","aria-labelledby":(R=(x=f[p])==null?void 0:x.current)==null?void 0:R.id,tabIndex:o?0:-1};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:L,theirProps:g,slot:b,defaultTag:fe,features:be,visible:o,name:"Tabs.Panel"})}),we=Object.assign(ce,{Group:oe,List:ie,Panels:de,Panel:Te});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useResolveButtonType": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function i(t){var n;if(t.type)return t.type;let e=(n=t.as)!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return"button"}function s(t,e){let[n,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>i(t));return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{u(i(t))},[t.type,t.as]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{n||!e.current||e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")},[n,e]),n}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/focus-sentinel.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/focus-sentinel.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusSentinel": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _hidden_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
function p({onFocus:n}){let[r,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0);return r?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_hidden_js__WEBPACK_IMPORTED_MODULE_1__.Hidden,{as:"button",type:"button",features:_hidden_js__WEBPACK_IMPORTED_MODULE_1__.Features.Focusable,onFocus:a=>{a.preventDefault();let e,u=50;function t(){if(u--<=0){e&&cancelAnimationFrame(e);return}if(n()){o(!1),cancelAnimationFrame(e);return}e=requestAnimationFrame(t)}e=requestAnimationFrame(t)}}):null}


/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CakeIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CakeIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CakeIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CakeIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PencilAltIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PencilAltIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PencilAltIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PencilAltIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);