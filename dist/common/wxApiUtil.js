"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wxCheckSession = wxCheckSession;
exports.wxGetSetting = wxGetSetting;
exports.wxGetUserInfo = wxGetUserInfo;
exports.wxGetUserProfile = wxGetUserProfile;
exports.wxLogin = wxLogin;
exports.wxSetNavigationBarColor = wxSetNavigationBarColor;
exports.wxSetNavigationBarTitle = wxSetNavigationBarTitle;
exports.wxSwitchTabbar = wxSwitchTabbar;
exports.wxSetTabBarStyle = wxSetTabBarStyle;

var _regenerator = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator"));

var _taro = _interopRequireDefault(require("@tarojs/taro"));

function wxCheckSession() {
  console.log();

  _taro.default.checkSession({
    success: function success() {
      console.log("valid session"); //session_key 未过期，并且在本生命周期一直有效
    },
    fail: function fail() {
      console.log("expired session"); // session_key 已经失效，需要重新执行登录流程

      _taro.default.login(); //重新登录

    }
  });
}

function wxGetSetting() {
  _taro.default.getSetting({
    success: function success(res) {
      console.log("user all setting:", res.authSetting); // if (!res.authSetting["scope.record"]) {
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

function wxGetUserInfo() {
  return _wxGetUserInfo.apply(this, arguments);
}

function _wxGetUserInfo() {
  _wxGetUserInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _taro.default.getUserInfo());

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _wxGetUserInfo.apply(this, arguments);
}

function wxGetUserProfile(_x) {
  return _wxGetUserProfile.apply(this, arguments);
}

function _wxGetUserProfile() {
  _wxGetUserProfile = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(onSuccess) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _taro.default.getUserProfile({
              desc: "用於完善會員資料",
              // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
              success: function success(res) {
                onSuccess(res);
              }
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _wxGetUserProfile.apply(this, arguments);
}

function wxLogin() {
  return _wxLogin.apply(this, arguments);
}

function _wxLogin() {
  _wxLogin = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _taro.default.login());

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _wxLogin.apply(this, arguments);
}

function wxSetNavigationBarColor(_ref) {
  var backgroundColor = _ref.backgroundColor;

  _taro.default.setNavigationBarColor({
    backgroundColor: backgroundColor,
    frontColor: "#ffffff"
  });
}

function wxSetNavigationBarTitle(title) {
  _taro.default.setNavigationBarTitle({
    title: title
  });
}

function wxSwitchTabbar(url) {
  _taro.default.switchTab({
    url: url
  });
}
/**
 *
 * @param { color: '#FF0000', selectedColor: '#00FF00', backgroundColor: '#0000FF', borderStyle: 'white' } style
 */


function wxSetTabBarStyle(style) {
  _taro.default.setTabBarStyle(style);
}