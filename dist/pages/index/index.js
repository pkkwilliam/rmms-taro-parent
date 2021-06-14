"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = require("@tarojs/components");

var _applicationComponent = require("../../common/applicationComponent");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

var _taroUi = require("taro-ui");

require("taro-ui/dist/style/index.scss");

require("./index.scss");

var _landingPage = require("../landingPage/landingPage");

var _landingPage2 = _interopRequireDefault(_landingPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_ApplicationComponent) {
  _inherits(Index, _ApplicationComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      buttonText: "",
      company: { companyName: undefined }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "componentWillMount",


    // onLoad(options) {
    //   const { companyId } = options;
    //   // get user info
    //   wx.getUserInfo({
    //     desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //     success: (res) => {
    //       console.log(res);
    //     },
    //   });
    //   wx.checkSession({
    //     success() {
    //       //session_key 未过期，并且在本生命周期一直有效
    //       console.log("good");
    //     },
    //     fail() {
    //       // session_key 已经失效，需要重新执行登录流程
    //       console.log("bad");
    //       wx.login({
    //         success(result) {
    //           console.log("result", result);
    //         },
    //         fail() {
    //           console.log("bb");
    //         },
    //       }); //重新登录
    //     },
    //   });
    //   this.appStateService.getCompany(companyId).then((result) => {
    //     wx.setNavigationBarTitle({
    //       title: this.appState.company.name,
    //     });
    //   });

    //   this.appStateService.getCompanyCustomise(companyId);
    // }

    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        _components.View,
        { className: "index" },
        React.createElement(_landingPage2.default, this.props)
      );
    }
  }]);

  return Index;
}(_applicationComponent2.default);

exports.default = Index;