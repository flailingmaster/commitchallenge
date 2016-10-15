// your notes here!
console.log("hello world!");

var isVowel = function (letter) {
  if (letter.length == 1) {
    ["a", "e", "i", "o", "u"].forEach(function(value) {
      if(letter.toLowerCase() == value) {
        console.log("matched!");
        return true;
      }
    });
  }
  return false;
};

isVowel("a");
//    isVowel("a");
//    //=> true
//
//    isVowel("E");
//    //=> true
//
//    isVowel(1);
//    //=> false
//
//    isVowel("Ea");
//    //=> false
//
//    isVowel("Y");
//    //=> false

//

var isLowerCaseLetter = function (letter) {
  if (letter.length == 1 && typeof letter == "string") {
    return /[a-z]/.test(letter);
  } else {
    return false;
  }
}

// console.log("test 1");
//     var result = isLowerCaseLetter("a");
// console.log("result: "+ result);
// //    //=> true
// //
// console.log("test 2");
// var result = isLowerCaseLetter("A");
// console.log("result: "+ result);
// //    //=> false
// //
// console.log("test 3");
//     var result = isLowerCaseLetter(1);
//     console.log("result: "+ result);
// //    //=> false
// //
// console.log("test 4");
//     var result = isLowerCaseLetter("ae");
//     console.log("result: "+ result);
// //    //=> false
// //
// console.log("test 5");
//     var result = isLowerCaseLetter(true);
// //    //=> false
// //

var isPrime = function (input) {
    console.log("input: "+input);
  if (input <= 1) {
    console.log('false');
    return false;
  } else {
    var least = 2;
    for (i = 2; i <= input; i++) {
      if (input % i == 0) {
        least = i;
        break;
      }
    }
    if (least == input) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      return false;
    }
  }
};

isPrime(101);
//     //=> true
//
isPrime(13);
//     //=> true
isPrime(20);
//
isPrime(1);
//     //=> false
//
isPrime(2);
//     //=> true
//
isPrime("hello");
//     //=> false
//
isPrime(-101);
//     //=> false
//
