describe('getWordOrder', function() {
    it("returns 'triangle' when given any 3 sides (legit or not)", function() {
        expect(triangulize('2, 2, 8')).to.equal('triangle');
    });//watch input, array vs string vs integers

    // it("returns 'triangle' when given 3 legit sides", function() {
    //     expect(triangulize('')).to.equal('triangle');
    // });
    //
    // it("returns 'equilateral' when given '3, 3, 3'", function() {
    //     expect(getWordOrder('3, 3, 3')).to.equal(['equilateral']);
    // });


});
