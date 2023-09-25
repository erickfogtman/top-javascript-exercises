// Write a function that returns the nth number in the Fibonacci sequence.
const fibonacci = function (num) {
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    if (num === 1) return 1;
    let fib = [0, 1];
    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
