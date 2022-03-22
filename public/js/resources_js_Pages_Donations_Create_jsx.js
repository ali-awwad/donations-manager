"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Donations_Create_jsx"],{

/***/ "./resources/js/Pages/Donations/Create.jsx":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Donations/Create.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Create)
/* harmony export */ });
/* harmony import */ var _Shared_AlertError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/AlertError */ "./resources/js/Shared/AlertError.jsx");
/* harmony import */ var _Shared_ComboBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/ComboBox */ "./resources/js/Shared/ComboBox.jsx");
/* harmony import */ var _Shared_FormCancelButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/FormCancelButton */ "./resources/js/Shared/FormCancelButton.jsx");
/* harmony import */ var _Shared_FormSubmitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/FormSubmitButton */ "./resources/js/Shared/FormSubmitButton.jsx");
/* harmony import */ var _Shared_SearchInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/SearchInput */ "./resources/js/Shared/SearchInput.jsx");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Donors_DonorsTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Donors/DonorsTable */ "./resources/js/Pages/Donors/DonorsTable.jsx");
/* harmony import */ var _FormSteps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormSteps */ "./resources/js/Pages/Donations/FormSteps.jsx");
/* harmony import */ var _SelectCampaignTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SelectCampaignTable */ "./resources/js/Pages/Donations/SelectCampaignTable.jsx");
/* harmony import */ var _SelectDonorTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SelectDonorTable */ "./resources/js/Pages/Donations/SelectDonorTable.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function Create() {
  var _useState11;

  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_6__.usePage)().props,
      errors = _usePage$props.errors,
      donors = _usePage$props.donors,
      campaigns = _usePage$props.campaigns,
      selected_campaign_id = _usePage$props.selected_campaign_id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      selectedCampaign = _useState2[0],
      setSelectedCampaign = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('init'),
      _useState4 = _slicedToArray(_useState3, 2),
      searchCampaign = _useState4[0],
      setSearchCampaign = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('init'),
      _useState6 = _slicedToArray(_useState5, 2),
      searchDonor = _useState6[0],
      setSearchDonor = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedDonor = _useState8[0],
      setSelectedDonor = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)((_useState11 = {
    donor_id: "",
    description: "",
    campaign_id: 0
  }, _defineProperty(_useState11, "donor_id", 0), _defineProperty(_useState11, "amount", null), _useState11)),
      _useState10 = _slicedToArray(_useState9, 2),
      values = _useState10[0],
      setValues = _useState10[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('01'),
      _useState13 = _slicedToArray(_useState12, 2),
      currentStep = _useState13[0],
      setCurrentStep = _useState13[1];

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (selected_campaign_id) {
      campaigns.data.filter(function (item) {
        if (item.id === parseInt(selected_campaign_id)) {
          setSelectedCampaign(item);
        }
      });
    }
  }, []); // todo add selected_campaign_id

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (selectedCampaign) {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        campaign_id: selectedCampaign
      }));
    }
  }, [selectedCampaign]);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (searchDonor == 'init') {
      setSearchDonor('');
    } else {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__.Inertia.reload({
        data: {
          donor_search: searchDonor
        },
        preserveState: true
      });
    }
  }, [searchDonor]);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (errors && (errors.description || errors.amount)) {
      setCurrentStep('01');
    } else if (errors && errors.donor_id) {
      setCurrentStep('02');
    } else if (errors && errors.campaign_id) {
      setCurrentStep('03');
    }
  }, [errors]);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (searchCampaign == 'init') {
      setSearchCampaign('');
    } else {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__.Inertia.reload({
        data: {
          campaign_search: searchCampaign
        },
        preserveState: true
      });
    }
  }, [searchCampaign]);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (selectedDonor) {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        donor_id: selectedDonor
      }));
    }
  }, [selectedDonor]);

  function handleChange(e) {
    var key = e.target.id;
    var value = e.target.value;
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, key, value));
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__.Inertia.post('/donations', values);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("form", {
    onSubmit: handleSubmit,
    className: "space-y-8 divide-y divide-gray-200",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h3", {
          className: "text-lg leading-6 font-medium text-gray-900",
          children: "Add new Donation"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
          className: "mt-1 text-sm text-gray-500",
          children: "Its great to make change and leave a good mark."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_FormSteps__WEBPACK_IMPORTED_MODULE_9__["default"], {
        currentStep: currentStep,
        setCurrentStep: setCurrentStep
      }), currentStep === '01' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: "sm:col-span-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("label", {
            htmlFor: "description",
            className: "block text-sm font-medium text-gray-700",
            children: "About"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
            className: "mt-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("textarea", {
              defaultValue: values.description,
              onChange: handleChange,
              id: "description",
              name: "description",
              rows: 3,
              className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
            className: "mt-2 text-sm text-gray-500",
            children: "Write a few sentences about this donation."
          }), errors.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
            className: "mt-2 text-sm text-red-500",
            children: errors.description
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: "sm:col-span-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("label", {
            htmlFor: "target",
            className: "block text-sm font-medium text-gray-700",
            children: "Amount (in cents or fils)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
            className: "mt-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input", {
              defaultValue: values.amount,
              onChange: handleChange,
              type: "number",
              placeholder: "1000 will be stored as 10.00",
              min: 0,
              name: "amount",
              id: "amount",
              autoComplete: "amount",
              className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            })
          }), errors.amount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
            className: "mt-2 text-sm text-red-500",
            children: errors.amount
          })]
        })]
      }), currentStep === '02' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "mt-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h1", {
          className: "text-xl font-semibold text-gray-900",
          children: "Select the donor"
        }), errors.donor_id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Shared_AlertError__WEBPACK_IMPORTED_MODULE_0__["default"], {
          message: errors.donor_id
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Shared_SearchInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
          setQuery: setSearchDonor,
          query: searchDonor
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: "h-2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_SelectDonorTable__WEBPACK_IMPORTED_MODULE_11__["default"], {
          donors: donors,
          setSelectedDonor: setSelectedDonor
        })]
      }), currentStep === '03' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "mt-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h1", {
          className: "text-xl font-semibold text-gray-900",
          children: "Select the Campaign"
        }), errors.campaign_id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Shared_AlertError__WEBPACK_IMPORTED_MODULE_0__["default"], {
          message: errors.campaign_id
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Shared_SearchInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
          setQuery: setSearchCampaign,
          query: searchCampaign
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: "h-2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_SelectCampaignTable__WEBPACK_IMPORTED_MODULE_10__["default"], {
          campaigns: campaigns,
          setSelectedCampaign: setSelectedCampaign
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
      className: "pt-5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "flex justify-end",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Shared_FormCancelButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          href: route('donations.index')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Shared_FormSubmitButton__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
      })
    })]
  });
}

