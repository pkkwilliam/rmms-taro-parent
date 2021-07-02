"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.FavoriteList = FavoriteList;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _taroUi = require("taro-ui");

var _applicationComponent = require("../../common/applicationComponent.view");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

var _flexView = require("../../common/flexView");

var _flexView2 = _interopRequireDefault(_flexView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FavoriteView = function (_ApplicationComponent) {
  _inherits(FavoriteView, _ApplicationComponent);

  function FavoriteView() {
    _classCallCheck(this, FavoriteView);

    return _possibleConstructorReturn(this, (FavoriteView.__proto__ || Object.getPrototypeOf(FavoriteView)).apply(this, arguments));
  }

  _createClass(FavoriteView, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        this.Wrapper,
        null,
        _react2.default.createElement(
          _flexView2.default,
          { style: { marginTop: 15 } },
          _react2.default.createElement(FavoriteList, this.props)
        )
      );
    }
  }]);

  return FavoriteView;
}(_applicationComponent2.default);

exports.default = FavoriteView;
function FavoriteList(_ref) {
  var favorites = _ref.favorites,
      onClickItem = _ref.onClickItem;

  console.log(favorites);
  var ListItems = favorites.map(function (favorite, index) {
    var address = favorite.address,
        cost = favorite.cost,
        imageUrls = favorite.imageUrls,
        name = favorite.name;

    console.log();
    return _react2.default.createElement(_taroUi.AtListItem, {
      arrow: "right",
      key: "favorite" + index,
      title: name,
      onClick: function onClick() {
        return onClickItem(favorite);
      },
      hasBorder: false,
      note: address,
      thumb: imageUrls[0]
    });
  });
  return _react2.default.createElement(
    _taroUi.AtList,
    null,
    ListItems
  );
}