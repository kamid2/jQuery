$(document).ready(function(){
    $(".preview").hover(function(){
        $("#image").css("background-image", "url(" + $(this).attr('src')+")");
        $("#image").html($(this).attr('alt'));
    }, function(){        
        $("#image").css("background-image", "url('')");
        $("#image").text("Hover over an image below.");
    });
    $(".preview").focus(function(){
        $("#image").css("background-image", "url(" + $(this).attr('src'));
        $("#image").html($(this).attr('alt'));
    });
    $(".preview").blur(function(){
        $("#image").css("background-image", "url('')");
        $("#image").text("Hover over an image below.");
    });
});
