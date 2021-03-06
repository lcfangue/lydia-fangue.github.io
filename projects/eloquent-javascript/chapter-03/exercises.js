////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(x, y) {
  if (x > y) {
    return y;
  } else if (y > x) {
    return x;
  } else if (x === y) {
    return 0;
  }

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(number) {
  if (number < 0) {
    // make number positive
    number = Math.abs(number);
  }
  if (number === 0) {
    return true;
  } else if (number === 1) {
    return false;
  } else {
  return isEven(number - 2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//Next, write a function called countChar that behaves like countBs, except it 
//takes a second argument that indicates the character that is to be counted 
//(rather than counting only uppercase âBâ characters).


function countChars(string, letter) {
  var result = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      result += 1;
    }
  }
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//Write a function countBs that takes a string as its only argument and returns
//a number that indicates how many uppercase âBâ characters there are in the string.

function countBs(string) {
  var result = 0;
for (var i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      result += 1;
    }
} return result;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
