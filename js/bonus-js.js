// Output should include:
// - total number of employees
// - total number of units sold
// - avg units sold per employee
// - Then output should share employee production, ordered from highest to lowest # of units
// * Units   |     Full Name       |   Employee Number
// * 5             Bob Boberson        2

var reportContents = "Monthly Sales Report\nDate: 03-17-2015\nOffice: Codeup\n ===================================================\nEmployee Number, First Name, Last Name, Sales Units\n***************************************************\n\n1, Jane, Janeway, 3\n3, Tricia, Triciason, 5\n4, Jeannette, Jeanson, 4\n5, Charles Emmerson III, Winchester, 2\n6, Chet, Chedderson, 8\n7, Chaiam, Chaiamson, 12\n8, Dale, Dalesinger, 1\n9, Zig, Ziglar, 50\n10, Henry, Kissinger, 1\n11, Arthur Herbert, Fonzarelli, 23\n12, Betty, Boop, 67";

var reportArray = reportContents.split('\n');
reportArray.shift();
reportArray.shift();
reportArray.shift();
reportArray.shift();
reportArray.shift();
reportArray.shift();
reportArray.shift();
console.log(reportArray);
    var firstPerson = reportArray[0].split(',');
    var secondPerson = reportArray[1].split(',');
    var thirdPerson = reportArray[2].split(',');
    var fourthPerson = reportArray[3].split(',');
    var fifthPerson = reportArray[4].split(',');
    var sixthPerson = reportArray[5].split(',');
    var seventhPerson = reportArray[6].split(',');
    var eighthPerson = reportArray[7].split(',');
    var ninthPerson = reportArray[8].split(',');
    var tenthPerson = reportArray[9].split(',');
    var eleventhPerson = reportArray[10].split(',');
var newArray = [
  firstPerson,
  secondPerson,
  thirdPerson,
  fourthPerson,
  fifthPerson,
  sixthPerson,
  seventhPerson,
  eighthPerson,
  ninthPerson,
  tenthPerson,
  eleventhPerson
];
console.log(newArray);
console.log("The total number of sales people is " + newArray.length + ".");
var totalSales = 0;
for (var i = 0; i < newArray.length; i++){
    totalSales += parseFloat(newArray[i][3]);
}
console.log("The total number of units sold is " + totalSales + ".");
var salesAvg = totalSales/newArray.length;
console.log("The average number of units sold per employee is " + salesAvg + ".");

    function sortArray (a, b){
        return a[3]-b[3];
    }
    newArray.sort(sortArray);
    newArray.reverse();
    console.log(newArray);


