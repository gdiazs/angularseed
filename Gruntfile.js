 module.exports = function(grunt) {
 	'use strict'

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

        project: {
            src: 'src',
            vendor: 'bower_components',
            build: 'build',
            dist: 'dist',
        },

        copy: {
            default: {
                files: [
                    {expand: true, cwd: '<%= project.vendor %>/angular/', src: 'angular.min.js', dest: '<%= project.build %>/assets/vendor/js'},
                    {expand: true, cwd: '<%= project.vendor %>/requirejs/', src: 'require.js', dest: '<%= project.build %>/assets/vendor/js'},
                    {expand: true, cwd: '<%= project.vendor %>/jquery/dist', src: 'jquery.min.js', dest: '<%= project.build %>/assets/vendor/js'},
                    {expand: true, cwd: '<%= project.vendor %>/bootstrap/dist/', src: '*/**.min.js', dest: '<%= project.build %>/assets/vendor/bootstrap'},
                    {expand: true, cwd: '<%= project.vendor %>/bootstrap/dist/', src: '*/**.min.css', dest: '<%= project.build %>/assets/vendor/bootstrap'},
                    {expand: true, cwd: '<%= project.vendor %>/bootstrap/dist/fonts', src: '*', dest: '<%= project.build %>/assets/vendor/bootstrap/fonts'},
                    {expand: true, cwd: '<%= project.src %>/', src: 'index.html', dest: '<%= project.build %>/'},
                    {expand: true, cwd: '<%= project.src %>/', src: '**/*.html', dest: '<%= project.build %>/'},
                    {expand: true, cwd: '<%= project.src %>/scripts/', src: '*/**', dest: '<%= project.build %>/assets/js'},
                ],
            }

        },

        

	});


	grunt.registerTask('build', function(){
		grunt.task.run('copy:default');
	})
 }