"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.isFavoriteItem = isFavoriteItem;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _taro = require("@tarojs/taro");

var _taro2 = _interopRequireDefault(_taro);

var _applicationComponent = require("../../common/applicationComponent");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

var _itemDetail = require("./itemDetail.view");

var _itemDetail2 = _interopRequireDefault(_itemDetail);

var _service = require("../../service/service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemDetail = function (_ApplicationComponent) {
  _inherits(ItemDetail, _ApplicationComponent);

  function ItemDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ItemDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ItemDetail.__proto__ || Object.getPrototypeOf(ItemDetail)).call.apply(_ref, [this].concat(args))), _this), _this.state = _extends({}, _this.state, {
      itemDetail: { imageUrls: [] },
      showAgency: false
    }), _this.onClickFavorite = function () {
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
      _taro2.default.showToast({
        title: successMessage,
        icon: "success",
        duration: 2000
      });
    }, _this.toggleShowAgency = function () {
      _this.setState(function (state) {
        return {
          showAgency: !state.showAgency
        };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ItemDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var companyId = this.appState.company.id;

      var _getRouterParams = this.getRouterParams(),
          itemId = _getRouterParams.itemId;

      this.getLocalItemDetail(companyId, itemId);
      this.appStateService.getFavorites();
    }
  }, {
    key: "render",
    value: function render() {
      var _appState$companyCust = this.appState.companyCustomise.label,
          common = _appState$companyCust.common,
          itemDetail = _appState$companyCust.itemDetail;

      return _react2.default.createElement(_itemDetail2.default, _extends({}, this.state, {
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
}(_applicationComponent2.default);

exports.default = ItemDetail;
function isFavoriteItem(itemDetail, favorites) {
  for (var i = 0; i < favorites.length; i++) {
    if (favorites[i].id === itemDetail.id) {
      return true;
    }
  }
  return false;
}