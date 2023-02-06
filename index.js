// First Problem

function x(data) {
  let a = data * 3;
  let b = a + 10;
  let c = b / 2;
  let d = c - 5;

  return d;
}

console.log(x(33));

// Second Problem

function z(data) {
  let length = data.length;
  if (length % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(z("Batch7"));

// Third Problem

function y(data) {
  if (data < 7) {
    return data - 7;
  } else {
    return data * 2;
  }
}

console.log(y(15));
// Fourth Problem
function findingBadData(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log(findingBadData([-4, -9, -5, -33, -55]));

// Fifth Problem

function zy(a, b, c) {
  let first = a * 21;
  let Second = b * 32;
  let third = c * 43;
  let sum = first + Second + third;
  if (sum > 2000) {
    return sum - 2000;
  } else {
    return sum;
  }
}

console.log(zy(100, 5, 1));
