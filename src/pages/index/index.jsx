import { Button, View, Text } from "@tarojs/components";
import ApplicationComponent from "../../common/applicationComponent";
import { GET_COMPANY } from "../../service/service";

import "./index.scss";

export default class Index extends ApplicationComponent {
  state = {
    buttonText: "",
    company: { companyName: undefined },
  };

  onLoad(options) {
    const { companyId } = options;
    // get user info
    wx.getUserInfo({
      desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res);
      },
    });
    wx.checkSession({
      success() {
        //session_key 未过期，并且在本生命周期一直有效
        console.log("good");
      },
      fail() {
        // session_key 已经失效，需要重新执行登录流程
        console.log("bad");
        wx.login({
          success(result) {
            console.log("result", result);
          },
          fail() {
            console.log("bb");
          },
        }); //重新登录
      },
    });
    this.getCompany(companyId);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Now We can start</Text>
        <Text>{this.state.buttonText}</Text>
        <Button
          onClick={() =>
            this.setState({
              buttonText: "YOLOMsdfasdfAN",
            })
          }
        >
          Crazy Button
        </Button>
      </View>
    );
  }

  getCompany(companyId) {
    if (this.appState.company.dirty) {
      this.serviceExecutor.execute(GET_COMPANY(companyId)).then((result) => {
        this.appState.company.setCompany(result);
        // set title of the page after the company name is retreive
        wx.setNavigationBarTitle({
          title: this.appState.company.name,
        });
      });
    }
  }
}
