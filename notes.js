//creates a random number 1 - 6 //

var dieRoll = Math.floor( Math.random() * ) +1;


//quiz//

var answer = prompt('What is the name of the gem?');
if ( answer.toUpperCase() === 'RUBY') {
	document.write("<p>Ruby is awesome!</p>");
} else {
	document.write("<p>You chose something else</p>");
}

//guess a number//

var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt ('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber) {
	document.write('<p>Correct!</p>');
} else {
	document.write('<p>Incorrect!</p>');
}

//boolean//

var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt ('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber) {
	correctGuess = true;
}
if (correctGuess) {
	document.write('<p>Correct!</p>');
} else {
	document.write('<p>Sorry, The number was ' + randomNumber + '.</p>');
}

//else if//

var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt ('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber) {
	correctGuess = true;
} else if (parseInt(guess) < randomNumber ) {
	var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
	if (parseInt(guessMore) === randomNumber) {
		correctGuess = true;
	}

} else if (parseInt(guess) > randomNumber ) {
	var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
	if (parseInt(guessLess) === randomNumber)
		correctGuess = true;
	}
}
if (correctGuess) {
	document.write('<p>Correct!</p>');
} else {
	document.write('<p>Sorry, The number was ' + randomNumber + '.</p>');
}

/* multiple sets

|| or operator 
&& and operator

*/

//building a function//

function alertRandom () {
	var randomNumber = Math.floor(Math.random() * 6 ) + 1;
	alert(randomNumber);
}

alertRandom ();


//function return - return should be the last thing in the code //

function giveMeFive() {
  return 5;
}
console.log( giveMeFive() );

//Function with parameters //


function calculateArea( width, length ) {
  return width * length;
}

calculateArea( 5, 4 ); // 20
calculateArea( 30, 4 ); // 120

//or 

function getRandomNumber(upper) {
	var randomNumber = Math.floor(Math.random() * upper ) + 1;
	return randomNumber;
}

console.log (getRandomNumber(9));
console.log (getRandomNumber(100));
console.log (getRandomNumber(91999));


//Useful info from w3schools

functionName(parameter1, parameter2, parameter3) {
    code to be executed
}

Function parameters are the names listed in the function definition.

Function arguments are the real values passed to (and received by) the function.

//function that finds highest value in a list of numbers from w3schools

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    var i, max = 0;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

//or

function max(num1, num2) {
  if (num1 > num2) {
    return num1; 
  }
  else{
    return num2;
  }
}



