(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/appState/contextProvider.js":
/*!*****************************************!*\
  !*** ./src/appState/contextProvider.js ***!
  \*****************************************/
/*! exports provided: RmmsContext, default */
/*! exports used: RmmsContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RmmsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RmmsAppState; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








var RmmsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createContext();

var RmmsAppState = /*#__PURE__*/function (_Component) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(RmmsAppState, _Component);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(RmmsAppState);

  function RmmsAppState() {
    var _this;

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, RmmsAppState);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "state", {
      category: {
        categories: [],
        dirty: true
      },
      company: {
        dirty: true,
        id: 0
      },
      companyCustomise: {
        dirty: true,
        landingPage: {
          banners: [],
          bottomList: [],
          carousel: [],
          mainMenuButtons: []
        },
        style: {
          primary: "",
          secondary: ""
        }
      },
      deviceInfo: {
        dirty: true
      },
      item: {
        dirty: true,
        items: []
      },
      shortTermMemory: {
        currentCategoryId: 0,
        currentSegmentTypeIndex: 0
      }
    });

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "AppStateWrapper", function (_ref) {
      var children = _ref.children;
      var _this$state = _this.state,
          category = _this$state.category,
          company = _this$state.company,
          companyCustomise = _this$state.companyCustomise,
          deviceInfo = _this$state.deviceInfo,
          item = _this$state.item,
          shortTermMemory = _this$state.shortTermMemory;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(RmmsContext.Provider, {
        value: {
          category: Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, category), {}, {
            setCategories: _this.setCategories
          }),
          company: Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, company), {}, {
            setCompany: _this.setCompany
          }),
          companyCustomise: Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, companyCustomise), {}, {
            setCompanyCustomise: _this.setCompanyCustomise
          }),
          deviceInfo: Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, deviceInfo), {}, {
            setDeviceInfo: _this.setDeviceInfo
          }),
          item: Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, item), {}, {
            setItems: _this.setItems
          }),
          shortTermMemory: Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, shortTermMemory), {}, {
            setShortTermMemory: _this.setShortTermMemory
          })
        },
        children: children
      });
    });

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "setCategories", function (categories) {
      _this.setState(function (state) {
        return {
          category: Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state.category), {}, {
            categories: categories,
            dirty: false
          })
        };
      });
    });

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "setCompany", function (company) {
      _this.setState(function (state) {
        return {
          company: Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, company), {}, {
            dirty: false
          })
        };
      });
    });

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "setCompanyCustomise", function (companyCustomise) {
      _this.setState(function (state) {
        return {
          companyCustomise: Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, companyCustomise), {}, {
            dirty: false
          })
        };
      });
    });

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "setDeviceInfo", function (deviceInfo) {
      _this.setState({
        deviceInfo: {
          deviceInfo: deviceInfo,
          dirty: false
        }
      });
    });

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "setItems", function (items) {
      _this.setState({
        item: {
          dirty: false,
          items: items
        }
      });
    });

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "setItems", function (items) {
      _this.setState({
        item: {
          dirty: false,
          items: items
        }
      });
    });

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "setShortTermMemory", function (shortTermMemory) {
      _this.setState({
        shortTermMemory: shortTermMemory
      });
    });

    return _this;
  }

  return RmmsAppState;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./src/common/applicationComponent.js":
/*!********************************************!*\
  !*** ./src/common/applicationComponent.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationComponent; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _appState_contextProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../appState/contextProvider */ "./src/appState/contextProvider.js");
/* harmony import */ var _service_serviceExecutor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/serviceExecutor */ "./src/service/serviceExecutor.js");
/* harmony import */ var _applicationContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./applicationContext */ "./src/common/applicationContext.js");
/* harmony import */ var _service_appStateService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../service/appStateService */ "./src/service/appStateService.js");
















