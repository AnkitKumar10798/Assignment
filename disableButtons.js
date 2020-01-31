
function disable_othr_buttons(num) {
    for (let i = 0; i < datalen; i++) {
        if (deleted_row[i] === true || i === num) {
            continue;
        }
        document.getElementById("edit" + i).disabled = true;
        document.getElementById("delete" + i).disabled = true;
    }
}
