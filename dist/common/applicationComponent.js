"use strict";

var _interopRequireWildcard = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApplicationRoute = getApplicationRoute;
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper"));

var _defineProperty2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _taro = _interopRequireWildcard(require("@tarojs/taro"));

var _contextProvider = require("../appState/contextProvider");

var _serviceExecutor = _interopRequireDefault(require("../service/serviceExecutor"));

var _applicationContext = _interopRequireDefault(require("./applicationContext"));

var _appStateService = _interopRequireDefault(require("../service/appStateService"));

var _wxStorage = require("./wxStorage");

var _wxApiUtil = require("./wxApiUtil");

var ApplicationComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ApplicationComponent, _Component);

  var _super = (0, _createSuper2.default)(ApplicationComponent);

  function ApplicationComponent() {
    var _this;

    (0, _classCallCheck2.default)(this, ApplicationComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      modal: {
        show: false
      },
      toast: {
        show: false
      }
    });
    return _this;
  }

  (0, _createClass2.default)(ApplicationComponent, [{
    key: "applicationContext",
    get: function get() {
      if (!this._applicationContext) {
        this._applicationContext = new _applicationContext.default();
      }

      return this._applicationContext;
    }
  }, {
    key: "appStateService",
    get: function get() {
      if (!this._appStateService) {
        this._appStateService = new _appStateService.default(this.appState, this.serviceExecutor);
      }

      return this._appStateService;
    }
  }, {
    key: "appState",
    get: function get() {
      return this.context;
    }
  }, {
    key: "getCompanyId",
    value: function getCompanyId(option) {
      console.log("get company id from config file");
      return process.env.COMPANY_ID;
    }
  }, {
    key: "serviceExecutor",
    get: function get() {
      if (!this._serviceExecutor) {
        this._serviceExecutor = new _serviceExecutor.default(this.applicationContext.host, _wxStorage.getUserToken, _wxStorage.setUserToken);
      }

      return this._serviceExecutor;
    }
  }, {
    key: "getApplicationRoutePath",
    value: function getApplicationRoutePath(route) {
      return route.path;
    }
  }, {
    key: "getRouterParams",
    value: function getRouterParams() {
      return (0, _taro.getCurrentInstance)().router.params;
    }
  }, {
    key: "goTo",
    value: function goTo(route, params) {
      var generateRouteParams = function generateRouteParams() {
        var result = "";

        if (params) {
          result += "?";
          result += params.map(function (param) {
            return "".concat(param.key, "=").concat(param.value, "&");
          });
          result = result.substring(0, result.length - 1);
        }

        return result;
      };

      _taro.default.navigateTo({
        url: this.getApplicationRoutePath(route) + generateRouteParams()
      });
    }
  }, {
    key: "goToTabBar",
    value: function goToTabBar(route) {
      _taro.default.switchTab({
        url: this.getApplicationRoutePath(route)
      });
    }
  }, {
    key: "onLoad",
    value: function () {
      var _onLoad = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(options) {
        var _this2 = this;

        var companyId, _yield$wxLogin, code;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                companyId = this.getCompanyId(options);
                this.appStateService.getCompany(companyId).then(function (result) {
                  (0, _wxApiUtil.wxSetNavigationBarTitle)(_this2.appState.company.name);
                });
                this.appStateService.getCompanyCustomise(companyId).then(function (content) {
                  content;
                  (0, _wxApiUtil.wxSetNavigationBarColor)({
                    backgroundColor: content.style.primary.value,
                    frontColor: "#ffffff"
                  });
                  var _content$style = content.style,
                      tabbarBackgroundColor = _content$style.tabbarBackgroundColor,
                      tabbarSelectedColor = _content$style.tabbarSelectedColor,
                      tabbarUnselectedColor = _content$style.tabbarUnselectedColor;
                  (0, _wxApiUtil.wxSetTabBarStyle)({
                    backgroundColor: tabbarBackgroundColor.value,
                    color: tabbarUnselectedColor.value,
                    selectedColor: tabbarSelectedColor.value
                  });
                });
                this.appStateService.getCategories(companyId);
                this.appStateService.getItems(companyId); // user login

                _context.next = 7;
                return (0, _wxApiUtil.wxLogin)();

              case 7:
                _yield$wxLogin = _context.sent;
                code = _yield$wxLogin.code;
                this.appStateService.login(companyId, code);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _onLoad.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(res) {
      if (res.from === "button") {
        // 来自页面内转发按钮
        console.log(res.target);
      }

      return {
        title: "",
        path: "/page/index/index"
      };
    }
  }]);
  return ApplicationComponent;
}(_react.Component);

exports.default = ApplicationComponent;
(0, _defineProperty2.default)(ApplicationComponent, "_applicationContext", void 0);
(0, _defineProperty2.default)(ApplicationComponent, "_appStateService", void 0);
(0, _defineProperty2.default)(ApplicationComponent, "_serviceExecutor", void 0);
(0, _defineProperty2.default)(ApplicationComponent, "contextType", _contextProvider.RmmsContext);

function getApplicationRoute(routeName) {
  return;
}