// changing individual properties with code and using setInterval
var rotationSpeed = 0.1;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
    myOtherBox.object3D.rotation.y -= rotationSpeed;

    console.log(myOtherBox.object3D.rotation.y);
}

setInterval(spin, 32); //equivalent to 60 fps
