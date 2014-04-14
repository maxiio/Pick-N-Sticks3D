#pragma strict

static var CurrentScore : int = 0;

static var Rank : String;

function Update(){
if(CurrentScore <= 10){
Rank = "Noob";
}
else if(CurrentScore > 10 && CurrentScore < 20){
Rank = "Meh";
}
else if(CurrentScore > 20 && CurrentScore < 30){
Rank = "Pro";
}
else if(CurrentScore > 30 && CurrentScore < 40){
Rank = "GodLike";
}
else if(CurrentScore > 40 && CurrentScore < 50){
Rank = "Stick Master";
}
else if(CurrentScore > 50 && CurrentScore < 9000){
Rank = "No-Life";
}
else if(CurrentScore >9000){
Rank = "ITS OVER 9000!";
}
}

function OnGUI(){
GUI.Box(new Rect(Screen.width/2-50,0,100,25),"Score: " + CurrentScore);

GUI.Box(new Rect(Screen.width/2+150,0,200,25),"Rank: " + Rank);
}