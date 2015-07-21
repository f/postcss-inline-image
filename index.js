var postcss = require('postcss');
var mime = require('mime');
var fs = require('fs');

module.exports = postcss.plugin('postcss-inline-image', function (opts) {
    opts = opts || {};
    return function (css) {
        css.eachDecl('background-inline-image', function (decl) {
            var image = decl.value.match(/url\((.*?)\)/);
            if (image && image.length > 1) {
                var url = image[1].trim();
                var file = fs.readFileSync(url);
                var mimeType = mime.lookup(url);
                decl.prop  = 'background-image';
                decl.value = 'url(data:' + mimeType + ';base64,' + new Buffer(file).toString('base64') + ')';
            }
        });
    };
});
