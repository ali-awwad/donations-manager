"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Users_Index_jsx"],{

/***/ "./resources/js/Pages/Users/Index.jsx":
/*!********************************************!*\
  !*** ./resources/js/Pages/Users/Index.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Users)
/* harmony export */ });
/* harmony import */ var _Shared_Errors_Forbidden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Errors/Forbidden */ "./resources/js/Shared/Errors/Forbidden.jsx");
/* harmony import */ var _Shared_Table_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Table/Table */ "./resources/js/Shared/Table/Table.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Users() {
  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)().props,
      count = _usePage$props.count,
      can = _usePage$props.can;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedItems = _useState2[0],
      setSelectedItems = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "sm:flex sm:items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "sm:flex-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
          className: "text-xl font-semibold text-gray-900",
          children: "Users"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "mt-2 text-sm text-gray-700",
          children: "A list of all the users in your account including their name, title, email and role."
        })]
      }), can.create && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "mt-4 sm:mt-0 sm:ml-16 sm:flex-none",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
          href: route('users.create'),
          className: "inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto",
          children: "Add user"
        })
      })]
    }), can.viewAny ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [count > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Shared_Table_Table__WEBPACK_IMPORTED_MODULE_1__["default"], {
        baseRoute: "users",
        selectedItems: selectedItems,
        setSelectedItems: setSelectedItems
      }), count === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(EmptyIndex, {
        signular: "user",
        plural: "users",
        routeName: "users.create"
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Shared_Errors_Forbidden__WEBPACK_IMPORTED_MODULE_0__["default"], {})]
  });
}

/***/ }),

/***/ "./resources/js/Shared/Errors/Forbidden.jsx":
/*!**************************************************!*\
  !*** ./resources/js/Shared/Errors/Forbidden.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Forbidden)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



function Forbidden() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "max-w-max mx-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
          className: "sm:flex",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            className: "text-4xl font-extrabold text-primary-600 sm:text-5xl",
            children: "403"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "sm:ml-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "sm:border-l sm:border-gray-200 sm:pl-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                className: "text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl",
                children: "Not Authorized"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                className: "mt-1 text-base text-gray-500",
                children: "Please if this is a mistake contact our team."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                href: "#",
                className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ezone-secondary",
                children: "Go back home"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                href: "#",
                className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-800 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ezone-secondary",
                children: "Contact support"
              })]
            })]
          })]
        })
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Shared/Table/Actions.jsx":
/*!***********************************************!*\
  !*** ./resources/js/Shared/Table/Actions.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Actions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/SelectorIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/CheckIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/RefreshIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/PaperAirplaneIcon.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

function Actions(_ref) {
  var actions = _ref.actions,
      selectedItems = _ref.selectedItems,
      setSelectedItems = _ref.setSelectedItems,
      setFetchingData = _ref.setFetchingData,
      _ref$routeParams = _ref.routeParams,
      routeParams = _ref$routeParams === void 0 ? [] : _ref$routeParams;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: 'none',
    method: '',
    route: '',
    text: '-- Select Action --'
  }),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      newActions = _useState4[0],
      setNewActions = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setNewActions([{
      name: 'none',
      method: '',
      route: '',
      text: '-- Select Action --'
    }].concat(_toConsumableArray(actions)));
  }, []);

  function handleClick(event) {
    event.preventDefault();

    if (selected.method === 'GET') {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.get(route("".concat(selected.route)));
    } else if (selected.name === 'reset') {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.post(route("".concat(selected.route)), {
        button: 'reset'
      }, {
        preserveState: true,
        preserveScroll: true,
        onBefore: function onBefore() {
          return confirm("you are about to delete all items and replace them with the default. Proceed?");
        },
        onStart: function onStart() {
          return setLoading(true);
        },
        onFinish: function onFinish() {
          setLoading(false);
          setFetchingData(false);
          setSelectedItems([]);
        }
      });
    } else if (selected.method === 'POST') {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.post(route("".concat(selected.route), routeParams.concat(selectedItems.toString())), {
        button: selected.name
      }, {
        preserveState: true,
        preserveScroll: true,
        onBefore: function onBefore() {
          return confirm("This action with affect the selected [".concat(selectedItems.length, "] item(s). Proceed?"));
        },
        onStart: function onStart() {
          return setLoading(true);
        },
        onFinish: function onFinish() {
          setLoading(false);
          setFetchingData(false);
          setSelectedItems([]);
        }
      });
    } else if (selected.method === 'DELETE') {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia["delete"](route("".concat(selected.route), routeParams.concat(selectedItems.toString())), {
        preserveState: true,
        preserveScroll: true,
        onBefore: function onBefore() {
          return confirm("you are about to delete [".concat(selectedItems.length, "] item(s)?"));
        },
        onStart: function onStart() {
          return setLoading(true);
        },
        onFinish: function onFinish() {
          setLoading(false);
          setFetchingData(false);
          setSelectedItems([]);
        }
      });
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "flex mr-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Listbox, {
      value: selected,
      onChange: setSelected,
      children: function children(_ref2) {
        var open = _ref2.open;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Listbox.Button, {
              className: "relative w-60 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "block truncate",
                children: selected.text
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  className: "h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {
              show: open,
              as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              leave: "transition ease-in duration-100",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Listbox.Options, {
                className: "absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",
                children: newActions.map(function (action) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Listbox.Option, {
                    className: function className(_ref3) {
                      var active = _ref3.active;
                      return classNames(active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-8 pr-4 w-full');
                    },
                    value: action,
                    children: function children(_ref4) {
                      var selected = _ref4.selected,
                          active = _ref4.active;
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                          className: classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate'),
                          children: action.text
                        }), selected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                          className: classNames(active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 left-0 flex items-center pl-1.5'),
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            className: "h-5 w-5",
                            "aria-hidden": "true"
                          })
                        }) : null]
                      });
                    }
                  }, action.name);
                })
              })
            })]
          })
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
      onClick: function onClick(event) {
        return handleClick(event);
      },
      disabled: !route().has("".concat(selected.route)) || loading || selectedItems.length === 0 && selected.require_selection == true,
      className: "flex items-center rounded border ".concat(loading ? 'bg-gray-200 text-gray-300 border-gray-400' : 'border-blue-600 bg-blue-500 text-white', " ml-1 px-2 text-sm"),
      children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "animate-spin w-4 h-4 stroke-current inline"
      }), !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "inline w-4 h-4 rotate-90 stroke-current"
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Shared/Table/DataField.jsx":
/*!*************************************************!*\
  !*** ./resources/js/Shared/Table/DataField.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataField)
/* harmony export */ });
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/MinusIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/CheckIcon.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







