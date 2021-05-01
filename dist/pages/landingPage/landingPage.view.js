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
exports.DefaultCardContent = DefaultCardContent;
exports.ItemListing = ItemListing;
exports.OneRowBanners = OneRowBanners;

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

      return React.createElement(
        this.Wrapper,
        null,
        React.createElement(
          _flexView2.default,
          null,
          React.createElement(_imageCarousel2.default, {
            imageUrls: landingPage.carousel.map(function (image) {
              return image.url;
            })
          }),
          React.createElement(DefaultCardContent, {
            banners: landingPage.banners,
            bottomList: landingPage.bottomList,
            mainMenuButtons: landingPage.mainMenuButtons,
            categories: categories,
            items: items,
            onClickItem: onClickItem,
            onClickMenuButton: onClickMenuButton
          })
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
      return React.createElement(CategoryListing, {
        categories: categories,
        categoryId: listItem.id,
        items: items,
        onClickItem: onClickItem
      });
    } else if (listItem.type === "item") {
      return React.createElement(ItemListing, { itemId: listItem.id });
    }
  });
}

function ButtonRow(props) {
  var mainMenuButtons = props.mainMenuButtons,
      onClickMenuButton = props.onClickMenuButton;

  var buttons = mainMenuButtons.map(function (button, index) {
    return React.createElement(
      _flexView2.default,
      {
        key: "landing_page_button_row" + index,
        style: {
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 15,
          paddingTop: 15
        }
      },
      React.createElement(_circularButton2.default, {
        color: button.color,
        onClick: function onClick() {
          return onClickMenuButton(150);
        },
        url: button.url
      }),
      React.createElement(
        _info2.default,
        { style: { marginTop: 6 } },
        button.name
      )
    );
  });
  return React.createElement(
    _components.View,
    { className: "at-row at-row__justify--around" },
    buttons
  );
}

function CardContent(props) {
  var children = props.children,
      style = props.style;

  return React.createElement(
    _card2.default,
    {
      style: _extends({
        backgroundColor: "white",
        marginTop: -25,
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

    return React.createElement(
      _flexView2.default,
      {
        key: "CategoryListing" + index,
        onClick: function onClick() {
          return onClickItem(item);
        },
        style: { marginRight: 25 }
      },
      React.createElement(_components.Image, {
        src: item.imageUrls[0],
        style: { borderRadius: 10, height: 200, width: 200 }
      }),
      React.createElement(
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
  return React.createElement(
    _flexView2.default,
    null,
    React.createElement(
      _h2.default,
      null,
      name ? name : "分類"
    ),
    React.createElement(
      _components.ScrollView,
      { scrollX: true, scrollWithAnimation: true },
      React.createElement(
        _flexView2.default,
        { style: { display: "flex", flexDirection: "row" } },
        itemsCard
      )
    )
  );
}

function DefaultCardContent(_ref3) {
  var banners = _ref3.banners,
      bottomList = _ref3.bottomList,
      categories = _ref3.categories,
      items = _ref3.items,
      mainMenuButtons = _ref3.mainMenuButtons,
      onClickItem = _ref3.onClickItem,
      onClickMenuButton = _ref3.onClickMenuButton;

  return React.createElement(
    CardContent,
    null,
    React.createElement(ButtonRow, {
      mainMenuButtons: mainMenuButtons,
      onClickMenuButton: onClickMenuButton
    }),
    React.createElement(BottomListing, {
      bottomList: bottomList,
      categories: categories,
      items: items,
      onClickItem: onClickItem
    })
  );
}

function ItemListing(_ref4) {
  var itemId = _ref4.itemId;

  return null;
}

function OneRowBanners(_ref5) {
  var banners = _ref5.banners;

  return banners.map(function (banner, index) {
    return React.createElement(_components.Image, {
      key: OneRowBanners + index,
      src: banner.url,
      style: { borderRadius: 15, maxHeight: 100, width: "100%" }
    });
  });
}