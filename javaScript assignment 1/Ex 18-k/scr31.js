//  From code of ex 28
let age;
if (age == null){
    console.log("We need to find some users");
}else{

    if (age < 2) {
        console.log("Person is a baby");
    
    } else if (age >= 2 && age < 4) {
        console.log("The person is a toddler");
    } else if (age >= 4 && age < 13) {
        console.log("Person is a kid");
    } else if (age >= 13 && age < 20) {
        console.log("The person is Teanager");
    } else if (age >= 20 && age < 65) {
        console.log("The person is Adult");
    } else if (age >= 65) {
        console.log("Person is elder");
    }
}

//  from ex 30 array

// let username = ['sufiyan', 'ahmed', 'admin' , 'david', 'john'];
let  username = []

if(username.length === 0){
    console.log("We need to find some users");
}else {
    
    for ( let i = 0;i< username.length ; i++){
        if(username[i] === 'admin'){
            console.log("Hello admin, would you like to see a status report?");
        }else {
            console.log(`Hello ${username[i]} thank you for logging in again.`);
        }
    }
}



