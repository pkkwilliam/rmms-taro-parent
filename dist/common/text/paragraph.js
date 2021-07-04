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

var _components = require("@tarojs/components");

var _applicationComponent = _interopRequireDefault(require("../applicationComponent.view"));

var _jsxRuntime = require("react/jsx-runtime");

var P = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(P, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(P);

  function P() {
    (0, _classCallCheck2.default)(this, P);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(P, [{
    key: "render",
    value: function render() {
      var _this$appStyle, _this$appStyle$second;

      var _this$props = this.props,
          children = _this$props.children,
          _this$props$companyCo = _this$props.companyColor,
          companyColor = _this$props$companyCo === void 0 ? false : _this$props$companyCo,
          style = _this$props.style;
      var color = companyColor ? (_this$appStyle = this.appStyle) === null || _this$appStyle === void 0 ? void 0 : (_this$appStyle$second = _this$appStyle.secondary) === null || _this$appStyle$second === void 0 ? void 0 : _this$appStyle$second.value : this.getColor();
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.View, {
        className: this.getClassName(),
        style: (0, _objectSpread2.default)({
          margin: 0,
          color: color,
          whiteSpace: "pre-wrap"
        }, style),
        children: children
      });
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return "";
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      return "at-article__p";
    }
  }]);
  return P;
}(_applicationComponent.default);

exports.default = P;