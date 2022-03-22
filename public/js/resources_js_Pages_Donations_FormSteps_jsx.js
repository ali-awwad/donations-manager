"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Donations_FormSteps_jsx"],{

/***/ "./resources/js/Pages/Donations/FormSteps.jsx":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Donations/FormSteps.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormSteps)
/* harmony export */ });
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/CheckIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* This example requires Tailwind CSS v2.0+ */






function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function FormSteps(_ref) {
  var currentStep = _ref.currentStep,
      setCurrentStep = _ref.setCurrentStep;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    id: '01',
    name: 'Define',
    description: 'Enter basic information',
    href: '#',
    status: 'current'
  }, {
    id: '02',
    name: 'Assign Donor',
    description: 'Choose the donor of this donation.',
    href: '#',
    status: 'upcoming'
  }, {
    id: '03',
    name: 'Assign Campaign',
    description: 'Which campaing this donation is part of.',
    href: '#',
    status: 'upcoming'
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      steps = _useState2[0],
      setSteps = _useState2[1];

  function changeStep(id) {
    var updatedSteps = steps.map(function (step) {
      if (step.id === id) {
        step.status = 'current';
      } else if (parseInt(step.id) < parseInt(id)) {
        step.status = 'complete';
      } else if (parseInt(step.id) > parseInt(id)) {
        step.status = 'upcoming';
      }

      return step;
    });
    setSteps(updatedSteps);
    setCurrentStep(id);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var updatedSteps = steps.map(function (step) {
      if (step.id === currentStep) {
        step.status = 'current';
      } else if (parseInt(step.id) < parseInt(currentStep)) {
        step.status = 'complete';
      } else if (parseInt(step.id) > parseInt(currentStep)) {
        step.status = 'upcoming';
      }

      return step;
    });
    setSteps(updatedSteps);
  }, [currentStep]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "bg-white lg:border-t lg:border-b lg:border-gray-200",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("nav", {
      className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
      "aria-label": "Progress",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ol", {
        role: "list",
        className: "rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none",
        children: steps.map(function (step, stepIdx) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            onClick: function onClick() {
              return changeStep(step.id);
            },
            className: "relative overflow-hidden lg:flex-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: classNames(stepIdx === 0 ? 'border-b-0 rounded-t-md' : '', stepIdx === steps.length - 1 ? 'border-t-0 rounded-b-md' : '', 'border border-gray-200 overflow-hidden lg:border-0'),
              children: [step.status === 'complete' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: step.href,
                className: "group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto",
                  "aria-hidden": "true"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                  className: classNames(stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-start text-sm font-medium'),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      className: "w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        className: "w-6 h-6 text-white",
                        "aria-hidden": "true"
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                    className: "mt-0.5 ml-4 min-w-0 flex flex-col",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      className: "text-xs font-semibold tracking-wide uppercase",
                      children: step.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      className: "text-sm font-medium text-gray-500",
                      children: step.description
                    })]
                  })]
                })]
              }) : step.status === 'current' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: step.href,
                "aria-current": "step",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "absolute top-0 left-0 w-1 h-full bg-indigo-600 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto",
                  "aria-hidden": "true"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                  className: classNames(stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-start text-sm font-medium'),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      className: "w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                        className: "text-indigo-600",
                        children: step.id
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                    className: "mt-0.5 ml-4 min-w-0 flex flex-col",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      className: "text-xs font-semibold text-indigo-600 tracking-wide uppercase",
                      children: step.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      className: "text-sm font-medium text-gray-500",
                      children: step.description
                    })]
                  })]
                })]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: step.href,
                className: "group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto",
                  "aria-hidden": "true"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                  className: classNames(stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-start text-sm font-medium'),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      className: "w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                        className: "text-gray-500",
                        children: step.id
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                    className: "mt-0.5 ml-4 min-w-0 flex flex-col",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      className: "text-xs font-semibold text-gray-500 tracking-wide uppercase",
                      children: step.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      className: "text-sm font-medium text-gray-500",
                      children: step.description
                    })]
                  })]
                })]
              }), stepIdx !== 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "hidden absolute top-0 left-0 w-3 inset-0 lg:block",
                  "aria-hidden": "true",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "h-full w-full text-gray-300",
                    viewBox: "0 0 12 82",
                    fill: "none",
                    preserveAspectRatio: "none",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                      d: "M0.5 0V31L10.5 41L0.5 51V82",
                      stroke: "currentcolor",
                      vectorEffect: "non-scaling-stroke"
                    })
                  })
                })
              }) : null]
            })
          }, step.id);
        })
      })
    })
  });
}

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/CheckIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/CheckIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CheckIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);