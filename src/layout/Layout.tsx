import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = () => {
	return (
		<div className='site-container'>
			<Header />

			<main className='main'>
				<div className="container">
					<Outlet />
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Layout;
