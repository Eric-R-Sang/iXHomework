// Eric's implementation
function fib(n) {
    let curr = 1;
    let prev = 0;
    console.log(prev);
    for (let i = 1; i < n; ++i) {
        console.log(curr);
        let temp = prev;
        prev = curr;
        curr += temp;
    }
}

fib(10);