describe('getWordOrder', function() {
  it("returns 'equilateral' when given '3, 3, 3'", function() {
    expect(getWordOrder('3, 3, 3')).to.deep.equal(['equilateral']);
  });


});
