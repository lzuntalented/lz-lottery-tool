(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../tool", "../constants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../tool"), require("../constants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.tool, global.constants);
    global.ssq = mod.exports;
  }
})(this, function (_exports, _tool, _constants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // 彩票名称
  var name = '双色球'; // 彩票标识

  var key = 'ssq'; // 彩票号码个数

  var len = {
    // 总个数
    total: 7,
    // 普通号
    normal: 6,
    // 特别号
    special: 1
  }; // 中彩规则

  var rules = [[[6, 1]], [[6, 0]], [[5, 1]], [[5, 0], [4, 1]], [[4, 0], [3, 1]], [[2, 1], [1, 1], [0, 1]]];
  /**
   * 解析双色球
   * @param {String} nums
   * @return false 不符合的规则
   */

  function parseString() {
    var nums = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var split = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    var list = nums.replace(/\s+/g, split).split(split).map(function (it) {
      return +it;
    });

    if (list.length !== len.total) {
      return false;
    }

    var before = list.splice(0, len.normal);
    var normal = [].concat(before).sort(function (a, b) {
      return a - b;
    });
    var numbers = {
      normal: normal,
      special: list.sort(function (a, b) {
        return a - b;
      })
    }; // 双色球前6位升序排序

    if (numbers.normal.join() !== before.join()) return false;
    return numbers;
  }
  /**
   * 解析对象是否符合双色球规范
   * @param {*} obj
   */


  function parseObject(obj) {
    return (0, _tool.checkLotteryObject)(obj, len);
  } // 双色球中奖结果

  /**
   *
   * @param {Object} numbers 持有号码
   * @param {Object} result 中奖号码
   */


  var getLevel = function getLevel(numbers, result) {
    if (!parseObject(numbers) || !parseObject(result)) {
      return _constants.CODE_PARAM_ERROR;
    }

    return (0, _tool.getLotteryLevel)(numbers, result, rules);
  };

  var _default = {
    name: name,
    key: key,
    parseString: parseString,
    getLevel: getLevel
  };
  _exports.default = _default;
});