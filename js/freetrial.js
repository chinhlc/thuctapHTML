$(document).ready(function () {
    $('.free-trial__step-one .type-list .type-item').click(function () {
        showStep('.free-trial__step-two')
        $('.free-trial__step-one').css("padding-bottom", "0");
        smoothScroll('.free-trial__step-two');
        var animalType = $('.type-item').getAttribute("data-type");
        console.log(animalType);
    });

    $('.free-trial__step-two .type-list .type-item').click(function () {
        showStep('.free-trial__step-three')
        $('.free-trial__step-two').css("padding-bottom", "0");
        smoothScroll('.free-trial__step-three')
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
