import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'normalize.css';
import './assets/styles/reset.css';
import './assets/styles/index.css';

import App from './App.tsx';
import Auth from './components/pages/Auth/Auth.tsx';
import Search from './components/pages/Search/Search.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Favorite from './components/pages/Favorite/Favorite.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Search /> 
			},
			{
				path: 'favorite',
				element: <Favorite /> 
			}
		]
		
	},
	{
		path: '/auth',
		element: <App />,
		children: [
			{
				path: 'login',
				element: <Auth /> 
			}
		]
	}
	// {
	// 	path: '*',
	// 	element: <Error />
	// }
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
