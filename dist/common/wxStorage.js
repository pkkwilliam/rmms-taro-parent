"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserToken = getUserToken;
exports.setUserToken = setUserToken;
exports.USER_TOKEN_KEY = void 0;

var _taro = _interopRequireDefault(require("@tarojs/taro"));

var USER_TOKEN_KEY = "USER_TOKEN";
exports.USER_TOKEN_KEY = USER_TOKEN_KEY;

function getUserToken() {
  return _taro.default.getStorageSync(USER_TOKEN_KEY);
}

function setUserToken(token) {
  _taro.default.setStorageSync(USER_TOKEN_KEY, token);
}