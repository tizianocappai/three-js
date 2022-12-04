import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import GUI from 'lil-gui';

function BaseCubeAnimated() {
	const canvasRef = useRef<any>();

	useEffect(() => {
		const canvas = canvasRef.current;
		const renderer = new THREE.WebGLRenderer({ canvas });

		//set the camera

		const fov = 75; // field of view
		const aspect = 2; // the canvas default
		const near = 0.5;
		const far = 5;

		const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
		camera.position.z = 2;

		// set a Scene
		const scene = new THREE.Scene();

		const makeInstance = (geometry: any, color: any, x: number) => {
			const material = new THREE.MeshPhongMaterial({ color });

			const cube = new THREE.Mesh(geometry, material);
			scene.add(cube);

			cube.position.x = x;

			return cube;
		};

		// create a box geometry
		const boxWidth = 1;
		const boxHeight = 1;
		const boxDepth = 1;
		const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

		const cubes = [
			makeInstance(geometry, 0xef233c, 0),
			makeInstance(geometry, 0x6a994e, -2),
			makeInstance(geometry, 0x023e8a, 2),
		];

		// settiamo le variabili per la luce
		const color = 0xffffff;
		const intensity = 1;
		const light = new THREE.DirectionalLight(color, intensity);

		// definiamo  la posizione per la luce
		light.position.set(1, 1, 2);

		// aggiungiamo la luce alla scena
		scene.add(light);

		// funzione per creare animazione del cubo
		const cubeAnimation = (time: any) => {
			time *= 0.001; // convert time to seconds

			cubes.forEach((cube, i) => {
				const speed = 1 + i * 0.1;
				const rotation = time * speed;
				cube.rotation.x = rotation;
				cube.rotation.y = rotation;
			});

			renderer.render(scene, camera);

			requestAnimationFrame(cubeAnimation);
		};

		// richiesta al browser che si vuole animare qualcosa
		requestAnimationFrame(cubeAnimation);

		const gui = new GUI();
		gui.add(light, 'intensity', 0, 2, 0.01);
		gui.add(light.target.position, 'x', -10, 10);
		gui.add(light.target.position, 'z', -10, 10);
		gui.add(light.target.position, 'y', 0, 10);
	}, []);

	return <canvas  ref={canvasRef}></canvas>;
}

export default BaseCubeAnimated;
