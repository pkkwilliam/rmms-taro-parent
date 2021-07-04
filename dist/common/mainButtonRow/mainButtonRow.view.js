"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimplifyButtonRow = SimplifyButtonRow;
exports.SimplifyButtonRowButton = SimplifyButtonRowButton;
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var _inherits2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper"));

var _react = _interopRequireDefault(require("react"));

var _components = require("@tarojs/components");

var _taroUi = require("taro-ui");

var _applicationComponent = _interopRequireDefault(require("../applicationComponent.view"));

var _cardContent = _interopRequireDefault(require("../cardContent"));

var _flexView = _interopRequireDefault(require("../flexView"));

var _info = _interopRequireDefault(require("../text/info"));

var _jsxRuntime = require("react/jsx-runtime");

var MainButtonRowView = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(MainButtonRowView, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(MainButtonRowView);

  function MainButtonRowView() {
    (0, _classCallCheck2.default)(this, MainButtonRowView);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(MainButtonRowView, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(SimplifyButtonRow, (0, _objectSpread2.default)({
        mainMenuButtonRowStyle: this.getComponentStyle("mainMenuButtonRowStyle")
      }, this.props));
    }
  }]);
  return MainButtonRowView;
}(_applicationComponent.default);

exports.default = MainButtonRowView;

function SimplifyButtonRow(_ref) {
  var mainMenuButtonRowStyle = _ref.mainMenuButtonRowStyle,
      onClickBuySegment = _ref.onClickBuySegment,
      onClickRentSegment = _ref.onClickRentSegment;
  var buy = mainMenuButtonRowStyle.buy,
      rent = mainMenuButtonRowStyle.rent;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.View, {
    className: "at-row at-row__justify--around",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_cardContent.default, {
      style: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 0,
        paddingBottom: 30,
        paddingTop: 30,
        marginTop: -20,
        width: "inherit"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(SimplifyButtonRowButton, {
        imageUrl: buy === null || buy === void 0 ? void 0 : buy.imageUrl,
        label: buy === null || buy === void 0 ? void 0 : buy.label,
        onClick: onClickBuySegment
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(SimplifyButtonRowButton, {
        imageUrl: rent === null || rent === void 0 ? void 0 : rent.imageUrl,
        label: rent === null || rent === void 0 ? void 0 : rent.label,
        onClick: onClickRentSegment
      })]
    })
  });
}

function SimplifyButtonRowButton(_ref2) {
  var imageUrl = _ref2.imageUrl,
      label = _ref2.label,
      onClick = _ref2.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
    onClick: onClick,
    style: {
      alignItems: "center"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Image, {
      src: imageUrl,
      style: {
        borderRadius: 5,
        height: 75,
        width: 75
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_info.default, {
      style: {
        color: "#888888",
        marginTop: 5
      },
      children: label
    })]
  });
}