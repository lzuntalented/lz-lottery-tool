"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrEqual = arrEqual;
exports.getLotteryLevel = getLotteryLevel;
exports.isObject = void 0;

var _constants = require("./constants");

/**
 * 判断两个数组相同的个数
 * @param {Array} left
 * @param {Array} right
 * @param {boolean} serises 是否连续相等
 */
function arrEqual(left, right) {
  var serises = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var result = 0;
  var max = -1;
  var count = 0;

  for (var len = left.length, i = 0; i < len; i += 1) {
    if (!serises) {
      if (left[i] === right[i]) {
        result += 1;
      }
    } else if (left[i] !== right[i]) {
      max = Math.max(max, count);
      count = 0;
    } else {
      count += 1;
    }
  }

  if (serises) return Math.max(max, count);
  return result;
}
/**
 * 获取彩票中奖登记
 * @param {Object} numbers 持有号码
 * @param {Object} result 中奖号码
 * @param {Array} rules 中奖规则
 * @param {Boolean} serises 是否连续相等的中奖规则
 * @returns -1 未中奖 其余 > 0 未中奖等级
 */


function getLotteryLevel(numbers, result, rules) {
  var serises = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  for (var len = rules.length, i = 0; i < len; i += 1) {
    var item = rules[i];

    for (var l = item.length, j = 0; j < l; j += 1) {
      var leftCount = item[j][0];
      var rightCount = item[j][1];

      if (arrEqual(numbers.normal, result.normal, serises) === leftCount && (rightCount === 0 || arrEqual(numbers.special, result.special, serises) === rightCount)) {
        return i + 1;
      }
    }
  }

  return _constants.CODE_NOT_HIT;
}

var isType = function isType(type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === "[object ".concat(type, "]");
  };
}; // 是否对象类型


var isObject = isType('Object');
exports.isObject = isObject;