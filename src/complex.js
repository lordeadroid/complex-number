const complex = function(a, b) {
  const complexNumber = {
    real: a,
    imaginary: b
  };

  const realPart = function() {
    return complexNumber.real;
  }

  const imaginaryPart = function() {
    return complexNumber.imaginary;
  }

  return {realPart, imaginaryPart};
}

const {realPart, imaginaryPart} = complex(2, 3);

exports.realPart = realPart;
exports.imaginaryPart = imaginaryPart;
