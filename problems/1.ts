// Consider the following matrix:
// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]

// Given target = 5, return true.
// Given target = 20, return false.

// 解题思路，拍平 includes

// type matrixArray = Array<Array<number>>;
type matrixArray = number[][];

function Find(arr: matrixArray, num: number): boolean {
  const flattenStr = arr.toString();
  return flattenStr.includes(String(num));
}
export = Find;
