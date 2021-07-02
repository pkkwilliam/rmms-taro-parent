const PUBLIC_CATEGORY_SERVICE = "/public/v1/category";
const PUBLIC_COMPANY_CUSTOMISE_SERVICE = "/public/v1/company_customise";
const PUBLIC_COMPANY_SERVICE = "/public/v1/company";
const PUBLIC_ITEM_SERVICE = "/public/v1/item";
const PUBLIC_REAL_ESTATE_RESERVATION = "/public/v1/real_estate_reservation";

const USER_FAVORITE = "/user/v1/favorite";
const USER_PROFILE = "/api/v1/user_profile";

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

// Favorite
export function GET_USER_FAVORITE_ALL() {
  return {
    url: USER_FAVORITE + "/all",
    method: "GET",
  };
}

export function ADD_USER_FAVORITE(realEstate) {
  return {
    body: realEstate,
    url: USER_FAVORITE,
    method: "POST",
  };
}

export function DELETE_USER_FAVORITE(realEstate) {
  return {
    body: realEstate,
    url: USER_FAVORITE,
    method: "DELETE",
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

// Login
/**
 *
 * @param {long} companyId
 * @param {string} code
 */
export function LOGIN_ACCORDING_TO_COMPANY(companyId, code) {
  return {
    url: `/login/wechat/login_with_company?code=${code}&companyId=${companyId}`,
    method: "POST",
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

// User Profile
export function UPDATE_USER_PROFILE_INFO(requestProfile) {
  return {
    body: requestProfile,
    url: `${USER_PROFILE}/update_user_profile_info`,
    method: "PUT",
  };
}
