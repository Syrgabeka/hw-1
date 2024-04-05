class Canculator {
  constructor() {
    this.result = null;
  }
  plus(a, b) {
    this.result = a + b;
    return this.getResult();
  }
  minus(a, b) {
    this.result = a - b;
    return this.getResult();
  }
  koboutyy(a, b) {
    this.result = a * b;
    return this.getResult();
  }
  bolyy(a, b) {
    this.result = a / b;
    return this.getResult();
  }
  kvadrat(a, b) {
    this.result = a ** b;
    return this.getResult();
  }
  power(a, b) {
    this.result = Math.pow(a, b);
    return this.getResult();
  }
  getResult() {
    if (this.result !== null) {
      return this.result;
    } else {
      return "Error: No result avaible!";
    }
  }
  clear() {
    this.result = null;
    return "Result cleared.";
  }
}

function showExample(calc, operation, a, b) {
  const result = calc[operation](a, b);
  console.log(`${operation}(${a}, ${b}) = ${result}`);
}

const calc = new Canculator();
showExample(calc, "plus", 109, 3);
showExample(calc, "minus", 20, 6);
showExample(calc, "koboutyy", 13, 14);
showExample(calc, "bolyy", 5628, 5);
showExample(calc, "kvadrat", 2, 5);
showExample(calc, "power", 2, 4);
