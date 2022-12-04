let magistics = ['Admin', 'David', 'John','Alex','Ali']
let copyMagistics = magistics;



function make_great(magarr){
    magarr.forEach(element => {
        console.log(` Great to each magician’s  ${element}`);
    });
}


make_great(copyMagistics);