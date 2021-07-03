"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoContent = NoContent;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _flexView = require("../../common/flexView");

var _flexView2 = _interopRequireDefault(_flexView);

var _h = require("../common/text/h1");

var _h2 = _interopRequireDefault(_h);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NoContent() {
  return _react2.default.createElement(
    _flexView2.default,
    null,
    _react2.default.createElement(
      _h2.default,
      null,
      "\u66AB\u6642\u6CA1\u6709\u8CC7\u6599"
    )
  );
}