"use strict";

var _interopRequireWildcard = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = Container;
exports.Content = Content;
exports.Description = Description;
exports.ItemAbstractHeader = ItemAbstractHeader;
exports.ItemAbstractHeaders = ItemAbstractHeaders;
exports.ItemHeader = ItemHeader;
exports.MakeReservation = MakeReservation;
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var _inherits2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper"));

var _react = _interopRequireWildcard(require("react"));

var _taroUi = require("taro-ui");

var _category = require("../category/category.view");

var _imageCarousel = _interopRequireDefault(require("../../common/imageCarousel"));

var _h = _interopRequireDefault(require("../../common/text/h1"));

var _h2 = _interopRequireDefault(require("../../common/text/h3"));

var _paragraph = _interopRequireDefault(require("../../common/text/paragraph"));

var _flexView = _interopRequireDefault(require("../../common/flexView"));

var _applicationTag = _interopRequireDefault(require("../../common/applicationTag"));

var _h3 = _interopRequireDefault(require("../../common/text/h2"));

var _applicationButton = _interopRequireDefault(require("../../common/applicationButton"));

var _info = _interopRequireDefault(require("../../common/text/info"));

var _applicationComponent = _interopRequireWildcard(require("../../common/applicationComponent.view"));

var _contactAgent = _interopRequireDefault(require("../contactAgent/contactAgent"));

require("./itemDetail.scss");

var _jsxRuntime = require("react/jsx-runtime");

var ItemDetailView = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(ItemDetailView, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(ItemDetailView);

  function ItemDetailView() {
    (0, _classCallCheck2.default)(this, ItemDetailView);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ItemDetailView, [{
    key: "getComponentLabelName",
    value: function getComponentLabelName() {
      return "itemDetailLabel";
    }
  }, {
    key: "getComponentStyleName",
    value: function getComponentStyleName() {
      return "itemDetailStyle";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(this.Wrapper, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Container, (0, _objectSpread2.default)({
          appLabel: this.appLabel,
          itemDetail: this.props.itemDetail,
          itemDetailLabel: this.componentLabel
        }, this.props))
      });
    }
  }]);
  return ItemDetailView;
}(_applicationComponent.default);

exports.default = ItemDetailView;

function Container(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_imageCarousel.default, {
      imageUrls: props.itemDetail.imageUrls
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
      style: {
        height: "100%",
        paddingLeft: 15,
        paddingRight: 15
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Content, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props.itemDetail), props)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_contactAgent.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props.itemDetail), props)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_flexView.default, {
        style: {
          flex: 1,
          marginTop: 15
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MakeReservation, (0, _objectSpread2.default)({
          onClickSubmit: props.toggleShowAgency
        }, props))
      })]
    })]
  });
}

function Content(props) {
  var address = props.address,
      area = props.area,
      appLabel = props.appLabel,
      _props$categories = props.categories,
      categories = _props$categories === void 0 ? [] : _props$categories,
      cost = props.cost,
      createTime = props.createTime,
      description = props.description,
      id = props.id,
      isFavoriteItem = props.isFavoriteItem,
      itemDetailLabel = props.itemDetailLabel,
      listingType = props.listingType,
      name = props.name,
      onClickFavorite = props.onClickFavorite,
      style = props.style;
  var tags = categories.map(function (category, index) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_applicationTag.default, {
      color: "yellow",
      style: {
        marginRight: 5
      },
      children: category.name
    }, "ApplicationTag" + index);
  });
  var favoriteItemTag = /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtIcon, {
    onClick: onClickFavorite,
    color: "#FDCC0D",
    value: isFavoriteItem ? "star-2" : "star"
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_flexView.default, {
      style: {
        marginTop: 15
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemHeader, {
        id: id,
        appLabel: appLabel,
        listingType: listingType,
        name: name
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
      style: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_flexView.default, {
        style: (0, _objectSpread2.default)({
          flexDirection: "row"
        }, style),
        children: tags
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_flexView.default, {
        children: favoriteItemTag
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_info.default, {
      style: {
        marginTop: 5
      },
      children: address
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemAbstractHeaders, (0, _objectSpread2.default)({}, props)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_flexView.default, {
      style: {
        marginTop: 15
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Description, {
        description: description,
        itemDetailLabel: itemDetailLabel
      })
    })]
  });
}

function Description(_ref) {
  var _itemDetailLabel$deta;

  var description = _ref.description,
      itemDetailLabel = _ref.itemDetailLabel;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
      style: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 5
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtIcon, {
        value: "tags"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_h3.default, {
        style: {
          marginLeft: 5
        },
        children: itemDetailLabel === null || itemDetailLabel === void 0 ? void 0 : (_itemDetailLabel$deta = itemDetailLabel.detailHeader) === null || _itemDetailLabel$deta === void 0 ? void 0 : _itemDetailLabel$deta.value
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_flexView.default, {
      style: {
        marginTop: 5
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_h2.default, {
        style: {
          lineHeight: "28px"
        },
        children: description
      })
    })]
  });
}

