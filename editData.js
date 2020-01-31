
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