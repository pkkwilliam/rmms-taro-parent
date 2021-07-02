"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CardContent;

var _card = require("./card");

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardContent(props) {
  var _props$backgroundColo = props.backgroundColor,
      backgroundColor = _props$backgroundColo === undefined ? "#FFFFFF" : _props$backgroundColo,
      children = props.children,
      style = props.style;

  return React.createElement(
    _card2.default,
    {
      style: _extends({
        backgroundColor: backgroundColor,
        // marginTop: -25, comment out this since we are not able to to control the dot height of taro ui carousel
        paddingLeft: 15,
        paddingRight: 15,
        zIndex: 10
      }, style)
    },
    children
  );
}