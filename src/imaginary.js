class Imaginary {
  #imaginary;

  constructor(number) {
    this.#imaginary = number;
  }

  add(otherNumber) {
    const number = this.#imaginary + otherNumber.#imaginary;
    return new Imaginary(number);
  }

  multiply(otherNumber) {
    const number = this.#imaginary * otherNumber.#imaginary;
    return new Imaginary(number);
  }

  multiplyImaginary(otherNumber) {
    
  }

  toString() {
    return `${this.#imaginary}i`;
  }
}

exports.Imaginary = Imaginary;