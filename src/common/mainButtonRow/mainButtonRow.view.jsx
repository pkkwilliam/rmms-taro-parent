import React from "react";
import { Image, View } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import ApplicationComponentView, {
  getObjectValue,
} from "../applicationComponent.view";
import CardContent from "../cardContent";
import FlexView from "../flexView";
import Info from "../text/info";

export default class MainButtonRowView extends ApplicationComponentView {
  render() {
    return <SimplifyButtonRow {...this.props} />;
  }
}

export function SimplifyButtonRow({
  customStyle,
  mainMenuButtonRow,
  onClickBuySegment,
  onClickRentSegment,
}) {
  const { buy, rent } = mainMenuButtonRow;
  return (
    <View className="at-row at-row__justify--around">
      <CardContent
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: 0,
          paddingBottom: 30,
          paddingTop: 30,
          marginTop: -20,
          width: "inherit",
        }}
      >
        <SimplifyButtonRowButton
          imageUrl={getObjectValue(buy, "", "imageUrl")}
          label={getObjectValue(buy, "", "label")}
          onClick={onClickBuySegment}
        />
        <SimplifyButtonRowButton
          imageUrl={getObjectValue(rent, "", "imageUrl")}
          label={getObjectValue(rent, "", "label")}
          onClick={onClickRentSegment}
        />
      </CardContent>
    </View>
  );
}

export function SimplifyButtonRowButton({ imageUrl, label, onClick }) {
  return (
    <FlexView onClick={onClick} style={{ alignItems: "center" }}>
      <Image
        src={imageUrl}
        style={{ borderRadius: 5, height: 75, width: 75 }}
      />
      <Info style={{ color: "#888888", marginTop: 5 }}>{label}</Info>
    </FlexView>
  );
}
