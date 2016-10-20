// Write a function called `isVowel` that returns `true` if the input is a
// single character and either an upper or lower-case a, e, i, o, or
// u. It should return false otherwise.
//
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
var isVowel = function (letter) {
  if (letter.length == 1) {
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < vowels.length; i++) {
      var vowel = vowels[i];
        console.log("value:"+vowel+" letter:"+letter);
      if(letter.toLowerCase() == vowel) {
        console.log("matched!");
        return true;
      }
    }
  }
  return false;
};


// Write a function called `isLowerCaseLetter` that returns `true` if
// the input is a single letter and lower-case. It should return false otherwise.
//
//    isLowerCaseLetter("a");
//    //=> true
//
//    isLowerCaseLetter("A");
//    //=> false
//
//    isLowerCaseLetter(1);
//    //=> false
//
//    isLowerCaseLetter("ae");
//    //=> false
//
//    isLowerCaseLetter(true);
//    //=> false
//
var isLowerCaseLetter = function (letter) {
  if (letter.length == 1 && typeof letter == "string") {
    return /[a-z]/.test(letter)
  } else {
    return false;
  }
}


// Write a function called `sumUpTo` so that it accepts a positive number `n`
// and sums the first `n` positive integers. For example, if you call `sumUpTo(5)`
// it should sum the numbers 1 through 5 inclusive. It should throw an error if the
// input number is negative.
//     sumUpTo(100);
//     //=> 5050
//
//     sumUpTo(10);
//     //=> 55
//
//     sumUpTo(0);
//     //=> 0
//
//     sumUpTo(-10);
//     //=> input must be a zero or a positive number!
//
var sumUpTo = function (target) {
  if (target < 0) {
    throw "input must be a zero or a positive number!";
  }
  var result = 0;
  for (var i = 0; i <= target; i++) {
    result = result + i;
  }
  return result;
};


// Write a function called `sumAToB` so that it accepts two parameters
// `a` and `b` and sums the numbers between `a` and `b` inclusive. Note
// that `a` may be larger than `b`, in which case you'll need to work
// backawards.
//
//     sumAToB(10, 20);
//     //=> 165
//
//     sumAToB(0, -15);
//     //=> 120
//
//     sumAToB(-10, 500);
//     //=> 125195
//
//     sumAToB(10, 10);
//     //=> 10
//     sumAToB("hello", "world");
//     //=> inputs should be numbers!
//
var sumAToB = function (a, b) {
  if (typeof a != "number" || typeof b != "number") {
    throw "inputs should be numbers!";
  }
  var result = 0;
  if (a >= b) {
    for (var i = b; i <= a; i++) {
      result += i;
    }
  } else {
    for (var i = a; i <= b; i++) {
      result += i;
    }
  }
  return result;
};


// Write a function called `countVowels` that accepts a string and
// returns the number of vowels contained in that string. You'll want
// to use the `isVowel` helper function from above. It should throw an
// error if the input is not a string
//
//     countVowels("hello world!");
//     //=> 3
//
//     countVowels("omg this is a hilarious tweet about nothing");
//     //=> 16
//
//     countVowels("");
//     //=> 0
//
//     countVowels(true);
//     //=> input to countVowels must be a string!
//
var countVowels = function (input) {
  if (typeof input != "string") {
    throw "input to countVowels must be a string!";
  }
  var totalVowels = 0;
  for (var i = 0; i < input.length; i++) {
    if (isVowel(input[i])) {
      totalVowels++;
    }
  }
  return totalVowels;
};


// Write a function that accepts a string and returns the same string, only in
// reverse!
//
//     reverse("hello world!");
//     //=> !dlrow olleh
//
//     reverse("omg this is a hilarious tweet about nothing");
//     //=> gnihton tuoba teewt suoiralih a si siht gmo
//
//     reverse("");
//     //=>
//
//     reverse(true);
//     //=> input to reverseString must be an string!
//
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


// A number is a prime number if it is only evenly divisible by 1 and itself
// (although we don't consider 1 a prime number, so 2 is the first prime
// number). Write a function called `isPrime` that accepts a number `p` as an
// argument and returns `true` if it is prime, `false` otherwise.
//
//     isPrime(101);
//     //=> true
//
//     isPrime(13);
//     //=> true
//
//     isPrime(1);
//     //=> false
//
//     isPrime(2);
//     //=> true
//
//     isPrime("hello");
//     //=> false
//
//     isPrime(-101);
//     //=> false
//
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


// Using the `isPrime` function, write a function that accepts a number as
// input sums all the primes smaller than that number.
//
//     sumPrimesUpTo(100);
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


// Using the `isPrime` function, write a function that takes in a
// positive integer, n, and returns the first n numbers.
//
//     sumOfFirstNPrimes(10);
//     //=> 129
//
//     sumOfFirstNPrimes(100);
//     //=> 24133
//
//     sumOfFirstNPrimes(1000);
//     //=> 3672913
//
//     sumOfFirstNPrimes(0);
//     //=> 0
//
//     sumOfFirstNPrimes(1);
//     //=> 2
//
//     sumOfFirstNPrimes(-10);
//     //=> input number should be zero or a positive number!
//
var sumOfFirstNPrimes = function (input) {
  if (input < 0 || typeof input != "number") {
    throw "input number should be zero or a positive number!";
  } else if (input == 0) {
    return 0;
  } else {
    var sumofprimes = 0;
    var numofprimes = 0;
    var i = 2;
    while (numofprimes < input) {
      if (isPrime(i)) {
        sumofprimes += i;
        numofprimes++;
      }
      i++;
    }
    return sumofprimes;
  }
};


// A _palindrome_ is a string that reads the same forwards and backwards. Write
// a function that accepts a string of arbitrary letters, numbers, and symbols, and
// returns true if it's a palindrome. For example:
//
//      isPalindrome("kayak");
//      //=> true
//
//      isPalindrome("A man, a plan, a canal, Panama");
//      //=> true
//
//      isPalindrome("hello world");
//      //=> false
//
// Let's start by writing a function to remove all non-letter characters
// from the input.
//
//     removeNonLetters("A man, a plan, a canal, Panama");
//     //=> AmanaplanacanalPanama
//
//     removeNonLetters("this is a string; it has some punctuation!");
//     //=> thisisastringithassomepunctuation
//
var removeNonLetters = function () {
};


// Now use `removeNonLetters`, along with the `reverse` function from above to
// determine if the string is a palindrome.
var isPalindrome = function () {
};
