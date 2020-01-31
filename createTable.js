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