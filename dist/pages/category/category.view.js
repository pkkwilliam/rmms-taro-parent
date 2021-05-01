"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CategoryView;
exports.CategoryNav = CategoryNav;
exports.TabsPaneContainer = TabsPaneContainer;
exports.ItemList = ItemList;
exports.ListingTypeTag = ListingTypeTag;
exports.sortSequence = sortSequence;
exports.TopSegment = TopSegment;

var _react = require("react");

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CategoryView(props) {
  return React.createElement(
    _flexView2.default,
    null,
    React.createElement(_taroUi.AtSearchBar, null),
    React.createElement(
      _flexView2.default,
      { style: { marginLeft: 5, marginRight: 5 } },
      React.createElement(TopSegment, props)
    ),
    React.createElement(
      _flexView2.default,
      { style: { marginTop: 5 } },
      React.createElement(CategoryNav, props)
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
  return React.createElement(
    _taroUi.AtTabs,
    {
      current: currentCategoryIndex,
      height: "600px",
      onClick: onClickCategory,
      scroll: true,
      tabDirection: "vertical",
      tabList: prepareTabList(categories)
    },
    React.createElement(TabsPaneContainer, props)
  );
}

function TabsPaneContainer(props) {
  var currentCategoryIndex = props.currentCategoryIndex,
      categoriesItems = props.categoriesItems,
      onClickItem = props.onClickItem;

  return categoriesItems.map(function (categoryItems, index) {
    return React.createElement(
      _taroUi.AtTabsPane,
      {
        current: currentCategoryIndex,
        key: "TabsPaneContainer" + index,
        tabDirection: "vertical",
        index: index
      },
      React.createElement(ItemList, { items: categoryItems, onClickItem: onClickItem })
    );
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

    return React.createElement(
      _flexView2.default,
      {
        key: ItemList + index,
        onClick: function onClick() {
          return onClickItem(item);
        },
        style: { alignItem: "center", flexDirection: "row", marginBottom: 15 }
      },
      React.createElement(_components.Image, {
        src: imageUrls[0],
        style: { borderRadius: 5, height: 75, width: 75 }
      }),
      React.createElement(
        _flexView2.default,
        { style: { marginLeft: 15, maxWidth: 200 } },
        React.createElement(
          _flexView2.default,
          {
            style: {
              flexDirection: "row",
              alignItems: "center"
            }
          },
          React.createElement(ListingTypeTag, { listingType: listingType }),
          React.createElement(
            _h2.default,
            { style: { marginLeft: 8 } },
            name
          )
        ),
        React.createElement(
          _info2.default,
          null,
          area + "\u5E73\u65B9\u544E " + room + "\u623F" + livingRoom + "\u5EF3"
        ),
        React.createElement(
          _info2.default,
          null,
          address
        )
      )
    );
  });
  return React.createElement(
    _react.Fragment,
    null,
    ItemCards
  );
}

function ListingTypeTag(_ref) {
  var listingType = _ref.listingType;

  return React.createElement(
    _applicationTag2.default,
    { color: listingType === "RENT" ? "blue" : "green" },
    listingType === "RENT" ? "出租" : "出售"
  );
}

function sortSequence(objects) {
  return objects.sort(function (object1, object2) {
    return object1.sequence - object2.sequence;
  });
}

function TopSegment(props) {
  var currentSegmentTypeIndex = props.currentSegmentTypeIndex,
      onChangeSegmentType = props.onChangeSegmentType;

  return React.createElement(_taroUi.AtSegmentedControl, {
    values: ["出租", "買賣"],
    onClick: onChangeSegmentType,
    current: currentSegmentTypeIndex
  });
}