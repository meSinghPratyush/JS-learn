//This keyword and Arrow function...

const user={
    Username:"Pratyush",
    price:999,
    welcomemessage:function(){
        //console.log(`${this.Username}, Welcome to website`);
    }
}

//user.welcomemessage()
//user.Username="Jimmy"
//user.welcomemessage()

//Arrow function...
/*
const addtwo=(num1,num2)=>{
    return num1+num2;
}*/
//console.log(addtwo(4,6))

//implict return...

const addtwo=(num1,num2)=> (num1+num2) //no use of return keyword..
