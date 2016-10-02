// We'll consider a password's strength to be "strong" if it is at least 10
// characters long. If it's between 7 and 10 characters long, we'll consider it to
// have "medium" strength, and if it's less than 7 characters, we'll say it is a
// "weak" password. Write a function that accepts as input a potential password and
// returns either "weak", "medium" or "strong" depending on its length.
//
//     passwordStrength("hello");
//     //=> weak
//
//     passwordStrength("longerpassword");
//     //=> strong
//
//     passwordStrength("helloone");
//     //=> medium
var passwordStrength = function (pass) {
  var len = pass.length;
  console.log("len = "+ len);
  if (len < 7) {
    return "weak";
  }
  if (len >= 7 && len < 10) {
    return "medium";
  }
  if (len >= 10) {
    return "strong";
  }
};


// A year is a leap year if it is divisible by 4, unless it is also divisible by
// 100 in which case it is not a leap year unless it is also divisible by
// 400. Phew. Got that? Good. Write a function that accepts a number and outputs
// true if the number is a leap year, false if not.
//
//      isLeapYear(1988);
//      //=> true
//
//      isLeapYear(2001);
//      //=> false
//
//      isLeapYear(1800);
//      //=> false
//
//      isLeapYear(2000);
//      //=> true
//
// It should also throw an error if the input is not a number.
//
//      isLeapYear("hello");
//      //=> THAT'S NOT A NUMBER!
var isLeapYear = function (year) {
  if (!Number.isInteger(year)) {
    throw "THAT'S NOT A NUMBER!";
  } else if (year % 4 == 0) {
      console.log ("year: "+year);
      if (year % 100 == 0) {
        if (year % 400 == 0) {
          return true;
        } else {
          return false;
        }
      } else {
       return true;
      }
  } else {
      return false;
  }

};


// Write a function that accepts three strings and input, and returns the one
// that would come earliest in the dictionary.
//
//      firstInDictionary("rhino", "aardvark", "zebra");
//      //=> aardvark
//
//      firstInDictionary("whale", "zebra", "yak");
//      //=> whale
//
//      firstInDictionary("whale", "zebra", "aardvark");
//      //=> aardvark
//
// It should throw an error string if any of the arguments are not strings.
//
//      firstInDictionary("whale", 5, 10);
//      //=> ALL THREE ARGS MUST BE STRINGS!
var firstInDictionary = function (a, b, c) {
  if (typeof a == "string" && typeof b == "string" && typeof c == "string") {
    console.log("looks ok");
    if (a < b) {
      if (a < c) {
        console.log(a);
        return a;
      } else {
        console.log(c);
        return c;
      }
    } else if (b < c) {
      console.log(b);
      return b;
    } else {
      console.log(c);
      return c;
    }
  } else {
    throw "ALL THREE ARGS MUST BE STRINGS!";
  }
};


// Write a function that extracts a tag from a string representing an HTML
// element, but throws an error if the string is not an HTML element. You may reuse
// one of your functions from the previous section (or, better yet, see if you can
// remember how to re-write it).
//
//     getTagName("<p>this is a paragraph</p>");
//     //=> p
//
//     getTagName("<p>this is wrong</div>");
//     //=> Error: Not an HTML Element!
var getTagName = function (tag) {
    var tagName;
    firstbracket = tag.indexOf("<");
    endbracket = tag.indexOf(">");
    nextbracket = tag.indexOf("<", firstbracket+1);
    endnextbracket = tag.indexOf(">", nextbracket);
    endTag = tag.slice(nextbracket+ 2, endnextbracket);
    console.log("endtag: "+endTag);
    tagName = tag.slice(firstbracket+1, endbracket);
    console.log("firsttag:"+tagName);
    if (endTag === tagName) {
      return tagName;
    } else {
      throw "Not an HTML Element";
    }

};


// Re-implement our improveTweet function so it can generate any of lol, omg,
// lmao, and rofl.
var improveTweet = function (tweet) {
    // generate either a 1 or a 0
    var random = Math.floor(Math.random() * 4);
    var result = tweet;
    var expression;

    if (random === 0) {
        expression = "lol";
    } else if (random === 1) {
        expression = "omg";
    } else if (random === 2) {
        expression = "lmao";
    } else if (random === 3) {
        expression = "rofl";
    }

    if (result.indexOf(expression) === -1 && result.indexOf(expression.toUpperCase()) === -1) {
        result = result + " " + expression;
    }

    return result;
};


