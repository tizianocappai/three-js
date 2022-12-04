import * as THREE from 'three';
import { useEffect, useRef } from 'react';

function BaseCubeAnimated() {
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

		// funzione per creare animazione del cubo
		const cubeAnimation = (time: any) => {
			time *= 0.001; // convert time to seconds

			cube.rotation.x = time;
			cube.rotation.y = time;

			renderer.render(scene, camera);

			requestAnimationFrame(cubeAnimation);
		};

		// richiesta al browser che si vuole animare qualcosa
		requestAnimationFrame(cubeAnimation);
	}, []);

	return <canvas ref={canvasRef}></canvas>;
}

export default BaseCubeAnimated;
