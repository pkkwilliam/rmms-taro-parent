import ApplicationComponentView from "./applicationComponent.view";
import { Image, View } from "@tarojs/components";
import { AtButton } from "taro-ui";

export default class ImageButton extends ApplicationComponentView {
  render() {
    return (
      <AtButton>
        <View>
          <Image />
        </View>
      </AtButton>
    );
  }
}
