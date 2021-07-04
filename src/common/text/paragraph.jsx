import React from "react";
import { View } from "@tarojs/components";
import ApplicationComponentView from "../applicationComponent.view";

export default class P extends ApplicationComponentView {
  render() {
    const { children, companyColor = false, style } = this.props;
    const color = companyColor
      ? this.appStyle?.secondary?.value
      : this.getColor();
    return (
      <View
        className={this.getClassName()}
        style={{ margin: 0, color, whiteSpace: "pre-wrap", ...style }}
      >
        {children}
      </View>
    );
  }

  getColor() {
    return "";
  }

  getClassName() {
    return "at-article__p";
  }
}
