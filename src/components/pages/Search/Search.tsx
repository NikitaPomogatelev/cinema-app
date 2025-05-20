import styles from './Search.module.css';
import Button from '../../Button/Button';
import { Heading } from '../../Heading/Heading';
import Input from '../../Input/Input';
import P from '../../P/P';
import { useState, type FormEvent } from 'react';
import CardList from '../../CardList/CardList';
import { MOCK_PRODUCTS } from '../../../data/products';
import type { ProductCardProps } from '../../ProductCard/ProductCard.props';
import NotFoundSearch from '../../NotFoundSearch/NotFoundSearch';

const Search = () => {

	const [products] = useState<ProductCardProps[]>(MOCK_PRODUCTS);

	const searchForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);    
		const formValues = Object.fromEntries(formData);
    
		console.log('formValues', formValues);
	};

	return (
		<section className={styles['search']}>
			<div className={styles['search__content']}>
				<Heading className={styles['search__heading']}>Поиск</Heading>
				<P className={styles['search__text']}>Введите название фильма, сериала или мультфильма для поиска и&nbsp;добавления в&nbsp;избранное.</P>
				<form className={styles['search__form']} onSubmit={searchForm}>
					<Input id='search' name='search' className={styles['search__input']} placeholder="Поиск..." isLoop={true} />
					<Button>Искать</Button>
				</form>


			</div>
			<CardList data={products} />

			<NotFoundSearch />

		</section>
	);
	
};

export default Search;
