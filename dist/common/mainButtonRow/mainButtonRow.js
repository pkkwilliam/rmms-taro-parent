"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper"));

var _defineProperty2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _applicationComponent = _interopRequireDefault(require("../applicationComponent"));

var _categorySegment = require("../../pages/category/categorySegment");

var _applicationRoutes = require("../../routes/applicationRoutes");

var _mainButtonRow = _interopRequireDefault(require("./mainButtonRow.view"));

var _jsxRuntime = require("react/jsx-runtime");

var MainButtonRow = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(MainButtonRow, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(MainButtonRow);

  function MainButtonRow() {
    var _this;

    (0, _classCallCheck2.default)(this, MainButtonRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClickBuySegment", function () {
      _this.appState.shortTermMemory.setShortTermMemory({
        currentSegmentTypeIndex: _categorySegment.SELL_SEGMENT.index
      });

      _this.goToTabBar(_applicationRoutes.CATEGORY);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClickRentSegment", function () {
      _this.appState.shortTermMemory.setShortTermMemory({
        // this is so wrong, not sure why we cant import value
        currentSegmentTypeIndex: _categorySegment.RENT_SEGMENT.index
      });

      _this.goToTabBar(_applicationRoutes.CATEGORY);
    });
    return _this;
  }

  (0, _createClass2.default)(MainButtonRow, [{
    key: "render",
    value: function render() {
      var _this$appState$compan = this.appState.companyCustomise,
          mainMenuButtonRow = _this$appState$compan.mainMenuButtonRow,
          style = _this$appState$compan.style;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_mainButtonRow.default, (0, _objectSpread2.default)({
        customStyle: style,
        onClickBuySegment: this.onClickBuySegment,
        onClickRentSegment: this.onClickRentSegment,
        mainMenuButtonRow: mainMenuButtonRow
      }, this.state));
    }
  }]);
  return MainButtonRow;
}(_applicationComponent.default);

exports.default = MainButtonRow;