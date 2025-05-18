import Button from './components/Button/Button';
import { Heading } from './components/Heading/Heading';
import P from './components/P/P';



function App() {

	return (
		<div className='site-container'>
			<header>Это шапка</header>
			<main className='main'>
				<div className="container">

					<Heading >Поиск</Heading>
					<Button >Искать</Button>
					<P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure repellat sapiente odio? Dolorum minima fugit consectetur distinctio. Atque, architecto minus.</P>
					<P size='lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure repellat sapiente odio? Dolorum minima fugit consectetur distinctio. Atque, architecto minus.</P>
				</div>

			</main>
			<footer>Это подвал</footer>
    
       
		</div>
	);
}

export default App;
