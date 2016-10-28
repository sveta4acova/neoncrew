module.exports = function(grunt) {
 
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/styles.css': 'scss/styles.scss'
        }
      }
    },
    watch: {
      scss: {
        files: ['scss/*.scss'], //Изменяемые файлы
        tasks: ['sass'],
        options: {
        spawn: false,
        livereload: true,
      },
    },
    cssmin: {
      files: ['css/styles.css'], //Изменяемые файлы
      tasks: ['cssmin'],
      options: {
      spawn: false
      },
    },
    },
    cssmin: {
      target: {
        files: {
          'css/styles.min.css': 'css/styles.css',
        }
       }
     },
    autoprefixer: {
        options: {
          browsers: ["chrome 35", "opera 9", "firefox 15", "ios_saf 8", "safari 8","ie 8"] 
        },
        dist: {
          files: {
            'css/styles.css': 'css/styles.css'
          }
        }
    },

  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
 
  grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'watch']);
};