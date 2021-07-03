"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _applicationComponent = require("../../common/applicationComponent");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

var _category = require("./category.view");

var _category2 = _interopRequireDefault(_category);

var _applicationRoutes = require("../../routes/applicationRoutes");

var _categorySegment = require("./categorySegment");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_ApplicationComponent) {
  _inherits(Category, _ApplicationComponent);

  function Category() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Category);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Category.__proto__ || Object.getPrototypeOf(Category)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      searchBar: {
        text: undefined,
        useSearchFilter: false
      }
    }, _this.onChangeSegmentType = function (segmentTypeIndex) {
      _this.appState.shortTermMemory.setShortTermMemory({
        currentSegmentTypeIndex: segmentTypeIndex
      });
    }, _this.onChangeSearchBarText = function (text) {
      _this.setState({
        searchBar: {
          text: text
        }
      });
    }, _this.onClickCategory = function (categoryIndex) {
      _this.setState({
        currentCategoryIndex: categoryIndex
      });
    }, _this.onClickItem = function (item) {
      _this.goTo(_applicationRoutes.ITEM_DETAIL, [{ key: "itemId", value: item.id }]);
    }, _this.onClickSearchBarClear = function () {
      _this.setState({
        searchBar: {
          text: undefined,
          useSearchFilter: true
        }
      });
    }, _this.onClickSearchBarSubmit = function () {
      _this.setState(function (state) {
        return {
          searchBar: _extends({}, state.searchBar, {
            useSearchFilter: true
          })
        };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Category, [{
    key: "render",
    value: function render() {
      var currentSegmentTypeIndex = this.appState.shortTermMemory.currentSegmentTypeIndex;
      var _appState = this.appState,
          category = _appState.category,
          companyCustomise = _appState.companyCustomise,
          item = _appState.item;

      var sortedItems = this.sortItems(item.items, currentSegmentTypeIndex);
      return _react2.default.createElement(_category2.default, _extends({
        categories: category.categories,
        categoriesItems: this.transfromItemsToNav(sortedItems),
        currentSegmentTypeIndex: currentSegmentTypeIndex,
        commonLabel: companyCustomise.label.common,
        label: companyCustomise.label.category,
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
      var _state$searchBar = this.state.searchBar,
          text = _state$searchBar.text,
          useSearchFilter = _state$searchBar.useSearchFilter;

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
          navItems[sequence] = [].concat(_toConsumableArray(navItems[sequence]), [item]);
        });
      });
      return navItems;
    }
  }]);

  return Category;
}(_applicationComponent2.default);

exports.default = Category;