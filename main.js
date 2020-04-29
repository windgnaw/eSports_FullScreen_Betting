$(document).ready(function() {
    $(".title").click(function() {
        $(".content").slideToggle("200ms");
        $(this).toggleClass("close");
        $('.icon').toggleClass('rotate');
    });


    $(".props").click(function() {
        $(".props").removeClass("active");
        $(this).addClass("active");
    });

    $(".teamA-btn").click(function() {
        $(".chips-float").show();
        $(".overlay").show();
        $(".popup1").show();
    });

    $(".teamB-btn").click(function() {
        $(".chips-float2").show();
        $(".overlay").show();
        $(".popup2").show();
    });

    $(".deal1").click(function() {
        $(".chips-float").hide();
        $(".overlay").hide();
        $(".popup1").hide();
        $(".demo").show();
        $(".props").removeClass("active");
    });
    $(".deal2").click(function() {
        $(".chips-float2").hide();
        $(".overlay").hide();
        $(".popup2").hide();
        $(".demo2").show();
        $(".props").removeClass("active");
    });
    $(".cancel").click(function() {
        $(".overlay").hide();
        $(".popup").hide();
        $(".chips-float").hide();
        $(".chips-float2").hide();
    });

});