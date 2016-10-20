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

//isVowel("a");
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
//    console.log("input: "+input);
  if (input <= 1) {
//    console.log('false');
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
//      console.log('true');
      return true;
    } else {
//      console.log('false');
      return false;
    }
  }
};


var sumPrimesUpTo = function (target) {
  var sumprimes = 0;
  if (target <= 1) {
    console.log('false');
    return 0;
  } else if (typeof target != "number") {
    throw "input should be a number";
  } else {
    console.log('final condition');
    for (var i = 2; i <= target; i++) {
      console.log("i:"+i);
     if (isPrime(i)) {
       console.log("found prime: "+i);
       sumprimes += i;
     }
    }
    console.log("total: "+sumprimes);
    return sumprimes;
  }
};
// console.log("sumPrimesUpTo(100)");
// sumPrimesUpTo(100);
// sumPrimesUpTo(20);
// sumPrimesUpTo(50);
//     //=> 1060
//
//     sumPrimesUpTo(0);
//     //=> 0
//
//     sumPrimesUpTo(1000);
//     //=> 76127
//
//     sumPrimesUpTo(2);
//     //=> 2
//
//     sumPrimesUpTo("whatever");
//     //=> input should be a number
//

var removeNonLetters = function (input) {
  var output = "";
  for (var i = 0; i < input.length; i++) {
    testchar = input.charAt(i);
    if (/[a-z|A-Z]/.test(testchar)) {
      console.log(testchar);
      output = output + testchar;
    }
  }
  console.log(output);
  return output;
};
     removeNonLetters("A man, a plan, a canal, Panama");
//     //=> AmanaplanacanalPanama
//
     removeNonLetters("this is a string; it has some punctuation!");
//     //=> thisisastringithassomepunctuation
var reverseString = function (input) {
  if (typeof input != "string") {
    throw "input to countVowels must be a string!";
  }
  var reversed = "";
  for (var i = input.length-1; i >= 0; i--) {
    reversed += input[i];
  }
  return reversed;
};

var isPalindrome = function (input) {
  if (typeof input != "string") {
    return false;
  }
  var clean = removeNonLetters(input);
  var rev = reverseString(clean);
  console.log("rev:"+rev.toLowerCase());
  console.log("clean:"+clean.toLowerCase());
  if (rev.toLowerCase() == clean.toLowerCase()) {
    console.log("palindrome!");
    return true;
  } else {
    console.log("not palindrome!");
    return false;
  }
};

isPalindrome("kayak");
isPalindrome("A man, a plan, a canal, Panama");
isPalindrome("hello world");
