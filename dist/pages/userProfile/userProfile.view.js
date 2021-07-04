"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserSection = UserSection;
exports.UserMenuList = UserMenuList;
exports.displayShortTime = displayShortTime;
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var _inherits2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper"));

var _react = _interopRequireDefault(require("react"));

var _taroUi = require("taro-ui");

var _applicationComponent = _interopRequireDefault(require("../../common/applicationComponent.view"));

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
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(this.Wrapper, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_flexView.default, {
          style: {
            margin: 15
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(UserSection, (0, _objectSpread2.default)({
            onClickRefreshUserProfileInfo: this.props.onClickRefreshUserProfileInfo
          }, this.props.userProfile))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_flexView.default, {
          style: {
            margin: 15
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(UserMenuList, (0, _objectSpread2.default)({}, this.props))
        })]
      });
    }
  }]);
  return UserProfileView;
}(_applicationComponent.default);

exports.default = UserProfileView;

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
  var favorites = _ref2.favorites,
      onClickMenuItemFavorite = _ref2.onClickMenuItemFavorite;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtList, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtListItem, {
      onClick: onClickMenuItemFavorite,
      title: "\u6536\u85CF",
      extraText: "".concat(favorites.length, "\u500B\u6A13\u76E4"),
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