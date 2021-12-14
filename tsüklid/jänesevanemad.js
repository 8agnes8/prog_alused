
let ringid = prompt("Sisesta ringide arv:");
let porgandid = 0;

let ring = 1;

while(ring <= ringid) {
    if(ring % 2 === 0) {
        porgandid = porgandid + ring;
    }

    ring++;
    }


console.log("Porgandeid kokku on " + porgandid)