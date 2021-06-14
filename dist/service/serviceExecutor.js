"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _taro = require("@tarojs/taro");

var _taro2 = _interopRequireDefault(_taro);

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

      var url = service.url,
          method = service.method;

      return _taro2.default.request({
        url: this.host + url,
        method: method
      }).then(function (rawResponse) {
        return _this.processServerResponse(rawResponse);
      }).catch(function (exception) {
        console.log(exception);
      });
    }
  }, {
    key: "processServerResponse",
    value: function processServerResponse(rawResponse) {
      var statusCode = rawResponse.statusCode;

      if (statusCode >= 200 && statusCode < 300) {
        return this.process2xxResponse(rawResponse);
      } else if (statusCode >= 400 && statusCode < 500) {} else if (statusCode >= 500) {} else {}
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