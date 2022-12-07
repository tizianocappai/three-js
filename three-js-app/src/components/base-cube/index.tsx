import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './style.css';

function BaseCube() {
	const canvasRef = useRef<any>();

	useEffect(() => {
		const canvas = canvasRef.current;
		const renderer = new THREE.WebGLRenderer({ canvas });

		//set the camera

		const fov = 75; // field of view
		const aspect = window.innerWidth / window.innerHeight; // the canvas default
		const near = 0.1;
		const far = 100;

		const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

		//allow user to control scene using mouse
		const orbit = new OrbitControls(camera, renderer.domElement);

		camera.position.set(0, 2, 5);

		// call this method after set the camera position
		orbit.update();

		// set a Scene
		const scene = new THREE.Scene();

		// create a box geometry
		const geometry = new THREE.BoxGeometry();

		//create basic material
		const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });

		// create a Mesh
		const cube = new THREE.Mesh(geometry, material);

		// aggiungiamo il cubo alla scena
		scene.add(cube);

		function animate() {
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
			renderer.render(scene, camera);
		}
		cube.rotation.x = 5;
		cube.rotation.y = 2;

		const axesHelper = new THREE.AxesHelper(5);
		scene.add(axesHelper);
		// renderizziamo scena e camera
		renderer.setAnimationLoop(animate);
	}, []);

	return <canvas className='base-cube-container' ref={canvasRef}></canvas>;
}

export default BaseCube;
