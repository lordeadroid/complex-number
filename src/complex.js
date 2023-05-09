class Complex {
  #real;
  #imaginary;

  constructor(real, imaginary) {
    this.#real = real;
    this.#imaginary = imaginary;
  }

  add(number) {
    const real = this.#real + number.#real;
    const imaginary = this.#imaginary + number.#imaginary;

    return new Complex(real, imaginary);
  }
  
  getReal() {
    return this.#real;
  }

  getImaginary() {
    return this.#imaginary;
  }

  multiply(number) {
    const real = this.#real * number.#real - this.#imaginary * number.#imaginary;
    const imaginary = this.#real * number.#imaginary + this.#imaginary * number.#real; 

    return new Complex(real, imaginary);
  }

  toString() {
    return `${this.#real} + ${this.#imaginary}i`;
  }
}

exports.Complex = Complex;
