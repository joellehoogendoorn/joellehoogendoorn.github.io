$(document).ready(function() {
	var mainNav = $('#jh-nav-main');

	$('#jh-nav-main-toggle').on('click', function() {
		if (mainNav.hasClass('active')) {
			mainNav.removeClass('active');
		} else {
			mainNav.addClass('active');
		}
	});

	mainNav.find('.jh-nav-background').on('click', function() {
		mainNav.removeClass('active');
	});
});