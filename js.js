const request = new XMLHttpRequest();

request.open('GET', 'https://project-622bb.firebaseio.com/BeCode.json', true);
request.send();

request.onload = function() {
  if (request.readyState === 4 && request.status === 200) {
    console.log("Success"); // So extract data from json and create table
    var x = request.responseText;
    document.getElementById("id01").innerHTML = x;

/*
history TH
image TH
profile TD
firstname TD (concatenate with lastname)
lastname TD
wiki
*/

console.log(JSON.parse(request.response)[0].history);
console.log(JSON.parse(request.response)[0].length);
console.log(JSON.parse(request.response)[0].image);
console.log(JSON.parse(request.response)[0].profile);
console.log(JSON.parse(request.response)[0].profile.firstname);
console.log(JSON.parse(request.response)[0].profile.lastname);
console.log(JSON.parse(request.response)[0].wiki);

// for (var i = 0; i < data.length; i++)

  //Extracting data
/*var historyTH = JSON.parse(request.response).value.history;
var imageTH = JSON.parse(request.response).value.image;

    //Creating table
    var table="<table>";
  table+="<tr><td>History</td><td>Image</td></tr>";
  table+="<tr><td>"+historyTH+"</td><td>"+imageTH+"</td></tr>";
  table+="</table>";*/

    //Showing the table inside table

  }
};

request.onerror = function() {
  console.log("error");
};
