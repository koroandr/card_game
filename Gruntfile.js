var grunt = require('grunt');
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
        src : ['src/**/*.js'],
        options : {
            specs : 'test/**/*.js',
            template: require('grunt-template-jasmine-requirejs'),
            templateOptions: {
                requireConfig: {
                    baseUrl: ''
                }
            }
        }
    },
    ts: {
        default : {
            src: ["src/**/*.ts", "test/**/*.ts", "!node_modules/**/*.ts"],
            options: {
                module: "amd"
            }
        }
    },
    clean: ["src/**/*.t.js", "src/**/*.i.js", "src/**/*.e.js", "src/**/*.js.map", "test/**/*.t.js", "test/**/*.js.map"]
});

grunt.loadNpmTasks("grunt-ts");
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-jasmine');
grunt.loadNpmTasks('grunt-contrib-requirejs');

grunt.registerTask("default", ["ts"]);

grunt.registerTask('test', ['jasmine']);
