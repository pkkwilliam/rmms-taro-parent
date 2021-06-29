"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CategoryView;
exports.CategoryNav = CategoryNav;
exports.SearchBar = SearchBar;
exports.TabsPaneContainer = TabsPaneContainer;
exports.ItemList = ItemList;
exports.ListingTypeTag = ListingTypeTag;
exports.sortSequence = sortSequence;
exports.TopSegment = TopSegment;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _components = require("@tarojs/components");

var _taroUi = require("taro-ui");

require("./category.scss");

var _h = require("../../common/text/h3");

var _h2 = _interopRequireDefault(_h);

var _info = require("../../common/text/info");

var _info2 = _interopRequireDefault(_info);

var _flexView = require("../../common/flexView");

var _flexView2 = _interopRequireDefault(_flexView);

var _applicationTag = require("../../common/applicationTag");

var _applicationTag2 = _interopRequireDefault(_applicationTag);

var _applicationComponent = require("../../common/applicationComponent.view");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CategoryView(props) {
  return _react2.default.createElement(
    _flexView2.default,
    null,
    _react2.default.createElement(SearchBar, props),
    _react2.default.createElement(
      _flexView2.default,
      { style: { marginLeft: 5, marginRight: 5 } },
      _react2.default.createElement(TopSegment, props)
    ),
    _react2.default.createElement(
      _flexView2.default,
      { style: { marginTop: 5 } },
      _react2.default.createElement(CategoryNav, props)
    )
  );
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
      return { title: category.name };
    });
  };
  return _react2.default.createElement(
    _taroUi.AtTabs,
    {
      current: currentCategoryIndex,
      height: "600px",
      onClick: onClickCategory,
      scroll: true,
      tabDirection: "vertical",
      tabList: prepareTabList(categories)
    },
    _react2.default.createElement(TabsPaneContainer, props)
  );
}

function SearchBar(_ref) {
  var onChangeSearchBarText = _ref.onChangeSearchBarText,
      onClickSearchBarClear = _ref.onClickSearchBarClear,
      onClickSearchBarSubmit = _ref.onClickSearchBarSubmit,
      searchBar = _ref.searchBar;

  return _react2.default.createElement(_taroUi.AtSearchBar, {
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
    return _react2.default.createElement(
      _taroUi.AtTabsPane,
      {
        current: currentCategoryIndex,
        key: "TabsPaneContainer" + index,
        tabDirection: "vertical",
        index: index
      },
      _react2.default.createElement(ItemList, _extends({ items: categoryItems }, props))
    );
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

    console.log(room, livingRoom);
    return _react2.default.createElement(
      _flexView2.default,
      {
        key: ItemList + index,
        onClick: function onClick() {
          return onClickItem(item);
        },
        style: { alignItem: "center", flexDirection: "row", marginBottom: 15 }
      },
      _react2.default.createElement(_components.Image, {
        src: imageUrls[0],
        style: { borderRadius: 5, height: 75, width: 75 }
      }),
      _react2.default.createElement(
        _flexView2.default,
        { style: { marginLeft: 15, maxWidth: 200 } },
        _react2.default.createElement(
          _flexView2.default,
          {
            style: {
              flexDirection: "row",
              alignItems: "center"
            }
          },
          _react2.default.createElement(ListingTypeTag, props),
          _react2.default.createElement(
            _h2.default,
            { style: { marginLeft: 8 } },
            name
          )
        ),
        _react2.default.createElement(
          _info2.default,
          null,
          "" + area + label.areaSuffix + " " + (0, _applicationComponent.generateVariableLabel)(label.layoutValue, [room, livingRoom])
        ),
        _react2.default.createElement(
          _info2.default,
          null,
          address
        )
      )
    );
  });
  return _react2.default.createElement(
    _react.Fragment,
    null,
    ItemCards
  );
}

function ListingTypeTag(_ref2) {
  var _ref2$commonLabel = _ref2.commonLabel,
      commonLabel = _ref2$commonLabel === undefined ? { buy: "入", rent: "出" } : _ref2$commonLabel,
      listingType = _ref2.listingType;

  return _react2.default.createElement(
    _applicationTag2.default,
    { color: listingType === "RENT" ? "blue" : "green" },
    listingType === "RENT" ? commonLabel.rent : commonLabel.buy
  );
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

  return _react2.default.createElement(_taroUi.AtSegmentedControl, {
    values: [commonLabel.rent, commonLabel.buy],
    onClick: onChangeSegmentType,
    current: currentSegmentTypeIndex
  });
}