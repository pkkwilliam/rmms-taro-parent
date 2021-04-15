const PUBLIC_CATEGORY_SERVICE = "/public/v1/category";
const PUBLIC_COMPANY_SERVICE = "/public/v1/company";
const PUBLIC_ITEM_SERVICE = "/public/v1/item";

// Category
export function GET_COMPANY_CATEGORIES(companyId) {
  return {
    url: `${PUBLIC_CATEGORY_SERVICE}?companyId=${companyId}`,
    method: "GET",
  };
}

// Company
export function GET_COMPANY(companyId) {
  return {
    url: `${PUBLIC_COMPANY_SERVICE}?companyId=${companyId}`,
    method: "GET",
  };
}

export function GET_ITEMS(companyId, categoryId) {
  return {
    url: `${PUBLIC_ITEM_SERVICE}?companyId=${companyId}&categoryId=${categoryId}`,
    method: "GET",
  };
}
