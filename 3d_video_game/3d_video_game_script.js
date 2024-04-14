import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/Addons.js";

// const loader = new GLTFLoader();

//Remember to make the script type module when linking this file in html...

let width = window.innerWidth;
let height = window.innerHeight;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1c1c1f)
const camera = new THREE.PerspectiveCamera(70, width/height, 0.1, 100);
camera.position.z = 5;

// Initializing scene and camera


const geometry = new THREE.BoxGeometry(0.375, 0.375, 0.375);
const material = new THREE.MeshBasicMaterial({color: 0x800080}); //0x800080
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const renderer = new THREE.WebGLRenderer({antialias: true});
// Initializing renderer so that we can see the mesh
renderer.setSize(width, height);

// Setting the renderer to the same size of the screen

// Making sure that we can see the renderer...

let x = 0;
let y = 0;
let z = 0;

let vel_x = 0;
let vel_y = 0;
let vel_z = 0;
let vel = 0.1;

function animate(){
    
    x += vel_x;
    y += vel_y;
    z += vel_z;

    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;
    
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.02;

    camera.position.z = z + 5;

    console.log(mesh.position.x, mesh.position.y);
    
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

document.body.appendChild(renderer.domElement);


addEventListener("keydown", (event) => {
    switch(event.code){
            case "KeyW":
                vel_z = -vel;
                break;
            case "KeyS":
                vel_z = vel;
                break;
            case "KeyA":
                vel_x = -vel;
                break;
            case "KeyD":
                vel_x = vel;
                break;
            case "ArrowUp":
                vel_y = vel;
                break;
            case "ArrowDown":
                vel_y = -vel;
                break;
        }
    })
    
addEventListener("keyup", (event) => {
    switch(event.code){
        default:
            vel_x = 0;
            vel_y = 0;
            vel_z = 0;
    }
})
