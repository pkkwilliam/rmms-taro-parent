"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.BottomListing = BottomListing;
exports.ButtonRow = ButtonRow;
exports.CardContent = CardContent;
exports.CategoryListing = CategoryListing;
exports.ItemListing = ItemListing;
exports.OneRowBanners = OneRowBanners;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _components = require("@tarojs/components");

var _applicationComponent = require("../../common/applicationComponent.view");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

var _imageCarousel = require("../../common/imageCarousel");

var _imageCarousel2 = _interopRequireDefault(_imageCarousel);

var _card = require("../../common/card");

var _card2 = _interopRequireDefault(_card);

var _circularButton = require("../../common/circularButton");

var _circularButton2 = _interopRequireDefault(_circularButton);

var _info = require("../../common/text/info");

var _info2 = _interopRequireDefault(_info);

var _h = require("../../common/text/h2");

var _h2 = _interopRequireDefault(_h);

var _flexView = require("../../common/flexView");

var _flexView2 = _interopRequireDefault(_flexView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LandingPageView = function (_ApplicationComponent) {
  _inherits(LandingPageView, _ApplicationComponent);

  function LandingPageView() {
    _classCallCheck(this, LandingPageView);

    return _possibleConstructorReturn(this, (LandingPageView.__proto__ || Object.getPrototypeOf(LandingPageView)).apply(this, arguments));
  }

  _createClass(LandingPageView, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          categories = _props.categories,
          items = _props.items,
          landingPage = _props.landingPage,
          onClickItem = _props.onClickItem,
          onClickMenuButton = _props.onClickMenuButton;
      var bottomList = landingPage.bottomList,
          mainMenuButtons = landingPage.mainMenuButtons;

      return _react2.default.createElement(
        this.Wrapper,
        null,
        _react2.default.createElement(
          _flexView2.default,
          null,
          _react2.default.createElement(_imageCarousel2.default, {
            imageUrls: landingPage.carousel.map(function (image) {
              return image.url;
            })
          }),
          _react2.default.createElement(
            CardContent,
            null,
            _react2.default.createElement(ButtonRow, {
              mainMenuButtons: mainMenuButtons,
              onClickMenuButton: onClickMenuButton
            }),
            _react2.default.createElement(BottomListing, {
              bottomList: bottomList,
              categories: categories,
              items: items,
              onClickItem: onClickItem
            })
          )
        )
      );
    }
  }]);

  return LandingPageView;
}(_applicationComponent2.default);

exports.default = LandingPageView;
function BottomListing(_ref) {
  var bottomList = _ref.bottomList,
      categories = _ref.categories,
      items = _ref.items,
      onClickItem = _ref.onClickItem;

  return bottomList.map(function (listItem) {
    if (listItem.type === "category") {
      return _react2.default.createElement(CategoryListing, {
        categories: categories,
        categoryId: listItem.id,
        items: items,
        onClickItem: onClickItem
      });
    } else if (listItem.type === "item") {
      return _react2.default.createElement(ItemListing, { itemId: listItem.id });
    }
  });
}

function ButtonRow(props) {
  var mainMenuButtons = props.mainMenuButtons,
      onClickMenuButton = props.onClickMenuButton;

  var buttons = mainMenuButtons.map(function (button, index) {
    return _react2.default.createElement(
      _flexView2.default,
      {
        key: "landing_page_button_row" + index,
        style: {
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 10,
          paddingTop: 10,
          marginTop: 10
        }
      },
      _react2.default.createElement(_circularButton2.default, {
        color: button.color,
        onClick: function onClick() {
          return onClickMenuButton(150);
        },
        url: button.url
      }),
      _react2.default.createElement(
        _info2.default,
        { style: { color: "#5F5F5F", marginTop: 6 } },
        button.name
      )
    );
  });
  return _react2.default.createElement(
    _components.View,
    { className: "at-row at-row__justify--around" },
    buttons
  );
}

function CardContent(props) {
  var _props$backgroundColo = props.backgroundColor,
      backgroundColor = _props$backgroundColo === undefined ? "#FFFFFF" : _props$backgroundColo,
      children = props.children,
      style = props.style;

  return _react2.default.createElement(
    _card2.default,
    {
      style: _extends({
        backgroundColor: backgroundColor,
        // marginTop: -25, comment out this since we are not able to to control the dot height of taro ui carousel
        paddingLeft: 15,
        paddingRight: 15,
        zIndex: 10
      }, style)
    },
    children
  );
}

function CategoryListing(_ref2) {
  var categories = _ref2.categories,
      categoryId = _ref2.categoryId,
      _ref2$imageHeight = _ref2.imageHeight,
      imageHeight = _ref2$imageHeight === undefined ? 180 : _ref2$imageHeight,
      _ref2$imageWidth = _ref2.imageWidth,
      imageWidth = _ref2$imageWidth === undefined ? 250 : _ref2$imageWidth,
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

    return _react2.default.createElement(
      _flexView2.default,
      {
        key: "CategoryListing" + index,
        onClick: function onClick() {
          return onClickItem(item);
        },
        style: { marginRight: 25 }
      },
      _react2.default.createElement(_components.Image, {
        mode: "aspectFill",
        src: item.imageUrls[0],
        style: {
          borderRadius: 10,
          height: imageHeight,
          width: imageWidth
        }
      }),
      _react2.default.createElement(
        _info2.default,
        null,
        name ? name : ""
      )
    );
  });
  var name = "";
  if (displayCategory) {
    name = displayCategory.name;
  }
  return _react2.default.createElement(
    _flexView2.default,
    null,
    _react2.default.createElement(
      _h2.default,
      null,
      name ? name : "分類"
    ),
    _react2.default.createElement(
      _components.ScrollView,
      { scrollX: true, scrollWithAnimation: true },
      _react2.default.createElement(
        _flexView2.default,
        { style: { display: "flex", flexDirection: "row" } },
        itemsCard
      )
    )
  );
}

function ItemListing(_ref3) {
  var itemId = _ref3.itemId;

  return null;
}

function OneRowBanners(_ref4) {
  var banners = _ref4.banners;

  return banners.map(function (banner, index) {
    return _react2.default.createElement(_components.Image, {
      key: OneRowBanners + index,
      src: banner.url,
      style: { borderRadius: 15, maxHeight: 100, width: "100%" }
    });
  });
}