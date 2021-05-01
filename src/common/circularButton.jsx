import React from "react";
import { AtAvatar } from "taro-ui";
import ApplicationComponentView from "./applicationComponent.view";
import FlexView from "./flexView";

export default class CircularButton extends ApplicationComponentView {
  render() {
    let {
      children,
      color,
      onClick = () => console.log("please override"),
      style,
      url,
    } = this.props;
    const { primary, secondary } = this.appStyle;
    return (
      <FlexView onClick={onClick} {...this.props}>
        <AtAvatar circle image={url} />
      </FlexView>
    );
  }
}
