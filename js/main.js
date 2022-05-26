$(function () {

    $('.menu__link, .logo, .header__arrow').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    $('.header__btn, .menu__link').on('click', function () {
        $('.menu').toggleClass('menu--active');
        $('.header__btn').toggleClass('header__btn--active');
        $('.wrapper').toggleClass('wrapper--lock')
    });    

    var scrolled;
    window.onscroll = function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 150) {
            $(".header__top").addClass('header__top--color')
        }
        if (150 > scrolled) {
            $(".header__top").removeClass('header__top--color')
        }
    }

    $('.btn--works').on('click', function () {
        $('.works__foto--lock').toggleClass('block')
        $('.btn--works').toggleClass('block');        
    });    

    var mixer = mixitup('.works__inner');

    $('.reviews__slider').slick({
        dots: true,
        arrows: false
    });     
    
    $("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

