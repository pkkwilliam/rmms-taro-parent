import React from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { Component } from "react";
import { RmmsContext } from "../appState/contextProvider";
import ServiceExecutor from "../service/serviceExecutor";
import ApplicationContext from "./applicationContext";
import AppStateService from "../service/appStateService";

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

  get serviceExecutor() {
    if (!this._serviceExecutor) {
      this._serviceExecutor = new ServiceExecutor(this.applicationContext.host);
    }
    return this._serviceExecutor;
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
      url: route + generateRouteParams(),
    });
  }

  goToTabBar(route) {
    wx.switchTab({ url: route });
  }

  async onLoad(options) {
    const { companyId } = options;
    this.appStateService.getCompany(companyId).then((result) => {
      wx.setNavigationBarTitle({
        title: this.appState.company.name,
      });
    });
    this.appStateService.getCompanyCustomise(companyId).then((content) => {
      wx.setNavigationBarColor({
        backgroundColor: content.style.primary,
        frontColor: "#ffffff",
      });
    });
    this.appStateService.getCategories(companyId);
    this.appStateService.getItems(companyId);
  }
}
