import React from "react";
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
    searchBar: {
      text: undefined,
      useSearchFilter: false,
    },
  };

  async componentDidMount() {
    const { currentCategoryIndex } = this.appState.shortTermMemory;
  }

  render() {
    const { category, companyCustomise, item } = this.appState;
    const { currentSegmentTypeIndex } = this.state;
    const sortedItems = this.sortItems(item.items, currentSegmentTypeIndex);
    return (
      <CategoryView
        categories={category.categories}
        categoriesItems={this.transfromItemsToNav(sortedItems)}
        commonLabel={companyCustomise.label.common}
        label={companyCustomise.label.category}
        onChangeSegmentType={this.onChangeSegmentType}
        onChangeSearchBarText={this.onChangeSearchBarText}
        onClickCategory={this.onClickCategory}
        onClickItem={this.onClickItem}
        onClickSearchBarClear={this.onClickSearchBarClear}
        onClickSearchBarSubmit={this.onClickSearchBarSubmit}
        {...this.state}
      />
    );
  }

  onChangeSegmentType = (segmentType) => {
    this.setState({
      currentSegmentTypeIndex: segmentType,
    });
  };

  onChangeSearchBarText = (text) => {
    this.setState({
      searchBar: {
        text,
      },
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

  onClickSearchBarClear = () => {
    this.setState({
      searchBar: {
        text: undefined,
        useSearchFilter: true,
      },
    });
  };

  onClickSearchBarSubmit = () => {
    this.setState((state) => ({
      searchBar: {
        ...state.searchBar,
        useSearchFilter: true,
      },
    }));
  };

  sortItems(items, currentSegmentTypeIndex) {
    const { text, useSearchFilter } = this.state.searchBar;
    if (text && useSearchFilter) {
      items = items.filter((item) => item.name.includes(text));
    }
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
