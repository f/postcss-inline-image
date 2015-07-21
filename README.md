# PostCSS Inline Image [![Build Status][ci-img]][ci]

[PostCSS] plugin that puts images as data URIs into your CSS.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/f/postcss-inline-image.svg
[ci]:      https://travis-ci.org/f/postcss-inline-image

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-inline-image') ])
```

See [PostCSS] docs for examples for your environment.
