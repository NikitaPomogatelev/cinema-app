import { useState } from 'react';
import CardList from '../../CardList/CardList';

import style from './Favorite.module.css';
import { MOCK_PRODUCTS } from '../../../data/products';
import type { ProductCardProps } from '../../ProductCard/ProductCard.props';
import Heading from '@/components/Heading/Heading';


const Favorite = () => {
	const [products] = useState<ProductCardProps[]>(MOCK_PRODUCTS);

	const favoriteProducts = products.filter(product => product.isFavorite);

	return (
		<section className={style['favorite']}>
			<Heading>Избранное</Heading>

			<CardList data={favoriteProducts} />

			<div className={style['favorite__empty']}>
				<span>Список пуст. Добавьте фильм в избранное</span>
			</div>
		</section>
	);
};

export default Favorite;
