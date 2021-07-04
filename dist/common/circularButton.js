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

var _flexView = _interopRequireDefault(require("./flexView"));

var _jsxRuntime = require("react/jsx-runtime");

var CircularButton = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(CircularButton, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(CircularButton);

  function CircularButton() {
    (0, _classCallCheck2.default)(this, CircularButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(CircularButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          color = _this$props.color,
          _this$props$onClick = _this$props.onClick,
          onClick = _this$props$onClick === void 0 ? function () {
        return console.log("please override");
      } : _this$props$onClick,
          style = _this$props.style,
          url = _this$props.url;
      var _this$appStyle = this.appStyle,
          primary = _this$appStyle.primary,
          secondary = _this$appStyle.secondary;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_flexView.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        onClick: onClick
      }, this.props), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtAvatar, {
          circle: true,
          image: url
        })
      }));
    }
  }]);
  return CircularButton;
}(_applicationComponent.default);

exports.default = CircularButton;