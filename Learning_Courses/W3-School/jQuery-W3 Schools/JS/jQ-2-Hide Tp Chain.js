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

//ANIMATE
$(function(){
    $(".anibutton").click(function(){
        $(".divani").animate({
            left: '250px',
            opacity:'0.5',
            height:'150px',
            // height:'+=150px'
            // height:'toggle',
            width:'150px',
        });
    });
});

// USES QUEUE FUNCTIONALITY

$(function(){
    $(".button2").click(function(){
        var div=$(".div2");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
        $(".stop").click(function(){
            $(".div2").stop();
        });
    });
});


// CHAINING
$(function(){
    $(".button3").click(function(){
        $(".hide").css("color", "red").slideUp(2000).slideDown(2000);
    });
});
