song = "";

song1 = "";


function setup()

{

    canvas = createCanvas(600,530);

    canvas.center();

    video = createCapture(VIDEO);

    video.hide();
    
}

function preload()

{

    song = loadSound("Potter.mp3");

    song1 = loadSound("Strange.mp3"); 

}

function draw()

{

    image(video , 0 , 0 , 600 , 530);

}