var ApplicationComponent = /*#__PURE__*/function (_Component) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(ApplicationComponent, _Component);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ApplicationComponent);

  function ApplicationComponent() {
    var _this;

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, ApplicationComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "state", {
      modal: {
        show: false
      },
      toast: {
        show: false
      }
    });

    return _this;
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ApplicationComponent, [{
    key: "applicationContext",
    get: function get() {
      if (!this._applicationContext) {
        this._applicationContext = new _applicationContext__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]();
      }

      return this._applicationContext;
    }
  }, {
    key: "appStateService",
    get: function get() {
      if (!this._appStateService) {
        this._appStateService = new _service_appStateService__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"](this.appState, this.serviceExecutor);
      }

      return this._appStateService;
    }
  }, {
    key: "appState",
    get: function get() {
      return this.context;
    }
  }, {
    key: "serviceExecutor",
    get: function get() {
      if (!this._serviceExecutor) {
        this._serviceExecutor = new _service_serviceExecutor__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"](this.applicationContext.host);
      }

      return this._serviceExecutor;
    }
  }, {
    key: "getRouterParams",
    value: function getRouterParams() {
      return Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__["getCurrentInstance"])().router.params;
    }
  }, {
    key: "goTo",
    value: function goTo(route, params) {
      var generateRouteParams = function generateRouteParams() {
        var result = "";

        if (params) {
          result += "?";
          result += params.map(function (param) {
            return "".concat(param.key, "=").concat(param.value, "&");
          });
          result = result.substring(0, result.length - 1);
        }

        return result;
      };

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.navigateTo({
        url: route + generateRouteParams()
      });
    }
  }, {
    key: "goToTabBar",
    value: function goToTabBar(route) {
      wx.switchTab({
        url: route
      });
    }
  }, {
    key: "onLoad",
    value: function () {
      var _onLoad = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(options) {
        var _this2 = this;

        var companyId;
        return _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                companyId = options.companyId;
                this.appStateService.getCompany(companyId).then(function (result) {
                  wx.setNavigationBarTitle({
                    title: _this2.appState.company.name
                  });
                });
                this.appStateService.getCompanyCustomise(companyId).then(function (content) {
                  wx.setNavigationBarColor({
                    backgroundColor: content.style.primary,
                    frontColor: "#ffffff"
                  });
                });
                this.appStateService.getCategories(companyId);
                this.appStateService.getItems(companyId);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _onLoad.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return ApplicationComponent;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(ApplicationComponent, "_applicationContext", void 0);

Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(ApplicationComponent, "_appStateService", void 0);

Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(ApplicationComponent, "_serviceExecutor", void 0);

Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(ApplicationComponent, "contextType", _appState_contextProvider__WEBPACK_IMPORTED_MODULE_10__[/* RmmsContext */ "a"]);



/***/ }),

/***/ "./src/common/applicationComponent.view.js":
/*!*************************************************!*\
  !*** ./src/common/applicationComponent.view.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationComponentView; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _applicationComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./applicationComponent */ "./src/common/applicationComponent.js");
/* harmony import */ var _appState_contextProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../appState/contextProvider */ "./src/appState/contextProvider.js");
/* harmony import */ var _flexView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./flexView */ "./src/common/flexView.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);















var ApplicationComponentView = /*#__PURE__*/function (_ApplicationComponent) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ApplicationComponentView, _ApplicationComponent);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(ApplicationComponentView);

  function ApplicationComponentView() {
    var _this;

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, ApplicationComponentView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "Wrapper", function (_ref) {
      var children = _ref.children;
      var modal = _this.props.modal;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(_flexView__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        style: {
          height: "100vh"
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(ErrorModal, Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, modal)), children]
      });
    });

    return _this;
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(ApplicationComponentView, [{
    key: "appState",
    get: function get() {
      return this.context;
    }
  }, {
    key: "appStyle",
    get: function get() {
      return this.appState.companyCustomise.style;
    }
  }]);

  return ApplicationComponentView;
}(_applicationComponent__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);

Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ApplicationComponentView, "contextType", _appState_contextProvider__WEBPACK_IMPORTED_MODULE_10__[/* RmmsContext */ "a"]);



function ErrorModal(props) {
  var isOpen = props.isOpen;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_8__[/* AtModal */ "e"], {
    isOpen: isOpen,
    title: "\u6807\u9898",
    cancelText: "\u53D6\u6D88",
    confirmText: "\u786E\u8BA4",
    onClose: function onClose() {
      return console.log("onClose");
    },
    onCancel: function onCancel() {
      return console.log("onCancel");
    },
    onConfirm: function onConfirm() {
      return console.log("onConfirm");
    },
    content: "\u6B22\u8FCE\u52A0\u5165\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4\\n\\r\u6B22\u8FCE\u52A0\u5165\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4"
  });
}

/***/ }),

/***/ "./src/common/applicationContext.js":
/*!******************************************!*\
  !*** ./src/common/applicationContext.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationContext; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var ApplicationContext = /*#__PURE__*/function () {
  function ApplicationContext() {
    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ApplicationContext);
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ApplicationContext, [{
    key: "host",
    get: function get() {
      return "http://localhost:2081";
    }
  }, {
    key: "mock",
    get: function get() {
      return false;
    }
  }]);

  return ApplicationContext;
}();



/***/ }),

/***/ "./src/common/applicationTag.jsx":
/*!***************************************!*\
  !*** ./src/common/applicationTag.jsx ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationTag; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _applicationComponent_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./applicationComponent.view */ "./src/common/applicationComponent.view.js");
