import { getLotteryLevel, checkLotteryObject } from '../tool';
import { CODE_PARAM_ERROR } from '../constants';
// 彩票名称
const name = '七星彩';
// 彩票标识
const key = 'qxc';
// 彩票号码个数
const len = {
  // 总个数
  total: 7,
  // 普通号
  normal: 7,
  // 特别号
  special: 0,
};
// 中彩规则
const rules = [
  [
    [7, 0],
  ],
  [
    [6, 0],
  ],
  [
    [5, 0],
  ],
  [
    [4, 0],
  ],
  [
    [3, 0],
  ],
  [
    [2, 0],
  ],
];

/**
 * 解析双色球
 * @param {String} nums
 * @return false 不符合的规则
 */
function parseString(nums = '', split = ' ') {
  const list = nums.replace(/\s+/g, split).split(split).map(it => +it);
  if (list.length !== len.total) {
    return false;
  }
  const normal = list.splice(0, len.normal);
  const numbers = {
    normal,
    special: list,
  };

  return numbers;
}

/**
 * 解析对象是否符合双色球规范
 * @param {*} obj
 */
function parseObject(obj) {
  return checkLotteryObject(obj, len);
}

/**
 * 中奖结果
 * @param {Object} numbers 持有号码
 * @param {Object} result 中奖号码
 */
const getLevel = (numbers, result) => {
  if (!parseObject(numbers) || !parseObject(result)) {
    return CODE_PARAM_ERROR;
  }
  return getLotteryLevel(numbers, result, rules, true);
};

export default {
  name,
  key,
  parseString,
  getLevel,
};
