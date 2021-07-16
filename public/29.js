(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./resources/js/components/UI/Loading/Loading.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/UI/Loading/Loading.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Dialog */ \"./node_modules/@material-ui/core/esm/Dialog/index.js\");\n/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ \"./node_modules/@material-ui/core/esm/CircularProgress/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ \"./node_modules/@material-ui/core/esm/Box/index.js\");\n\n\n\n\n\n\nvar loading = function loading(_ref) {\n  var isOpen = _ref.isOpen,\n      loadingText = _ref.loadingText;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    open: isOpen\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    style: {\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      alignItems: 'center',\n      width: 'auto',\n      height: '200px',\n      padding: '50px'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    color: \"secondary\",\n    size: 60\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    variant: \"h6\",\n    align: \"center\",\n    style: {\n      marginTop: '20px'\n    }\n  }, loadingText)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loading);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9VSS9Mb2FkaW5nL0xvYWRpbmcuanM/YTIwOSJdLCJuYW1lcyI6WyJsb2FkaW5nIiwiaXNPcGVuIiwibG9hZGluZ1RleHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQTJCO0FBQUEsTUFBekJDLE1BQXlCLFFBQXpCQSxNQUF5QjtBQUFBLE1BQWpCQyxXQUFpQixRQUFqQkEsV0FBaUI7QUFFdkMsU0FDSTtBQUFTLFFBQUksRUFBRUQ7QUFBZixLQUNJO0FBQUssU0FBSyxFQUFFO0FBQ0pFLGFBQU8sRUFESDtBQUVKQyxtQkFBYSxFQUZUO0FBR0pDLG9CQUFjLEVBSFY7QUFJSkMsZ0JBQVUsRUFKTjtBQUtKQyxXQUFLLEVBTEQ7QUFNSkMsWUFBTSxFQU5GO0FBT0pDLGFBQU8sRUFBRTtBQVBMO0FBQVosS0FTSztBQUFrQixTQUFLLEVBQXZCO0FBQW9DLFFBQUksRUFBRTtBQUExQyxJQVRMLEVBVUk7QUFBWSxXQUFPLEVBQW5CO0FBQXlCLFNBQUssRUFBOUI7QUFBd0MsU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiO0FBQS9DLEtBWlosV0FZWSxDQVZKLENBREosQ0FESjtBQUZKOztBQW9CQSIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1VJL0xvYWRpbmcvTG9hZGluZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGlhbG9nICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnOyBcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5cbmNvbnN0IGxvYWRpbmcgPSAoe2lzT3BlbiwgbG9hZGluZ1RleHR9KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RGlhbG9nICBvcGVuPXtpc09wZW59PlxuICAgICAgICAgICAgPEJveCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OidmbGV4JywgXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDonY2VudGVyJywgXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6J2NlbnRlcicsIFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDonYXV0bycsIFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6JzIwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzUwcHgnXG4gICAgICAgICAgICAgICAgICAgIH19PiBcbiAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPXs2MH0vPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMjBweCd9fT57bG9hZGluZ1RleHR9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9Cb3g+IFxuICAgICAgICA8L0RpYWxvZyA+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/components/UI/Loading/Loading.js\n");

/***/ }),