/* harmony import */ var _flexView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flexView */ "./src/common/flexView.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










var COLORS = {
  blue: {
    backgroundColor: "#e6f8ff",
    border: "#90d5ff",
    color: "#086dd9"
  },
  cyan: {
    backgroundColor: "#e7fffb",
    border: "#87e8de",
    color: "#189fa2"
  },
  geekblue: {
    backgroundColor: "#f0f5ff",
    border: "#adc6ff",
    color: "#314ac9"
  },
  green: {
    backgroundColor: "#fcffe6",
    border: "#b7eb8f",
    color: "#389e0f"
  },
  lime: {
    backgroundColor: "#f6ffed",
    border: "#ecff98",
    color: "#8ebe22"
  },
  orange: {
    backgroundColor: "#fff7e6",
    border: "#ffd99a",
    color: "#da8029"
  },
  purple: {
    backgroundColor: "#f9f0ff",
    border: "#d3adf7",
    color: "#5e2ab0"
  },
  red: {
    backgroundColor: "#fff1f0",
    border: "#ffaba7",
    color: "#d63b45"
  },
  volcano: {
    backgroundColor: "#fff2e8",
    border: "#ffc19f",
    color: "#d7471d"
  },
  yellow: {
    backgroundColor: "#fffbe6",
    border: "#ffecac",
    color: "#d89219"
  }
};

var ApplicationTag = /*#__PURE__*/function (_ApplicationComponent) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ApplicationTag, _ApplicationComponent);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ApplicationTag);

  function ApplicationTag() {
    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, ApplicationTag);

    return _super.apply(this, arguments);
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(ApplicationTag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          color = _this$props.color,
          style = _this$props.style;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtTag */ "j"], Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        customStyle: Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
          padding: 0,
          width: "max-content"
        }, COLORS[color]), style),
        type: "primary"
      }, this.props), {}, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_flexView__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
          style: {
            paddingLeft: 6,
            paddingRight: 6
          },
          children: children
        })
      }));
    }
  }]);

  return ApplicationTag;
}(_applicationComponent_view__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);



/***/ }),

/***/ "./src/common/card.jsx":
/*!*****************************!*\
  !*** ./src/common/card.jsx ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _applicationComponent_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./applicationComponent.view */ "./src/common/applicationComponent.view.js");
/* harmony import */ var _flexView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flexView */ "./src/common/flexView.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










var Card = /*#__PURE__*/function (_ApplicationComponent) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Card, _ApplicationComponent);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Card);

  function Card() {
    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Card);

    return _super.apply(this, arguments);
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          style = _this$props.style;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_flexView__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        style: Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
          borderRadius: 15
        }, style),
        children: children
      });
    }
  }]);

  return Card;
}(_applicationComponent_view__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);



/***/ }),

/***/ "./src/common/circularButton.jsx":
/*!***************************************!*\
  !*** ./src/common/circularButton.jsx ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircularButton; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _applicationComponent_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./applicationComponent.view */ "./src/common/applicationComponent.view.js");
/* harmony import */ var _flexView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flexView */ "./src/common/flexView.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











var CircularButton = /*#__PURE__*/function (_ApplicationComponent) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(CircularButton, _ApplicationComponent);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(CircularButton);

  function CircularButton() {
    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, CircularButton);

    return _super.apply(this, arguments);
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(CircularButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          color = _this$props.color,
          _this$props$onClick = _this$props.onClick,
          onClick = _this$props$onClick === void 0 ? function () {
        return console.log("please override");
      } : _this$props$onClick,
          style = _this$props.style,
          url = _this$props.url;
      var _this$appStyle = this.appStyle,
          primary = _this$appStyle.primary,
          secondary = _this$appStyle.secondary;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_flexView__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        onClick: onClick
      }, this.props), {}, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtAvatar */ "a"], {
          circle: true,
          image: url
        })
      }));
    }
  }]);

  return CircularButton;
}(_applicationComponent_view__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);



/***/ }),

/***/ "./src/common/flexView.jsx":
/*!*********************************!*\
  !*** ./src/common/flexView.jsx ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexView; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function FlexView(props) {
  var children = props.children,
      onClick = props.onClick,
      style = props.style;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
    style: Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      display: "flex",
      flexDirection: "column"
    }, style),
    onClick: onClick,
    children: children
  });
}

/***/ }),

/***/ "./src/common/imageCarousel.jsx":
/*!**************************************!*\
  !*** ./src/common/imageCarousel.jsx ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCarousel; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _applicationComponent_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./applicationComponent.view */ "./src/common/applicationComponent.view.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










