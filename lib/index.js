"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var dltOther = _interopRequireWildcard(require("./lottery/dlt"));

var qlcOther = _interopRequireWildcard(require("./lottery/qlc"));

var qxcOther = _interopRequireWildcard(require("./lottery/qxc"));

var ssqOther = _interopRequireWildcard(require("./lottery/ssq"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var result = {
  dlt: dltOther.default,
  qlc: qlcOther.default,
  qxc: qxcOther.default,
  ssq: ssqOther.default
};
Object.assign(result, dltOther);
Object.assign(result, qlcOther);
Object.assign(result, qxcOther);
Object.assign(result, ssqOther);
var _default = result;
exports.default = _default;