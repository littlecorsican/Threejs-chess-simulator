import {OBJLoader} from "./OBJLoader.js";
import {MTLLoader} from "./MTLLoader.js";

export async function addCavalry({
    color,
    x,
    y,
    z
}) {
    const knight = new THREE.Object3D();


    const materials = await loadMTL('models/chess.mtl');  // Load materials
    const object = await loadOBJ('models/knight.obj', materials);  // Load the object with the materials


    object.scale.set(0.4,0.4,0.4)
    object.position.set(4.5, 0, -6.5);


    if (color === "#7f7f7d") {
      console.log("fafasdfasf", color, Math.PI)
      object.rotation.z = Math.PI; // Rotate 180 degrees around the Y-axis
    }

    const axis = new THREE.Vector3(1, 0, 0);  // Rotate around the
    const angle = Math.PI / 2 * 3;  // 90 degrees in radians
    object.setRotationFromAxisAngle(axis, angle);
    if (color === "#7f7f7d") {

      object.rotation.z = Math.PI; // Rotate 180 degrees around the Y-axis
      object.position.set(-4.5, 0, 6.5);
    }
  
    
    object.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set(color || 0xff0000);  // Default to red if no color provided
      }
    });

    knight.add(object)
    // object.position.set(x, y, z); 
    // return object
    knight.position.set(x, y, z); 
    return knight
    



}


const loadMTL = (url) => {
    return new Promise((resolve, reject) => {
      const mtlLoader = new MTLLoader();
      mtlLoader.load(url, (materials) => {
        materials.preload();
        resolve(materials);
      }, undefined, (error) => reject(error));
    });
  };
  
  const loadOBJ = (url, materials) => {
    return new Promise((resolve, reject) => {
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(url, (object) => {
        resolve(object);
      }, undefined, (error) => reject(error));
    });
  };
  