function DataField(_ref) {
  var column = _ref.column,
      item = _ref.item,
      _ref$routeParams = _ref.routeParams,
      routeParams = _ref$routeParams === void 0 ? [] : _ref$routeParams;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    children: column.data_type ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [column.data_type == 'boolean' && item[column.field] == true && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "w-6 h-6 text-green-500 fill-current inline-block"
      }), column.data_type == 'boolean' && item[column.field] == false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "w-6 h-6 text-red-500 fill-current inline-block"
      }), column.data_type == 'text' && item[column.field], column.data_type == 'number' && item[column.field], column.data_type == 'datetime' && item[column.field], column.data_type == 'image' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: item[column.field],
        alt: "image",
        className: "rounded-full w-12 h-12"
      }), column.data_type == 'user' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
        className: "text-indigo-600 hover:text-indigo-800 font-semibold",
        href: route('users.show', item[column.field].id),
        children: item[column.field].fullname
      }), column.data_type == 'object' && column.object_data && item[column.field] && item[column.field][column.object_data.id] && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [route().has("".concat(column.object_data.type, ".show"), routeParams.concat([item[column.field][column.object_data.id]])) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link // Object Data is an array that contains ['id'=>'id','name'=>'name','type'=>'user_types']
        , {
          className: "text-indigo-600 hover:text-indigo-800 font-semibold",
          href: route("".concat(column.object_data.type, ".show"), routeParams.concat([item[column.field][column.object_data.id]])),
          children: item[column.field][column.object_data.name]
        }), route().has("".concat(column.object_data.route, ".show"), routeParams.concat([item[column.field][column.object_data.id]])) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link // Object Data is an array that contains ['id'=>'id','name'=>'name','type'=>'event_exhibitors','route'=>'events.exhibitors']
        , {
          className: "text-indigo-600 hover:text-indigo-800 font-semibold",
          href: route("".concat(column.object_data.route, ".show"), routeParams.concat([item[column.field][column.object_data.id]])),
          children: item[column.field][column.object_data.name]
        })]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: item[column.field]
    })
  });
}

/***/ }),

