module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /* 
            1. Write a program to copying data from one file to another using grunt.
        */
        copy: {
            main: {
                files: [
                    { expand: true, cwd: 'workfiles/', src: ['*.js'], dest: 'dist/copied_workfiles/', filter: 'isFile' },
                ],
            },
        },

        /*
            2. Write a program to compile or debuging a file using grunt. 
        */
        babel: {
            options: {
                presets: ['@babel/preset-env']
            },
            dist: {
                files: {
                    'dist/compiled/foo.js': 'workfiles/foo.js'
                }
            }
        },

        /*
            3. Write a program to concate 2 or more files using grunt.
        */
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['workfiles/*.js'],
                dest: 'dist/concat_all.js'
            }
        },

        /*
            4. Write a program to adding header or footer to all the files using grunt.
        */
        header: {
            dist: {
                options: {
                    text: '// Header\n'
                },
                files: {
                    'dist/foo.js': 'workfiles/foo.js'
                }
            }
        },
        footer: {
            dist: {
                options: {
                    text: '// Footer\n'
                },
                files: {
                    'dist/foo.js': 'dist/foo.js'
                }
            }
        },

        /* 
            5. Write a program to minification of files using grunt. 
        */
        uglify: {
            dist: {
                files: {
                    'dist/foo.min.js': ['dist/compiled/foo.js']
                }
            }
        }
    });

    grunt.registerTask('default', ['copy', 'babel', 'concat', 'header', 'footer', 'uglify']);

};