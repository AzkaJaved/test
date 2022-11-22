let raining = true;
//whateever is between parenthesis will be translated to a boolean if boolean is true then condition between if is executed  otherwise condition in else is executed
if(raining){
    console.log("take umbrella");
}else {
    console.log("leave umbrella at home");
}
//using single equal sign for checking if condition will always return true  untill unless it is a empty strings somake sure to use double equal.
let hobby = "coding";
if(hobby == "skating"){
    console.log("i love skating");
}else{
    console.log("i want to learn coding");

}
//practise exercise 4.1

let logIn = false;
console.log(logIn);
if(logIn){
    console.log("yes user logged in");
}else{
    console.log("logged out");
}

if(!logIn){
    console.log("not logged in");
}else{
    console.log("logged in");
}

//practise exercise 4.2
let age = prompt("enter your age here: ");
let userAge = Number(age);
console.log(userAge , typeof(userAge));
let message_1;
if(userAge >= 21){
     message_1 = "you can enter and can buy alcohol";
}else if(age >= 19){
     message_1 = "you can enter but cant buy alcohol";
}else {
     message_1 = "entry denied";
}
console.log(message_1);

//practise exercise no 4.3
let ID = false;
(ID) ? console.log("log in") : console.log("log out");

//switch statements
//practise exercise 4.4
let randomNumber = Math.floor(Math.random()*6);
let answer;
let question = prompt("ask about world cup win probablity: ");
switch(randomNumber){
    case 0 :
        answer = "both teams will play good and compete equally"; 
        break;
    case 1: 
        answer = "team 1 will win";
        break;
    case 2:
        answer = "team 2 will win";
        break;
    default:
        answer = "i have no idea " 
        break;
}
let message = `you asked me this : ${question} and the answer is : ${answer}`;

console.log(message);


