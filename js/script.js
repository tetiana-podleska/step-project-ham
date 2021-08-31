$(function () {
    $('ul.services-tabs').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')
            .closest('section.our-services')
            .find('div.services-tabs-item')
            .removeClass('active')
            .eq($(this).index())
            .addClass('active');
    });
});


$(function () {
    $('ul.amazing-tab-list').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')
            .closest('.section.our-amazing-work')
            .find('div.amazing-tabs-item')
            .removeClass('active')
            .eq($(this).index())
            .addClass('active')
    });
});

const $galleryArr = $('.amazing-tabs-item')
let $galleryMinArr = $galleryArr.slice(0, 12);

$('.amazing').on('click', function (e){
    e.preventDefault();

    if (e.target === document.querySelector('.load-link')){
        $galleryMinArr = $galleryArr
        $galleryMinArr.removeClass('hide')
        $('.load-btn').fadeOut();
    }
    if (e.target!== document.querySelector('.load-link')) {
        let filter = $('[data-filter]');
        filter.on('click', function () {
            let category = $(this).data('filter');
            if (category === 'all') {
                $galleryMinArr.removeClass('hide');
            }
            if (category !== 'all') {
                $galleryMinArr.each(function () {
                    let activeCategory = $(this).data('category');
                    if (activeCategory !== category) {
                        $(this).addClass('hide');
                    } else {
                        $(this).removeClass('hide');
                    }
                });
            }
        })
    }
})



// $('.amazing-tabs-item').slice(0, 12).show();
// $('.load-btn').on('click', function (e) {
//     e.preventDefault();
//     $('.amazing-tabs-item:hidden').slice(0, 12).show();
//     if($('.amazing-tabs-item:hidden').length === 0) {
//         $('.load-btn').fadeOut();
//     }
// });

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    variableHeight: true,
    useTransform: true
});

$('svg.prev').on('click', function () {
    $('.slider-nav').slick('prev');
});
$('svg.next').on('click', function () {
    $('.slider-nav').slick('next');
});