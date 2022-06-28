function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(400,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("#5196e3");
}

function modelDone(){
    console.log("PoseNet Is Initialized");
}

function gotposes(results,){
    if(results.length > 0){
        console.log(results);
    }
}