// console.log("Hello world");
// function sayHello(){
//     console.log("Hello from saayHello function");
// }
// sayHello();
// console.log("This is a sample javaScript Programme");






// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("Hello world");
// },5000);
// console.log('Three');
// console.log("four");




//callback Eg
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,ds){
//     ds(a,b);
// }
// calculator(5,10,sum);


// calculator(5,10,(a,b)=>{
//     console.log(a+b);
// });



// console.log("one");
// console.log("two");
// const Hello = ()=>{
//  console.log("Hello world");
// }
// setTimeout(Hello,5000);
// console.log('Three');
// console.log("four");



// for (let i=0; i < 5; i++ )
// {
//     let str ="";
//     for (let j = 0; j < 5; j++)
//     {
//         str += j;
//     }
//     console.log(i,str);
// }






// function getData(dataid){
//     setTimeout(()=>{
//         console.log("Fetching Data for id:",dataid);
//     },5000);
// }
getData(1);
getData(2);
getData(3);


function getData(dataid ,getnextdata){
    setTimeout(()=> {
       console.log("Fetching data for id:",dataid);
       if (getnextdata){
        getnextdata();
       }
     }, 2000);
}


getData(1,()=>{
    console.log("getting data 2......")
    getData(2,()=>{
        console.log("getting data 3....")
        getData(3);
    });
});



const myPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const success  = true;
        if (success) {
            resolve("Data fetched successfully");
        } else {
            reject("Error fetching data");
        }
    }, 2000);
});

myPromise
.then((data) => {
    console.log("Promise resoloved with data:", data);
})
.catch((error) => {
    console.error("Promise rejected with error:", error);
});


let promise=new Promise((resolve,reject)=>{
    console.log("i am promise");
    if(1<10){
        resolve (123);
    } 
    reject("something went wrong");
})



function getData(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("Fetching data for id:",dataid);
            resolve("success");
        },2000);
    });
}
let result=getData(123);
result;

getData(101)
    .then(result => {
        console.log("First fetch:", result);
        return getData(102);
    })
    .then(result => {
        console.log("Second fetch:", result);
        return getData(103);
    })
    .then(result => {
        console.log("Third fetch:", result);
    })
    .catch(err => {
        console.error("Error occurred:", err);
    });
