"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.Content = Content;
exports.Description = Description;
exports.ItemHeader = ItemHeader;
exports.ItemAbstractHeader = ItemAbstractHeader;
exports.ItemAbstractHeaders = ItemAbstractHeaders;
exports.ContactAgent = ContactAgent;

var _react = require("react");

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
          showAgency = _props.showAgency,
          toggleShowAgency = _props.toggleShowAgency;
      var id = itemDetail.id,
          listingType = itemDetail.listingType,
          name = itemDetail.name;

      return React.createElement(
        this.Wrapper,
        null,
        React.createElement(_imageCarousel2.default, { imageUrls: itemDetail.imageUrls }),
        React.createElement(Content, _extends({ toggleShowAgency: toggleShowAgency }, itemDetail)),
        React.createElement(ContactAgent, {
          id: id,
          listingType: listingType,
          name: name,
          showAgency: showAgency,
          toggleShowAgency: toggleShowAgency
        })
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
      toggleShowAgency = props.toggleShowAgency;

  var tags = categories.map(function (category, index) {
    return React.createElement(
      _applicationTag2.default,
      {
        color: "yellow",
        key: "ApplicationTag" + index,
        style: { marginRight: 5 }
      },
      category.name
    );
  });
  return React.createElement(
    _landingPage.CardContent,
    { style: { height: "100%", justifyContent: "space-between" } },
    React.createElement(
      _flexView2.default,
      null,
      React.createElement(
        _flexView2.default,
        { style: { marginTop: 20 } },
        React.createElement(ItemHeader, { id: id, listingType: listingType, name: name })
      ),
      React.createElement(
        _flexView2.default,
        { style: _extends({ flexDirection: "row" }, style) },
        tags
      ),
      React.createElement(
        _info2.default,
        { style: { marginTop: 5 } },
        address
      ),
      React.createElement(ItemAbstractHeaders, props),
      React.createElement(
        _components.ScrollView,
        { scrollY: true, style: { height: 200 } },
        React.createElement(
          _flexView2.default,
          { style: { marginTop: 20 } },
          React.createElement(Description, { description: description })
        )
      )
    ),
    React.createElement(
      _flexView2.default,
      { style: { marginBottom: 25 } },
      React.createElement(
        _applicationButton2.default,
        { block: true, onClick: toggleShowAgency },
        "\u9810\u7D04\u7747\u6A13"
      )
    )
  );
}

function Description(_ref) {
  var description = _ref.description;

  return React.createElement(
    _react.Fragment,
    null,
    React.createElement(
      _flexView2.default,
      {
        style: { alignItems: "center", flexDirection: "row", marginTop: 5 }
      },
      React.createElement(_taroUi.AtIcon, { value: "tags" }),
      React.createElement(
        _h6.default,
        { style: { marginLeft: 5 } },
        "\u623F\u5C4B\u4FE1\u606F"
      )
    ),
    React.createElement(
      _flexView2.default,
      { style: { marginTop: 15 } },
      React.createElement(
        _h4.default,
        { style: { lineHeight: "38px" } },
        description
      )
    )
  );
}

function ItemHeader(props) {
  var id = props.id,
      listingType = props.listingType,
      name = props.name;

  return React.createElement(
    _flexView2.default,
    {
      style: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
      }
    },
    React.createElement(
      _flexView2.default,
      {
        style: {
          alignItems: "center",
          flexDirection: "row"
        }
      },
      React.createElement(_category.ListingTypeTag, { listingType: listingType }),
      React.createElement(
        _h2.default,
        null,
        name
      )
    ),
    React.createElement(
      _applicationTag2.default,
      { color: "geekblue" },
      "ID: ",
      id
    )
  );
}

function ItemAbstractHeader(_ref2) {
  var header = _ref2.header,
      icon = _ref2.icon,
      iconColor = _ref2.iconColor,
      label = _ref2.label;

  return React.createElement(
    _flexView2.default,
    { style: { alignItems: "center" } },
    React.createElement(
      _flexView2.default,
      { style: { alignItems: "center", flexDirection: "row" } },
      React.createElement(_taroUi.AtIcon, { color: iconColor, value: icon }),
      React.createElement(
        _paragraph2.default,
        { style: { marginLeft: 5 } },
        label
      )
    ),
    React.createElement(
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

  return React.createElement(
    _react.Fragment,
    null,
    React.createElement(_taroUi.AtDivider, { height: 60 }),
    React.createElement(
      _flexView2.default,
      {
        style: { flexDirection: "row", justifyContent: "space-around" }
      },
      React.createElement(ItemAbstractHeader, {
        header: parseInt(cost).toLocaleString(),
        icon: "money",
        iconColor: "#85BB65",
        label: "\u50F9\u683C"
      }),
      React.createElement(ItemAbstractHeader, {
        header: room + "\u623F" + livingRoom + "\u5EF3",
        icon: "numbered-list",
        iconColor: "#d7471d",
        label: "\u4F48\u5C40"
      }),
      React.createElement(ItemAbstractHeader, {
        header: area + "\u5E73\u65B9\u544E",
        icon: "home",
        iconColor: "#007AFF",
        label: "\u9762\u7A4D"
      })
    )
  );
}

function ContactAgent(_ref3) {
  var id = _ref3.id,
      listingType = _ref3.listingType,
      name = _ref3.name,
      showAgency = _ref3.showAgency,
      toggleShowAgency = _ref3.toggleShowAgency;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      phoneNumber = _useState2[0],
      setPhoneNumber = _useState2[1];

  return React.createElement(
    _taroUi.AtFloatLayout,
    {
      isOpened: showAgency,
      title: "\u9810\u7D04\u7747\u6A13",
      onClose: toggleShowAgency
    },
    React.createElement(ItemHeader, { id: id, listingType: listingType, name: name }),
    React.createElement(_taroUi.AtInput, {
      customStyle: { marginLeft: 0, marginTop: 15 },
      onChange: function onChange(value) {
        return setPhoneNumber(value);
      },
      placeholder: "\u8ACB\u8F38\u5165\u4F60\u7684\u96FB\u8A71\u865F\u78BC",
      title: "\u96FB\u8A71\u865F\u78BC",
      value: phoneNumber
    }),
    React.createElement(_taroUi.AtTextarea, {
      count: false,
      customStyle: { color: "#5F5F5F", marginTop: 15 },
      disabled: true,
      value: "\u4F60\u597D\uFF0C\u6211\u60F3\u9810\u7D04\u95DC\u65BC" + id + ":" + name + "\uFF0C\u6211\u7684\u96FB\u8A71:" + phoneNumber
    }),
    React.createElement(
      _applicationButton2.default,
      { style: { marginBottom: 15, marginTop: 30 } },
      "\u901A\u77E5\u4E2D\u4ECB"
    )
  );
}