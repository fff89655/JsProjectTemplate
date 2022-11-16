const { src, dest, series } = require('gulp');
const closureCompiler = require('google-closure-compiler').gulp();
var exec = require('child_process').exec;


function min() {
  return src('./source/source.js', {base: './'})
        .pipe(closureCompiler({
            compilation_level: 'SIMPLE',
            warning_level: 'VERBOSE',
            language_in: 'ECMASCRIPT6_STRICT',
            language_out: 'ECMASCRIPT5_STRICT',
            output_wrapper: '(function(){\n%output%\n}).call(this)',
            js_output_file: 'output.min.js'
            }, {
            platform: ['native', 'java', 'javascript']
            }))
        .pipe(dest('./dist/js'));
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
exports.default = series(tsc, min);