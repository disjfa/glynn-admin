module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            bootstrap: ['_sass/bootstrap'],
        },
        copy: {
            options: {},
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/scss',
                src: '**',
                dest: '_sass/bootstrap'
            },
            javascript: {
                expand: true,
                flatten: true,
                src: ['node_modules/jquery/dist/jquery.min.js', 'node_modules/jquery/dist/jquery.min.map', 'node_modules/tether/dist/js/tether.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js'],
                dest: 'scripts/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['copy']);
};