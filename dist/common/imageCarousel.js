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

var _components = require("@tarojs/components");

var _applicationComponent = _interopRequireDefault(require("./applicationComponent.view"));

var _jsxRuntime = require("react/jsx-runtime");

var ImageCarousel = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(ImageCarousel, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(ImageCarousel);

  function ImageCarousel() {
    (0, _classCallCheck2.default)(this, ImageCarousel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ImageCarousel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imageUrls = _this$props.imageUrls,
          style = _this$props.style;
      var _this$appStyle = this.appStyle,
          primary = _this$appStyle.primary,
          secondary = _this$appStyle.secondary;
      var SwiperImageItems = imageUrls.map(function (imageUrl) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.SwiperItem, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Image, {
            src: imageUrl,
            style: {
              width: "100%"
            }
          })
        });
      });
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Swiper, {
        indicatorColor: secondary === null || secondary === void 0 ? void 0 : secondary.value,
        indicatorActiveColor: primary === null || primary === void 0 ? void 0 : primary.value,
        circular: true,
        indicatorDots: true,
        style: (0, _objectSpread2.default)({
          height: 245
        }, style),
        children: SwiperImageItems
      });
    }
  }]);
  return ImageCarousel;
}(_applicationComponent.default);

exports.default = ImageCarousel;