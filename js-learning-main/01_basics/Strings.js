const name="Luffy"
const bounty="5 Billion berry"
//console.log(`Hello my name is ${name} and my bounty is ${bounty}.`);
 
//declaring a string in a diffrent way....
//Note- This way of declaring string gives us access to diffrent kind of methods and functions...

const gameName=new String("RDR3-2025")
/*
console.log(gameName.length); // 4
console.log(gameName.toLowerCase()); //rdr2
console.log(gameName.charAt(2));//R
console.log(gameName.indexOf('R'));//0
console.log(gameName[3]); // 2        
*/
//Substring and slicing...
/*
const substr=gameName.substring(0,3) //gives a substring between this range..
console.log(substr);

const slice2 = gameName.slice(-4,-1)//202
console.log(slice2);
*/

//trip & replace/....

//Trim - Removes all starting and end spaces...

const king= "       I am Monkey D Luffy.        "
console.log(king.trim()); //        I am Monkey D Luffy.        
console.log(king); // I am Monkey D Luffy.

//replace....

const url = "https://onepiece.com/one%20piece"

console.log(url.replace('%20','-'));

//includes - Check if something is included in string or not.
// Split - Split the strings on basis of spaces.




