var through2 = require('through2'),
    path = require('path'),
    fs = require('fs');

module.exports = (options) => {
    return through2.obj({ objectMode: true, allowHalfOpen: false }, (file, enc, cb) => {
        var variablesContent = "";

        var contents = [];

        if (file.isNull())
            callback();

        contents.push('.' + options.className + '{' + file.contents.toString() + '}');

        file.contents = new Buffer(contents.join('\n'));

        cb(null, file)
    })
};