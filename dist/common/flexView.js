"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FlexView;

var _objectSpread2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _components = require("@tarojs/components");

var _jsxRuntime = require("react/jsx-runtime");

function FlexView(props) {
  var children = props.children,
      onClick = props.onClick,
      style = props.style;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.View, {
    style: (0, _objectSpread2.default)({
      display: "flex",
      flexDirection: "column"
    }, style),
    onClick: onClick,
    children: children
  });
}