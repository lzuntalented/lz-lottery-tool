"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDltString = parseDltString;
exports.parseDltObject = parseDltObject;
exports.getDltLotteryLevel = exports.default = void 0;

var _tool = require("../tool");

var _constants = require("../constants");

// 彩票名称
var name = '超级大乐透'; // 彩票标识

var key = 'dlt'; // 彩票号码个数

var len = {
  // 总个数
  total: 7,
  // 普通号
  normal: 5,
  // 特别号
  special: 2
}; // 中彩规则

var rules = [[[5, 2]], [[5, 1]], [[5, 0], [4, 2]], [[4, 1], [3, 2]], [[4, 0], [3, 1], [2, 2]], [[3, 0], [1, 2], [2, 1], [0, 2]]];
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

function parseDltString() {
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


function parseDltObject(obj) {
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


var getDltLotteryLevel = function getDltLotteryLevel(numbers, result) {
  if (!parseDltObject(numbers) || !parseDltObject(result)) {
    return _constants.CODE_PARAM_ERROR;
  }

  return (0, _tool.getLotteryLevel)(numbers, result, rules);
};

exports.getDltLotteryLevel = getDltLotteryLevel;