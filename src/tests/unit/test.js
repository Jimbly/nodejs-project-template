/*global describe,it*/

// Entry point needs this to allow ES2015 code
require('babel-register');

var expect = require('chai').expect;

var mod = require('../../common/mod.js');

describe('#dummy', function () {
  it('test', function () {
    expect(mod.test()).to.equal(1);
  });

  it('let', function () {
    expect(mod.uselet()).to.equal(1);
  });

  it('const', function () {
    expect(mod.useconst()).to.equal(1);
  });
});
