if(true){
    let a=10;
    const b=20;
    var c = 30;
}

//console.log(a);//error
//console.log(b);//error
//console.log(c);//prints.

//nested scope...
// Basically child can access parent variable but parent can't access child variable.

function one(){
    const username="Pratyush"
    function two(){
        const account="Twitter"
        console.log(username);
        
    }
    //console.log(account);
    two();
    
}
one();
