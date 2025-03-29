//for in loop...
//iterating through objects...

const myobj={
    js:"Javascript",
    CPP:"c++",
    RB:"ruby",
    swift:"Swift by apple"
}

for (const key in myobj) {
    //console.log(`${key} extention for file name ${myobj[key]}`);
    
}

const arr=["js","c++","Swift","Ruby"]

for (const key in arr) {
   // console.log(key);
    
    //console.log(key,arr[key]);
    
}

const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('FN',"FRANCE")
map.set('SP',"SPAIN")

for (const key in map) {
    //console.log(key); //not iteratable....
    
}

//for Each loop....
//higher order functions...

const teams=["Barca","Madrid","Man city","Man united"]

teams.forEach( function (val){
    //console.log(val);
    
})

//print me function....

function printme(item){
   // console.log(item);
    
}
//teams.forEach(printme)

//array of objects in for each...

const mycoding=[
    {
        language:"JavaScript",
        Filename:"JS"
    },
    {
        language:"java",
        Filename:"java"
    },
    {
        language:"Python",
        Filename:"py"
    }

]
mycoding.forEach( (item)=>{
    //console.log(item.language,item.Filename);
})