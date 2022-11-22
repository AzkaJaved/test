//rock paper scissors game 
let gameArray = ["rock", "paper", "scissors"];
let computer = Math.floor(Math.random()*3);
let player = Math.floor(Math.random()*3);
let statement = "player selected " + gameArray[player] + " " + "vs computer selected " + gameArray[computer] + " ";
if(player === computer){
    statement += "it is tie";
}
else if (player>computer){
    if((player==2 )&& (computer==0)){
        statement += "computer won";
    }else{
        statement += "player won"
    }
}
else{
    if((computer == 2) && (player==0)){
        statement += "player won";
    }
    else{
        statement += "computer won";
    }
    } 
console.log(statement);

// chapter project 2
//friend checker game
let friendName = prompt("enter your name here");
let friendStatus;
switch(friendName){
    case "robin":
        friendStatus = "class-mate";
        break;
    case "laura":
        friendStatus = "may be friend";
        break;
    case "anie":
        friendStatus = "not a friend";
        break;
    default:
        friendStatus= "no idea";
        break;

}
console.log(friendName, friendStatus);


//chapter project
let userNumber = prompt("enter any number");
userNumber = Number(userNumber);
console.log(userNumber , typeof(userNumber));
let dynamicNumber = 100;
let result;
    if(userNumber>dynamicNumber){
        result = "user number is greater than dynamic number";}
        
    else if(userNumber<dynamicNumber){
        result = "user number is less than dynamic number";}
    else{
        result = "both equal";
    }   
    console.log(result);

