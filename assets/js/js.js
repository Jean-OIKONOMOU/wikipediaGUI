var button = document.getElementById("target");
var searchBar = document.getElementById('searchBar');
var input = document.getElementById("searchTxt");
var myDiv = document.getElementById("id01");
var myList = document.getElementById("id02");

button.addEventListener('click', function() {
//  myDiv.removeChild(myDiv.childNodes[0]);
  while (myDiv.firstChild) {
    myDiv.removeChild(myDiv.firstChild);
}
  while (myList.firstChild) {
    myList.removeChild(myList.firstChild);
}

  var trucBidule = input.value;
  var url = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=" + trucBidule;

  fetch(url)
    //https://cors.io/?https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=gonad */
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      console.log(data);
      // BEGINNING TABLE CREATION
      var tbl = document.createElement("table");
      var tblBody = document.createElement("tbody");
      var cell1;
      var iframe;
      // CREATING ROWS
      for (i = 0; i < data[1].length; i++) {
        var row = document.createElement("tr");
        cell1 = document.createElement("td");
        cell1.className = "tile";
        // CREATING TITLE ELEMENT
        var a = document.createElement("a");
        a.setAttribute("href", data[3][i]);
        a.setAttribute("target", "_blank");
        a.innerHTML = data[1][i];
        linebreak = document.createElement("br");
        a.appendChild(linebreak);
        cell1.appendChild(a);
        // MY LIST
        var ul = document.createElement("ul");
        var li = document.createElement("li");
        li.innerHTML = data[1][i];
        ul.appendChild(li);
        myList.appendChild(ul);
        document.getElementById("container2").className="panelAnimate";
        // CREATING PARAGRAPH ELEMENT
        var history = document.createElement("p");
        history.innerHTML = data[2][i];
        cell1.appendChild(history);
        history.insertAdjacentHTML("afterend", "<p>Cliquez sur la boîte pour faire apparaître l'iframe.</p>");
        // STYLIZE THIS TO MAKE IT APPEAR TO THE EYE
        // CREATING IFRAME ELEMENT
        iframe = document.createElement("iframe");
        iframe.setAttribute("src", data[3][i]);
        iframe.setAttribute("height", "0");
        // PUTTING TOGETHER ELEMENTS
        cell1.appendChild(iframe);
        row.appendChild(cell1);
        tblBody.appendChild(row);
      }

      tbl.appendChild(tblBody);

      myDiv.appendChild(tbl);


      var selector = document.getElementsByClassName("tile");

      Array.from(selector).forEach(function(btn) {
        btn.addEventListener("click", function() {
          var t = btn.getElementsByTagName("iframe");

          if (t[0].clientHeight == 0) {
            t[0].style.height = "350px";
            t[0].className = 'iframeAnimate';
          } else if (t[0].clientHeight >= 1) {
            t[0].style.height = "0";
            //  t[0].style.maxHeight = "0px";
          }
        });
      });

      /*    for (var i = 0; i <= selector.length; i++) {
            var index = selector[i]; //get the nth-child number here
            //selector[i].style.color = "red";
            selector[i].dataset.number = index;
            //  console.log(index);
          }*/

    });
});
