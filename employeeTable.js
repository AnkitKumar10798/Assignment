/*check=0 Edit and Delete operation
  check=1 Save and Cancel operation
*/
let check = 0,
  deleted_row = [],
  datalen,
  class_name,
  stored_tblbody;

function call() {
  if (document.getElementById("LOAD").innerHTML == "LOAD DATA") {
    document.getElementById("LOAD").innerHTML = "REFRESH DATA";
  } else {
    let div = document.getElementById("div1");
    div.innerHTML = " ";
  }
  fetch("Employee.json")
    .then(response => response.json())
    .then(function(data) {
      CreateTable(data);
    });
}
