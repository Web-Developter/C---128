song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("I Want It That Way.mp3");
    song2 = loadSound("Heat Waves.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";

function modelLoaded(){
    console.log('posenet is initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.Y;
        console.log('leftWristX = ' + leftWristX + 'leftWristY = ' + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.Y;
        console.log('rightWristX = ' + rightWristX + 'rightWristY = ' + rightWristY);
    }
}
