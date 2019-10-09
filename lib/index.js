(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./lottery/qlc", "./lottery/qxc", "./lottery/ssq", "./lottery/dlt"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./lottery/qlc"), require("./lottery/qxc"), require("./lottery/ssq"), require("./lottery/dlt"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.qlc, global.qxc, global.ssq, global.dlt);
    global.index = mod.exports;
  }
})(this, function (_exports, _qlc, _qxc, _ssq, _dlt) {
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
  _qlc = _interopRequireDefault(_qlc);
  _qxc = _interopRequireDefault(_qxc);
  _ssq = _interopRequireDefault(_ssq);
  _dlt = _interopRequireDefault(_dlt);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});