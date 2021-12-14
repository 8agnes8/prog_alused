let poialpoisid = prompt("Mitu pöialpoissi tahab õunu? (0-7)");

console.log("Mitu pöialpoissi tahtis õunu " +poialpoisid);


let ounad_kokku = 14;

for (let i = 1; i <= poialpoisid; i++) {
    let ounad = Math.floor(Math.random() * 2) +1;
    ounad_kokku = ounad_kokku - ounad;

    console.log(i + ". pöialpoiss sai " + ounad);
  }


console.log("Lumivalgekesele jäi alles " + ounad_kokku + " õuna");