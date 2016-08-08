module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            bootstrap: ['_sass/bootstrap'],
        },
        jekyll: {
            options: {
                bundleExec: true,
                src: ''
            },
            dist: {
                options: {
                    config: '_config.yml'
                }
            },
            serve: {
                options: {
                    serve: true,
                    drafts: true,
                    future: true
                }
            }
        },
        copy: {
            options: {},
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/scss',
                src: '**',
                dest: 'templates/_sass/bootstrap'
            },
            bootstrapSocial: {
                src: 'node_modules/bootstrap-social/bootstrap-social.scss',
                dest: 'templates/_sass/bootstrap-social.scss'
            },
            fontawesomecss: {
                expand: true,
                cwd: 'node_modules/font-awesome/scss',
                src: '**',
                dest: 'templates/_sass/font-awesome'
            },
            fontawesome: {
                expand: true,
                cwd: 'node_modules/font-awesome/fonts',
                src: '**',
                dest: 'templates/fonts'
            },
            javascript: {
                expand: true,
                flatten: true,
                src: ['node_modules/jquery/dist/jquery.min.js', 'node_modules/jquery/dist/jquery.min.map', 'node_modules/tether/dist/js/tether.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js'],
                dest: 'templates/scripts/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-jekyll');

    grunt.registerTask('default', ['copy']);
};