describe('getWordOrder', function() {
    it("returns 'HAVE YOU EVER SEEN A TRIANGLE!?' when given any 3 sides (legit or not)", function() {
        expect(triangulize([2, 8, 2])).to.equal('HAVE YOU EVER SEEN A TRIANGLE!?');
    });

    it("returns 'TRIANGLE!' only when given 3 legit sides", function() {
        expect(triangulize([5, 8, 5])).to.equal('TRIANGLE!');
    });

    it("returns 'EQUILATERAL!' when given 3 matching sides", function() {
        expect(getWordOrder([3, 3, 3])).to.equal(['EQUILATERAL!']);
    });


});
