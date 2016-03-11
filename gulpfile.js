var gulp = require("gulp"); 
var del = require("del");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var ngAnnotate = require("gulp-ng-annotate");
var minifyCss = require("gulp-minify-css");
var htmlreplace = require("gulp-html-replace");
var imagemin = require("gulp-imagemin");
var browserSync = require("browser-sync");
var jshint = require("gulp-jshint");
var qunitp = require("node-qunit-phantomjs");

gulp.task("say-hello", function() {
   console.log("Hello world");
});

gulp.task("how-are-you", ["say-hello"], function() {
   console.log("How are you?");
});

gulp.task("lint", function(done) {
   return gulp.src(["app/components/**/*.js", 
      "!./app/components/thirdParty/**"])
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
});

gulp.task("reload", ["lint"], browserSync.reload);

gulp.task("file-watch", ["lint"], function () {

    // Serve files from the root of this project
    browserSync({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(["./app/css/*.css", "app/components/**/*.js"], ["reload"]);
});

gulp.task("unit-test", function() {
    qunitp("./test/test.html");
});

gulp.task("watch-js", function() {
   gulp.watch("app/components/**/*.js", ["unit-test"]);
});

gulp.task("clean", function(done) {
   console.log("cleaning dist dir");
   del(["dist/**/*"], done);
});


gulp.task("scripts", ["clean"], function() {
   console.log("processing scripts");

   return gulp.src(["app/components/**/*.js", 
      "!./app/components/thirdParty/**"])
         .pipe(concat("all.min.js"))
         .pipe(ngAnnotate())
         .pipe(uglify())
         .pipe(gulp.dest("./dist/"));
});

gulp.task("css", ["clean"], function() {
   console.log("processing css");

   return gulp.src("./app/css/*.css")
      .pipe(concat("styles.min.css"))
      .pipe(minifyCss())
      .pipe(gulp.dest("./dist/"));
});


gulp.task("html", ["clean"], function(done) {
   console.log("copying over HTML");

   return gulp.src(["app/components/**/*.html", 
      "./app/components/thirdParty/**"], {base: "./"})
      .pipe(gulp.dest("./dist/"));

});

gulp.task("images", ["clean", "html"], function() {
   console.log("processing images");
      
    return gulp.src("app/images/*.png")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/app/images"));      

});


gulp.task("build", ["clean", "scripts", "css", "images" ], function() {
   console.log("updating index");

   return gulp.src("index.html")
      .pipe(htmlreplace({
         "css": "styles.min.css",
         "js": "all.min.js"
      }))
   .pipe(gulp.dest("./dist/"));
});


gulp.task("default", ["build"]);