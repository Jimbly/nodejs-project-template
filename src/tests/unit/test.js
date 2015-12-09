/*global describe,it*/

var expect = require('chai').expect;

describe('#mod', function () {
  var mod = require('../../common/js_mod.js');
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

describe('#ts_mod', function () {
  var mod = require('../../common/ts_mod.js');
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
