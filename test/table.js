import chalk from 'chalk';

function print(str, len = 0, char = '-') {
  let ret = '';
  for (let i = 0; i < len; i += 1) {
    ret += char;
  }
  return (str + ret);
}

function stringAddSpace(str, len, space = ' ') {
  let result = '';
  for (let i = 0; i < len; i += 1) {
    result += space;
  }
  return str + result;
}

export default class LzTable {
  constructor(header) {
    this.header = header;
    this.renderData = [];
    const arr = [];
    header.forEach((it) => {
      const { text, color } = it;
      arr.push({
        text: chalk[color](text),
        len: text.length,
      });
    });
    this.renderData.push(arr);
  }

  setData(data) {
    let lineLen = 0;
    this.header.forEach((it) => {
      lineLen += it.width;
    });

    const { header } = this;

    this.renderData.push([
      {
        text: print('', lineLen),
        len: lineLen,
      },
    ]);
    data.forEach((it) => {
      let arr = [];
      it.forEach((item, idx) => {
        const { formatter } = header[idx];
        let ret;
        if (formatter) {
          ret = formatter(item);
        } else {
          ret = [
            {
              text: item,
              len: item.length,
            },
          ];
        }
        if (arr.length === 0) {
          arr = arr.concat(ret.map(r => [r]));
        } else {
          arr.forEach((that, i) => {
            if (ret[i]) {
              arr[i].push(ret[i]);
            }
          });
        }
      });
      this.renderData = this.renderData.concat(arr);
      this.renderData.push([
        {
          text: print('', lineLen),
          len: lineLen,
        },
      ]);
    });
  }

  render() {
    const result = [];
    let lineLen = 0;
    const widths = this.header.map((it) => {
      lineLen += it.width;
      return it.width;
    });
    result.push(print('', lineLen));
    this.renderData.forEach((it) => {
      const strArr = [];
      it.forEach((item, index) => {
        let str = '';
        const { text, len } = item;
        const colIndex = widths[index];
        str += text;
        str = stringAddSpace(str, colIndex - len);
        strArr.push(str);
      });
      result.push(strArr.join('|'));
    });
    console.log(result.join('\n'));
  }
}

// const header = [
//   {
//     width: 30,
//     text: 'number compare',
//     color: 'red',
//     formatter(value) {
//       const { left, right } = value;

//       const { normal, special } = left;
//       const topArr = [].concat(normal, special);
//       const bottomArr = [].concat(right.normal, right.special);

//       const top = [];
//       const bottom = [];
//       topArr.forEach((it, index) => {
//         const item = bottomArr[index];
//         if (it === item) {
//           top.push(chalk.red(it));
//           bottom.push(chalk.red(item));
//         } else {
//           top.push(it);
//           bottom.push(item);
//         }
//       });
//       return [
//         {
//           text: top.join(' '),
//           len: topArr.join(' ').length,
//         },
//         {
//           text: bottom.join(' '),
//           len: bottomArr.join(' ').length,
//         },
//       ];
//     //   return `${top.join(' ')}\n${bottom.join(' ')}`;
//     },
//   },
//   {
//     width: 30,
//     text: 'result',
//     color: 'red',
//   },
// ];
// const instance = new LzTable(header);
// instance.setData([
//   [
//     {
//       left: {
//         normal: [1, 2, 3],
//         special: [1, 2, 3],
//       },
//       right: {
//         normal: [1, 2, 3],
//         special: [1, 2, 3],
//       },
//     },
//     '1',
//   ],
//   [
//     {
//       left: {
//         normal: [1, 2, 3],
//         special: [1, 2, 3],
//       },
//       right: {
//         normal: [1, 2, 3],
//         special: [1, 2, 3],
//       },
//     },
//     '1',
//   ],
// ]);
// instance.render();
