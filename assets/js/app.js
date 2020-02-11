document.addEventListener( 'keypress', onDocumentKeyPress, false );
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 5000 );
//link textures
let textureDoor = new THREE.TextureLoader().load( 'textures/door.jpg' );
let textureWalls = new THREE.TextureLoader().load( 'textures/walls.jpg' );
let textureSky = new THREE.TextureLoader().load( 'textures/Clouds.jpg' );
let textureFloor = new THREE.TextureLoader().load( 'textures/floor.jpg' );
let textureRoof = new THREE.TextureLoader().load( 'textures/roof.jpg' );
let textureRoofMain = new THREE.TextureLoader().load( 'textures/roofmain.jpg' );
let textureGrass = new THREE.TextureLoader().load( 'textures/sea.jpg' );
//declare variable textures10
let textDoor = new THREE.MeshBasicMaterial( { map: textureDoor } );
let textWalls = new THREE.MeshBasicMaterial( { map: textureWalls } );
let textSky = new THREE.MeshBasicMaterial( { map: textureSky } );
let textFloor = new THREE.MeshBasicMaterial( { map: textureFloor } );
let textRoof = new THREE.MeshBasicMaterial( { map: textureRoof } );
let textUpperFloor = new THREE.MeshBasicMaterial( { map: textureRoofMain } );
let textGrass = new THREE.MeshBasicMaterial( { map: textureGrass } );
//initialize shapes
const geomBackground = new THREE.BoxBufferGeometry(2100, 900, 2);
const geomDoor = new THREE.BoxBufferGeometry(20, 30, 10);
const geomBuilding = new THREE.BoxBufferGeometry(200, 50, 50);
const geomPlane = new THREE.BoxBufferGeometry(1000, 10, 500);
const geomPillar = new THREE.CylinderBufferGeometry(20, 20, 70, 12);
const geomPillarRoof = new THREE.CylinderBufferGeometry(10, 30, 20, 12);
const geomUpperBuilding = new THREE.BoxBufferGeometry(200, 20, 20);
const geomGrass = new THREE.BoxBufferGeometry(80, 1, 90);

// 
const geomCircle = new THREE.CircleBufferGeometry(5, 15, 5);
const geomCone = new THREE.ConeBufferGeometry(10, 15, 5);
const geomCylinder = new THREE.CylinderBufferGeometry(10, 15, 5);
const geomBox = new THREE.BoxBufferGeometry(10, 15, 5);
const geomRing = new THREE.RingBufferGeometry(10, 15, 5);
const geomSphere = new THREE.SphereBufferGeometry(10, 15, 5);
const geomTorus = new THREE.TorusBufferGeometry(10, 15, 5);


//declare variable shapes
let background = new THREE.Mesh(geomBackground, textSky);
let door = new THREE.Mesh(geomDoor, textDoor);
let buildingMain = new THREE.Mesh(geomBuilding, textWalls);
let buildingUpper = new THREE.Mesh(geomUpperBuilding, textUpperFloor);
let floor =  new THREE.Mesh(geomPlane, textFloor);
let pillar1 = new THREE.Mesh(geomPillar, textWalls);
let pillar2 = new THREE.Mesh(geomPillar, textWalls);
let pillar3 = new THREE.Mesh(geomPillar, textWalls);
let roof1 = new THREE.Mesh(geomPillarRoof, textRoof);
let roof2 = new THREE.Mesh(geomPillarRoof, textRoof);
let roof3 = new THREE.Mesh(geomPillarRoof, textRoof);
let roof4 = new THREE.Mesh(geomPillarRoof, textRoof);
let grassLeft = new THREE.Mesh(geomGrass, textGrass);
let grassRight = new THREE.Mesh(geomGrass, textGrass);

let Circle = new THREE.Mesh(geomCircle, textSky);
let Cone = new THREE.Mesh(geomCone, textSky);
let Cylinder = new THREE.Mesh(geomCylinder, textSky);
let Box = new THREE.Mesh(geomBox, textSky);
let Ring = new THREE.Mesh(geomRing, textSky);
let Sphere = new THREE.Mesh(geomSphere, textSky);
let Torus = new THREE.Mesh(geomTorus, textSky);
//ADD SHAPES TO SCENE
scene.add(background, floor, door, buildingMain, buildingUpper, pillar1, pillar2, pillar3,
          roof1, roof2, roof3, roof4, grassLeft, grassRight, Circle, Cone, Cylinder, Box, Ring, Sphere, Torus);

//ADD POSITIONS OF OBJECTS
background.position.set(0, 0, -1100);        floor.position.set(0, -39, -300);    
buildingMain.position.set(-10, -22, -230);   grassLeft.position.set(50, -30, -120);       
buildingUpper.position.set(0, 5, -300);      grassRight.position.set(-50, -30, -120);  
door.position.set(0, -22, -190);           
roof1.position.set(50, 30, -230);            pillar1.position.set(50, -10, -230); 
roof2.position.set(-90, 30, -230);           pillar2.position.set(-90, -10, -230);
roof3.position.set(10, 20, -300);            pillar3.position.set(10, -20, -300);
roof4.position.set(-60, 20, -320);   
Circle.position.set(-76,33, -96);
Cone.position.set(-104,55, -157);
Cylinder.position.set(-108, 73 ,-207);
Box.position.set(-46, 40, -121);
Ring.position.set(-54, 73, -216);
Sphere.position.set(-16, 52, -153);
Torus.position.set(14, 123, -362);
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//RENDER FUNCTION
function animate() {
   requestAnimationFrame( animate );
   renderer.render( scene, camera );
}
animate();
document.addEventListener( 'keypress', onDocumentKeyPress, false );
function printLocation(target){
   console.log(
      "Z: " + target.position.z +
      "\nX: " + target.position.x +
      "\nY " + target.position.y
   );
}
function moveObject(entity, Key){
   if (Key == 119){
      entity.position.z -= 1;
      printLocation(entity);
   }else if (Key == 115){
      entity.position.z += 1;
      printLocation(entity);
   }else if (Key == 97){
      entity.position.x -= 1;
      printLocation(entity);
   }else if (Key == 100){
      entity.position.x += 1;
      printLocation(entity);
   }else if (Key == 113){
      entity.position.y += 1;
      printLocation(entity);
   }else if (Key == 101){
      entity.position.y -= 1;
      printLocation(entity);
   }
}
function onDocumentKeyPress(event){
   var Object = Circle;  // put object name here to move it (change buildingMain)
   var keyCode = event.which;
   console.log(keyCode);
   moveObject(Object, keyCode);
}