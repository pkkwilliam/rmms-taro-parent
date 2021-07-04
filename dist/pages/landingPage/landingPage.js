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

var _taro = _interopRequireDefault(require("@tarojs/taro"));

var _applicationComponent = _interopRequireDefault(require("../../common/applicationComponent"));

var _landingPage = _interopRequireDefault(require("./landingPage.view"));

var _applicationRoutes = require("../../routes/applicationRoutes");

var _categorySegment = require("../category/categorySegment");

var _jsxRuntime = require("react/jsx-runtime");

var LandingPage = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(LandingPage, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(LandingPage);

  function LandingPage() {
    var _this;

    (0, _classCallCheck2.default)(this, LandingPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", (0, _objectSpread2.default)({}, _this.state));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClickMenuButton", function (categoryId) {
      _this.goToTabBar(_applicationRoutes.CATEGORY, [{
        key: "categoryId",
        value: categoryId
      }]);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClickItem", function (item) {
      _this.goTo(_applicationRoutes.ITEM_DETAIL, [{
        key: "itemId",
        value: item.id
      }]);
    });
    return _this;
  }

  (0, _createClass2.default)(LandingPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _taro.default.getSystemInfo().then(function (devivceInfo) {
        return _this2.appState.deviceInfo.setDeviceInfo(devivceInfo);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$appState = this.appState,
          category = _this$appState.category,
          companyCustomise = _this$appState.companyCustomise,
          item = _this$appState.item;
      var landingPage = companyCustomise.landingPage,
          style = companyCustomise.style;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_landingPage.default, (0, _objectSpread2.default)({
        categories: category.categories,
        customStyle: style,
        items: item.items,
        landingPage: landingPage,
        onClickItem: this.onClickItem,
        onClickMenuButton: this.onClickMenuButton
      }, this.state));
    }
    /**
     * @deprecated
     * @param {*} categoryId
     */

  }]);
  return LandingPage;
}(_applicationComponent.default);

exports.default = LandingPage;