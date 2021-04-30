import {
  GET_COMPANY,
  GET_COMPANY_CATEGORIES,
  GET_COMPANY_CUSTOMISE,
  GET_ITEMS,
} from "./service";

export default class AppStateService {
  appState;
  serviceExecutor;

  constructor(appState, serviceExecutor) {
    this.appState = appState;
    this.serviceExecutor = serviceExecutor;
  }

  getCategories(companyId) {
    const { categories, dirty, setCategories } = this.appState.category;
    return new Promise((resolve, reject) => {
      if (dirty) {
        this.serviceExecutor
          .execute(GET_COMPANY_CATEGORIES(companyId))
          .then((categoriesResponse) => {
            setCategories(categoriesResponse);
            return resolve(categoriesResponse);
          });
      } else {
        return resolve(categories);
      }
    });
  }

  getCompany(companyId) {
    const { companyInfo, dirty, setCompany } = this.appState.company;
    return new Promise((resolve, reject) => {
      if (dirty) {
        this.serviceExecutor
          .execute(GET_COMPANY(companyId))
          .then((companyInfo) => {
            setCompany(companyInfo);
            return resolve(companyInfo);
          });
      } else {
        return resolve(companyInfo);
      }
    });
  }

  getCompanyCustomise(companyId) {
    const { dirty, setCompanyCustomise } = this.appState.companyCustomise;
    return new Promise((resolve, reject) => {
      if (dirty) {
        this.serviceExecutor
          .execute(GET_COMPANY_CUSTOMISE(companyId))
          .then((result) => {
            const content = JSON.parse(result.content);
            setCompanyCustomise(content);
            return resolve(content);
          });
      } else {
        resolve(this.appState.companyCustomise);
      }
    });
  }

  getItems(companyId) {
    const { dirty, items, setItems } = this.appState.item;
    return new Promise((resolve, reject) => {
      if (dirty) {
        this.serviceExecutor.execute(GET_ITEMS(companyId)).then((items) => {
          setItems(items);
          return resolve(items);
        });
      } else {
        return resolve(items);
      }
    });
  }
}
