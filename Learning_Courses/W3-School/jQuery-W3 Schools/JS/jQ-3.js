alert("Linked");

// GET
$(function(){
    // Value function
    $(".get1").click(function(){
        alert("Your name is "+ $(".value").val());
    });
    // attr function
    $(".button1").click(function(){
        alert($("a").attr("href"));
    });
});

// SET
$(function(){
    // Text Function
    $(".button2").click(function(){
        $(".para").text("TamizhaCrew's") // .html also use !
    });
    // Return function
    $(".button3").click(function(){
        $(".return").text(function(i,origText){ //.html also use
            return "New Text : "+i+" Old text :"+origText;
        });
    });
    // attr value Change
    // $(".alink").attr("href","https://www.w3schools.com/jquery/jquery_dom_set.asp")
    
    // Anothetr Method
    $(".alink").attr({
        "href":"https://www.w3schools.com/jquery/jquery_dom_set.asp",
        "title":"Tamizha",
    });
    // attr Link Alternate
    $(".link3").click(function(){
        $(".blink").attr("href",function(i,origText){
            return origText+"/jquery/jquery_dom_set.asp";
        });
    });
});

// ADD
function button(){
    var txt1 = "<p>HTML</p>";               // Create element with HTML 
    var txt2 = $("<p></p>").text("jQ");   // Create with jQuery
    var txt3 = document.createElement("p");  // Create with DOM
    txt3.innerHTML = "DOM";
    $(".buttonapend").after(txt1, txt2, txt3);      // Append the new elements
}
// REMOVE AND EMPTY
$(function(){
    $(".divclassbutton").click(function(){
        // $(".divclass").remove();
        $(".divclass").remove();
    });
    $(".divclassbuttonback").click(function(){
        $(".divclass").empty();
    });
});

// ADD-CLASS
$(".addclass").addClass("class1")
$("p").removeClass("addclass")

// ADD CSS (SINGLE)
$(".cssclass").css("color","red")

// ADD CSS (MULTI)
$(".multiclass").css({
    "font-family":"monospace",
    "color":"red",
});





