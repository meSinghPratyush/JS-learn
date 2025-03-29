function addition(num1,num2){
    return num1+num2
}
const sum=addition(3,4)
//console.log(sum);

function loginusermsg(username="Unnamed user"){
    if(!username){
        console.log("Please enter a username");
        
    }
    else{
        return `${username} Just logged in`
    }
    
}

//console.log(loginusermsg("Pratyush"));

//Shopping cart problem...

function calculateCartPrice(...price){
    return price
}
//console.log(calculateCartPrice(20,200,2000,400));

 //handling object in function....

 const user={
    username:"Pratyush",
    userID:"2470237"
 }
 function userDetails(object1){
    //console.log(`Username is : ${object1.username} and userID is :${object1.userID}`);
    
 }

 //userDetails(user);

 //Another way to declare functions...

 const addtwo=function(num){
    return num+2;
 }
 console.log(addtwo(5));
  
