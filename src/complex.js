const complexNumber = function(real, imaginary) {
  const realPart = function() {
    return real;
  }

  const imaginaryPart = function() {
    return imaginary;
  }

  const add = function(number) {
    const realPart = real + number.realPart();
    const imaginaryPart = imaginary + number.imaginaryPart();

    return complexNumber(realPart, imaginaryPart);
  }

  const multiply = function(number) {
    const realPart = real * number.realPart() - imaginary * number.imaginaryPart();
    const imaginaryPart = real * number.imaginaryPart() + imaginary * number.realPart();

    return complexNumber(realPart, imaginaryPart);
  }

  return {realPart, imaginaryPart, add, multiply};
}

exports.complexNumber = complexNumber;
