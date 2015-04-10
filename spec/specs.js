describe('getWordOrder', function() {
    it("returns 'INCOMPATIBLE SIDES! TRI AGAIN!' when given 3 illegitimate sides)", function() {
        expect(triangulize([1, 8, 2])).to.equal('INCOMPATIBLE SIDES! TRI AGAIN!');
    });

    it("returns default 'SCALENE!' when given 3 legit sides", function() {
        expect(triangulize([6, 8, 5])).to.equal('SCALENE!');
    });

    it("returns 'EQUILATERAL!' when given 3 matching sides", function() {
        expect(triangulize([3, 3, 3])).to.equal('EQUILATERAL!');
    });

    it("returns 'ISOSCELES!' when given 2 matching sides", function() {
        expect(triangulize([3, 1, 3])).to.equal('ISOSCELES!');
    });


});
