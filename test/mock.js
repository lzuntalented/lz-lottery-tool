/**
 * 随机字符串生成器
 * @param {*} len
 */
function randomNumber(len = 6, max = 32, repeat = true, sort = false) {
  // 号码池
  const pool = [];
  for (let i = 1; i <= max; i += 1) {
    pool.push(i);
  }

  const result = [];
  for (let i = 0; i < len; i += 1) {
    const idx = Math.floor(Math.random() * pool.length);
    result.push(pool[idx]);
    // 不允许重复，号码池-1
    if (!repeat) pool.splice(idx, 1);
  }
  // 是否排序
  if (sort) result.sort((a, b) => a - b);
  return result.join(' ');
}

// 随机10组中奖号码
export function getSsqMock() {
  let len = 10;
  const left = [];
  for (let i = 0; i < len; i += 1) {
    const normal = randomNumber(6, 33, false, true);
    const special = randomNumber(1, 16);
    left.push(`${normal} ${special}`);
  }

  len = 1;
  const right = [];
  for (let i = 0; i < len; i += 1) {
    const normal = randomNumber(6, 33, false, true);
    const special = randomNumber(1, 16);
    right.push(`${normal} ${special}`);
  }

  return {
    left,
    right: right[0],
  };
}

// 随机10组中奖号码
export function getDltMock() {
  let len = 10;
  const left = [];
  for (let i = 0; i < len; i += 1) {
    const normal = randomNumber(6, 33);
    const special = randomNumber(1, 16);
    left.push(`${normal},${special}`);
  }

  len = 1;
  const right = [];
  for (let i = 0; i < len; i += 1) {
    const normal = randomNumber(6, 33);
    const special = randomNumber(1, 16);
    right.push(`${normal},${special}`);
  }

  return {
    left,
    right,
  };
}
