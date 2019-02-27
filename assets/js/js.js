var button = document.getElementById("target");
var searchBar = document.getElementById('searchBar');
var input = document.getElementById("searchTxt");
var myDiv = document.getElementById("id01");

button.addEventListener('click', function() {
  // event.preventDefault();
  if (input.value.length == 0) {
    myDiv.removeChild(myDiv.childNodes[0]);
  }

  var trucBidule = input.value;
  // trucBidule.trim(); also - replace spaces with underscore function;
  var url = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=" + trucBidule;

  fetch(url)
    //https://cors.io/?https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=gonad */
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      //
      console.log(data);

      // BEGINNING TABLE CREATION
      var tbl = document.createElement("table");
      var tblBody = document.createElement("tbody");

      // creating the rows
      for (i = 0; i < data[1].length; i++) {
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        // Title Element
        var a = document.createElement("a");
        a.setAttribute("href", data[3][i]);
        a.setAttribute("target", "_blank");
        a.innerHTML = data[1][i];
        linebreak = document.createElement("br");
        a.appendChild(linebreak);
        cell1.appendChild(a);
        // Paragraph Element
        var history = document.createElement("p");
        history.innerHTML = data[2][i];
        cell1.appendChild(history);
        //history.style.margin = "40";
        // iFrame Element
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", data[3][i]);
        cell1.appendChild(iframe);
        row.appendChild(cell1);
        tblBody.appendChild(row);
      }

      // put the <tbody> in the <table>
      tbl.appendChild(tblBody);

      // appends <table> if myDiv is empty

      for (i = 0; i < 2; i++) {
        if (myDiv.children.length > 0) {
          myDiv.removeChild(myDiv.childNodes[0]);
        } else if (myDiv.children.length === 0) {
          myDiv.appendChild(tbl);
        }
      }

    });
});
