var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome){
    $("#iframeAudio").remove()
    };
    $("button").click(function(){
    $("form").hide();
    $("button").hide();
    $("#change3").hide();
    $("#change4").hide();
    $("#contract").hide();
    $("#change2").text("You just signed your life away. Your precious life. You will spend all your time working for New Path. Time, the one thing you can never get back. You will die in a New Path jumpsuit working a job you hate surrounded by people you do not know. Sorry, next time read the fine print. Oh, wait, there is no next time.");
    $("#change1").text("Welcome to Hell");
    $("#change1").css("color","rgb(225, 225, 225)");
    $("#change1").css("font-size","15vw");
    $("#change2").css("color", "rgb(225, 225, 225)");
    $("#change2").css("font-size", "6vw");
    $("html, body").animate({scrollTop : 0},800);
    $("body").css("background-image", "url(images/rage_background.jpg)");
    $("audio").attr("src","sounds/rage_music.mp3");
    $("audio").trigger("play");
    });