var ImageCarousel = /*#__PURE__*/function (_ApplicationComponent) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ImageCarousel, _ApplicationComponent);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ImageCarousel);

  function ImageCarousel() {
    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, ImageCarousel);

    return _super.apply(this, arguments);
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(ImageCarousel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imageUrls = _this$props.imageUrls,
          style = _this$props.style;
      var _this$appStyle = this.appStyle,
          primary = _this$appStyle.primary,
          secondary = _this$appStyle.secondary;
      var SwiperImageItems = imageUrls.map(function (imageUrl) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* SwiperItem */ "m"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "c"], {
            src: imageUrl,
            style: {
              width: "100%"
            }
          })
        });
      });
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Swiper */ "l"], {
        indicatorColor: secondary,
        indicatorActiveColor: primary,
        circular: true,
        indicatorDots: true,
        style: Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
          height: 245
        }, style),
        children: SwiperImageItems
      });
    }
  }]);

  return ImageCarousel;
}(_applicationComponent_view__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);



/***/ }),

/***/ "./src/common/text/h1.jsx":
/*!********************************!*\
  !*** ./src/common/text/h1.jsx ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return H1; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paragraph */ "./src/common/text/paragraph.jsx");







var H1 = /*#__PURE__*/function (_P) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(H1, _P);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(H1);

  function H1() {
    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, H1);

    return _super.apply(this, arguments);
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(H1, [{
    key: "getColor",
    value: function getColor() {
      return "#5F5F5F";
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      return "at-article__h1";
    }
  }]);

  return H1;
}(_paragraph__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);



/***/ }),

/***/ "./src/common/text/h2.jsx":
/*!********************************!*\
  !*** ./src/common/text/h2.jsx ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return H2; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _h1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./h1 */ "./src/common/text/h1.jsx");







var H2 = /*#__PURE__*/function (_H) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(H2, _H);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(H2);

  function H2() {
    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, H2);

    return _super.apply(this, arguments);
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(H2, [{
    key: "getClassName",
    value: function getClassName() {
      return "at-article__h2";
    }
  }]);

  return H2;
}(_h1__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);



/***/ }),

/***/ "./src/common/text/h3.jsx":
/*!********************************!*\
  !*** ./src/common/text/h3.jsx ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return H3; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _h1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./h1 */ "./src/common/text/h1.jsx");







var H3 = /*#__PURE__*/function (_H) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(H3, _H);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(H3);

  function H3() {
    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, H3);

    return _super.apply(this, arguments);
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(H3, [{
    key: "getClassName",
    value: function getClassName() {
      return "at-article__h3";
    }
  }]);

  return H3;
}(_h1__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);



/***/ }),

/***/ "./src/common/text/info.jsx":
/*!**********************************!*\
  !*** ./src/common/text/info.jsx ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Info; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paragraph */ "./src/common/text/paragraph.jsx");







var Info = /*#__PURE__*/function (_P) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Info, _P);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Info);

  function Info() {
    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Info);

    return _super.apply(this, arguments);
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Info, [{
    key: "getClassName",
    value: function getClassName() {
      return "at-article__info";
    }
  }]);

  return Info;
}(_paragraph__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);



/***/ }),

/***/ "./src/common/text/paragraph.jsx":
/*!***************************************!*\
  !*** ./src/common/text/paragraph.jsx ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _applicationComponent_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../applicationComponent.view */ "./src/common/applicationComponent.view.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










var P = /*#__PURE__*/function (_ApplicationComponent) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(P, _ApplicationComponent);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(P);

  function P() {
    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, P);

    return _super.apply(this, arguments);
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(P, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$companyCo = _this$props.companyColor,
          companyColor = _this$props$companyCo === void 0 ? false : _this$props$companyCo,
          style = _this$props.style;
      var color = companyColor ? this.appStyle.secondary : this.getColor();
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
        className: this.getClassName(),
        style: Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
          margin: 0,
          color: color,
          whiteSpace: "pre-wrap"
        }, style),
        children: children
      });
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return "";
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      return "at-article__p";
    }
  }]);

  return P;
}(_applicationComponent_view__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);



/***/ }),

/***/ "./src/pages/category/category.scss":
/*!******************************************!*\
  !*** ./src/pages/category/category.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/category/category.view.jsx":
/*!**********************************************!*\
  !*** ./src/pages/category/category.view.jsx ***!
  \**********************************************/
