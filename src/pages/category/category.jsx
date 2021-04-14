import { View } from "@tarojs/components";
import ApplicationComponent from "../../common/applicationComponent";
import CategoryView from "./category.view";
import { GET_COMPANY_CATEGORIES } from "../../service/service";

export default class Category extends ApplicationComponent {
  componentDidMount() {
    this.getCategory(this.appState.company.id);
  }

  render() {
    return (
      <View>
        <CategoryView categories={this.appState.category.categories} />
      </View>
    );
  }

  getCategory(companyId) {
    if (this.appState.category.dirty) {
      this.serviceExecutor
        .execute(GET_COMPANY_CATEGORIES(companyId))
        .then((categories) => this.appState.category.setCategories(categories));
    }
  }
}
