

function promptUser () {
    let alInput = window.prompt("Sisestage astme alus");
    let asInput = window.prompt("Sisestage astendaja");

    let alus = parseInt(alInput);
    let astendaja = parseInt(asInput);


    let result;
    if (Number.isInteger(alus) && Number.isInteger(astendaja)) {
        result = Math.pow(alus, astendaja);
    }

    console.log(result);
    }

    window.onload = function () {
    this.promptUser();
   }