$(document).ready(function() {
	var grid = $('.grid').masonry({
		columnWidth: '.grid-sizer',
		gutter: '.gutter-sizer',
		itemSelector: '.grid-item',
		percentPosition: true,
		transitionDuration: 0
	});

	$('.grid').imagesLoaded().progress(function() {
		grid.masonry('layout');
	})
});
