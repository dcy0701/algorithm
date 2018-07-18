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

// 1.在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

// type matrixArray = Array<Array<number>>;
type matrixArray = number[][];

function Find(arr: matrixArray, num: number): boolean {
  const flattenStr = arr.toString();
  return flattenStr.includes(String(num));
}
export = Find;
