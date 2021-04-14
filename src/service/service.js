const PUBLIC_CATEGORY_SERVICE = "/public/v1/category";
const PUBLIC_COMPANY_SERVICE = "/public/v1/company";

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
