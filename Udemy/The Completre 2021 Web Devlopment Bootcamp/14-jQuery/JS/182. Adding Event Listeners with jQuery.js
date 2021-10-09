alert("Linked");

//Click Function
$("h1").click(function(){
    $("h1").css("color","Red");
});

// Key Press and Console Log
$("input").keypress(function(event){
    console.log(event.key);
});

// Key Press and Style
$("input").keypress(function(event){
    $("h1").text(event.key);
});