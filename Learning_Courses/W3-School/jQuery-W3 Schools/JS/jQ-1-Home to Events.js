alert("Linked");

//HOME

// 1. Home-Practice
$(document).ready(function(){
    $(".paragrph-hide").click(function(){
        $(this).hide(); //click or dblclick function
    });
});

// GET STARTED

// 1. Button Hide
$(function(){
    $(".button-click").click(function(){
        $(".button-hide").hide("slow");
    });
});

// EVENT

//1. Mouse Functions
$(document).ready(function(){
    $(".mouseenterandleave").mouseenter(function(){
        //mouseenter or mouseleave, mousedown, mouseup, hover
        alert("Mouse Entered");
    });
});

//2. Focus and Blur
/*
$(function(){
    $(".input1").focus(function(){
        $(this).css("background-color","red");
    });
    $(".input1").blur(function(){
        $(this).css("background-color","Green");   
    });
});
*/

//2.Focus and Blur with on functions
$(function(){
    $(".input1").on({
        focus:function(){
            $(this).css("background-color","red");
        },
        blur:function(){
            $(this).css("background-color","Green");             
        }
    })
});

// 3. Multifunctions
$(document).ready(function(){
    $(".multifunctions").on({
        mouseenter:function(){
            $(this).css("color","red");
        },
        mouseleave:function(){
            $(this).css("color","blue");
        },
        click:function(){
            $(this).css("color","green");
        }
    });
});