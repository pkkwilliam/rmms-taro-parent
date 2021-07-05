"use strict";

var _interopRequireWildcard = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = Container;
exports.CategoryNav = CategoryNav;
exports.SearchBar = SearchBar;
exports.TabsPaneContainer = TabsPaneContainer;
exports.ItemList = ItemList;
exports.ListingTypeTag = ListingTypeTag;
exports.sortSequence = sortSequence;
exports.TopSegment = TopSegment;
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var _inherits2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@tarojs/components");

var _taroUi = require("taro-ui");

require("./category.scss");

var _h = _interopRequireDefault(require("../../common/text/h3"));

var _info = _interopRequireDefault(require("../../common/text/info"));

var _flexView = _interopRequireDefault(require("../../common/flexView"));

var _applicationTag = _interopRequireDefault(require("../../common/applicationTag"));

var _applicationComponent = _interopRequireWildcard(require("../../common/applicationComponent.view"));

var _jsxRuntime = require("react/jsx-runtime");

var CategoryView = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(CategoryView, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(CategoryView);

  function CategoryView() {
    (0, _classCallCheck2.default)(this, CategoryView);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(CategoryView, [{
    key: "getComponentLabelName",
    value: function getComponentLabelName() {
      return "categoryLabel";
    }
  }, {
    key: "getComponentStyleName",
    value: function getComponentStyleName() {
      return "categoryStyle";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(Container, (0, _objectSpread2.default)({
        appLabel: this.appLabel,
        categoryLabel: this.componentLabel
      }, this.props));
    }
  }]);
  return CategoryView;
}(_applicationComponent.default);

exports.default = CategoryView;

function Container(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(SearchBar, (0, _objectSpread2.default)({}, props)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_flexView.default, {
      style: {
        marginLeft: 5,
        marginRight: 5
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TopSegment, (0, _objectSpread2.default)({}, props))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_flexView.default, {
      style: {
        marginTop: 5
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CategoryNav, (0, _objectSpread2.default)({}, props))
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

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtTabs, {
    current: currentCategoryIndex,
    height: "600px",
    onClick: onClickCategory,
    scroll: true,
    tabDirection: "vertical",
    tabList: prepareTabList(categories),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TabsPaneContainer, (0, _objectSpread2.default)({}, props))
  });
}

function SearchBar(_ref) {
  var onChangeSearchBarText = _ref.onChangeSearchBarText,
      onClickSearchBarClear = _ref.onClickSearchBarClear,
      onClickSearchBarSubmit = _ref.onClickSearchBarSubmit,
      searchBar = _ref.searchBar;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtSearchBar, {
    onActionClick: onClickSearchBarSubmit,
    onClear: onClickSearchBarClear,
    onChange: function onChange(event) {
      return onChangeSearchBarText(event);
    },
    showActionButton: false,
    value: searchBar.text
  });
}

function TabsPaneContainer(props) {
  var currentCategoryIndex = props.currentCategoryIndex,
      categoriesItems = props.categoriesItems;
  return categoriesItems.map(function (categoryItems, index) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtTabsPane, {
      current: currentCategoryIndex,
      tabDirection: "vertical",
      index: index,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemList, (0, _objectSpread2.default)({
        items: categoryItems
      }, props))
    }, "TabsPaneContainer" + index);
  });
}

function ItemList(props) {
  var items = props.items,
      categoryLabel = props.categoryLabel,
      onClickItem = props.onClickItem;
  var ItemCards = sortSequence(items).map(function (item, index) {
    var _categoryLabel$areaSu, _categoryLabel$layout, _categoryLabel$layout2;

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
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
      onClick: function onClick() {
        return onClickItem(item);
      },
      style: {
        alignItem: "center",
        flexDirection: "row",
        marginBottom: 15
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Image, {
        src: imageUrls[0],
        style: {
          borderRadius: 5,
          height: 75,
          width: 75
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
        style: {
          marginLeft: 15,
          maxWidth: 200
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
          style: {
            flexDirection: "row"
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ListingTypeTag, (0, _objectSpread2.default)({
            listingType: listingType
          }, props)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_h.default, {
            style: {
              marginLeft: 8
            },
            children: name
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_info.default, {
          children: "".concat(area).concat(categoryLabel === null || categoryLabel === void 0 ? void 0 : (_categoryLabel$areaSu = categoryLabel.areaSuffix) === null || _categoryLabel$areaSu === void 0 ? void 0 : _categoryLabel$areaSu.value, " ").concat((0, _applicationComponent.generateDynamicLabel)((_categoryLabel$layout = categoryLabel === null || categoryLabel === void 0 ? void 0 : (_categoryLabel$layout2 = categoryLabel.layoutValue) === null || _categoryLabel$layout2 === void 0 ? void 0 : _categoryLabel$layout2.value) !== null && _categoryLabel$layout !== void 0 ? _categoryLabel$layout : "", [room, livingRoom]))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_info.default, {
          children: address
        })]
      })]
    }, ItemList + index);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: ItemCards
  });
}

function ListingTypeTag(_ref2) {
  var _appLabel$buy;

  var appLabel = _ref2.appLabel,
      listingType = _ref2.listingType;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_applicationTag.default, {
    color: listingType === "RENT" ? "blue" : "green",
    children: listingType === "RENT" ? appLabel === null || appLabel === void 0 ? void 0 : appLabel.rent.value : appLabel === null || appLabel === void 0 ? void 0 : (_appLabel$buy = appLabel.buy) === null || _appLabel$buy === void 0 ? void 0 : _appLabel$buy.value
  });
}

function sortSequence(objects) {
  return objects.sort(function (object1, object2) {
    return object1.sequence - object2.sequence;
  });
}

function TopSegment(props) {
  var _appLabel$buy2, _appLabel$rent;

  var appLabel = props.appLabel,
      currentSegmentTypeIndex = props.currentSegmentTypeIndex,
      onChangeSegmentType = props.onChangeSegmentType;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtSegmentedControl, {
    values: [appLabel === null || appLabel === void 0 ? void 0 : (_appLabel$buy2 = appLabel.buy) === null || _appLabel$buy2 === void 0 ? void 0 : _appLabel$buy2.value, appLabel === null || appLabel === void 0 ? void 0 : (_appLabel$rent = appLabel.rent) === null || _appLabel$rent === void 0 ? void 0 : _appLabel$rent.value],
    onClick: onChangeSegmentType,
    current: currentSegmentTypeIndex
  });
}