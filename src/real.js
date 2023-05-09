class Real {
  #real;

  constructor(number) {
    this.#real = number;
  }

  getReal() {
    return this.#real;
  }

  add(otherNumber) {
    const number = this.#real + otherNumber.#real;
    return new Real(number);
  }

  multiply(otherNumber) {
    const number = this.#real * otherNumber.#real;
    return new Real(number);
  }

  isEqual(otherNumber) {
    return this.#real === otherNumber.#real;
  }

  toString() {
    return `${this.#real}`;
  }
}

exports.Real = Real;
