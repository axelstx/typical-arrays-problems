exports.min = function min (array) {
  if (!array || !array.length) {
    return 0;
  }

  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }

  return min;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
