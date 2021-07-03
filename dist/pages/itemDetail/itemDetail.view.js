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
exports.MakeReservation = MakeReservation;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _taroUi = require("taro-ui");

var _cardContent = require("../../common/cardContent");

var _cardContent2 = _interopRequireDefault(_cardContent);

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

var _contactAgent = require("../contactAgent/contactAgent");

var _contactAgent2 = _interopRequireDefault(_contactAgent);

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
          label = _props.label,
          showAgency = _props.showAgency,
          toggleShowAgency = _props.toggleShowAgency;
      var id = itemDetail.id,
          listingType = itemDetail.listingType,
          name = itemDetail.name;

      return _react2.default.createElement(
        this.Wrapper,
        null,
        _react2.default.createElement(_imageCarousel2.default, { imageUrls: itemDetail.imageUrls }),
        _react2.default.createElement(
          _flexView2.default,
          { style: { height: "100%", paddingLeft: 15, paddingRight: 15 } },
          _react2.default.createElement(Content, _extends({
            onClickSubmit: toggleShowAgency
          }, itemDetail, this.props)),
          _react2.default.createElement(_contactAgent2.default, {
            id: id,
            listingType: listingType,
            name: name,
            showAgency: showAgency,
            toggleShowAgency: toggleShowAgency
          }),
          _react2.default.createElement(MakeReservation, { label: label, onClickSubmit: toggleShowAgency })
        )
      );
    }
  }]);

  return ItemDetailView;
}(_applicationComponent2.default);

exports.default = ItemDetailView;
function Content(props) {
  var address = props.address,
      area = props.area,
      commonLabel = props.commonLabel,
      _props$categories = props.categories,
      categories = _props$categories === undefined ? [] : _props$categories,
      cost = props.cost,
      createTime = props.createTime,
      description = props.description,
      id = props.id,
      isFavoriteItem = props.isFavoriteItem,
      label = props.label,
      listingType = props.listingType,
      name = props.name,
      onClickFavorite = props.onClickFavorite,
      style = props.style;

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
  var favoriteItemTag = _react2.default.createElement(_taroUi.AtIcon, {
    onClick: onClickFavorite,
    color: "#FDCC0D",
    value: isFavoriteItem ? "star-2" : "star"
  });
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _flexView2.default,
      { style: { marginTop: 15 } },
      _react2.default.createElement(ItemHeader, {
        id: id,
        commonLabel: commonLabel,
        listingType: listingType,
        name: name
      })
    ),
    _react2.default.createElement(
      _flexView2.default,
      {
        style: {
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between"
        }
      },
      _react2.default.createElement(
        _flexView2.default,
        {
          style: _extends({
            flexDirection: "row"
          }, style)
        },
        tags
      ),
      _react2.default.createElement(
        _flexView2.default,
        null,
        favoriteItemTag
      )
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
      _react2.default.createElement(Description, { description: description, label: label })
    )
  );
}

function Description(_ref) {
  var description = _ref.description,
      label = _ref.label;

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
        label.detailHeader
      )
    ),
    _react2.default.createElement(
      _flexView2.default,
      { style: { marginTop: 5 } },
      _react2.default.createElement(
        _h4.default,
        { style: { lineHeight: "28px" } },
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
      label = props.label,
      livingRoom = props.livingRoom,
      restRoom = props.restRoom,
      room = props.room;
  var _label$areaHeader = label.areaHeader,
      areaHeader = _label$areaHeader === undefined ? "" : _label$areaHeader,
      areaSuffix = label.areaSuffix,
      _label$layoutHeader = label.layoutHeader,
      layoutHeader = _label$layoutHeader === undefined ? "" : _label$layoutHeader,
      _label$priceHeader = label.priceHeader,
      priceHeader = _label$priceHeader === undefined ? "" : _label$priceHeader;

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
        label: priceHeader
      }),
      _react2.default.createElement(ItemAbstractHeader, {
        header: (0, _applicationComponent.generateVariableLabel)(label.layoutValue, [livingRoom, room]),
        icon: "numbered-list",
        iconColor: "#d7471d",
        label: layoutHeader
      }),
      _react2.default.createElement(ItemAbstractHeader, {
        header: "" + parseInt(area).toLocaleString() + areaSuffix,
        icon: "home",
        iconColor: "#007AFF",
        label: areaHeader
      })
    )
  );
}

function ItemHeader(props) {
  var commonLabel = props.commonLabel,
      id = props.id,
      listingType = props.listingType,
      name = props.name;

  return _react2.default.createElement(
    _flexView2.default,
    {
      style: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
      }
    },
    _react2.default.createElement(
      _h2.default,
      { style: { marginTop: 5 } },
      name
    ),
    _react2.default.createElement(
      _flexView2.default,
      {
        style: { flexDirection: "row", justifyContent: "space-between" }
      },
      _react2.default.createElement(_category.ListingTypeTag, { commonLabel: commonLabel, listingType: listingType }),
      _react2.default.createElement(
        _applicationTag2.default,
        { color: "geekblue" },
        "ID: ",
        id
      )
    )
  );
}

function MakeReservation(_ref3) {
  var label = _ref3.label,
      onClickSubmit = _ref3.onClickSubmit;

  return _react2.default.createElement(
    _flexView2.default,
    { style: { flex: 1, justifyContent: "flex-end" } },
    _react2.default.createElement(
      _applicationButton2.default,
      {
        block: true,
        onClick: onClickSubmit,
        style: { marginBottom: 15 }
      },
      label.submitButton
    )
  );
}