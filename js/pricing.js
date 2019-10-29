$(document).ready(function () {
    var count = 0;
    //console.log(classList.length);
    $('.check-box').click(function () {
        count = (count + 1) % 2;
        if (count % 2 != 0) {
            $('.label-left').addClass('text--grey');
            $('.label-right').addClass('primary-color');
            $('.check-box__circle').addClass('check-box__circle--right');
            $('.box-price__monney').each(function () {
                var number = (this).getAttribute('data-target');
                $(this).html(number - 10);
            })
        }
        else {
            $('.label-left').removeClass('text--grey');
            $('.label-right').removeClass('primary-color');
            $('.check-box__circle').removeClass('check-box__circle--right');
            $('.box-price__monney').each(function () {
                var number = (this).getAttribute('data-target');
                //console.log(number);
                $(this).html(number);
            })
        }
    })
})

$('.card').click(function () {
    $(this).on('show.bs.collapse', function () {
        $(this).addClass('question-shadow');
        $(this).siblings().removeClass('question-shadow');
        $(this).children().find('.card-question__icon').removeClass('fa-plus').addClass('fa-minus');
        $(this).click(function () {
            $(this).removeClass('question-shadow');
            $(this).children().find('.card-question__icon').removeClass('fa-minus').addClass('fa-plus');
        })
    })
})

