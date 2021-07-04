"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGender = getGender;
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper"));

var _defineProperty2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _applicationComponent = _interopRequireDefault(require("../../common/applicationComponent"));

var _userProfile = _interopRequireDefault(require("./userProfile.view"));

var _wxApiUtil = require("../../common/wxApiUtil");

var _service = require("../../service/service");

var _applicationRoutes = require("../../routes/applicationRoutes");

var _jsxRuntime = require("react/jsx-runtime");

var LandingPage = /*#__PURE__*/function (_ApplicationComponent) {
  (0, _inherits2.default)(LandingPage, _ApplicationComponent);

  var _super = (0, _createSuper2.default)(LandingPage);

  function LandingPage() {
    var _this;

    (0, _classCallCheck2.default)(this, LandingPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", (0, _objectSpread2.default)({}, _this.state));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClickRefreshUserProfileInfo", function () {
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
          _this.appState.userProfile.setUserProfile(updatedUserProfile), _this.setState({
            userProfile: updatedUserProfile
          });
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClickMenuItemFavorite", function () {
      _this.goTo(_applicationRoutes.FAVORITE);
    });
    return _this;
  }

  (0, _createClass2.default)(LandingPage, [{
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

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_userProfile.default, (0, _objectSpread2.default)({
        onClickRefreshUserProfileInfo: this.onClickRefreshUserProfileInfo,
        onClickMenuItemFavorite: this.onClickMenuItemFavorite,
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
}(_applicationComponent.default);

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