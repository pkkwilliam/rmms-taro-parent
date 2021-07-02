"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USER_TOKEN_KEY = undefined;
exports.getUserToken = getUserToken;
exports.setUserToken = setUserToken;

var _taro = require("@tarojs/taro");

var _taro2 = _interopRequireDefault(_taro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var USER_TOKEN_KEY = exports.USER_TOKEN_KEY = "USER_TOKEN";

function getUserToken() {
  return _taro2.default.getStorageSync(USER_TOKEN_KEY);
}

function setUserToken(token) {
  _taro2.default.setStorageSync(USER_TOKEN_KEY, token);
}