/***/ "./resources/js/Shared/Table/Pagination.jsx":
/*!**************************************************!*\
  !*** ./resources/js/Shared/Table/Pagination.jsx ***!
  \**************************************************/
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
      links = _ref.links,
      fetchingData = _ref.fetchingData,
      setFetchingData = _ref.setFetchingData;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex-1 flex justify-between sm:hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
        onFinish: function onFinish() {
          return setFetchingData(false);
        },
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
        onFinish: function onFinish() {
          return setFetchingData(false);
        },
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
            onFinish: function onFinish() {
              return setFetchingData(false);
            },
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
              onFinish: function onFinish() {
                return setFetchingData(false);
              },
              preserveScroll: true,
              preserveState: true,
              href: item.url,
              className: "relative inline-flex items-center px-4 py-2 border text-sm font-medium\n                            ".concat(item.active ? 'z-10 bg-indigo-50 border-primary-400 text-primary-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50', "\n                             ").concat(parseInt(item.label) > 2 && parseInt(item.label) < meta.last_page - 2 && meta.current_page !== parseInt(item.label) ? 'hidden xl:inline-flex' : '', "\n                                    "),
              children: item.label
            }, item.label) : item.label === '...' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700",
              children: "..."
            }, index + item.label) : null;
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
            onFinish: function onFinish() {
              return setFetchingData(false);
            },
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

/***/ "./resources/js/Shared/Table/PerPageFilter.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/Shared/Table/PerPageFilter.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PerPageFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/SelectorIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/CheckIcon.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* This example requires Tailwind CSS v2.0+ */







var numOptions = [{
  id: 1,
  value: 5
}, {
  id: 2,
  value: 10
}, {
  id: 3,
  value: 25
}, {
  id: 4,
  value: 50
}, {
  id: 5,
  value: 100
}];

function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function PerPageFilter(_ref) {
  var fetchingData = _ref.fetchingData,
      setFetchingData = _ref.setFetchingData;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(numOptions[1]),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  function handlePerPage(option) {
    setSelected(option);
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get(route(route().current(), route().params), {
      per_page: option.value,
      page: 1
    }, {
      replace: true,
      preserveState: true,
      onFinish: function onFinish() {
        return setFetchingData(false);
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Listbox, {
    value: selected,
    onChange: handlePerPage,
    children: function children(_ref2) {
      var open = _ref2.open;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Listbox.Button, {
            className: "relative w-full max-w-xs bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
              className: "block truncate",
              children: ["Per page (", selected.value, ")"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__["default"], {
                className: "h-5 w-5 text-gray-400",
                "aria-hidden": "true"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {
            show: open,
            as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            leave: "transition ease-in duration-100",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Listbox.Options, {
              className: "absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",
              children: numOptions.map(function (option) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Listbox.Option, {
                  className: function className(_ref3) {
                    var active = _ref3.active;
                    return classNames(active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-8 pr-4');
                  },
                  value: option,
                  children: function children(_ref4) {
                    var selected = _ref4.selected,
                        active = _ref4.active;
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                        className: classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate'),
                        children: option.value
                      }), selected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                        className: classNames(active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 left-0 flex items-center pl-1.5'),
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__["default"], {
                          className: "h-5 w-5",
                          "aria-hidden": "true"
                        })
                      }) : null]
                    });
                  }
                }, option.id);
              })
            })
          })]
        })
      });
    }
  });
}

/***/ }),

