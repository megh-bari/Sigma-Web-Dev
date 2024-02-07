let arry = [1,2,3,4,5]
 // index   0,1,2,3,4

// Array is mutable:
// arry[0]=111;
// console.log(arry)
// console.log(arry.length)
// console.log(arry[2])
// console.log(arry, typeof arry)

/*
String is Immutable:
let a = "Megh";
a[0] = "S";
console.log(a)
*/

console.log(arry.toString())
console.log(arry.join(" and "))

console.log(arry.pop())

arry.push("Megh")
console.log(arry)
// Jo shift hota hai hamara voh pup ka bhai hota hai
arry.shift()
console.log(arry)
// Jo unshift hota hai hamara voh push ka bhai hota hai
arry.unshift("Megh")
console.log(arry)

console.log(arry, delete(5))

// concating
let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]
console.log(a1.concat(a2,a3).toString())


// Splice 
let num = [1,2,3,4,5]
num.splice(1,3, 222,333)


// Slice
let number = [1,2,3,4,5]
num.slice(1,3)
