const lottery = require('../lib/index.js');

const { Ssq } = lottery;

const {
  getLevel,
  parseString,
} = Ssq;
// console.log(lottery);
// 查询是否中奖
// 我的彩票号码
const myLottery = '1 2 3 4 5 6 7';
// 中奖号码
const resultLottery = '1 2 3 4 5 6 7';
// getLevel
const result = getLevel(parseString(myLottery), parseString(resultLottery));
console.log(result);
