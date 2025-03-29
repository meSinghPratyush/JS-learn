//for of loop..

const arr=[1,2,3,4,5,6]
for (const num of arr) {
    //console.log(num);
    
}

const greetings="Hello nerds"

for (const word of greetings) {
    if(word===' '){
        continue
    }
    else{
        //console.log(`Each character is :${word}`);
    }
    
}
//maps datatype...
//Map is not iteratable.....
const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('FN',"FRANCE")
map.set('SP',"SPAIN")

for (const [key,value] of map) {
   // console.log(key," -: ",value);
    
}

const myobj={
    'Game1':"NFSMW",
    'GAME2':"SPIDERMAN"
}
for (const [key,game] of myobj) {
    console.log(key," -: ",game); //not iteratable using for-of loop
    
}
