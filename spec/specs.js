describe('getWordOrder', function() {
    it("returns 'triangle' when given any 3 sides (legit or not)", function() {
        expect(triangulize('2, 8, 2')).to.equal('TRIANGLE!');
    });

    it("returns 'triangle' when given 3 legit sides", function() {
        expect(triangulize('')).to.equal('triangle');
    });
    //
    // it("returns 'equilateral' when given '3, 3, 3'", function() {
    //     expect(getWordOrder('3, 3, 3')).to.equal(['equilateral']);
    // });


});
