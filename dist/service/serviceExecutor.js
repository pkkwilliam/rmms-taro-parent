"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _taro = require("@tarojs/taro");

var _taro2 = _interopRequireDefault(_taro);

var _bedrockExceptionCode = require("../common/bedrockExceptionCode.json");

var _bedrockExceptionCode2 = _interopRequireDefault(_bedrockExceptionCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServiceExecutor = function () {
  function ServiceExecutor(host) {
    _classCallCheck(this, ServiceExecutor);

    this.host = host;
  }

  _createClass(ServiceExecutor, [{
    key: "execute",
    value: function execute(service) {
      var _this = this;

      var body = service.body,
          url = service.url,
          method = service.method;

      return _taro2.default.request({
        data: JSON.stringify(body),
        url: this.host + url,
        method: method
      }).then(function (rawResponse) {
        return new Promise(function (resolve, reject) {
          return _this.processServerResponse(rawResponse, resolve, reject);
        });
      }).catch(function (exception) {
        _taro2.default.showToast({
          title: "伺服器出錯",
          icon: "none"
        });
      });
    }
  }, {
    key: "processServerResponse",
    value: function processServerResponse(rawResponse, resolve, reject) {
      var statusCode = rawResponse.statusCode;

      if (statusCode >= 200 && statusCode < 300) {
        return resolve(this.process2xxResponse(rawResponse));
      } else if (statusCode >= 400 && statusCode < 500) {
        _taro2.default.showToast({
          title: _bedrockExceptionCode2.default[rawResponse.data.errorCode],
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