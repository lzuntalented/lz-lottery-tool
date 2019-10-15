import chalk from 'chalk';

import { Ssq } from '../src';
import { getSsqMock } from './mock';

import LzTable from './table';

const {
  getLevel,
  parseString,
} = Ssq;

// 对比中奖结果
function getSsqRows() {
  const mocks = getSsqMock();
  const { left, right } = mocks;
  const result = left.map((it) => {
    const obj = {
      left: parseString(it),
      right: parseString(right),
    };
    const ret = getLevel(obj.left, obj.right);
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
      normal.forEach((it) => {
        const index = right.normal.indexOf(it);
        if (index > -1) {
          top.push(chalk.red(it));
        } else {
          top.push(it);
        }
      });
      right.normal.forEach((it) => {
        const index = normal.indexOf(it);
        if (index > -1) {
          bottom.push(chalk.red(it));
        } else {
          bottom.push(it);
        }
      });

      special.forEach((it) => {
        const index = right.special.indexOf(it);
        if (index > -1) {
          top.push(chalk.red(it));
        } else {
          top.push(it);
        }
      });
      right.special.forEach((it) => {
        const index = special.indexOf(it);
        if (index > -1) {
          bottom.push(chalk.red(it));
        } else {
          bottom.push(it);
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

describe('test index', () => {
  it('render', () => {
    expect(1).toBe(1);
  });
});
