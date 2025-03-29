
const myarr=[1,2,3,4,5]
const arr=new Array("Pratyush","kumar")
/*
console.log(myarr);
console.table(arr);
*/

//methods of array
/*
myarr.push(10)
myarr.pop()
*/
myarr.unshift(5) //inserts the value at start of array.
myarr.shift() // Removes the first element from the array.
//console.log(myarr);
//console.log(myarr.includes(2)); //Searches in array if 2 exist or not
//console.log(myarr.indexOf(4)); // Tells us the index of 4.
//console.log(myarr.join()); //Binds array and converts it into string..

//Slice and splice..
/*
const arr1=[0,1,2,3,4,5]
console.log("A",arr1);

const mnarr1=arr1.slice(1,3)
console.log(mnarr1);
console.log("B",arr1);

const mnarr2=arr1.splice(1,3)
console.log("C",arr1);
console.log(mnarr2);
*/

//more methods..

//merging two arrays....

//1> Concat.
const strawhats=["Luffy","Zoro","sanji"]
const Redhaired=["Shanks","bekmann","Yasoop"]

const Goats=strawhats.concat(Redhaired);

//console.log(Goats);

//2> Spread.

const Goats1=[...strawhats,...Redhaired]
//console.log(Goats1);

//**************converting diffrent types into array****************...

//console.log(Array.isArray("Luffy")); // false - not an array
//console.log(Array.from("Luffy")); // converts to array.
const myinfo={
    name:"Pratyush",
    Roll: "2470237"
}
//console.log(Array.from(myinfo.name));
//console.log(Array.from(myinfo.Roll));

//************Storing multiple elements into one array ***************

let score1=100;
let score2=200;
let score3=300;
let score4=400;
console.log(Array.of(score1,score2,score3,score4));










