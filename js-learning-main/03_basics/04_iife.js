//IIFE functions...
//()()-> first () = defination and second () is execution.
(function chai(){
    console.log(`DB CONNECTED`);
})();

// if we did not put semicolon here then we get error.

( (name)=>{
    console.log(`DB CONNECTED ${name}`);
    
} )("Pratyush")