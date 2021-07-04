"use strict";

var _interopRequireWildcard = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RmmsContext = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper"));

var _defineProperty2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

var RmmsContext = /*#__PURE__*/_react.default.createContext();

exports.RmmsContext = RmmsContext;

var RmmsAppState = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(RmmsAppState, _Component);

  var _super = (0, _createSuper2.default)(RmmsAppState);

  function RmmsAppState() {
    var _this;

    (0, _classCallCheck2.default)(this, RmmsAppState);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      category: {
        categories: [],
        dirty: true
      },
      company: {
        dirty: true,
        id: 0
      },
      companyCustomise: {
        dirty: true,
        landingPage: {
          banners: [],
          bottomList: [],
          carousel: []
        },
        mainMenuButtonRow: {
          buy: {},
          rent: {}
        },
        style: {
          primary: "",
          secondary: ""
        }
      },
      deviceInfo: {
        dirty: true
      },
      favorite: {
        dirty: true,
        favorites: []
      },
      item: {
        dirty: true,
        items: []
      },
      shortTermMemory: {
        currentCategoryId: 0,
        currentSegmentTypeIndex: 0
      },
      userProfile: {
        dirty: true,
        userProfile: {}
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "AppStateWrapper", function (_ref) {
      var children = _ref.children;
      var _this$state = _this.state,
          category = _this$state.category,
          company = _this$state.company,
          companyCustomise = _this$state.companyCustomise,
          deviceInfo = _this$state.deviceInfo,
          favorite = _this$state.favorite,
          item = _this$state.item,
          shortTermMemory = _this$state.shortTermMemory,
          userProfile = _this$state.userProfile;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(RmmsContext.Provider, {
        value: {
          category: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, category), {}, {
            setCategories: _this.setCategories
          }),
          company: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, company), {}, {
            setCompany: _this.setCompany
          }),
          companyCustomise: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, companyCustomise), {}, {
            setCompanyCustomise: _this.setCompanyCustomise
          }),
          deviceInfo: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, deviceInfo), {}, {
            setDeviceInfo: _this.setDeviceInfo
          }),
          favorite: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, favorite), {}, {
            setFavorites: _this.setFavorites
          }),
          item: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
            setItems: _this.setItems
          }),
          shortTermMemory: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, shortTermMemory), {}, {
            setShortTermMemory: _this.setShortTermMemory
          }),
          userProfile: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, userProfile), {}, {
            setUserProfile: _this.setUserProfile
          })
        },
        children: children
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setCategories", function (categories) {
      _this.setState(function (state) {
        return {
          category: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state.category), {}, {
            categories: categories,
            dirty: false
          })
        };
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setCompany", function (company) {
      _this.setState(function (state) {
        return {
          company: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, company), {}, {
            dirty: false
          })
        };
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setCompanyCustomise", function (companyCustomise) {
      _this.setState(function (state) {
        return {
          companyCustomise: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, companyCustomise), {}, {
            dirty: false
          })
        };
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setDeviceInfo", function (deviceInfo) {
      _this.setState({
        deviceInfo: {
          deviceInfo: deviceInfo,
          dirty: false
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setFavorites", function (favorites) {
      _this.setState({
        favorite: {
          dirty: false,
          favorites: favorites
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setItems", function (items) {
      _this.setState({
        item: {
          dirty: false,
          items: items
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setItems", function (items) {
      _this.setState({
        item: {
          dirty: false,
          items: items
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setShortTermMemory", function (shortTermMemory) {
      _this.setState({
        shortTermMemory: shortTermMemory
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setUserProfile", function (userProfile) {
      _this.setState({
        userProfile: {
          dirty: false,
          userProfile: userProfile
        }
      });
    });
    return _this;
  }

  return RmmsAppState;
}(_react.Component);

exports.default = RmmsAppState;