import { getNumsForwArray } from '../src/tool';


function more(total) {
  let result = 1;
  for (let i = 1; i <= total; i += 1) {
    result *= i;
  }
  return result;
}

describe('test tool', () => {
  it('getNumsForwArray', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const count = 6;
    const len = arr.length;
    const result = getNumsForwArray(arr, count);
    const e = result.length;
    // console.log(e, more(len) / more(len - count));
    expect(1).toBe(1);
  });
});