/***/ }),

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

/***/ "./resources/js/Pages/Donations/SelectCampaignTable.jsx":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Donations/SelectCampaignTable.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectCampaignTable)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Pagination */ "./resources/js/Shared/Pagination.jsx");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/CheckIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function SelectCampaignTable(_ref) {
  var campaigns = _ref.campaigns,
      setSelectedCampaign = _ref.setSelectedCampaign;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "-mx-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
      className: "min-w-full divide-y divide-gray-300",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
        className: "bg-gray-50",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            scope: "col",
            className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
            children: "Name"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            scope: "col",
            className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
            children: "Target"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            scope: "col",
            className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
            children: "Collected"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            scope: "col",
            className: "relative py-3.5 pl-3 pr-4 sm:pr-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "sr-only",
              children: "Select"
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
        className: "divide-y divide-gray-200 bg-white",
        children: campaigns.data.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              className: "w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6",
              children: item.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
              className: "hidden px-3 py-4 text-sm text-gray-500 lg:table-cell",
              children: ["AED ", item.target]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
              className: "hidden px-3 py-4 text-sm text-gray-500 lg:table-cell",
              children: ["AED ", item.collected]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              className: "py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
                type: "button",
                onClick: function onClick() {
                  return setSelectedCampaign(item.id);
                },
                className: "btn btn-default",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  className: "btn-icon"
                }), "Select"]
              })
            })]
          }, index);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meta: campaigns.meta,
      links: campaigns.links
    })]
  });
}

