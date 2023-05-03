const complexNumber = function(real, imaginary) {
  const realPart = function() {
    return real;
  }

  const imaginaryPart = function() {
    return imaginary;
  }

  return {realPart, imaginaryPart};
}

const add = function(firstNumber, secondNumber) {
  const a1 = firstNumber.realPart();
  const b1 = firstNumber.imaginaryPart();
  const a2 = secondNumber.realPart();
  const b2 = secondNumber.imaginaryPart();

  return [a1 + a2, b1 + b2];
}

const multiply = function(firstNumber, secondNumber) {
  const a1 = firstNumber.realPart();
  const b1 = firstNumber.imaginaryPart();
  const a2 = secondNumber.realPart();
  const b2 = secondNumber.imaginaryPart();

  return [a1 * a2 - b1 * b2, a1 * b2 + a2 * b1];
}

const display = function(real, imaginary) {
  if(real === 0) {
    return `${imaginary}i`;
  }
  
  let sign = "+";
  if(imaginary < 0) {
    sign = "-";
  }
  return `${real} ${sign} ${Math.abs(imaginary)}i`;
}

exports.add = add;
exports.complexNumber = complexNumber;
exports.multiply = multiply;
exports.display = display;
