"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  pages: ["pages/index/index", "pages/category/category", "pages/favorite/favorite", "pages/itemDetail/itemDetail", "pages/userProfile/userProfile"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    list: [{
      iconPath: "resource/button_test.png",
      selectedIconPath: "resource/button_test.png",
      pagePath: "pages/category/category",
      text: "最新"
    }, {
      iconPath: "resource/button_test.png",
      selectedIconPath: "resource/button_test.png",
      pagePath: "pages/index/index",
      text: "首頁"
    }, {
      iconPath: "resource/button_test.png",
      selectedIconPath: "resource/button_test.png",
      pagePath: "pages/userProfile/userProfile",
      text: "我的"
    }],
    color: "#000",
    selectedColor: "#56abe4",
    backgroundColor: "#fff",
    borderStyle: "white"
  }
};