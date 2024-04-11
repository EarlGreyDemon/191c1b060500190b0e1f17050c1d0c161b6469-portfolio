//gets every sectionGridImageContainer
var imageContainers = document.getElementsByClassName("sectionGridImageContainer");

//gets the <a> element of each image
var imageContainerLink = [];

//2d array for all possible images to display
var gridImages = [];
var maxImages = [];
var currentImageID = [];

for (var i = 0; i < imageContainers.length; i++)
{
	var imageLinkElement = imageContainers[i].getElementsByClassName("sectionGridImageLink")[0];
	var temparray = imageContainers[i].getElementsByClassName("sectionGridImage");
	imageContainerLink.push(imageLinkElement);
	gridImages.push(temparray);
	currentImageID.push(0);
	maxImages.push(temparray.length-1);
}

function switchImage(containerID, imageDiff)
{
	currentImageID[containerID] += imageDiff;
	for (var i = 0; i < gridImages[containerID].length; i++)
	{
		gridImages[containerID][i].className = "sectionGridImage inactiveImage";
	}
	if (currentImageID[containerID] < 0)
	{
		currentImageID[containerID] = maxImages[containerID];
	}
	else if (currentImageID[containerID] > maxImages[containerID])
	{
		currentImageID[containerID] = 0;
	}
	var imageID = currentImageID[containerID];
	gridImages[containerID][imageID].className = "sectionGridImage";
	var imageLink = gridImages[containerID][imageID].src;
	imageContainerLink[containerID].href = imageLink;
}