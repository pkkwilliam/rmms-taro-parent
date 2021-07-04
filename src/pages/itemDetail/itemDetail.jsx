import React from "react";
import Taro from "@tarojs/taro";
import ApplicationComponent from "../../common/applicationComponent";
import ItemDetailView from "./itemDetail.view";
import {
  ADD_USER_FAVORITE,
  DELETE_USER_FAVORITE,
  GET_ITEM,
} from "../../service/service";

export default class ItemDetail extends ApplicationComponent {
  state = {
    ...this.state,
    itemDetail: { imageUrls: [] },
    showAgency: false,
  };

  componentDidMount() {
    const companyId = this.appState.company.id;
    const { itemId } = this.getRouterParams();
    this.getLocalItemDetail(companyId, itemId);
    this.appStateService.getFavorites();
  }

  render() {
    return (
      <ItemDetailView
        {...this.state}
        isFavoriteItem={isFavoriteItem(
          this.state.itemDetail,
          this.appState.favorite.favorites
        )}
        onClickFavorite={this.onClickFavorite}
        toggleShowAgency={this.toggleShowAgency}
      />
    );
  }

  getLocalItemDetail(companyId, itemId) {
    this.appStateService.getItems().then((items) =>
      items.map((item) => {
        if (item.id == itemId) {
          this.setState();
          this.setState({
            isFavoriteItem: isFavoriteItem(
              item,
              this.appStateService.getFavorites()
            ),
            itemDetail: item,
          });
        }
      })
    );
  }

  getRemoteItemDetail(companyId, itemId) {
    this.serviceExecutor
      .execute(GET_ITEM(companyId, itemId))
      .then((itemDetail) =>
        this.setState({
          itemDetail,
        })
      );
  }

  onClickFavorite = () => {
    let { itemDetail } = this.state;
    let successMessage = "";
    if (isFavoriteItem(itemDetail, this.appState.favorite.favorites)) {
      this.serviceExecutor
        .execute(DELETE_USER_FAVORITE(itemDetail))
        .then((updateFavorites) =>
          this.appState.favorite.setFavorites(updateFavorites)
        );
    } else {
      this.serviceExecutor
        .execute(ADD_USER_FAVORITE(itemDetail))
        .then((updateFavorites) =>
          this.appState.favorite.setFavorites(updateFavorites)
        );
      successMessage = "收藏成功";
    }
    Taro.showToast({
      title: successMessage,
      icon: "success",
      duration: 2000,
    });
  };

  toggleShowAgency = () => {
    this.setState((state) => ({
      showAgency: !state.showAgency,
    }));
  };
}

export function isFavoriteItem(itemDetail, favorites) {
  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i].id === itemDetail.id) {
      return true;
    }
  }
  return false;
}
