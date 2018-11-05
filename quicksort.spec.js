describe('Quick Sort', function() {
  it('handles an empty array', function() {
    expect(quicksort([])).toEqual([]);
  });
  it('sorts an array of unsorted numbers', function() {
    expect(quicksort([1, 5, 2, 6, 3, 7])).toEqual([1, 2, 3, 5, 6, 7]);
  });
});
