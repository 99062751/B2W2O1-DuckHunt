var stage = document.getElementById("container");
var duck = document.getElementById("duck");

var stage_w = parseInt(window.getComputedStyle(stage).width.replace('px', '')); 
var stage_h = parseInt(window.getComputedStyle(stage).height.replace('px', '')); 

var eend_w = parseInt(window.getComputedStyle(duck).width.replace('px', '')); 
var eend_h = parseInt(window.getComputedStyle(duck).height.replace('px', '')); 

var middenpositieX =  stage_w / 2 -  eend_w / 2;
var middenpositieY =  stage_h / 2 - eend_h / 2;

var game = false;
const afstand= 75;
var directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
var direction= directions[Math.floor(Math.random() * 8)];

var button = document.getElementById("start");
var HIT= 0;
var MISS= 0;
const wait_time= 0.5; //tussentijd vliegen in seconde 
button.onclick = start;
duck.onclick= function(){score("duck")};
stage.onclick= function(){score("stage")};

function start(){
    if(game == false){
        game = true;
    
        middenpositieY =  stage_h / 2 - eend_h / 2;
        middenpositieX =  stage_w / 2 -  eend_w / 2;
        
        duck.style.top= middenpositieY + "px";
        duck.style.left= middenpositieX + "px";
        
        
        setInterval(function(){ 
            if(game == true){
                direction= directions[Math.floor(Math.random() * 8)];
                fly(direction); 
            }    
        }, (wait_time * 1000));
    }
}

function score(clicked){
    if(clicked == "duck" && game == true){
        HIT++;

        if((HIT + MISS) == 20){
            alert("YOU HAVE HIT " + HIT + " TIMES! \n AND YOU HAVE MISSED " + MISS + " TIMES");
            game = false;
            HIT= 0;
            MISS= 0;
        }
        event.stopPropagation();
    }else if(clicked == "stage" && game == true){
        MISS++;

        if((HIT + MISS) == 20){
            alert("YOU HAVE HIT " + HIT + " TIMES! \n AND YOU HAVE MISSED " + MISS + " TIMES");
            game = false;
            HIT= 0;
            MISS= 0;
        }
    }
    
}

function fly(direction){
    if(game == true){
        switch(direction){
            case "N":
                middenpositieX= middenpositieX;
                middenpositieY= middenpositieY + afstand;
                duck.style.top= middenpositieY+ "px"; 
                duck.style.left= middenpositieX + "px"; 
            break;
    
            case "NE":
                middenpositieX= middenpositieX + afstand;
                middenpositieY= middenpositieY + afstand;
                duck.style.top= middenpositieY+ "px"; 
                duck.style.left= middenpositieX + "px"; 
            break;
    
            case "E":
                middenpositieX= middenpositieX + afstand;
                middenpositieY= middenpositieY;
                duck.style.top= middenpositieY+ "px"; 
                duck.style.left= middenpositieX + "px"; 
            break;
    
            case "SE":
                middenpositieX= middenpositieX + afstand;
                middenpositieY= middenpositieY - afstand;
                duck.style.top= middenpositieY+ "px"; 
                duck.style.left= middenpositieX + "px"; 
            break;
    
            case "S":
                middenpositieX= middenpositieX ;
                middenpositieY= middenpositieY - afstand;
                duck.style.top= middenpositieY+ "px"; 
                duck.style.left= middenpositieX + "px"; 
            break;
    
            case "SW":
                middenpositieX= middenpositieX - afstand;
                middenpositieY= middenpositieY - afstand;
                duck.style.top= middenpositieY+ "px"; 
                duck.style.left= middenpositieX + "px"; 
            break;
    
            case "W":
                middenpositieX= middenpositieX;
                middenpositieY= middenpositieY + afstand;
                duck.style.top= middenpositieY+ "px"; 
                duck.style.left= middenpositieX + "px"; 
            break;
    
            case "NW":
                middenpositieX= middenpositieX + afstand;
                middenpositieY= middenpositieY + afstand;
                duck.style.top= middenpositieY+ "px"; 
                duck.style.left= middenpositieX + "px"; 
            break;
        }

        if((middenpositieX + (eend_w / 2)) < 0){ 
            middenpositieX= middenpositieX + afstand;

            duck.style.top= middenpositieY+ "px"; 
            duck.style.left= middenpositieX + "px"; 
        } 
        else if((middenpositieX + (eend_w / 2)) > stage_w){
            middenpositieX= middenpositieX - afstand;
            
            duck.style.top= middenpositieY+ "px"; 
            duck.style.left= middenpositieX + "px"; 
        }
        else if((middenpositieY + (eend_h / 2)) < 0){ 
            middenpositieY= middenpositieY + afstand;
            
            duck.style.top= middenpositieY+ "px"; 
            duck.style.left= middenpositieX + "px"; 
        }
        else if((middenpositieY + (eend_h / 2)) > stage_h){
            middenpositieY= middenpositieY - afstand;
            
            duck.style.top= middenpositieY+ "px"; 
            duck.style.left= middenpositieX + "px"; 
        }
    }
}