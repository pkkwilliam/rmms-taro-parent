import { Button, View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";
import RmmsConfig from "../../rmms.configs/configs.parameter.json";
import ApplicationComponent from "../../common/applicationComponent";
import { GET_COMPANY_SERVICE } from "../../service/service";

export default class Index extends ApplicationComponent {
  state = {
    buttonText: "",
    company: { companyName: undefined },
  };

  onLoad(options) {
    // const { companyId } = options;
    // console.log(companyId);
    // wx.setNavigationBarTitle({
    //   title: "yoloman",
    // });
    console.log(this.appState);
  }

  componentWillMount() {}

  componentDidMount() {
    // this.serviceExecutor.execute(GET_COMPANY_SERVICE())
    // console.log(this.appState.company);
  }

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
              buttonText: "YOLOMAN",
            })
          }
        >
          Crazy Button
        </Button>
      </View>
    );
  }
}
