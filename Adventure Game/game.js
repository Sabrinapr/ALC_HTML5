// single line comment
/*

multiline comment

*/

//document.write("<h1>I'm <em>very</em> tired</h1>");

// alert("Warning! I can and will fight you... Warning!");
// confirm("do you like pokemon?");
// prompt("what type of pokemon do you like?");

// var pc = prompt("What is your name?");

//<body>
       //<script>
//NEEDS SCRIPT FOR LET AND CONSTANT!!!
       
//<h1>Inflicted v1.0
//<p>Made by: Sabrina Ciel Pray
//<script>
//javascript for inventory
var inventory = {
            bat:0,
            keys:0,
            food:0,
            coins:100,
            
        }

	

function GetRandInt(max){
	var randInt = Math.floor(Math.random()* Math.floor(max));

	return randInt;

}
Game();
function Game(){
    
    document.write("Inflicted");
    var playerName = prompt("What is your name?");
    alert("Welcome to the City, " + playerName +".");
   
    Apartment();
    
    function Apartment(){
        var bedroom1 = prompt("You wake up... Your head is pounding, but you are lying on something comfortable. It takes a couple minutes of tossing and turning, but eventually you decide that you can't go back to sleep. You open your eyes.  Who's room is this? /n -look around /n -go back to bed").toLowerCase();

        switch(bedroom1){
            case "look around" || "look":
            var bedroom1Look = prompt("The room is lit up by a large window to your left.  The room is brightly colored and almost playful looking.  There is a nightstand beside the bed you slept in. On top of the nightstand is a picture. There is a door to the right of you. Everything is eerily quiet.")
                if(bedroom1 == "look at picture")
           alert("You pick up the picture to get a better look at it.  Its a family of 4 little girls and their parents.  They seem to be having a good time at a park or something. are these the owners of this room? You have no idea and recognize none of the faces.");
            
            else if(bedroom1 == "throw picture"){
                alert("You threw the picture and the glass shatters, breaking the silence. You just destroyed the one thing these people cannot replace.  Good job.");
            }
                else{
                    alert("please leave these innocent people's cherished memories alone.");
                }
            
                Apartment();
        break;
            case "look out window" || "window":
            prompt("You wander to the window. It appears that you are in a city, something that should be full of human life. But the streets are completely desolate, cars have been tipped over, and there is not a single thing to be heard or seen.  What happened when you fell asleep?");
            
                Apartment();
        break;
            case "open door" || "go right":
            alert("You open the door to find a long hallway lit by a window at the end of it.");
                
                Hallway();
        break;
            case "go back to bed" || "sleep":
            alert("You go back to tossing and turning. You basically just wasted around 10 minutes of your life.  Are you happy now?");
            var resume = confirm("You seem to lack motivation or even just basic knowledge to continue this game.  Are you sure you want to continue?");
            if(resume){
                Apartment();
            }
            else{
                alert("Boring. Game over."); 
            }
        
        
            //else{
                //alert("I don't know what"+bedroom1+"is.")
                //Apartment();
            //}
        }
    }
        //if(bedroom1 == "look at picture"){
          //  alert("You pick up the picture to get a better look at it.  Its a family of 4 little girls and their parents.  They seem to be having a good time at a park or something. are these the owners of this room? You have no idea and recognize none of the faces.");
            //else if(bedroom1 == "throw picture"){
                //alert("You threw the picture and the glass shatters, breaking the silence. You just destroyed the one thing these people cannot replace.  Good job.");
                //else{
                    //alert("please leave these innocent people's cherished memories alone.");
     
         
 
    function Hallway(){
        var hallway = prompt("There are stairs to the right and a door to the left in this hallway.");
    if(hallway == "look around" || hallway == "look"){
        var hallwaylook = prompt("A hallway. There are stairs to the right and a door to the left in this hallway and a window at the end of it.")
    }
     if(hallway == "open door" || hallway == "go left"){
        alert("the door is locked.  You absolutely cannot open it without a key. No matter how many times you slam yourself against it.");
     
                Hallway();
     }
        
        if(hallway == "go right"){
                KitchenRoom();
                }
        if(hallway == "use key on door" && inventory.key >= 1){
            var doorOpen = prompt("You'd be suprised how much easier it is to open a door with a key instead of just slamming yourself against it.  The door opens with so much ease that even you would wonder if the bruises are where worth slamming your body weight against it.");
            Bedroom2();
        }
    }
        function Bedroom2(){
        var enterRoom = prompt("You enter the locked room.  There is a king sized bed in the middle of the room with a bedstand that has something on it and a closet in the corner. Maybe this was the parents bedroom? You have no idea.");
         if(enterRoom == "look in closet" || enterRoom == "closet"){
             var closet = prompt("The closet is completely empty.  Except for the bat leaning against one side.  Its a plain wooden bat, but it could be useful in any struggle you might have.  It would be awful if you actually had to fight anything, however.");
             if(closet == "take bat" || closet == "bat"){
             inventory.Bat ++; 
            alert("you own " +inventory.Bat+" Bats"); 
                Bedroom2();
         }
    }
}
   
    function KitchenRoom(){
        var stairview = prompt("You are downstairs. It appears to be an open floor kitchen and living room.  Suprisingly, there is no hum from the fridge, and the kitchen appliances don't seem to have any energy in them. There is a long table with a couple of items on it, and a comfy seeming couch. There is also a door leading out of the apartment.");
           if(stairview == "open door"){
            alert("You walk out into another hallway, but this one is full of doors.  You are very obviously in an apartment complex, so you figure the rest of the doors will be locked.  You move downstairs.");
           MainOffice();
    
        //takes money out of account 
               inventory.coins = inventory.coins - 100; inventory.coins -=100; alert("you have " +inventory.coins+"coins remaining"); 
        }
        
        if(stairview == "look at table" || stairview == "table"){
            prompt("A long fancy wood table. There is a key on the table.");
            KitchenRoom();
        }
        if(stairview == "take key" || stairview == "key"){
            var keyTake =confirm("you take the key.  It seems to belong to inside this apartment.");
            if(keyTake){
        //adds key
            inventory.keys ++; 
                //displays keys taken
           alert("you own " +inventory.key+" keys"); 
           KitchenRoom();
            }
                else{
               alert("You think the key might go to the door upstairs.");
               KitchenRoom();
        }
        
            
        
        }
   if(stairview == "upstairs" || stairview == "go back"){
       Hallway();
   }
 
    }
 
    function MainOffice(){
        var downstairs = prompt("This must be the lobby and main offices of this building, but it has been visiably upturned and most likely robbed.  There is a snack bar in the corner. You luckily find some snacks and realize how hungry you are.  You decide the best idea is to eat them. After all, any food is free food if no one sees you take it.");
        switch(downstairs){
            case "look"|| "look around":
            alert("It's a lobby.  There is a door leading outside to your right, and a door labeled *pool* to your left.");
            MainOffice();
        break;
            case "go right":
               Outside();
            break;
            case "go left":
            PoolRoom();
        }
    }
    function PoolRoom(){
        var responses = ["Swimming? At a time like this?", "Getting your clothes wet is not going to help you.", "65910", "You might as well just drown if this is how you're gonna play."];
        var pool = prompt("It's an average size tiled room with a pool.  What did you expect?");
        if(pool == "swim"){
            alert(responses[Math.floor(Math.random()* 4)]);
            PoolRoom();
        }
        if(pool == "go back"){
            MainOffice();
        }
    }
    function Outside(){
        var street = prompt("You step outside into a desolate and deserted street.  There is a hint of a different smell in the air, but you can't seem to place it.  Where is everyone?");
        if(street == "look around"|| "look"){
            alert("That smell is here, but you dont know what its from.  It's not awfully familliar. The street goes right to left, but there is also a dark alleyway in front of you.  /-forward /-backward");
        }
        if(street == "right"){
            alert("You walk down the street, only to find a police blockade.  You get the feeling it would be unwise to go past it, so you dont.");
        }
        if(street == "left"){
            alert("You turn left and walk down the street.  Suddenly, you hear rustling and voices. *Hello.  Who are you?* one of the voices asks and cocks a gun behind your head.  Other people crawl out from behind cars and walk out of buildings.  As much as it is relieving to see all these alive people, they are still holding a gun to your head.  *What do you think y'all? Should we take this one in?* The one hoding the gun says. The rest of this group stays silent. *I'll take that as a yes then.  I'm going to need you to answer a couple questions, newcomer.*");
            Questioning();
        }
        
        if(street == "forward"||"go forward"){
            var firstfight = prompt("The smell increases and it's not a smell one enjoys.  It comes to a point where the smell is so rancid you almost feel like you can't breathe. As your eyes adjust to the darkness, you finally identify what the smell is.                                       Rotting Flesh.   In front of you, horrifyingly, is a dead body.  That is moving.  Towards you.");
            //work on fight script
        }
        }
   function Questioning(){
       prompt("Do you know who you are?");
       prompt("Are you a liar?");
       prompt("Do you consider yourself intelligent?");
       prompt("Will you fight for someone you don’t trust in a dangerous situation?");
       prompt("Are you loyal?");
       prompt("have you ever killed anyone?");
       prompt("would you trust me?");
      if("yes"){
                Crew();
            }
            else{
                alert("You pissed off the the leader of the group you encountered somehow. Good job idiot."); 
                Alone();
            }
   }
    function Crew(){
       var nameAsk = prompt("You seemed to have pleased the leader.  Guess that means you are with them now? “You seem like you can handle yourself.  Welcome to the crew friend, what do we call call you?” The leader extends a hand to you.");
        alert("Good to meet ya "+nameAsk+".")
        alert("You walk with the leader to a car that is still functioning unlike the others you have seen. There is actually a couple cars that everybody seems to be getting in to.They drive a while away from the city, attracting a couple zombies after them, but none of the zombies move fast enough to catch up to the car.  The journey comes to an end as they stop at a heavily barracaded building, full of anything you would need to stop a horde of zombies from invading.");
        alert("They shove you into a room upstairs, and say “Rest up and we will do introductions tomorrow.  And explain everything.”");
        Hideout();
    }
    function Alone(){
        prompt("“It seems they are too stupid to survive long enough out here, let’s scram.” The group leader says to the rest of her friends while glaring at you. They walk off, leaving you alone in the desolate city.  You can go in any direction here.");

    }
    function Hideout(){
        var maskPick = prompt("You are in a very comfortable looking room, and even though you where asleep a couple hours ago, you feel some exhaustion. The bed is obviously comfy, but you are in an unfamiliar place. /- go to bed /- open door ");
        if(maskPick == "go to bed" || maskPick == "bed"){
            Bunny();
        }
        if(maskPick == "open door"){
            alert("You decide to wait till they all fall asleep to explore. After about an hour you decide you are safe to explore.")
            Hallwayv1();
        }
    }
    function Hallwayv1(){
        var way = prompt("The hallway has 2 other doors to the left, the right, and in front stairs leading downstairs.");
        switch(way){
            case "left":
                alert("you open the door with ease. there seems to be someone who is... sleeping? with the door unlocked? whatever. you leave them alone.");
                break;
            case "right":
                alert("The door is locked. I wouldn't suggest slamming yourself against it like last time.");
                break;
            case "open door with key":
                Traproom();
                break;
            case "go foward"||"downstairs":
                Kitchen();
        }
    }
    function Traproom(){
        var lazars = prompt("You enter a room that is completely vacant, besides the table in the middle of the room.  Suprisingly there are dection lazars, everywhere.");
        switch(lazars){
            case "look around":
            alert("On the top of that table are two masks with lights on them, almost like they are being displayed.  It is a bird mask of sorts and a bunny mask with a symbol on the forehead.  Why they are protecting masks, who knows. There is a keypad by the door.");
            Traproom();
            break;
            case "look at keypad"||"keypad":
            prompt("its a keypad with a 5 number passcode needed.  What's the passcode?");
            if("65910"){
                prompt("A light on the keypad turns green. The lazars behind you shut off");
                Traproomv2();
            }
            else{
                Killed(); 
            }
        break;
        case "take masks":
        alert("an alarm goes off.");
        Killed();
    }
    }
    function Traproomv2(){
        
    }
}

