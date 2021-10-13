alert("Linked");

$(function(){
    $(".get1").click(function(){
        alert("Your name is "+ $(".value").val());
    });
    $(".button2").click(function(){
        $(".para").text("TamizhaCrew's")
    });
});