import React from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { Component } from "react";
import { RmmsContext } from "../appState/contextProvider";
import ServiceExecutor from "../service/serviceExecutor";
import ApplicationContext from "./applicationContext";
import AppStateService from "../service/appStateService";
import { getUserToken, setUserToken } from "./wxStorage";
import {
  wxLogin,
  wxSetNavigationBarColor,
  wxSetNavigationBarTitle,
  wxSetTabBarStyle,
} from "./wxApiUtil";
export default class ApplicationComponent extends Component {
  state = {
    modal: {
      show: false,
    },
    toast: {
      show: false,
    },
  };

  static _applicationContext;
  static _appStateService;
  static _serviceExecutor;
  static contextType = RmmsContext;

  get applicationContext() {
    if (!this._applicationContext) {
      this._applicationContext = new ApplicationContext();
    }
    return this._applicationContext;
  }

  get appStateService() {
    if (!this._appStateService) {
      this._appStateService = new AppStateService(
        this.appState,
        this.serviceExecutor
      );
    }
    return this._appStateService;
  }

  get appState() {
    return this.context;
  }

  getCompanyId(option) {
    console.log("get company id from config file");
    return process.env.COMPANY_ID;
  }

  get serviceExecutor() {
    if (!this._serviceExecutor) {
      this._serviceExecutor = new ServiceExecutor(
        this.applicationContext.host,
        getUserToken,
        setUserToken
      );
    }
    return this._serviceExecutor;
  }

  getApplicationRoutePath(route) {
    return route.path;
  }

  getRouterParams() {
    return getCurrentInstance().router.params;
  }

  goTo(route, params) {
    const generateRouteParams = () => {
      let result = "";
      if (params) {
        result += "?";
        result += params.map((param) => `${param.key}=${param.value}&`);
        result = result.substring(0, result.length - 1);
      }
      return result;
    };
    Taro.navigateTo({
      url: this.getApplicationRoutePath(route) + generateRouteParams(),
    });
  }

  goToTabBar(route) {
    Taro.switchTab({ url: this.getApplicationRoutePath(route) });
  }

  async onLoad(options) {
    const companyId = this.getCompanyId(options);
    this.appStateService.getCompany(companyId).then((result) => {
      wxSetNavigationBarTitle(this.appState.company.name);
    });
    this.appStateService.getCompanyCustomise(companyId).then((content) => {
      content;
      wxSetNavigationBarColor({
        backgroundColor: content.style.primary.value,
        frontColor: "#ffffff",
      });
      const {
        tabbarBackgroundColor,
        tabbarSelectedColor,
        tabbarUnselectedColor,
      } = content.style;
      // wxSetTabBarStyle({
      //   backgroundColor: tabbarBackgroundColor.value,
      //   color: tabbarUnselectedColor.value,
      //   selectedColor: tabbarSelectedColor.value,
      // });
    });
    this.appStateService.getCategories(companyId);
    this.appStateService.getItems(companyId);
    // user login
    const { code } = await wxLogin();
    this.appStateService.login(companyId, code);
  }

  onShareAppMessage(res) {
    if (res.from === "button") {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: "",
      path: "/page/index/index",
    };
  }
}

export function getApplicationRoute(routeName) {
  return;
}
