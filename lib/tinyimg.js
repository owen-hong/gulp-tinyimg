'use strict';

/**
 * Created by owenhong on 2015/9/22.
 */

var fs = require("fs");
var tinify = require("tinify");

function GulpTiny(key){
    tinify.key = key;
    tinify.validate(function(err) {
        if (err) throw err;
        // Validation of API key failed.
    })
}

GulpTiny.prototype.Compressing = function(fill,cb){

    tinify.fromBuffer(fill).toBuffer(function(err, resultData) {
        if (err instanceof tinify.AccountError) {
            console.log("The error message is: " + err.message);
            // Verify your API key and account limit.
        } else if (err instanceof tinify.ClientError) {
            // Check your source image and request options.
        } else if (err instanceof tinify.ServerError) {
            // Temporary issue with the Tinify API.
        } else if (err instanceof tinify.ConnectionError) {
            // A network connection error occurred.
        } else {
            // Something else went wrong, unrelated to the Tinify API.
        }

        cb(resultData);

        console.log('Compressing Success...');
    });
}

var gulpTinyImg = function(key){
    return new GulpTiny(key);
}

module.exports = gulpTinyImg;