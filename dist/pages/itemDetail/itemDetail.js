(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/itemDetail/itemDetail"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/itemDetail/itemDetail.jsx":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/itemDetail/itemDetail.jsx ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetail; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_applicationComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/applicationComponent */ "./src/common/applicationComponent.js");
/* harmony import */ var _itemDetail_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./itemDetail.view */ "./src/pages/itemDetail/itemDetail.view.jsx");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/service */ "./src/service/service.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













var ItemDetail = /*#__PURE__*/function (_ApplicationComponent) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ItemDetail, _ApplicationComponent);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(ItemDetail);

  function ItemDetail() {
    var _this;

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, ItemDetail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "state", Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _this.state), {}, {
      itemDetail: {
        imageUrls: []
      }
    }));

    return _this;
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(ItemDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var companyId = this.appState.company.id;

      var _this$getRouterParams = this.getRouterParams(),
          itemId = _this$getRouterParams.itemId;

      this.getLocalItemDetail(companyId, itemId);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_itemDetail_view__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, this.state));
    }
  }, {
    key: "getLocalItemDetail",
    value: function getLocalItemDetail(companyId, itemId) {
      var _this2 = this;

      this.appStateService.getItems().then(function (items) {
        return items.map(function (item) {
          if (item.id == itemId) {
            _this2.setState({
              itemDetail: item
            });
          }
        });
      });
    }
  }, {
    key: "getRemoteItemDetail",
    value: function getRemoteItemDetail(companyId, itemId) {
      var _this3 = this;

      this.serviceExecutor.execute(Object(_service_service__WEBPACK_IMPORTED_MODULE_10__[/* GET_ITEM */ "d"])(companyId, itemId)).then(function (itemDetail) {
        return _this3.setState({
          itemDetail: itemDetail
        });
      });
    }
  }]);

  return ItemDetail;
}(_common_applicationComponent__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);



/***/ }),

/***/ "./src/common/applicationButton.jsx":
/*!******************************************!*\
  !*** ./src/common/applicationButton.jsx ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationButton; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _applicationComponent_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./applicationComponent.view */ "./src/common/applicationComponent.view.js");
/* harmony import */ var _text_h2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./text/h2 */ "./src/common/text/h2.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











var ApplicationButton = /*#__PURE__*/function (_ApplicationComponent) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ApplicationButton, _ApplicationComponent);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ApplicationButton);

  function ApplicationButton() {
    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, ApplicationButton);

    return _super.apply(this, arguments);
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(ApplicationButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          style = _this$props.style;
      var _this$appStyle = this.appStyle,
          primary = _this$appStyle.primary,
          secondary = _this$appStyle.secondary;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_6__[/* AtButton */ "b"], Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        circle: true,
        customStyle: Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
          alignItems: "center",
          backgroundColor: primary,
          borderColor: secondary,
          justifyContent: "center",
          width: "100%"
        }, style)
      }, this.props), {}, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_text_h2__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
          style: {
            color: "white"
          },
          children: children
        })
      }));
    }
  }]);

  return ApplicationButton;
}(_applicationComponent_view__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);



/***/ }),

/***/ "./src/pages/itemDetail/itemDetail.jsx":
/*!*********************************************!*\
  !*** ./src/pages/itemDetail/itemDetail.jsx ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_itemDetail_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./itemDetail.jsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/itemDetail/itemDetail.jsx");


var config = {"navigationBarTitleText":"產品詳細"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_itemDetail_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/itemDetail/itemDetail', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/itemDetail/itemDetail.scss":
/*!**********************************************!*\
  !*** ./src/pages/itemDetail/itemDetail.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/itemDetail/itemDetail.view.jsx":
/*!**************************************************!*\
  !*** ./src/pages/itemDetail/itemDetail.view.jsx ***!
  \**************************************************/
/*! exports provided: default, Content, Description, ItemAbstractHeader, ItemAbstractHeaders, ItemHeader */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailView; });
/* unused harmony export Content */
/* unused harmony export Description */
/* unused harmony export ItemAbstractHeader */
/* unused harmony export ItemAbstractHeaders */
/* unused harmony export ItemHeader */
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _landingPage_landingPage_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../landingPage/landingPage.view */ "./src/pages/landingPage/landingPage.view.jsx");
/* harmony import */ var _category_category_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../category/category.view */ "./src/pages/category/category.view.jsx");
/* harmony import */ var _common_imageCarousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/imageCarousel */ "./src/common/imageCarousel.jsx");
/* harmony import */ var _common_text_h1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/text/h1 */ "./src/common/text/h1.jsx");
/* harmony import */ var _common_text_h3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/text/h3 */ "./src/common/text/h3.jsx");
/* harmony import */ var _common_text_paragraph__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/text/paragraph */ "./src/common/text/paragraph.jsx");
/* harmony import */ var _common_flexView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/flexView */ "./src/common/flexView.jsx");
/* harmony import */ var _common_applicationTag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/applicationTag */ "./src/common/applicationTag.jsx");
/* harmony import */ var _common_text_h2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/text/h2 */ "./src/common/text/h2.jsx");
/* harmony import */ var _common_applicationButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/applicationButton */ "./src/common/applicationButton.jsx");
/* harmony import */ var _common_text_info__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/text/info */ "./src/common/text/info.jsx");
/* harmony import */ var _common_applicationComponent_view__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/applicationComponent.view */ "./src/common/applicationComponent.view.js");
/* harmony import */ var _itemDetail_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./itemDetail.scss */ "./src/pages/itemDetail/itemDetail.scss");
/* harmony import */ var _itemDetail_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_itemDetail_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);
























