var sincos = require('./index'),
    Benchmark = require('benchmark'),
    suite = new Benchmark.Suite();

suite
    .add('Math#sin', function() {
        Math.sin(Math.random());
    })
    .add('sincos#sin', function() {
        sincos.sin(Math.random());
    })
    .on('cycle', function(event) {
        console.log(event.target)
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').pluck('name'));
    })
    .run();
