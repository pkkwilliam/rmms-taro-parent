(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/index/index.jsx":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/index/index.jsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _common_applicationComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/applicationComponent */ "./src/common/applicationComponent.js");
/* harmony import */ var taro_ui_dist_style_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! taro-ui/dist/style/index.scss */ "./node_modules/taro-ui/dist/style/index.scss");
/* harmony import */ var taro_ui_dist_style_index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _landingPage_landingPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../landingPage/landingPage */ "./src/pages/landingPage/landingPage.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);















var Index = /*#__PURE__*/function (_ApplicationComponent) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Index, _ApplicationComponent);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Index);

  function Index() {
    var _this;

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "state", {
      buttonText: "",
      company: {
        companyName: undefined
      }
    });

    return _this;
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Index, [{
    key: "componentWillMount",
    value: // onLoad(options) {
    //   const { companyId } = options;
    //   // get user info
    //   wx.getUserInfo({
    //     desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //     success: (res) => {
    //       console.log(res);
    //     },
    //   });
    //   wx.checkSession({
    //     success() {
    //       //session_key 未过期，并且在本生命周期一直有效
    //       console.log("good");
    //     },
    //     fail() {
    //       // session_key 已经失效，需要重新执行登录流程
    //       console.log("bad");
    //       wx.login({
    //         success(result) {
    //           console.log("result", result);
    //         },
    //         fail() {
    //           console.log("bb");
    //         },
    //       }); //重新登录
    //     },
    //   });
    //   this.appStateService.getCompany(companyId).then((result) => {
    //     wx.setNavigationBarTitle({
    //       title: this.appState.company.name,
    //     });
    //   });
    //   this.appStateService.getCompanyCustomise(companyId);
    // }
    function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "q"], {
        className: "index",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_landingPage_landingPage__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, this.props))
      });
    }
  }]);

  return Index;
}(_common_applicationComponent__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);



/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.jsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/index/index.jsx");


var config = {"navigationBarTitleText":"源代碼RMMS系統展示"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/landingPage/landingPage.jsx":
/*!***********************************************!*\
  !*** ./src/pages/landingPage/landingPage.jsx ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_applicationComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/applicationComponent */ "./src/common/applicationComponent.js");
/* harmony import */ var _landingPage_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./landingPage.view */ "./src/pages/landingPage/landingPage.view.jsx");
/* harmony import */ var _routes_applicationRoutes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../routes/applicationRoutes */ "./src/routes/applicationRoutes.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);














var LandingPage = /*#__PURE__*/function (_ApplicationComponent) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(LandingPage, _ApplicationComponent);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(LandingPage);

  function LandingPage() {
    var _this;

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, LandingPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "state", Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _this.state));

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "onClickMenuButton", function (categoryId) {
      _this.goToTabBar(_routes_applicationRoutes__WEBPACK_IMPORTED_MODULE_11__[/* CATEGORY */ "a"], [{
        key: "categoryId",
        value: categoryId
      }]);
    });

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "onClickItem", function (item) {
      _this.goTo(_routes_applicationRoutes__WEBPACK_IMPORTED_MODULE_11__[/* ITEM_DETAIL */ "b"], [{
        key: "itemId",
        value: item.id
      }]);
    });

    return _this;
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(LandingPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.getSystemInfo().then(function (devivceInfo) {
        return _this2.appState.deviceInfo.setDeviceInfo(devivceInfo);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$appState = this.appState,
          category = _this$appState.category,
          companyCustomise = _this$appState.companyCustomise,
          item = _this$appState.item;
      var landingPage = companyCustomise.landingPage;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_landingPage_view__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"], Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        categories: category.categories,
        items: item.items,
        landingPage: landingPage,
        onClickItem: this.onClickItem,
        onClickMenuButton: this.onClickMenuButton
      }, this.state));
    }
  }]);

  return LandingPage;
}(_common_applicationComponent__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);



/***/ })

},[["./src/pages/index/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map