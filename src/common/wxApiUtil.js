import Taro from "@tarojs/taro";

export function wxCheckSession() {
  console.log();
  Taro.checkSession({
    success: function () {
      console.log("valid session");
      //session_key 未过期，并且在本生命周期一直有效
    },
    fail: function () {
      console.log("expired session");
      // session_key 已经失效，需要重新执行登录流程
      Taro.login(); //重新登录
    },
  });
}

export function wxGetSetting() {
  Taro.getSetting({
    success: function (res) {
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
    },
  });
}

export async function wxGetUserInfo() {
  return Taro.getUserInfo();
}

export async function wxGetUserProfile(onSuccess) {
  Taro.getUserProfile({
    desc: "用於完善會員資料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success: (res) => {
      onSuccess(res);
    },
  });
}

export async function wxLogin() {
  return Taro.login();
}

export function wxSetNavigationBarColor({ backgroundColor }) {
  Taro.setNavigationBarColor({
    backgroundColor,
    frontColor: "#ffffff",
  });
}

export function wxSetNavigationBarTitle(title) {
  Taro.setNavigationBarTitle({
    title,
  });
}

export function wxSwitchTabbar(url) {
  Taro.switchTab({ url });
}

/**
 *
 * @param { color: '#FF0000', selectedColor: '#00FF00', backgroundColor: '#0000FF', borderStyle: 'white' } style
 */
export function wxSetTabBarStyle(style) {
  Taro.setTabBarStyle(style);
}
