
import { Outlet } from 'react-router';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {

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
}

export default App;
