(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./lottery/qlc", "./lottery/qxc", "./lottery/ssq", "./lottery/dlt", "./constants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./lottery/qlc"), require("./lottery/qxc"), require("./lottery/ssq"), require("./lottery/dlt"), require("./constants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.qlc, global.qxc, global.ssq, global.dlt, global.constants);
    global.index = mod.exports;
  }
})(this, function (_exports, _qlc, _qxc, _ssq, _dlt, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Qlc", {
    enumerable: true,
    get: function get() {
      return _qlc.default;
    }
  });
  Object.defineProperty(_exports, "Qxc", {
    enumerable: true,
    get: function get() {
      return _qxc.default;
    }
  });
  Object.defineProperty(_exports, "Ssq", {
    enumerable: true,
    get: function get() {
      return _ssq.default;
    }
  });
  Object.defineProperty(_exports, "Dlt", {
    enumerable: true,
    get: function get() {
      return _dlt.default;
    }
  });
  Object.defineProperty(_exports, "CODE_PARAM_ERROR", {
    enumerable: true,
    get: function get() {
      return _constants.CODE_PARAM_ERROR;
    }
  });
  Object.defineProperty(_exports, "CODE_NOT_HIT", {
    enumerable: true,
    get: function get() {
      return _constants.CODE_NOT_HIT;
    }
  });
  _qlc = _interopRequireDefault(_qlc);
  _qxc = _interopRequireDefault(_qxc);
  _ssq = _interopRequireDefault(_ssq);
  _dlt = _interopRequireDefault(_dlt);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});