//masthead's image size will be 2160x900
document.addEventListener("mousemove", moveImage);
window.addEventListener("resize", windowResize);

var winX = window.innerWidth;
var winY = window.innerHeight
const imgX = 2160;
const imgY = 900;
var mastImages = document.getElementsByClassName("mastheadImage");
var mastImage = mastImages[0];
var currentImage = 0;
var xDiff = imgX - winX;
var yDiff = imgY - Math.max(winY/2,800);

function sleep()
{
	return new Promise(resolve => setTimeout(resolve, 10000));
}

function windowResize(event)
{
	winX = window.innerWidth;
	winY = window.innerHeight;
	
	xDiff = imgX - winX;
	yDiff = imgY - Math.max(winY/2,800);
}
function moveImage(event)
{
	let x = event.clientX;
	let y = event.clientY;
	
	//gets 1-0 "position" of the cursor on the screen, image moves according to this multiplier
	let xMult = x/winX;
	let yMult = y/winY;
	
	mastImage.style.left = -xMult*xDiff;
	mastImage.style.top = -yMult*yDiff;
}
async function switchImage()
{
	currentImage += 1;
	if (currentImage == mastImages.length) { currentImage = 0; }
	for (var i = 0; i < mastImages.length; i++) { mastImages[i].className = "mastheadImage mastheadInactiveImage"; }
	mastImages[currentImage].className = "mastheadImage";
	mastImage = mastImages[currentImage]
	await sleep();
	switchImage();
}
switchImage();