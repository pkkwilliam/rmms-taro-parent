"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFavoriteItem = isFavoriteItem;
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

var _itemDetail = _interopRequireDefault(require("./itemDetail.view"));

var _service = require("../../service/service");

var _jsxRuntime = require("react/jsx-runtime");

var ItemDetail = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(ItemDetail, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(ItemDetail);

  function ItemDetail() {
    var _this;

    (0, _classCallCheck2.default)(this, ItemDetail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _this.state), {}, {
      itemDetail: {
        imageUrls: []
      },
      showAgency: false
    }));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClickFavorite", function () {
      var itemDetail = _this.state.itemDetail;
      var successMessage = "";

      if (isFavoriteItem(itemDetail, _this.appState.favorite.favorites)) {
        _this.serviceExecutor.execute((0, _service.DELETE_USER_FAVORITE)(itemDetail)).then(function (updateFavorites) {
          return _this.appState.favorite.setFavorites(updateFavorites);
        });
      } else {
        _this.serviceExecutor.execute((0, _service.ADD_USER_FAVORITE)(itemDetail)).then(function (updateFavorites) {
          return _this.appState.favorite.setFavorites(updateFavorites);
        });

        successMessage = "收藏成功";
      }

      _taro.default.showToast({
        title: successMessage,
        icon: "success",
        duration: 2000
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toggleShowAgency", function () {
      _this.setState(function (state) {
        return {
          showAgency: !state.showAgency
        };
      });
    });
    return _this;
  }

  (0, _createClass2.default)(ItemDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var companyId = this.appState.company.id;

      var _this$getRouterParams = this.getRouterParams(),
          itemId = _this$getRouterParams.itemId;

      this.getLocalItemDetail(companyId, itemId);
      this.appStateService.getFavorites();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$appState$compan = this.appState.companyCustomise.label,
          common = _this$appState$compan.common,
          itemDetail = _this$appState$compan.itemDetail;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_itemDetail.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.state), {}, {
        commonLabel: common,
        isFavoriteItem: isFavoriteItem(this.state.itemDetail, this.appState.favorite.favorites),
        label: itemDetail,
        onClickFavorite: this.onClickFavorite,
        toggleShowAgency: this.toggleShowAgency
      }));
    }
  }, {
    key: "getLocalItemDetail",
    value: function getLocalItemDetail(companyId, itemId) {
      var _this2 = this;

      this.appStateService.getItems().then(function (items) {
        return items.map(function (item) {
          if (item.id == itemId) {
            _this2.setState();

            _this2.setState({
              isFavoriteItem: isFavoriteItem(item, _this2.appStateService.getFavorites()),
              itemDetail: item
            });
          }
        });
      });
    }
  }, {
    key: "getRemoteItemDetail",
    value: function getRemoteItemDetail(companyId, itemId) {
      var _this3 = this;

      this.serviceExecutor.execute((0, _service.GET_ITEM)(companyId, itemId)).then(function (itemDetail) {
        return _this3.setState({
          itemDetail: itemDetail
        });
      });
    }
  }]);
  return ItemDetail;
}(_applicationComponent.default);

exports.default = ItemDetail;

function isFavoriteItem(itemDetail, favorites) {
  for (var i = 0; i < favorites.length; i++) {
    if (favorites[i].id === itemDetail.id) {
      return true;
    }
  }

  return false;
}