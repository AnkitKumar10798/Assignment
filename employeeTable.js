/*check=0 Edit and Delete operation
  check=1 Save and Cancel operation
*/
let check = 0,
    deleted_row = [],
    datalen,
    class_name,
    stored_tblbody;

$(document).ready(function() {
    $("#LOAD").click(function() {
        $.getJSON("Employee.json", function(obj) {
            $.each(obj, function(key, value) {
                call(value); // value is the array of objects
            });
        });
    });
});

function call(Emp) {
    document.getElementById("LOAD").innerHTML = "REFRESH DATA";
    let div = document.getElementById("div1");
    div.innerHTML = " ";
    CreateTable(Emp);
}

function CreateTable(Emp) {
    let table = document.createElement("table");
    table.setAttribute("id", "empTable");
    table.setAttribute("class", "table  table-light table-hover");
    table.style.tableLayout = "fixed";
    let arrHeaders = new Array();
    arrHeaders = ["firstName","middleName","lastName","Email",
                 "phone","Role","Address","Edit option","Delete option"];
    datalen = Emp.length;
    for (let x = 0; x < datalen; x++) {
        deleted_row[x] = false;
    }

    let tr = table.insertRow(-1);
    //create Headers
        for (let h = 0; h < arrHeaders.length; h++) {
        let th = document.createElement("th");
        th.setAttribute("class", "table table-dark");
        th.innerHTML = arrHeaders[h];
        tr.appendChild(th);
    }
        for (let c = 0; c < datalen; c++) {
             tr = table.insertRow(-1);
             tr.setAttribute("id", "row" + c);
             tr.style.textAlign = "center";
             tr.innerHTML =
            '<td  class="cell' + c + '">' + Emp[c].firstName + '</td>' +
            '<td  class="cell' + c + '">' + Emp[c].middleName + '</td>' +
            '<td  class="cell' + c + '">' + Emp[c].lastName + '</td>' +
            '<td  class="cell' + c + '">' + Emp[c].Email + '</td>' +
            '<td  class="cell' + c + '">' + Emp[c].phone + '</td>' +
            '<td  class="cell' + c + '">' + Emp[c].Role + '</td>' +
            '<td  class="cell' + c + '">' + Emp[c].Address + '</td>' +
            '<td> <button type="button" class="btn btn-primary" onclick="editData(' + c + ')" id="edit' + c + '"> edit data</button></td>' +
            '<td> <button type="button" class = "btn btn-primary" onclick="deleteData(' + c + ')" id="delete' + c + '"> delete data </button></td>';
        class_name = "cell" + c;
    }
    cells = document.getElementsByClassName(class_name);
    for (cell = 0; cell > cells.length; cell++) {
        cells[cell].setAttribute("contenteditable", "false");
    }
    document.getElementById("div1").appendChild(table);
}

function deleteData(num) {
    let rowid = "row" + num;
    if (check === 0) {
        let deleterow = document.getElementById(rowid);
        deleterow.parentNode.removeChild(deleterow);
        deleted_row[num] = true;
    } else {
        let presentBody = document.getElementsByTagName("tbody")[0];
        presentBody.parentNode.replaceChild(stored_tblbody, presentBody);
        SwitchButton(num);
        enable_othr_buttons(num);
    }
}

function editData(n) {
    if (check === 0) {
        disable_othr_buttons(n);
        let tblbody_before_edit = document.getElementsByTagName("tbody")[0];
        stored_tblbody = tblbody_before_edit.cloneNode(true);
        let id = "cell" + n;
        let index;
        let ele = document.getElementsByClassName(id);
        for (index = 0; index < ele.length; index++) {
            ele[index].setAttribute("contenteditable", "true");
        }
        SwitchButton(n);
    } else {
        enable_othr_buttons(n);
        let id = "cell" + n;
        let index;
        let ele = document.getElementsByClassName(id);
        for (index = 0; index < ele.length; index++) {
            ele[index].setAttribute("contenteditable", "false");
        }
        SwitchButton(n);
    }
}

function SwitchButton(b) {
    id_edit = "edit" + b;
    id_delete = "delete" + b;
    if (check === 0) {
        //change to save and cancel
        check = 1;
        document.getElementById(id_edit).innerHTML = "save";
        document.getElementById(id_delete).innerHTML = "cancel";
    } else {
        check = 0;
        document.getElementById(id_delete).innerHTML = "delete data";
        document.getElementById(id_edit).innerHTML = "edit data";
    }
}

function disable_othr_buttons(num) {
    for (let i = 0; i < datalen; i++) {
        if (deleted_row[i] === true || i === num) {
            continue;
        }
        document.getElementById("edit" + i).disabled = true;
        document.getElementById("delete" + i).disabled = true;
    }
}

function enable_othr_buttons(num) {
    for (let i = 0; i < datalen; i++) {
        if (deleted_row[i] === true || i === num) {
            continue;
        }
        document.getElementById("edit" + i).disabled = false;
        document.getElementById("delete" + i).disabled = false;
    }
}