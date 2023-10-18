$(function () {

    var mixer = mixitup('.direction__list');

    
    $('.direction__filter-btn').on('click', function () {
        $('.direction__filter-btn').removeClass('direction__filter-btn--active')
        $(this).addClass('direction__filter-btn--active')
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 3,
        infinite: true,
        appendArrows: $('.team__slider-arrows'),
    })
    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })
    $('.testimonials__slider').slick({
        arrows:false,
        dots:true,
        appendDots:$('.testimonials__dots'),
    })
    $('.testimonials__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })
})

$('.learn__acco-link').on('click', function(e){
    e.preventDefault()
    if ($(this).hasClass('learn__acco-link--active')) {
        $(this).removeClass('learn__acco-link--active')
        $(this).children('.learn__acco-text').slideUp()
        stopImmediatePropagation()
    }   
    $('.learn__acco-link').removeClass('learn__acco-link--active')
    $('.learn__acco-text').slideUp()
    $(this).toggleClass('learn__acco-link--active')
    $(this).children('.learn__acco-text').slideDown()
})

