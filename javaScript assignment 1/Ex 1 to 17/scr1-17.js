// Question no 1
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

var a = "Sufiyan";
console.log(`“Hello ${a}, would you like to learn some Python today?”`)


//  3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var a = "Sufiyan";
var b =  a.toLocaleUpperCase();
console.log(b);
b= a.toLocaleLowerCase()
console.log(b);
b = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
console.log(b);


// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log(`Dr. Allama Iqbal once said,"Nations are born in the hearts of poets, they prosper and die in the hands of politicians."`);

// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

    var famous_person = "Dr. Allama Iqbal"
    var message = "Nations are born in the hearts of poets, they prosper and die in the hands of politicians.";
    console.log(famous_person + " once said, " + '"' + message +'"');

// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination,
//  "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

console.log("A\tM\nY")


// 7.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
//  Be sure to enclose your operations in print statements to see the results.

console.log(5+3);
console.log(10-2);
console.log(16/2);
console.log(4*2);

console.log("\n\n\n")
// 8. You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)

// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

var s = 5;
var msg = `${s} is my favorite numbers`;
console.log(msg);

// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific
//  to write because your programs are too simple at this point, just add your name and the current date at the top of each program file.
//  Then write one sentence describing what the program does.


// this progran use my favourit number in its output
var s = 5;
var msg = `${s} is my favorite numbers`;
console.log(msg);



//11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.


var name = ['sufiyan','ahmed','ali','khan'];
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);


// 12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be personalized with the person’s name.

for(i=0;i<name.length;i++){
    console.log("Hello Mr."+ name[i])
}

console.log("\n\n\n");
// 13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
//  Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

tracsport = ['suzuki Alto','Suzuki Swift','Suzuki cultus','Toyota Corolla','Honda civic'];
for(i=0;i<tracsport.length;i++){
    console.log('I would like to own a'+ tracsport[i]);
}

console.log("\n\n\n");
// 14. uest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

guest = ['Umar','Ali','moin','moiz','khan','asad'];
for(i=0;i<3;i++){
    console.log('Mr. ' + guest[i]+' You are invited for the dinner ');
}
console.log("\n\n\n");
// 15..
console.log("Mr. Umar is not coming in dinner")
for(i=1;i<4;i++){
    console.log('Mr. ' + guest[i]+' You are invited for the dinner ');
}

console.log("\n\n\n");


// 16..
guest.splice(0,0,'jons');
guest.splice(3,0,'Sufiyan');
guest.splice(8,0,'uzair');

// guest[0] = 'jons';
// guest[3] = "Sufiyan";
// guest[8] ='Uzair';


console.log("we get a big dining table so we are inviting more people for dinner");
for(i=0;i<guest.length;i++){
    console.log('Mr. ' + guest[i]+' You are invited for the dinner ');
}

console.log("\n\n\n");
//  17... pop the elenents because we have only two people space left ..

console.log('Sorry We are facing an issue . Our dinner table is not avaliable on time we just have space of two people');
for( i=guest.length-1;i>1;i--){
    console.log(`Sorry Mr.  ${guest[i]} We are unable to Invite You to dinner`)
    guest.pop();
}

console.log('\n\nremaining Guests' + guest);
guest.pop();
guest.pop()


console.log('\nending remaining guests are....'+ guest);



