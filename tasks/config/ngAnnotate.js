
module.exports = function(grunt) {

	grunt.config.set('ngAnnotate', {
		options: {
				singleQuotes: true,
		},

		app2: {
				files: [
						{
								expand: true,

								// src: ['./assets/js/angular/**/*.js'],
								src: ['./assets/js/angular/app.js'],
								// ext: '.annotated.js', // Dest filepaths will have this extension.
								extDot: 'last',       // Extensions in filenames begin after the last dot
						},
				],
		}


	});


grunt.loadNpmTasks('grunt-ng-annotate');
};
