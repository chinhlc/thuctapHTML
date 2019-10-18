$(document).ready(function () {
    $('.free-trial__step-one .type-list .type-item').click(function () {
        $('.free-trial__step-two').show();
        $('.free-trial__step-one').css("padding-bottom","0");
    });

    $('.free-trial__step-two .type-list .type-item').click(function () {
        $('.free-trial__step-three').show();
        $('.free-trial__step-two').css("padding-bottom","0");
    });

})