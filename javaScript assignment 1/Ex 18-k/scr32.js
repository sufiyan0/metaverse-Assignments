let currentUser = ['sufiyan', 'ahmed', 'admin' , 'david', 'john'];
let newUser = ['Khan', 'Ali','Sufiyan','Alex','John','JOHN']


for(let i = 0 ; i< newUser.length ; i++){
    if(currentUser.includes(newUser[i].toLowerCase())){
        console.log("User will need to enter a new username");
    }else{
        console.log("User name is Avaliable");
        currentUser.push(newUser[i].toLowerCase())

    }
}

console.log(currentUser);


