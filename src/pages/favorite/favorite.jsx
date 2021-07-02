import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import FavoriteView from "./favorite.view";
import { ITEM_DETAIL } from "../../routes/applicationRoutes";

export default class Favorite extends ApplicationComponent {
  render() {
    return (
      <FavoriteView
        favorites={this.appState.favorite.favorites}
        onClickItem={this.onClickItem}
        {...this.state}
      />
    );
  }

  onClickItem = (item) => {
    this.goTo(ITEM_DETAIL, [{ key: "itemId", value: item.id }]);
  };
}
