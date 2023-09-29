/**
 * ? Write a JavaScript function to check whether an `input` is an array or not.
 */

const ans = (input) => {
  return toString.call(input) == "[object Array]";
};

// console.log("Input is Array ? ", ans([1, 2, 3]));

/*
 Write a JavaScript program that accepts a number as input 
 and inserts dashes (-) between each even number. 
 For example if you accept 025468 the output should be 0-254-6-8.
*/

let num = 24546768; //window.prompt();
let str = num.toString();
function solve(str) {
  let result = [str[0]];

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
      result.push("-", str[i]);
    } else {
      result.push(str[i]);
    }
  }
  console.log(result.join(""));
}
// solve(str);

/**
 * Function to sort a array
 */

function sortArray(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

// const res = sortArray([0, -1, 2, 3, 2, 4, 5, -1, -2, -6]);
// console.log(res);

/**
 * Write a JavaScript program that accepts a string as input
 * and swaps the case of each character.
 *
 * For example if you input 'The Quick Brown Fox' the
 * output should be 'tHE qUICK bROWN fOX'.
 */

function toggleCase(str) {
  let result = [];
  const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LowerCase = "abcdefghikjklmnopqrstuvwxyz";
  for (let ch of str) {
    if (ch === " ") result.push(ch);
    else if (UpperCase.indexOf(ch) !== -1) {
      result.push(ch.toLowerCase());
    } else if (LowerCase.indexOf(ch) !== -1) {
      result.push(ch.toUpperCase());
    }
  }
  return result.join("");
}

// console.log(toggleCase("hi i am Javascript. SAY hi to uSER"));

/**
 * 
Write a JavaScript program that prints the elements of 
the following array.

Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
------
------
 */

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`row ${i}`);
    for (let j = 0; j < arr[i].length; j++) {
      console.log(` ${arr[i][j]}`);
    }
  }
}

// printArray([
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7],
// ]);

/**
 * Write a JavaScript program to find the sum of squares of a numerical vector
 */

function sumOfSquares(arr) {
  let sum = 0;
  let i = arr.length;

  while (i--) {
    sum += Math.pow(arr[i], 2);
  }
  return sum;
}
// console.log(sumOfSquares([0, 1, 2, 3, 4]));

/**
 * Compute the sum and product of an array of integers
 */

function sumAndProduct(arr) {
  let sum = 0,
    product = 1;
  for (let i in arr) {
    sum += arr[i];
    product *= arr[i];
  }

  return { sum, product };
}

// console.log(sumAndProduct([1, 2, 3, 4, 5, 6]));

/**
 * Write a JavaScript program to add items to a blank array and display them.
  Sample Screen :
 */

function displayUserInput() {
  let input = document.getElementById("input");
  let add = document.getElementById("add");
  let display = document.getElementById("display");
  let result = document.getElementById("result");

  let arr = [];
  add.addEventListener("click", () => {
    arr.push(input.value);
    input.value = "";
  });

  display.addEventListener("click", () => {
    result.innerHTML = "";
    for (let i in arr) {
      result.innerHTML += `Element ${i} = ${arr[i]} <br/>`;
    }
  });
}

// displayUserInput();

/*
 Write a JavaScript program to remove duplicate items from an array
 (ignore case sensitivity).
*/

function removeDuplicates(arr) {
  let set = new Set();

  for (let ele of arr) {
    set.add(ele.toLowerCase());
  }
  return [...set];
}

// console.log(removeDuplicates([1, 2, 3, 1, 1, 2, 3, 1, 4, 1]));
// console.log(removeDuplicates(["Gopal", "gopal", "gopal", "javascript"]));

/**
 *
We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
- - - - - - - - - - - - -
Note : Use ordinal numbers to tell their position.

*/

function displayColor(arr, order) {}

const colors = ["Blue", "Green", "Yellow", "Red", "Orange", "Indigo"];
const order = ["th", "st", "nd", "rd"];
displayColor(colors, order);

/*
Write a JavaScript function to filter false, null, 0 and blank values from an array.
*/

function filterArray(arr) {
  return arr.filter((ele) => {
    if (ele) return true;
    else return false;
  });
}

// console.log(filterArray([58, "", undefined, "abcd", true, null, false]));

// Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.

function generateArray(start, length) {
  let arr = new Array(4);

  for (let i = 0; i < length; i++) {
    arr[i] = start++;
  }
  return arr;
}

// console.log(generateArray(-5, 10));

/**
 *
 * Write a JavaScript function to generate an array between two integers of 1 step length.
 */

function generateArrayInRange(starting, ending) {
  let arr = [];
  let count = starting;
  for (let i = 0; i <= ending - starting; i++) {
    arr[i] = count++;
  }
  return arr;
}

console.log(generateArrayInRange(-5, 10));
