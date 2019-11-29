$(document).ready(function(){
    var listaBombe = [];
    while (listaBombe.length < 15){
        var bombaCreata = generaBombe(0, 64);
        if (!listaBombe.includes(bombaCreata)){
            listaBombe.push(bombaCreata);
        }
    }
    console.log(listaBombe);
    function generaBombe(min, max) {
      return Math.floor(Math.random() * (max - min) ) + min;
    }


    for (var i = 0; i < 64; i++) {
        // var bomba = listaBombe[i];
        if (listaBombe.includes(i) ) {
            $(".container").append('<div class="quadrato rosso"></div>');
        } else {
            $(".container").append('<div class="quadrato verde"></div>');
        }
    }
    var bombeRimaste = 15;
    $(".quadrato").click(function(){

        $(this).addClass("active")
        if ($(this).hasClass("rosso") && bombeRimaste > 0){
            bombeRimaste=bombeRimaste-1;
        }
    })

    if (bombeRimaste > 0 ) {
        document.getElementById('rossi_trovati').innerHTML = bombeRimaste;
    } else {
        document.getElementById('rossi_trovati').innerHTML = "Hai vinto";
    }


})
