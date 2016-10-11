module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        app: {
            baseurl: 'glynn-admin',
            app: '_site'
        },
        clean: {
            bootstrap: ['_sass/bootstrap']
        },
        watch: {
            jekyll: {
                files: [
                    'site/**/*.{html,yml,md,mkd,markdown,js,css}'
                ],
                tasks: ['jekyll:server']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '_site/**/*.{html,yml,md,mkd,markdown}',
                    '<%= app.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
                ]
            },
            sass: {
                files: [
                    'scss/**/*.scss'
                ],
                tasks: ['sasslint', 'sass', 'copy:dist']
            },
            js: {
                files: [
                    'js/**/*.js'
                ],
                tasks: ['browserify', 'copy:dist']
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0',
                path: '<%= app.baseurl %>'
            },
            livereload: {
                options: {
                    open: {
                        target: 'http://0.0.0.0:9000/<%= app.baseurl %>'
                    },
                    base: [
                        '<%= app.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: {
                        target: 'http://0.0.0.0:9000/<%= app.baseurl %>'
                    },
                    base: [
                        '<%= app.app %>'
                    ]
                }
            }
        },
        jekyll: {
            options: {
                bundleExec: true,
                config: '_config_dev.yml',
                incremental: false
            },
            prod: {
                options: {
                    config: '_config.yml'
                }
            },
            github: {
                options: {
                    raw: 'github: true'
                }
            },
            server: {
                options: {
                    config: '_config_dev.yml',
                }
            }
        },
        sasslint: {
            options: {
                configFile: 'scss/.sass-lint.yml'
            },
            target: ['scss/**/*.scss', 'other_location/\*.scss']
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    // tell Sass to look in the Bootstrap stylesheets directory when compiling
                    loadPath: 'node_modules'
                },
                files: {
                    // the first path is the output and the second is the input
                    'dist/css/glynn-admin.css': 'scss/glynn-admin.scss'
                }
            }
        },
        browserify: {
            dist: {
                options: {
                    expose: './node_modules',
                    browserifyOptions: {
                        debug: true
                    }
                },
                files: {
                    'dist/js/glynn-admin.js': ['js/glynn-admin.js']
                }
            }
        },
        copy: {
            options: {},
            fontawesome: {
                expand: true,
                cwd: 'node_modules/font-awesome/fonts',
                src: '**',
                dest: 'site/fonts'
            },
            dist: {
                expand: true,
                cwd: 'dist/',
                src: [
                    '**/*'
                ],
                dest: 'site/'
            }
        },
        buildcontrol: {
            options: {
                dir: '_site',
                commit: true,
                push: true,
                message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
            },
            pages: {
                options: {
                    remote: 'git@github.com:disjfa/glynn-admin.git',
                    branch: 'gh-pages'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-build-control');
    grunt.loadNpmTasks('grunt-sass-lint');

    grunt.registerTask('test', ['sasslint']);
    grunt.registerTask('build', ['copy']);
    grunt.registerTask('serve', [
        'sass',
        'browserify',
        'copy',
        'jekyll:server',
        'connect:livereload',
        'watch'
    ]);
    grunt.registerTask('push', ['jekyll:prod', 'buildcontrol:pages']);
};