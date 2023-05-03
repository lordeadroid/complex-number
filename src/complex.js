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

  return {realPart, imaginaryPart, add};
}

exports.complexNumber = complexNumber;
