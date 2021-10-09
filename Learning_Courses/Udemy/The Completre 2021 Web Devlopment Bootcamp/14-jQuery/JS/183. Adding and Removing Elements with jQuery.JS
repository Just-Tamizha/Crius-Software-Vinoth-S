alert("Linked");
$("h1").before("<button>Before Button</button>");
$("h1").prepend("<button>Prepend Button</button>");
$("h1").append("<button>Append Button</button>");
$("h1").after("<button>After Button</button>");

// Note : 184. Website Animations with jQuery
$(".tag2").click(function(){
    $(".tag1").hide();
});
//FUNCTIONS
/* hide Or toggle,fadeIn,fadeOut,fadeToggle,
slideUp.slideDown,slideToggle*/
$(".tag4").click(function(){
    $(".tag3").animate({opacity :0.5});
    $(".tag3").animate({margin :50});
});
