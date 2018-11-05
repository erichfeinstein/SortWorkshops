class BubbleSort {
  constructor() {}
  sort(array) {
    for (let i = array.length; i >= 0; i--) {
      let swapped = false;
      for (let j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
          this.swap(array, j, j + 1);
          swapped = true;
        }
      }
      if (swapped === false) {
        return this.earlyExit(array);
      }
    }
    return array;
  }

  earlyExit(array) {
    return array;
  }

  swap(array, indexOne, indexTwo) {
    let holder = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = holder;
  }
}
