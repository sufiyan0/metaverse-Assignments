let magistics = ['Admin', 'David', 'John','Alex','Ali']

function make_great(magarr){
    magarr.forEach(element => {
        console.log(` Great to each magician’s  ${element}`);
    });
}


make_great(magistics);