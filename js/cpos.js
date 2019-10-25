
$(document).ready(function () {
    var scrollLink = $('.scroll');
    //console.log(scrollLink);
    //if click nav call function to scroll
    $('.menu-parent__link').click(function () {
        var number = (this).getAttribute('data-number');
        switch (number) {
            case "1": smoothScroll('#product', 130);
                break;
            case "2": smoothScroll('#checkout', 50);
                break;
            case "3": smoothScroll('#payment', 50);
                break;
            case "4": smoothScroll('#customer', 50);
                break;
            case "5": smoothScroll('#report', 50);
                break;
            case "6": smoothScroll('#store', 50);
                break;
        }
        //change css if click 
        $(this).siblings().removeClass('change-page');
        $(this).addClass('change-page');
    })
    // show form
    $('.cpos-banner__button').click(function () {
        $(".request-demo").fadeIn(500);
    })
    //hide form
    $('.icon-close').click(function () {
        $(".request-demo").fadeOut("fast");
        //console.log("true");
    })
    $(window).scroll(function () {
        //console.log("true");
        var scrollPos = $(this).scrollTop();
        //console.log(scrollPos)
        scrollLink.each(function () {
            var currentPos = $(this.hash).offset().top - 50;
            //console.log(currentPos);
            //$(this).parent().siblings().removeClass('change-page');
            //$(this).parent().addClass('change-page');
            //$(this).parent().siblings().removeClass('change-page');
            if (currentPos < scrollPos) {
                /*$(this).css(
                    "color", "red"
                )*/
                $(this).parent().siblings().removeClass('change-page');
                $(this).parent().addClass('change-page');
            }

        })
    })
})
