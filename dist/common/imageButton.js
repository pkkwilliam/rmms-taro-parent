"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var _inherits2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper"));

var _react = _interopRequireDefault(require("react"));

var _applicationComponent = _interopRequireDefault(require("./applicationComponent.view"));

var _components = require("@tarojs/components");

var _taroUi = require("taro-ui");

var _jsxRuntime = require("react/jsx-runtime");

var ImageButton = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(ImageButton, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(ImageButton);

  function ImageButton() {
    (0, _classCallCheck2.default)(this, ImageButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ImageButton, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtButton, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.View, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Image, {})
        })
      });
    }
  }]);
  return ImageButton;
}(_applicationComponent.default);

exports.default = ImageButton;