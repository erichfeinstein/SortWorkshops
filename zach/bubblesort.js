function swap(array, ind1, ind2) {
  let temp = array[ind1];
  array[ind1] = array[ind2];
  array[ind2] = temp;
  return array;
}

function bubbleSort(array) {
  if (array.length === 0) {
    return [];
  }
  let sorted = false;
  let counter = 0;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        sorted = false;
      }
    }
    counter++;
  }
}

let arr = [3, 4, 1, 2, 1, 8, 3, 2];
bubbleSort(arr);
console.log(arr);
