function quicksort(array) {
  if (array.length <= 1) return array;
  let pivot = array[array.length - 1];
  let prt = partition(pivot, array);
  return [...quicksort(prt[0]), pivot, ...quicksort(prt[1])];
}

function partition(pivot, array) {
  let left = [];
  let right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);
  }
  return [left, right];
}
