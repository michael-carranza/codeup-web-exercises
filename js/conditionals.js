"use strict";

function enterNumber(){
    var begin = confirm("Would you like to enter a number?");
    if (begin == true) {
        var number = parseInt(prompt("Enter a number from 1 to 100."));
        var oddCheck = (number % 2);
        console.log(oddCheck);
        if (oddCheck == 1){
            console.log("The number " + number + " is odd.");
            var addHundred = (number + 100);
            console.log("If you add 100 to " + number + " you get " + addHundred + ".");
            if (number > 0){
                console.log("The number " + number + " is positive.");
            }
            else if (number < 0){
                console.log("The number " + number + " is negative.");
            }
        }
            else {
                console.log("The number " + number + " is even.");
                var addHundred = (number + 100);
                console.log("If you add 100 to " + number + " you get " + addHundred + ".");
                if (number > 0){
                    console.log("The number " + number + " is positive.");
                }
                else if (number < 0){
                    console.log("The number " + number + " is negative.");
                }
            }
    }
    else { alert("Oh. That's too bad. Have a great day then.")}
}
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/* ########################################################################## */

function analyzeColor(){
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    // var randomColor = prompt("What is your favorite color?")
    if (randomColor == "blue"){
        console.log("Blue is the color of the sky.");
        alert("Blue is the color of the sky.")
    }
    else if(randomColor == "red"){
        console.log("Strawberries are red.")
        alert("Strawberries are red.")
    }
    else {
        console.log("I don't know anything about that color.")
        alert("I don't know anything about that color.")
    }
}



/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)





/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.**/
function calculateTotal(){
    var luckyNumber = Math.floor(Math.random() * 5);
    var subtotal = prompt("What is the total cost?");
    if (luckyNumber == 0){
        var newTotal = (subtotal * 1);
        alert("Your lucky number was " + luckyNumber + ". That means your discount is 0%.");
        alert("Your new total is $" + newTotal)
    }
    else if (luckyNumber == 1){
        var newTotal = (subtotal * 0.9);
        alert("Your lucky number was " + luckyNumber + ". That means your discount is 10%!");
        alert("Your new total is $" + newTotal)
    }
    else if (luckyNumber == 2){
        var newTotal = (subtotal * 0.75);
        alert("Your lucky number was " + luckyNumber + ". That means your discount is 25%!");
        alert("Your new total is $" + newTotal)
    }
    else if (luckyNumber == 3){
        var newTotal = (subtotal * 0.65);
        alert("Your lucky number was " + luckyNumber + ". That means your discount is 35%!");
        alert("Your new total is $" + newTotal)
    }
    else if (luckyNumber == 4){
        var newTotal = (subtotal * 0.5);
        alert("Your lucky number was " + luckyNumber + ". That means your discount is 50%!");
        alert("Your new total is $" + newTotal)
    }
    else if (luckyNumber == 5){
        var newTotal = (subtotal * 0);
        alert("Your lucky number was " + luckyNumber + ". That means your discount is 100%!");
        alert("Your new total is $" + newTotal)
    }
}

/* * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 5
// var luckyNumber = Math.floor(Math.random() * 5);
