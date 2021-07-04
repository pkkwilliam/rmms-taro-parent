"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var _inherits2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper"));

var _react = _interopRequireDefault(require("react"));

var _taroUi = require("taro-ui");

var _applicationComponent = _interopRequireDefault(require("./applicationComponent.view"));

var _h = _interopRequireDefault(require("./text/h2"));

var _jsxRuntime = require("react/jsx-runtime");

var ApplicationButton = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(ApplicationButton, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(ApplicationButton);

  function ApplicationButton() {
    (0, _classCallCheck2.default)(this, ApplicationButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ApplicationButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          style = _this$props.style;
      var _this$appStyle = this.appStyle,
          primary = _this$appStyle.primary,
          secondary = _this$appStyle.secondary;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtButton, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        circle: true,
        customStyle: (0, _objectSpread2.default)({
          alignItems: "center",
          backgroundColor: primary === null || primary === void 0 ? void 0 : primary.value,
          borderColor: secondary === null || secondary === void 0 ? void 0 : secondary.value,
          justifyContent: "center",
          width: "100%"
        }, style)
      }, this.props), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_h.default, {
          style: {
            color: "white"
          },
          children: children
        })
      }));
    }
  }]);
  return ApplicationButton;
}(_applicationComponent.default);

exports.default = ApplicationButton;