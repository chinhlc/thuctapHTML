
$(document).ready(function () {
    $('.menu-parent__link').click(function () {
        //console.log('true');
        var number = (this).getAttribute('data-number');
        //console.log(number);
        switch(number) {
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
        //changePage(this, '.change-page')
        //smoothScroll('#product')
        $(this).siblings().removeClass('change-page');
        $(this).addClass('change-page');
        //styleClick(this,'.change-page')
    })
    //var pos = $('#checkout').position();
    //console.log(pos.top);
})
/*function smoothScrollFirst(e) {
    $('html, body').animate({
        scrollTop: $(e).offset().top-130
    }, 1000);
}*/