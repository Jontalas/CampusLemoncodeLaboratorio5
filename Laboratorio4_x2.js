var calculate = () => {
    var retorno = 0;
    var tarifa = 0;
    switch (document.getElementById("roomType").value) {
        case "roomType1":
            tarifa = 100;
            break;
        case "roomType2":
            tarifa = 120;
            break;
        case "roomType3":
            tarifa = 150;
            break;
    }
    if (document.getElementById("spaSelect").checked) {
        tarifa += 20;
    }
    switch (document.getElementById("roomSize").value) {
        case "roomSize1":
            tarifa *= 0.75;
            break;
        case "roomSize2":
            tarifa *= 1;
            break;
        case "roomSize3":
            tarifa *= 1.25;
            break;
    }
    var nights = getNights();
    var parking = getParking();
    retorno = tarifa * nights + parking * 10;
    document.getElementById("precio").innerText = "Precio: " + (Number(retorno)).toFixed(2) + "€";
}
var getNights = () => {
    if (Number(document.getElementById("nights").value) < 0) {
        document.getElementById("nights").value = 0;
    }
    if (document.getElementById("nights").value == "") {
        return 0;
    }
    return document.getElementById("nights").value;
}
var getParking = () => {
    if (Number(document.getElementById("parkingNights").value) < 0) {
        document.getElementById("parkingNights").value = 0;
    }
    if (document.getElementById("parkingNights").value == "") {
        return 0;
    }
    return document.getElementById("parkingNights").value;
}
var handleCalculation = event => calculate();
document.getElementById("roomType").addEventListener("change", handleCalculation);
document.getElementById("roomSize").addEventListener("change", handleCalculation);
document.getElementById("spaSelect").addEventListener("click", handleCalculation);
document.getElementById("nights").addEventListener("keyup", handleCalculation);
document.getElementById("parkingNights").addEventListener("keyup", handleCalculation);