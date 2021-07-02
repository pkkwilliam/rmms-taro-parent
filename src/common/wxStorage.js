import Taro from "@tarojs/taro";

export const USER_TOKEN_KEY = "USER_TOKEN";

export function getUserToken() {
  return Taro.getStorageSync(USER_TOKEN_KEY);
}

export function setUserToken(token) {
  Taro.setStorageSync(USER_TOKEN_KEY, token);
}
