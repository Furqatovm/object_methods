
let arr =[1, 2, 4, 5];


// Reduce methodi

// Array.prototype.Myreduce =function(cb, initilaValue){
//     let accumulator =initilaValue;
//     for (let i =0; i <this.length; i++){
//         accumulator =cb(accumulator, this[i], i, this)
//     } 
//     return accumulator
// };


// console.log(arr.Myreduce((acc, value, index, arr) =>{
//     acc+=value;
//     return acc;
// }, 0))


// filter

// Array.prototype.Myfilter = function(cb){
//     let natija =[]
//     for (let i =0; i<this.length; i++){
//         if(cb(this[i], i, this)){
//             natija.push(this[i]);
//         }
//     }
//     return natija
// };


// console.log(arr.Myfilter(value => value % 2== 0));



// 3-chisi


// Array.prototype.Mysome =function(cb){
//     for (let i =0; i<this.length; i++){
//         if(cb(this[i], i, this)){
//             return true
//         }
//     }

//     return false;
// }

// console.log(arr.Mysome(value => value % 2 !=0))


// 4-chisi
// every 
// let arr2 =[1, 3, 5, 7]
// Array.prototype.Myevery =function (cb){
//     for (let i =0; i < this.length; i++){
//         if (cb(this[i], i, this)){
//             return true
//         } else {
//             return false
//         }
//     }
// }

// console.log(arr2.Myevery(val => val % 2 ==0))


// 5-chisi


// Array.prototype.Finex =function(cb){
//     for (let i =0; i <this.length; i++){
//         if (cb(this[i], i, this)){
//             return this[i]
//         }
//     }
// }


// console.log(arr.Finex(val => val % 2 !=0));