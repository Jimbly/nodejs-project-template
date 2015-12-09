/*global describe,it*/

var expect = require('chai').expect;

describe('#mod', function () {
  var mod = require('../../common/mod.js');
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

describe('#mod2', function () {
  var mod = require('../../common/mod2.js');
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
