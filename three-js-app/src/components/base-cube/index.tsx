import * as THREE from 'three';
import { useEffect, useRef } from 'react';

function BaseCube() {
	const canvasRef = useRef<any>();

	useEffect(() => {
		const canvas = canvasRef.current;
		const renderer = new THREE.WebGLRenderer({ canvas });

		//set the camera

		const fov = 75; // field of view
		const aspect = 2; // the canvas default
		const near = 0.1;
		const far = 5;

		const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
		camera.position.z = 2;

		// set a Scene
		const scene = new THREE.Scene();

		// create a box geometry
		const boxWidth = 1;
		const boxHeight = 1;
		const boxDepth = 1;
		const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

		//create basic material
		const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });

		// create a Mesh
		const cube = new THREE.Mesh(geometry, material);

		// aggiungiamo il cubo alla scena
		scene.add(cube);

		// renderizziamo scena e camera
		renderer.render(scene, camera);
	}, []);

	return <canvas ref={canvasRef}></canvas>;
}

export default BaseCube;
