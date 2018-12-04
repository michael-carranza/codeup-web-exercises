//FIRST EXERCISE
// var i = 1;
// while (i< 65536) {
//     i = i*2;
//     console.log(i);
// }

//SECOND EXERCISE
//An ice cream seller can't go home until she sells all of her cones.
// Write a JS program that generates a random number between 50 and 100
// representing the amount of cones to sell. Your code should generate
// numbers between 1 and 5, simulating the amount of cones being bought
// by her clients. Use a do-while loop to log to the console the amount
// of cones sold to each person. This is how you get the random numbers.

// This is how you get a random number between 50 and 100
//var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// remaining = allCones;
// var sale = 0;
// do {
//     console.log("You have " + remaining + " remaining cones to sell.");
//     sale = Math.floor(Math.random() * 5) + 1;
//     if (sale > remaining) {
//         console.log("You don't have enough cones to sell " + sale + " ice cream cones.");
//         console.log("You only have "  + remaining + " cones to sell.");
//     } else {
//     console.log("You just sold " + sale + " ice cream cones.");
//     remaining -= sale;}
// } while(remaining > 0);
// console.log("yay! we sold them all!");
//THIRD EXERCISE
//
// for (var i = 1; i < 10; i++) {
//     var  message = "";
//     var length = 0;
//         while (length < i ) {
//             message = message + i;
//             length++;
//     }
//         console.log(message)
// }
//FOURTH EXERCISE
// function showMultiplicationTable(input) {
//     for (var num=1;num<=10;num++)
//         console.log(input + " x " + num +  " = " + input*num);
// }
//FIFTH EXERCISE
//     for (var i=1;i<=10;i++) {
//         var num = Math.floor(Math.random() * 180) + 20;
//         if ((num % 2) === 0) {
//             console.log(num + " is even");
//         } else {
//             console.log(num + " is odd ");
//         }}
//SIXTH EXERCISE
// function countBackwardsByFives(){
//     for (var i = 100;i>5=;i-=5){
//         console.log(i);}
// }
//SEVENTH EXERCISE
// function isNumeric(userInput){
//     return !isNaN(parseFloat(userInput))
// }
// var userInput;
// do {
//     userInput = prompt("Please enter an odd number between 1 and 50.");
//     userInput = parseFloat(userInput);
//     if (userInput > 50 && userInput < 1 && userInput % 2 === 0 && isNumeric(userInput))
//     break;
//
// } while ());
//     console.log(userInput);

function isNumeric (num) {
    return (!isNaN(parseFloat(num)))
}

var userInput;
do {
    userInput = prompt("Please enter an odd number between 1 and 50");
    userInput = parseFloat(userInput);
    // we want to keep asking until we get a good answer
    if (isNumeric(userInput)
        && userInput % 2 === 1
        && userInput >= 1
        && userInput <= 50) break;
} while (true);

console.log(userInput);

// Use a loop and the continue statement
// to output all the odd numbers between 1 and 50,
// except for the number the user entered.
for (var i = 1; i<=50; i+=2) {
    if (i === userInput) {
        console.log("Yikes! Skipping number: " + i);
        continue;
    }
    console.log("Here is an odd number: " + i);
}