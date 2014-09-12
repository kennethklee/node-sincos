var should = require('should'),
    sin = require('../index').sin,
    cos = require('../index').cos,
    PI = 3.14159265;

describe('Sine', function() {

    it('sin(-PI * 4/4) should be approximately 0 ± 0.0000001', function() {
        sin(-PI).should.be.approximately(0, 0.0000001);
    });

    it('sin(-PI * 3/4) should be approximately -0.70711 ± 0.001', function() {
        sin(-PI * 3/4).should.be.approximately(-0.70711, 0.001);
    });

    it('sin(-PI * 2/4) should be approximately -1 ± 0.0000001', function() {
        sin(-PI/2).should.be.approximately(-1, 0.0000001);
    });

    it('sin(-PI * 1/4) should be approximately -0.70711 ± 0.001', function() {
        sin(-PI/4).should.be.approximately(-0.70711, 0.001);
    });

    it('sin(0) should be approximately 0 ± 0.0000001', function() {
        sin(0).should.be.approximately(0, 0.0000001);
    });

    it('sin(PI * 1/4) should be approximately 0.70711 ± 0.001', function() {
        sin(PI/4).should.be.approximately(0.70711, 0.001);
    });

    it('sin(PI * 2/4) should be approximately 1 ± 0.0000001', function() {
        sin(PI/2).should.be.approximately(1, 0.0000001);
    });

    it('sin(PI * 3/4) should be approximately 0.70711 ± 0.001', function() {
        sin(PI * 3/4).should.be.approximately(0.70711, 0.001);
    });

    it('sin(PI * 4/4) should be approximately 0 ± 0.0000001', function() {
        sin(PI).should.be.approximately(0, 0.0000001);
    });
});

describe('Cosine', function() {
    it('cos(-PI * 4/4) should be approximately -1 ± 0.0000001', function() {
        cos(PI).should.be.approximately(-1, 0.0000001);
    });

    it('cos(-PI * 2/4) should be approximately 0 ± 0.0000001', function() {
        cos(-PI/2).should.be.approximately(0, 0.0000001);
    });

    it('cos(-PI * 1/4) should be approximately 0.70711 ± 0.001', function() {
        cos(-PI/4).should.be.approximately(0.70711, 0.001);
    });

    it('cos(0) should be approximately 1 ± 0.0000001', function() {
        cos(0).should.be.approximately(1, 0.0000001);
    });

    it('cos(PI * 1/4) should be approximately 0.70711 ± 0.001', function() {
        cos(PI/4).should.be.approximately(0.70711, 0.001);
    });

    it('cos(PI * 2/4) should be approximately 0 ± 0.0000001', function() {
        cos(PI/2).should.be.approximately(0, 0.0000001);
    });

    it('cos(PI * 4/4) should be approximately -1 ± 0.0000001', function() {
        cos(PI).should.be.approximately(-1, 0.0000001);
    });
});
