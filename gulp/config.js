'use strict';

var gulp = require('gulp');

var config = {

    build: './build/',
    dist: './dist/',
    base: './build/',
    taskPath: './gulp/tasks/',
    
    html: {
        watch: ['src/html/**/*.html'],
        src: ['./src/html/**/*.html', '!./src/html/includes/**']
    },
    
    sass: {
        watch: ['src/sass/**/*.scss'],
        src: ['./src/sass/main.scss'],
        folder: 'css/',
        destFile: 'styles.min.css'
    },

    js: {
        watch: ['src/js/**/*.js'],
        src: ['./src/js/**/*.js'],
        folder: 'js/',
        destFile: 'main.min.js'
    },
    
    images: {
        watch: ['src/img/**'],
        src: ['./src/img/**'],
        srcFolder: './src/img/',
        folder: 'img/'
    },
    
    misc: {
        src: [
            'fonts/**',
            '*.ico',
            'src/data/**'
        ]
    },

    error: function(error) {
        
        console.log(error.message);
    }

};

module.exports = config;


