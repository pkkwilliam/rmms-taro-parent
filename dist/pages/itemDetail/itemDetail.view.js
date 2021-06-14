"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.Content = Content;
exports.Description = Description;
exports.ItemAbstractHeader = ItemAbstractHeader;
exports.ItemAbstractHeaders = ItemAbstractHeaders;
exports.ItemHeader = ItemHeader;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _components = require("@tarojs/components");

var _taroUi = require("taro-ui");

var _landingPage = require("../landingPage/landingPage.view");

var _category = require("../category/category.view");

var _imageCarousel = require("../../common/imageCarousel");

var _imageCarousel2 = _interopRequireDefault(_imageCarousel);

var _h = require("../../common/text/h1");

var _h2 = _interopRequireDefault(_h);

var _h3 = require("../../common/text/h3");

var _h4 = _interopRequireDefault(_h3);

var _paragraph = require("../../common/text/paragraph");

var _paragraph2 = _interopRequireDefault(_paragraph);

var _flexView = require("../../common/flexView");

var _flexView2 = _interopRequireDefault(_flexView);

var _applicationTag = require("../../common/applicationTag");

var _applicationTag2 = _interopRequireDefault(_applicationTag);

var _h5 = require("../../common/text/h2");

var _h6 = _interopRequireDefault(_h5);

var _applicationButton = require("../../common/applicationButton");

var _applicationButton2 = _interopRequireDefault(_applicationButton);

var _info = require("../../common/text/info");

var _info2 = _interopRequireDefault(_info);

var _applicationComponent = require("../../common/applicationComponent.view");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

require("./itemDetail.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemDetailView = function (_ApplicationComponent) {
  _inherits(ItemDetailView, _ApplicationComponent);

  function ItemDetailView() {
    _classCallCheck(this, ItemDetailView);

    return _possibleConstructorReturn(this, (ItemDetailView.__proto__ || Object.getPrototypeOf(ItemDetailView)).apply(this, arguments));
  }

  _createClass(ItemDetailView, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          itemDetail = _props.itemDetail,
          _props$onClickSubmit = _props.onClickSubmit,
          onClickSubmit = _props$onClickSubmit === undefined ? function () {} : _props$onClickSubmit;

      return _react2.default.createElement(
        this.Wrapper,
        null,
        _react2.default.createElement(_imageCarousel2.default, { imageUrls: itemDetail.imageUrls }),
        _react2.default.createElement(Content, _extends({ onClickSubmit: onClickSubmit }, itemDetail))
      );
    }
  }]);

  return ItemDetailView;
}(_applicationComponent2.default);

exports.default = ItemDetailView;
function Content(props) {
  var address = props.address,
      area = props.area,
      createTime = props.createTime,
      _props$categories = props.categories,
      categories = _props$categories === undefined ? [] : _props$categories,
      cost = props.cost,
      description = props.description,
      id = props.id,
      listingType = props.listingType,
      name = props.name,
      style = props.style,
      onClickSubmit = props.onClickSubmit;

  var tags = categories.map(function (category, index) {
    return _react2.default.createElement(
      _applicationTag2.default,
      {
        color: "yellow",
        key: "ApplicationTag" + index,
        style: { marginRight: 5 }
      },
      category.name
    );
  });
  return _react2.default.createElement(
    _landingPage.CardContent,
    {
      style: { flex: 1, height: "100%", justifyContent: "space-between" }
    },
    _react2.default.createElement(
      _components.ScrollView,
      { scrollY: true, style: { height: 410 } },
      _react2.default.createElement(
        _flexView2.default,
        { style: { marginTop: 15 } },
        _react2.default.createElement(ItemHeader, { id: id, listingType: listingType, name: name })
      ),
      _react2.default.createElement(
        _flexView2.default,
        { style: _extends({ flexDirection: "row" }, style) },
        tags
      ),
      _react2.default.createElement(
        _info2.default,
        { style: { marginTop: 5 } },
        address
      ),
      _react2.default.createElement(ItemAbstractHeaders, props),
      _react2.default.createElement(
        _flexView2.default,
        { style: { marginTop: 15 } },
        _react2.default.createElement(Description, { description: description })
      )
    ),
    _react2.default.createElement(
      _flexView2.default,
      { style: { flex: 1, justifyContent: "flex-end" } },
      _react2.default.createElement(
        _applicationButton2.default,
        {
          block: true,
          onClick: onClickSubmit,
          style: { marginBottom: 15 }
        },
        "\u9810\u7D04\u7747\u6A13"
      )
    )
  );
}

function Description(_ref) {
  var description = _ref.description;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _flexView2.default,
      {
        style: { alignItems: "center", flexDirection: "row", marginTop: 5 }
      },
      _react2.default.createElement(_taroUi.AtIcon, { value: "tags" }),
      _react2.default.createElement(
        _h6.default,
        { style: { marginLeft: 5 } },
        "\u623F\u5C4B\u4FE1\u606F"
      )
    ),
    _react2.default.createElement(
      _flexView2.default,
      { style: { marginTop: 15 } },
      _react2.default.createElement(
        _h4.default,
        { style: { lineHeight: "38px" } },
        description
      )
    )
  );
}

function ItemAbstractHeader(_ref2) {
  var header = _ref2.header,
      icon = _ref2.icon,
      iconColor = _ref2.iconColor,
      label = _ref2.label;

  return _react2.default.createElement(
    _flexView2.default,
    { style: { alignItems: "center" } },
    _react2.default.createElement(
      _flexView2.default,
      { style: { alignItems: "center", flexDirection: "row" } },
      _react2.default.createElement(_taroUi.AtIcon, { color: iconColor, value: icon }),
      _react2.default.createElement(
        _paragraph2.default,
        { style: { marginLeft: 5 } },
        label
      )
    ),
    _react2.default.createElement(
      _h4.default,
      { companyColor: true, style: { fontWeight: 600, marginTop: 8 } },
      header
    )
  );
}

function ItemAbstractHeaders(props) {
  var area = props.area,
      cost = props.cost,
      livingRoom = props.livingRoom,
      restRoom = props.restRoom,
      room = props.room;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_taroUi.AtDivider, { height: 60 }),
    _react2.default.createElement(
      _flexView2.default,
      {
        style: { flexDirection: "row", justifyContent: "space-around" }
      },
      _react2.default.createElement(ItemAbstractHeader, {
        header: parseInt(cost).toLocaleString(),
        icon: "money",
        iconColor: "#85BB65",
        label: "\u50F9\u683C"
      }),
      _react2.default.createElement(ItemAbstractHeader, {
        header: room + "\u623F" + livingRoom + "\u5EF3",
        icon: "numbered-list",
        iconColor: "#d7471d",
        label: "\u4F48\u5C40"
      }),
      _react2.default.createElement(ItemAbstractHeader, {
        header: area + "\u5E73\u65B9\u544E",
        icon: "home",
        iconColor: "#007AFF",
        label: "\u9762\u7A4D"
      })
    )
  );
}

function ItemHeader(props) {
  var id = props.id,
      listingType = props.listingType,
      name = props.name;

  return _react2.default.createElement(
    _flexView2.default,
    null,
    _react2.default.createElement(
      _flexView2.default,
      {
        style: { flexDirection: "row", justifyContent: "space-between" }
      },
      _react2.default.createElement(_category.ListingTypeTag, { listingType: listingType }),
      _react2.default.createElement(
        _applicationTag2.default,
        { color: "geekblue" },
        "ID: ",
        id
      )
    ),
    _react2.default.createElement(
      _h2.default,
      { style: { marginTop: 5 } },
      name
    )
  );
}