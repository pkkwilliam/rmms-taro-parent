"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RmmsContext = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RmmsContext = exports.RmmsContext = _react2.default.createContext();

var RmmsAppState = function (_Component) {
  _inherits(RmmsAppState, _Component);

  function RmmsAppState() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RmmsAppState);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RmmsAppState.__proto__ || Object.getPrototypeOf(RmmsAppState)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
          carousel: [],
          mainMenuButtons: []
        },
        style: { primary: "", secondary: "" }
      },
      item: { dirty: true, items: [] },
      shortTermMemory: {
        currentCategoryId: 0,
        currentSegmentTypeIndex: 0
      }
    }, _this.AppStateWrapper = function (_ref2) {
      var children = _ref2.children;
      var _this$state = _this.state,
          category = _this$state.category,
          company = _this$state.company,
          companyCustomise = _this$state.companyCustomise,
          item = _this$state.item,
          shortTermMemory = _this$state.shortTermMemory;

      return _react2.default.createElement(
        RmmsContext.Provider,
        {
          value: {
            category: _extends({}, category, {
              setCategories: _this.setCategories
            }),
            company: _extends({}, company, {
              setCompany: _this.setCompany
            }),
            companyCustomise: _extends({}, companyCustomise, {
              setCompanyCustomise: _this.setCompanyCustomise
            }),
            item: _extends({}, item, {
              setItems: _this.setItems
            }),
            shortTermMemory: _extends({}, shortTermMemory, {
              setShortTermMemory: _this.setShortTermMemory
            })
          }
        },
        children
      );
    }, _this.setCategories = function (categories) {
      _this.setState(function (state) {
        return {
          category: _extends({}, state.category, {
            categories: categories,
            dirty: false
          })
        };
      });
    }, _this.setCompany = function (company) {
      _this.setState(function (state) {
        return {
          company: _extends({}, company, {
            dirty: false
          })
        };
      });
    }, _this.setCompanyCustomise = function (companyCustomise) {
      _this.setState(function (state) {
        return {
          companyCustomise: _extends({}, companyCustomise, {
            dirty: false
          })
        };
      });
    }, _this.setItems = function (items) {
      _this.setState({
        item: {
          dirty: false,
          items: items
        }
      });
    }, _this.setItems = function (items) {
      _this.setState({
        item: {
          dirty: false,
          items: items
        }
      });
    }, _this.setShortTermMemory = function (shortTermMemory) {
      _this.setState({
        shortTermMemory: shortTermMemory
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return RmmsAppState;
}(_react.Component);

exports.default = RmmsAppState;