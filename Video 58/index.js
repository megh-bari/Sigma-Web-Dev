// function Nice(name) {
//     console.log("Hey " + name + " You are Good")
//     console.log("Hey " + name + " You are Nice")
//     console.log("Hey " + name + " You are Sweet")
//     console.log("Hey " + name + " You are Bad")
// }


// Nice("Tokyo")
// Nice("Rio")



function sum(a, b, c =3){
    // console.log(a+b)
    console.log(a,b,c)
    return a+b-c 
    
}
// sum(3,5)

result1 = sum(3,5)
result2 = sum(10,5)
result3 = sum(20,10)

console.log("The sum of this number is:", result1)
console.log("The sum of this number is:", result2)
console.log("The sum of this number is:", result3)


// Arrow Function
const func1 = (a)=>{
    console.log("I am an arrow function", a)

}
func1(18);
func1(23);
func1(2);
func1(9);