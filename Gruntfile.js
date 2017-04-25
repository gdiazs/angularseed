 module.exports = function(grunt) {
 	'use strict';

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

        project: {
            src: 'src',
            vendor: 'bower_components',
            build: 'build',
            dist: 'dist',
        },

        clean: {
            dist: '<%= project.dist %>',
            build: '<%= project.build %>'
        },

        jshint: {
            all: ['Gruntfile.js', '<%= project.src %>/scripts/**/*.js']
        },

        copy: {
            build: {
                files: [
                    {expand: true, cwd: '<%= project.vendor %>/angular/', src: ['angular.min.js', 'angular.min.js.map'], dest: '<%= project.build %>/assets/vendor/js'},
                    {expand: true, cwd: '<%= project.vendor %>/angular-route/', src: ['angular-route.min.js', 'angular-route.min.js.map'], dest: '<%= project.build %>/assets/vendor/js'},
                    {expand: true, cwd: '<%= project.vendor %>/requirejs/', src: 'require.js', dest: '<%= project.build %>/assets/vendor/js'},
                    {expand: true, cwd: '<%= project.vendor %>/jquery/dist', src: 'jquery.min.js', dest: '<%= project.build %>/assets/vendor/js'},
                    {expand: true, cwd: '<%= project.vendor %>/bootstrap/dist/', src: ['*/**.min.js', '*/**.min.js.map'], dest: '<%= project.build %>/assets/vendor/bootstrap'},
                    {expand: true, cwd: '<%= project.vendor %>/bootstrap/dist/', src: ['*/**.min.css', '*/**.min.css.map'], dest: '<%= project.build %>/assets/vendor/bootstrap'},
                    {expand: true, cwd: '<%= project.vendor %>/bootstrap/dist/fonts', src: '*', dest: '<%= project.build %>/assets/vendor/bootstrap/fonts'},
                    {expand: true, cwd: '<%= project.vendor %>/components-font-awesome/', src: ['css/*', 'fonts/*'], dest: '<%= project.build %>/assets/vendor/components-font-awesome'},
                    {expand: true, cwd: '<%= project.src %>/', src: 'index.html', dest: '<%= project.build %>/'},
                    {expand: true, cwd: '<%= project.src %>/../', src: 'favicon.ico', dest: '<%= project.build %>/'},
                    {expand: true, cwd: '<%= project.src %>/scripts', src: ['**/*.js'], dest: '<%= project.build %>/assets/js'},
                    {flatten: true, expand: true, cwd: '<%= project.src %>/scripts', src: '**/*.html', dest: '<%= project.build %>/',  filter: 'isFile'},
                    {expand: true, cwd: '<%= project.src %>/styles', src: ['**/*.css'], dest: '<%= project.build %>/assets/css'},
                ],
            }

        },

        connect: {
                sever: {
                    options: {
                        hostname: 'localhost',
                        port: 9000,
                        base: 'build/',
                        livereload: 35729
                    }
                }
        },
        watch: {
            options: {
                livereload: true,
                dateFormat: function(time) {
                    grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
                    grunt.log.writeln('Waiting for more changes...');
                }
            },
            src: {
                files: '<%= project.src %>/**/*',
                tasks: ['jshint','copy:build'],
            },
        },

        

	});


	grunt.registerTask('build', function(){
        grunt.task.run('clean');
        grunt.task.run('jshint');
		grunt.task.run('copy:build');
        grunt.task.run('connect');
        grunt.task.run('watch');
	});
 };