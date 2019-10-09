(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.constants = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CODE_NOT_HIT = _exports.CODE_PARAM_ERROR = void 0;
  // 参数错误
  var CODE_PARAM_ERROR = -2; // 未中奖

  _exports.CODE_PARAM_ERROR = CODE_PARAM_ERROR;
  var CODE_NOT_HIT = -1;
  _exports.CODE_NOT_HIT = CODE_NOT_HIT;
});