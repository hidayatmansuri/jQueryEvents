//waits until page is loaded first
$(document).ready(function(){

    //applies colour red to paragraphs when clicked on 
    /*$("p").click(function(){
        $("p").addClass("highlight_text");
    });

    //will add lightblue to h2 elements
    $("h2").hover(function(){
        $("h2").addClass( "h2_color");   
    });*/

    /*
    this will apply larger font size to the active h2 element 
    by adding the h2_font_size class but 
    not the other h2 elements by removing class h2_font_size from them
    */
    /*$("#btn").mouseenter(function(){
        //$(".card_image").fadeTo(500, 0.5);
        $("#btn").addClass('makeBorder').removeClass('makeRed');
        /*$("#btn2").hide('slow');
        $("#btn3").hide('medium');
        $("#btn4").hide('fast');
        $("#btn5").hide(500);*//*
    });
    
    $("#btn").mouseleave(function(){
        //$(".card_image").fadeTo(500, 1);
        $("#btn").removeClass('makeBorder').addClass('makeRed');
    });*/
    
    /*$("#btn").click(function(){
       $("p").hide(1000);
    });
    
    $("#btn").click(function(){
       $("p").show(1000);
    });*/
    
    $("#btn1").click(function(){
       $(".card_image").fadeIn(1000);
    });
    
    $("#btn1").click(function(){
       $(".card_image").fadeOut(1000);
    });
    
    $("p").click(function(){
        $(this).children("a").css("background-color", 'yellow');
    });
    
    /*$("button").click(function(){
       $(this).prev();
       var para = $("#btn").last();
       para.prev().slideToggle('slow');
    });*/
    
    $("button").click(function(){
       $(this).prev().slideToggle('slow');
    });
    
    /*$(".card_image").click(function(){
        //$(this).next().children("p").slideDown();
        $(this).next().children("p").slideToggle(300);
        //$(this).siblings("p").slideDown();
        $(this).siblings("p").slideToggle(300);
        
    });*/
    $(".card").click(function(){
        //$(this).next().children("p").slideUp();
        $(this).toggleClass("highlight");
        //$(this).css('background-color', '#EB5255');
        //$(this).siblings("p").slideUp();
        //$(this).children("p").slideUp();
        
    });
    
    $("#select").click(function(){
        $(".card:not(.highlight)").hide();
    });
    
    $("#all").click(function(){
        $(".card").removeClass("highlight").show();
    });
    /*$("#hr_mysql").hover(function(){
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").addClass("h2_font_size");
    });

    $("#hr_python").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_python").addClass("h2_font_size");
    });

    $("#hr_jquery").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_jquery").addClass("h2_font_size");
    });

    $("#hr_django").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_django").addClass("h2_font_size");
    });

    $("#hr_css").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_css").addClass("h2_font_size");
    });

    //applies colour black to body background when mouse enters over buttons
    $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black"); 
    });

    //applies colour grey to body background when mouse leaves buttons
    $(".bottom_button").mouseleave(function(){
        $("body").css( "background-color", "#eee"); 
    });*/
});