let a = [1,2,18,23]

// Classicial for Loop

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}

// ForEach Loop

a.forEach((value, index, arr) => {
    console.log(value, index, arr)
});



// ForIn Loop

let obj ={
    a:1,
    b:2,
    c:3,
}

for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }
}


// ForOf Loop
for (const iterator of a) {
    console.log(iterator)
}

