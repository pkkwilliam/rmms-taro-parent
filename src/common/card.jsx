import React from "react";
import ApplicationComponentView from "./applicationComponent.view";
import FlexView from "./flexView";

export default class Card extends ApplicationComponentView {
  render() {
    const { children, style } = this.props;
    return (
      <FlexView style={{ borderRadius: 15, ...style }}>{children}</FlexView>
    );
  }
}
