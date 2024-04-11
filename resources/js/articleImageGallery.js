//stores each gallery
var galleries = document.getElementsByClassName("articleHeaderGallery");

var galleryLink = [];
//2d array, stores each image
var galleryImages = [];
//2d array, stores each image's accompanying subtitle
var galleryText = [];

//2d array, stores each image overlay, so it can swap for responsive design
var galleryImageOverlay = [];

//adds arrays of images/image subtitles/ to galleryImages
for (var i = 0; i < galleries.length; i++)
{
	galleryLink.push(galleries[i].getElementsByClassName("articleImageLink")[0]);
	galleryImages.push(galleries[i].getElementsByClassName("articleHeaderImage"));
	galleryText.push(galleries[i].getElementsByClassName("articleImageText"));
	galleryImageOverlay.push(galleries[i].getElementsByClassName("articleGallerySelectionOverlay"));
}

//when calling method, pass in galleryID (the array index on galleries) and newImageID (the appropriate array index on galleryImages)
function swapActiveImage(galleryID, newImageID)
{
	//sets each element to inactive
	for (var i = 0; i < galleryImages[galleryID].length; i++)
	{
		galleryImages[galleryID][i].className = "articleHeaderImage articleImageInactive";
		galleryText[galleryID][i].className = "articleImageText articleImageTextInactive";
		galleryImageOverlay[galleryID][i].className = "blackElement articleGallerySelectionOverlay";
		
	}
	//reactivate selected elements
	galleryImages[galleryID][newImageID].className = "articleHeaderImage";
	galleryText[galleryID][newImageID].className = "articleImageText";
	galleryImageOverlay[galleryID][newImageID].className = "accentSubColor articleGallerySelectionOverlay articleSelectionActive";
	galleryLink[galleryID].href = galleryImages[galleryID][newImageID].src;
}