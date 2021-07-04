import React from "react";
import Taro from "@tarojs/taro";
import ApplicationComponent from "../../common/applicationComponent";
import LandingPageView from "./landingPage.view";
import { CATEGORY, ITEM_DETAIL } from "../../routes/applicationRoutes";
import { RENT_SEGMENT, SELL_SEGMENT } from "../category/categorySegment";

export default class LandingPage extends ApplicationComponent {
  state = {
    ...this.state,
  };

  componentDidMount() {
    Taro.getSystemInfo().then((devivceInfo) =>
      this.appState.deviceInfo.setDeviceInfo(devivceInfo)
    );
  }

  render() {
    const { category, item } = this.appState;
    return (
      <LandingPageView
        categories={category.categories}
        items={item.items}
        onClickItem={this.onClickItem}
        onClickMenuButton={this.onClickMenuButton}
        {...this.state}
      />
    );
  }

  /**
   * @deprecated
   * @param {*} categoryId
   */
  onClickMenuButton = (categoryId) => {
    this.goToTabBar(CATEGORY, [{ key: "categoryId", value: categoryId }]);
  };

  /**
   * @deprecated
   * @param {*} item
   */
  onClickItem = (item) => {
    this.goTo(ITEM_DETAIL, [{ key: "itemId", value: item.id }]);
  };
}
