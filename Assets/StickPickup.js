#pragma strict
var Stick : GameObject;
var StickCoords = new System.Random();
var coineffect : Transform;

function spawnstick(){
var StickX = StickCoords.Next(-20,20);
var StickZ = StickCoords.Next(-20,20);
var instance : GameObject = Instantiate(Stick,Vector3(StickX,0.65,StickZ),transform.rotation);
}

function OnTriggerEnter(info : Collider) {
	
	if(info.tag == "Player"){
	Score.CurrentScore += 1;
	var effect = Instantiate(coineffect,(transform.position + Vector3(0,1,0)),transform.rotation);
	Destroy(effect.gameObject,3);
	Destroy(gameObject);
	spawnstick();
	}

}