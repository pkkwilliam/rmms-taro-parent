"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var _defineProperty2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _service = require("./service");

var AppStateService = /*#__PURE__*/function () {
  function AppStateService(appState, serviceExecutor) {
    (0, _classCallCheck2.default)(this, AppStateService);
    (0, _defineProperty2.default)(this, "appState", void 0);
    (0, _defineProperty2.default)(this, "serviceExecutor", void 0);
    this.appState = appState;
    this.serviceExecutor = serviceExecutor;
  }

  (0, _createClass2.default)(AppStateService, [{
    key: "getCategories",
    value: function getCategories(companyId) {
      var _this = this;

      var _this$appState$catego = this.appState.category,
          categories = _this$appState$catego.categories,
          dirty = _this$appState$catego.dirty,
          setCategories = _this$appState$catego.setCategories;
      return new Promise(function (resolve, reject) {
        if (dirty) {
          _this.serviceExecutor.execute((0, _service.GET_COMPANY_CATEGORIES)(companyId)).then(function (categoriesResponse) {
            setCategories(categoriesResponse);
            return resolve(categoriesResponse);
          });
        } else {
          return resolve(categories);
        }
      });
    }
  }, {
    key: "getCompany",
    value: function getCompany(companyId) {
      var _this2 = this;

      var _this$appState$compan = this.appState.company,
          companyInfo = _this$appState$compan.companyInfo,
          dirty = _this$appState$compan.dirty,
          setCompany = _this$appState$compan.setCompany;
      return new Promise(function (resolve, reject) {
        if (dirty) {
          _this2.serviceExecutor.execute((0, _service.GET_COMPANY)(companyId)).then(function (companyInfo) {
            setCompany(companyInfo);
            return resolve(companyInfo);
          });
        } else {
          return resolve(companyInfo);
        }
      });
    }
  }, {
    key: "getCompanyCustomise",
    value: function getCompanyCustomise(companyId) {
      var _this3 = this;

      var _this$appState$compan2 = this.appState.companyCustomise,
          dirty = _this$appState$compan2.dirty,
          setCompanyCustomise = _this$appState$compan2.setCompanyCustomise;
      return new Promise(function (resolve, reject) {
        if (dirty) {
          _this3.serviceExecutor.execute((0, _service.GET_COMPANY_CUSTOMISE)(companyId)).then(function (result) {
            var content = JSON.parse(result.content);
            setCompanyCustomise(content);
            return resolve(content);
          });
        } else {
          resolve(_this3.appState.companyCustomise);
        }
      });
    }
  }, {
    key: "getFavorites",
    value: function getFavorites() {
      var _this4 = this;

      var _this$appState$favori = this.appState.favorite,
          dirty = _this$appState$favori.dirty,
          favorites = _this$appState$favori.favorites,
          setFavorites = _this$appState$favori.setFavorites;
      return new Promise(function (resolve, reject) {
        if (dirty) {
          _this4.serviceExecutor.execute((0, _service.GET_USER_FAVORITE_ALL)()).then(function (favoritesResponse) {
            setFavorites(favoritesResponse);
            return resolve(favorites);
          });
        } else {
          return resolve(favorites);
        }
      });
    }
  }, {
    key: "getItems",
    value: function getItems(companyId) {
      var _this5 = this;

      var _this$appState$item = this.appState.item,
          dirty = _this$appState$item.dirty,
          items = _this$appState$item.items,
          setItems = _this$appState$item.setItems;
      return new Promise(function (resolve, reject) {
        if (dirty) {
          _this5.serviceExecutor.execute((0, _service.GET_ITEMS)(companyId)).then(function (items) {
            setItems(items);
            return resolve(items);
          });
        } else {
          return resolve(items);
        }
      });
    }
  }, {
    key: "login",
    value: function login(companyId, code) {
      var _this6 = this;

      var _this$appState$userPr = this.appState.userProfile,
          dirty = _this$appState$userPr.dirty,
          userProfile = _this$appState$userPr.userProfile,
          setUserProfile = _this$appState$userPr.setUserProfile;
      return new Promise(function (resolve, reject) {
        if (dirty) {
          _this6.serviceExecutor.execute((0, _service.LOGIN_ACCORDING_TO_COMPANY)(companyId, code)).then(function (userProfileResponse) {
            return setUserProfile(userProfileResponse);
          });

          return resolve(userProfile);
        }

        return resolve(userProfile);
      });
    }
  }]);
  return AppStateService;
}();

exports.default = AppStateService;