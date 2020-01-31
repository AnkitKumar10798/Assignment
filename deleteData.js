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