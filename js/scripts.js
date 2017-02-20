$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });

    var popupImgWidth;
    var popupImgHeight;


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ---------------------------------------------------------------------------------

        $(".gallery-box").css({"top" : ( $(window).height() - $(".gallery-box").outerHeight(true) ) / 2 + "px" });

        // ---------------------------------------------------------------------------------

        getSlideImgSize();

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });

    // --------------------------------------------------------------------------------------

    $(".gallery-box").css({"top" : ( $(window).height() - $(".gallery-box").outerHeight(true) ) / 2 + "px" });

    // --------------------------------------------------------------------------------------

    $(function() {

        var indexProductSlider;
        var srcActiveImg;

        $(".show-big-photo").click(function() {

            indexProductSlider = $(this).index(".show-big-photo");

            srcActiveImg = $(".big_photo_slider:eq("+ indexProductSlider  +") li:visible img").attr("src");

            $(".product-slide-popup").fadeIn(300);

            $(".product-slide-popup img").attr("src", srcActiveImg);

            getSlideImgSize();            

        });

        $(".close-product-popup, .popup-bg").click(function() {

            $(".product-slide-popup").fadeOut(300);

        });

    });

    // --------------------------------------------------------------------------------------

    $(function() {

        $(".gallery-bg, .close-gallery").click(function() {

            $(".gallery-sect").fadeOut(300);

        });

    });

    // --------------------------------------------------------------------------------------

    $(function() {

        $(".img-material-box").click(function() {

            $(this).prev("input").click();

        });

    });

    // --------------------------------------------------------------------------------------

    $(function() {

        var materialsIndex;

        var materialsHeight;

        $(".material-hide").click( function() {

            materialsIndex = $(".material-hide").index(this);

            materialsHeight = $(".materials:eq("+ materialsIndex +")").outerHeight(true);

            if( $(".materials-wrapp:eq("+ materialsIndex +")").height() <= 0 ) {

                $(this).removeClass("hide");

                $(".materials-wrapp:eq("+ materialsIndex +")").removeClass("hide");

                $(".materials-wrapp:eq("+ materialsIndex +")").animate({"height" : materialsHeight  + "px"}, 300);

            } else {

                $(this).addClass("hide");

                $(".materials-wrapp:eq("+ materialsIndex +")").addClass("hide");

                $(".materials-wrapp:eq("+ materialsIndex +")").animate({"height" : 0 + "px"}, 300);

            }

        });

    });

    // --------------------------------------------------------------------------------------

    function getSlideImgSize() {

        if( $(".popup-img").is(":visible") ) {

            popupImgWidth = $(".popup-img").width();

            popupImgHeight = $(".popup-img").height();

            if( popupImgWidth > $(window).width() * .9 || popupImgHeight > $(window).height() * .9 ) {

                $(".popup-img").css({

                    "max-width" : 90 + "%",
                    "max-height" : 90 + "%",
                    "min-width": "auto",
                    "min-height": "auto"

                });

            }
            // else if ( popupImgWidth < $(window).width() * .9 || popupImgHeight < $(window).height() * .9 ) {

            //     $(".popup-img").css({

            //         "max-width" : "auto",
            //         "max-height" : "auto",
            //         "min-width": 70 + "%",
            //         "min-height": 70 + "%"

            //     });

            // }

        }

    }

});
