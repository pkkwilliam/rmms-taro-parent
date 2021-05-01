import React from "react";
import { AtButton } from "taro-ui";
import ApplicationComponentView from "./applicationComponent.view";
import H2 from "./text/h2";

export default class ApplicationButton extends ApplicationComponentView {
  render() {
    const { children, style } = this.props;
    const { primary, secondary } = this.appStyle;
    return (
      <AtButton
        circle
        customStyle={{
          alignItems: "center",
          backgroundColor: primary,
          borderColor: secondary,
          justifyContent: "center",
          width: "100%",
          ...style,
        }}
        {...this.props}
      >
        <H2 style={{ color: "white" }}>{children}</H2>
      </AtButton>
    );
  }
}
