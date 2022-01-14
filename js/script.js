$(document).ready(function() {
	$('.clients__slider').slick({
		dots: true,
	});

	$('.header__burger').click(function() {
		$('.header__burger, .header__center, body').toggleClass('active');
	})
})