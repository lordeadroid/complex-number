const complex = function(real, imaginary) {
  const complexNumber = {real, imaginary};

  const realPart = function() {
    return complexNumber.real;
  }

  const imaginaryPart = function() {
    return complexNumber.imaginary;
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

exports.add = add;
exports.complex = complex;
