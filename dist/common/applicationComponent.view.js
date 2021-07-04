"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObjectValue = getObjectValue;
exports.generateDynamicLabel = generateDynamicLabel;
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper"));

var _defineProperty2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _taroUi = require("taro-ui");

var _applicationComponent = _interopRequireDefault(require("./applicationComponent"));

var _contextProvider = require("../appState/contextProvider");

var _flexView = _interopRequireDefault(require("./flexView"));

var _jsxRuntime = require("react/jsx-runtime");

var ApplicationComponentView = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(ApplicationComponentView, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(ApplicationComponentView);

  function ApplicationComponentView() {
    var _this;

    (0, _classCallCheck2.default)(this, ApplicationComponentView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "Wrapper", function (props) {
      var modal = _this.props.modal;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_flexView.default, {
        style: (0, _objectSpread2.default)({
          height: "100vh"
        }, props.style),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ErrorModal, (0, _objectSpread2.default)({}, modal)), props.children]
      });
    });
    return _this;
  }

  (0, _createClass2.default)(ApplicationComponentView, [{
    key: "appState",
    get: function get() {
      return this.context;
    }
  }, {
    key: "appLabel",
    get: function get() {
      return this.appState.companyCustomise.label.commonLabel;
    }
  }, {
    key: "appStyle",
    get: function get() {
      return this.appState.companyCustomise.style;
    }
  }, {
    key: "componentLabel",
    get: function get() {
      var _this$appState$compan;

      return (_this$appState$compan = this.appState.companyCustomise) === null || _this$appState$compan === void 0 ? void 0 : _this$appState$compan.label[this.getComponentLabelName()];
    }
  }, {
    key: "componentStyle",
    get: function get() {
      var _this$appState$compan2;

      return (_this$appState$compan2 = this.appState.companyCustomise) === null || _this$appState$compan2 === void 0 ? void 0 : _this$appState$compan2[this.getComponentStyleName()];
    }
  }, {
    key: "getComponentLabelName",
    value: function getComponentLabelName() {
      throw "please override this";
    }
  }, {
    key: "getComponentStyleName",
    value: function getComponentStyleName() {
      throw "please override this";
    }
  }, {
    key: "componentTest",
    get: function get() {
      var _this$appState$compan3;

      console.log(ApplicationComponentView.compoentLabelName);
      return (_this$appState$compan3 = this.appState.companyCustomise) === null || _this$appState$compan3 === void 0 ? void 0 : _this$appState$compan3.label[ApplicationComponentView.compoentLabelName];
    }
  }, {
    key: "getComponentStyle",
    value: function getComponentStyle(component) {
      if (this.appState.companyCustomise[component]) {
        return this.appState.companyCustomise[component];
      }

      return {};
    }
  }]);
  return ApplicationComponentView;
}(_applicationComponent.default);
/**
 * @deprecated now we on es6 babel 7, we do not need this anymore
 * @param {*} style
 * @param {*} defaultValue
 * @param  {...any} keys
 * @returns
 */


exports.default = ApplicationComponentView;
(0, _defineProperty2.default)(ApplicationComponentView, "contextType", _contextProvider.RmmsContext);

function getObjectValue(style, defaultValue) {
  var recursionHelper = function recursionHelper(style, index, keys) {
    if (!style[keys[index]]) {
      return defaultValue;
    }

    if (index === keys.length - 1) {
      return style[keys[index]];
    }

    return recursionHelper(style[keys[index]], index + 1, keys);
  };

  for (var _len2 = arguments.length, keys = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    keys[_key2 - 2] = arguments[_key2];
  }

  return recursionHelper(style, 0, keys);
}

function ErrorModal(props) {
  var isOpen = props.isOpen;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtModal, {
    isOpen: isOpen,
    title: "\u6807\u9898",
    cancelText: "\u53D6\u6D88",
    confirmText: "\u786E\u8BA4",
    onClose: function onClose() {
      return console.log("onClose");
    },
    onCancel: function onCancel() {
      return console.log("onCancel");
    },
    onConfirm: function onConfirm() {
      return console.log("onConfirm");
    },
    content: "\u6B22\u8FCE\u52A0\u5165\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4\\n\\r\u6B22\u8FCE\u52A0\u5165\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4"
  });
}

function generateDynamicLabel(label, values) {
  for (var index = 0; index < values.length; index++) {
    label = label.replace("$".concat(index + 1), values[index]);
  }

  return label;
}