$(document).ready(function () {
    // show step 2
    $('.free-trial__step-one .type-list .type-item').click(function () {
        showStep('.free-trial__step-two')
        $('.free-trial__step-one').css("padding-bottom", "0");
        smoothScroll('.free-trial__step-two'); // scroll to top step 2
        var type = (this).getAttribute('data-type');
        document.getElementById("business-type").value = type;
    });

    //show step 3
    $('.free-trial__step-two .type-list .type-item').click(function () {
        showStep('.free-trial__step-three')
        $('.free-trial__step-two').css("padding-bottom", "0");
        smoothScroll('.free-trial__step-three') // scroll to top step 3
        var number = (this).getAttribute('data-number');
        document.getElementById("num-store").value = number;
        //alert(number);
    });

})

function showStep(e) {
    $(e).show();
}
function smoothScroll(e) {
    $('html, body').animate({
        scrollTop: $(e).offset().top
    }, 800);
}
