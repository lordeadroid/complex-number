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

  const format = function() {
    if(imaginary === 0) {
      return `${real}`;
    }

    if(real === 0) {
      return `${imaginary}i`;
    }
    
    const sign = imaginary > 0 ? "+" : "-";

    return `${real} ${sign} ${Math.abs(imaginary)}i`;
  }

  return {realPart, imaginaryPart, add, multiply, format};
}

exports.complexNumber = complexNumber;
