// Write a program to calculate factorial of a number using reduce and for loops

// 6!

// Using For Loop
let num = 6;
let fact = 1;

for (let i = 1; i <= num; i++) {
    fact = fact*i;
}

console.log("The factorial of 6 is:", fact)



// Using Reduce


let a = 6;

function factorial(number) {
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))

    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    return c
}

factorial(a)
