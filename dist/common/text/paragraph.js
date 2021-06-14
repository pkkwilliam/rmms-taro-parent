"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _components = require("@tarojs/components");

var _applicationComponent = require("../applicationComponent.view");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var P = function (_ApplicationComponent) {
  _inherits(P, _ApplicationComponent);

  function P() {
    _classCallCheck(this, P);

    return _possibleConstructorReturn(this, (P.__proto__ || Object.getPrototypeOf(P)).apply(this, arguments));
  }

  _createClass(P, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          _props$companyColor = _props.companyColor,
          companyColor = _props$companyColor === undefined ? false : _props$companyColor,
          style = _props.style;

      var color = companyColor ? this.appStyle.secondary : this.getColor();
      return _react2.default.createElement(
        _components.View,
        {
          className: this.getClassName(),
          style: _extends({ margin: 0, color: color, whiteSpace: "pre-wrap" }, style)
        },
        children
      );
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return "";
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      return "at-article__p";
    }
  }]);

  return P;
}(_applicationComponent2.default);

exports.default = P;