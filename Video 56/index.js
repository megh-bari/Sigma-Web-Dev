// console.log("Hello I am conditional Tutorial")

let age = 0;
// let grace = 2;

// age+= grace

// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace) // 5 to the power 2
// console.log(age % grace)

if (age == 18) {
  console.log("You can Drive");
} else if (age == 0) {
  console.log("Are you kidding");
} else {
  console.log("You cannot drive");
}

a = 6;
b = 8;

let c = a > b ? (a - b) : (b - a);

/*
translates to:

if(a>b){
    let c = a-b;
}

else{
    let c = b-a;
}

*/
