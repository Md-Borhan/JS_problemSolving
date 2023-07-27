// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

/* let reverseStr = "";
const getReverse = (str) => {
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
};
getReverse("hello world");
console.log(reverseStr); */

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

/* let sum = 0;
const getSum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
};
getSum([2, -5, 10, -3, 7]);
console.log(sum); */

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

/* const getMostFre = (numbers) => {
  let maxCount = 0;
  let mostFreqElements = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    let count = 0;
    for (let a = 0; a < numbers.length; a++) {
      if (numbers[i] == numbers[a]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      mostFreqElements = numbers[i];
    }
  }
  return mostFreqElements;
};
const numbers = [3, 5, 2, 5, 3, 3, 1, 4, 5];
console.log(getMostFre(numbers)); */

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

/* const calculator = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "%":
      return num1 % num2;
    case "/":
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      const result = num1 / num2;
      return +result.toFixed(2);
  }
};
const num1 = 5;
const num2 = 3;
const operator = "%";
const result = calculator(num1, num2, operator);
console.log(result); */

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

/* const randomPassword = (str) => {
  let password = "";
  for (let i = 0; i < 15; i++) {
    const randomPassword = Math.floor(Math.random() * str.length);
    password += str[randomPassword];
  }
  return password;
};
const passwordCharacter = "ABCDEFGHIJKLMNOPabcdefghijklmnop01823456789@#$%^&*";
const result = randomPassword(passwordCharacter);
console.log(result); */

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

/* const romanToInteger = (romanNumeral) => {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    const currentNumeral = romanNumeral[i];
    const nextNumeral = romanNumeral[i + 1];

    const currentValue = romanNumerals[currentNumeral];
    const nextValue = romanNumerals[nextNumeral];

    if (currentValue < nextValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
  }
  return result;
};
const romanValue = "XXI";
console.log(romanToInteger(romanValue)); */

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const getSecondSmallestNum = (numberArr) => {
  const smallestNum = Math.min(...numberArr);
  let arr2 = [];
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > smallestNum) {
      arr2.push(numberArr[i]);
    }
  }
  const secondSmallestNum = Math.min(...arr2);
  return secondSmallestNum;
};
const numbers = [7, 3, 11, 2, 9, 10];
const result = getSecondSmallestNum(numbers);
console.log(result);
