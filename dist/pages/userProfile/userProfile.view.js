"use strict";

var _interopRequireWildcard = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = Container;
exports.UserSection = UserSection;
exports.UserMenuList = UserMenuList;
exports.displayShortTime = displayShortTime;
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var _inherits2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper"));

var _react = _interopRequireWildcard(require("react"));

var _taroUi = require("taro-ui");

var _applicationComponent = _interopRequireWildcard(require("../../common/applicationComponent.view"));

var _info = _interopRequireDefault(require("../../common/text/info"));

var _h = _interopRequireDefault(require("../../common/text/h2"));

var _flexView = _interopRequireDefault(require("../../common/flexView"));

var _cardContent = _interopRequireDefault(require("../../common/cardContent"));

var _jsxRuntime = require("react/jsx-runtime");

var UserProfileView = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(UserProfileView, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(UserProfileView);

  function UserProfileView() {
    (0, _classCallCheck2.default)(this, UserProfileView);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(UserProfileView, [{
    key: "getComponentLabelName",
    value: function getComponentLabelName() {
      return "userProfileLabel";
    }
  }, {
    key: "getComponentStyleName",
    value: function getComponentStyleName() {
      return "userProfileStyle";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(this.Wrapper, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Container, (0, _objectSpread2.default)({
          appLabel: this.appLabel,
          componentLabel: this.componentLabel
        }, this.props))
      });
    }
  }]);
  return UserProfileView;
}(_applicationComponent.default);

exports.default = UserProfileView;

function Container(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_flexView.default, {
      style: {
        margin: 15
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(UserSection, (0, _objectSpread2.default)({
        onClickRefreshUserProfileInfo: props.onClickRefreshUserProfileInfo
      }, props.userProfile))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_flexView.default, {
      style: {
        margin: 15
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(UserMenuList, (0, _objectSpread2.default)({}, props))
    })]
  });
}

function UserSection(_ref) {
  var createTime = _ref.createTime,
      imageUrl = _ref.imageUrl,
      name = _ref.name,
      onClickRefreshUserProfileInfo = _ref.onClickRefreshUserProfileInfo;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_cardContent.default, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
      style: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
        style: {
          alignItems: "center",
          flexDirection: "row"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtAvatar, {
          circle: true,
          image: imageUrl
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
          style: {
            marginLeft: 15
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_h.default, {
            children: name
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_info.default, {
            children: ["\u9996\u6B21\u4F7F\u7528: ", displayShortTime(createTime)]
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtButton, {
        customStyle: {
          margin: 0
        },
        onClick: onClickRefreshUserProfileInfo,
        size: "small",
        type: "secondary",
        children: "\u66F4\u65B0\u8CC7\u6599"
      })]
    })
  });
}

function UserMenuList(_ref2) {
  var _componentLabel$favor, _componentLabel$favor2;

  var componentLabel = _ref2.componentLabel,
      favorites = _ref2.favorites,
      onClickMenuItemFavorite = _ref2.onClickMenuItemFavorite;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtList, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtListItem, {
      onClick: onClickMenuItemFavorite,
      title: componentLabel === null || componentLabel === void 0 ? void 0 : (_componentLabel$favor = componentLabel.favorite) === null || _componentLabel$favor === void 0 ? void 0 : _componentLabel$favor.value,
      extraText: (0, _applicationComponent.generateDynamicLabel)(componentLabel === null || componentLabel === void 0 ? void 0 : (_componentLabel$favor2 = componentLabel.favoriteCount) === null || _componentLabel$favor2 === void 0 ? void 0 : _componentLabel$favor2.value, [favorites.length]),
      arrow: "right"
    })
  });
}

function displayShortTime(dateTime) {
  if (!dateTime) {
    dateTime = Date.now();
  }

  var current = new Date(dateTime);
  return "".concat(current.getFullYear(), "-").concat(current.getUTCMonth() + 1, "-").concat(current.getDate());
}