# babel-plugin-transform-dev

[![build status](https://img.shields.io/travis/martinandert/babel-plugin-transform-dev.svg?style=flat-square)](https://travis-ci.org/martinandert/babel-plugin-transform-dev)
[![npm version](https://img.shields.io/npm/v/babel-plugin-transform-dev.svg?style=flat-square)](https://www.npmjs.com/package/babel-plugin-transform-dev)

Replaces all occurrences of `__DEV__` in your JavaScript code with the result of evaluating `"production" !== process.env.NODE_ENV`.

In order to replace `__ENV__` with just `"production" !== process.env.NODE_ENV`, set the plugin's `evaluate` option to `false`.


## Installation

```sh
$ npm install babel-plugin-transform-dev
```


## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-dev"]
}
```

### Via CLI

```sh
$ babel --plugins transform-dev script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-dev"]
});
```


## Contributing

1. Fork it ( https://github.com/martinandert/babel-plugin-transform-dev )
2. Run `npm install` to install dependencies.
3. Run the tests. We only take pull requests with passing tests, and it's great to know that you have a clean slate: `npm test`.
4. Create your feature branch (`git checkout -b my-new-feature`)
5. Add a test for your change. Only refactoring and documentation changes require no new tests. If you are adding functionality or are fixing a bug, we need a test!
6. Make the test pass.
7. Commit your changes (`git commit -am 'add some feature'`)
8. Push to your fork (`git push origin my-new-feature`)
9. Create a new Pull Request


## License

Released under The MIT License.
