async function getdata() {
  // Simulate getting data from server
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(500);
    }, 3000);
  });
}

// settle promise means resolve or reject

// resolve means promise has settled successfully

// rehect means promise has not settled successfully

async function getdata() {
  // Simulate getting data from server
  //   let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //   let data = await x.json()
  //   return data
  // }
    let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await x.json()
    return data
  }

  

async function main() {
  console.log("Loading Modules...");

  console.log("Do Something Else.");

  console.log("Load Data");

  let data = await getdata();

  console.log(data);

  console.log("Process data");

  console.log("Task 2");
}

main();

// let data = getdata()

// data.then((v) => {
//   console.log(data)

//   console.log("Process data")

//   console.log("Task 2")
// })
