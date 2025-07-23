
let arr =[1, 2, 4, 5];

Array.prototype.Myreduce =function(cb, initilaValue){
    let accumulator =initilaValue;
    for (let i =0; i <this.length; i++){
        accumulator =cb(accumulator, this[i], i, this)
    } 
    return accumulator
};


console.log(arr.Myreduce((acc, value, index, arr) =>{
    acc+=value;
    return acc
}, 0))