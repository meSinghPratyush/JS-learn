//date....
/*
let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());
console.log(typeof(mydate));
*/
//let mycreatedDate=new Date(2025,2,12,14,16,0);

//Date...

let mycreatedDate=new Date("12-03-2025");
/*
console.log(mycreatedDate.toLocaleString());
console.log(mycreatedDate.toUTCString());
*/

//Timestamp....

let myTimestamp=Date.now();
/*
console.log(myTimestamp);
console.log(mycreatedDate.getTime());
*/

//converting milliseconds in seconds....
console.log(Math.floor(myTimestamp/1000));

// Some more methods of Date....
let newDate= new Date();
/*
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());
*/

// An important function and customizing date format...

console.log(newDate.toLocaleString('default',{weekday:"long"}));






