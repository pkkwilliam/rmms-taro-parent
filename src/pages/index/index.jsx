import { View } from "@tarojs/components";
import ApplicationComponent from "../../common/applicationComponent";
import { AtButton } from "taro-ui";
import LandingPage from "../landingPage/landingPage";
import { wxGetUserInfo, wxGetUserProfile } from "../../common/wxApiUtil";

import "taro-ui/dist/style/index.scss";
import "./index.scss";

export default class Index extends ApplicationComponent {
  async componentWillMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidMount() {}

  render() {
    return (
      <View className="index">
        <AtButton
          onClick={() => {
            wxGetUserProfile();
            wxGetUserInfo();
          }}
        >
          Get User Profile
        </AtButton>
        <LandingPage {...this.props} />
      </View>
    );
  }
}
