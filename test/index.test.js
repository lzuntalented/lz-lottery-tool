import chalk from 'chalk';

import lottery from '../src';
import { getSsqMock } from './mock';

import LzTable from './table';

const {
  getSsqLotteryLevel,
  parseSsqString,
} = lottery;

// 对比中奖结果
function getSsqRows() {
  const mocks = getSsqMock();
  const { left, right } = mocks;
  const result = left.map((it) => {
    const obj = {
      left: parseSsqString(it),
      right: parseSsqString(right),
    };
    const ret = getSsqLotteryLevel(obj.left, obj.right);
    return [obj, ret];
  });
  return result;
}
const rows = getSsqRows();

const header = [
  {
    width: 30,
    text: 'number compare',
    color: 'red',
    formatter(value) {
      const { left, right } = value;

      const { normal, special } = left;
      const topArr = [].concat(normal, special);
      const bottomArr = [].concat(right.normal, right.special);

      const top = [];
      const bottom = [];
      topArr.forEach((it, index) => {
        const item = bottomArr[index];
        if (it === item) {
          top.push(chalk.red(it));
          bottom.push(chalk.red(item));
        } else {
          top.push(it);
          bottom.push(item);
        }
      });
      return [
        {
          text: top.join(' '),
          len: topArr.join(' ').length,
        },
        {
          text: bottom.join(' '),
          len: bottomArr.join(' ').length,
        },
      ];
    },
  },
  {
    width: 30,
    text: 'result',
    color: 'red',
  },
];
const instance = new LzTable(header);
instance.setData(rows);
instance.render();
