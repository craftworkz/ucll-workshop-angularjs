"use strict";

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    watch: {
        options: {
          livereload: true
      },
      html: {
        files: ["*.html", "./**/*.html", "templates/*.*.html"]
      },
      js: {
        files: ["./**/scripts/*.js" ]
      }
    },

    connect: {
      server: {
        options: {
          hostname: "localhost",
          port: 8081,
          livereload: true
        }
      }
    }

  });
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("serve", [ "connect:server", "watch" ]);
};
