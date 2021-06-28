const PUBLIC_CATEGORY_SERVICE = "/public/v1/category";
const PUBLIC_COMPANY_CUSTOMISE_SERVICE = "/public/v1/company_customise";
const PUBLIC_COMPANY_SERVICE = "/public/v1/company";
const PUBLIC_ITEM_SERVICE = "/public/v1/item";
const PUBLIC_REAL_ESTATE_RESERVATION = "/public/v1/real_estate_reservation";

// Category
export function GET_COMPANY_CATEGORIES(companyId) {
  return {
    url: `${PUBLIC_CATEGORY_SERVICE}/categories?companyId=${companyId}`,
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

// Company Customise
export function GET_COMPANY_CUSTOMISE(companyId) {
  return {
    url: `${PUBLIC_COMPANY_CUSTOMISE_SERVICE}?companyId=${companyId}`,
    method: "GET",
  };
}

// Item
export function GET_ITEM(companyId, itemId) {
  return {
    url: `${PUBLIC_ITEM_SERVICE}?companyId=${companyId}&itemId=${itemId}`,
    method: "GET",
  };
}

export function GET_ITEMS(companyId) {
  return {
    url: `${PUBLIC_ITEM_SERVICE}/items?companyId=${companyId}`,
    method: "GET",
  };
}

// Reservation
export function MAKE_RESERVATION(reservationRequest) {
  return {
    body: reservationRequest,
    url: `${PUBLIC_REAL_ESTATE_RESERVATION}`,
    method: "POST",
  };
}
