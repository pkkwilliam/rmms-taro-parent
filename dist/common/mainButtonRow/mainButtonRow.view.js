"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.SimplifyButtonRow = SimplifyButtonRow;
exports.SimplifyButtonRowButton = SimplifyButtonRowButton;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _components = require("@tarojs/components");

var _taroUi = require("taro-ui");

var _applicationComponent = require("../applicationComponent.view");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

var _cardContent = require("../cardContent");

var _cardContent2 = _interopRequireDefault(_cardContent);

var _flexView = require("../flexView");

var _flexView2 = _interopRequireDefault(_flexView);

var _info = require("../text/info");

var _info2 = _interopRequireDefault(_info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainButtonRowView = function (_ApplicationComponent) {
  _inherits(MainButtonRowView, _ApplicationComponent);

  function MainButtonRowView() {
    _classCallCheck(this, MainButtonRowView);

    return _possibleConstructorReturn(this, (MainButtonRowView.__proto__ || Object.getPrototypeOf(MainButtonRowView)).apply(this, arguments));
  }

  _createClass(MainButtonRowView, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(SimplifyButtonRow, this.props);
    }
  }]);

  return MainButtonRowView;
}(_applicationComponent2.default);

exports.default = MainButtonRowView;
function SimplifyButtonRow(_ref) {
  var customStyle = _ref.customStyle,
      mainMenuButtonRow = _ref.mainMenuButtonRow,
      onClickBuySegment = _ref.onClickBuySegment,
      onClickRentSegment = _ref.onClickRentSegment;
  var buy = mainMenuButtonRow.buy,
      rent = mainMenuButtonRow.rent;

  return _react2.default.createElement(
    _components.View,
    { className: "at-row at-row__justify--around" },
    _react2.default.createElement(
      _cardContent2.default,
      {
        style: {
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: 0,
          paddingBottom: 30,
          paddingTop: 30,
          marginTop: -20,
          width: "inherit"
        }
      },
      _react2.default.createElement(SimplifyButtonRowButton, {
        imageUrl: (0, _applicationComponent.getObjectValue)(buy, "", "imageUrl"),
        label: (0, _applicationComponent.getObjectValue)(buy, "", "label"),
        onClick: onClickBuySegment
      }),
      _react2.default.createElement(SimplifyButtonRowButton, {
        imageUrl: (0, _applicationComponent.getObjectValue)(rent, "", "imageUrl"),
        label: (0, _applicationComponent.getObjectValue)(rent, "", "label"),
        onClick: onClickRentSegment
      })
    )
  );
}

function SimplifyButtonRowButton(_ref2) {
  var imageUrl = _ref2.imageUrl,
      label = _ref2.label,
      onClick = _ref2.onClick;

  return _react2.default.createElement(
    _flexView2.default,
    { onClick: onClick, style: { alignItems: "center" } },
    _react2.default.createElement(_components.Image, {
      src: imageUrl,
      style: { borderRadius: 5, height: 75, width: 75 }
    }),
    _react2.default.createElement(
      _info2.default,
      { style: { color: "#888888", marginTop: 5 } },
      label
    )
  );
}