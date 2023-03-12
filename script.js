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

//