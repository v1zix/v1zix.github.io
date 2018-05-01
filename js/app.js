
$(document).ready(function () {
    // https://getbootstrap.com/docs/4.0/components/scrollspy/#via-javascript
    $('body').scrollspy({ target: '#navbar', offset: 60 });
    $('.navbar a').on('click', function (e) {
        e.preventDefault();

        var $target = $(this.hash);
        // https://api.jquery.com/stop/
        // https://api.jquery.com/animate/
        $('html, body').stop().animate({ scrollTop: $target.offset().top - 55 }, 550, 'swing');
    });
});