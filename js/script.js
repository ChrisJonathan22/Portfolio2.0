var images = ["img/Screenshot3.png", "img/Screenshot4.png", "img/Screenshot19.png", "img/Screenshot20.png"];

var imageNumber = 0;
var imageLength = images.length - 1;

function changeImage(x) {
    imageNumber += x;
    //if you've reached end of array...start over!
    if (imageNumber > imageLength) {
        imageNumber = 0;
    }
    if (imageNumber < 0) {
        imageNumber = imageLength;
    }
    document.getElementById("slideshow").src = images[imageNumber];
    
    return false;
}

function autoRun() {
    setInterval("changeImage(1)", 1500);
    
}













var images2 = ["img/Screenshot5.png", "img/Screenshot6.png", "img/Screenshot7.png", "img/Screenshot7.png", "img/Screenshot8.png", "img/Screenshot9.png", "img/Screenshot10.png"];

var imageNumber2 = 0;
var imageLength2 = images2.length - 1;

function changeImage2(x) {
    imageNumber2 += x;
    //if you've reached end of array...start over!
    if (imageNumber2 > imageLength2) {
        imageNumber2 = 0;
    }
    if (imageNumber2 < 0) {
        imageNumber2 = imageLength2;
    }
    document.getElementById("slideshow2").src = images2[imageNumber2];
    
    return false;
}

function autoRun2() {
    setInterval("changeImage2(1)", 1500);
    
}


















var images3 = ["img/Screenshot12.png", "img/Screenshot13.png", "img/Screenshot14.png", "img/Screenshot15.png"];

var imageNumber3 = 0;
var imageLength3 = images3.length - 1;

function changeImage3(x) {
    imageNumber3 += x;
    //if you've reached end of array...start over!
    if (imageNumber3 > imageLength3) {
        imageNumber3 = 0;
    }
    if (imageNumber3 < 0) {
        imageNumber3 = imageLength3;
    }
    document.getElementById("slideshow3").src = images3[imageNumber3];
    
    return false;
}

function autoRun3() {
    setInterval("changeImage3(1)", 1500);
    
}

















var images4 = ["img/Screenshot16.png", "img/Screenshot17.png", "img/Screenshot18.png"];

var imageNumber4 = 0;
var imageLength4 = images4.length - 1;

function changeImage4(x) {
    imageNumber4 += x;
    //if you've reached end of array...start over!
    if (imageNumber4 > imageLength4) {
        imageNumber4 = 0;
    }
    if (imageNumber4 < 0) {
        imageNumber4 = imageLength4;
    }
    document.getElementById("slideshow4").src = images4[imageNumber4];
    
    return false;
}

function autoRun4() {
    setInterval("changeImage4(1)", 1500);
    
}








