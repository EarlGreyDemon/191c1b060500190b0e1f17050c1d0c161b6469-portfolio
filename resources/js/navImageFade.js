var timer = 10000;
//gets every navsectionbgcontainer element
var backgroundContainers = document.getElementsByClassName("navSectionBGContainer");

//stores an array of imgs with class: navsectionbg
var navImages = [];

//stores the max imgs with class: navsectionBG within each container
var maxImageID = [];
var currentImageID = [];
for (var i = 0; i < backgroundContainers.length; i++)
{
	var container = backgroundContainers[i];
	//every img inside the container
	var newarray = container.getElementsByClassName("navSectionBG");
	maxImageID.push(newarray.length-1);
	currentImageID.push(0);
	navImages.push(newarray);
}

function sleep()
{
	return new Promise(resolve => setTimeout(resolve, timer));
}

async function switchNavBG()
{
	for (var i = 0; i < backgroundContainers.length; i++)
	{
		//access the relevant array
		var currentarray = navImages[i];
		if (currentImageID[i] == maxImageID[i]) {currentImageID[i] = 0; }
		else{ currentImageID[i]++; }
		for (var j = 0; j < currentarray.length; j++)
		{
			currentarray[j].className = "navSectionBG navSectionInactiveBG";
		}
		currentarray[currentImageID[i]].className = "navSectionBG";
	}
	//console.log("images switched! Sleeping");
	await sleep();
	//console.log("Sleeping finished");
	switchNavBG();
}
switchNavBG();