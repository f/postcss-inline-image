var postcss = require('postcss');

module.exports = postcss.plugin('postcss-inline-image', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (css) {

        // Transform CSS AST here

    };
});
