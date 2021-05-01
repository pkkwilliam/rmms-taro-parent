import React from "react";
import { View } from "@tarojs/components";

export default function FlexView(props) {
  const { children, onClick, style } = props;
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </View>
  );
}
