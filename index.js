// First Problem

function mindGame(number) {
  if (isNaN(number)) {
    return "Please Enter a valid number";
  }
  let numberOne = number * 3;
  let numberTwo = numberOne + 10;
  let numberThree = numberTwo / 2;
  let total = numberThree - 5;
  return total;
}

const result = mindGame("33");

console.log(result);

/* The function first multiplies the input Number by 3, Then, it adds 10, it divides numberTwo by 2, Finally, it subtracts 5,the code logs the value of result to the console using console.log.*/

// Second Problem

function evenOdd(text) {
  if (!isNaN(text)) {
    return "Please Enter a valid number";
  }
  let length = text.length;
  if (length % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
const characterNumber = evenOdd("chatgpt");

console.log(characterNumber);

/* Function uses an if/else statement to check if the length is even or odd. If the length is evenly divisible by 2, the function returns the string "even". If not, it returns the string "odd".*/

// Third Problem

function isLGSeven(number) {
  if (isNaN(number)) {
    return "Please Enter a valid number";
  }
  if (number < 7) {
    const sumNumberOne = number - 7;
    return sumNumberOne;
  } else {
    const sumNumberTwo = number * 2;
    return sumNumberTwo;
  }
}
const sum = isLGSeven("15");

console.log(sum);

/* If number is less than 7, the function calculates sumNumberOne as number - 7 and returns its value.If number is greater than or equal to 7, the function calculates sumNumberTwo as number * 2 and returns its value.*/

// Fourth Problem

function findingBadData(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      return "Please Enter a valid number";
    } else if (array[i] < 0) {
      result++;
    }
  }

  return result;
}

console.log(findingBadData([1, -2, -5, -52]));

/*
The function starts by declaring a variable result and initializing it to 0. This variable will be used to store the count of negative numbers in the array.The function then uses a for loop to iterate over the elements in the array. Finally, the function returns the value of result, which is the number of negative numbers (Bad Data) found in the array.*/

// Fifth Problem

function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
  if (isNaN(firstFriendGems, secondFriendGems, thirdFriendGems)) {
    return "Please Enter all  valid number";
  }
  let sumFirstFriendGemsPower = firstFriendGems * 21;
  let sumSecondFriendGemsPower = secondFriendGems * 32;
  let sumThirdFriendGemsPower = thirdFriendGems * 43;
  let sum =
    sumFirstFriendGemsPower +
    sumSecondFriendGemsPower +
    sumThirdFriendGemsPower;
  if (sum > 1000 * 2) {
    return sum - 2000;
  } else {
    return sum;
  }
}

firstFriendGems = 100;
secondFriendGems = 5;
thirdFriendGems = 1;

const diamond = gemsToDiamond(
  firstFriendGems,
  secondFriendGems,
  thirdFriendGems
);

console.log(diamond);

/*  
the function calculates the sum of all three friends' gems power and stores it in the sum variable. If sum is greater than 2000, the function returns sum - 2000. Otherwise, it returns sum.
*/
