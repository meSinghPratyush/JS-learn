const player={
    player_id:"ArcherJimmy",
    player_name:"Jimmy",
    playerIsLoggedIn:false
}
//console.table(player);

const regularUser={
    email:"Yamalgoat5@gmail.com",
    fullName:{
        userfullname:{
            firstName:"Lamine",
            lastName:"Yamal"
        }
    }
}
//console.log(regularUser.fullName.userfullname.firstName);
//console.log(regularUser.fullName.userfullname.lastName);

const obj1={
    1:"A",
    2:"B"
}
const obj2={
    3:"C",
    4:"D"
}
//Merging two objects...

//const obj3= Object.assign({},obj1,obj2)
//console.log(obj3);

const obj3={...obj1,...obj2} // using spread.
//console.log(obj3);

//accessing elements in array of objects...

const user=[
    {
        email:"p@gmail.com",
        ID:"1"

    },
    {
        ID:"2",
        email:"A@gmail.com"
    },
    {
        ID:"3",
        email:"M@gmail.com"
    }
]

//console.log(user[1].email);

console.log(player);
console.log(Object.keys(player)); // Getting keys in an array..
console.log(Object.values(player));//getting value in an array...
console.log(Object.entries(player));



