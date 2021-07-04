"use strict";

var _interopRequireWildcard = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CategoryView;
exports.CategoryNav = CategoryNav;
exports.SearchBar = SearchBar;
exports.TabsPaneContainer = TabsPaneContainer;
exports.ItemList = ItemList;
exports.ListingTypeTag = ListingTypeTag;
exports.sortSequence = sortSequence;
exports.TopSegment = TopSegment;

var _objectSpread2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@tarojs/components");

var _taroUi = require("taro-ui");

require("./category.scss");

var _h = _interopRequireDefault(require("../../common/text/h3"));

var _info = _interopRequireDefault(require("../../common/text/info"));

var _flexView = _interopRequireDefault(require("../../common/flexView"));

var _applicationTag = _interopRequireDefault(require("../../common/applicationTag"));

var _applicationComponent = require("../../common/applicationComponent.view");

var _jsxRuntime = require("react/jsx-runtime");

function CategoryView(props) {
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
      label = props.label,
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
            flexDirection: "row",
            alignItems: "center"
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
          children: "".concat(area).concat(label.areaSuffix, " ").concat((0, _applicationComponent.generateVariableLabel)(label.layoutValue, [room, livingRoom]))
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
  var _ref2$commonLabel = _ref2.commonLabel,
      commonLabel = _ref2$commonLabel === void 0 ? {
    buy: "入",
    rent: "出"
  } : _ref2$commonLabel,
      listingType = _ref2.listingType;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_applicationTag.default, {
    color: listingType === "RENT" ? "blue" : "green",
    children: listingType === "RENT" ? commonLabel.rent : commonLabel.buy
  });
}

function sortSequence(objects) {
  return objects.sort(function (object1, object2) {
    return object1.sequence - object2.sequence;
  });
}

function TopSegment(props) {
  var commonLabel = props.commonLabel,
      currentSegmentTypeIndex = props.currentSegmentTypeIndex,
      onChangeSegmentType = props.onChangeSegmentType;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtSegmentedControl, {
    values: [commonLabel.rent, commonLabel.buy],
    onClick: onChangeSegmentType,
    current: currentSegmentTypeIndex
  });
}