/***/ "./resources/js/Shared/Table/SearchFilter.jsx":
/*!****************************************************!*\
  !*** ./resources/js/Shared/Table/SearchFilter.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchFilter)
/* harmony export */ });
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/SearchCircleIcon.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Actions */ "./resources/js/Shared/Table/Actions.jsx");
/* harmony import */ var _PerPageFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PerPageFilter */ "./resources/js/Shared/Table/PerPageFilter.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function SearchFilter(_ref) {
  var fetchingData = _ref.fetchingData,
      setFetchingData = _ref.setFetchingData,
      selectedItems = _ref.selectedItems,
      setSelectedItems = _ref.setSelectedItems,
      _ref$routeParams = _ref.routeParams,
      routeParams = _ref$routeParams === void 0 ? [] : _ref$routeParams;
  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props,
      initSearch = _usePage$props.initSearch,
      actions = _usePage$props.actions;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initSearch),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  function runSearch() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.reload({
      data: {
        search: search,
        page: 1
      },
      only: ['items'],
      replace: true,
      preserveState: true,
      onFinish: function onFinish() {
        return setFetchingData(false);
      }
    });
  }

  function handleChange(e) {
    var key = e.target.name;
    var value = e.target.value;
    setSearch(value);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "block lg:flex justify-between my-2 mx-5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "relative max-w-md",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "h-5 w-5 text-gray-400",
          "aria-hidden": "true"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
        type: "text",
        name: "search",
        id: "search",
        autoComplete: "off",
        defaultValue: search,
        onChange: handleChange,
        onKeyDown: function onKeyDown(event) {
          if (event.key === 'Enter') {
            runSearch();
          }
        },
        className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full max-w-xs pl-10 sm:text-sm border-gray-300 rounded-md h-full",
        placeholder: "Search ..."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "block lg:flex",
      children: [actions && actions.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Actions__WEBPACK_IMPORTED_MODULE_3__["default"], {
        actions: actions,
        setFetchingData: setFetchingData,
        selectedItems: selectedItems,
        routeParams: routeParams,
        setSelectedItems: setSelectedItems
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PerPageFilter__WEBPACK_IMPORTED_MODULE_4__["default"], {
        fetchingData: fetchingData,
        setFetchingData: setFetchingData
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Shared/Table/Table.jsx":
/*!*********************************************!*\
  !*** ./resources/js/Shared/Table/Table.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/ZoomInIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/DocumentDuplicateIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/RefreshIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/PencilIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/TrashIcon.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _DataField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataField */ "./resources/js/Shared/Table/DataField.jsx");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pagination */ "./resources/js/Shared/Table/Pagination.jsx");
/* harmony import */ var _SearchFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchFilter */ "./resources/js/Shared/Table/SearchFilter.jsx");
/* harmony import */ var _TableSortingButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TableSortingButton */ "./resources/js/Shared/Table/TableSortingButton.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

function Table(_ref) {
  var baseRoute = _ref.baseRoute,
      selectedItems = _ref.selectedItems,
      setSelectedItems = _ref.setSelectedItems,
      _ref$routeParams = _ref.routeParams,
      routeParams = _ref$routeParams === void 0 ? [] : _ref$routeParams;
  var _usePage$props = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props,
      items = _usePage$props.items,
      order_by = _usePage$props.order_by,
      columns = _usePage$props.columns,
      count = _usePage$props.count;
  var checkbox = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      indeterminate = _useState4[0],
      setIndeterminate = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      deleting = _useState6[0],
      setDeleting = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      replicating = _useState8[0],
      setReplicating = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(order_by),
      _useState10 = _slicedToArray(_useState9, 2),
      sortingBy = _useState10[0],
      setSortingBy = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      fetchingData = _useState12[0],
      setFetchingData = _useState12[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setFetchingData(false);
    return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.on('start', function () {
      return setFetchingData(true);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(function () {
    var isIndeterminate = selectedItems.length > 0 && selectedItems.length < items.data.length;
    setChecked(selectedItems.length === items.data.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedItems]);

  function toggleAll() {
    setSelectedItems(checked || indeterminate ? [] : items.data.map(function (p) {
      return p.id;
    }));
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  function handleDelete(event, id, nice_name) {
    event.preventDefault();
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia["delete"](route("".concat(baseRoute, ".destroy"), routeParams.concat([id])), {
      onBefore: function onBefore() {
        return confirm("you are about to delete ".concat(nice_name !== null && nice_name !== void 0 ? nice_name : 'this', " item?"));
      },
      onStart: function onStart() {
        return setDeleting(id);
      },
      onFinish: function onFinish() {
        setDeleting(0);
        setFetchingData(false);
        setSelectedItems(selectedItems.filter(function (p) {
          return p !== id;
        }));
      }
    });
  }

  function handleReplicate(event, id, nice_name) {
    event.preventDefault();
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.post(route("".concat(baseRoute, ".replicate"), routeParams.concat([id])), {}, {
      onBefore: function onBefore() {
        return confirm("you are about to replicate ".concat(nice_name !== null && nice_name !== void 0 ? nice_name : 'this', " item?"));
      },
      onStart: function onStart() {
        return setReplicating(id);
      },
      onFinish: function onFinish() {
        setFetchingData(false);
        setReplicating(0);
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: "mt-8 flex flex-col ".concat(count > 0 ? '' : 'hidden'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "bg-gray-50 relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_SearchFilter__WEBPACK_IMPORTED_MODULE_5__["default"], {
            routeParams: routeParams,
            fetchingData: fetchingData,
            setFetchingData: setFetchingData,
            selectedItems: selectedItems,
            setSelectedItems: setSelectedItems
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
            className: "min-w-full table-fixed divide-y divide-gray-300",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("thead", {
              className: "bg-gray-50",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  scope: "col",
                  className: "relative w-12 px-6 sm:w-16 sm:px-8",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                    type: "checkbox",
                    className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6",
                    ref: checkbox,
                    checked: checked,
                    onChange: toggleAll
                  })
                }), columns.map(function (col) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                    scope: col.field,
                    className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_TableSortingButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      dataType: col.data_type,
                      objectData: col.object_data,
                      setFetchingData: setFetchingData,
                      setSelectedItems: setSelectedItems,
                      field: col.field,
                      label: col.label,
                      sortingBy: sortingBy,
                      setSortingBy: setSortingBy
                    }, col.label)
                  }, col.label);
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
                  scope: "col",
                  className: "relative py-3.5 pl-3 pr-4 sm:pr-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                    className: "sr-only",
                    children: "Edit"
                  })
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tbody", {
              className: "".concat(fetchingData ? 'animate-pulse' : '', " divide-y divide-gray-200 bg-white"),
              children: items.data.map(function (item, index) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                  className: selectedItems.includes(item.id) ? 'bg-gray-50' : 'hover:bg-gray-50',
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
                    className: "relative w-12 px-6 sm:w-16 sm:px-8",
                    children: [selectedItems.includes(item.id) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                      className: "absolute inset-y-0 left-0 w-0.5 bg-indigo-600"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                      type: "checkbox",
                      className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6",
                      value: item.id,
                      checked: selectedItems.includes(item.id),
                      onChange: function onChange(e) {
                        return setSelectedItems(e.target.checked ? [].concat(_toConsumableArray(selectedItems), [item.id]) : selectedItems.filter(function (p) {
                          return p !== item.id;
                        }));
                      }
                    })]
                  }), columns.map(function (col, index) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                      className: classNames(index === 0 ? 'font-medium text-gray-900' : '', 'whitespace-nowrap py-4 pr-3 text-sm max-w-xs truncate', index === 0 && selectedItems.includes(item.id) ? 'text-indigo-600' : ''),
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_DataField__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        column: col,
                        item: item,
                        routeParams: routeParams
                      })
                    }, index);
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
                    className: "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: "flex justify-end w-full",
                      children: [item.can.view && route().has("".concat(baseRoute, ".show"), routeParams.concat([item.id])) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                        title: "View",
                        href: route("".concat(baseRoute, ".show"), routeParams.concat([item.id])),
                        className: "btn-table-xs mr-1",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__["default"], {
                          className: "w-6 h-6",
                          "aria-hidden": "true"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                          className: "sr-only",
                          children: "View"
                        })]
                      }), item.can["delete"] && route().has("".concat(baseRoute, ".replicate"), routeParams.concat([item.id])) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
                        title: "Replicate",
                        onClick: function onClick(event) {
                          return handleReplicate(event, item.id, item.nice_name);
                        },
                        className: "btn-table-xs warning",
                        disabled: deleting === item.id,
                        children: [(replicating === 0 || replicating !== item.id) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_9__["default"], {
                          className: "w-6 h-6",
                          "aria-hidden": "true"
                        }), replicating === item.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__["default"], {
                          className: "animate-spin w-6 h-6",
                          "aria-hidden": "true"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                          className: "sr-only",
                          children: "Delete"
                        })]
                      }), item.can.update && route().has("".concat(baseRoute, ".edit"), routeParams.concat([item.id])) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                        title: "Edit",
                        href: route("".concat(baseRoute, ".edit"), routeParams.concat([item.id])),
                        className: "btn-table-xs info mr-1",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__["default"], {
                          className: "w-6 h-6",
                          "aria-hidden": "true"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                          className: "sr-only",
                          children: "Edit"
                        })]
                      }), item.can["delete"] && route().has("".concat(baseRoute, ".destroy"), routeParams) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
                        title: "Delete",
                        onClick: function onClick(event) {
                          return handleDelete(event, item.id, item.nice_name);
                        },
                        className: "btn-table-xs danger",
                        disabled: deleting === item.id,
                        children: [(deleting === 0 || deleting !== item.id) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_12__["default"], {
                          className: "w-6 h-6",
                          "aria-hidden": "true"
                        }), deleting === item.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__["default"], {
                          className: "animate-spin w-6 h-6",
                          "aria-hidden": "true"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                          className: "sr-only",
                          children: "Delete"
                        })]
                      })]
                    })
                  })]
                }, index);
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
            meta: items.meta,
            links: items.links,
            fetchingData: fetchingData,
            setFetchingData: setFetchingData
          })]
        })
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Shared/Table/TableSortingButton.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/Shared/Table/TableSortingButton.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableSortingButton)
/* harmony export */ });
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/ChevronDownIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/ChevronUpIcon.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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

