import ProductHead from '../../Product/ProductHead/ProductHead';
import { TagBadge } from '../../Product/TagBadge/TagBadge';
import FavoriteButton from '../../ProductCard/FavoriteButton';
import RateBadge from '../../ProductCard/RateBadge';
import ReviewList from '../../ReviewList/ReviewList';

import style from './Product.module.css';

const Product = () => {
	return (
		<section className={style['product']}>

			<ProductHead />

			<div className={style['product__content']}>
				<div className={style['product__image']}>
					<img src="/cinema-preview@2x.png" alt="Превью фильма" width={480} height={720} />
				</div>

				<div className={style['product__right']}>
					<p className={style['product__text']}>After the devastating events of&nbsp;Avengers: Infinity War, the universe is&nbsp;in&nbsp;ruins due to&nbsp;the efforts of&nbsp;the Mad Titan, Thanos. With the help of&nbsp;remaining allies, the Avengers must assemble once more in&nbsp;order to&nbsp;undo Thanos&rsquo; actions and restore order to&nbsp;the universe once and for all, no&nbsp;matter what consequences may be&nbsp;in&nbsp;store.</p>

					<div className={style['product__favorite-wrap']}>
						<RateBadge count={8.3} />
						<FavoriteButton isFavorite={false} onToggle={function (): void {
							console.log('favorite');
							
						} } />
					</div>


					<ul className={style['product__tags']}>
						<li className={style['product__tag']}>
							<TagBadge title='Тип' value='Movie' />
						</li>
						<li className={style['product__tag']}>
							<TagBadge title='Дата выхода' value='2019-04-24' />
						</li>
						<li className={style['product__tag']}>
							<TagBadge title='Длительность' value='181 мин' />
						</li>
						<li className={style['product__tag']}>
							<TagBadge title='Жанр' value='Adventure, Science Fiction, Action' />
						</li>
					</ul>


				</div>
			</div>

			<div className={style['product__reviews']}>
				<ReviewList />
			</div>
		</section>
	);
};

export default Product;
