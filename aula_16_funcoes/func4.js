function fatorial(n){
    let p = 1 
    for (let index = n; index > 1; index--) {
        p *= index

        
    }
    return p
} 

console.log(fatorial(5))