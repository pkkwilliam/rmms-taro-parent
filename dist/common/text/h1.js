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

var _paragraph = _interopRequireDefault(require("./paragraph"));

var H1 = /*#__PURE__*/function (_P) {
  (0, _inherits2.default)(H1, _P);

  var _super = (0, _createSuper2.default)(H1);

  function H1() {
    (0, _classCallCheck2.default)(this, H1);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(H1, [{
    key: "getColor",
    value: function getColor() {
      return "#5F5F5F";
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      return "at-article__h1";
    }
  }]);
  return H1;
}(_paragraph.default);

exports.default = H1;