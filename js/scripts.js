$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });

    var popupImgWidth;
    var popupImgHeight;

    // -------------------------

    // var miniaturesCount = $(".img-box").length - 1;

    // var miniatureIndex;

    // var miniatureWidth;
    // var miniatureHeight;

    // var miniatureWidthImg;
    // var miniatureHeightImg;

    // -------------------------

    $(".shape-box").css({"left" : $(".main-content").offset().left + 574 + "px"});

    $(".gallery-scroll-box").css({"max-height" : ( ( $(window).height() * .9 ) - $(".gallery-header").outerHeight(true) - $(".gallery-box-btns").outerHeight(true) - $(".close-galery-resp-box").outerHeight(true) )  + "px"});

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ---------------------------------------------------------------------------------

        $(".gallery-box").css({"top" : ( $(window).height() - $(".gallery-box").outerHeight(true) ) / 2 + "px" });

        // ---------------------------------------------------------------------------------

        $(".resp-menu-box").height(  $(window).height() - $(".resp-menu-top-row").outerHeight(true) - parseInt( $(".resp-menu-box").css("padding-top") ) - parseInt( $(".resp-menu-box").css("padding-bottom") ) - $(".header").outerHeight(true) - 20 );

        $(".resp-menu-sect").css({"top" : $(".header").outerHeight(true) + "px"});

        // ---------------------------------------------------------------------------------

        getSlideImgSize();

        // getMiniatureSize();

        // ----------------------------------------------------------------------------------

        $(".shape-box").css({"left" : $(".main-content").offset().left + 574 + "px"});

        // ----------------------------------------------------------------------------------

        $(".gallery-scroll-box").css({"max-height" : ( ( $(window).height() * .9 ) - $(".gallery-header").outerHeight(true) - $(".gallery-box-btns").outerHeight(true) - $(".close-galery-resp-box").outerHeight(true) )  + "px"});

    });

    // --------------------------------------------------------------------------------------

    $(function() {

        $(".respmenubtn").click(function() {

            if( $(".resp-menu-sect").is(":hidden") ) {

                $(".respmenubtn-box").addClass("active");

                $(".header").addClass("resp");

                $(".resp-menu-sect").fadeIn(300);

                $(".resp-menu-box").height(  $(window).height() - $(".resp-menu-top-row").outerHeight(true) - parseInt( $(".resp-menu-box").css("padding-top") ) - parseInt( $(".resp-menu-box").css("padding-bottom") ) - $(".header").outerHeight(true) - 20 );

                $(".resp-menu-sect").css({"top" : $(".header").outerHeight(true) + "px"})

            } else if( $(".resp-menu-sect").is(":visible") ) {

                $(".respmenubtn-box").removeClass("active");

                $(".header").removeClass("resp");

                $(".resp-menu-sect").fadeOut(300);

            }

        });

    });

    // --------------------------------------------------------------------------------------

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

        $(".gallery-bg, .close-gallery, .close-gallery-btn").click(function() {

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

    $(function() {

        $(".count-goods").each(function() {

            if( $(this).val() == "" ) {

                $(this).val(0);

            }

        });

        $(".count-goods-box button").click(function() {

            countElementsInputIndex = $(this).parent(".count-goods-box").index(".count-goods-box");

            countElementsVal = $(".count-goods-box:eq("+ countElementsInputIndex +") .count-goods").val();

            if( $(this).hasClass("minus-btn") && countElementsVal > 0 ) {

                countElementsVal--;

            } else if( $(this).hasClass("plus-btn") ) {

                countElementsVal++;

            }

            $(".count-goods-box:eq("+ countElementsInputIndex +") .count-goods").val(countElementsVal);

        });

    });

    // ----------------------------------------------------------------

        $(function() {

            $(".scroll-down").click(function () {

                $("body,html").animate({

                    scrollTop: $("#scroll_down_anchor").offset().top

                }, 1000);

                return false;

            });

        });

    // --------------------------------------------------------------------------------------


    $(function() {

        $(".adress-map-btn").click(function() {

            $(".map-box").addClass("show");          

            setTimeout(function() {                

                $(".map-box").animate({"opacity" : 1}, 300);

            }, 300);

        });

        $(".close-map").click(function() {

            $(".map-box").animate({"opacity" : 0}, 300);

            setTimeout(function() {

                $(".map-box").removeClass("show");

            }, 300);

        });        

    });

    // ---------------------------------------------------------------------------------------

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

    // ---------------------------------------------------------------------------------------

    // function getMiniatureSize() {

    //     miniaturesCount = $(".img-box").length - 1;

    //     // var miniatureIndex;

    //     // var miniatureWidth;
    //     // var miniatureHeight;

    //     // var miniatureWidthImg;
    //     // var miniatureHeightImg;

    //     // console.log(miniaturesCount);

    //     for( miniatureIndex = 0; miniatureIndex <= miniaturesCount; miniatureIndex++ ) {

    //         miniatureWidth = $(".img-box:eq("+ miniatureIndex  +")").width();

    //         miniatureHeight = $(".img-box:eq("+ miniatureIndex  +")").outerHeight(true);

    //         miniatureWidthImg = $(".img-box:eq("+ miniatureIndex  +") img").width();

    //         miniatureHeightImg = $(".img-box:eq("+ miniatureIndex  +") img").outerHeight(true);

    //         if( miniatureHeightImg < miniatureHeight || miniatureWidthImg < miniatureWidth ) {

    //             $(".img-box:eq("+ miniatureIndex  +") img").css({
    //                 "min-width" : miniatureWidth + "px",
    //                 "min-height" : miniatureHeight + "px"
    //             });

    //         } else if( miniatureHeightImg > miniatureHeight && miniatureWidthImg < miniatureWidth ) {

    //             $(".img-box:eq("+ miniatureIndex  +") img").css({
    //                 "width" : miniatureWidth + "px",
    //                 "height" : "auto"
    //             });

    //         } else if( miniatureHeightImg < miniatureHeight && miniatureWidthImg > miniatureWidth ) {

    //             $(".img-box:eq("+ miniatureIndex  +") img").css({
    //                 "width" : "auto",
    //                 "height" : miniatureHeight + "px"
    //             });

    //         } else if( miniatureHeightImg > miniatureHeight && miniatureWidthImg > miniatureWidth ) {

    //             $(".img-box:eq("+ miniatureIndex  +") img").css({
    //                 "width" : "auto",
    //                 "height" : miniatureHeight + "px"
    //             });

    //         }

    //     }


    // }

});
