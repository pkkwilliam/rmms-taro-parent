"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var ApplicationContext = /*#__PURE__*/function () {
  function ApplicationContext() {
    (0, _classCallCheck2.default)(this, ApplicationContext);
  }

  (0, _createClass2.default)(ApplicationContext, [{
    key: "host",
    get: function get() {
      return process.env.SERVICE_URL;
    }
  }, {
    key: "mock",
    get: function get() {
      return false;
    }
  }]);
  return ApplicationContext;
}();

exports.default = ApplicationContext;