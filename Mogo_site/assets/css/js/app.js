$(function(){
    let introH = $('#intro').innerHeight();
    let header = $('#header');
    let scrollOffset = $(window).scrollTop();
    let nav = $('#nav');
    let navToggle = $('#nav-toggle');

    /*Fixed Header*/

    checkScrollOffset(scrollOffset);

    $(window).on('scroll', function(){
        let $this = $(this)
        scrollOffset = $this.scrollTop();
        
        checkScrollOffset(scrollOffset);
    })


    function checkScrollOffset(scrollOffset) {
        if(scrollOffset >= introH) {
            header.addClass('fixed')
        } else {
            header.removeClass('fixed');
        }
    }

    /*Smooth Scroll*/

    $('[data-scroll]').on('click', function(e) {
        e.preventDefault();

        let $this = $(this);
        let blockId = $this.data('scroll');
        let blockOffset = $(blockId).offset().top;
        
        $('html, body').animate({
            scrollTop: blockOffset,
        }, 500)
    })

    /*Nav menu toggle*/

    $('#nav-toggle').on('click', function(e) {
        e.preventDefault();

        nav.toggleClass('active');
        navToggle.toggleClass('active');
    })

    $('.nav__link').on('click', function(e) {
        e.preventDefault();
        nav.removeClass('active');
        navToggle.toggleClass('active');
    })

    /*Accordeon*/

    $('[data-collapse]').on('click', function(e) {
        e.preventDefault();
        let $this = $(this);
        $this.toggleClass('active');
    })

    /*Slider*/

    $('[data-slider]').slick({
        infinity: true,
        fade: true,
        slideToShow: 1,
        slideToScroll: 1,
      });
})