/***/ "./resources/js/components/UI/SectionHead/SectionHead.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/UI/SectionHead/SectionHead.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ \"./node_modules/@material-ui/core/esm/Box/index.js\");\n\n\n\n\n\nvar sectionHead = function sectionHead(props) {\n  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"useTheme\"])();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    align: \"center\",\n    variant: \"h5\"\n  }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    align: \"center\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    style: {\n      width: \"200px\",\n      backgroundColor: theme.palette.primary.main,\n      height: \"2px\",\n      display: \"inline-block\"\n    },\n    component: \"span\"\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sectionHead);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9VSS9TZWN0aW9uSGVhZC9TZWN0aW9uSGVhZC5qcz9lMDk2Il0sIm5hbWVzIjpbInNlY3Rpb25IZWFkIiwidGhlbWUiLCJ1c2VUaGVtZSIsInByb3BzIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxRQUFXO0FBQzNCLE1BQU1DLEtBQUssR0FBR0MseUVBQWQ7QUFDQSxTQUNJLGlIQUNJO0FBQVksU0FBSyxFQUFqQjtBQUEyQixXQUFPLEVBQUM7QUFBbkMsS0FBMENDLEtBQUssQ0FEbkQsUUFDSSxDQURKLEVBRUk7QUFBWSxTQUFLLEVBQUM7QUFBbEIsS0FDUTtBQUFLLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQVA7QUFBZ0JDLHFCQUFlLEVBQUVKLEtBQUssQ0FBTEEsZ0JBQWpDO0FBQTZESyxZQUFNLEVBQW5FO0FBQTJFQyxhQUFPLEVBQUU7QUFBcEYsS0FBWjtBQUFrSCxhQUFTLEVBQUM7QUFBNUgsSUFEUixDQUZKLENBREo7QUFGSjs7QUFZQSIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1VJL1NlY3Rpb25IZWFkL1NlY3Rpb25IZWFkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5cbmNvbnN0IHNlY3Rpb25IZWFkID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cImg1XCI+eyBwcm9wcy5jaGlsZHJlbiB9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBzdHlsZT17eyB3aWR0aDpcIjIwMHB4XCIsYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiwgaGVpZ2h0OlwiMnB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0gY29tcG9uZW50PVwic3BhblwiPjwvQm94PlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0ZyYWdtZW50PiBcbiAgICApO1xufSBcblxuZXhwb3J0IGRlZmF1bHQgc2VjdGlvbkhlYWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/components/UI/SectionHead/SectionHead.js\n");

/***/ }),

