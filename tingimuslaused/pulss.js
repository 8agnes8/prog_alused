
let vanus = prompt("Sisestage oma vanus");
let sugu = prompt("Sisestage oma sugu (M või m) või (N või n)");
let treening = prompt("Sisestage treeningutüüp (1, 2 või 3)");

let maxPulsssagedus;
if(sugu === "M" || sugu === "m") {
    maxPulsssagedus = 220 - vanus;
}

if(sugu === "N" || sugu === "n") {
    maxPulsssagedus = 206 - vanus * 0.88;
}

let maxPulss;

let minPulss;

if(treening == 1) {
    minPulss = maxPulsssagedus * 0.5;
    maxPulss = maxPulsssagedus * 0.7;
}

else if (treening == 2) {
    minPulss = maxPulsssagedus * 0.7;

    maxPulss = maxPulsssagedus * 0.8;

}
else if (treening == 3) {
    minPulss = maxPulsssagedus * 0.8;
    maxPulss = maxPulsssagedus * 0.87;
}

Math.round(minPulss)
Math.round(maxPulss)

console.log("Pulsisagedus peaks olema vahemikus " + minPulss + " ja " + maxPulss);


