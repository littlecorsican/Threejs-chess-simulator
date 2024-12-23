import {OBJLoader} from "./OBJLoader.js";
import {MTLLoader} from "./MTLLoader.js";

export async function addCastle({ 
    color,
    x,
    y,
    z
}) {
    const rook = new THREE.Object3D();


    const materials = await loadMTL('models/chess.mtl');  // Load materials
    const object = await loadOBJ('models/rook.obj', materials);  // Load the object with the materials


    object.scale.set(0.4,0.4,0.4)
    object.position.set(-6.5, 0, 6.5);

    const axis = new THREE.Vector3(1, 0, 0);  // Rotate around the
    const angle = Math.PI / 2 * 3;  // 90 degrees in radians
    object.setRotationFromAxisAngle(axis, angle);
    
    object.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set(color || 0xff0000);  // Default to red if no color provided
      }
    });

    rook.add(object)
    // object.position.set(x, y, z); 
    // return object
    rook.position.set(x, y, z); 
    return rook
    
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
  