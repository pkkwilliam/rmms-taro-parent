"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEGMENT_TYPES = exports.SELL_SEGMENT = exports.RENT_SEGMENT = void 0;
var RENT_SEGMENT = {
  label: "出租",
  value: "RENT",
  index: 0
};
exports.RENT_SEGMENT = RENT_SEGMENT;
var SELL_SEGMENT = {
  label: "買賣",
  value: "SELL",
  index: 1
};
exports.SELL_SEGMENT = SELL_SEGMENT;
var SEGMENT_TYPES = [RENT_SEGMENT, SELL_SEGMENT];
exports.SEGMENT_TYPES = SEGMENT_TYPES;