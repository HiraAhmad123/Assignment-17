//ARRAYS AND LOOP

//Q no 1

var multiArr = [] ;
console.log( multiArr);

//Q no 2

var  multiMatrix =[
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1],
];
console.log(multiMatrix);

//Q no 3

for (var i = 1 ; i <= 10; i++) {
    console.log(i);
}

//Q no 4

var number = +prompt("Enter a number to show its Multiplication Table:");
var length = +prompt("Enter the length of Multiplication table:");

for (let i = 1; i <= length; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}


//Q no 5

var fruits = [ "apple" , "banana", "mango", "orange",
    "strawberry"];

    for (var i=0 ; i < fruits.length ; i++ ){
      console.log (fruits [i]);
    }

 //Q no
 // 6a
 
 var counting =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
 var Counting = Array.from({ length: 10 }, (_, i) => 10 + i);
 console.log ("Counting: " + counting.join(", "));

 //6 b

var reverseCounting = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var reverseCounting = Array.from({ length: 10 }, (_, i) => 10 - i);

console.log("Reverse counting: " + reverseCounting.join(", "));

//6 c

var evenNumbers = [0, 2 , 4 , 6 ,8 ,10 ,12 , 14 , 16 , 18 , 20];

var evenNumbers = Array.from({ length: 11 }, (_, i) => i * 2);
console.log("Even: " + evenNumbers.join(", "));

//6 d

var oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

var oddNumbers = Array.from({ length: 10 }, (_, i) => i * 2 + 1);
console.log("Odd: " + oddNumbers.join(", "));

//6 e

var series = Array.from({ length: 10 }, (_, i) => (i + 1) * 2 + 'k');
console.log("Series: " + series.join(", "));

// Q no 7

var A = ["cake", "apple pie", "cookie", "chips", "patties"];


var userInput = prompt("Welcome to ABC Bakery : Enter the item you want to order:");

if (A.includes(userInput)) {
    alert(`${userInput} :it is available in the bakery.`);
} else {
    alert(`${userInput} :it is not available in the bakery.`);
}

// Q no 8

var  A = [24, 53, 78, 91, 12];


var largestNumber = Math.max(...A);

console.log("The largest number is:", largestNumber);

// Q no 9

var A = [24, 53, 78, 91, 12];

var smallestNumber = Math.min(...A);

console.log("The smallest number is:", smallestNumber);

// Q no 10

console.log("Multiples of 5 from 1 to 100:");
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
   //STRING METHODS

//Q no 1

   
 var firstName = prompt("Enter your first name:");

 var lastName = prompt("Enter your last name:");


 var fullName = firstName + " " + lastName;

 alert("Hello, " + fullName + "! Welcome ...");

 //Q no 2 

 var phoneModel = prompt("Enter your favorite mobile phone model:");

 var  modelLength = phoneModel.length ;

 alert("The length of your favorite mobile phone model is: " + modelLength + " characters.");

// Q no 3 


var Word = "Pakistani";


var indexOfN =  Word.indexOf("n");

if (indexOfN !== -1) {
    alert(`The index of letter "n" in the word "Pakistani" is: ${indexOfN}`);
} 
console.log(indexOfN );


//Q no 4


var Word2 = "Hello World";


var lastIndexOfL = Word.lastIndexOf("l");

if (lastIndexOfL !== -1) {
    alert(`The last index of letter "l" in the Word "Hello World" is: ${lastIndexOfL}`);
}
console.log(lastIndexOfL);



//Q no 5


var word = "Pakistani";


var  characterAtThirdIndex = word.charAt(3);


alert(`The character at index 3 in the word "Pakistani" is: ${characterAtThirdIndex}`);


//Q no 6 


var firstName = prompt("Enter your first name:");


var lastName = prompt("Enter your last name:");


var  fullName = firstName.concat(" ", lastName);


alert("Hello, " + fullName + "! Welcome to you...");


//Q no 7  


var word = "Hyderabad";


var updatedWord = word.replace("Hyder", "Islam");


console.log (`The updated word is: ${updatedWord}`);


//Q no 8

var message = "Ali and Sami are best friends. They play cricket and football together.";

var updatedMessage = message.replace(/and/g, "&");
console.log(updatedMessage);


       // MATH METHODS

// Q no 1

var userInput = prompt("Enter a positive integer:");


var  number = parseFloat(userInput);
//a. number

var number = 3.45214;

console.log ( Number  (number));


//b. round off value of the number

var number = 3.45214;

console.log(Math.round( number));

//c. floor value of the number

var number = 3.45214;

console.log(Math.floor( number));

//d. ceil value of the number

var number = 3.45214;

console.log(Math.ceil(number));