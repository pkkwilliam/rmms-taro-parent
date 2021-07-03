"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.UserSection = UserSection;
exports.UserMenuList = UserMenuList;
exports.displayShortTime = displayShortTime;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _taroUi = require("taro-ui");

var _applicationComponent = require("../../common/applicationComponent.view");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

var _info = require("../../common/text/info");

var _info2 = _interopRequireDefault(_info);

var _h = require("../../common/text/h2");

var _h2 = _interopRequireDefault(_h);

var _flexView = require("../../common/flexView");

var _flexView2 = _interopRequireDefault(_flexView);

var _cardContent = require("../../common/cardContent");

var _cardContent2 = _interopRequireDefault(_cardContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserProfileView = function (_ApplicationComponent) {
  _inherits(UserProfileView, _ApplicationComponent);

  function UserProfileView() {
    _classCallCheck(this, UserProfileView);

    return _possibleConstructorReturn(this, (UserProfileView.__proto__ || Object.getPrototypeOf(UserProfileView)).apply(this, arguments));
  }

  _createClass(UserProfileView, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        this.Wrapper,
        null,
        _react2.default.createElement(
          _flexView2.default,
          { style: { margin: 15 } },
          _react2.default.createElement(UserSection, _extends({
            onClickRefreshUserProfileInfo: this.props.onClickRefreshUserProfileInfo
          }, this.props.userProfile))
        ),
        _react2.default.createElement(
          _flexView2.default,
          { style: { margin: 15 } },
          _react2.default.createElement(UserMenuList, this.props)
        )
      );
    }
  }]);

  return UserProfileView;
}(_applicationComponent2.default);

exports.default = UserProfileView;
function UserSection(_ref) {
  var createTime = _ref.createTime,
      imageUrl = _ref.imageUrl,
      name = _ref.name,
      onClickRefreshUserProfileInfo = _ref.onClickRefreshUserProfileInfo;

  return _react2.default.createElement(
    _cardContent2.default,
    null,
    _react2.default.createElement(
      _flexView2.default,
      {
        style: {
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row"
        }
      },
      _react2.default.createElement(
        _flexView2.default,
        { style: { alignItems: "center", flexDirection: "row" } },
        _react2.default.createElement(_taroUi.AtAvatar, { circle: true, image: imageUrl }),
        _react2.default.createElement(
          _flexView2.default,
          { style: { marginLeft: 15 } },
          _react2.default.createElement(
            _h2.default,
            null,
            name
          ),
          _react2.default.createElement(
            _info2.default,
            null,
            "\u9996\u6B21\u4F7F\u7528: ",
            displayShortTime(createTime)
          )
        )
      ),
      _react2.default.createElement(
        _taroUi.AtButton,
        {
          customStyle: { margin: 0 },
          onClick: onClickRefreshUserProfileInfo,
          size: "small",
          type: "secondary"
        },
        "\u66F4\u65B0\u8CC7\u6599"
      )
    )
  );
}

function UserMenuList(_ref2) {
  var favorites = _ref2.favorites,
      onClickMenuItemFavorite = _ref2.onClickMenuItemFavorite;

  return _react2.default.createElement(
    _taroUi.AtList,
    null,
    _react2.default.createElement(_taroUi.AtListItem, {
      onClick: onClickMenuItemFavorite,
      title: "\u6536\u85CF",
      extraText: favorites.length + "\u500B\u6A13\u76E4",
      arrow: "right"
    })
  );
}

function displayShortTime(dateTime) {
  if (!dateTime) {
    dateTime = Date.now();
  }
  var current = new Date(dateTime);
  return current.getFullYear() + "-" + (current.getUTCMonth() + 1) + "-" + current.getDate();
}