function TableSortingButton(_ref) {
  var field = _ref.field,
      label = _ref.label,
      dataType = _ref.dataType,
      objectData = _ref.objectData,
      sortingBy = _ref.sortingBy,
      setSortingBy = _ref.setSortingBy,
      setFetchingData = _ref.setFetchingData,
      setSelectedItems = _ref.setSelectedItems;
  var order_direction = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.order_direction;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOrderDesc = _useState2[0],
      setIsOrderDesc = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      count = _useState4[0],
      setCount = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (order_direction === 'desc') {
      setIsOrderDesc(true);
    } else {
      setIsOrderDesc(false);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (count > 0) {
      var orderByField = field;

      if (field == 'updator') {
        orderByField = 'last_update_by';
      } else if (field == 'creator') {
        orderByField = 'created_by';
      } else if (objectData && objectData.type && dataType && dataType == 'object') {
        orderByField = "".concat(objectData.type, ".").concat(objectData.name);
      }

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.get(route(route().current(), route().params), {
        order_by: orderByField,
        page: 1,
        order_direction: isOrderDesc ? 'desc' : 'asc'
      }, {
        preserveState: true,
        only: ['items'],
        onFinish: function onFinish() {
          setFetchingData(false);
          setSelectedItems([]);
        }
      });
    }
  }, [isOrderDesc]);

  function titleCase(str) {
    return str.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  }

  function doSorting(event) {
    event.preventDefault(); // if (objectData && objectData.type && dataType && dataType == 'object') {
    //     return;
    // }

    setSortingBy(field);
    setCount(count + 1);
    setIsOrderDesc(function (prev) {
      return !prev;
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
    onClick: function onClick(event) {
      return doSorting(event);
    },
    className: "group inline-flex",
    children: [label !== null && label !== void 0 ? label : titleCase(field), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: classNames(sortingBy === field ? 'bg-gray-200 text-gray-900 group-hover:bg-gray-300' : 'text-gray-400 invisible group-focus:visible', 'ml-2 flex-none rounded'),
      children: dataType != 'objects' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [isOrderDesc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "".concat(field === sortingBy ? '' : 'invisible text-gray-400', " h-5 w-5 flex-none rounded  group-hover:visible group-focus:visible"),
          "aria-hidden": "true"
        }), !isOrderDesc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "".concat(field === sortingBy ? '' : 'invisible text-gray-400', " h-5 w-5 flex-none rounded group-hover:visible group-focus:visible"),
          "aria-hidden": "true"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChevronDownIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronDownIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronDownIcon(props, svgRef) {
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
    d: "M19 9l-7 7-7-7"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronDownIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/DocumentDuplicateIcon.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/DocumentDuplicateIcon.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DocumentDuplicateIcon(props, svgRef) {
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
    d: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(DocumentDuplicateIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/MinusIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MinusIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function MinusIcon(props, svgRef) {
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
    d: "M20 12H4"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MinusIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PaperAirplaneIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PaperAirplaneIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PaperAirplaneIcon(props, svgRef) {
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
    d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PaperAirplaneIcon);
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

/***/ "./node_modules/@heroicons/react/outline/esm/RefreshIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/RefreshIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function RefreshIcon(props, svgRef) {
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
    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(RefreshIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/SearchCircleIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/SearchCircleIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SearchCircleIcon(props, svgRef) {
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
    d: "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SearchCircleIcon);
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

/***/ "./node_modules/@heroicons/react/outline/esm/ZoomInIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ZoomInIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ZoomInIcon(props, svgRef) {
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
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ZoomInIcon);
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

/***/ "./node_modules/@heroicons/react/solid/esm/ChevronUpIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/ChevronUpIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronUpIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronUpIcon);
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