"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_COMPANY_CATEGORIES = GET_COMPANY_CATEGORIES;
exports.GET_COMPANY = GET_COMPANY;
exports.GET_COMPANY_CUSTOMISE = GET_COMPANY_CUSTOMISE;
exports.GET_ITEM = GET_ITEM;
exports.GET_ITEMS = GET_ITEMS;
var PUBLIC_CATEGORY_SERVICE = "/public/v1/category";
var PUBLIC_COMPANY_CUSTOMISE_SERVICE = "/public/v1/company_customise";
var PUBLIC_COMPANY_SERVICE = "/public/v1/company";
var PUBLIC_ITEM_SERVICE = "/public/v1/item";

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