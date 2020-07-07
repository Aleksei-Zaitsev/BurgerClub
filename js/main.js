$(document).ready(() => {
    $('.category').click((e) => {
        let currentElem = $(e.target);
        $('.products-container').hide();
        let id = currentElem.data('id');
        $('#' + id).show();

        $('.category').removeClass('active');
        currentElem.addClass('active');

        $('#' + id + ' .products').slick('refresh');
        $('#' + id + ' .products-nav').slick('refresh');

    });

    $('#burgers-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#burgers-container .products-nav'
    });

    $('#burgers-container .products-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        asNavFor: '#burgers-container .products',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false
    });

    $('#sauce-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#sauce-container .products-nav'
    });

    $('#sauce-container .products-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '#sauce-container .products',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false
    });

    $('#fries-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#fries-container .products-nav'
    });

    $('#fries-container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#fries-container .products',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false
    });
    $('#drinks-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#drinks-container .products-nav'
    });

    $('#drinks-container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#drinks-container .products',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false
    });
    $('#reviews').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });

    $('.open-modal').click(() => {
        $('#reservation-container').css('display', 'flex');
    });

    $('#reservation-cancel-close, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
            $('#reservation-container').css('display', 'none');
        };
    });

    $('#reserve-button > button').click(() => {
        let name = $('#name');
        let count = $('#count');
        let time = $('#time');
        let phone = $('#phone');
        $('#reservation-error').hide();

        if (name.val() && count.val() && time.val() && phone.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&count=' + count.val() + '&phone=' + phone.val() + '&time=' + time.val(),
                success: () => {
                    $('#reservation-sent').show();
                    $('#reservation-content').hide();
                },
                error: () => {
                    $('#reservation-error').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            })

        } else {
            $('#reservation-error').show();
        }
    });
    $("#about-us-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#description").offset().top
        }, 2000);
    });
    $("#features-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#features").offset().top
        }, 2000);
    });
    $("#main-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#titles").offset().top
        }, 2000);
    });
    $("#stock-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#stock").offset().top
        }, 2000);
    });
    $("#address-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#address").offset().top
        }, 2000);
    });
})