import Taro from "@tarojs/taro";
import ApplicationComponent from "../../common/applicationComponent";
import CategoryView from "./category.view";
import { ITEM_DETAIL } from "../../routes/applicationRoutes";

const SEGMENT_TYPE = [
  { label: "出租", value: "RENT" },
  { label: "買賣", value: "SELL" },
];

export default class Category extends ApplicationComponent {
  state = {
    currentCategoryIndex: 0,
    currentSegmentTypeIndex: 0,
  };

  async componentDidMount() {
    const { currentCategoryIndex } = this.appState.shortTermMemory;
  }

  render() {
    const { category, item } = this.appState;
    const { currentSegmentTypeIndex } = this.state;
    const sortedItems = this.sortItems(item.items, currentSegmentTypeIndex);
    return (
      <CategoryView
        categories={category.categories}
        categoriesItems={this.transfromItemsToNav(sortedItems)}
        onChangeSegmentType={this.onChangeSegmentType}
        onClickCategory={this.onClickCategory}
        onClickItem={this.onClickItem}
        {...this.state}
      />
    );
  }

  onChangeSegmentType = (segmentType) => {
    this.setState({
      currentSegmentTypeIndex: segmentType,
    });
  };

  onClickCategory = (categoryIndex) => {
    this.setState({
      currentCategoryIndex: categoryIndex,
    });
  };

  onClickItem = (item) => {
    this.goTo(ITEM_DETAIL, [{ key: "itemId", value: item.id }]);
  };

  sortItems(items, currentSegmentTypeIndex) {
    const segmentTypeValue = SEGMENT_TYPE[currentSegmentTypeIndex].value;
    return items.filter((item) => item.listingType === segmentTypeValue);
  }

  transfromItemsToNav(items) {
    let navItems = [];
    items.forEach((item) => {
      item.categories.forEach((category) => {
        const { sequence } = category;
        if (!navItems[sequence]) {
          navItems[sequence] = [];
        }
        navItems[sequence] = [...navItems[sequence], item];
      });
    });
    return navItems;
  }
}
