<h1 align="center">Welcome to lz-lottery-tool 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/lz-lottery-tool" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/lz-lottery-tool.svg">
  </a>
  <a href="https://github.com/lzuntalented/lz-lottery-tool" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

> 彩票中奖结果查询

### 支持彩票种类
- [x] 双色球
- [x] 超级大乐透
- [x] 七星彩
- [x] 七乐彩

### 🏠 [Homepage](http://www.lzuntalented.cn/lz-cp/#/)

## Install

```sh
npm install
```

## Run tests

```sh
npm run test
```

## Usage

``` js
import { Ssq } from 'lz-lottery-tool';
const {
  getLevel, parseString
} = Ssq;

// 查询是否中奖
// 我的彩票号码
const myLottery = '1 2 3 4 5 6 7';
// 中奖号码
const resultLottery = '1 2 3 4 5 6 7';
// 双色球中奖查询
const result = getLevel(parseString(myLottery), parseString(resultLottery));
console.log(result); // 1 => 1等奖
```

## API

``` js
import {
  Ssq, Dlt, Qlc, Qxc,
  // 常量 参数错误
  CODE_PARAM_ERROR,
  // 常量 未中奖
  CODE_NOT_HIT
} from 'lz-lottery-tool';
// 双色球
const {
  // 获取中奖等级
  getLevel,
  // 解析彩票号码
  parseString,
  // 彩种名称
  name: '双色球',
  // 彩种唯一标识
  key: 'ssq',
} = Ssq;

// 大乐透
const {
  getLevel, parseString
} = Dlt;

// 七乐彩
const {
  getLevel, parseString
} = Ssq;

// 七星彩
const {
  getLevel, parseString
} = Ssq;

```

***

Give a ⭐️ if this project helped you!
