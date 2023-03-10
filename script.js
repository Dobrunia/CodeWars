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
