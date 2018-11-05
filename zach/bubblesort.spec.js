/* eslint-env jasmine */
describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
  });
  it('does not call swap for an already sorted array', function() {
    let arr = [1, 2, 3, 4];
    bubbleSort(arr);
    expect(swap.calls.count()).toEqual(0);
  });
  it('calls swap 1 time for an array with only one element out of place', function() {
    let arr = [1, 3, 2, 4];
    bubbleSort(arr);
    expect(swap.calls.count()).toEqual(1);
