import styles from './Search.module.css';
import Button from '../../Button/Button';
import { Heading } from '../../Heading/Heading';
import Input from '../../Input/Input';
import P from '../../P/P';
import type { FormEvent } from 'react';

const Search = () => {

	const searchForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);    
		const formValues = Object.fromEntries(formData);
    
		console.log('formValues', formValues);
	};

	return (
		<div className={styles['search__content']}>
			<Heading className={styles['search__heading']}>Поиск</Heading>
			<P className={styles['search__text']}>Введите название фильма, сериала или мультфильма для поиска и&nbsp;добавления в&nbsp;избранное.</P>
			<form className={styles['search__form']} onSubmit={searchForm}>
				<Input id='search' name='search' className={styles['search__input']} placeholder="Поиск..." isLoop={true} />
				<Button>Искать</Button>
			</form>

			{/* TODO */}
			<ul className={styles['search__list']}>
				<li>Карточка</li>
			</ul>

		</div>
		
	);
};

export default Search;