/*! exports provided: default, CategoryNav, TabsPaneContainer, ItemList, ListingTypeTag, sortSequence, TopSegment */
/*! exports used: ListingTypeTag, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CategoryView; });
/* unused harmony export CategoryNav */
/* unused harmony export TabsPaneContainer */
/* unused harmony export ItemList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingTypeTag; });
/* unused harmony export sortSequence */
/* unused harmony export TopSegment */
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _category_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category.scss */ "./src/pages/category/category.scss");
/* harmony import */ var _category_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_category_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_text_h3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/text/h3 */ "./src/common/text/h3.jsx");
/* harmony import */ var _common_text_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/text/info */ "./src/common/text/info.jsx");
/* harmony import */ var _common_flexView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/flexView */ "./src/common/flexView.jsx");
/* harmony import */ var _common_applicationTag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/applicationTag */ "./src/common/applicationTag.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












function CategoryView(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_common_flexView__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_3__[/* AtSearchBar */ "f"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_common_flexView__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      style: {
        marginLeft: 5,
        marginRight: 5
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(TopSegment, Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props))
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_common_flexView__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      style: {
        marginTop: 5
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(CategoryNav, Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props))
    })]
  });
}
function CategoryNav(props) {
  var currentCategoryIndex = props.currentCategoryIndex,
      categories = props.categories,
      onClickCategory = props.onClickCategory;

  var prepareTabList = function prepareTabList(categories) {
    categories = categories.sort(function (category1, category2) {
      return category1.sequence - category2.sequence;
    });
    return categories.map(function (category) {
      return {
        title: category.name
      };
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_3__[/* AtTabs */ "h"], {
    current: currentCategoryIndex,
    height: "600px",
    onClick: onClickCategory,
    scroll: true,
    tabDirection: "vertical",
    tabList: prepareTabList(categories),
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(TabsPaneContainer, Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props))
  });
}
function TabsPaneContainer(props) {
  var currentCategoryIndex = props.currentCategoryIndex,
      categoriesItems = props.categoriesItems,
      onClickItem = props.onClickItem;
  return categoriesItems.map(function (categoryItems, index) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_3__[/* AtTabsPane */ "i"], {
      current: currentCategoryIndex,
      tabDirection: "vertical",
      index: index,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(ItemList, {
        items: categoryItems,
        onClickItem: onClickItem
      })
    }, "TabsPaneContainer" + index);
  });
}
function ItemList(props) {
  var items = props.items,
      onClickItem = props.onClickItem;
  var ItemCards = sortSequence(items).map(function (item, index) {
    var address = item.address,
        area = item.area,
        cost = item.cost,
        description = item.description,
        imageUrls = item.imageUrls,
        listingType = item.listingType,
        livingRoom = item.livingRoom,
        name = item.name,
        restroom = item.restroom,
        room = item.room;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_common_flexView__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      onClick: function onClick() {
        return onClickItem(item);
      },
      style: {
        alignItem: "center",
        flexDirection: "row",
        marginBottom: 15
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "c"], {
        src: imageUrls[0],
        style: {
          borderRadius: 5,
          height: 75,
          width: 75
        }
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_common_flexView__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        style: {
          marginLeft: 15,
          maxWidth: 200
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_common_flexView__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
          style: {
            flexDirection: "row",
            alignItems: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(ListingTypeTag, {
            listingType: listingType
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_common_text_h3__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
            style: {
              marginLeft: 8
            },
            children: name
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_common_text_info__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
          children: "".concat(area, "\u5E73\u65B9\u544E ").concat(room, "\u623F").concat(livingRoom, "\u5EF3")
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_common_text_info__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
          children: address
        })]
      })]
    }, ItemList + index);
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: ItemCards
  });
}
function ListingTypeTag(_ref) {
  var listingType = _ref.listingType;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_common_applicationTag__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    color: listingType === "RENT" ? "blue" : "green",
    children: listingType === "RENT" ? "出租" : "出售"
  });
}
function sortSequence(objects) {
  return objects.sort(function (object1, object2) {
    return object1.sequence - object2.sequence;
  });
}
function TopSegment(props) {
  var currentSegmentTypeIndex = props.currentSegmentTypeIndex,
      onChangeSegmentType = props.onChangeSegmentType;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_3__[/* AtSegmentedControl */ "g"], {
    values: ["出租", "買賣"],
    onClick: onChangeSegmentType,
    current: currentSegmentTypeIndex
  });
}

/***/ }),

/***/ "./src/pages/landingPage/landingPage.view.jsx":
/*!****************************************************!*\
  !*** ./src/pages/landingPage/landingPage.view.jsx ***!
  \****************************************************/