/***/ }),

/***/ "./resources/js/Pages/Donations/SelectDonorTable.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Donations/SelectDonorTable.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectDonorTable)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Pagination */ "./resources/js/Shared/Pagination.jsx");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/CheckIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function SelectDonorTable(_ref) {
  var donors = _ref.donors,
      setSelectedDonor = _ref.setSelectedDonor;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "-mx-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
      className: "min-w-full divide-y divide-gray-300",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
        className: "bg-gray-50",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            scope: "col",
            className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
            children: "Name"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            scope: "col",
            className: "hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell",
            children: "Alias"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            scope: "col",
            className: "hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell",
            children: "Total Donations"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            scope: "col",
            className: "relative py-3.5 pl-3 pr-4 sm:pr-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "sr-only",
              children: "Select"
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
        className: "divide-y divide-gray-200 bg-white",
        children: donors.data.map(function (donor) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
              className: "w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6",
              children: [donor.name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("dl", {
                className: "font-normal lg:hidden",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
                  className: "sr-only",
                  children: "Title"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dd", {
                  className: "mt-1 truncate text-gray-700",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                    href: route('donors.show', donor.id),
                    className: "text-blue-400 hover:text-blue-600",
                    children: donor.name
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
                  className: "sr-only sm:hidden",
                  children: "Alias"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dd", {
                  className: "mt-1 truncate text-gray-500 sm:hidden",
                  children: donor.alias
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              className: "hidden px-3 py-4 text-sm text-gray-500 sm:table-cell",
              children: donor.alias
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
              className: "hidden px-3 py-4 text-sm text-gray-500 sm:table-cell",
              children: ["AED ", donor.total_donations]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              className: "py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
                type: "button",
                onClick: function onClick() {
                  return setSelectedDonor(donor.id);
                },
                className: "btn btn-default",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  className: "btn-icon"
                }), "Select"]
              })
            })]
          }, donor.name);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meta: donors.meta,
      links: donors.links
    })]
  });
}

/***/ }),

/***/ "./resources/js/Pages/Donors/DonorsTable.jsx":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Donors/DonorsTable.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DonorsTable)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Pagination */ "./resources/js/Shared/Pagination.jsx");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/LinkIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/PencilIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/TrashIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function DonorsTable(_ref) {
  var donors = _ref.donors;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
      className: "min-w-full divide-y divide-gray-300",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
        className: "bg-gray-50",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            scope: "col",
            className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
            children: "Name"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            scope: "col",
            className: "hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell",
            children: "Alias"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            scope: "col",
            className: "hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell",
            children: "Total Donations"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            scope: "col",
            className: "hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell",
            children: "# of donations"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            scope: "col",
            className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
            children: "# of campaigns participated in"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            scope: "col",
            className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
            children: "# of categories participated in"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            scope: "col",
            className: "relative py-3.5 pl-3 pr-4 sm:pr-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "sr-only",
              children: "Edit"
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
        className: "divide-y divide-gray-200 bg-white",
        children: donors.data.map(function (donor) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
              className: "w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                href: route('donors.show', donor.id),
                className: "text-blue-400 hover:text-blue-600",
                children: donor.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("dl", {
                className: "font-normal lg:hidden",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
                  className: "sr-only",
                  children: "Title"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dd", {
                  className: "mt-1 truncate text-gray-700",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                    href: route('donors.show', donor.id),
                    className: "text-blue-400 hover:text-blue-600",
                    children: donor.name
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
                  className: "sr-only sm:hidden",
                  children: "Alias"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dd", {
                  className: "mt-1 truncate text-gray-500 sm:hidden",
                  children: donor.alias
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              className: "hidden px-3 py-4 text-sm text-gray-500 sm:table-cell",
              children: donor.alias
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
              className: "hidden px-3 py-4 text-sm text-gray-500 sm:table-cell",
              children: ["AED ", donor.total_donations]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              className: "hidden px-3 py-4 text-sm text-gray-500 lg:table-cell",
              children: donor.donations_count
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              className: "px-3 py-4 text-sm text-gray-500",
              children: donor.campaigns_count
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              className: "px-3 py-4 text-sm text-gray-500",
              children: donor.categories_count
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
              className: "py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                href: route('donors.show', donor.id),
                className: "btn btn-indigo mr-1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  className: "btn-icon",
                  "aria-hidden": "true"
                }), "View", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  className: "sr-only",
                  children: [", ", donor.name]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                href: route('donors.edit', donor.id),
                className: "btn btn-indigo mr-1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  className: "btn-icon",
                  "aria-hidden": "true"
                }), "Edit", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  className: "sr-only",
                  children: [", ", donor.name]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                as: "button",
                method: "DELETE",
                href: route('donors.destroy', donor.id),
                className: "btn btn-danger",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  className: "btn-icon",
                  "aria-hidden": "true"
                }), "Delete", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  className: "sr-only",
                  children: [", ", donor.name]
                })]
              })]
            })]
          }, donor.name);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Shared_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meta: donors.meta,
      links: donors.links
    })]
  });
}

