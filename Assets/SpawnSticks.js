#pragma strict
var Stick : GameObject;

var StickX;
var StickZ;
var StickCoords = new System.Random();

function Start () {
	var StickX = StickCoords.Next(0,15);
	var StickZ = StickCoords.Next(0,15);
	gameObject.active = false;
	var instance : GameObject = Instantiate(Stick,Vector3(StickX,0.65,StickZ),transform.rotation);
}

function stickspawn(){
var StickX = StickCoords.Next(0,15);
var StickZ = StickCoords.Next(0,15);
var instance : GameObject = Instantiate(Stick,Vector3(StickX,0.65,StickZ),transform.rotation);
}
