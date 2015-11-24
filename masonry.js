$(document).ready(function() {
	var grid = $('.grid').masonry({
		columnWidth: '.grid-sizer',
		itemSelector: '.grid-item',
		percentPosition: true,
		transitionDuration: 0
	});

	$('.grid').imagesLoaded(function() {
		grid.masonry('layout');
	})
});