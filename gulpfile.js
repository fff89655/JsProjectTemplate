const { src, dest, series } = require('gulp');
const closureCompiler = require('google-closure-compiler').gulp();
var exec = require('child_process').exec;
const wrapper = require('gulp-wrapper');


function min() {
  return src('./source/source.js', {base: './'})
        .pipe(closureCompiler({
            compilation_level: 'SIMPLE',
            warning_level: 'DEFAULT',
            language_in: 'ECMASCRIPT6_STRICT',
            language_out: 'ECMASCRIPT5_STRICT',
            // output_wrapper: '(function(){\n%output%\n}).call(this)',
            js_output_file: 'output.min.js'
            }, {
            platform: ['native', 'java', 'javascript']
            }))
        .pipe(dest('./dist/js'));
  // https://github.com/google/closure-compiler
}

function addWrapper(){
    return src('source/source.js')
        .pipe(wrapper({
            header: '(function(){\n',
            footer: '}).call(this)\n'
        }))
        .pipe(dest('source'));
}

function tsc(cb){
    exec('npx tsc -p tsconfig.json -out ./source/source.js', (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        cb();
    });
}


exports.tsc = tsc;
exports.min = min;
exports.addWrapper = addWrapper;
exports.default = series(tsc, addWrapper, min);