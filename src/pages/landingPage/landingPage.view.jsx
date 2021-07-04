import React from "react";
import { Image, ScrollView, View } from "@tarojs/components";
import ApplicationComponentView from "../../common/applicationComponent.view";
import ImageCarousel from "../../common/imageCarousel";
import CircularButton from "../../common/circularButton";
import Info from "../../common/text/info";
import H2 from "../../common/text/h2";
import FlexView from "../../common/flexView";
import MainButtonRow from "../../common/mainButtonRow/mainButtonRow";

export default class LandingPageView extends ApplicationComponentView {
  getComponentLabelName() {
    return "landingPageLabel";
  }

  getComponentStyleName() {
    return "landingPageStyle";
  }

  render() {
    const { categories, items, onClickItem } = this.props;
    const { bottomListStyle, carouselStyle } = this.componentStyle;
    return (
      <this.Wrapper
        style={{
          backgroundColor: this.appStyle?.backgroundColor?.value,
        }}
      >
        <FlexView>
          <ImageCarousel imageUrls={carouselStyle.map((image) => image.url)} />
          <FlexView style={{ paddingLeft: 15, paddingRight: 15 }}>
            <MainButtonRow />
            <BottomListing
              bottomListStyle={bottomListStyle}
              categories={categories}
              items={items}
              onClickItem={onClickItem}
            />
          </FlexView>
        </FlexView>
      </this.Wrapper>
    );
  }
}

export function BottomListing({
  bottomListStyle,
  categories,
  items,
  onClickItem,
}) {
  return bottomListStyle.map((listItem) => {
    if (listItem.type === "category") {
      return (
        <CategoryListing
          categories={categories}
          categoryId={listItem.id}
          items={items}
          onClickItem={onClickItem}
        />
      );
    } else if (listItem.type === "item") {
      return <ItemListing itemId={listItem.id} />;
    }
  });
}

/**
 * @deprecated
 *
 * @param {*} props
 * @returns
 */
export function ButtonRow(props) {
  const { mainMenuButtons, onClickMenuButton } = props;
  const buttons = mainMenuButtons.map((button, index) => (
    <FlexView
      key={"landing_page_button_row" + index}
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: 10,
      }}
    >
      <CircularButton
        color={button.color}
        onClick={() => onClickMenuButton(150)}
        url={button.url}
      ></CircularButton>
      <Info style={{ color: "#5F5F5F", marginTop: 6 }}>{button.name}</Info>
    </FlexView>
  ));
  return <View className="at-row at-row__justify--around">{buttons}</View>;
}

export function CategoryListing({
  categories,
  categoryId,
  imageHeight = 180,
  imageWidth = 250,
  items,
  onClickItem,
}) {
  const displayCategory = categories.find(
    (category) => category.id === categoryId
  );
  const itemsCard = items
    .filter((item) => {
      for (let index = 0; index < item.categories.length; index++) {
        const currentCategoryId = item.categories[index].id;
        if (currentCategoryId === categoryId) {
          return true;
        }
      }
      return false;
    })
    .map((item, index) => {
      const { name } = item;
      return (
        <FlexView
          key={"CategoryListing" + index}
          onClick={() => onClickItem(item)}
          style={{ marginRight: 25 }}
        >
          <Image
            mode="aspectFill"
            src={item.imageUrls[0]}
            style={{
              borderRadius: 10,
              height: imageHeight,
              width: imageWidth,
            }}
          />
          <Info>{name ? name : ""}</Info>
        </FlexView>
      );
    });
  let name = "";
  if (displayCategory) {
    name = displayCategory.name;
  }
  return (
    <FlexView style={{ marginTop: 15 }}>
      <H2>{name ? name : "分類"}</H2>
      <ScrollView scrollX scrollWithAnimation>
        <FlexView style={{ display: "flex", flexDirection: "row" }}>
          {itemsCard}
        </FlexView>
      </ScrollView>
    </FlexView>
  );
}

export function ItemListing({ itemId }) {
  return null;
}

export function OneRowBanners({ banners }) {
  return banners.map((banner, index) => (
    <Image
      key={OneRowBanners + index}
      src={banner.url}
      style={{ borderRadius: 15, maxHeight: 100, width: "100%" }}
    />
  ));
}