/***/ }),

/***/ "./resources/js/Shared/ComboBox.jsx":
/*!******************************************!*\
  !*** ./resources/js/Shared/ComboBox.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyComboBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/SelectorIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/CheckIcon.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function MyComboBox(_ref) {
  var items = _ref.items,
      label = _ref.label,
      selectedItem = _ref.selectedItem,
      setSelectedItem = _ref.setSelectedItem;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var filteredItems = query === '' ? items : items.filter(function (item) {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Combobox, {
    as: "div",
    value: selectedItem,
    onChange: setSelectedItem,
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Combobox.Label, {
      className: "block text-sm font-medium text-gray-700",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "relative mt-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Combobox.Input, {
        autoComplete: "off",
        className: "w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm",
        onChange: function onChange(event) {
          return setQuery(event.target.value);
        },
        displayValue: function displayValue(item) {
          return item.name;
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Combobox.Button, {
        className: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "h-5 w-5 text-gray-400",
          "aria-hidden": "true"
        })
      }), filteredItems.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Combobox.Options, {
        className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
        children: filteredItems.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Combobox.Option, {
            value: item,
            className: function className(_ref2) {
              var active = _ref2.active;
              return classNames('relative cursor-default select-none py-2 pl-8 pr-4', active ? 'bg-indigo-600 text-white' : 'text-gray-900');
            },
            children: function children(_ref3) {
              var active = _ref3.active,
                  selected = _ref3.selected;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: classNames('block truncate', selected && 'font-semibold'),
                  children: item.name
                }), selected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: classNames('absolute inset-y-0 left-0 flex items-center pl-1.5', active ? 'text-white' : 'text-indigo-600'),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    className: "h-5 w-5",
                    "aria-hidden": "true"
                  })
                })]
              });
            }
          }, item.id);
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Shared/FormCancelButton.jsx":
/*!**************************************************!*\
  !*** ./resources/js/Shared/FormCancelButton.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormCancelButton)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function FormCancelButton(_ref) {
  var href = _ref.href;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
    href: href,
    className: "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    children: "Cancel"
  });
}

/***/ }),

/***/ "./resources/js/Shared/FormSubmitButton.jsx":
/*!**************************************************!*\
  !*** ./resources/js/Shared/FormSubmitButton.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormSubmitButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function FormSubmitButton() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    type: "submit",
    className: "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    children: "Save"
  });
}

/***/ }),

