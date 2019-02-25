const request = new XMLHttpRequest();

request.open('GET', 'https://project-622bb.firebaseio.com/BeCode.json', true);
request.send();

request.onload = function() {
  if (request.readyState === 4 && request.status === 200) {
    console.log("Success"); // JSON DATA HAS BEEN RECEIVED SUCCESSFULLY AND IS READY FOR WORK
    var x = request.responseText; // EXTRACT THE RAX TEXT FROM THE JSON
    document.getElementById("id01").innerHTML = x; // DISPLAY RAW TEXT IN HTML

/* ARRAY ELEMENTS :
history TH
image TH
profile TD
firstname TD (concatenate with lastname)
lastname TD
wiki
*/

  // EXTRACTING THE DATA ELEMENT BY ELEMENT
jayson = JSON.parse(request.response);
console.log(jayson[0].history);
console.log(jayson.length);
console.log(jayson[0].image);
console.log(jayson[0].wiki);
console.log(jayson[0].profile);
console.log(jayson[0].profile.firstname);
console.log(jayson[0].profile.lastname);

 for (var i = 0; i < jayson.length; i++) {
   console.log(jayson[i].wiki);
 }

var table;
    // CREATING TABLE
  for (i = 0; i < jayson.length; i++) {
  table="<table>";
  table+="<tr><td>Name</td><td>History</td></tr>";
  table+="<tr><td>"+jayson[i].profile.firstname+ " " + jayson[i].profile.lastname+"</td><td>"+jayson[i].history+"</td></tr>";
  table+="</table>";
  document.getElementById("id01").innerHTML = table;
}
// creates a <table> element and a <tbody> element
var tbl = document.createElement("table");
var tblBody = document.createElement("tbody");

// creating all cells
for (var i = 0; i < jayson.length; i++) {
  // creates a table row
  var row = document.createElement("tr");

  for (var j = 0; j < 3; j++) {
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    var cell = document.createElement("td");

    var cellText = document.createTextNode(jayson[i].profile.firstname+ " " + jayson[i].profile.lastname);
    cellText.id = i;
    cellText.href = jayson[i].wiki;
    cellText.title = jayson[i].wiki;
    cell.appendChild(cellText);
    row.appendChild(cell);
    cell.style.border = "2px dashed blue";
  }

  // add the row to the end of the table body
  tblBody.appendChild(row);
}

// put the <tbody> in the <table>
tbl.appendChild(tblBody);
// appends <table> into <body>
document.getElementById("id01").appendChild(tbl);
  }
};

request.onerror = function() {
  console.log("error");
};
