# PostCSS Inline Image [![Build Status][ci-img]][ci]

[PostCSS] plugin that puts images as data URIs into your CSS.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/f/postcss-inline-image.svg
[ci]:      https://travis-ci.org/f/postcss-inline-image

```css
.foo {
    background-inline-image: url(one_pixel_transparent.gif);
}
```

```css
.foo {
    background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==);
}
```

## Usage

```js
postcss([ require('postcss-inline-image') ])
```

See [PostCSS] docs for examples for your environment.
