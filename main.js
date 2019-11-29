$(".quadrato").each(function(){
    $(this).click(function(){
        if ($(this).hasClass("colpito")) {
            $(this).addClass("rosso")
        } else {
            $(this).addClass("verde")
        }
    })
})
