const { performance } = require('perf_hooks');

var startTime = performance.now()

function fibo(limit, a = 1, b = 1) {
    if (a > limit) {
        return
    }
    console.log(a)
    return fibo(limit, b, a + b)
}

fibo(1 / 1e-9);

var endTime = performance.now()

console.log(`The run took ${endTime - startTime} milliseconds`)