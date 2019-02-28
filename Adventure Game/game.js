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
                key:0,
                bat:0,
                money:100,
                bullets:0,
            }
 var weakZombie = {
                health:20,
                damage:5,
            }
	

function GetRandInt(max){
	var randInt = Math.floor(Math.random()* Math.floor(max));

	return randInt;

}
Game();
function Game(){
    
    document.write("Inflicted");
    var playerName = prompt("What is your name?");
    
    while(!confirm("Are you sure you want "+playerName+" as a name?")){
		playerName = prompt("What name do you want?");
		
}
     alert("Welcome to the City, " + playerName +".");
   
    Market();
    
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
            
        break;
            case "look at picture":
            alert("You pick up the picture to get a better look at it.  Its a family of 4 little girls and their parents.  They seem to be having a good time at a park or something. are these the owners of this room? You have no idea and recognize none of the faces.");
                Apartment();
        break;
            default:
                alert("I don't know what"+ bedroom1 +"is.");
                Apartment();
        }
    }
    
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
            //takes key out of account 
            inventory.key = inventory.key - 1;
            alert("You have "+inventory.key+" keys remaining")
            var doorOpen = prompt("You'd be suprised how much easier it is to open a door with a key instead of just slamming yourself against it.  The door opens with so much ease that even you would wonder if the bruises are where worth slamming your body weight against it.");
            Bedroom2();
        }
        else{
            alert("I don't know what "+ hallway +" is.");
                Hallway();
        }
    }
        function Bedroom2(){
        var enterRoom = prompt("You enter the locked room.  There is a king sized bed in the middle of the room with a bedstand that has something on it and a closet in the corner. Maybe this was the parents bedroom? You have no idea.");
         if(enterRoom == "look at bedstand" || enterRoom == "bedstand"){
            var money = prompt("There appears to be a couple twenty dollar bills on top of the bedstand. Nobody is around.");
            if(money == "take money"){
                alert("You just stole about 100 dollars from people who presumably took you in. Thief.");
                inventory.money = inventory.money + 100;
                alert("You own " +inventory.money+"  dollars");
                Bedroom2();
            }
            else{
                alert("You might have needed the money, but you left it. Like some sort of person with morals.");
                Bedroom2();
            }
         }
            if(enterRoom == "look in closet" || enterRoom == "closet"){
             var closet = prompt("The closet is completely empty.  Except for the bat leaning against one side.  Its a plain wooden bat, but it could be useful in any struggle you might have.  It would be awful if you actually had to fight anything, however.");
             if(closet == "take bat" || closet == "bat"){
             inventory.bat ++; 
            alert("you own " +inventory.bat+" Bats"); 
                Bedroom2();
         }
             else{
                 alert("I don't know what "+ enterRoom +" is.");
                Bedroom2();
    }
}
            if(enterRoom == "go back" || enterRoom == "leave"){
                Hallway();
            }
        }
   
    function KitchenRoom(){
        var stairview = prompt("You are downstairs. It appears to be an open floor kitchen and living room.  Suprisingly, there is no hum from the fridge, and the kitchen appliances don't seem to have any energy in them. There is a long table with a couple of items on it, and a comfy seeming couch. There is also a door leading out of the apartment.");
           if(stairview == "open door"){
            alert("You walk out into another hallway, but this one is full of doors.  You are very obviously in an apartment complex, so you figure the rest of the doors will be locked.  You move downstairs.");
           MainOffice();
        }
        
        if(stairview == "look at table" || stairview == "table"){
            prompt("A long fancy wood table. There is a key on the table.");
            KitchenRoom();
        }
        if(stairview == "take key" || stairview == "key"){
            var keyTake = confirm("you take the key.  It seems to belong to inside this apartment.");
            if(keyTake){
        //adds key
            inventory.key ++; 
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
        var downstairs = prompt("This must be the lobby and main offices of this building, but it has been visiably upturned and most likely robbed.");
        switch(downstairs){
            case "look around" || "look":
            alert("It's a lobby.  There is a door leading outside to your right, and a door labeled *pool* to your left.");
            MainOffice();
        break;
            case "go right":
               Outside();
            break;
            case "go left":
            PoolRoom();
            break;
            default:
            alert("I do not understand " + downstairs);
                        MainOffice();
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
        else{
            alert("i don't understand"+pool);
            PoolRoom();
        }
    }
    function Outside(){
        var street = prompt("You step outside into a desolate and deserted street.  There is a hint of a different smell in the air, but you can't seem to place it.  Where is everyone?");
        switch(street){
        case"look around"|| "look":
            alert("That smell is here, but you dont know what its from.  It's not awfully familliar. The street goes right to left, but there is also a dark alleyway in front of you.  /-forward /-backward /-right /-left");
            Outside();
        break;
            case "go right":
            alert("You walk down the street, only to find a police blockade.  You get the feeling it would be unwise to go past it, so you dont.");
            Outside();
        break;
            case "go left":
            alert("You turn left and walk down the street.  Suddenly, you hear rustling and voices. *Hello.  Who are you?* one of the voices asks and cocks a gun behind your head.  Other people crawl out from behind cars and walk out of buildings.  As much as it is relieving to see all these alive people, they are still holding a gun to your head.  *What do you think y'all? Should we take this one in?* The one hoding the gun says. The rest of this group stays silent. *I'll take that as a yes then.  I'm going to need you to answer a couple questions, newcomer.*");
            Questioning();
        break;
            case "forward"||"go forward":
            var firstfight = prompt("The smell increases and it's not a smell one enjoys.  It comes to a point where the smell is so rancid you almost feel like you can't breathe. As your eyes adjust to the darkness, you finally identify what the smell is.                                  Rotting Flesh.   In front of you, horrifyingly, is a dead body.  That is moving.  Towards you.");
            Fight();
        break;
            default:
            alert("i don't understand"+street);
            Outside();
        }
        }
   /* function Fight(){
        var damage = ["20","20","20","25"];
        var attack = prompt("What would you like to do? /-attack with bat /-run away")
        if (attack == "attack with bat"){
            alert("you hurt the enemy for" +responses[Math.floor(Math.random()* 4)] +"damage");
        }
        if (attack == "run away"){
            alert("You run away with your tail between your legs like the coward you are.  Running away will not solve all your problems.")
        }
    }*/
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
        alert("You walk with the leader to a car that is still functioning unlike the others you have seen. There is actually a couple cars that everybody seems to be getting in to.They drive a while away from the city, attracting a couple of... things after them, but none of them move fast enough to catch up to the car.  The journey comes to an end as they stop at a heavily barracaded building, full of anything you would need to stop a horde of zombies from invading.");
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
        else{
			alert("I dont know what "+maskPick+" is.");
			Hideout();
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
                break;
            default:
                alert("I do not understand " + way);
                        Hallwayv1();
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
        alert("an alarm goes off.  The crew rushes in guns a blazing on you before you can even say anything.");
        Killed();
        break;
        default:
                alert("I do not understand " +lazars);
                        Traproom();
    }
    }
    function Traproomv2(){
        var masks = prompt("You can now get to the masks without alerting the crew.");
        if(masks == "take bunny mask"){
            alert("You put the bunny mask on. It doesn't quite feel right. It's bulky, and doesn't quite fit your head, so you put it back down on the table.");
        }
        
        if(masks == "take bird mask"){
            alert("This mask feel like it was made for you.  It slides on easily for a full head mask, and you see a couple things light up inside it.  You decide to take the mask.");
            alert("You are now wearing a mask.  This may or may not affect people actions toward you in the future.");
            alert("You return to your room. But for some reason, you didn't want to take the bird mask off.  It seemed to... speak to you?  You had no idea.  You just had no will to take it off.");
            Confrontation();
        }
        else{
			alert("I dont know what "+masks+" is!");
			Traproomv2();
}
    }
    function Killed(){
        alert("You have been killed by your own stupidity.  Try again?")
        if(resume){
                Apartment();
            }
            else{
                alert("Boring. Game over."); 
            }
    }
    function Bunny(){
        var receive = prompt("You wake up refreshed in the morning and open the door into the hallway.");
     switch(receive){
            case "left":
                alert("you open the door with ease. there seems to be someone who has a bird mask of sorts in a chair in the corner.  “What are you doing?  Get out of my room.” They say.  Their voice was clearly shaking. but you decide against pressing further and get out.");
                break;
            case "right":
                alert("The door is locked. I wouldn't suggest slamming yourself against it like last time.");
                break;
            case "go foward"||"downstairs":
                Kitchenv2();
                break;
            default:
                alert("I do not understand "+receive);
                        Bunny();
        }
    }
    function Kitchen(){
        var keeeeyss = prompt("you go downstairs.  It looks very much like the apartment you woke up in last time.");
        switch(keeeeyss){
            case "look around":
                alert("Its got an open bar style kitchen.  But this place seems to have electricity.  You wonder how they are getting it. There is stuff on the table.");
                Kitchen();
                break;
            case "look at table":
                alert("There is a key on the table.  And a blue jacket.");
                Kitchen();
                break;
            case "take key":
                alert("you took the key off the table.");
                 //adds key
            inventory.key ++; 
                //displays keys taken
           alert("you own " +inventory.key+" keys"); 
                Kitchen();
                break;
            case "take jacket":
                alert("You stole someone's jacket.  Real classy.");
                Kitchen();
                break;
            case "backwards" || "go back":
                Hallwayv1();
                break;
            default:
                alert("I do not understand "+keeeeyss);
                        Kitchen();
        }
    }
    function Kitchenv2(){
        var buUN = prompt("You go downstairs. It looks very much like the apartment you woke up in last time.  But this time it's filled with life.  The crew aparently woke up early.  and made pancakes.  which they are eating without you.  The gasmasked individual turns to you and beckons you into the kitchen.  “Join us," + nameAsk+".  It's time you learned a little about what happened and who we are.” Somebody wearing a pig mask slides you a plate of pancakes. “The impossible happened.  Somebody on the government allowed their scientist to experiment with diseases in their underground lab.  So the upper world has been inflicted with the disease and there is a huge, growing population of undead, rotting folks.  So we are trying to survive and honestly make a profit off the living and the abandoned.  There are still many living groups of people, suprisingly.  They run underground cities that trade resources and pay people like us to grab what we can of what's left of civilization.  So,  would you like to join us?”");
        if(buUN == "yes"){
            alert("The gas mask hands you a mask.  It's a bunny mask, with a HAZARD symbol on the forehead.“This is the bunny mask.  It stands for not only someone who is willing to sacrifice, but someone who is clever.” The gas mask tells you. “Now that you have a mask, are you ready to go on your first mission?  After pancakes of course.”");
            MissionStart();
        }
        if(buUN == "no"){
            alert("“That was not the correct response.” You can hear the person behind the gasmask smiling. They stick a knife in your gut. “And you had so much potential.”");
            Killed();
        }
        else{
			alert("I dont know what "+buUn+" is!");
			Kitchenv2();
}
    }
    function Confrontation(){
        var findout = prompt("“Good morning new recruit.” someone says as they shake you awake. “What are you wearing?” You turn in the bed to see the gasmask in front of your face.  Which causes you to jump a little bit.  It's not a pleasant sight to wake up too. “How did you get that mask?” -lie -tell the truth");
        if(findout == "lie"){
        confirm("You ramble off some lie about finding it in your room.  You don't know how, but the mask even looks dissapointed of you.  “Both you and I know that isn't true. You gotta get better at lying if you're gonna run with us.   That mask you have on is the Jackdaw mask. It was reserved for someone who is intelligent and curious.  Jackdaws are also opportunistic feeders, which seems to fit you. I dont know how you go this mask, but you seem to fit the discription.  Now you have a mask however, you have to join the crew.  You in?” ");
            if(resume){
                alert("You nod.  “Good.  We have pancakes downstairs, lets go eat before we send you on your first mission.”");
                MissionStart();
            }
            else{
                alert("The gasmasked person lifts you out of bed, saying, “That's really too bad.  You had potential.” They then stab you. Right in the gut.“Try not to get blood on the bed. Its the least you can do after you refused our offer.” ");
                Killed();
            }
        }
        if(findout == "tell the truth"){
            confirm("You tell the gasmask about how you got into the room.  “How did you know the code?  Who told you it?” They asked you.  You have no idea. “Alright. Whatever, you don't have to tell us. Seeing as you are clever however, let me tell you a little about that mask.That mask you have on is the Jackdaw mask. It was reserved for someone who is intelligent and curious.  Jackdaw's are also opportunistic feeders, which seems to fit you. I dont know how you go this mask, but you seem to fit the discription.  Now you have a mask however, you have to join the crew.  You in?”");            
            if(resume){
                alert("You nod.  “Good.  We have pancakes downstairs, lets go eat before we send you on your first mission.”");
                MissionStart();
            }
            else{
                alert("The gasmasked person lifts you out of bed, saying, “That's really too bad.  You had potential.” They then stab you. Right in the gut.“Try not to get blood on the bed. Its the least you can do after you refused our offer.” ");
                Killed();
            }
        }
    }
    function MissionStart(){
        var pacakakes = prompt("You finish eating your pancakes. They where suprisingly amazing for being made in the middle of a zombie apocalypse.  “Alright, we have to go on a mission to the next town over.  This town is pretty well inhabited, and runs underground.  They got a market though, so those of you who we take can get some supplies.  Just remember, we wanna stay on these folks good side, we want them to hire us.” The gasmask debriefs everyone and then drags you back to the car you got into at the start. ")
    }
    function Market(){
		var bulletShop = 100;
		var bulletPrice = 5;
        var foodShop = 20;
        var foodPrice = 20;
		
		
		var purchase = prompt("A greasy man glares at you. “What do you want?” \n- bullets:"+bulletShop).toLowerCase();
		
		if(purchase == "bullets" || purchase == "bullet"){
			var bulletCon = prompt("How many?");
			
			while(!confirm("Are you sure you want to purchase "+bulletCon+" bullets, for "+bulletPrice+" per bullet?")){
				bulletCon = prompt("How many bullets do you want?");
			}
			
			for(i = 1; i <= bulletCon; i++){
				inventory.bullets ++;
				console.log("You have "+inventory.bullets+" bullets");				
			}
			alert("You have purchased "+bulletCon+" bullets.");
			Market();			
		}
		else if(purchase == "exit"|| purchase == "leave"){
					Prison();
				}
		
} 
}