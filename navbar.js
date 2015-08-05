$(document).ready(function() {
	var mainNav = $('#jh-nav-main');
	var mainNavLinks = mainNav.find('.jh-nav-contents a');

	$('#jh-nav-main-toggle').on('click', function() {
		if (mainNav.hasClass('active')) {
			mainNav.removeClass('active');
		} else {
			mainNav.addClass('active');
			mainNavLinks.first().focus();
		}
	});

	mainNav.find('.jh-nav-background').on('click', function() {
		mainNav.removeClass('active');
	});

});