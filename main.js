nosex=0;
nosey=0;
difference=0;
leftwristx=0;
rightwristx=0;
function setup()
{
	video=createCapture(VIDEO);
	video.size(550, 500);

	canvas=createCanvas(550, 500);
	canvas.position(560, 150);
	poseNet=ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotposes);
}

function modelLoaded()
{
	console.log('model Is Chalu');
}

function draw()
{
	background('#0ef58c');
	document.getElementById("squaresides").innerHTML="width and hieght of a square will be ="+ difference+"px";
	fill ('#000000');
	stroke ('#000000');
	square (nosex,nosey, difference);


}

function gotposes(results)
{
	if(results.length > 0 )
	{
		console.log(results);
		nosex=results[0].pose.nose.x;
		nosex=results[0].pose.nose.y;
		console.log("nosex="+nosex+"nosey="+nosey);

		leftwristx=results[0].pose.leftWrist.x;
		rightwristx=results[0].pose.rightWrist.x;
		difference=floor(leftwristx-rightwristx);
		console.log("leftwristx="+leftwristx+"rightwristx="+rightwristx+"difference"+difference);
	}
}
