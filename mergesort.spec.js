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
});
// beforeEach(function() {
//   spyOn(window, 'swap').and.callThrough();
// });
// it('does not call swap for an already sorted array', function() {
//   let arr = [1, 2, 3, 4];
//   bubbleSort(arr);
//   expect(swap.calls.count()).toEqual(0);
// });
// it('calls swap 1 time for an array with only one element out of place', function() {
//   let arr = [1, 3, 2, 4];
//   bubbleSort(arr);
//   expect(swap.calls.count()).toEqual(1);