/*! exports provided: default, BottomListing, ButtonRow, CardContent, CategoryListing, DefaultCardContent, ItemListing, OneRowBanners */
/*! exports used: CardContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LandingPageView; });
/* unused harmony export BottomListing */
/* unused harmony export ButtonRow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardContent; });
/* unused harmony export CategoryListing */
/* unused harmony export DefaultCardContent */
/* unused harmony export ItemListing */
/* unused harmony export OneRowBanners */
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _common_applicationComponent_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/applicationComponent.view */ "./src/common/applicationComponent.view.js");
/* harmony import */ var _common_imageCarousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/imageCarousel */ "./src/common/imageCarousel.jsx");
/* harmony import */ var _common_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/card */ "./src/common/card.jsx");
/* harmony import */ var _common_circularButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/circularButton */ "./src/common/circularButton.jsx");
/* harmony import */ var _common_text_info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/text/info */ "./src/common/text/info.jsx");
/* harmony import */ var _common_text_h2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/text/h2 */ "./src/common/text/h2.jsx");
/* harmony import */ var _common_flexView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/flexView */ "./src/common/flexView.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);

















var LandingPageView = /*#__PURE__*/function (_ApplicationComponent) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(LandingPageView, _ApplicationComponent);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(LandingPageView);

  function LandingPageView() {
    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, LandingPageView);

    return _super.apply(this, arguments);
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(LandingPageView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          categories = _this$props.categories,
          items = _this$props.items,
          landingPage = _this$props.landingPage,
          onClickItem = _this$props.onClickItem,
          onClickMenuButton = _this$props.onClickMenuButton;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(this.Wrapper, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_common_flexView__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_common_imageCarousel__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
            imageUrls: landingPage.carousel.map(function (image) {
              return image.url;
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(DefaultCardContent, {
            banners: landingPage.banners,
            bottomList: landingPage.bottomList,
            mainMenuButtons: landingPage.mainMenuButtons,
            categories: categories,
            items: items,
            onClickItem: onClickItem,
            onClickMenuButton: onClickMenuButton
          })]
        })
      });
    }
  }]);

  return LandingPageView;
}(_common_applicationComponent_view__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);


function BottomListing(_ref) {
  var bottomList = _ref.bottomList,
      categories = _ref.categories,
      items = _ref.items,
      onClickItem = _ref.onClickItem;
  return bottomList.map(function (listItem) {
    if (listItem.type === "category") {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(CategoryListing, {
        categories: categories,
        categoryId: listItem.id,
        items: items,
        onClickItem: onClickItem
      });
    } else if (listItem.type === "item") {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(ItemListing, {
        itemId: listItem.id
      });
    }
  });
}
function ButtonRow(props) {
  var mainMenuButtons = props.mainMenuButtons,
      onClickMenuButton = props.onClickMenuButton;
  var buttons = mainMenuButtons.map(function (button, index) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_common_flexView__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
      style: {
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: 10
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_common_circularButton__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        color: button.color,
        onClick: function onClick() {
          return onClickMenuButton(150);
        },
        url: button.url
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_common_text_info__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        style: {
          color: "#5F5F5F",
          marginTop: 6
        },
        children: button.name
      })]
    }, "landing_page_button_row" + index);
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
    className: "at-row at-row__justify--around",
    children: buttons
  });
}
function CardContent(props) {
  var _props$backgroundColo = props.backgroundColor,
      backgroundColor = _props$backgroundColo === void 0 ? "#FFFFFF" : _props$backgroundColo,
      children = props.children,
      style = props.style;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_common_card__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    style: Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      backgroundColor: backgroundColor,
      // marginTop: -25, comment out this since we are not able to to control the dot height of taro ui carousel
      paddingLeft: 15,
      paddingRight: 15,
      zIndex: 10
    }, style),
    children: children
  });
}
function CategoryListing(_ref2) {
  var categories = _ref2.categories,
      categoryId = _ref2.categoryId,
      _ref2$imageHeight = _ref2.imageHeight,
      imageHeight = _ref2$imageHeight === void 0 ? 180 : _ref2$imageHeight,
      _ref2$imageWidth = _ref2.imageWidth,
      imageWidth = _ref2$imageWidth === void 0 ? 250 : _ref2$imageWidth,
      items = _ref2.items,
      onClickItem = _ref2.onClickItem;
  var displayCategory = categories.find(function (category) {
    return category.id === categoryId;
  });
  var itemsCard = items.filter(function (item) {
    for (var index = 0; index < item.categories.length; index++) {
      var currentCategoryId = item.categories[index].id;

      if (currentCategoryId === categoryId) {
        return true;
      }
    }

    return false;
  }).map(function (item, index) {
    var name = item.name;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_common_flexView__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
      onClick: function onClick() {
        return onClickItem(item);
      },
      style: {
        marginRight: 25
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "c"], {
        mode: "aspectFill",
        src: item.imageUrls[0],
        style: {
          borderRadius: 10,
          height: imageHeight,
          width: imageWidth
        }
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_common_text_info__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        children: name ? name : ""
      })]
    }, "CategoryListing" + index);
  });
  var name = "";

  if (displayCategory) {
    name = displayCategory.name;
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_common_flexView__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_common_text_h2__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
      children: name ? name : "分類"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* ScrollView */ "j"], {
      scrollX: true,
      scrollWithAnimation: true,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_common_flexView__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        style: {
          display: "flex",
          flexDirection: "row"
        },
        children: itemsCard
      })
    })]
  });
}
function DefaultCardContent(_ref3) {
  var banners = _ref3.banners,
      bottomList = _ref3.bottomList,
      categories = _ref3.categories,
      items = _ref3.items,
      mainMenuButtons = _ref3.mainMenuButtons,
      onClickItem = _ref3.onClickItem,
      onClickMenuButton = _ref3.onClickMenuButton;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(CardContent, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(ButtonRow, {
      mainMenuButtons: mainMenuButtons,
      onClickMenuButton: onClickMenuButton
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(BottomListing, {
      bottomList: bottomList,
      categories: categories,
      items: items,
      onClickItem: onClickItem
    })]
  });
}
function ItemListing(_ref4) {
  var itemId = _ref4.itemId;
  return null;
}
function OneRowBanners(_ref5) {
  var banners = _ref5.banners;
  return banners.map(function (banner, index) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* Image */ "c"], {
      src: banner.url,
      style: {
        borderRadius: 15,
        maxHeight: 100,
        width: "100%"
      }
    }, OneRowBanners + index);
  });
}

