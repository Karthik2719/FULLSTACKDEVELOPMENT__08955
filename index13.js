 getData(1);
// getData(2);
// getData(3);


// function getData(dataid ,getnextdata){
//     setTimeout(()=> {
//        console.log("Fetching data for id:",dataid);
//        if (getnextdata){
//         getnextdata();
//        }
//      }, 2000);
// }


// getData(1,()=>{
//     console.log("getting data 2......")
//     getData(2,()=>{
//         console.log("getting data 3....")
//         getData(3);
//     });
// });



// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         const success  = true;
//         if (success) {
//             resolve("Data fetched successfully");
//         } else {
//             reject("Error fetching data");
//         }
//     }, 2000);
// });

// myPromise
// .then((data) => {
//     console.log("Promise resoloved with data:", data);
// })
// .catch((error) => {
//     console.error("Promise rejected with error:", error);
// });


// let promise=new Promise((resolve,reject)=>{
//     console.log("i am promise");
//     if(1<10){
//         resolve (123);
//     } 
//     reject("something went wrong");
// })



// function getData(dataid) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("Fetching data for id:",dataid);
//             resolve("success");
//         },2000);
//     });
// }
// let result=getData(123);
// result;

// getData(101)
//     .then(result => {
//         console.log("First fetch:", result);
//         return getData(102);
//     })
//     .then(result => {
//         console.log("Second fetch:", result);
//         return getData(103);
//     })
//     .then(result => {
//         console.log("Third fetch:", result);
//     })
//     .catch(err => {
//         console.error("Error occurred:", err);
//     });







//promise chgaining

// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         }, 2000); // Use 2 sec for quicker testing
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         }, 4000); // Use 4 sec for quicker testing
//     });
// }
// console.log("fetching data 1...");
// let p1= asyncFunc1();
// p1.then((data)=>{
//      console.log("Data fetched:", data);
//         console.log("fetching data 2...");
//      let p2= asyncFunc2();
//      p2.then((data)=>{
//          console.log("Data fetched:", data);
//      });
// });




function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Fetching data for id:",id);
            resolve(id);
        },1000);
    });
}

async function fetchData() {
    try {
        const data1 = await getData(101);
        console.log("First fetch:",data1);
        const data2 = await getData(102);
        console.log("Second fetch:",data2);
        const data3 = await getData(103);
        console.log("Third fetch:",data3);
        
    } catch (error) {
        console.error("Error Occured:",error);
    }
}

fetchData();



async function getnextdata() {
    console.log("getting data 1.....");
    await getData(1);
    console.log("getting data 2....");
    await getData(2);
    console.log("getting data 3....");
    await getData(3);
}
getnextdata();









function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Fetching data for id:",id);
            resolve(id);
            reject(id);
        },1000);
    });
}

async function fetchData() {
    try {
        const data1 = await getData(101);
        console.log("First fetch:",data1);
        const data2 = await getData(102);
        console.log("Second fetch:",data2);
        const data3 = await getData(103);
        console.log("Third fetch:",data3);
        
    } catch (error) {
        console.error("Error occurred:",error);
    }
}
fetchData();

async function getnextdata() {
    console.log("getting data 1...");
    await getData(1);
    console.log("getting data 2...");
    await getData(2);
    console.log("getting data 3...");
    await getData(3);
    
}
getnextdata();