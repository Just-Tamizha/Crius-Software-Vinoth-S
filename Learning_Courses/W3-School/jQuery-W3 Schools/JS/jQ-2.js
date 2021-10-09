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