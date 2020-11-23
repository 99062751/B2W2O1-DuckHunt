var stage = document.getElementById("container");
var duck = document.getElementById("duck");

var stage_w = parseInt(window.getComputedStyle(stage).width.replace('px', '')); 
var stage_h = parseInt(window.getComputedStyle(stage).height.replace('px', '')); 

var eend_w = parseInt(window.getComputedStyle(duck).width.replace('px', '')); 
var eend_h = parseInt(window.getComputedStyle(duck).height.replace('px', '')); 

var middenpositieX =  stage_w / 2 -  eend_w / 2;
var middenpositieY =  stage_h / 2 - eend_h / 2;

var game = false;

var directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
var direction= directions[Math.floor(Math.random() * 8)];

var button = document.getElementById("start");

button.onclick = start;


function start(){
    game = true;
    duck.style.top= middenpositieY + "px"; 
    duck.style.left= middenpositieX + "px";
    while(game = true){
        direction= directions[Math.floor(Math.random() * 8)];
        window.setInterval((fly, 500))
    }
}


function fly(direction){
    
    switch(direction){
        case "N":
            middenpositieX= middenpositieX;
            middenpositieY= middenpositieY + 75;
            duck.style.top= middenpositieY+ "px"; 
            duck.style.left= middenpositieX + "px"; 
        break;

        case "NE":
            middenpositieX= middenpositieX + 75;
            middenpositieY= middenpositieY + 75;
            duck.style.top= middenpositieY+ "px"; 
            duck.style.left= middenpositieX + "px"; 
        break;

        case "E":
            middenpositieX= middenpositieX + 75;
            middenpositieY= middenpositieY;
            duck.style.top= middenpositieY+ "px"; 
            duck.style.left= middenpositieX + "px"; 
        break;

        case "SE":
            middenpositieX= middenpositieX + 75;
            middenpositieY= middenpositieY - 75;
            duck.style.top= middenpositieY+ "px"; 
            duck.style.left= middenpositieX + "px"; 
        break;

        case "S":
            middenpositieX= middenpositieX ;
            middenpositieY= middenpositieY - 75;
            duck.style.top= middenpositieY+ "px"; 
            duck.style.left= middenpositieX + "px"; 
        break;

        case "SW":
            middenpositieX= middenpositieX - 75;
            middenpositieY= middenpositieY - 75;
            duck.style.top= middenpositieY+ "px"; 
            duck.style.left= middenpositieX + "px"; 
        break;

        case "W":
            middenpositieX= middenpositieX;
            middenpositieY= middenpositieY + 75;
            duck.style.top= middenpositieY+ "px"; 
            duck.style.left= middenpositieX + "px"; 
        break;

        case "NW":
            middenpositieX= middenpositieX + 75;
            middenpositieY= middenpositieY + 75;
            duck.style.top= middenpositieY+ "px"; 
            duck.style.left= middenpositieX + "px"; 
        break;
    }

}

