alert("Linked");

// HIDE AND SHOW
$(function(){
    $(".button1").click(function(){
        $(".para1").hide();
        $(".para2").hide(1000);

    });
    $(".button2").click(function(){
        $(".para1").show();
        $(".para2").show(1000);

    });

    // TOGGLE BUTTON
    $(".toggle").click(function(){
        $(".togglepara").toggle();
    });
});

//FADE
$(function(){
    $(".fade").click(function(){
        $(".fade1").fadeOut();
        $(".fade2").fadeOut("slow");
        $(".fade3").fadeOut(2000);
        $(".fade4").fadeTo("slow",0.3);
        //fade or fadeout,fadein,fadetoggle,fadeTo,opacity
    });
});