require('shelljs/make');

target.all = function() {
	target.bower();
};

target.bower = function() {
	mkdir('-p', 'public/jquery');
	cp('-f', 'bower_components/jquery/dist/*', 'public/jquery');

	mkdir('-p', 'public/fonts');
	cp('-f', 'bower_components/bootstrap/fonts/*', 'public/fonts');

	mkdir('-p', 'public/bootstrap');
	cp('-f', 'bower_components/bootstrap/dist/js/*', 'public/bootstrap');
};