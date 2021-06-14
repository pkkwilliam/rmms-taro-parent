(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/category/category"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/category/category.jsx":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/category/category.jsx ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_applicationComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/applicationComponent */ "./src/common/applicationComponent.js");
/* harmony import */ var _category_view__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./category.view */ "./src/pages/category/category.view.jsx");
/* harmony import */ var _routes_applicationRoutes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../routes/applicationRoutes */ "./src/routes/applicationRoutes.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);















var SEGMENT_TYPE = [{
  label: "出租",
  value: "RENT"
}, {
  label: "買賣",
  value: "SELL"
}];

var Category = /*#__PURE__*/function (_ApplicationComponent) {
  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Category, _ApplicationComponent);

  var _super = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Category);

  function Category() {
    var _this;

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, Category);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "state", {
      currentCategoryIndex: 0,
      currentSegmentTypeIndex: 0
    });

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "onChangeSegmentType", function (segmentType) {
      _this.setState({
        currentSegmentTypeIndex: segmentType
      });
    });

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "onClickCategory", function (categoryIndex) {
      _this.setState({
        currentCategoryIndex: categoryIndex
      });
    });

    Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "onClickItem", function (item) {
      _this.goTo(_routes_applicationRoutes__WEBPACK_IMPORTED_MODULE_13__[/* ITEM_DETAIL */ "b"], [{
        key: "itemId",
        value: item.id
      }]);
    });

    return _this;
  }

  Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Category, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])( /*#__PURE__*/_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var currentCategoryIndex;
        return _Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                currentCategoryIndex = this.appState.shortTermMemory.currentCategoryIndex;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$appState = this.appState,
          category = _this$appState.category,
          item = _this$appState.item;
      var currentSegmentTypeIndex = this.state.currentSegmentTypeIndex;
      var sortedItems = this.sortItems(item.items, currentSegmentTypeIndex);
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_category_view__WEBPACK_IMPORTED_MODULE_12__[/* default */ "b"], Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
        categories: category.categories,
        categoriesItems: this.transfromItemsToNav(sortedItems),
        onChangeSegmentType: this.onChangeSegmentType,
        onClickCategory: this.onClickCategory,
        onClickItem: this.onClickItem
      }, this.state));
    }
  }, {
    key: "sortItems",
    value: function sortItems(items, currentSegmentTypeIndex) {
      var segmentTypeValue = SEGMENT_TYPE[currentSegmentTypeIndex].value;
      return items.filter(function (item) {
        return item.listingType === segmentTypeValue;
      });
    }
  }, {
    key: "transfromItemsToNav",
    value: function transfromItemsToNav(items) {
      var navItems = [];
      items.forEach(function (item) {
        item.categories.forEach(function (category) {
          var sequence = category.sequence;

          if (!navItems[sequence]) {
            navItems[sequence] = [];
          }

          navItems[sequence] = [].concat(Object(_Users_pkkwilliam_Desktop_bitcode_reusable_merchant_management_rmms_taro_parent_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(navItems[sequence]), [item]);
        });
      });
      return navItems;
    }
  }]);

  return Category;
}(_common_applicationComponent__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]);



/***/ }),

/***/ "./src/pages/category/category.jsx":
/*!*****************************************!*\
  !*** ./src/pages/category/category.jsx ***!
  \*****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_category_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./category.jsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/category/category.jsx");


var config = {"navigationBarTitleText":"源代碼RMMS系統展示"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_category_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/category/category', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/category/category.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=category.js.map