/***/ }),

/***/ "./src/routes/applicationRoutes.js":
/*!*****************************************!*\
  !*** ./src/routes/applicationRoutes.js ***!
  \*****************************************/
/*! exports provided: CATEGORY, ITEM_DETAIL */
/*! exports used: CATEGORY, ITEM_DETAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ITEM_DETAIL; });
var CATEGORY = "/pages/category/category";
var ITEM_DETAIL = "/pages/itemDetail/itemDetail";

/***/ }),

/***/ "./src/service/appStateService.js":
/*!****************************************!*\
  !*** ./src/service/appStateService.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStateService; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./src/service/service.js");





var AppStateService = /*#__PURE__*/function () {
  function AppStateService(appState, serviceExecutor) {
    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AppStateService);

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "appState", void 0);

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "serviceExecutor", void 0);

    this.appState = appState;
    this.serviceExecutor = serviceExecutor;
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AppStateService, [{
    key: "getCategories",
    value: function getCategories(companyId) {
      var _this = this;

      var _this$appState$catego = this.appState.category,
          categories = _this$appState$catego.categories,
          dirty = _this$appState$catego.dirty,
          setCategories = _this$appState$catego.setCategories;
      return new Promise(function (resolve, reject) {
        if (dirty) {
          _this.serviceExecutor.execute(Object(_service__WEBPACK_IMPORTED_MODULE_3__[/* GET_COMPANY_CATEGORIES */ "b"])(companyId)).then(function (categoriesResponse) {
            setCategories(categoriesResponse);
            return resolve(categoriesResponse);
          });
        } else {
          return resolve(categories);
        }
      });
    }
  }, {
    key: "getCompany",
    value: function getCompany(companyId) {
      var _this2 = this;

      var _this$appState$compan = this.appState.company,
          companyInfo = _this$appState$compan.companyInfo,
          dirty = _this$appState$compan.dirty,
          setCompany = _this$appState$compan.setCompany;
      return new Promise(function (resolve, reject) {
        if (dirty) {
          _this2.serviceExecutor.execute(Object(_service__WEBPACK_IMPORTED_MODULE_3__[/* GET_COMPANY */ "a"])(companyId)).then(function (companyInfo) {
            setCompany(companyInfo);
            return resolve(companyInfo);
          });
        } else {
          return resolve(companyInfo);
        }
      });
    }
  }, {
    key: "getCompanyCustomise",
    value: function getCompanyCustomise(companyId) {
      var _this3 = this;

      var _this$appState$compan2 = this.appState.companyCustomise,
          dirty = _this$appState$compan2.dirty,
          setCompanyCustomise = _this$appState$compan2.setCompanyCustomise;
      return new Promise(function (resolve, reject) {
        if (dirty) {
          _this3.serviceExecutor.execute(Object(_service__WEBPACK_IMPORTED_MODULE_3__[/* GET_COMPANY_CUSTOMISE */ "c"])(companyId)).then(function (result) {
            var content = JSON.parse(result.content);
            setCompanyCustomise(content);
            return resolve(content);
          });
        } else {
          resolve(_this3.appState.companyCustomise);
        }
      });
    }
  }, {
    key: "getItems",
    value: function getItems(companyId) {
      var _this4 = this;

      var _this$appState$item = this.appState.item,
          dirty = _this$appState$item.dirty,
          items = _this$appState$item.items,
          setItems = _this$appState$item.setItems;
      return new Promise(function (resolve, reject) {
        if (dirty) {
          _this4.serviceExecutor.execute(Object(_service__WEBPACK_IMPORTED_MODULE_3__[/* GET_ITEMS */ "e"])(companyId)).then(function (items) {
            setItems(items);
            return resolve(items);
          });
        } else {
          return resolve(items);
        }
      });
    }
  }]);

  return AppStateService;
}();



