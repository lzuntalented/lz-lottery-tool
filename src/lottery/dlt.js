import { getLotteryLevel, isObject } from '../tool';
import { CODE_PARAM_ERROR } from '../constants';
// 彩票名称
const name = '超级大乐透';
// 彩票标识
const key = 'dlt';
// 彩票号码个数
const len = {
  // 总个数
  total: 7,
  // 普通号
  normal: 5,
  // 特别号
  special: 2,
};
// 中彩规则
const rules = [
  [
    [5, 2],
  ],
  [
    [5, 1],
  ],
  [
    [5, 0], [4, 2],
  ],
  [
    [4, 1], [3, 2],
  ],
  [
    [4, 0], [3, 1], [2, 2],
  ],
  [
    [3, 0], [1, 2], [2, 1], [0, 2],
  ],
];

export default {
  name,
  key,
};
/**
 * 解析双色球
 * @param {String} nums
 * @return false 不符合的规则
 */
export function parseDltString(nums = '', split = ' ') {
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
export function parseDltObject(obj) {
  if (!isObject(obj)) {
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
export const getDltLotteryLevel = (numbers, result) => {
  if (!parseDltObject(numbers) || !parseDltObject(result)) {
    return CODE_PARAM_ERROR;
  }
  return getLotteryLevel(numbers, result, rules);
};