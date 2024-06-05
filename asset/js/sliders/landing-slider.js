// Partners slider implement
$(document).ready(function() {
    const slider = $('#partners-slider');

    slider.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        arrows: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    })

    // Features slider implement
    const features = $('#features-slider');

    features.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        arrows: false,
        dots: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 420,
                settings: {
                    centerMode: false,
                }
            },
        ],
    })

    const bsContainerWidth = document.querySelector('.container').offsetWidth;
    const myScreenWidth = document.body.offsetWidth;
    const featuresContainerMarginLeft = (myScreenWidth - bsContainerWidth) / 2;

    document.querySelector('#features-container .slick-dots').style.marginLeft = - featuresContainerMarginLeft + 'px'

    document.getElementById('features-container').style.width = bsContainerWidth + featuresContainerMarginLeft + 'px'

    document.querySelectorAll('#features-container .slick-dots li button').forEach(elm => elm.innerHTML = ``)
})