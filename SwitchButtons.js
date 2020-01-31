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
