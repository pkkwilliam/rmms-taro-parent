import React from "react";
import Card from "./card";

export default function CardContent(props) {
  const { backgroundColor = "#FDFFFE", children, style } = props;
  return (
    <Card
      style={{
        backgroundColor: backgroundColor,
        // marginTop: -25, comment out this since we are not able to to control the dot height of taro ui carousel
        zIndex: 10,
        ...style,
      }}
    >
      {children}
    </Card>
  );
}
