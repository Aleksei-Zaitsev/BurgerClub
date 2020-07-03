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
})