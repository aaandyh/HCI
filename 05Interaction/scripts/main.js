
var rotationSpeed = 0.02;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z += rotationSpeed/4;
	console.log(myOtherBox.object3D.rotation);
}

setInterval(spin, 32);


myOtherBox.addEventListener('mouseenter', function(){
rotationSpeed = 0.01;
console.log('mouse enter');
});
