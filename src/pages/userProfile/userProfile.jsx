import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import UserProfileView from "./userProfile.view";
import { wxGetUserProfile } from "../../common/wxApiUtil";
import { UPDATE_USER_PROFILE_INFO } from "../../service/service";
import { FAVORITE } from "../../routes/applicationRoutes";

export default class LandingPage extends ApplicationComponent {
  state = {
    ...this.state,
  };

  componentDidMount() {
    this.appStateService.getFavorites();
  }

  render() {
    let displayUserProfile = this.appState.userProfile.userProfile;
    if (!displayUserProfile.imageUrl) {
      displayUserProfile = this.getDefaultUserInfo();
    }
    return (
      <UserProfileView
        onClickRefreshUserProfileInfo={this.onClickRefreshUserProfileInfo}
        onClickMenuItemFavorite={this.onClickMenuItemFavorite}
        favorites={this.appState.favorite.favorites}
        userProfile={displayUserProfile}
        {...this.state}
      />
    );
  }

  getDefaultUserInfo() {
    return {
      imageUrl:
        "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132",
      gender: undefined,
      name: "微信用戶",
    };
  }

  onClickRefreshUserProfileInfo = () => {
    wxGetUserProfile((response) => {
      const { avatarUrl, gender, nickName } = response.userInfo;
      const requestBody = {
        imageUrl: avatarUrl,
        gender: getGender(gender),
        name: nickName,
      };
      this.serviceExecutor
        .execute(UPDATE_USER_PROFILE_INFO(requestBody))
        .then((updatedUserProfile) => {
          this.appState.userProfile.setUserProfile(updatedUserProfile),
            this.setState({ userProfile: updatedUserProfile });
        });
    });
  };

  onClickMenuItemFavorite = () => {
    this.goTo(FAVORITE);
  };
}

export function getGender(genderInt) {
  switch (genderInt) {
    case 0:
      return "UNKNOWN";
    case 1:
      return "MALE";
    case 2:
      return "FEMALE";
  }
}
