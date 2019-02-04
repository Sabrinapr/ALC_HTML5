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
   //<body>
      // <script>
       //javascript for inventory
        var inventory = {
            Bat: 0,
            Keys: 0,
            Food: 0,
            Money: 0,
            
        }

function Game(){
    
    document.write("Inflicted");
    var playerName = prompt("What is your name?");
    alert("Welcome to the City, " + playerName +".");
   
    Apartment();
    
    function Apartment(){
        var bedroom1 = prompt("You wake up... Your head is pounding, but you are lying on something comfortable. It takes a couple minutes of tossing and turning, but eventually you decide that you can't go back to sleep. You open your eyes.  Who's room is this? /n -look around /n -go back to bed").toLowerCase();
        
        if(bedroom1 == "look around" || bedroom1 == "look"){
            var bedroom1Look = prompt("The room is lit up by a large window to your left.  The room is brightly colored and almost playful looking.  There is a nightstand beside the bed you slept in. On top of the nightstand is a picture. There is a door to the right of you. Everything is eerily quiet.");
        if(bedroom1 == "look at picture"){
            alert("You pick up the picture to get a better look at it.  Its a family of 4 little girls and their parents.  They seem to be having a good time at a park or something. are these the owners of this room? You have no idea and recognize none of the faces.");
        }
            else if(bedroom1 == "throw picture"){
                alert("You threw the picture and the glass shatters, breaking the silence. You just destroyed the one thing these people cannot replace.  Good job.");
            }
                else{
                    alert("please leave these innocent people's cherished memories alone.");
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
            else{
                alert("I don't know what"+bedroom1+"is.")
            }
     
         
 }
    function Hallway(){
        var hallway = prompt("There are stairs to the right and a door to the left in this hallway.");
    if(hallway == "look around" || hallway == "look"){
        var hallwaylook = prompt("A hallway. There are stairs to the right and a door to the left in this hallway and a window at the end of it.")
    }
     if(hallway == "open door" || hallway == "go left"){
        alert("the door is locked.  You absolutely cannot open it without a key. No matter how many times you slam yourself against it.");
       
                    var resume = confirm
            if(resume){
                Hallway();
            }
     }
        
        if(hallway == "go right"){
             var resume = confirm
            if(resume){
                KitchenRoom();
                }
        }
        if(hallway == "use key on door" && inventory.key >= 1){
            var doorOpen = prompt("You'd be suprised how much easier it is to open a door with a key instead of just slamming yourself against it.  The door opens with so much ease that even you would wonder if the bruises are where worth slamming your body weight against it.")
            
        }
    }
   
    function KitchenRoom(){
        var stairview = prompt("You are downstairs. It appears to be an open floor kitchen and living room.  Suprisingly, there is no hum from the fridge, and the kitchen appliances don't seem to have any energy in them. There is a long table with a couple of items on it, and a comfy seeming couch. There is also a door leading out of the apartment.");
    
        if(stairview == "look at table" || stairview == "table"){
            var table = prompt("A long fancy wood table. There is a key on the table.");
            
        }
        if(stairview == "take key" || stairview == "key"){
        //adds key
            inventory.key ++; 
            alert("you own " +inventory.key+"keys"); 
        //takes money out of account inventory.coins = inventory.coins - 100; inventory.coins -=100; alert("you have " +inventory.coins+"coins remaining"); 
        }
    }
     function Bedroom2(){
        var closet
    }
}