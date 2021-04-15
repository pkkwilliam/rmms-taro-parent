import { View } from "@tarojs/components";
import ApplicationComponent from "../../common/applicationComponent";
import CategoryView from "./category.view";

export default class Category extends ApplicationComponent {
  state = {
    currentCategoryId: 0,
  };

  async componentDidMount() {
    this.appStateService.getCategories(this.appState.company.id).then(() => {
      const firstCategory = this.appState.category.categories[0];
      this.appStateService.getItems(
        this.appState.companyId.id,
        firstCategory.id
      );
    });
  }

  render() {
    const { category, item } = this.appState;
    return (
      <View>
        <CategoryView
          categories={category.categories}
          // items={item.items[currentCategoryId]}
          onClickCategory={this.onClickCategory}
        />
      </View>
    );
  }

  onClickCategory = (category) => {
    this.appStateService.getItems(this.appState.company.id, category.id);
  };
}
