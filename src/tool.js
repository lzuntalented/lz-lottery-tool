import { CODE_NOT_HIT } from './constants';

const isType = type => obj => Object.prototype.toString.call(obj) === `[object ${type}]`;
// 是否对象类型
export const isObject = isType('Object');

/**
 * 判断两个数组相同的个数
 * @param {Array} left
 * @param {Array} right
 * @param {boolean} serises 是否连续相等
 */
export function arrEqual(left, right, serises = false) {
  let result = 0;
  let max = -1;
  let count = 0;
  for (let len = left.length, i = 0; i < len; i += 1) {
    if (!serises) {
      // if (left[i] === right[i]) {
      //   result += 1;
      // }
      if (right.indexOf(left[i]) > -1) {
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
export function getLotteryLevel(numbers, result, rules, serises = false) {
  for (let len = rules.length, i = 0; i < len; i += 1) {
    const item = rules[i];
    for (let l = item.length, j = 0; j < l; j += 1) {
      const leftCount = item[j][0];
      const rightCount = item[j][1];
      if (arrEqual(numbers.normal, result.normal, serises) === leftCount
          && (rightCount === 0 || arrEqual(numbers.special, result.special, serises) === rightCount)
      ) {
        return i + 1;
      }
    }
  }
  return CODE_NOT_HIT;
}

export function parseLotteryString() {

}

/**
 * 检测是否为彩票对象
 * @param {*} obj
 * @param {*} len
 */
export function checkLotteryObject(obj, len) {
  if (!isObject(obj)) {
    return false;
  }
  if (obj.normal.length !== len.normal || obj.special.length !== len.special) {
    return false;
  }
  return true;
}

/**
 * 全排列
 * @param {Array} nums
 * @param {Number} count
 */
function sortAll(nums, count) {
  if (count === 0) return [];
  if (count === 1) return nums.map(it => [it]);
  const result = [];
  for (let i = 0; i < nums.length; i += 1) {
    const arr = [].concat(nums);
    const item = arr.splice(i, 1);
    const ret = sortAll(arr, count - 1);
    ret.forEach((it) => {
      const obj = item.concat(it);
      result.push(obj);
    });
  }
  return result;
}

/**
 * 从数组中取出指定个数的元素排列
 * @param {Array} arr 所有元素数组
 * @param {Number} count 指定个数
 */
export function getNumsForwArray(arr, count) {
  const list = sortAll(arr, count);
  const map = {};
  const result = [];
  list.forEach((it) => {
    const key = it.sort((a, b) => a - b).join();
    if (!map[key]) {
      map[key] = true;
      result.push(it);
    }
  });
  return result;
}
