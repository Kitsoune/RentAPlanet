window.transitionPages = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}
document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})

var img = new Array("img/Blue World.png","img/Junglemoon.png","img/Dikasjout-Duhu Aoss.png","img/Eliend III.png","img/Exbolis.png","img/Ichunah Uver.png","img/Ichunah Uver2.png","img/imsby XV.png","img/Kushimasho.png","img/Oria V2.png","img/Rybunoyerra.png","img/Rybunoyerra2.png","img/Stburg XIX.png","img/Venom Prime.png");
var numero = 0;

function ChangerImg(sens) {
    numero = numero + sens;
    for (let numero; numero > img.length; numero++) 
        numero = 0;
	document.getElementById("img").src = img[numero];
}