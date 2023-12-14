
// for(let nilai = 0; nilai>-5 ;nilai--){
//     console.log(nilai);
// }


// const car = {warna:"ungu",merk:"bmw",kondisi:"seken"}

// for (let data in car){
//     if(data === "merk"){
//         console.log(car[data]);
//     }else{
//         console.log("bukan merk")
//     }
// }


// const baju = ["pink","black","block"];

// for(let data of baju){
//     console.log(data);
// }


// function pelajar(){
//     console.log("Nama");
//     console.log("Umur");
//     console.log("Nilai");
// }

// let pelajar = function (nama,umur,nilai) {
//     console.log("Nama"+nama);
//     console.log("Umur"+umur);
//     console.log("Nilai"+nilai);
// }

// pelajar("bambang",21,"A"); 
// pelajar("lidia sutejo",4,"B+");
// const pelajar = new Function('nama','umur','nilai','console.log("Nama"+nama);console.log("Umur"+umur);console.log("Nilai"+nilai);');

// pelajar("bambang",21,"A")
// console.log()
// let variable = () => {

// }




// //REST PARAMETER
// function perkalian(...restparam){
//     let hasil=1 ;
//     for(let number of restparam){
//         hasil *=number
//     }
//     return hasil;
// }


// console.log(perkalian(1,5,2,5,10,20,30));
// console.log(perkalian(30,20));


//OBJECT

// const macan ={
//     jenis:"tutul",
//     umur:20,
//     kelamin:"cewean",
//     anak:{
//         jenis:"apaja",
//         umur:2,
//     },
//     infomacan:function(kataTambahan){
//         return `Macan ${this.jenis} berumur ${this.umur}, mempunyai anak berjenis ${this.anak.jenis}.${kataTambahan}`;
//     }
// }

// macan.jenis="badak";
// console.log(macan.infomacan("Hore dia punya anak"));


// function myDisplayer(some) {
//   console.log(some);
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);
//   // Create an Array
// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// // Call removeNeg with a callback
// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// // Display Result
// console.log(posNumbers)

// // Keep only positive numbers
// function removeNeg(numbers, callback) {
//   const myArray = [];
//   for (const x of numbers) {
//     if (callback(x)) {
//       myArray.push(x);
//     }
//   }
//   return myArray;
// }


// setTimeout(myFunction, 3000);
// setTimeout(()=> console.log("mantap"), 6000);
// console.log("asikkk")
// function myFunction() {
//   console.log("I love You !!") ;
// }


//promises


// myDisplayer("asik pokoknya")
// let myPromise = new Promise(function(myResolve, myReject) {
//   let x = 0;

// // The producing code (this may take some time)

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });
// myDisplayer("mantap")
// myPromise.then(
//   function(value) {myDisplayer(value);},
//   function(error) {myDisplayer(error);}
// );


// let promise = true;

// const Promises = new Promise((resolve, reject) => {
// 	if(promise){
// 		resolve('promises has been kept')
// 	}else{
// 		reject('promise not kept')
// 	}
// })

// Promises
// .then(res => console.log(`Ok ${res} !`))
// .catch(res => console.log(`Its Ok ! ${res}`))


// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//       resolve("I love You !!");
//     });
//     console.log("mantappp");
//     console.log("mantappp");
//     console.log(await myPromise);
//     console.log("mantappp");
//     console.log("mantappp");
//     console.log("mantappp");
//     console.log("mantappp");
//     console.log("mantappp");
//     console.log("mantappp");
//   }
  
//   myDisplay();


async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I love You !!");}, 3000);
    });
    console.log(await myPromise);
    console.log("mantappp");
    console.log("mantappp");
    console.log("mantappp");
  }
  
  myDisplay();