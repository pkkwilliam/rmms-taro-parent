import React from "react";
import { AtList, AtListItem, AtAvatar, AtButton } from "taro-ui";
import ApplicationComponentView from "../../common/applicationComponent.view";
import Info from "../../common/text/info";
import H3 from "../../common/text/h2";
import FlexView from "../../common/flexView";
import CardContent from "../../common/cardContent";
import { FAVORITE } from "../../routes/applicationRoutes";

export default class UserProfileView extends ApplicationComponentView {
  render() {
    return (
      <this.Wrapper>
        <FlexView style={{ marginTop: 15 }}>
          <UserSection
            onClickRefreshUserProfileInfo={
              this.props.onClickRefreshUserProfileInfo
            }
            {...this.props.userProfile}
          />
        </FlexView>
        <FlexView style={{ marginTop: 15 }}>
          <UserMenuList goTo={this.goTo} {...this.props} />
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

export function UserMenuList({ favorites, goTo }) {
  return (
    <AtList>
      <AtListItem
        onClick={() => goTo(FAVORITE)}
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
