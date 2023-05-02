const complex = function() {
  const complexNumber = {
    real: 2,
    imaginary: 3
  };

  const realPart = function() {
    return complexNumber.real;
  }

  return realPart;
}

const realPart = complex();

exports.realPart = realPart;
