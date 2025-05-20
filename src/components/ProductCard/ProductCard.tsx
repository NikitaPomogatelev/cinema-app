import FavoriteButton from './FavoriteButton';
import styles from './ProductCard.module.css';
import type { ProductCardProps } from './ProductCard.props';
import RateBadge from './RateBadge';

const ProductCard = ({ id, imgSrc = '', title = '', rating = 0, isFavorite  }: ProductCardProps) => {
	return (
		<a href={`product/${id}`} className={styles['card__link']}>
			<article className={styles['card']}>
				<div className={styles['card__image']}>
					<img src={imgSrc} width={264} height={400} draggable="false" alt="Превью для фильма" />

					<RateBadge className={styles['card__rate']} count={rating} />

					<div className={styles['card__bottom']}>
						<h2 className={styles['card__title']}>{title}</h2>

						<FavoriteButton isFavorite={isFavorite} onToggle={() => console.log('isFavorite')} />
					</div>
				</div>
			</article>
		</a>
	);
};

export default ProductCard;
