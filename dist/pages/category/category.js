"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper"));

var _defineProperty2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _applicationComponent = _interopRequireDefault(require("../../common/applicationComponent"));

var _category = _interopRequireDefault(require("./category.view"));

var _applicationRoutes = require("../../routes/applicationRoutes");

var _categorySegment = require("./categorySegment");

var _jsxRuntime = require("react/jsx-runtime");

var Category = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(Category, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(Category);

  function Category() {
    var _this;

    (0, _classCallCheck2.default)(this, Category);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      searchBar: {
        text: undefined,
        useSearchFilter: false
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChangeSegmentType", function (segmentTypeIndex) {
      _this.appState.shortTermMemory.setShortTermMemory({
        currentSegmentTypeIndex: segmentTypeIndex
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChangeSearchBarText", function (text) {
      _this.setState({
        searchBar: {
          text: text
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClickCategory", function (categoryIndex) {
      _this.setState({
        currentCategoryIndex: categoryIndex
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClickItem", function (item) {
      _this.goTo(_applicationRoutes.ITEM_DETAIL, [{
        key: "itemId",
        value: item.id
      }]);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClickSearchBarClear", function () {
      _this.setState({
        searchBar: {
          text: undefined,
          useSearchFilter: true
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClickSearchBarSubmit", function () {
      _this.setState(function (state) {
        return {
          searchBar: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state.searchBar), {}, {
            useSearchFilter: true
          })
        };
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Category, [{
    key: "render",
    value: function render() {
      var currentSegmentTypeIndex = this.appState.shortTermMemory.currentSegmentTypeIndex;
      var _this$appState = this.appState,
          category = _this$appState.category,
          item = _this$appState.item;
      var sortedItems = this.sortItems(item.items, currentSegmentTypeIndex);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_category.default, (0, _objectSpread2.default)({
        categories: category.categories,
        categoriesItems: this.transfromItemsToNav(sortedItems),
        currentSegmentTypeIndex: currentSegmentTypeIndex,
        onChangeSegmentType: this.onChangeSegmentType,
        onChangeSearchBarText: this.onChangeSearchBarText,
        onClickCategory: this.onClickCategory,
        onClickItem: this.onClickItem,
        onClickSearchBarClear: this.onClickSearchBarClear,
        onClickSearchBarSubmit: this.onClickSearchBarSubmit
      }, this.state));
    }
  }, {
    key: "sortItems",
    value: function sortItems(items, currentSegmentTypeIndex) {
      var _this$state$searchBar = this.state.searchBar,
          text = _this$state$searchBar.text,
          useSearchFilter = _this$state$searchBar.useSearchFilter;

      if (text && useSearchFilter) {
        items = items.filter(function (item) {
          return item.name.includes(text);
        });
      }

      var segmentTypeValue = _categorySegment.SEGMENT_TYPES[currentSegmentTypeIndex].value;
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

          navItems[sequence] = [].concat((0, _toConsumableArray2.default)(navItems[sequence]), [item]);
        });
      });
      return navItems;
    }
  }]);
  return Category;
}(_applicationComponent.default);

exports.default = Category;