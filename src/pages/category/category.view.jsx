import React from "react";
import { Fragment } from "react";
import { Image } from "@tarojs/components";
import { AtTabs, AtTabsPane, AtSearchBar, AtSegmentedControl } from "taro-ui";
import "./category.scss";
import H3 from "../../common/text/h3";
import Info from "../../common/text/info";
import FlexView from "../../common/flexView";
import ApplicationTag from "../../common/applicationTag";
import ApplicationComponentView, {
  generateDynamicLabel,
} from "../../common/applicationComponent.view";

export default class CategoryView extends ApplicationComponentView {
  getComponentLabelName() {
    return "categoryLabel";
  }

  getComponentStyleName() {
    return "categoryStyle";
  }

  render() {
    return (
      <Container
        appLabel={this.appLabel}
        categoryLabel={this.componentLabel}
        {...this.props}
      />
    );
  }
}

export function Container(props) {
  return (
    <FlexView>
      <SearchBar {...props} />
      <FlexView style={{ marginLeft: 5, marginRight: 5 }}>
        <TopSegment {...props} />
      </FlexView>
      <FlexView style={{ marginTop: 5 }}>
        <CategoryNav {...props} />
      </FlexView>
    </FlexView>
  );
}

export function CategoryNav(props) {
  const { currentCategoryIndex, categories, onClickCategory } = props;
  const prepareTabList = (categories) => {
    categories = categories.sort(
      (category1, category2) => category1.sequence - category2.sequence
    );
    return categories.map((category) => ({ title: category.name }));
  };
  return (
    <AtTabs
      current={currentCategoryIndex}
      height="600px"
      onClick={onClickCategory}
      scroll
      tabDirection="vertical"
      tabList={prepareTabList(categories)}
    >
      <TabsPaneContainer {...props} />
    </AtTabs>
  );
}

export function SearchBar({
  onChangeSearchBarText,
  onClickSearchBarClear,
  onClickSearchBarSubmit,
  searchBar,
}) {
  return (
    <AtSearchBar
      onActionClick={onClickSearchBarSubmit}
      onClear={onClickSearchBarClear}
      onChange={(event) => onChangeSearchBarText(event)}
      showActionButton={false}
      value={searchBar.text}
    />
  );
}

export function TabsPaneContainer(props) {
  const { currentCategoryIndex, categoriesItems } = props;
  return categoriesItems.map((categoryItems, index) => {
    return (
      <AtTabsPane
        current={currentCategoryIndex}
        key={"TabsPaneContainer" + index}
        tabDirection="vertical"
        index={index}
      >
        <ItemList items={categoryItems} {...props} />
      </AtTabsPane>
    );
  });
}

export function ItemList(props) {
  const { items, categoryLabel, onClickItem } = props;
  const ItemCards = sortSequence(items).map((item, index) => {
    const {
      address,
      area,
      cost,
      description,
      imageUrls,
      listingType,
      livingRoom,
      name,
      restroom,
      room,
    } = item;
    return (
      <FlexView
        key={ItemList + index}
        onClick={() => onClickItem(item)}
        style={{ alignItem: "center", flexDirection: "row", marginBottom: 15 }}
      >
        <Image
          src={imageUrls[0]}
          style={{ borderRadius: 5, height: 75, width: 75 }}
        />
        <FlexView style={{ marginLeft: 15, maxWidth: 200 }}>
          <FlexView
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ListingTypeTag listingType={listingType} {...props} />
            <H3 style={{ marginLeft: 8 }}>{name}</H3>
          </FlexView>
          <Info>{`${area}${
            categoryLabel?.areaSuffix?.value
          } ${generateDynamicLabel(categoryLabel?.layoutValue?.value ?? "", [
            room,
            livingRoom,
          ])}`}</Info>
          <Info>{address}</Info>
        </FlexView>
      </FlexView>
    );
  });
  return <Fragment>{ItemCards}</Fragment>;
}

export function ListingTypeTag({ appLabel, listingType }) {
  return (
    <ApplicationTag color={listingType === "RENT" ? "blue" : "green"}>
      {listingType === "RENT" ? appLabel?.rent.value : appLabel?.buy?.value}
    </ApplicationTag>
  );
}

export function sortSequence(objects) {
  return objects.sort(
    (object1, object2) => object1.sequence - object2.sequence
  );
}

export function TopSegment(props) {
  const { appLabel, currentSegmentTypeIndex, onChangeSegmentType } = props;
  return (
    <AtSegmentedControl
      values={[appLabel?.buy?.value, appLabel?.rent?.value]}
      onClick={onChangeSegmentType}
      current={currentSegmentTypeIndex}
    />
  );
}
