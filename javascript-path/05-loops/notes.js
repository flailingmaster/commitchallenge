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
    isVowel("E");
//    //=> true
//
    isVowel(1);
//    //=> false
//
    isVowel("Ea");
//    //=> false
//
    isVowel("Y");
//    //=> false
//
