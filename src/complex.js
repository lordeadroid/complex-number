const realPart = function() {
  return this.real;
}

const imaginaryPart = function() {
  return this.imaginary;
}

const add = function(number) {
  const realPart = this.real + number.realPart();
  const imaginaryPart = this.imaginary + number.imaginaryPart();

  return complexNumber(realPart, imaginaryPart);
}

const multiply = function(number) {
  const realPart = this.real * number.realPart() - this.imaginary * number.imaginaryPart();
  const imaginaryPart = this.real * number.imaginaryPart() + this.imaginary * number.realPart();

  return complexNumber(realPart, imaginaryPart);
}

const format = function() {
  if(this.imaginary === 0) {
    return `${real}`;
  }

  if(this.real === 0) {
    return `${imaginary}i`;
  }

  const sign = this.imaginary > 0 ? "+" : "-";
  let formattedNumber = "";

  formattedNumber += this.real;
  formattedNumber += sign;
  formattedNumber += Math.abs(this.imaginary);
  formattedNumber += "i";

  return formattedNumber;
}

const complexNumber = function(real, imaginary) {
  const complex = {real, imaginary};
  const number = {};

  number.realPart = realPart.bind(complex);
  number.imaginaryPart = imaginaryPart.bind(complex);
  number.add = add.bind(complex);
  number.multiply = multiply.bind(complex);
  number.format = format.bind(complex);
  
  return number;
}

exports.complexNumber = complexNumber;
