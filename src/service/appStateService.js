import { GET_COMPANY, GET_COMPANY_CATEGORIES, GET_ITEMS } from "./service";

export default class AppStateService {
  appState;
  serviceExecutor;

  constructor(appState, serviceExecutor) {
    this.appState = appState;
    this.serviceExecutor = serviceExecutor;
  }

  getCategories(companyId) {
    return new Promise((resolve, reject) => {
      if (this.appState.category.dirty) {
        this.serviceExecutor
          .execute(GET_COMPANY_CATEGORIES(companyId))
          .then((categories) => {
            this.appState.category.setCategories(categories);
            resolve();
          });
      }
    });
  }

  getCompany(companyId) {
    return new Promise((resolve, reject) => {
      if (this.appState.company.dirty) {
        this.serviceExecutor.execute(GET_COMPANY(companyId)).then((result) => {
          this.appState.company.setCompany(result);
          resolve();
        });
      }
    });
  }

  getItems(companyId, categoryId) {
    return new Promise((resolve, reject) => {
      if (!this.appState.item.items[categoryId]) {
        this.serviceExecutor
          .execute(GET_ITEMS(companyId, categoryId))
          .then((items) => {
            this.appState.item.setItems(categoryId, items);
            resolve();
          });
      }
    });
  }
}
