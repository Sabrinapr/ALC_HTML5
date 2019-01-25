// single line comment
/*

multiline comment

*/

//document.write("<h1>I'm <em>very</em> tired</h1>");

// alert("Warning! I can and will fight you... Warning!");
// confirm("do you like pokemon?");
// prompt("what type of pokemon do you like?");

// var pc = prompt("What is your name?");
Game();

function Game(){
    document.write("Inflicted");
    var playerName = prompt("What is your name?");
    alert("Welcome to the City, " + playerName);
   
    Apartment();
    
    function Apartment(){
        var bedroom1 = prompt("You wake up... Your head is pounding, but you are lying on something comfortable. It takes a couple minutes of tossing and turning, but eventually you decide that you can't go back to sleep. You open your eyes.  Who's room is this? /n -look around /n -go back to bed /n -open door /n - look out window").toLowerCase();
        
        if(bedroom1 == "look around" || bedroom1 == "look"){
            var bedroom1Look = prompt("The room is lit up by a large window to your left.  The room is brightly colored and almost playful looking.  There is a nightstand beside the bed you slept in. On top of the nightstand is a picture. There is a door to the right of you. Everything is eerily quiet.");
        }
        else if(bedroom1 == "go back to bed" || bedroom1 == "sleep"){
            alert("You go back to tossing and turning. You basically just wasted around 10 minutes of your life.  Are you happy now?");
            var resume = confirm("You seem to lack motivation or even just basic knowledge to continue this game.  Are you sure you want to continue?");
            if(resume){
                bedroom1();
            }
            else{
                alert("Boring. Game over.");       
            }
        }
    }



}