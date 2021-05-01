"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = require("@tarojs/components");

var _applicationComponent = require("./applicationComponent.view");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageCarousel = function (_ApplicationComponent) {
  _inherits(ImageCarousel, _ApplicationComponent);

  function ImageCarousel() {
    _classCallCheck(this, ImageCarousel);

    return _possibleConstructorReturn(this, (ImageCarousel.__proto__ || Object.getPrototypeOf(ImageCarousel)).apply(this, arguments));
  }

  _createClass(ImageCarousel, [{
    key: "render",
    value: function render() {
      var imageUrls = this.props.imageUrls;
      var _appStyle = this.appStyle,
          primary = _appStyle.primary,
          secondary = _appStyle.secondary;

      var SwiperImageItems = imageUrls.map(function (imageUrl) {
        return React.createElement(
          _components.SwiperItem,
          null,
          React.createElement(_components.Image, { src: imageUrl, style: { width: "100%" } })
        );
      });
      return React.createElement(
        _components.Swiper,
        {
          indicatorColor: secondary,
          indicatorActiveColor: primary,
          circular: true,
          indicatorDots: true,
          style: { height: 245 }
        },
        SwiperImageItems
      );
    }
  }]);

  return ImageCarousel;
}(_applicationComponent2.default);

exports.default = ImageCarousel;