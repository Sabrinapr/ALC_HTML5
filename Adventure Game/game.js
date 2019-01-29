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
           var resume = confirm
            if(resume){
                Apartment();
            }
        }
        if(bedroom1 == "look at picture"){
            var bedroom1picture = prompt("You pick up the picture to get a better look at it.  Its a family of 4 little girls and their parents.  They seem to be having a good time at a park or something. are these the owners of this room? You have no idea and recognize none of the faces.");
            var resume = confirm
            if(resume){
                Apartment();
            }
        }
        if(bedroom1 == "look out window" || bedroom1 == "window"){
            var bedroom1Window = prompt("You wander to the window. It appears that you are in a city, something that should be full of human life. But the streets are completely desolate, cars have been tipped over, and there is not a single thing to be heard or seen.  What happened when you fell asleep?");
            var resume = confirm
            if(resume){
                Apartment();
            }
        }
        if(bedroom1 == "open door" || bedroom1 == "go right"){
            var bedroom1Open = prompt("You open the door to find a long hallway lit by a window at the end of it.");
            var resume = confirm
            if(resume){
                Hallway();
            }
        }
        else if(bedroom1 == "go back to bed" || bedroom1 == "sleep"){
            alert("You go back to tossing and turning. You basically just wasted around 10 minutes of your life.  Are you happy now?");
            var resume = confirm("You seem to lack motivation or even just basic knowledge to continue this game.  Are you sure you want to continue?");
            if(resume){
                Apartment();
            }
            else{
                alert("Boring. Game over."); 
            }
        }

     
         
 }
    function Hallway(){
        var hallway = prompt("There are stairs to the right and a door to the left in this hallway.");
    if(hallway == "look around" || hallway == "look"){
        var hallwaylook = prompt("A hallway. There are stairs to the right and a door to the left in this hallway and a window at the end of it.")
    }
    }
}