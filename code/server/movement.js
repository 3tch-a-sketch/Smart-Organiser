//const gpiop = require("rpi-gpio").promise //This can not run on windows systems 


let gpio = true; // Disable this to prevent gpio errors when not running on a pi
let XeSteps = 10;
let YeSteps = 10;
let ZeSteps = 10;

let pins = {X : {step : 11 , dir : 12} , Y : {step : 13 , dir : 14} , Z : {step : 15 , dir : 16}};

function move(ref){
    let coords = ref.split(',');
    console.log(coords);
    setMoveX(coords[0]);
    setMoveY(coords[1]);
    startMove();
}

function setMoveX(x){ //X should be an str
    x = x.charCodeAt(0) - 64;
    console.log("Set X Buffer || location:"+x+" || steps:"+x*XeSteps);
    let xBuffer = x * XeSteps;
}

function setMoveY(y){
    console.log("Set Y Buffer || location:" + y + " || steps:" + y * YeSteps);
    let yBuffer = y * YeSteps;
}

function startMove() {
    if (gpio == false) {
        console.log("starting debug move")
        //return
    }

}

function step(steps, dir, axis) {         //Performs a standard stepdir pulse function along specified axis
    if(gpio == false){
        console.log("Enable gpio to use step function");
        return;
    }
    if(dir == "fwd"){
        console.log(pins[axis["dir"]]);
    }else if(dir == "rev"){

    }
    for(i = 0; steps > i; i++){
        if(axis.lower == "x"){

        }if(axis.lower == "y"){

        }else{
            throw "Error Axis Not Specified | AXS";
        }
    }
}

function push(){
    //forward then retract 
}

//move("D,50");
step(10,"fwd","x");