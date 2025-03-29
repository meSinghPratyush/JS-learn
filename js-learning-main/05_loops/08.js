//reduce method....

const arr=[1,2,3,4]
// const total=arr.reduce(function (acc,currval){
//     return acc+currval
// },0)

// console.log(total);

const total=arr.reduce((acc,currval) =>{return acc+currval},0)
console.log(total);

