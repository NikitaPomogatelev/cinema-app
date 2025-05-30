import style from './ProductHead.module.css';

const ProductHead = () => {
	return (
		<div className={style['product-head']}>
			<span className={style['product-head__name']}>Поиск фильмов</span>
			<h1 className={style['product__title']}>Avengers: Endgame</h1>
		</div>
	);
};

export default ProductHead;
