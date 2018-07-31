var bat1 = 0;
var userscore = 0;
var computerscore = 0;
var batting = document.getElementById("bat");
var bowling = document.getElementById("bowl");
var result = document.getElementById("result");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var bowlone = document.getElementById("bowlone");
var bowltwo = document.getElementById("bowltwo");
var bowlthree = document.getElementById("bowlthree");
var bowlfour = document.getElementById("bowlfour");
var bowlfive = document.getElementById("bowlfive");
var bowlsix = document.getElementById("bowlsix");
var usernamescore= document.querySelector(".userscore");
var computerscore11= document.querySelector(".computerscore");
var options = document.querySelector(".options");

alert("Welcome to Hand-Cricket Game! The game flow will be as follows: First the user will bat and he choice the any number from 1 to 6, if he chooses the same number as computer then he will be out! After the user is out, user will have to bowl and if he chooses the same number as computer then computer will be out! Finally see the scoreboard to see who WON the game!");

function computer()
{
var choice = ["1","2","3","4","5","6"];
var random = Math.floor(Math.random() * 6); 
    return choice[random];
}



batting.addEventListener('click',function(){
    bat();
    alert("Right now you are batting, select the number beside the bat icon!");
    console.log("Right now you are batting");
})

function bat(){
one.addEventListener('click',function(){
    batgame("1");
    console.log("pressed button 1");
})

two.addEventListener('click',function(){
    batgame("2");
    console.log("pressed button 2");
})

three.addEventListener('click',function(){
    batgame("3");
    console.log("pressed button 3");
})
    
four.addEventListener('click',function(){
    batgame("4");
})
    
five.addEventListener('click',function(){
    batgame("5");
})
    
six.addEventListener('click',function(){
    batgame("6");
})
}

function batgame(userchoice)
{   
    console.log("Batting user scores  " +userchoice);
    
    var computerchoice = computer();
    console.log("Batting computer scores " +computerchoice);
    switch( userchoice + computerchoice)
        {
                case "12":
                case "13":
                case "14":
                case "15":
                case "16":
                run( userchoice , computerchoice);
                break;
                case "21":
                case "23":
                case "24":
                case "25":
                case "26":
                run( userchoice , computerchoice);
                break;
                case "31":
                case "32":
                case "34":
                case "35":
                case "36":
                run( userchoice , computerchoice);
                break;
                case "41":
                case "42":
                case "43":
                case "45":
                case "46":
                run( userchoice , computerchoice);
                break;
                case "51":
                case "52":
                case "53":
                case "54":
                case "56":
                run( userchoice , computerchoice);
                break;
                case "61":
                case "62":
                case "63":
                case "64":
                case "65":
                run( userchoice , computerchoice);
                break;
                case "11":
                case "22":
                case "33":
                case "44":
                case "55":
                case "66":
                out( userchoice , computerchoice);
                break;
                
        }
}

function run(userchoice, computerchoice)
{   
    var run = parseInt(userchoice);
    userscore = userscore + run;
    options.innerHTML = "User choose the number " + userchoice + " and computer choose the number " + computerchoice;
    return userscore;
}

function out(userchoice,computerchoice)
{
    var userscore = run(userchoice,computerchoice);
    console.log("out");
    var runout = parseInt(userchoice);
    var score = userscore - runout;
    console.log(score);
    usernamescore.innerHTML = score;
    options.innerHTML = "User finally score is " + score;
    alert("User is OUT! Batting over, time to bowl!");
    return score;
}


////////////////////////////////////////////////////////////////////


bowling.addEventListener('click',function(){
    alert("Right now you are bowling, select the number beside the ball icon!");
    console.log("Right now you are bowling, select the number beside the ball icon!");
    userbowl();
})

function userbowl(){
bowlone.addEventListener('click',function(){
    bowlgame("1");
    console.log("pressed button 1 of bowling");
})

bowltwo.addEventListener('click',function(){
    bowlgame("2");
    console.log("pressed button 2");
})

bowlthree.addEventListener('click',function(){
    bowlgame("3");
    console.log("pressed button 3");
})
    
bowlfour.addEventListener('click',function(){
    bowlgame("4");
})
    
bowlfive.addEventListener('click',function(){
    bowlgame("5");
})
    
bowlsix.addEventListener('click',function(){
    bowlgame("6");
})
}

function bowlgame(userchoice)
{   
    console.log("Bowling user scores  " +userchoice);
    var computerchoice = computer();
    console.log("Bowling computer scores" +computerchoice);
    switch( userchoice + computerchoice)
        {
                case "12":
                case "13":
                case "14":
                case "15":
                case "16":
                bowl( userchoice , computerchoice);
                break;
                case "21":
                case "23":
                case "24":
                case "25":
                case "26":
                bowl( userchoice , computerchoice);
                break;
                case "31":
                case "32":
                case "34":
                case "35":
                case "36":
                bowl( userchoice , computerchoice);
                break;
                case "41":
                case "42":
                case "43":
                case "45":
                case "46":
                bowl( userchoice , computerchoice);
                break;
                case "51":
                case "52":
                case "53":
                case "54":
                case "56":
                bowl( userchoice , computerchoice);
                break;
                case "61":
                case "62":
                case "63":
                case "64":
                case "65":
                bowl( userchoice , computerchoice);
                break;
                case "11":
                case "22":
                case "33":
                case "44":
                case "55":
                case "66":
                computerout( userchoice , computerchoice);
                break;
        }
}

function bowl(userchoice, computerchoice)
{   
    var run = parseInt(computerchoice);
    computerscore = computerscore + run;
    options.innerHTML = "Computer choose the number " + computerchoice + " and user choose the number " + userchoice;
    return computerscore;
}

function computerout(userchoice,computerchoice)
{
    var computerscore = bowl(userchoice,computerchoice);
    console.log("out");
    var runout = parseInt(computerchoice);
    var score = computerscore - runout;
    console.log(score);
    computerscore11.innerHTML = score;
    options.innerHTML = "Computer final score is " + score;
    alert("Computer is OUT! Game over, check the score to see who won the match!");
    return score;    
}

result.addEventListener('click',function(){
    result1();
    console.log("showing results");
})

function result1()
{   
    var finaluser =  out() ;
    console.log(finaluser);
    var finalcomputer =  computerout();
    console.log(finalcomputer);
    computerscore11.innerHTML = finaluser;
    usernamescore.innerHTML = finalcomputer;
    console.log("userscore is" +userscore);
    
    if (finalcomputer > finaluser)
    {
        options.innerHTML = "Computer wins";
        console.log("computer wins");
    }
    else if(finaluser>finalcomputer){
        options.innerHTML = "User wins";
console.log("user wins");
    }
    else{
        options.innerHTML = "Its a Draw";
    }
}

