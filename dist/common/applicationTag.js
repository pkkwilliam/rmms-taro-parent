"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _taroUi = require("taro-ui");

var _applicationComponent = require("./applicationComponent.view");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

var _flexView = require("./flexView");

var _flexView2 = _interopRequireDefault(_flexView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var COLORS = {
  blue: { backgroundColor: "#e6f8ff", border: "#90d5ff", color: "#086dd9" },
  cyan: { backgroundColor: "#e7fffb", border: "#87e8de", color: "#189fa2" },
  geekblue: { backgroundColor: "#f0f5ff", border: "#adc6ff", color: "#314ac9" },
  green: { backgroundColor: "#fcffe6", border: "#b7eb8f", color: "#389e0f" },
  lime: { backgroundColor: "#f6ffed", border: "#ecff98", color: "#8ebe22" },
  orange: { backgroundColor: "#fff7e6", border: "#ffd99a", color: "#da8029" },
  purple: { backgroundColor: "#f9f0ff", border: "#d3adf7", color: "#5e2ab0" },
  red: { backgroundColor: "#fff1f0", border: "#ffaba7", color: "#d63b45" },
  volcano: { backgroundColor: "#fff2e8", border: "#ffc19f", color: "#d7471d" },
  yellow: { backgroundColor: "#fffbe6", border: "#ffecac", color: "#d89219" }
};

var ApplicationTag = function (_ApplicationComponent) {
  _inherits(ApplicationTag, _ApplicationComponent);

  function ApplicationTag() {
    _classCallCheck(this, ApplicationTag);

    return _possibleConstructorReturn(this, (ApplicationTag.__proto__ || Object.getPrototypeOf(ApplicationTag)).apply(this, arguments));
  }

  _createClass(ApplicationTag, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          color = _props.color,
          style = _props.style;

      return _react2.default.createElement(
        _taroUi.AtTag,
        _extends({
          customStyle: _extends({
            padding: 0,
            width: "max-content"
          }, COLORS[color], style),
          type: "primary"
        }, this.props),
        _react2.default.createElement(
          _flexView2.default,
          { style: { paddingLeft: 6, paddingRight: 6 } },
          children
        )
      );
    }
  }]);

  return ApplicationTag;
}(_applicationComponent2.default);

exports.default = ApplicationTag;