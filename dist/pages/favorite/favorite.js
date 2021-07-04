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

var _applicationComponent = _interopRequireDefault(require("../../common/applicationComponent"));

var _favorite = _interopRequireDefault(require("./favorite.view"));

var _applicationRoutes = require("../../routes/applicationRoutes");

var _jsxRuntime = require("react/jsx-runtime");

var Favorite = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(Favorite, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(Favorite);

  function Favorite() {
    var _this;

    (0, _classCallCheck2.default)(this, Favorite);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClickItem", function (item) {
      _this.goTo(_applicationRoutes.ITEM_DETAIL, [{
        key: "itemId",
        value: item.id
      }]);
    });
    return _this;
  }

  (0, _createClass2.default)(Favorite, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_favorite.default, (0, _objectSpread2.default)({
        favorites: this.appState.favorite.favorites,
        onClickItem: this.onClickItem
      }, this.state));
    }
  }]);
  return Favorite;
}(_applicationComponent.default);

exports.default = Favorite;