/***/ "./resources/js/Shared/Pagination.jsx":
/*!********************************************!*\
  !*** ./resources/js/Shared/Pagination.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/ChevronLeftIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/ChevronRightIcon.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function Pagination(_ref) {
  var meta = _ref.meta,
      links = _ref.links;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex-1 flex justify-between sm:hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
        preserveScroll: true,
        preserveState: true,
        href: links.prev,
        className: "relative inline-flex items-center px-2 py-2 rounded-l-md border ".concat(links.prev ? 'bg-white border-gray-300' : 'bg-gray-50 border-gray-100', " text-sm font-medium text-gray-500 hover:bg-gray-50"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "sr-only",
          children: "Previous"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "h-5 w-5",
          "aria-hidden": "true"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
        preserveScroll: true,
        preserveState: true,
        href: links.next,
        className: "relative inline-flex items-center px-2 py-2 rounded-r-md border ".concat(links.next ? 'bg-white border-gray-300' : 'bg-gray-50 border-gray-100', " text-sm font-medium text-gray-500 hover:bg-gray-50"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "sr-only",
          children: "Next"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "h-5 w-5",
          "aria-hidden": "true"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
          className: "text-sm text-gray-700",
          children: ["Showing ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "font-medium",
            children: meta.from
          }), " to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "font-medium",
            children: meta.to
          }), " of", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "font-medium",
            children: meta.total
          }), " results"]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
          className: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
          "aria-label": "Pagination",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
            preserveScroll: true,
            preserveState: true,
            href: links.prev,
            className: "relative inline-flex items-center px-2 py-2 rounded-l-md border ".concat(links.prev ? 'bg-white border-gray-300' : 'bg-gray-50 border-gray-100', " text-sm font-medium text-gray-500 hover:bg-gray-50"),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "sr-only",
              children: "Previous"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__["default"], {
              className: "h-5 w-5",
              "aria-hidden": "true"
            })]
          }), meta.links.map(function (item, index) {
            return !isNaN(item.label) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              preserveScroll: true,
              preserveState: true,
              href: item.url,
              className: "relative inline-flex items-center px-4 py-2 border text-sm font-medium\n                            ".concat(item.active ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50', "\n                             ").concat(parseInt(item.label) > 2 && parseInt(item.label) < meta.last_page - 2 && meta.current_page !== parseInt(item.label) ? 'hidden xl:inline-flex' : '', "\n                                    "),
              children: item.label
            }, item.label) : item.label === '...' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700",
              children: "..."
            }, index + item.label) : null;
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
            preserveScroll: true,
            preserveState: true,
            href: links.next,
            className: "relative inline-flex items-center px-2 py-2 rounded-r-md border ".concat(links.next ? 'bg-white border-gray-300' : 'bg-gray-50 border-gray-100', " text-sm font-medium text-gray-500 hover:bg-gray-50"),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "sr-only",
              children: "Next"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: "h-5 w-5",
              "aria-hidden": "true"
            })]
          })]
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Shared/SearchInput.jsx":
/*!*********************************************!*\
  !*** ./resources/js/Shared/SearchInput.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchInput)
/* harmony export */ });
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/SearchIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function SearchInput(_ref) {
  var query = _ref.query,
      setQuery = _ref.setQuery;

  function handleChange(event) {
    setQuery(event.target.value);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "mt-1 relative rounded-md shadow-sm",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "h-5 w-5 text-gray-400",
          "aria-hidden": "true"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        type: "search",
        name: "search",
        autoComplete: "off",
        value: query,
        onChange: handleChange,
        id: "search",
        className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md",
        placeholder: "Search"
      })]
    })
  });
}

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CheckIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CheckIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CheckIcon(props, svgRef) {
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
    d: "M5 13l4 4L19 7"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/LinkIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/LinkIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function LinkIcon(props, svgRef) {
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
    d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(LinkIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PencilIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PencilIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PencilIcon(props, svgRef) {
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
    d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PencilIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/SearchIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SearchIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SearchIcon(props, svgRef) {
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
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SearchIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/TrashIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TrashIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TrashIcon(props, svgRef) {
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
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(TrashIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

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

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronLeftIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronLeftIcon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronLeftIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronLeftIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronRightIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronRightIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronRightIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronRightIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/SelectorIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/SelectorIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SelectorIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SelectorIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);