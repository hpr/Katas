const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('returns an empty array if no input', () => {
    expect(twoSum([], 0)).to.deep.equal([]);
  });
  it('returns an empty array if no sum is found', () => {
    expect(twoSum([1,2,3], 10)).to.deep.equal([]);
  });
  it('sums to five', () => {
    expect(twoSum([1,2,3], 5)).to.deep.equal([1,2]);
  });
})
