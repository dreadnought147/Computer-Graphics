// ThreeJs is a JavaScript library that makes it easy to create 3D graphics in the browser using WebGL.

// Create a scene ?
const scene = new THREE.Scene();

//2. create a camera (Perspective?)
const camera = new THREE.PerspectiveCamera(
    75, // Field of view
    window.innerWidth / window.innerHeight, //aspect ration
    0.1, //near clip plane?
    1000 //far clip plane?
);
//3. Create a renderer and add it to the dom
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); //screen size
document.body.append(renderer.domElement);

//4. Create a geometry and a material, then combine int o a cube
const geo = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const material1 = new THREE.MeshBasicMaterial({color: 0x0000ff});
const material2 = new THREE.MeshBasicMaterial({color:0xff0000});


const cube = new THREE.Mesh(geo,material);
const cube2 = new THREE.Mesh(geo,material1);
const cube3 = new THREE.Mesh(geo, material2);

cube2.position.x = 2;
cube.position.x =-2;
scene.add(cube,cube2,cube3);


//5. Move cam to the back so we can see the cube 
camera.position.z = 5;


function animate(){
    requestAnimationFrame(animate);

    //Rotatte the cube for some animation 
    cube.rotation.x += 0.01;
    cube.rotation.z += 0.01;
   // cube.rotation.y += 0.01;

    cube2.rotation.x += 0.01;
    cube2.rotation.z += 0.01;
    // cube.rotation.y += 0.01;

     cube3.rotation.x += 0.01;
    cube3.rotation.z += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);

}

animate()

