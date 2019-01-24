# lz-lottery-tool
彩票中奖结果查询

### 支持彩票种类
* 双色球
* 超级大乐透
* 七星彩
* 七乐彩

### 使用示例
```
import lottery from 'lz-lottery-tool';
const {
  getSsqLotteryLevel,
} = lottery;

// 查询是否中奖
// 我的彩票号码
const myLottery = '1 2 3 4 5 6 7';
// 中奖号码
const resultLottery = '1 2 3 4 5 6 7';
// 双色球中奖查询
const result = getSsqLotteryLevel(parseSsqString(myLottery), parseSsqString(resultLottery));
```