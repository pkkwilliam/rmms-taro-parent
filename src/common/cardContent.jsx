import React from "react";
import Card from "./card";

export default function CardContent(props) {
  const { backgroundColor = "#FFFFFF", children, style } = props;
  return (
    <Card
      style={{
        backgroundColor: backgroundColor,
        // marginTop: -25, comment out this since we are not able to to control the dot height of taro ui carousel
        paddingLeft: 15,
        paddingRight: 15,
        zIndex: 10,
        ...style,
      }}
    >
      {children}
    </Card>
  );
}
