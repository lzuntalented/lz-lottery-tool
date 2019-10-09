import { getLotteryLevel, checkLotteryObject } from '../tool';
import { CODE_PARAM_ERROR } from '../constants';
// 彩票名称
const name = '双色球';
// 彩票标识
const key = 'ssq';
// 彩票号码个数
const len = {
  // 总个数
  total: 7,
  // 普通号
  normal: 6,
  // 特别号
  special: 1,
};
// 中彩规则
const rules = [
  [
    [6, 1],
  ],
  [
    [6, 0],
  ],
  [
    [5, 1],
  ],
  [
    [5, 0], [4, 1],
  ],
  [
    [4, 0], [3, 1],
  ],
  [
    [2, 1], [1, 1], [0, 1],
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
  const before = list.splice(0, len.normal);
  const normal = [].concat(before).sort((a, b) => a - b);
  const numbers = {
    normal,
    special: list.sort((a, b) => a - b),
  };
    // 双色球前6位升序排序
  if (numbers.normal.join() !== before.join()) return false;
  return numbers;
}

/**
 * 解析对象是否符合双色球规范
 * @param {*} obj
 */
function parseObject(obj) {
  return checkLotteryObject(obj, len);
}
// 双色球中奖结果
/**
 *
 * @param {Object} numbers 持有号码
 * @param {Object} result 中奖号码
 */
const getLevel = (numbers, result) => {
  if (!parseObject(numbers) || !parseObject(result)) {
    return CODE_PARAM_ERROR;
  }
  return getLotteryLevel(numbers, result, rules);
};

export default {
  name,
  key,
  parseString,
  getLevel,
};
