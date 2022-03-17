$(document).ready(function() {
    $('#main-banner').slick({
        fade: true,
        dots: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: true,
    });

    $("#server-568e").select2();
    $("#server-zing").select2();
    $('#server-568e').select2().on('select2:open', function(e) {
        $('.select2-search__field').attr('placeholder', 'Nhập tên server');
    })
    $('#server-zing').select2().on('select2:open', function(e) {
        $('.select2-search__field').attr('placeholder', 'Nhập tên server');
    })


    $('.list-class li').click(function(e) {
        e.preventDefault();
        var theClass = this.className;
        if (parseInt($(`.${theClass} .info`).width()) != 238) {
            $(`.info`).animate({ width: 0 });
            $(`.${theClass} .info`).animate({ width: 238 });
        }
    });

    $('.chat_fb').click(function(e) {
        e.preventDefault();
        if ($('.component-fbmessenger .fb_iframe_widget').css('display') == 'block') {
            $('.component-fbmessenger .fb_iframe_widget').css('display', 'none');
            // $(this).animate({ height: 340px }, 200);
        } else {
            $('.component-fbmessenger .fb_iframe_widget').css('display', 'block');
        }
    });

    $('#open-left-menu').click(function(e) {
        e.preventDefault();
        if ($('#main-menu').css('display') == 'none') {
            $('#main-menu').css('display', 'block');
        } else {
            $('#main-menu').css('display', 'none');
        }
    });

    $('.header-news li > a').hover(function() {
        let elementTitleId = $($(this)).attr("id");
        let elementContentId = `content-${elementTitleId}`;
        if (!$(`#${elementTitleId}`).hasClass('header-news-active')) {
            $('.header-news a').removeClass('header-news-active');
            $(`#${elementTitleId}`).addClass('header-news-active');

            $('.main-content').attr('style', 'display:none');
            $(`#${elementContentId}`).attr('style', 'display:block');
        }
    }, function() {});

})

function onWantedBoard(element) {
    if (!$(`.${element}`).hasClass('active')) {
        $('.tabs li').removeClass('active');
        $('.rank').attr('style', 'display: none');
        $(`.${element}`).addClass('active');
        $(`#${element}`).attr('style', 'display: block');
    }
}
// Accordion Slide
(function($, d) {
    $('#class-list').liteAccordion({
        onTriggerSlide: function() {
            this.find('figcaption').fadeOut();
        },
        autoPlay: false,
    }).find('figcaption:first').show();
})(jQuery, document);