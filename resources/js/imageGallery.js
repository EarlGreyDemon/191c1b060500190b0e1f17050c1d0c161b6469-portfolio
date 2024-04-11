class imageGallery
{
	constructor(images)
	{
		this.images = images;
		let maxImages = this.images.length;
		let imageID = 0;
	}
	
	changeImage(diff)
	{
		this.imageID += diff;
		if (this.imageID > this.maxImages-1)
		{
			this.imageID = 0;
		}
		else if (this.imageID < 0)
		{
			this.imageID = this.maxImages-1;
		}
	}
	
	currentImage()
	{
		return this.images[this.imageID];
	}
}

let imageGalleries = [];
//get each "sectionGridImageOutline" class, and instantiate a imageGallery class for it
for (let i = 0; i < document.getElementsByClassName("sectionGridImageOutline").length; i++)
{
	let activeElement = document.getElementsByClassName("sectionGridImageOutline")[i];
	let activeElementImages = [];
	//for each "sectionGridImageOutline" class, get an array of their "sectionGridImage" classes and use that for the constructor
	for (let j = 0; j < activeElement.getElementsByClassName("sectionGridImage").length; j++)
	{
		activeElementImages.push(activeElement.getElementsByClassName("sectionGridImage")[j]);
	}
	imageGalleries.push(new imageGallery());
	console.log("dwaoidwaokidwkio");
}