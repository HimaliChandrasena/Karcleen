var myImage = document.getElementById("slideshow");

var ImageArray = ["Images/2.png","Images/3.png","Images/4.png","Images/5.png","Images/1.png"];

var ImageIndex=0;

function changeImage () {
	myImage.setAttribute("src",ImageArray[ImageIndex]);
	ImageIndex++;
	if (ImageIndex>=ImageArray.length) {
		ImageIndex=0;
	}
}

setInterval(changeImage,5000);