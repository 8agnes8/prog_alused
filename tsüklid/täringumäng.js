

let soovitud_kord = prompt("Palun sisesta täringute arv");

let kord = 1;

while (kord <= soovitud_kord) {

    let taring = Math.floor(Math.random() *6) + 1;
    kord += 1;
    console.log(taring);
  }