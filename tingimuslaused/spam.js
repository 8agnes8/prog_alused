
let suurus = prompt("Sisestage kirja suurus:");
let teema = prompt("Sisestage kirja teema:");
let fail = prompt("Kas kirjaga on kaasas fail? (jah, ei)");
if (teema !== "") {
    if (suurus > 1) {
        if (fail === "jah") {
            console.log("Kiri on spämm.")
        }
        else {
            console.log("Kiri ei ole spämm.")
        }
    }
    else {
        console.log("Kiri ei ole spämm.")
    }
 }
else {
    console.log("Kiri on spämm.")
 }