var ItemDetailView = /*#__PURE__*/function (_ApplicationComponent) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ItemDetailView, _ApplicationComponent);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ItemDetailView);

  function ItemDetailView() {
    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, ItemDetailView);

    return _super.apply(this, arguments);
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(ItemDetailView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          itemDetail = _this$props.itemDetail,
          _this$props$onClickSu = _this$props.onClickSubmit,
          onClickSubmit = _this$props$onClickSu === void 0 ? function () {} : _this$props$onClickSu;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxs"])(this.Wrapper, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(_common_imageCarousel__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
          imageUrls: itemDetail.imageUrls
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(Content, Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
          onClickSubmit: onClickSubmit
        }, itemDetail))]
      });
    }
  }]);

  return ItemDetailView;
}(_common_applicationComponent_view__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"]);


function Content(props) {
  var address = props.address,
      area = props.area,
      createTime = props.createTime,
      _props$categories = props.categories,
      categories = _props$categories === void 0 ? [] : _props$categories,
      cost = props.cost,
      description = props.description,
      id = props.id,
      listingType = props.listingType,
      name = props.name,
      style = props.style,
      onClickSubmit = props.onClickSubmit;
  var tags = categories.map(function (category, index) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(_common_applicationTag__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
      color: "yellow",
      style: {
        marginRight: 5
      },
      children: category.name
    }, "ApplicationTag" + index);
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxs"])(_landingPage_landingPage_view__WEBPACK_IMPORTED_MODULE_8__[/* CardContent */ "a"], {
    style: {
      flex: 1,
      height: "100%",
      justifyContent: "space-between"
    },
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* ScrollView */ "j"], {
      scrollY: true,
      style: {
        height: 410
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(_common_flexView__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        style: {
          marginTop: 15
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(ItemHeader, {
          id: id,
          listingType: listingType,
          name: name
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(_common_flexView__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        style: Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
          flexDirection: "row"
        }, style),
        children: tags
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(_common_text_info__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        style: {
          marginTop: 5
        },
        children: address
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(ItemAbstractHeaders, Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props)), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(_common_flexView__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        style: {
          marginTop: 15
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(Description, {
          description: description
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(_common_flexView__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
      style: {
        flex: 1,
        justifyContent: "flex-end"
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(_common_applicationButton__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        block: true,
        onClick: onClickSubmit,
        style: {
          marginBottom: 15
        },
        children: "\u9810\u7D04\u7747\u6A13"
      })
    })]
  });
}
function Description(_ref) {
  var description = _ref.description;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxs"])(_common_flexView__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
      style: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 5
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtIcon */ "d"], {
        value: "tags"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(_common_text_h2__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
        style: {
          marginLeft: 5
        },
        children: "\u623F\u5C4B\u4FE1\u606F"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(_common_flexView__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
      style: {
        marginTop: 15
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(_common_text_h3__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        style: {
          lineHeight: "38px"
        },
        children: description
      })
    })]
  });
}
function ItemAbstractHeader(_ref2) {
  var header = _ref2.header,
      icon = _ref2.icon,
      iconColor = _ref2.iconColor,
      label = _ref2.label;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxs"])(_common_flexView__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
    style: {
      alignItems: "center"
    },
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxs"])(_common_flexView__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
      style: {
        alignItems: "center",
        flexDirection: "row"
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtIcon */ "d"], {
        color: iconColor,
        value: icon
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(_common_text_paragraph__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        style: {
          marginLeft: 5
        },
        children: label
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(_common_text_h3__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
      companyColor: true,
      style: {
        fontWeight: 600,
        marginTop: 8
      },
      children: header
    })]
  });
}
function ItemAbstractHeaders(props) {
  var area = props.area,
      cost = props.cost,
      livingRoom = props.livingRoom,
      restRoom = props.restRoom,
      room = props.room;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxs"])(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtDivider */ "c"], {
      height: 60
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxs"])(_common_flexView__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
      style: {
        flexDirection: "row",
        justifyContent: "space-around"
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(ItemAbstractHeader, {
        header: parseInt(cost).toLocaleString(),
        icon: "money",
        iconColor: "#85BB65",
        label: "\u50F9\u683C"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(ItemAbstractHeader, {
        header: "".concat(room, "\u623F").concat(livingRoom, "\u5EF3"),
        icon: "numbered-list",
        iconColor: "#d7471d",
        label: "\u4F48\u5C40"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(ItemAbstractHeader, {
        header: "".concat(area, "\u5E73\u65B9\u544E"),
        icon: "home",
        iconColor: "#007AFF",
        label: "\u9762\u7A4D"
      })]
    })]
  });
}
function ItemHeader(props) {
  var id = props.id,
      listingType = props.listingType,
      name = props.name;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxs"])(_common_flexView__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxs"])(_common_flexView__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
      style: {
        flexDirection: "row",
        justifyContent: "space-between"
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(_category_category_view__WEBPACK_IMPORTED_MODULE_9__[/* ListingTypeTag */ "a"], {
        listingType: listingType
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsxs"])(_common_applicationTag__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        color: "geekblue",
        children: ["ID: ", id]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__["jsx"])(_common_text_h1__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
      style: {
        marginTop: 5
      },
      children: name
    })]
  });
}

/***/ })

},[["./src/pages/itemDetail/itemDetail.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=itemDetail.js.map