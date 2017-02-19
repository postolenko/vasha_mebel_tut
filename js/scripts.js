$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ---------------------------------------------------------------------------------

        $(".gallery-box").css({"top" : ( $(window).height() - $(".gallery-box").outerHeight(true) ) / 2 + "px" });

        // ---------------------------------------------------------------------------------

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });

    // --------------------------------------------------------------------------------------

    $(".gallery-box").css({"top" : ( $(window).height() - $(".gallery-box").outerHeight(true) ) / 2 + "px" });

    // --------------------------------------------------------------------------------------

    $(function() {

        $(".gallery-bg, .close-gallery").click(function() {

            $(".gallery-sect").fadeOut(300);

        });

    });

});
