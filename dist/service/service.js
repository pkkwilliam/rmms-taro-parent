"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_COMPANY_CATEGORIES = GET_COMPANY_CATEGORIES;
exports.GET_COMPANY = GET_COMPANY;
exports.GET_COMPANY_CUSTOMISE = GET_COMPANY_CUSTOMISE;
exports.GET_USER_FAVORITE_ALL = GET_USER_FAVORITE_ALL;
exports.ADD_USER_FAVORITE = ADD_USER_FAVORITE;
exports.DELETE_USER_FAVORITE = DELETE_USER_FAVORITE;
exports.GET_ITEM = GET_ITEM;
exports.GET_ITEMS = GET_ITEMS;
exports.LOGIN_ACCORDING_TO_COMPANY = LOGIN_ACCORDING_TO_COMPANY;
exports.MAKE_RESERVATION = MAKE_RESERVATION;
exports.UPDATE_USER_PROFILE_INFO = UPDATE_USER_PROFILE_INFO;
var PUBLIC_CATEGORY_SERVICE = "/public/v1/category";
var PUBLIC_COMPANY_CUSTOMISE_SERVICE = "/public/v1/company_customise";
var PUBLIC_COMPANY_SERVICE = "/public/v1/company";
var PUBLIC_ITEM_SERVICE = "/public/v1/item";
var PUBLIC_REAL_ESTATE_RESERVATION = "/public/v1/real_estate_reservation";

var USER_FAVORITE = "/user/v1/favorite";
var USER_PROFILE = "/api/v1/user_profile";

// Category
function GET_COMPANY_CATEGORIES(companyId) {
  return {
    url: PUBLIC_CATEGORY_SERVICE + "/categories?companyId=" + companyId,
    method: "GET"
  };
}

// Company
function GET_COMPANY(companyId) {
  return {
    url: PUBLIC_COMPANY_SERVICE + "?companyId=" + companyId,
    method: "GET"
  };
}

// Company Customise
function GET_COMPANY_CUSTOMISE(companyId) {
  return {
    url: PUBLIC_COMPANY_CUSTOMISE_SERVICE + "?companyId=" + companyId,
    method: "GET"
  };
}

// Favorite
function GET_USER_FAVORITE_ALL() {
  return {
    url: USER_FAVORITE + "/all",
    method: "GET"
  };
}

function ADD_USER_FAVORITE(realEstate) {
  return {
    body: realEstate,
    url: USER_FAVORITE,
    method: "POST"
  };
}

function DELETE_USER_FAVORITE(realEstate) {
  return {
    body: realEstate,
    url: USER_FAVORITE,
    method: "DELETE"
  };
}

// Item
function GET_ITEM(companyId, itemId) {
  return {
    url: PUBLIC_ITEM_SERVICE + "?companyId=" + companyId + "&itemId=" + itemId,
    method: "GET"
  };
}

function GET_ITEMS(companyId) {
  return {
    url: PUBLIC_ITEM_SERVICE + "/items?companyId=" + companyId,
    method: "GET"
  };
}

// Login
/**
 *
 * @param {long} companyId
 * @param {string} code
 */
function LOGIN_ACCORDING_TO_COMPANY(companyId, code) {
  return {
    url: "/login/wechat/login_with_company?code=" + code + "&companyId=" + companyId,
    method: "POST"
  };
}

// Reservation
function MAKE_RESERVATION(reservationRequest) {
  return {
    body: reservationRequest,
    url: "" + PUBLIC_REAL_ESTATE_RESERVATION,
    method: "POST"
  };
}

// User Profile
function UPDATE_USER_PROFILE_INFO(requestProfile) {
  return {
    body: requestProfile,
    url: USER_PROFILE + "/update_user_profile_info",
    method: "PUT"
  };
}