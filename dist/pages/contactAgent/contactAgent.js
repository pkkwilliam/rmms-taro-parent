"use strict";

var _interopRequireWildcard = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper"));

var _defineProperty2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _taro = _interopRequireDefault(require("@tarojs/taro"));

var _taroUi = require("taro-ui");

var _components = require("@tarojs/components");

var _applicationButton = _interopRequireDefault(require("../../common/applicationButton"));

var _itemDetail = require("../itemDetail/itemDetail.view");

var _service = require("../../service/service");

var _applicationComponent = _interopRequireWildcard(require("../../common/applicationComponent.view"));

var _jsxRuntime = require("react/jsx-runtime");

var ContactAgent = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(ContactAgent, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(ContactAgent);

  function ContactAgent() {
    var _this;

    (0, _classCallCheck2.default)(this, ContactAgent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _this.state), {}, {
      clientName: "",
      phoneNumber: ""
    }));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "makeReservation", function () {
      var _this$state = _this.state,
          clientName = _this$state.clientName,
          phoneNumber = _this$state.phoneNumber;

      _this.serviceExecutor.execute((0, _service.MAKE_RESERVATION)({
        companyId: process.env.COMPANY_ID,
        itemId: _this.props.id,
        requestCountryCode: "853",
        requestName: clientName,
        requestSmsNumber: phoneNumber
      })).then(function () {
        return _this.onMakeReservationSuccess();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setClientName", function (clientName) {
      _this.setState({
        clientName: clientName
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setPhoneNumber", function (phoneNumber) {
      _this.setState({
        phoneNumber: phoneNumber
      });
    });
    return _this;
  }

  (0, _createClass2.default)(ContactAgent, [{
    key: "getComponentLabelName",
    value: function getComponentLabelName() {
      return "contactAgentLabel";
    }
  }, {
    key: "getComponentStyleName",
    value: function getComponentStyleName() {
      return "contactAgentStyle";
    }
  }, {
    key: "render",
    value: function render() {
      var _contactAgentLabel$he,
          _this2 = this,
          _contactAgentLabel$na,
          _contactAgentLabel$na2,
          _contactAgentLabel$ph,
          _contactAgentLabel$ph2,
          _contactAgentLabel$te,
          _contactAgentLabel$su;

      var contactAgentLabel = this.componentLabel;
      var _this$props = this.props,
          id = _this$props.id,
          listingType = _this$props.listingType,
          name = _this$props.name,
          showAgency = _this$props.showAgency,
          toggleShowAgency = _this$props.toggleShowAgency;
      var _this$state2 = this.state,
          clientName = _this$state2.clientName,
          phoneNumber = _this$state2.phoneNumber;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtFloatLayout, {
        isOpened: showAgency,
        title: contactAgentLabel === null || contactAgentLabel === void 0 ? void 0 : (_contactAgentLabel$he = contactAgentLabel.header) === null || _contactAgentLabel$he === void 0 ? void 0 : _contactAgentLabel$he.value,
        onClose: toggleShowAgency,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.View, {
          style: {
            marginLeft: 10,
            marginRight: 10
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_itemDetail.ItemHeader, {
            id: id,
            listingType: listingType,
            name: name
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtInput, {
            name: "input1",
            customStyle: {
              marginLeft: 0,
              marginTop: 15
            },
            onChange: function onChange(value) {
              return _this2.setClientName(value);
            },
            placeholder: contactAgentLabel === null || contactAgentLabel === void 0 ? void 0 : (_contactAgentLabel$na = contactAgentLabel.nameInputPlaceHolder) === null || _contactAgentLabel$na === void 0 ? void 0 : _contactAgentLabel$na.value,
            title: contactAgentLabel === null || contactAgentLabel === void 0 ? void 0 : (_contactAgentLabel$na2 = contactAgentLabel.nameInputTitle) === null || _contactAgentLabel$na2 === void 0 ? void 0 : _contactAgentLabel$na2.value,
            value: clientName
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtInput, {
            name: "input2",
            customStyle: {
              marginLeft: 0,
              marginTop: 15
            },
            onChange: function onChange(value) {
              return _this2.setPhoneNumber(value);
            },
            placeholder: contactAgentLabel === null || contactAgentLabel === void 0 ? void 0 : (_contactAgentLabel$ph = contactAgentLabel.phoneInputPlaceHolder) === null || _contactAgentLabel$ph === void 0 ? void 0 : _contactAgentLabel$ph.value,
            title: contactAgentLabel === null || contactAgentLabel === void 0 ? void 0 : (_contactAgentLabel$ph2 = contactAgentLabel.phoneInputTitle) === null || _contactAgentLabel$ph2 === void 0 ? void 0 : _contactAgentLabel$ph2.value,
            value: phoneNumber
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_taroUi.AtTextarea, {
            count: false,
            customStyle: {
              color: "#5F5F5F",
              marginTop: 15
            },
            disabled: true,
            value: (0, _applicationComponent.generateDynamicLabel)(contactAgentLabel === null || contactAgentLabel === void 0 ? void 0 : (_contactAgentLabel$te = contactAgentLabel.textAreaValue) === null || _contactAgentLabel$te === void 0 ? void 0 : _contactAgentLabel$te.value, [id, name, phoneNumber])
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_applicationButton.default, {
            onClick: this.makeReservation,
            style: {
              marginBottom: 15,
              marginTop: 30
            },
            children: contactAgentLabel === null || contactAgentLabel === void 0 ? void 0 : (_contactAgentLabel$su = contactAgentLabel.submitButton) === null || _contactAgentLabel$su === void 0 ? void 0 : _contactAgentLabel$su.value
          })]
        })
      });
    }
  }, {
    key: "onMakeReservationSuccess",
    value: function onMakeReservationSuccess() {
      var messageSent = this.componentLabel.messageSent;

      _taro.default.showToast({
        title: messageSent === null || messageSent === void 0 ? void 0 : messageSent.value,
        icon: "success",
        duration: 2000
      });

      this.setState({
        phoneNumber: ""
      });
      this.props.toggleShowAgency();
    }
  }]);
  return ContactAgent;
}(_applicationComponent.default);

exports.default = ContactAgent;