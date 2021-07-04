import React from "react";
import { AtList, AtListItem } from "taro-ui";
import ApplicationComponentView from "../../common/applicationComponent.view";
import FlexView from "../../common/flexView";

export default class FavoriteView extends ApplicationComponentView {
  render() {
    return (
      <this.Wrapper>
        <FlexView style={{ marginTop: 15 }}>
          <FavoriteList {...this.props} />
        </FlexView>
      </this.Wrapper>
    );
  }
}

export function FavoriteList({ favorites, onClickItem }) {
  const ListItems = favorites.map((favorite, index) => {
    const { address, cost, imageUrls, name } = favorite;
    return (
      <AtListItem
        arrow="right"
        key={"favorite" + index}
        title={name}
        onClick={() => onClickItem(favorite)}
        hasBorder={false}
        note={address}
        thumb={imageUrls[0]}
      />
    );
  });
  return <AtList>{ListItems}</AtList>;
}
