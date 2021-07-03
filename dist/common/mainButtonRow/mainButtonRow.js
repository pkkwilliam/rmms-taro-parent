"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _applicationComponent = require("../applicationComponent");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

var _categorySegment = require("../../pages/category/categorySegment");

var _applicationRoutes = require("../../routes/applicationRoutes");

var _mainButtonRow = require("./mainButtonRow.view");

var _mainButtonRow2 = _interopRequireDefault(_mainButtonRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainButtonRow = function (_ApplicationComponent) {
  _inherits(MainButtonRow, _ApplicationComponent);

  function MainButtonRow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MainButtonRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MainButtonRow.__proto__ || Object.getPrototypeOf(MainButtonRow)).call.apply(_ref, [this].concat(args))), _this), _this.onClickBuySegment = function () {
      _this.appState.shortTermMemory.setShortTermMemory({
        currentSegmentTypeIndex: _categorySegment.SELL_SEGMENT.index
      });
      _this.goToTabBar(_applicationRoutes.CATEGORY);
    }, _this.onClickRentSegment = function () {
      _this.appState.shortTermMemory.setShortTermMemory({
        // this is so wrong, not sure why we cant import value
        currentSegmentTypeIndex: _categorySegment.RENT_SEGMENT.index
      });
      _this.goToTabBar(_applicationRoutes.CATEGORY);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MainButtonRow, [{
    key: "render",
    value: function render() {
      var _appState$companyCust = this.appState.companyCustomise,
          mainMenuButtonRow = _appState$companyCust.mainMenuButtonRow,
          style = _appState$companyCust.style;

      return _react2.default.createElement(_mainButtonRow2.default, _extends({
        customStyle: style,
        onClickBuySegment: this.onClickBuySegment,
        onClickRentSegment: this.onClickRentSegment,
        mainMenuButtonRow: mainMenuButtonRow
      }, this.state));
    }
  }]);

  return MainButtonRow;
}(_applicationComponent2.default);

exports.default = MainButtonRow;