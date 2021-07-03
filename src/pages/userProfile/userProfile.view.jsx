import React from "react";
import { AtList, AtListItem, AtAvatar, AtButton } from "taro-ui";
import ApplicationComponentView from "../../common/applicationComponent.view";
import Info from "../../common/text/info";
import H3 from "../../common/text/h2";
import FlexView from "../../common/flexView";
import CardContent from "../../common/cardContent";

export default class UserProfileView extends ApplicationComponentView {
  render() {
    return (
      <this.Wrapper>
        <FlexView style={{ margin: 15 }}>
          <UserSection
            onClickRefreshUserProfileInfo={
              this.props.onClickRefreshUserProfileInfo
            }
            {...this.props.userProfile}
          />
        </FlexView>
        <FlexView style={{ margin: 15 }}>
          <UserMenuList {...this.props} />
        </FlexView>
      </this.Wrapper>
    );
  }
}

export function UserSection({
  createTime,
  imageUrl,
  name,
  onClickRefreshUserProfileInfo,
}) {
  return (
    <CardContent>
      <FlexView
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <FlexView style={{ alignItems: "center", flexDirection: "row" }}>
          <AtAvatar circle image={imageUrl}></AtAvatar>
          <FlexView style={{ marginLeft: 15 }}>
            <H3>{name}</H3>
            <Info>首次使用: {displayShortTime(createTime)}</Info>
          </FlexView>
        </FlexView>
        <AtButton
          customStyle={{ margin: 0 }}
          onClick={onClickRefreshUserProfileInfo}
          size="small"
          type="secondary"
        >
          更新資料
        </AtButton>
      </FlexView>
    </CardContent>
  );
}

export function UserMenuList({ favorites, onClickMenuItemFavorite }) {
  return (
    <AtList>
      <AtListItem
        onClick={onClickMenuItemFavorite}
        title="收藏"
        extraText={`${favorites.length}個樓盤`}
        arrow="right"
      />
    </AtList>
  );
}

export function displayShortTime(dateTime) {
  if (!dateTime) {
    dateTime = Date.now();
  }
  const current = new Date(dateTime);
  return `${current.getFullYear()}-${
    current.getUTCMonth() + 1
  }-${current.getDate()}`;
}
