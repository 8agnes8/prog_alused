function promptUser() {

    let punktidInput = window.prompt("Sisesta ainepunktide arv");
    let nadaladInput = window.prompt("Sisesta nädalate arv");

    let ainepunktid = parseInt(punktidInput);
    let nadalad = parseInt(nadaladInput);


    let result;
    if (Number.isInteger(ainepunktid) && Number.isInteger(nadalad)) {
        let ajakulu = Math.trunc((ainepunktid * 26) / nadalad);
        result = "Ajakulu " + ajakulu + " tundi nädalas. ";
    }
    console.log(result);
}
    window.onload = function() {
    this.promptUser();
}