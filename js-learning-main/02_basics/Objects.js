
//Symbol...

//how to add symbols and use its as a key in object?
const sym=Symbol("One piece")
const King={
    "Group":"Strawhats",
    [sym]:"One piece", // This a symbol...
    name:"Luffy",
    bounty:"5 Billion berry",
    family:"Monkey",
    Clan:"D"
}

//console.log(King.Clan);
//console.log(King["Group"]);
//console.log(King[sym]);

//how to freeze an object and avoid value changing on it?

King.bounty="6 Billion berry"
//Object.freeze(King);
//King.Clan="F" // This change wont happen....
//console.log(King);

King.greeting=function(){
    console.log("I am Monkey D luffy and i am gonna be king of the pirates!!!");
    
}
King.greeting2=function(){
    console.log(`Hello user,${this.name}`); // Usage of this and also accessing element of same object using refrence..
    
}
console.log(King.greeting());
console.log(King.greeting2());






