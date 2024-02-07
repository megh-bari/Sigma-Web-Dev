let ary = [1,12,18,20]

// let newary = []
// for (let index = 0; index < ary.length; index++) {
//     const element = ary[index];
//     newary.push(element**2)
// }


// Map
let newary = ary.map((Element, index, array)=>{
    return Element**2;
    
})
console.log(newary)


// filter
const greaterThanSeven = (e)=>{
    if (e>7) {
        
        return true;
    }
    return false;
}
console.log(ary.filter(greaterThanSeven))



// Reduce
let arry2 = [1,2,3,4,5,6]

const reduce = (a,b)=>{
    return a+b;
}

console.log(arry2.reduce(reduce))

// Array from
console.log(Array.from("Megh").toString())