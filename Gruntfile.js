


module.exports = function(grunt) {
    //configuration
    grunt.initConfig({
        concat: {
            //['js/*.js'] this means look in js folder and get all files have .js in it
            js: {
                src: ['js/*.js'],
                dest: 'build/scripts.js'
            },
            css: {
                src: ['css/*.css'],
                dest: 'build/style.css'
            }
        }

    });


    // load plugins


     grunt.loadNpmTasks("grunt-contrib-concat");


    //Register tasks
    grunt.registerTask('run', function(){
        console.log('I am runing')
    });

    grunt.registerTask('sleep', function(){
        console.log('I am sleeping')
    });

    grunt.registerTask('all', ['sleep', 'run']);
};
