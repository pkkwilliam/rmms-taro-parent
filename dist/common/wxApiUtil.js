"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wxLogin = exports.wxGetUserProfile = exports.wxGetUserInfo = undefined;

var wxGetUserInfo = exports.wxGetUserInfo = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _taro2.default.getUserInfo());

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function wxGetUserInfo() {
    return _ref.apply(this, arguments);
  };
}();

var wxGetUserProfile = exports.wxGetUserProfile = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(onSuccess) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _taro2.default.getUserProfile({
              desc: "用於完善會員資料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
              success: function success(res) {
                onSuccess(res);
              }
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function wxGetUserProfile(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var wxLogin = exports.wxLogin = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _taro2.default.login());

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function wxLogin() {
    return _ref3.apply(this, arguments);
  };
}();

exports.wxCheckSession = wxCheckSession;
exports.wxGetSetting = wxGetSetting;
exports.wxSetNavigationBarColor = wxSetNavigationBarColor;
exports.wxSetNavigationBarTitle = wxSetNavigationBarTitle;
exports.wxSwitchTabbar = wxSwitchTabbar;
exports.wxSetTabBarStyle = wxSetTabBarStyle;

var _taro = require("@tarojs/taro");

var _taro2 = _interopRequireDefault(_taro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function wxCheckSession() {
  console.log();
  _taro2.default.checkSession({
    success: function success() {
      console.log("valid session");
      //session_key 未过期，并且在本生命周期一直有效
    },
    fail: function fail() {
      console.log("expired session");
      // session_key 已经失效，需要重新执行登录流程
      _taro2.default.login(); //重新登录
    }
  });
}

function wxGetSetting() {
  _taro2.default.getSetting({
    success: function success(res) {
      console.log("user all setting:", res.authSetting);
      // if (!res.authSetting["scope.record"]) {
      //   Taro.authorize({
      //     scope: "scope.record",
      //     success: function () {
      //       // 用户已经同意小程序使用录音功能，后续调用 Taro.startRecord 接口不会弹窗询问
      //       Taro.startRecord();
      //     },
      //   });
      // }
    }
  });
}

function wxSetNavigationBarColor(_ref4) {
  var backgroundColor = _ref4.backgroundColor;

  _taro2.default.setNavigationBarColor({
    backgroundColor: backgroundColor,
    frontColor: "#ffffff"
  });
}

function wxSetNavigationBarTitle(title) {
  _taro2.default.setNavigationBarTitle({
    title: title
  });
}

function wxSwitchTabbar(url) {
  _taro2.default.switchTab({ url: url });
}

/**
 *
 * @param { color: '#FF0000', selectedColor: '#00FF00', backgroundColor: '#0000FF', borderStyle: 'white' } style
 */
function wxSetTabBarStyle(style) {
  _taro2.default.setTabBarStyle(style);
}