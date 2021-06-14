"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _service = require("./service");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppStateService = function () {
  function AppStateService(appState, serviceExecutor) {
    _classCallCheck(this, AppStateService);

    this.appState = appState;
    this.serviceExecutor = serviceExecutor;
  }

  _createClass(AppStateService, [{
    key: "getCategories",
    value: function getCategories(companyId) {
      var _this = this;

      var _appState$category = this.appState.category,
          categories = _appState$category.categories,
          dirty = _appState$category.dirty,
          setCategories = _appState$category.setCategories;

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

      var _appState$company = this.appState.company,
          companyInfo = _appState$company.companyInfo,
          dirty = _appState$company.dirty,
          setCompany = _appState$company.setCompany;

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

      var _appState$companyCust = this.appState.companyCustomise,
          dirty = _appState$companyCust.dirty,
          setCompanyCustomise = _appState$companyCust.setCompanyCustomise;

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
    key: "getItems",
    value: function getItems(companyId) {
      var _this4 = this;

      var _appState$item = this.appState.item,
          dirty = _appState$item.dirty,
          items = _appState$item.items,
          setItems = _appState$item.setItems;

      return new Promise(function (resolve, reject) {
        if (dirty) {
          _this4.serviceExecutor.execute((0, _service.GET_ITEMS)(companyId)).then(function (items) {
            setItems(items);
            return resolve(items);
          });
        } else {
          return resolve(items);
        }
      });
    }
  }]);

  return AppStateService;
}();

exports.default = AppStateService;