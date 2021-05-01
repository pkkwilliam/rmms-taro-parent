import { Image, ScrollView, View } from "@tarojs/components";
import ApplicationComponentView from "../../common/applicationComponent.view";
import ImageCarousel from "../../common/imageCarousel";
import Card from "../../common/card";
import CircularButton from "../../common/circularButton";
import Info from "../../common/text/info";
import H2 from "../../common/text/h2";
import FlexView from "../../common/flexView";

export default class LandingPageView extends ApplicationComponentView {
  render() {
    const {
      categories,
      items,
      landingPage,
      onClickItem,
      onClickMenuButton,
    } = this.props;
    return (
      <this.Wrapper>
        <FlexView>
          <ImageCarousel
            imageUrls={landingPage.carousel.map((image) => image.url)}
          />
          <DefaultCardContent
            banners={landingPage.banners}
            bottomList={landingPage.bottomList}
            mainMenuButtons={landingPage.mainMenuButtons}
            categories={categories}
            items={items}
            onClickItem={onClickItem}
            onClickMenuButton={onClickMenuButton}
          />
        </FlexView>
      </this.Wrapper>
    );
  }
}

export function BottomListing({ bottomList, categories, items, onClickItem }) {
  return bottomList.map((listItem) => {
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

export function ButtonRow(props) {
  const { mainMenuButtons, onClickMenuButton } = props;
  const buttons = mainMenuButtons.map((button, index) => (
    <FlexView
      key={"landing_page_button_row" + index}
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 15,
        paddingTop: 15,
      }}
    >
      <CircularButton
        color={button.color}
        onClick={() => onClickMenuButton(150)}
        url={button.url}
      ></CircularButton>
      <Info style={{ marginTop: 6 }}>{button.name}</Info>
    </FlexView>
  ));
  return <View className="at-row at-row__justify--around">{buttons}</View>;
}

export function CardContent(props) {
  const { children, style } = props;
  return (
    <Card
      style={{
        backgroundColor: "white",
        marginTop: -25,
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

export function CategoryListing({
  categories,
  categoryId,
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
            src={item.imageUrls[0]}
            style={{ borderRadius: 10, height: 200, width: 200 }}
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
    <FlexView>
      <H2>{name ? name : "分類"}</H2>
      <ScrollView scrollX scrollWithAnimation>
        <FlexView style={{ display: "flex", flexDirection: "row" }}>
          {itemsCard}
        </FlexView>
      </ScrollView>
    </FlexView>
  );
}

export function DefaultCardContent({
  banners,
  bottomList,
  categories,
  items,
  mainMenuButtons,
  onClickItem,
  onClickMenuButton,
}) {
  return (
    <CardContent>
      <ButtonRow
        mainMenuButtons={mainMenuButtons}
        onClickMenuButton={onClickMenuButton}
      />
      {/* <OneRowBanners banners={banners} /> */}
      <BottomListing
        bottomList={bottomList}
        categories={categories}
        items={items}
        onClickItem={onClickItem}
      />
    </CardContent>
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
