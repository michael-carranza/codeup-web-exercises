//var button = document.querySelectorAll("#new-fighter");
// function createTable(tableData) {
//     var table = document.createElement('table');
//     var tableBody = document.createElement('tbody');
//     tableData.forEach(function(rowData) {
//         var row = document.createElement('tr');
//         rowData.forEach(function(cellData) {
//             var cell = document.createElement('td');
//             cell.appendChild(document.createTextNode(cellData));
//             row.appendChild(cell);
//         });
//         tableBody.appendChild(row);
//     });
//     table.appendChild(tableBody);
//     document.body.appendChild(table);
// }



var name1="";
var total1="";
var roll1="";
var bonus1="";
var fighter1=[];

function newFighter() {
    var name1 = document.getElementById('name1').value;
    var faction1 = document.getElementById('faction1').value;
    var roll1 = Math.floor(Math.random() * 20) + 1;
    var bonus1 = document.getElementById('bonus1').value;
    var total1 = parseFloat(roll1) + parseFloat(bonus1);
    var fighter1 = [
        name1,
        total1,
        roll1,
        bonus1,
        faction1
    ];
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = fighter1[0];
    cell2.innerHTML = fighter1[1];
    cell3.innerHTML = fighter1[2];
    cell4.innerHTML = fighter1[3];
    cell5.innerHTML = fighter1[4];

}

function sortTable() {
    document.getElementById('myTable').deleteRow(0);
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            //check if the two rows should switch place:
            if (Number(x.innerHTML) > Number(y.innerHTML)) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
function test(){
    var name1 = ("Test" + Math.floor(Math.random() * 20) + 1);
    var faction1 = Math.floor(Math.random() * 3) + 1;
        if (faction1 === 1){
            faction1 = 'Ally';
        }else if (faction1 === 2){
        faction1 = 'Enemy';
         } else if (faction1 === 3){
            faction1 = 'Neutral';
        }
    var roll1 = Math.floor(Math.random() * 20) + 1;
    var bonus1 = Math.floor(Math.random() * 5) + 1;
    var total1 = parseFloat(roll1 + 5);
    var fighter1 = [
        name1,
        total1,
        roll1,
        bonus1,
        faction1
    ];
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = fighter1[0];
    cell2.innerHTML = fighter1[1];
    cell3.innerHTML = fighter1[2];
    cell4.innerHTML = fighter1[3];
    cell5.innerHTML = fighter1[4];
}
function reverseTableRows(tableId) {
    var table = document.getElementById(tableId),
        newTbody = document.createElement('tbody'),
        oldTbody = table.tBodies[0],
        rows = oldTbody.rows,
        // rows = document.getElementById('myTable').rows-1;
        i = rows.length - 1;

    while (i >= 0) {
        newTbody.appendChild(rows[i]);
        i -= 1;
    }
    oldTbody.parentNode.replaceChild(newTbody, oldTbody);
}
function clear2() {
    var rows = document.getElementById('myTable').rows.length;
    for(i=rows;i>1;i--){
        document.getElementById('myTable').deleteRow(i - 1);
    }
        document.getElementById("myTable").insertRow(0);
        document.getElementById("myTable").deleteRow(1);
}