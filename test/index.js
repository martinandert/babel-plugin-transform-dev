var path    = require('path');
var fs      = require('fs');
var assert  = require('assert');
var babel   = require('babel-core');
var plugin  = require('../')

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

describe('babel-plugin-transform-dev', function() {
  var fixturesDir = path.join(__dirname, 'fixtures');

  fs.readdirSync(fixturesDir).map(function(caseName) {
    var fixtureDir = path.join(fixturesDir, caseName);

    var optionsPath = path.join(fixtureDir, 'options.json');
    var options     = JSON.parse(fs.readFileSync(optionsPath, 'utf8'));

    var actualPath    = path.join(fixtureDir, 'actual.js');
    var expectedPath  = path.join(fixtureDir, 'expected.js');

    var babelOptions = { plugins: [ [plugin, options] ] };

    var actual    = babel.transformFileSync(actualPath, babelOptions).code;
    var expected  = fs.readFileSync(expectedPath, 'utf8');

    it('works for the ' + caseName + ' case', function() {
      assert.equal(trim(actual), trim(expected));
    });
  });
});
