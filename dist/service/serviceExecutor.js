"use strict";

var _interopRequireDefault = require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/pkkwilliam/Desktop/bitcode/reusable-merchant-management/rmms-taro-parent/node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass"));

var _taro = _interopRequireDefault(require("@tarojs/taro"));

var _bedrockExceptionCode = _interopRequireDefault(require("../common/bedrockExceptionCode.json"));

var TOKEN_HEADER = "Authorization";

var ServiceExecutor = /*#__PURE__*/function () {
  function ServiceExecutor(host, getUserToken, setUserToken) {
    (0, _classCallCheck2.default)(this, ServiceExecutor);
    this.host = host;
    this.getUserToken = getUserToken;
    this.setUserToken = setUserToken;
  }

  (0, _createClass2.default)(ServiceExecutor, [{
    key: "execute",
    value: function execute(service) {
      var _this = this;

      var body = service.body,
          url = service.url,
          method = service.method;
      return _taro.default.request({
        data: JSON.stringify(body),
        header: this.generateRequestHeader(this.getUserToken),
        url: this.host + url,
        method: method
      }).then(function (rawResponse) {
        return new Promise(function (resolve, reject) {
          return _this.processServerResponse(rawResponse, resolve, reject, _this.getUserToken, _this.setUserToken);
        });
      }).catch(function (exception) {
        _taro.default.showToast({
          title: "伺服器出錯",
          icon: "none"
        });
      });
    }
  }, {
    key: "generateRequestHeader",
    value: function generateRequestHeader(getUserToken) {
      return {
        Authorization: "Bearer ".concat(getUserToken())
      };
    }
  }, {
    key: "getHeaderToken",
    value: function getHeaderToken(rawResponse, getUserToken, setUserToken) {
      var header = rawResponse.header;
      var token = header[TOKEN_HEADER];

      if (token) {
        setUserToken(token);
      }
    }
  }, {
    key: "processServerResponse",
    value: function processServerResponse(rawResponse, resolve, reject, getUserToken, setUserToken) {
      var statusCode = rawResponse.statusCode;
      this.getHeaderToken(rawResponse, getUserToken, setUserToken);

      if (statusCode >= 200 && statusCode < 300) {
        return resolve(this.process2xxResponse(rawResponse));
      } else if (statusCode >= 400 && statusCode < 500) {
        _taro.default.showToast({
          title: _bedrockExceptionCode.default[rawResponse.data.errorCode],
          icon: "none"
        });
      } else if (statusCode >= 500) {} else {}
    }
  }, {
    key: "process2xxResponse",
    value: function process2xxResponse(rawResponse) {
      var statusCode = rawResponse.statusCode;

      if (statusCode === 200) {
        return rawResponse.data;
      }
    }
  }, {
    key: "process3xxResponse",
    value: function process3xxResponse(rawResponse) {}
  }, {
    key: "process4xxResponse",
    value: function process4xxResponse(rawResponse) {}
  }, {
    key: "process5xxResponse",
    value: function process5xxResponse(rawResponse) {}
  }]);
  return ServiceExecutor;
}();

exports.default = ServiceExecutor;