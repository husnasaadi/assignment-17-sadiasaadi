// chapter 14 to 16 questions

// q1

let studentsName = [];

// q2

const names = [
   { name : "john" },
   { name : "john" },
   { name : "john" },
   { name : "john" },
   { name : "john" },
]

// q3

let animalsNames = ["cat", "dog" , "donkey" , "lion", "horse"];

// q4

let wholeNumbers = [0, 1 , 2 , 3, 4];

// q5

let booleanArray = [true, false];

// q6

let mixedArray = [ "dog", true, 6 , "lion" , false , 7];

// q7

 let qualification = ["SSC","HSC","BSC","BS","BCOM","MS","PHD",];
 document.write("education qualification in pakistan <br>" + " " + qualification);


// Q9

let coloursName = ["blue", "pink","yellow", "black", "purple","grey"];
 document.write(coloursName);





// chapter 17 to 20 questions arrays and loops

// q1

var Array =[[]];

// q2

var multiArray = [0,1,2,3 ,  ["<br>" ,1,0,1,2 ], [ "<br>",2,1,0,1]];
document.write(multiArray +"<br>");

// q3

for ( i = 1; i<=10 ; i++) {
   document.write(i +"<br>");
}

// q4

var num = +prompt("enter a num to show the table") ;
var range = +prompt("enter a length");
for (var i = 1 ; i<=range ;i++) {
   document.write(num + "*" + i +"=" + num * i + "<br>");
}



// chapter 14 (if statement nested)

// q1

 var password = 7
 if (password !== ""){
       if(password.length <=5){
         alert("password must be greater than 5");
       }
 
else {
   alert("OK")
}
}

// q2

var a=1;
var c ="MAX";
if (a===1){
   if(c==="MAX"){
      alert("OK");
   }
}

// Q3

var a=1;
var c ="MAX";
if (a===1 && c==="MAX"){
   alert("OK");
}

// Q4

var a =23;
var b =23;
if (a===b){
   if(a<=b){
      alert("first variable is equal to second variable")
   }
}

// chapter 15 (array 1)

// q1

var Array =[];

// q2

var Array =["sadia"];

// q3

 var alphabets = ["h","i","j","k"];
 alert(alphabets[2]);

//  chapter 16 (array )

// q1

 var user = ["alphabets"];
 user.push("capital");
 alert(user[user.length-1]);


// q2

var alphabets = ["h", "i", "j", "k"];
 alphabets.pop();
 console.log(alphabets);


// chapter 17 to 20 (for loops)

// q1

for (let i=0; i<=10 ;i++){
   console.log(i);

}

// q2
var i = 12;
for (let i= 0 ; i <= 12 ; i++) {
   console.log(i)
}

// q3

var i = 4;
for (i=0 ; i<=4 ; i++);

// q5

for (i=3 ; i >0 ; i--){
   console.log("iteration", i);
}

// q7

var flag = true;

// q8

var pet = ["cat", "dog", "goat", "horse", "parrot"];
for (i= 0 ;i < pet.length ; i++) {
   console.log(i);
}


// q10

var userName = ["sadia", "husna", "sumaiya", "Sumaira" , "humaira", "yusra"];
var firstName = prompt("enter first name");
for (let i = 0 ; i<userName.length ; i++){
   if (userName[i]===firstName){
      alert("enter");
      break;
   }
   else{
      alert("please write correct user name");
   }
}



