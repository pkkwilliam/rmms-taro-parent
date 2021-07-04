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

var COLORS = {
  blue: {
    backgroundColor: "#e6f8ff",
    border: "#90d5ff",
    color: "#086dd9"
  },
  cyan: {
    backgroundColor: "#e7fffb",
    border: "#87e8de",
    color: "#189fa2"
  },
  geekblue: {
    backgroundColor: "#f0f5ff",
    border: "#adc6ff",
    color: "#314ac9"
  },
  green: {
    backgroundColor: "#fcffe6",
    border: "#b7eb8f",
    color: "#389e0f"
  },
  lime: {
    backgroundColor: "#f6ffed",
    border: "#ecff98",
    color: "#8ebe22"
  },
  orange: {
    backgroundColor: "#fff7e6",
    border: "#ffd99a",
    color: "#da8029"
  },
  purple: {
    backgroundColor: "#f9f0ff",
    border: "#d3adf7",
    color: "#5e2ab0"
  },
  red: {
    backgroundColor: "#fff1f0",
    border: "#ffaba7",
    color: "#d63b45"
  },
  volcano: {
    backgroundColor: "#fff2e8",
    border: "#ffc19f",
    color: "#d7471d"
  },
  yellow: {
    backgroundColor: "#fffbe6",
    border: "#ffecac",
    color: "#d89219"
  }
};

var ApplicationTag = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(ApplicationTag, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(ApplicationTag);

  function ApplicationTag() {
    (0, _classCallCheck2.default)(this, ApplicationTag);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ApplicationTag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          color = _this$props.color,
          style = _this$props.style;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtTag, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        customStyle: (0, _objectSpread2.default)((0, _objectSpread2.default)({
          padding: 0,
          width: "max-content"
        }, COLORS[color]), style),
        type: "primary"
      }, this.props), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_flexView.default, {
          style: {
            paddingLeft: 6,
            paddingRight: 6
          },
          children: children
        })
      }));
    }
  }]);
  return ApplicationTag;
}(_applicationComponent.default);

exports.default = ApplicationTag;