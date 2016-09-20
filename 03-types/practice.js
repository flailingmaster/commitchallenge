// Write a function called isDivisibleBy3 which returns `true` if a number is
// divisible by 3, and `false` otherwise.
var isDivisibleBy3 = function (a) {
	return (a % 3 == 0)
};


// Write a function that converts a Celsius temperature to Fahrenheit,
// and vice-versa. To convert from Celsius to Fahrenheit, you multiply
// the celsius value by 9 and then divide by 5. Then you add 32. To
// convert the other way, you subtract 32, and then multiply by
// 5. Finally, you divide by 9. The division operator in JavaScript is
// `/`.
var celsToFahr = function (cels) {
	return cels * 9 / 5 + 32
};

var fahrToCels = function (fahr) {
	var test = fahr - 32
	return test * 5 / 9
};


// Write a function called `randUpTo` that accepts a number and returns a random
// whole number between 0 and that number. For example:
//
//     randUpTo(10);
//     //=> 5
//
//     randUpTo(10);
//     //=> 9
//
//     randUpTo(1000);
//     //=> 561
//
//     randUpTo(1000);
//     //=> 236
var randUpTo = function (target) {
	var rand = Math.random()
	return Math.floor(rand * target)
};


// Write a function called `randBetween` that accepts two numbers representing a
// range and returns a random whole number between those two numbers.
var randBetween = function (a, b) {
	var diff = b - a
	var rand = diff * Math.random()
	return a + rand
};


// The standard card suits are clubs, diamonds, hearts and spades. Write a
// function called isSuit that accepts a string and returns true if the input
// string is a suit, and false otherwise. Consider making a more robust function
// that will allow the case to be arbitrary, meaning "HEARTS", "hearts", and
// "hEaRtS" all return `true`. You can use the `toLowerCase` or `toUpperCase`
// string methods to achieve this.
//
//     isSuit("hearts");
//     //=> true
//
//     isSuit("HEARTS");
//     //=> true
//
//     isSuit("coins");
//     //=> false
var isSuit = function (suitquery) {
	var suits = ['clubs', 'diamonds', 'hearts', 'spades']
	console.log(suitquery.toLowerCase())
	var normalized_suit = suitquery.toLowerCase()
	return suits.indexOf(normalized_suit) > -1
};


// The valid ranks for a card are two, three, four, five, six, seven, eight,
// nine, ten, jack, queen, king and ace. Write a function called `isRank` that
// accepts a string and returns true if it is a card rank.
//
//     isRank("jack");
//     //=> true
//
//     isRank("Queen");
//     //=> true
//
//     isRank("one");
//     //=> false
var isRank = function (rank) {
	var ranks = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"]
	var normalized_query = rank.toLowerCase()
	return ranks.indexOf(normalized_query) > -1
};


// Using the previous two functions, write a function called isCard that accepts
// two arguments, a suit and a rank, and returns true if they are valid for a card,
// and false otherwise.
var isCard = function (rank, suit) {
	suit_bool = isSuit(suit)
	rank_bool = isRank(rank)
	return suit_bool && rank_bool
};


// Write a function called `isCapitalized` that accepts a string and returns
// `true` if the first letter is a capital letter. How can you determine that?
// Remember that you can use strings in comparisons in the same way that you can
// use numbers, and the ordering is alphabetical (with capital letters having lower
// values than their lower-case counterparts).
var isCapitalized = function (query) {
	return query < query.toLowerCase()
};


// Write a function that accepts a string representation of an HTML element (it
// can't have nested HTML elements) and returns the string contained inside. For
// example:
//
//     getHTMLText("<p>this is some text in a paragraph</p>");
//     //=> this is some text
//
//     getHTMLText("<li>this is a list item</li>");
//     //=> this is a list item
var getHTMLText = function (element) {
	beginning = element.indexOf('>')
	end = element.slice(beginning+1).indexOf('<')
	return element.slice(beginning+1, beginning+end+1)
};


// Write a function that determines if a string represents an HTML element. This
// means it has to start with an opening HTML tag and end with a closing HTML tag.
//
//     isHTMLElement("<p>this is a paragraph</p>");
//     //=> true
//
//     isHTMLElement("this is a tweet!");
//     //=> false
//
//     isHTMLElement("<p>this is NOT an paragraph</div>");
//     //=> false
//
//     isHTMLElement("<li>this is an HTML list element</li>");
//     //=> true
//
// It may help in this case to look up the `lastIndexOf` method on the string
// objects.
var isHTMLElement = function (element) {
	console.log(element)
	beginning = element.indexOf('>')
	console.log(beginning)
	fromend = -beginning
	test1=element.slice(1,beginning)
	test2=element.slice(fromend, -1)
	console.log(test1)
	console.log(test2)
	var endtag = element.charAt(element.length + fromend - 1)
	console.log(endtag)
	if (beginning < 0) return false
	if (beginning == element.length - 1) return false
  if (endtag != '/') return false
  return element.slice(1,beginning) == element.slice(fromend, -1)
};
