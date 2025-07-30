console.log("Hello,Welcome to the Beast Burgers!");
console.log("Before we proceed further,Let's create your account!");

var username = prompt("Create your Username");
var password = prompt("Create your Password");
console.log("You have created your account successfully");

console.log("Please enter your login credentials!");
var tryuser = prompt("Enter your Username");
var trypass = prompt("Enter your Password");
while(username!=tryuser && password!=trypass)
    {
        console.log("Your username or password is inccorect,please try again!");
        var tryuser = prompt("Enter your Username");
        var trypass = prompt("Enter your Password");
    }
console.log("You have successfully logged in");

var balance = 10;
console.log("Your Current Balance is " +balance+ "dollars");
var q1= prompt("Do you want to add balance?");
if(q1=="yes")
{
    var q2 = prompt("Enter the amount to be added in your balance");
    var balance = balance + Number(q2);
    console.log("Your new balance is " +balance+ "dollars");
    
}else
{
    console.log("No worries,Lets proceed further");
}

var q4 = prompt("Would you like to have a burger?");
if(q4=="yes")
{
    console.log("We have Variety of Burgers,Like: ");
    var burgers = ["Chicken Fiery Burger","Cheese loaded Burger","Veg Crispy Burger"];
    var prices = [2,3,4];

    console.log("Choice 1: " +burgers[0]+ " " +prices[0]+ "dollars");
    console.log("Choice 2: " +burgers[1]+ " " +prices[1]+ "dollars");
    console.log("Choice 3: " +burgers[2]+ " " +prices[2]+ "dollars");

var q5 = prompt("Which Burger would you like to have");

    if(q5=="Choice 1")
    {
        console.log("You have ordered a " +burgers[0]);
        console.log("The Total will be: " +prices[0]+ "dollars");
        var balance = balance - prices[0];
        console.log("You have " +balance+ "dollars left in your Balance!");
    }else if(q5=="Choice 2")
    {
        console.log("You have ordered a " +burgers[1]);
        console.log("The Total will be: " +prices[1]+ "dollars");
        var balance = balance - prices[1];
        console.log("You have " +balance+ "dollars left in your Balance!");
        
    }else if(q5=="Choice 3")
    {
        console.log("You have ordered a " +burgers[2]);
        console.log("The Total will be: " +prices[2]+ "dollars");
        var balance = balance - prices[2];
        console.log("You have " +balance+ "dollars left in your Balance!");
        
    }

    var q7 = prompt("Would you like anything else?");
    if (q7=="yes")
    {
        var items = ["Coke","Fries","Shakes"];
        var prices2 = [2,5,10];
        console.log("Choice 1: Coke" +items[0]);
        console.log("Choice 2: Fries" +items[1]);
        console.log("Choice 3: Shakes" +items[2]);

        var q8 = prompt("Which one of the choices would you like to have with?");

        if(q8=="Choice 1")
        {
            console.log("You have ordered " +items[0]);
            console.log("It will cost you " +prices2[0]+ "dollars");
            var balance = balance - prices2[0];
            console.log("You have " +balance+ "dollars left in your Balance!");
        }else if(q8=="Choice 2")
        { 
            console.log("You have ordered " +items[1]);
            console.log("It will cost you " +prices2[1]+ "dollars");
            var balance = balance - prices2[1];
            console.log("You have " +balance+ "dollars left in your Balance!");
        }else if(q8=="Choice 3")
        {
             console.log("You have ordered " +items[2]);
            console.log("It will cost you " +prices2[2]+ "dollars");
            var balance = balance - prices2[2];
            console.log("You have " +balance+ "dollars left in your Balance!");
        }
    }
    
var q6 = prompt("Would you like to give us a feedback?");

if(q6=="yes")
{
    var q7 = prompt("FEEDBACK: ");
    console.log("We really appreciate for giving the feedback,Thank You!");
    
}else if(q6!="yes")
{
    console.log("No worries,Have a good day!");
}
    
}else 
    {
        console.log("Thanku for visting!,Have a good day!");
    }