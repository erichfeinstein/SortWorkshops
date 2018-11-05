let bubble;

beforeEach(function() {
  bubble = new BubbleSort();
  spyOn(bubble, 'sort').and.callThrough();
  spyOn(bubble, 'earlyExit').and.callThrough();
});

describe('Bubble Sort', function() {
  it('calls sort once', function() {
    bubble.sort([5, 7, 1]);
    expect(bubble.sort.calls.count()).toEqual(1);
  });
  it('handles an empty array', function() {
    expect(bubble.sort([])).toEqual([]);
  });
  it('sorts an unsorted array of multiple lengths', function() {
    expect(bubble.sort([6, 4, 9, 21, 1])).toEqual([1, 4, 6, 9, 21]);
    expect(bubble.sort([5, 1])).toEqual([1, 5]);
  });
  it('exits early once an array is sorted', function() {
    bubble.sort([1, 2, 3, 4, 5]);
    expect(bubble.earlyExit.calls.count()).toEqual(1);
  });
});
