// your notes here!
console.log("hello world!");

//
//      //=> aardvark
//
//
//      //=> whale
//
//
//      //=> aardvark
//
// It should throw an error string if any of the arguments are not strings.
//
//
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

firstInDictionary("rhino", "aardvark", "zebra");
firstInDictionary("whale", "zebra", "yak");
firstInDictionary("whale", "zebra", "aardvark");
//firstInDictionary("whale", 5, 10);

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

var interjectAt = function (interjection, position, destination) {
  if (typeof position != "number" || typeof interjection != "string" || typeof destination  != "string" ) {
    throw "args are not the correct types";
  } else
   if (position > destination.length - 1) {
    throw "the string doesn't have that many letters!"
  } else {
    console.log (typeof position);
    console.log (typeof interjection);
    console.log (typeof destination);
    var beginning = destination.slice(0, position);
    var end = destination.slice(position, destination.length);
    var interjected = beginning + "-" + interjection + "-" + end;
    console.log(interjected);
    return interjected;
  }
};

getTagName("<p>this is a paragraph</p>");
//     //=> p
//
//getTagName("<p>this is wrong</div>");
//     //=> Error: Not an HTML Element!
interjectAt("interjection", 5, "hello world!");
interjectAt(5, "omg", "hello");
