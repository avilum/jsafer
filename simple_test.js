
function fibo(limit, a=1, b=1){
    // Some docstring about this function
    if(a > limit){
        return
    }
    console.log(a)
    return fibo(limit, b, a+b)
}

fibo(1000);