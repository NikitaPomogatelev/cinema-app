import FavoriteIcon from '../Icon/FavoriteIcon';
import LikeIcon from '../Icon/LikeIcon';
import styles from './ProductCard.module.css';
import type { FavoriteButtonProps } from './ProductCard.props';
import cn from 'classnames';


const FavoriteButton = ({isFavorite = false, ...props }: FavoriteButtonProps) => {

	const text = isFavorite ? 'В избранном' : 'В избранное';
	const icon = isFavorite ? <FavoriteIcon /> : <LikeIcon />;

	return (
		<button className={cn(styles['favorite-btn'], {
			[styles['active']]: isFavorite
		})} {...props}>
			<span className={styles['favorite-btn__icon']}>
				{icon}
			</span>

			{text}
		</button>
	);
};

export default FavoriteButton;
