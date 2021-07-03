"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getApplicationRoute = getApplicationRoute;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _taro = require("@tarojs/taro");

var _taro2 = _interopRequireDefault(_taro);

var _contextProvider = require("../appState/contextProvider");

var _serviceExecutor = require("../service/serviceExecutor");

var _serviceExecutor2 = _interopRequireDefault(_serviceExecutor);

var _applicationContext = require("./applicationContext");

var _applicationContext2 = _interopRequireDefault(_applicationContext);

var _appStateService = require("../service/appStateService");

var _appStateService2 = _interopRequireDefault(_appStateService);

var _wxStorage = require("./wxStorage");

var _wxApiUtil = require("./wxApiUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApplicationComponent = function (_Component) {
  _inherits(ApplicationComponent, _Component);

  function ApplicationComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ApplicationComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ApplicationComponent.__proto__ || Object.getPrototypeOf(ApplicationComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      modal: {
        show: false
      },
      toast: {
        show: false
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ApplicationComponent, [{
    key: "getCompanyId",
    value: function getCompanyId(option) {
      console.log("get company id from config file");
      return process.env.COMPANY_ID;
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
            return param.key + "=" + param.value + "&";
          });
          result = result.substring(0, result.length - 1);
        }
        return result;
      };
      _taro2.default.navigateTo({
        url: this.getApplicationRoutePath(route) + generateRouteParams()
      });
    }
  }, {
    key: "goToTabBar",
    value: function goToTabBar(route) {
      _taro2.default.switchTab({ url: this.getApplicationRoutePath(route) });
    }
  }, {
    key: "onLoad",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        var _this2 = this;

        var companyId, _ref3, code;

        return regeneratorRuntime.wrap(function _callee$(_context) {
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
                this.appStateService.getItems(companyId);
                // user login
                _context.next = 7;
                return (0, _wxApiUtil.wxLogin)();

              case 7:
                _ref3 = _context.sent;
                code = _ref3.code;

                this.appStateService.login(companyId, code);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
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
  }, {
    key: "applicationContext",
    get: function get() {
      if (!this._applicationContext) {
        this._applicationContext = new _applicationContext2.default();
      }
      return this._applicationContext;
    }
  }, {
    key: "appStateService",
    get: function get() {
      if (!this._appStateService) {
        this._appStateService = new _appStateService2.default(this.appState, this.serviceExecutor);
      }
      return this._appStateService;
    }
  }, {
    key: "appState",
    get: function get() {
      return this.context;
    }
  }, {
    key: "serviceExecutor",
    get: function get() {
      if (!this._serviceExecutor) {
        this._serviceExecutor = new _serviceExecutor2.default(this.applicationContext.host, _wxStorage.getUserToken, _wxStorage.setUserToken);
      }
      return this._serviceExecutor;
    }
  }]);

  return ApplicationComponent;
}(_react.Component);

ApplicationComponent.contextType = _contextProvider.RmmsContext;
exports.default = ApplicationComponent;
function getApplicationRoute(routeName) {
  return;
}