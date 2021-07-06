import React from "react";
import { Image, Swiper, SwiperItem } from "@tarojs/components";
import ApplicationComponentView from "./applicationComponent.view";

export default class ImageCarousel extends ApplicationComponentView {
  render() {
    const { imageUrls, style } = this.props;
    const { primary, secondary } = this.appStyle;
    const SwiperImageItems = imageUrls.map((imageUrl) => {
      return (
        <SwiperItem>
          <Image src={imageUrl} style={{ width: "100%" }} />
        </SwiperItem>
      );
    });
    return (
      <Swiper
        indicatorColor={secondary?.value}
        indicatorActiveColor={primary?.value}
        circular
        indicatorDots
        style={{ height: 245, ...style }}
      >
        {SwiperImageItems}
      </Swiper>
    );
  }
}
