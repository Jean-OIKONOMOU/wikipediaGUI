/*jshint esversion: 6 */

fetch('https://project-622bb.firebaseio.com/BeCode.json')

  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    var jayson = data;
    //document.getElementById("id01").innerHTML = JSON.stringify(jayson);
    console.log(jayson);
    console.log("console.log of jayson[0].history " + jayson[0].history);
    console.log("console.log of jayson.length " + jayson.length);
    console.log(jayson[0].image);
    console.log(jayson[0].wiki);
    console.log(jayson[0].profile);
    console.log(jayson[0].profile.firstname);
    console.log(jayson[0].profile.lastname);

    /*  // CREATING TABLE
      for (i = 0; i < jayson.length; i++) {
        table = "<table>";
        table += "<tr><td>Name</td><td>History</td></tr>";
        table += "<tr><td>" + jayson[i].profile.firstname + " " + jayson[i].profile.lastname + "</td><td>" + jayson[i].history + "</td></tr>";
        table += "</table>";
        document.getElementById("id01").innerHTML = table;
      }*/

    // creates a <table> element and a <tbody> element

    var tbl = document.createElement("table");
    tbl.style.margin = "0 auto";
    var tblBody = document.createElement("tbody");

    // creating the rows
    for (i = 0; i < jayson.length; i++) {

      // creates a table row
      var row = document.createElement("tr");

      for (var j = 0; j < 1; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell1 = document.createElement("td");
        var a = document.createElement("a");
        a.setAttribute("href", jayson[i].wiki);
        a.setAttribute("target", "_blank");
        a.innerHTML = jayson[i].profile.firstname + " " + jayson[i].profile.lastname;
        cell1.appendChild(a);
        row.appendChild(cell1);
        cell1.style.border = "2px dashed red";
        cell1.style.padding = '15px';
        cell1.style.textAlign = "center";
      }

      for (j = 0; j < 1; j++) {
        var cell2 = document.createElement("td");
        var history = document.createTextNode(jayson[i].history);
        cell2.appendChild(history);
        row.appendChild(cell2);
        cell2.style.border = "2px dashed blue";
        cell2.style.width = '200px';
        cell2.style.padding = '15px';
        cell2.style.textAlign = "center";
      }

      for (j = 0; j < 1; j++) {
        var cell3 = document.createElement("td");
        var img = document.createElement("img");
        img.setAttribute("src", jayson[i].image);
        img.setAttribute("width", "100%");
        img.setAttribute("height", "40%");
        cell3.style.width = '200px';
        cell3.style.border = "2px dashed green";

        cell3.appendChild(img);
        row.appendChild(cell3);
        //  cell3.style.border = "2px dashed green";
      }

      // add the row to the end of the table body
      tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.getElementById("id01").appendChild(tbl);
  });