/***/ }),

/***/ "./src/service/service.js":
/*!********************************!*\
  !*** ./src/service/service.js ***!
  \********************************/
/*! exports provided: GET_COMPANY_CATEGORIES, GET_COMPANY, GET_COMPANY_CUSTOMISE, GET_ITEM, GET_ITEMS */
/*! exports used: GET_COMPANY, GET_COMPANY_CATEGORIES, GET_COMPANY_CUSTOMISE, GET_ITEM, GET_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_COMPANY_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_COMPANY_CUSTOMISE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_ITEMS; });
var PUBLIC_CATEGORY_SERVICE = "/public/v1/category";
var PUBLIC_COMPANY_CUSTOMISE_SERVICE = "/public/v1/company_customise";
var PUBLIC_COMPANY_SERVICE = "/public/v1/company";
var PUBLIC_ITEM_SERVICE = "/public/v1/item"; // Category

function GET_COMPANY_CATEGORIES(companyId) {
  return {
    url: "".concat(PUBLIC_CATEGORY_SERVICE, "/categories?companyId=").concat(companyId),
    method: "GET"
  };
} // Company

function GET_COMPANY(companyId) {
  return {
    url: "".concat(PUBLIC_COMPANY_SERVICE, "?companyId=").concat(companyId),
    method: "GET"
  };
} // Company Customise

function GET_COMPANY_CUSTOMISE(companyId) {
  return {
    url: "".concat(PUBLIC_COMPANY_CUSTOMISE_SERVICE, "?companyId=").concat(companyId),
    method: "GET"
  };
} // Item

function GET_ITEM(companyId, itemId) {
  return {
    url: "".concat(PUBLIC_ITEM_SERVICE, "?companyId=").concat(companyId, "&itemId=").concat(itemId),
    method: "GET"
  };
}
function GET_ITEMS(companyId) {
  return {
    url: "".concat(PUBLIC_ITEM_SERVICE, "/items?companyId=").concat(companyId),
    method: "GET"
  };
}

/***/ }),

/***/ "./src/service/serviceExecutor.js":
/*!****************************************!*\
  !*** ./src/service/serviceExecutor.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceExecutor; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);




var ServiceExecutor = /*#__PURE__*/function () {
  function ServiceExecutor(host) {
    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ServiceExecutor);

    this.host = host;
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ServiceExecutor, [{
    key: "execute",
    value: function execute(service) {
      var _this = this;

      var url = service.url,
          method = service.method;
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.request({
        url: this.host + url,
        method: method
      }).then(function (rawResponse) {
        return _this.processServerResponse(rawResponse);
      }).catch(function (exception) {
        console.log(exception);
      });
    }
  }, {
    key: "processServerResponse",
    value: function processServerResponse(rawResponse) {
      var statusCode = rawResponse.statusCode;

      if (statusCode >= 200 && statusCode < 300) {
        return this.process2xxResponse(rawResponse);
      } else if (statusCode >= 400 && statusCode < 500) {} else if (statusCode >= 500) {} else {}
    }
  }, {
    key: "process2xxResponse",
    value: function process2xxResponse(rawResponse) {
      var statusCode = rawResponse.statusCode;

      if (statusCode === 200) {
        return rawResponse.data;
      }
    }
  }, {
    key: "process3xxResponse",
    value: function process3xxResponse(rawResponse) {}
  }, {
    key: "process4xxResponse",
    value: function process4xxResponse(rawResponse) {}
  }, {
    key: "process5xxResponse",
    value: function process5xxResponse(rawResponse) {}
  }]);

  return ServiceExecutor;
}();



/***/ })

}]);
//# sourceMappingURL=common.js.map