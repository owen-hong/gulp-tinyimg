'use strict';

/**
 * Requires
 */
var util = require('gulp-util');
var PluginError = util.PluginError;
var through = require('through2');
var gulpTinyImg = require('./lib/tinyimg.js');


/**
 * PLUGIN_NAME
 * @type {String}
 */
var PLUGIN_NAME = 'gulp-tinyimg';

 /**
 * Gulp tinyimg
 * @param  {Object} options
 * @param  {Object} postCssOptions
 * @return {Object}
 */
function TinyImg(key) {

    return through.obj(function(file, enc, cb) {

        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streaming not supported'));
            return cb();
        }

        var $this = this;
        gulpTinyImg(key).Compressing(file.contents,function(data){
            try {
                file.contents = data;
            } catch (err) {
                this.emit('error', new PluginError(PLUGIN_NAME, err));
            }

            $this.push(file);

            cb();
        });
    });
}

module.exports = TinyImg;