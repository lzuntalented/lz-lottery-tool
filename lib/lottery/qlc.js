"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseQlcString = parseQlcString;
exports.parseQlcObject = parseQlcObject;
exports.getQlcLotteryLevel = exports.default = void 0;

var _tool = require("../tool");

var _constants = require("../constants");

// 彩票名称
var name = '七乐彩'; // 彩票标识

var key = 'qlc'; // 彩票号码个数

var len = {
  // 总个数
  total: 8,
  // 普通号
  normal: 7,
  // 特别号
  special: 1
}; // 中彩规则

var rules = [[[7, 0]], [[6, 1]], [[6, 0]], [[5, 1]], [[5, 0]], [[4, 1]], [[4, 0]]];
var _default = {
  name: name,
  key: key
};
/**
 * 解析双色球
 * @param {String} nums
 * @return false 不符合的规则
 */

exports.default = _default;

function parseQlcString() {
  var nums = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var split = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  var list = nums.replace(/\s+/g, split).split(split).map(function (it) {
    return +it;
  });

  if (list.length !== len.total) {
    return false;
  }

  var normal = list.splice(0, len.normal);
  var numbers = {
    normal: normal,
    special: list
  };
  return numbers;
}
/**
 * 解析对象是否符合双色球规范
 * @param {*} obj
 */


function parseQlcObject(obj) {
  if (!(0, _tool.isObject)(obj)) {
    return false;
  }

  if (obj.normal.length !== len.normal || obj.special.length !== len.special) {
    return false;
  }

  return true;
}
/**
 * 中奖结果
 * @param {Object} numbers 持有号码
 * @param {Object} result 中奖号码
 */


var getQlcLotteryLevel = function getQlcLotteryLevel(numbers, result) {
  if (!parseQlcObject(numbers) || !parseQlcObject(result)) {
    return _constants.CODE_PARAM_ERROR;
  }

  return (0, _tool.getLotteryLevel)(numbers, result, rules);
};

exports.getQlcLotteryLevel = getQlcLotteryLevel;