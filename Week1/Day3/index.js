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

// Joel's implementation
function printFirstTen(){
    let sequence = [0,1];
    console.log(sequence[0]);
    console.log(sequence[1]);
    for(let i = 2; i < 10; ++i){
        sequence[i]= sequence[i-1] + sequence[i-2];
        console.log(sequence[i]); 
    }
}
printFirstTen();
    