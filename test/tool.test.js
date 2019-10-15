import { getNumsForwArray } from '../src/tool';

function getMultpleCount(head, foot) {
  const A = head;
  const B = foot;
  let C = 1;
  for (let i = B - A + 1; i <= B; i += 1) {
    C *= i;
  }
  for (let i = 2; i <= A; i += 1) {
    C /= i;
  }
  return C;
}

describe('test tool', () => {
  it('getNumsForwArray', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const count = 6;
    const len = arr.length;
    const result = getNumsForwArray(arr, count);
    expect(result.length).toBe(getMultpleCount(count, len));
  });
});
