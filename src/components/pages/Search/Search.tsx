import styles from './Search.module.css';

import Input from '../../Input/Input';
import P from '../../P/P';
import { useState } from 'react';
import CardList from '../../CardList/CardList';
import { MOCK_PRODUCTS } from '../../../data/products';
import type { ProductCardProps } from '../../ProductCard/ProductCard.props';
import NotFoundSearch from '../../NotFoundSearch/NotFoundSearch';
import Heading from '@/components/Heading/Heading';
import { useSearch } from '@/hooks/useSearch';

const Search = () => {

	const [products] = useState<ProductCardProps[]>(MOCK_PRODUCTS);

	const {onSearch} = useSearch();

	return (
		<section className={styles['search']}>
			<div className={styles['search__content']}>
				<Heading className={styles['search__heading']}>Поиск</Heading>
				<P className={styles['search__text']}>Введите название фильма, сериала или мультфильма для поиска и&nbsp;добавления в&nbsp;избранное.</P>

				<Input id='search' name='search' type='search' className={styles['search__input']} placeholder="Поиск..." isLoopIcon={true} onInput={onSearch} />

			</div>
			<CardList data={products} />

			<NotFoundSearch />

		</section>
	);
	
};

export default Search;
