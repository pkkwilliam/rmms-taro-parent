"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getObjectValue = getObjectValue;
exports.generateVariableLabel = generateVariableLabel;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _taroUi = require("taro-ui");

var _applicationComponent = require("./applicationComponent");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

var _contextProvider = require("../appState/contextProvider");

var _flexView = require("./flexView");

var _flexView2 = _interopRequireDefault(_flexView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApplicationComponentView = function (_ApplicationComponent) {
  _inherits(ApplicationComponentView, _ApplicationComponent);

  function ApplicationComponentView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ApplicationComponentView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ApplicationComponentView.__proto__ || Object.getPrototypeOf(ApplicationComponentView)).call.apply(_ref, [this].concat(args))), _this), _this.Wrapper = function (props) {
      var modal = _this.props.modal;

      return _react2.default.createElement(
        _flexView2.default,
        { style: _extends({ height: "100vh" }, props.style) },
        _react2.default.createElement(ErrorModal, modal),
        props.children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ApplicationComponentView, [{
    key: "appState",
    get: function get() {
      return this.context;
    }
  }, {
    key: "appStyle",
    get: function get() {
      return this.appState.companyCustomise.style;
    }
  }]);

  return ApplicationComponentView;
}(_applicationComponent2.default);

ApplicationComponentView.contextType = _contextProvider.RmmsContext;
exports.default = ApplicationComponentView;
function getObjectValue(style, defaultValue) {
  for (var _len2 = arguments.length, keys = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    keys[_key2 - 2] = arguments[_key2];
  }

  var recursionHelper = function recursionHelper(style, index, keys) {
    if (!style[keys[index]]) {
      return defaultValue;
    }
    if (index === keys.length - 1) {
      return style[keys[index]];
    }
    return recursionHelper(style[keys[index]], index + 1, keys);
  };
  return recursionHelper(style, 0, keys);
}

function ErrorModal(props) {
  var isOpen = props.isOpen;

  return _react2.default.createElement(_taroUi.AtModal, {
    isOpen: isOpen,
    title: "\u6807\u9898",
    cancelText: "\u53D6\u6D88",
    confirmText: "\u786E\u8BA4",
    onClose: function onClose() {
      return console.log("onClose");
    },
    onCancel: function onCancel() {
      return console.log("onCancel");
    },
    onConfirm: function onConfirm() {
      return console.log("onConfirm");
    },
    content: "\u6B22\u8FCE\u52A0\u5165\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4\\n\\r\u6B22\u8FCE\u52A0\u5165\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4"
  });
}

function generateVariableLabel(label, values) {
  for (var index = 0; index < values.length; index++) {
    label = label.replace("$" + (index + 1), values[index]);
  }
  return label;
}