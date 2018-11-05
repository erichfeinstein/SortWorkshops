/* eslint-env jasmine */
describe('Split', function() {
  it('splits an array the right way', function() {
    let evenArr = [1, 2, 3, 4];
    expect(split(evenArr)).toEqual([[1, 2], [3, 4]]);
    let oddArr = [1, 2, 3];
    expect(split(oddArr)).toEqual([[1], [2, 3]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    let arr1 = [1, 4];
    let arr2 = [2, 5];
    expect(merge(arr1, arr2)).toEqual([1, 2, 4, 5]);
    arr1 = [1, 2, 6, 9, 10, 11];
    arr2 = [2, 4];
    expect(merge(arr1, arr2)).toEqual([1, 2, 2, 4, 6, 9, 10, 11]);
  });
});

describe('Merge Sort', function() {
  it('handles an empty array', function() {
    expect(mergeSort([])).toEqual([]);
  });
  it('sorts an array of unsorted numbers', function() {
    expect(mergeSort([1, 5, 2, 6, 3, 7])).toEqual([1, 2, 3, 5, 6, 7]);
  });
  it('sorts using a comparator', function() {
    let arrToSort = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];
    let sorted = mergeSort(arrToSort, function comp(a, b) {
      if (a.age < b.age) return -1;
      if (a.age > b.age) return 1;
      return 0;
    });
    expect(sorted).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }]);
  });
});
