"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FavoriteList = FavoriteList;
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var _inherits2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper"));

var _react = _interopRequireDefault(require("react"));

var _taroUi = require("taro-ui");

var _applicationComponent = _interopRequireDefault(require("../../common/applicationComponent.view"));

var _flexView = _interopRequireDefault(require("../../common/flexView"));

var _jsxRuntime = require("react/jsx-runtime");

var FavoriteView = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(FavoriteView, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(FavoriteView);

  function FavoriteView() {
    (0, _classCallCheck2.default)(this, FavoriteView);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(FavoriteView, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(this.Wrapper, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_flexView.default, {
          style: {
            marginTop: 15
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(FavoriteList, (0, _objectSpread2.default)({}, this.props))
        })
      });
    }
  }]);
  return FavoriteView;
}(_applicationComponent.default);

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
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtListItem, {
      arrow: "right",
      title: name,
      onClick: function onClick() {
        return onClickItem(favorite);
      },
      hasBorder: false,
      note: address,
      thumb: imageUrls[0]
    }, "favorite" + index);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtList, {
    children: ListItems
  });
}