import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import LandingPageView from "./landingPage.view";
import { CATEGORY, ITEM_DETAIL } from "../../routes/applicationRoutes";

export default class LandingPage extends ApplicationComponent {
  state = {
    ...this.state,
  };

  render() {
    const { category, companyCustomise, item } = this.appState;
    const { landingPage } = companyCustomise;
    return (
      <LandingPageView
        categories={category.categories}
        items={item.items}
        landingPage={landingPage}
        onClickItem={this.onClickItem}
        onClickMenuButton={this.onClickMenuButton}
        {...this.state}
      />
    );
  }

  onClickMenuButton = (categoryId) => {
    this.goToTabBar(CATEGORY, [{ key: "categoryId", value: categoryId }]);
  };

  onClickItem = (item) => {
    this.goTo(ITEM_DETAIL, [{ key: "itemId", value: item.id }]);
  };
}
