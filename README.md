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
  getSsqLotteryLevel,
} = Ssq;

// 查询是否中奖
// 我的彩票号码
const myLottery = '1 2 3 4 5 6 7';
// 中奖号码
const resultLottery = '1 2 3 4 5 6 7';
// 双色球中奖查询
const result = getSsqLotteryLevel(parseSsqString(myLottery), parseSsqString(resultLottery));
```

***

Give a ⭐️ if this project helped you!