// Write a function called `isQuestion` that returns true if the input is a
// string and it ends in a question mark. We'll use this function in the next
// practice problem.
var isQuestion = function (question) {
  return (question.slice(-1) === "?");
};


// The Magic 8 Ball is a classic toy that allows you to ask a yes/no
// question and it responds with a random answer. Most of the time (at least half)
// it responds with a "positive" answer, about a quarter of the time it responds
// with a "neutral" answer, and about a quarter of the time it responds with a
// "negative" answer. You can read more about the Magic 8 Ball toy (and see it's
// actual responses) on Wikipedia.
//
// Write a function that simulates the Magic 8 Ball by generating a random
// number. Try to make it match the probabilities of the real toy.
//
//     magic8Ball("Will people like this problem?");
//     //=> Very doubtful
//
//     magic8Ball("Do people like these videos?");
//     //=> My reply is no
//
//     // throw an error if there's no question mark at the end
//     // use your isQuestion function from the previous question
//     magic8Ball("you suck");
//     //=> THAT DOESN'T SOUND LIKE A QUESTION!
//
//     magic8Ball("Is this a question?");
//     //=> Signs point to yes
var magic8Ball = function (question) {
  var positive = ["Signs point to yes", "Hell yes", "Very positive"];
  var negative = ["Very doubtful", "My reply is no", "Hell no"];
  var neutral = ["Meh", "Maybe yes, maybe no. Maybe go fuck yourself.", "Definitely maybe."];

  if (isQuestion(question)) {
    console.log("some bullshit");
    var random = Math.floor(Math.random() * 4);
    if (random == 1) {
      // negative
      var response = Math.floor(Math.random() * negative.length);
      console.log(negative[response]);
      return negative[response];

    } else if (random == 2) {
      var response = Math.floor(Math.random() * neutral.length);
      console.log(neutral[response]);
      return neutral[response];
      // neutral
    } else {
      // positive
      var response = Math.floor(Math.random() * positive.length);
      console.log(positive[response]);
      return positive[response];
    }
  } else {
    throw "THAT DOESN'T SOUND LIKE A QUESTION!"
  }
};


// Suppose we wanted to randomly interject "-lol-" or "-omg-" into a random
// place in a string. For example:
//
//     randomInterject("this is a tweet");
//     //=> this is -omg- a tweet
//
// Notice that it may break into the middle of words as well.
//
//     randomInterject("hilarious, I'm having a great day");
//     //=> hil-lol-arious, I'm having a great day");
//
// This is a little tricky, so here are some tips. It may be helpful to break down
// this problem into two steps. First, you may want to write a function called
// interjection that accepts a number and two strings -- the interjection and the
// actual string.
//
//     interjectAt("interjection", 5, "hello world!");
//     //=> hello-interjection- world!
//
//     interjectAt("lol", 0, "this is a tweet");
//     //=> -lol-this is a tweet
//
//     interjectAt("omg", 15, "hello");
//     //=> the string doesn't have that many letters!
//
//     interjectAt(5, "omg", "hello");
//     //=> expected first arg to be a string, second arg to be a number and third arg to be a string
//
// You can interject by using two slices. For instance:
//
//     var str = "hello world!";
//     var beginning = str.slice(0,5);
//     var end = str.slice(5,str.length);
//     var strWithInterjection = beginning + "-lol-" + end;
//
// You just have to generalize this to an arbitrary index and wrap it in a function.
var interjectAt = function (interjection, position, destination) {
  if (typeof position != "number" || typeof interjection != "string" || typeof destination  != "string" ) {
    throw "args are not the correct types";
  } else
   if (position > destination.length - 1) {
    throw "the string doesn't have that many letters!"
  } else {
    var beginning = destination.slice(0, position);
    var end = destination.slice(position, destination.length);
    var interjected = beginning + "-" + interjection + "-" + end;
    return interjected;
  }
};


// Now that you have a robust function to do your interjection, your actual
// `randomInterjection` function consists of generating a random message and a
// random location within the string, and then calling into the `interjectAt`
// function with the appropriate arguments.
var randomInterject = function (message) {
  if (typeof message != "string" ) {
    console.log("message is not a string");
    throw "Message is not a string: "+ message;
  } else {
    console.log("message"+ message);
    var interjections = ["lol", "omg"];

    var interjection = interjections[Math.floor(Math.random() * interjections.length)];
    console.log("interjection: "+interjection);
    var position = Math.floor(Math.random() * message.length);
    console.log("test: "+message.length);
    console.log("position: "+position);
    interjectAt(interjection, position, message);
  }
};
