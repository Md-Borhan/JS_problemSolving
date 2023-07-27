// Write a code on how to calculate the number of vowels and consonants in a string?
const str = "Programming Hero";
let vowels = 0;
let consonants = 0;
for (let i = 0; i < str.length; i++) {
  if (/[a-z]/i.test(str[i])) {
    if (/[aeiou]/i.test(str[i])) {
      vowels++;
    } else {
      consonants++;
    }
  }
}
console.log(`Vowels: ${vowels} consonants: ${consonants}`);

// Write a code to calculate if the string is palindrome
/* const checkPalindrome = (str) => {
  str = str.replace(/[^a-z0-9]/gi, "");
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};
console.log(checkPalindrome("level")); */

// Explain what a callback function is and provide a simple example?

const lazyFunc = (passCallBack) => {
  setTimeout(() => {
    console.log("This function take few time after run");
    passCallBack();
  }, 2000);
};

const fastFunc = () => {
  console.log("This is another function.");
};

lazyFunc(fastFunc);
