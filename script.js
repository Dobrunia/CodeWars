//String repeat
function repeatStr (n, s) {

  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}


//Classy Extentions
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  
  speak() {
    return this.name + ' meows.';
  }
}

//Unexpected parsing
function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  return { status: msg };
}

//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {

  function selectionSort(array) {
      for (let i = 0; i < array.length; i++) {
          let indexMin = i
          for (let j = i+1; j < array.length; j++) {
              if (array[j] < array[indexMin]) {
                  indexMin = j
              }
          }
          let tmp = array[i]
          array[i] = array[indexMin]
          array[indexMin] = tmp
      }
      return array
  }
  let pupupu = selectionSort(numbers);
    
    return pupupu[0] + pupupu[1];
  }

//Find the next perfect square!
function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);
  
  if (sqrt % 1 !== 0) {
    return -1;
  }

  const nextSqrt = sqrt + 1;
  return nextSqrt * nextSqrt;
}

//Printer Errors
function printerError(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() > 109 || s[i].charCodeAt() < 97) {
      count++;
    }
  }
  return count + "/" + s.length;
}

//Disemvowel Trolls
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

//Jaden Casing Strings
String.prototype.toJadenCase = function () {
  return this.split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};

//Best travel
function chooseBestSum(t, k, ls) {
  const combinations = getCombinations(ls, k);
  let maxSum = -1;
  for (const combination of combinations) {
    const sum = combination.reduce((acc, val) => acc + val, 0);
    if (sum <= t && sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum === -1 ? null : maxSum;
}

function getCombinations(arr, k) {
  if (k === 1) {
    return arr.map((val) => [val]);
  }
  const result = [];
  for (let i = 0; i < arr.length - k + 1; i++) {
    const subCombinations = getCombinations(arr.slice(i + 1), k - 1);
    for (const subCombination of subCombinations) {
      result.push([arr[i], ...subCombination]);
    }
  }
  return result;
}


//Chuck Norris VII - True or False? (Beginner)
function ifChuckSaysSo(){
  return  !1;
}


//Determine offspring sex based on genes XX and XY chromosomes
function chromosomeCheck(sperm) {
  if(sperm === 'XX') {
    return "Congratulations! You're going to have a daughter.";
  } else {
    return "Congratulations! You're going to have a son.";
  }
}

//ES6 string addition
function joinStrings(string1, string2){
  return `${string1} ${string2}`;
}

//Counting sheep...
function countSheeps(arrayOfSheep) {
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count++;
    }
  }
  return count;
}

//Function 1 - hello world
function greet() {
  return "hello world!";
}

//Is n divisible by x and y?
function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0) {
    return true;
  } else {
    return false;
  }
}

//