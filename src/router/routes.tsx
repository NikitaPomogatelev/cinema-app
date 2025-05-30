
import Auth from '../components/pages/Auth/Auth';
import Search from '../components/pages/Search/Search';
import Favorite from '../components/pages/Favorite/Favorite';
import Product from '../components/pages/Product/Product';
import Layout from '../layout/Layout';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
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
				path: 'product/:id',
				element: <Product />,
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => {
					await new Promise<void>((resolve) => {
						setTimeout(() => {
							resolve();
							console.log('resolve');
						}, 1000);
					});
					// const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
					// return data;
				}
			}
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
]);
