import type { ReviewCardProps } from './Review.props';
import styles from './ReviewCard.module.css';

const ReviewCard = ({title, text}: ReviewCardProps) => {
	return (
		<div className={styles['review__card']}>
			<h3 className={styles['review__title']}>{title}</h3>
			<p className={styles['review__text']}>{text}</p>
		</div>
	);
};

export default ReviewCard;
