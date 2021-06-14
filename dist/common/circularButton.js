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

var CircularButton = function (_ApplicationComponent) {
  _inherits(CircularButton, _ApplicationComponent);

  function CircularButton() {
    _classCallCheck(this, CircularButton);

    return _possibleConstructorReturn(this, (CircularButton.__proto__ || Object.getPrototypeOf(CircularButton)).apply(this, arguments));
  }

  _createClass(CircularButton, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          color = _props.color,
          _props$onClick = _props.onClick,
          onClick = _props$onClick === undefined ? function () {
        return console.log("please override");
      } : _props$onClick,
          style = _props.style,
          url = _props.url;
      var _appStyle = this.appStyle,
          primary = _appStyle.primary,
          secondary = _appStyle.secondary;

      return _react2.default.createElement(
        _flexView2.default,
        _extends({ onClick: onClick }, this.props),
        _react2.default.createElement(_taroUi.AtAvatar, { circle: true, image: url })
      );
    }
  }]);

  return CircularButton;
}(_applicationComponent2.default);

exports.default = CircularButton;