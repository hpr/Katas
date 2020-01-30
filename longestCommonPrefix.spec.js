const { expect } = require('chai');
const longestCommonPrefix = require('./longestCommonPrefix');

describe('longestCommonPrefix', () => {
  it('returns an empty string if no prefixes match', () => {
    expect(longestCommonPrefix(['a','b','c'])).to.equal('');
  });
  it('returns the only common prefix', () => {
    expect(longestCommonPrefix(['foobar','foo','feather'])).to.equal('f');
  });
  it('returns foo', () => {
    expect(longestCommonPrefix(['foobar','foo','foolish'])).to.equal('foo');
  });
})
