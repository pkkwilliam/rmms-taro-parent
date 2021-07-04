"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomListing = BottomListing;
exports.ButtonRow = ButtonRow;
exports.CategoryListing = CategoryListing;
exports.ItemListing = ItemListing;
exports.OneRowBanners = OneRowBanners;
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var _inherits2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper"));

var _react = _interopRequireDefault(require("react"));

var _components = require("@tarojs/components");

var _applicationComponent = _interopRequireDefault(require("../../common/applicationComponent.view"));

var _imageCarousel = _interopRequireDefault(require("../../common/imageCarousel"));

var _circularButton = _interopRequireDefault(require("../../common/circularButton"));

var _info = _interopRequireDefault(require("../../common/text/info"));

var _h = _interopRequireDefault(require("../../common/text/h2"));

var _flexView = _interopRequireDefault(require("../../common/flexView"));

var _mainButtonRow = _interopRequireDefault(require("../../common/mainButtonRow/mainButtonRow"));

var _jsxRuntime = require("react/jsx-runtime");

var LandingPageView = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(LandingPageView, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(LandingPageView);

  function LandingPageView() {
    (0, _classCallCheck2.default)(this, LandingPageView);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(LandingPageView, [{
    key: "getComponentLabelName",
    value: function getComponentLabelName() {
      return "landingPageLabel";
    }
  }, {
    key: "getComponentStyleName",
    value: function getComponentStyleName() {
      return "landingPageStyle";
    }
  }, {
    key: "render",
    value: function render() {
      var _this$appStyle, _this$appStyle$backgr;

      var _this$props = this.props,
          categories = _this$props.categories,
          items = _this$props.items,
          onClickItem = _this$props.onClickItem;
      var _this$componentStyle = this.componentStyle,
          bottomListStyle = _this$componentStyle.bottomListStyle,
          carouselStyle = _this$componentStyle.carouselStyle;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(this.Wrapper, {
        style: {
          backgroundColor: (_this$appStyle = this.appStyle) === null || _this$appStyle === void 0 ? void 0 : (_this$appStyle$backgr = _this$appStyle.backgroundColor) === null || _this$appStyle$backgr === void 0 ? void 0 : _this$appStyle$backgr.value
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_imageCarousel.default, {
            imageUrls: carouselStyle.map(function (image) {
              return image.url;
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
            style: {
              paddingLeft: 15,
              paddingRight: 15
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_mainButtonRow.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(BottomListing, {
              bottomListStyle: bottomListStyle,
              categories: categories,
              items: items,
              onClickItem: onClickItem
            })]
          })]
        })
      });
    }
  }]);
  return LandingPageView;
}(_applicationComponent.default);

exports.default = LandingPageView;

function BottomListing(_ref) {
  var bottomListStyle = _ref.bottomListStyle,
      categories = _ref.categories,
      items = _ref.items,
      onClickItem = _ref.onClickItem;
  return bottomListStyle.map(function (listItem) {
    if (listItem.type === "category") {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(CategoryListing, {
        categories: categories,
        categoryId: listItem.id,
        items: items,
        onClickItem: onClickItem
      });
    } else if (listItem.type === "item") {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemListing, {
        itemId: listItem.id
      });
    }
  });
}
/**
 * @deprecated
 *
 * @param {*} props
 * @returns
 */


function ButtonRow(props) {
  var mainMenuButtons = props.mainMenuButtons,
      onClickMenuButton = props.onClickMenuButton;
  var buttons = mainMenuButtons.map(function (button, index) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
      style: {
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: 10
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_circularButton.default, {
        color: button.color,
        onClick: function onClick() {
          return onClickMenuButton(150);
        },
        url: button.url
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_info.default, {
        style: {
          color: "#5F5F5F",
          marginTop: 6
        },
        children: button.name
      })]
    }, "landing_page_button_row" + index);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.View, {
    className: "at-row at-row__justify--around",
    children: buttons
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
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
      onClick: function onClick() {
        return onClickItem(item);
      },
      style: {
        marginRight: 25
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Image, {
        mode: "aspectFill",
        src: item.imageUrls[0],
        style: {
          borderRadius: 10,
          height: imageHeight,
          width: imageWidth
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_info.default, {
        children: name ? name : ""
      })]
    }, "CategoryListing" + index);
  });
  var name = "";

  if (displayCategory) {
    name = displayCategory.name;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
    style: {
      marginTop: 15
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_h.default, {
      children: name ? name : "分類"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ScrollView, {
      scrollX: true,
      scrollWithAnimation: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_flexView.default, {
        style: {
          display: "flex",
          flexDirection: "row"
        },
        children: itemsCard
      })
    })]
  });
}

function ItemListing(_ref3) {
  var itemId = _ref3.itemId;
  return null;
}

function OneRowBanners(_ref4) {
  var banners = _ref4.banners;
  return banners.map(function (banner, index) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Image, {
      src: banner.url,
      style: {
        borderRadius: 15,
        maxHeight: 100,
        width: "100%"
      }
    }, OneRowBanners + index);
  });
}