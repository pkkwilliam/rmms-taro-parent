"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CardContent;

var _objectSpread2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _card = _interopRequireDefault(require("./card"));

var _jsxRuntime = require("react/jsx-runtime");

function CardContent(props) {
  var _props$backgroundColo = props.backgroundColor,
      backgroundColor = _props$backgroundColo === void 0 ? "#FDFFFE" : _props$backgroundColo,
      children = props.children,
      style = props.style;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_card.default, {
    style: (0, _objectSpread2.default)({
      backgroundColor: backgroundColor,
      // marginTop: -25, comment out this since we are not able to to control the dot height of taro ui carousel
      zIndex: 10
    }, style),
    children: children
  });
}