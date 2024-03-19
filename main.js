narizX=0;
narizY=0;
function preload(){
    mascara=loadImage("https://i.postimg.cc/gJkJ77kX/spiderman.png")
}
function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    
    
    PoseNet=ml5.poseNet(video, modelLoaded);
    PoseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("modelo listo");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("narizX "+results[0].pose.nose.x);
        console.log("narizY "+results[0].pose.nose.y);
        narizX =results[0].pose.nose.x-115;
        narizY =results[0].pose.nose.y-110;
    }
}
function draw(){
    image(video,0,0,400,400);
    fill(255,0,0);
    stroke(2550,0,0);
    //circle(narizX,narizY,20)
    image(mascara,narizX,narizY,250,250);
    
}