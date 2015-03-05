/*global describe, it, expect, require, Promise */

/* This file is for testing implementation regressions of Promises. */
var hasOwn = Object.prototype.hasOwnProperty;

describe('Promise', function () {
  (typeof process !== 'undefined' && process.env.NO_ES6_SHIM ? it.skip : it)('is on the exported object', function () {
    var exported = require('../');
    expect(exported.Promise).to.equal(Promise);
  });

  it('ignores non-function .then arguments', function () {
    expect(function () {
      Promise.reject(42).then(null, 5).then(null, function () {});
    }).not.to['throw']();
  });

  it('does not have extra methods (bad Chrome!)', function () {
    expect(Promise).not.to.have.property('accept');
    expect(Promise).not.to.have.property('defer');
    expect(Promise.prototype).not.to.have.property('chain');
  });
});
