// LightRay.js
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CSG } from "three-csg-ts";
import * as dat from "lil-gui";


let parameters = {
  color: 0x4cd6f1,
};

const createGuiControls = (model) => {
  // GUI Controls
  const gui = new dat.GUI({ autoPlace: true });
  gui.domElement.id = "gui";
  const visualCheckbox = gui.add({ wireframe: false }, 'wireframe').name('wireframe');
  gui.addColor(parameters, "color").onChange(() => model.material.color.set(parameters.color));
  
  // Add a checkbox
  visualCheckbox.onChange(()=>{
    if(visualCheckbox.getValue()){
      model.material = new THREE.MeshBasicMaterial({wireframe : true, color: parameters.color});
    }
    else{
      model.material = new THREE.MeshMatcapMaterial({color: parameters.color});
    }
  });

  gui.close();
  return gui;
};



const createCamera = (scene, maxDistance) => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.x = maxDistance / 2 + 5 ;
  camera.position.z = 3;
  camera.position.y = 3;

  return camera;
};

// Функция для создания конуса (луча)
const createCone = (scene, coneRadius, xRadius, yRadius, maxDistance) => {
  /* Parameters of THREE.ConeGeometry(...): 
      1. radius (is value = bigger_angle / 2)
      2. height (is maxDistance ?? from mudule 4)
      3. section amount
 */
  let coneGeometry = new THREE.ConeGeometry(coneRadius, maxDistance, 32);
  let coneMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true,
    opacity: 0.7,
    transparent: true,
  });
  let cone = new THREE.Mesh(coneGeometry, coneMaterial);

  //cone.rotation.z = Math.PI / 2;

  const smallerRadius = Math.min(xRadius, yRadius);
  if (smallerRadius == yRadius) {
    cone.scale.z = smallerRadius / coneRadius;
  } else if (smallerRadius == xRadius) {
    cone.scale.x = smallerRadius / coneRadius;
  }

  scene.add(cone);
  return cone;
};

const createSphere = (scene, radius, maxDistance) => {
  // Параметры THREE.SphereGeometry:
  // 1. Радиус сферы
  // 2. Количество сегментов по горизонтали
  // 3. Количество сегментов по вертикали
  //const biggerRadius = Math.max(xRadius, yRadius);
  //const smallerRadius = Math.min(xRadius, yRadius);
  let sphereGeometry = new THREE.SphereGeometry(radius, 32, 32);
  let sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x0000ff, // Синий цвет
    opacity: 1,
    transparent: true,
    wireframe: true,
  });

  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(0, maxDistance / 2, 0);

  scene.add(sphere);
  return sphere;
};

const createIntersection = (scene, cone, sphere, choice) => {
  scene.remove(cone);
  scene.remove(sphere);
  let interRes;

  if (choice == "intersect") {
    interRes = CSG.intersect(cone, sphere);
  } else if (choice == "subtract") {
    interRes = CSG.subtract(cone, sphere);
  }

  const material = new THREE.MeshMatcapMaterial({
    color: parameters.color,
  });
  interRes.material = material;
  scene.add(interRes);
  return interRes;
};

const LightRaySceneEllipse = ({data}) => {
  const sceneRef = useRef(null);
  const {
    max_distance,
    min_distance,
    plume_width,
    plume_height,
} = data;

  useEffect(() => {
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    renderer.domElement.style.maxWidth = "100%";
    renderer.domElement.style.maxHeight = "100%";

    // const xRadius = dict['plume_height']
    // const yRadius = dict['plume_width']
    const xRadius = plume_width ; // 2;
    const yRadius = plume_height; // 0.5;
    const coneRadius = Math.max(xRadius, yRadius);

    // const minDistance = dict['min_distance']
    // const maxDistance = dict['max_distance']
    const minDistance = min_distance;
    const maxDistance = max_distance; //6;

    const sphere = createSphere(scene, maxDistance, maxDistance);
    const cone = createCone(scene, coneRadius, xRadius, yRadius, maxDistance);

    sphere.updateMatrix();
    cone.updateMatrix();

    let interModel1 = createIntersection(scene, cone, sphere, "intersect");
    let minSphere = createSphere(scene, minDistance, maxDistance);

    interModel1.updateMatrix();
    minSphere.updateMatrix();

    scene.add(minSphere);

    let model = createIntersection(scene, interModel1, minSphere, "subtract");
    model.rotation.x = Math.PI / 2;
    model.rotation.z = Math.PI / 2;


    //added gui to scene
    const gui = createGuiControls(model);
    const camera = createCamera(scene, maxDistance);

    renderer.render(scene, camera);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      controls.dispose();

      const rendererElement = renderer.domElement;
      const parentElement = rendererElement.parentElement;

      if (parentElement) {
        parentElement.removeChild(rendererElement);
        gui.destroy();
      }
    };
  }, [data]);

  return <div ref={sceneRef} />;
};

export default LightRaySceneEllipse;
