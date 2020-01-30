const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  })
  it("Returns corret amount of lines",()=> {
    expect(wrap("1234567890123456789012",2).split("\n").length).to.equal(11)
  })
  it("Rejects non-string inputs",()=> {

    expect(wrap(1,10)).to.equal(null)
  })
})
