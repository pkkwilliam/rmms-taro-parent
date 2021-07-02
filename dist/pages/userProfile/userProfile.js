"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getGender = getGender;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _applicationComponent = require("../../common/applicationComponent");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

var _userProfile = require("./userProfile.view");

var _userProfile2 = _interopRequireDefault(_userProfile);

var _wxApiUtil = require("../../common/wxApiUtil");

var _service = require("../../service/service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LandingPage = function (_ApplicationComponent) {
  _inherits(LandingPage, _ApplicationComponent);

  function LandingPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LandingPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = _extends({}, _this.state), _this.onClickRefreshUserProfileInfo = function () {
      (0, _wxApiUtil.wxGetUserProfile)(function (response) {
        var _response$userInfo = response.userInfo,
            avatarUrl = _response$userInfo.avatarUrl,
            gender = _response$userInfo.gender,
            nickName = _response$userInfo.nickName;

        var requestBody = {
          imageUrl: avatarUrl,
          gender: getGender(gender),
          name: nickName
        };
        _this.serviceExecutor.execute((0, _service.UPDATE_USER_PROFILE_INFO)(requestBody)).then(function (updatedUserProfile) {
          _this.appState.userProfile.setUserProfile(updatedUserProfile), _this.setState({ userProfile: updatedUserProfile });
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LandingPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.appStateService.getFavorites();
    }
  }, {
    key: "render",
    value: function render() {
      var displayUserProfile = this.appState.userProfile.userProfile;
      if (!displayUserProfile.imageUrl) {
        displayUserProfile = this.getDefaultUserInfo();
      }
      return _react2.default.createElement(_userProfile2.default, _extends({
        onClickRefreshUserProfileInfo: this.onClickRefreshUserProfileInfo,
        favorites: this.appState.favorite.favorites,
        userProfile: displayUserProfile
      }, this.state));
    }
  }, {
    key: "getDefaultUserInfo",
    value: function getDefaultUserInfo() {
      return {
        imageUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132",
        gender: undefined,
        name: "微信用戶"
      };
    }
  }]);

  return LandingPage;
}(_applicationComponent2.default);

exports.default = LandingPage;
function getGender(genderInt) {
  switch (genderInt) {
    case 0:
      return "UNKNOWN";
    case 1:
      return "MALE";
    case 2:
      return "FEMALE";
  }
}