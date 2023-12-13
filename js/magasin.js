
var prixUnitaires = [1200,2500,2300,1800,1900,1800,1500,1750,2100,2000,1000,1900];
function formatMoney(amount, decimalCount = 2, decimal = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
      return  (j ? i.substr(0, j) + ' ' : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + ' ') + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
    }
}
function formatMoney2(amount, decimalCount = 0, decimal = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
      return  (j ? i.substr(0, j) + ' ' : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + ' ') + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
    }
}

function changeQuantité( reference ) {
    var quantite = document.getElementById("quantite_" + reference).value;
	var multi = document.getElementById("multi").value;
	var quantite2 = quantite * multi; 
	var rabais = prixUnitaires[reference] - quantite2 * 0.001;

    if (quantite > 1000000) {
		quantite = 1000000	
		document.getElementById("quantite_" + reference).innerHTML = quantite;
	}
    if (quantite != Math.floor(quantite)) {
		quantite = Math.floor(quantite);
    }
	if (multi > 100) {
		multi = 100	
		document.getElementById(multi).innerHTML = multi;
	}
    if (multi != Math.floor(multi)) {
		multi = Math.floor(multi);
    }
    document.getElementById("commandeQuantite_" + reference).innerHTML = formatMoney2(quantite * multi);
    document.getElementById("commandePrixReference_" + reference).innerHTML = formatMoney(quantite * rabais * multi);
}

function affichePrix() {
    for (reference=0 ; reference < prixUnitaires.length ; reference ++) {
        document.getElementById("commandePrixReference_" + reference).innerHTML = formatMoney(0);
        document.getElementById("prixUnitaireReference_" + reference).innerHTML = formatMoney(prixUnitaires[reference]);
        document.getElementById("commandePrixUnitaireReference_" + reference).innerHTML = formatMoney(prixUnitaires[reference]);
    }
}

window.transitionPages = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}
document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})