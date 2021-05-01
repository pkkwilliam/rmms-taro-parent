"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApplicationContext = function () {
  function ApplicationContext() {
    _classCallCheck(this, ApplicationContext);
  }

  _createClass(ApplicationContext, [{
    key: "host",
    get: function get() {
      return this.mock ? "http://localhost:8081" : "http://localhost:8081";
    }
  }, {
    key: "mock",
    get: function get() {
      return true;
    }
  }]);

  return ApplicationContext;
}();

exports.default = ApplicationContext;