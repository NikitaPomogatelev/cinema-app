import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'normalize.css';
import './assets/styles/reset.css';
import './assets/styles/index.css';

import Auth from './components/pages/Auth/Auth.tsx';
import Search from './components/pages/Search/Search.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Favorite from './components/pages/Favorite/Favorite.tsx';
import Layout from './layout/Layout.tsx';
import Product from './components/pages/Product/Product.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Search /> 
			},
			{
				path: 'favorite',
				element: <Favorite /> 
			},
			{
				path: '/product/:id',
				element: <Product />,
				errorElement: <>Ошибка</>,
				loader: async ({params}) => {
					await new Promise<void>((resolve) => {
						setTimeout(() => {
							resolve();
							console.log('resolve');
					
						}, 1000);
					});
					// const { data } = await axios.get(`${PREFIX}/products/${params.id}`);

					// return data;
				}
			},
		]
		
	},
	{
		path: '/auth',
		element: <Layout />,
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
