"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEGMENT_TYPES = exports.RENT_SEGMENT = exports.SELL_SEGMENT = void 0;
var SELL_SEGMENT = {
  label: "買賣",
  value: "SELL",
  index: 0
};
exports.SELL_SEGMENT = SELL_SEGMENT;
var RENT_SEGMENT = {
  label: "出租",
  value: "RENT",
  index: 1
};
exports.RENT_SEGMENT = RENT_SEGMENT;
var SEGMENT_TYPES = [SELL_SEGMENT, RENT_SEGMENT];
exports.SEGMENT_TYPES = SEGMENT_TYPES;