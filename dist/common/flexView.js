"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FlexView;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _components = require("@tarojs/components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FlexView(props) {
  var children = props.children,
      onClick = props.onClick,
      style = props.style;

  return _react2.default.createElement(
    _components.View,
    {
      style: _extends({
        display: "flex",
        flexDirection: "column"
      }, style),
      onClick: onClick
    },
    children
  );
}