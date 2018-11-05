function split(arr) {
  const middle = Math.floor(arr.length / 2);
  const first = arr.slice(0, middle);
  const second = arr.slice(middle);
  return [first, second];
}

function merge(
  arr1,
  arr2,
  comparator = function(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }
) {
  let p1 = 0,
    p2 = 0;
  let result = [];
  while (p1 < arr1.length && p2 < arr2.length) {
    if (comparator(arr1[p1], arr2[p2]) <= 0) {
      result.push(arr1[p1]);
      p1++;
    } else {
      result.push(arr2[p2]);
      p2++;
    }
  }
  if (p1 < arr1.length) result.push(...arr1.slice(p1));
  if (p2 < arr2.length) result.push(...arr2.slice(p2));
  return result;
}

function mergeSort(arr, comparator) {
  if (arr.length <= 1) return arr;
  let splitArr = split(arr);
  return merge(
    mergeSort(splitArr[0], comparator),
    mergeSort(splitArr[1], comparator),
    comparator
  );
}
