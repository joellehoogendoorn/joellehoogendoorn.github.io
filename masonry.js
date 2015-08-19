$(document).ready(function() {
	var msn = $('.grid').masonry({
		columnWidth: '.grid-sizer',
		itemSelector: '.grid-item',
		percentPosition: true,
		transitionDuration: 0
	});

	$('.grid').imagesLoaded(function() {
		msn.layout();
	})
});