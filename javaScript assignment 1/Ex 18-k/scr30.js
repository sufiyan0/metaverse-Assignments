let username = ['sufiyan', 'ahmed', 'admin' , 'david', 'john'];

for ( let i = 0;i< username.length ; i++){
    if(username[i] === 'admin'){
        console.log("Hello admin, would you like to see a status report?");
    }else {
        console.log(`Hello ${username[i]} thank you for logging in again.`);
    }
}