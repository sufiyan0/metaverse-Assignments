// 18...
console.log("Ex 18 \n\n")

let placs = ['kashmir','Naran','kagan','Sawat','Gilgit','Baldistan'];
console.log(placs);

// for(i=0;i<placs.length;i++){
//     newp[i] = placs[i];
// }



let newp = placs.slice().sort();
newp.sort();
console.log(newp);
console.log(placs);
let reverseAray = newp.slice().reverse();
console.log(reverseAray);
console.log(placs)
placs.reverse();
console.log(placs);
placs.reverse();
console.log(placs);

placs.sort();
console.log(placs);
placs.reverse();
console.log(placs);

// Ex 19
console.log("\n\nEx No: 19 \n\n");


guest = ['Umar','Ali','moin','moiz','khan','asad'];

console.log(`We are inviting ${guest.length} people for the dinner`);


// Ex No:20
console.log("\n\nEx No: 20 \n\n");


let cars = ['suzuki Alto','Suzuki Swift','Suzuki cultus','Toyota Corolla','Honda civic'];
let VisitingPlaces = placs;
let countries = ['Pakistan','China','Afghanisan','India','Canada','USA'];
let cities= ['Karachi','Islamabad','Lahore','Hydrabad'];

let data = [];

let alldata =data.concat(cars,VisitingPlaces,countries,cities);
console.log(alldata); 


// Ex 21....
console.log("\n\nEx No: 21 \n\n");


