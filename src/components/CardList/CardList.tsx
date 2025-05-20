import ProductCard from '../ProductCard/ProductCard';
import styles from './CardList.module.css';
import type { CardListProps } from './CardList.props';

const CardList = ({data}: CardListProps) => {

	return  <>
		<ul className={styles['card-list']}>
			{data.map(p => (<li key={p.id}>
				<ProductCard id={p.id} imgSrc={p.imgSrc} title={p.title} rating={p.rating} isFavorite={p.isFavorite} />
			</li>))}
		</ul>
	</>;

};
export default CardList;
