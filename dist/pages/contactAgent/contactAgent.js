"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _taro = require("@tarojs/taro");

var _taro2 = _interopRequireDefault(_taro);

var _taroUi = require("taro-ui");

var _components = require("@tarojs/components");

var _applicationButton = require("../../common/applicationButton");

var _applicationButton2 = _interopRequireDefault(_applicationButton);

var _applicationComponent = require("../../common/applicationComponent");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

var _itemDetail = require("../itemDetail/itemDetail.view");

var _service = require("../../service/service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactAgent = function (_ApplicationComponent) {
  _inherits(ContactAgent, _ApplicationComponent);

  function ContactAgent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ContactAgent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContactAgent.__proto__ || Object.getPrototypeOf(ContactAgent)).call.apply(_ref, [this].concat(args))), _this), _this.state = _extends({}, _this.state, {
      clientName: "",
      phoneNumber: ""
    }), _this.makeReservation = function () {
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
    }, _this.setClientName = function (clientName) {
      _this.setState({
        clientName: clientName
      });
    }, _this.setPhoneNumber = function (phoneNumber) {
      _this.setState({
        phoneNumber: phoneNumber
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ContactAgent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          listingType = _props.listingType,
          name = _props.name,
          showAgency = _props.showAgency,
          toggleShowAgency = _props.toggleShowAgency;
      var _state = this.state,
          clientName = _state.clientName,
          phoneNumber = _state.phoneNumber;

      return _react2.default.createElement(
        _taroUi.AtFloatLayout,
        {
          isOpened: showAgency,
          title: "\u9810\u7D04\u7747\u6A13",
          onClose: toggleShowAgency
        },
        _react2.default.createElement(
          _components.View,
          { style: { marginLeft: 10, marginRight: 10 } },
          _react2.default.createElement(_itemDetail.ItemHeader, { id: id, listingType: listingType, name: name }),
          _react2.default.createElement(_taroUi.AtInput, {
            name: "input1",
            customStyle: { marginLeft: 0, marginTop: 15 },
            onChange: function onChange(value) {
              return _this2.setClientName(value);
            },
            placeholder: "\u8ACB\u8F38\u5165\u4F60\u7684\u59D3\u540D",
            title: "\u59D3\u540D",
            value: clientName
          }),
          _react2.default.createElement(_taroUi.AtInput, {
            name: "input2",
            customStyle: { marginLeft: 0, marginTop: 15 },
            onChange: function onChange(value) {
              return _this2.setPhoneNumber(value);
            },
            placeholder: "\u8ACB\u8F38\u5165\u4F60\u7684\u96FB\u8A71\u865F\u78BC",
            title: "\u96FB\u8A71\u865F\u78BC",
            value: phoneNumber
          }),
          _react2.default.createElement(_taroUi.AtTextarea, {
            count: false,
            customStyle: { color: "#5F5F5F", marginTop: 15 },
            disabled: true,
            value: "\u4F60\u597D\uFF0C\u6211\u60F3\u9810\u7D04\u95DC\u65BC" + id + ":" + name + "\uFF0C\u6211\u7684\u96FB\u8A71:" + phoneNumber
          }),
          _react2.default.createElement(
            _applicationButton2.default,
            {
              onClick: this.makeReservation,
              style: { marginBottom: 15, marginTop: 30 }
            },
            "\u901A\u77E5\u4E2D\u4ECB"
          )
        )
      );
    }
  }, {
    key: "onMakeReservationSuccess",
    value: function onMakeReservationSuccess() {
      _taro2.default.showToast({
        title: "通知已發送",
        icon: "success",
        duration: 2000
      });
      this.setState({ phoneNumber: "" });
      this.props.toggleShowAgency();
    }
  }]);

  return ContactAgent;
}(_applicationComponent2.default);

exports.default = ContactAgent;