/***/ "./resources/js/containers/Track/Track.js":
/*!************************************************!*\
  !*** ./resources/js/containers/Track/Track.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/axios */ \"./resources/js/shared/axios.js\");\n/* harmony import */ var _hoc_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/Layout/Layout */ \"./resources/js/hoc/Layout/Layout.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controls */ \"./resources/js/controls/index.js\");\n/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/utility */ \"./resources/js/shared/utility.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Divider */ \"./node_modules/@material-ui/core/esm/Divider/index.js\");\n/* harmony import */ var _components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/UI/Input/Input */ \"./resources/js/components/UI/Input/Input.js\");\n/* harmony import */ var _components_UI_SectionHead_SectionHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/UI/SectionHead/SectionHead */ \"./resources/js/components/UI/SectionHead/SectionHead.js\");\n/* harmony import */ var _components_UI_Loading_Loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/UI/Loading/Loading */ \"./resources/js/components/UI/Loading/Loading.js\");\nfunction _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    if (enumerableOnly) symbols = symbols.filter(function (sym) {\n      return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n    });\n    keys.push.apply(keys, symbols);\n  }\n\n  return keys;\n}\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    if (i % 2) {\n      ownKeys(source, true).forEach(function (key) {\n        _defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(source).forEach(function (key) {\n        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n      });\n    }\n  }\n\n  return target;\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Track =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Track, _Component);\n\n  function Track() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Track);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Track)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      trackForm: {\n        controls: _objectSpread({}, _controls__WEBPACK_IMPORTED_MODULE_4__[\"modifyControls\"]),\n        formIsValid: true\n      },\n      isTracking: false,\n      isTrackSuccess: false,\n      isTrackFailed: false,\n      orderStatus: null\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"inputChangedHandler\", function (event, inputIdentifier, sectionIdentifier) {\n      var updatedFormElement = '';\n\n      if (_this.state[sectionIdentifier].controls[inputIdentifier].elementType === 'select' || _this.state[sectionIdentifier].controls[inputIdentifier].elementType === 'input' || _this.state[sectionIdentifier].controls[inputIdentifier].elementType === 'radio' || _this.state[sectionIdentifier].controls[inputIdentifier].elementType === 'textarea') {\n        updatedFormElement = Object(_shared_utility__WEBPACK_IMPORTED_MODULE_5__[\"updateObject\"])(_this.state[sectionIdentifier].controls[inputIdentifier], {\n          value: event.target.value ? event.target.value : '',\n          valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_5__[\"checkValidity\"])(event.target.value ? event.target.value : event.target.checked ? true : false, _this.state[sectionIdentifier].controls[inputIdentifier].validation),\n          touched: true\n        });\n      }\n\n      var updatedForm = Object(_shared_utility__WEBPACK_IMPORTED_MODULE_5__[\"updateObject\"])(_this.state[sectionIdentifier].controls, _defineProperty({}, inputIdentifier, updatedFormElement));\n\n      _this.setState(_defineProperty({}, sectionIdentifier, {\n        controls: updatedForm,\n        formIsValid: true\n      }));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleTrack\", function () {\n      if (_this.state.trackForm.controls.orderRefNo.value && _this.state.trackForm.controls.mobileNo.value) {\n        _this.setState({\n          isTracking: true\n        });\n      }\n    });\n\n    return _this;\n  }\n\n  _createClass(Track, [{\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps, prevState) {\n      var _this2 = this;\n\n      if (prevState.isTracking !== this.state.isTracking) {\n        _shared_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('order/track', {\n          order_ref: this.state.trackForm.controls.orderRefNo.value,\n          mobile: this.state.trackForm.controls.mobileNo.value\n        }).then(function (res) {\n          console.log(res);\n\n          if (res.data.orderstatus) {\n            _this2.setState({\n              isTracking: false,\n              isTrackSuccess: true,\n              isTrackFailed: false,\n              orderStatus: res.data.orderstatus\n            });\n          } else {\n            _this2.setState({\n              isTracking: false,\n              isTrackSuccess: false,\n              isTrackFailed: true\n            });\n          }\n        })[\"catch\"](function (err) {\n          _this2.setState({\n            isTracking: false,\n            isTrackSuccess: false,\n            isTrackFailed: true\n          });\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_SectionHead_SectionHead__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null, \"You Can Track Your Order Here\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        container: true,\n        justify: \"center\",\n        alignItems: \"center\",\n        alignContent: \"center\",\n        style: {\n          margin: '75px 0'\n        },\n        spacing: 2\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        item: true,\n        md: 4,\n        sm: 12,\n        xs: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _extends({}, this.state.trackForm.controls.orderRefNo, {\n        shouldValidate: true,\n        changed: function changed(event) {\n          return _this3.inputChangedHandler(event, 'orderRefNo', 'trackForm');\n        }\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        item: true,\n        md: 4,\n        sm: 12,\n        xs: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _extends({}, this.state.trackForm.controls.mobileNo, {\n        shouldValidate: true,\n        changed: function changed(event) {\n          return _this3.inputChangedHandler(event, 'mobileNo', 'trackForm');\n        }\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        item: true,\n        xs: 12,\n        align: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        variant: \"contained\",\n        color: \"primary\",\n        onClick: this.handleTrack\n      }, \"Track\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        item: true,\n        xs: 12,\n        align: \"center\"\n      }, this.state.isTrackSuccess ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        color: \"primary\"\n      }, this.state.orderStatus) : '', this.state.isTrackFailed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        color: \"error\"\n      }, \"There are no records against the provided values, please recheck and try again, Thank You.\") : '')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        align: \"center\",\n        style: {\n          margin: '20px 0'\n        }\n      }, \"Note : You can only track your order or can modify and complete the application\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Loading_Loading__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        isOpen: this.state.isTracking,\n        loadingText: \"Tracking your order...\"\n      }));\n    }\n  }]);\n\n  return Track;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"withTheme\"])(Track));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29udGFpbmVycy9UcmFjay9UcmFjay5qcz9iNWMwIl0sIm5hbWVzIjpbIlRyYWNrIiwidHJhY2tGb3JtIiwiY29udHJvbHMiLCJmb3JtSXNWYWxpZCIsImlzVHJhY2tpbmciLCJpc1RyYWNrU3VjY2VzcyIsImlzVHJhY2tGYWlsZWQiLCJvcmRlclN0YXR1cyIsInVwZGF0ZWRGb3JtRWxlbWVudCIsInVwZGF0ZU9iamVjdCIsInZhbHVlIiwiZXZlbnQiLCJ2YWxpZCIsImNoZWNrVmFsaWRpdHkiLCJ0b3VjaGVkIiwidXBkYXRlZEZvcm0iLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJheGlvcyIsIm9yZGVyX3JlZiIsIm1vYmlsZSIsImNvbnNvbGUiLCJyZXMiLCJvcmRlcnN0YXR1cyIsIm1hcmdpbiIsImhhbmRsZVRyYWNrIiwiQ29tcG9uZW50Iiwid2l0aFRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NERBQ087QUFDTEMsZUFBUyxFQUFFO0FBQ1BDLGdCQUFRLG9CQURELHdEQUNDLENBREQ7QUFFUEMsbUJBQVcsRUFBRTtBQUZOLE9BRE47QUFLTEMsZ0JBQVUsRUFMTDtBQU1MQyxvQkFBYyxFQU5UO0FBT0xDLG1CQUFhLEVBUFI7QUFRTEMsaUJBQVcsRUFBRTtBQVJSLEs7OzBFQTRCYSxxREFBK0M7QUFDakUsVUFBSUMsa0JBQWtCLEdBQXRCOztBQUNBLFVB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SSxFQUFWO0FBQVcsVUFBRSxFQUFiO0FBQW1CLGFBQUssRUFBQztBQUF6QixTQUVRLDRCQUE2QjtBQUFZLGFBQUssRUFBQztBQUFsQixTQUE4QixXQUEzRCxXQUE2QixDQUE3QixHQUZSLElBS1EsMkJBQTRCO0FBQVksYUFBSyxFQUFDO0FBQWxCLFNBQTVCLDRGQUE0QixDQUE1QixHQTNCaEIsRUFzQlEsQ0FwQkosQ0FGSixFQWlDSSw4SEFqQ0osSUFpQ0ksQ0FqQ0osRUFrQ0k7QUFBWSxhQUFLLEVBQWpCO0FBQTJCLGFBQUssRUFBRTtBQUFDRCxnQkFBTSxFQUFDO0FBQVI7QUFBbEMsU0FsQ0osaUZBa0NJLENBbENKLEVBcUNJO0FBQVMsY0FBTSxFQUFHLFdBQWxCO0FBQTBDLG1CQUFXLEVBQUM7QUFBdEQsUUFyQ0osQ0FESjtBQXlDSDs7OztFQXZHZUUsK0M7O0FBMEdMQyx5SUFBUyxDQUF4QixLQUF3QixDQUF4QiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9jb250YWluZXJzL1RyYWNrL1RyYWNrLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vc2hhcmVkL2F4aW9zJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vaG9jL0xheW91dC9MYXlvdXQnOyBcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBtb2RpZnlDb250cm9scyB9IGZyb20gJy4uLy4uL2NvbnRyb2xzJztcbmltcG9ydCB7IHVwZGF0ZU9iamVjdCwgY2hlY2tWYWxpZGl0eSB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlsaXR5JzsgXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJzsgXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJzsgXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJzsgXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9VSS9JbnB1dC9JbnB1dCc7XG5pbXBvcnQgU2VjdGlvbkhlYWQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9VSS9TZWN0aW9uSGVhZC9TZWN0aW9uSGVhZCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VJL0xvYWRpbmcvTG9hZGluZyc7XG5cbmNsYXNzIFRyYWNrIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgc3RhdGUgPSB7ICBcbiAgICAgICAgdHJhY2tGb3JtOiB7XG4gICAgICAgICAgICBjb250cm9sczogey4uLm1vZGlmeUNvbnRyb2xzfSxcbiAgICAgICAgICAgIGZvcm1Jc1ZhbGlkOiB0cnVlXG4gICAgICAgIH0sIFxuICAgICAgICBpc1RyYWNraW5nOiBmYWxzZSxcbiAgICAgICAgaXNUcmFja1N1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBpc1RyYWNrRmFpbGVkOiBmYWxzZSxcbiAgICAgICAgb3JkZXJTdGF0dXM6IG51bGxcbiAgICB9OyBcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSl7XG4gICAgICAgIGlmKHByZXZTdGF0ZS5pc1RyYWNraW5nICE9PSB0aGlzLnN0YXRlLmlzVHJhY2tpbmcpe1xuICAgICAgICAgICAgYXhpb3MucG9zdCgnb3JkZXIvdHJhY2snLHtcbiAgICAgICAgICAgICAgICBvcmRlcl9yZWY6IHRoaXMuc3RhdGUudHJhY2tGb3JtLmNvbnRyb2xzLm9yZGVyUmVmTm8udmFsdWUsXG4gICAgICAgICAgICAgICAgbW9iaWxlOiB0aGlzLnN0YXRlLnRyYWNrRm9ybS5jb250cm9scy5tb2JpbGVOby52YWx1ZVxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgaWYocmVzLmRhdGEub3JkZXJzdGF0dXMpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc1RyYWNraW5nOiBmYWxzZSwgaXNUcmFja1N1Y2Nlc3M6IHRydWUsIGlzVHJhY2tGYWlsZWQ6IGZhbHNlLCBvcmRlclN0YXR1czogcmVzLmRhdGEub3JkZXJzdGF0dXN9KTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNUcmFja2luZzogZmFsc2UsIGlzVHJhY2tTdWNjZXNzOiBmYWxzZSwgaXNUcmFja0ZhaWxlZDogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzVHJhY2tpbmc6IGZhbHNlLCBpc1RyYWNrU3VjY2VzczogZmFsc2UsIGlzVHJhY2tGYWlsZWQ6IHRydWV9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5wdXRDaGFuZ2VkSGFuZGxlciA9IChldmVudCwgaW5wdXRJZGVudGlmaWVyLCBzZWN0aW9uSWRlbnRpZmllcikgPT4geyBcbiAgICAgICAgbGV0IHVwZGF0ZWRGb3JtRWxlbWVudCA9ICcnO1xuICAgICAgICBpZihcbiAgICAgICAgICAgIHRoaXMuc3RhdGVbc2VjdGlvbklkZW50aWZpZXJdLmNvbnRyb2xzW2lucHV0SWRlbnRpZmllcl0uZWxlbWVudFR5cGUgPT09ICdzZWxlY3QnIHx8IFxuICAgICAgICAgICAgdGhpcy5zdGF0ZVtzZWN0aW9uSWRlbnRpZmllcl0uY29udHJvbHNbaW5wdXRJZGVudGlmaWVyXS5lbGVtZW50VHlwZSA9PT0gJ2lucHV0JyB8fFxuICAgICAgICAgICAgdGhpcy5zdGF0ZVtzZWN0aW9uSWRlbnRpZmllcl0uY29udHJvbHNbaW5wdXRJZGVudGlmaWVyXS5lbGVtZW50VHlwZSA9PT0gJ3JhZGlvJyB8fCBcbiAgICAgICAgICAgIHRoaXMuc3RhdGVbc2VjdGlvbklkZW50aWZpZXJdLmNvbnRyb2xzW2lucHV0SWRlbnRpZmllcl0uZWxlbWVudFR5cGUgPT09ICd0ZXh0YXJlYSdcbiAgICAgICAgICAgICl7XG4gICAgICAgICAgICB1cGRhdGVkRm9ybUVsZW1lbnQgPSB1cGRhdGVPYmplY3QodGhpcy5zdGF0ZVtzZWN0aW9uSWRlbnRpZmllcl0uY29udHJvbHNbaW5wdXRJZGVudGlmaWVyXSwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgPyBldmVudC50YXJnZXQudmFsdWUgOiAnJyxcbiAgICAgICAgICAgICAgICB2YWxpZDogY2hlY2tWYWxpZGl0eShldmVudC50YXJnZXQudmFsdWUgPyBldmVudC50YXJnZXQudmFsdWUgOiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQgPyB0cnVlOiBmYWxzZSksIHRoaXMuc3RhdGVbc2VjdGlvbklkZW50aWZpZXJdLmNvbnRyb2xzW2lucHV0SWRlbnRpZmllcl0udmFsaWRhdGlvbiApLFxuICAgICAgICAgICAgICAgIHRvdWNoZWQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IFxuIFxuIFxuICAgICAgICBcbiAgICAgICAgY29uc3QgdXBkYXRlZEZvcm0gID0gdXBkYXRlT2JqZWN0KHRoaXMuc3RhdGVbc2VjdGlvbklkZW50aWZpZXJdLmNvbnRyb2xzLCB7XG4gICAgICAgICAgICBbaW5wdXRJZGVudGlmaWVyXTogdXBkYXRlZEZvcm1FbGVtZW50XG4gICAgICAgIH0pO1xuIFxuIFxuICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIFtzZWN0aW9uSWRlbnRpZmllcl06e2NvbnRyb2xzOiB1cGRhdGVkRm9ybSwgZm9ybUlzVmFsaWQ6IHRydWV9IFxuICAgICAgICB9KTsgXG4gICAgfVxuICAgIFxuICAgIGhhbmRsZVRyYWNrID0gKCkgPT4ge1xuICAgICAgICBpZih0aGlzLnN0YXRlLnRyYWNrRm9ybS5jb250cm9scy5vcmRlclJlZk5vLnZhbHVlICYmIHRoaXMuc3RhdGUudHJhY2tGb3JtLmNvbnRyb2xzLm1vYmlsZU5vLnZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzVHJhY2tpbmc6IHRydWV9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7ICAgICAgIFxuICAgICAgICByZXR1cm4gKCBcbiAgICAgICAgICAgIDxGcmFnbWVudD4gICBcbiAgICAgICAgICAgICAgICA8U2VjdGlvbkhlYWQ+WW91IENhbiBUcmFjayBZb3VyIE9yZGVyIEhlcmU8L1NlY3Rpb25IZWFkPiAgXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgYWxpZ25Db250ZW50PVwiY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luOic3NXB4IDAnIH19IHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs0fSBzbT17MTJ9IHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlLnRyYWNrRm9ybS5jb250cm9scy5vcmRlclJlZk5vfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZFZhbGlkYXRlPXt0cnVlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkPXsoZXZlbnQpID0+IHRoaXMuaW5wdXRDaGFuZ2VkSGFuZGxlcihldmVudCwgJ29yZGVyUmVmTm8nLCAndHJhY2tGb3JtJyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezR9IHNtPXsxMn0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGUudHJhY2tGb3JtLmNvbnRyb2xzLm1vYmlsZU5vfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZFZhbGlkYXRlPXt0cnVlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkPXsoZXZlbnQpID0+IHRoaXMuaW5wdXRDaGFuZ2VkSGFuZGxlcihldmVudCwgJ21vYmlsZU5vJywgJ3RyYWNrRm9ybScpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiBcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVHJhY2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzVHJhY2tTdWNjZXNzID8gKDxUeXBvZ3JhcGh5IGNvbG9yPVwicHJpbWFyeVwiPnsgdGhpcy5zdGF0ZS5vcmRlclN0YXR1cyB9PC9UeXBvZ3JhcGh5PikgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNUcmFja0ZhaWxlZCA/ICg8VHlwb2dyYXBoeSBjb2xvcj1cImVycm9yXCI+VGhlcmUgYXJlIG5vIHJlY29yZHMgYWdhaW5zdCB0aGUgcHJvdmlkZWQgdmFsdWVzLCBwbGVhc2UgcmVjaGVjayBhbmQgdHJ5IGFnYWluLCBUaGFuayBZb3UuPC9UeXBvZ3JhcGh5PikgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8RGl2aWRlci8+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT17e21hcmdpbjonMjBweCAwJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgTm90ZSA6IFlvdSBjYW4gb25seSB0cmFjayB5b3VyIG9yZGVyIG9yIGNhbiBtb2RpZnkgYW5kIGNvbXBsZXRlIHRoZSBhcHBsaWNhdGlvbiBcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+IFxuICAgICAgICAgICAgICAgIDxMb2FkaW5nIGlzT3Blbj17IHRoaXMuc3RhdGUuaXNUcmFja2luZyB9IGxvYWRpbmdUZXh0PVwiVHJhY2tpbmcgeW91ciBvcmRlci4uLlwiLz5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+IFxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRyYWNrKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/containers/Track/Track.js\n");

/***/ }),

/***/ "./resources/js/shared/axios.js":
/*!**************************************!*\
  !*** ./resources/js/shared/axios.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar origin = window.location.origin;\nvar instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: origin + '/api/'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvc2hhcmVkL2F4aW9zLmpzPzJmNTYiXSwibmFtZXMiOlsib3JpZ2luIiwid2luZG93IiwiaW5zdGFuY2UiLCJiYXNlVVJMIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsTUFBTSxDQUFOQSxTQUFmO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLDRDQUFLLENBQUwsT0FBYTtBQUMxQkMsU0FBTyxFQUFFSCxNQUFNLEdBQUM7QUFEVSxDQUFiLENBQWpCO0FBSUEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvc2hhcmVkL2F4aW9zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3Qgb3JpZ2luID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcbmNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBvcmlnaW4rJy9hcGkvJ1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/shared/axios.js\n");

/***/ })

}]);