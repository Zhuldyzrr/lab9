//problem number 4

var username = prompt("What's your name?")
document.write("Hi " + username + ", nice to see you! Let's convert dollars into tenge")

//problem number 11
//if statement as we need to know if the number is positive

function promptMe(){
    var number = prompt("Enter amount of dollars (in numbers):");
    console.log();

//this is for problem number 9
if(number % 2 == 0) {
    console.log(number + "is even");
}
else {
    console.log(number + "is odd");
}

//problem number 8, we multiply by 470 since $1 is 470 KZT at the moment
//and money cannot be negative, so if the user inserts negative number
//no multiplication will be done but it will give a related message
{
  if (number > 0) {
    console.log(number * 470 + "KZT");
} else {
  console.log("Money cannot be negative");
}
}
}
