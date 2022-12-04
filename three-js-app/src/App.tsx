import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/home';
import BaseCube from './components/base-cube';
import BaseCubeAnimated from './components/base-cube-animated';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/base-cube',
			element: <BaseCube />,
		},
		{
			path: '/base-cube-animated',
			element: <BaseCubeAnimated />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
