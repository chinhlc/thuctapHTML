$(document).ready(function() {
    var numOfSlide = $(".slide-image").length; // tinh so slide
    var slidePos = 1; //vi tri cua slide
    for(var i = 0; i<numOfSlide; i++) {
        $(".slide-button").append('<button class="button--circle"></button>'); // tao ra so button bang so slide
    }
    
    $(".slide-image").hide(); // an tat ca cac slide
    $(".slide-image:first").show(); // chi hien slide dau
    $(".button--circle:first").css({'background-color':'#ffffff'});
    $(".button--circle").click(currentSlide); // hien slide tuong ung voi button
    //slide show
    setInterval(function() {
        nextSlide();
    },3000)
    // currentSlide function
    
    function currentSlide() {
        var indexButton = $(this).index() + 1; // xac dinh vi tri click button
        $(".slide-image").hide(); // an tat ca ca slide
        $('.slide-image:nth-child('+ indexButton + ')').fadeIn(); // chi hien slide tuong ung
        $(".button--circle").css({'background-color':'initial'}); // an mau cua  button
        $(this).css({'background-color':'#ffffff'}) // an mau cua  button duoc chon
        slidePos = indexButton;
    }
    // next slide function
    function nextSlide() {
        if(slidePos >= numOfSlide) {
            slidePos = 1; // neu vuot qua so luong slide reset lai
        }
        else {
            slidePos++; // khong thi chuyen slide tiep theo
        }
        $(".button--circle").css({'background-color':'initial'}); // an mau cua  button
        $('.button--circle:nth-child('+ slidePos +')').css({'background-color':'#ffffff'})// an mau cua  button duoc chon
        $(".slide-image").hide();
        $('.slide-image:nth-child('+ slidePos +')').fadeIn();
    }
})