function ItemAbstractHeader(_ref2) {
  var header = _ref2.header,
      icon = _ref2.icon,
      iconColor = _ref2.iconColor,
      label = _ref2.label;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
    style: {
      alignItems: "center"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
      style: {
        alignItems: "center",
        flexDirection: "row"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtIcon, {
        color: iconColor,
        value: icon
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragraph.default, {
        style: {
          marginLeft: 5
        },
        children: label
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_h2.default, {
      companyColor: true,
      style: {
        fontWeight: 600,
        marginTop: 8
      },
      children: header
    })]
  });
}

function ItemAbstractHeaders(props) {
  var _itemDetailLabel$pric, _itemDetailLabel$layo, _itemDetailLabel$layo2, _itemDetailLabel$layo3, _itemDetailLabel$area, _itemDetailLabel$area2;

  var area = props.area,
      cost = props.cost,
      itemDetailLabel = props.itemDetailLabel,
      livingRoom = props.livingRoom,
      restRoom = props.restRoom,
      room = props.room;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtDivider, {
      height: 60
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
      style: {
        flexDirection: "row",
        justifyContent: "space-around"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ItemAbstractHeader, {
        header: parseInt(cost).toLocaleString(),
        icon: "money",
        iconColor: "#85BB65",
        label: itemDetailLabel === null || itemDetailLabel === void 0 ? void 0 : (_itemDetailLabel$pric = itemDetailLabel.priceHeader) === null || _itemDetailLabel$pric === void 0 ? void 0 : _itemDetailLabel$pric.value
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemAbstractHeader, {
        header: (0, _applicationComponent.generateDynamicLabel)((_itemDetailLabel$layo = itemDetailLabel === null || itemDetailLabel === void 0 ? void 0 : (_itemDetailLabel$layo2 = itemDetailLabel.layoutValue) === null || _itemDetailLabel$layo2 === void 0 ? void 0 : _itemDetailLabel$layo2.value) !== null && _itemDetailLabel$layo !== void 0 ? _itemDetailLabel$layo : "", [livingRoom, room]),
        icon: "numbered-list",
        iconColor: "#d7471d",
        label: itemDetailLabel === null || itemDetailLabel === void 0 ? void 0 : (_itemDetailLabel$layo3 = itemDetailLabel.layoutHeader) === null || _itemDetailLabel$layo3 === void 0 ? void 0 : _itemDetailLabel$layo3.value
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemAbstractHeader, {
        header: "".concat(parseInt(area).toLocaleString()).concat(itemDetailLabel === null || itemDetailLabel === void 0 ? void 0 : (_itemDetailLabel$area = itemDetailLabel.areaSuffix) === null || _itemDetailLabel$area === void 0 ? void 0 : _itemDetailLabel$area.value),
        icon: "home",
        iconColor: "#007AFF",
        label: itemDetailLabel === null || itemDetailLabel === void 0 ? void 0 : (_itemDetailLabel$area2 = itemDetailLabel.areaHeader) === null || _itemDetailLabel$area2 === void 0 ? void 0 : _itemDetailLabel$area2.value
      })]
    })]
  });
}

function ItemHeader(props) {
  var appLabel = props.appLabel,
      id = props.id,
      listingType = props.listingType,
      name = props.name;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
    style: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_h.default, {
      children: name
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
      style: {
        flexDirection: "row",
        justifyContent: "space-between"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_category.ListingTypeTag, {
        appLabel: appLabel,
        listingType: listingType
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_applicationTag.default, {
        color: "geekblue",
        children: ["ID: ", id]
      })]
    })]
  });
}

function MakeReservation(_ref3) {
  var _itemDetailLabel$subm;

  var itemDetailLabel = _ref3.itemDetailLabel,
      onClickSubmit = _ref3.onClickSubmit;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_flexView.default, {
    style: {
      flex: 1,
      justifyContent: "flex-end"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_applicationButton.default, {
      block: true,
      onClick: onClickSubmit,
      style: {
        marginBottom: 15
      },
      children: itemDetailLabel === null || itemDetailLabel === void 0 ? void 0 : (_itemDetailLabel$subm = itemDetailLabel.submitButton) === null || _itemDetailLabel$subm === void 0 ? void 0 : _itemDetailLabel$subm.value
    })
  });
}