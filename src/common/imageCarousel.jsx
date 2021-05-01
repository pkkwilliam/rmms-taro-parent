import { Image, Swiper, SwiperItem } from "@tarojs/components";
import ApplicationComponentView from "./applicationComponent.view";

export default class ImageCarousel extends ApplicationComponentView {
  render() {
    const { imageUrls } = this.props;
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
        indicatorColor={secondary}
        indicatorActiveColor={primary}
        circular
        indicatorDots
        style={{ height: 245 }}
      >
        {SwiperImageItems}
      </Swiper>
    );
  }
}
