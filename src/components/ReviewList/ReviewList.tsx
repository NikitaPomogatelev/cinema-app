import ReviewCard from '../ReviewCard/ReviewCard';
import style from './ReviewList.module.css';

const ReviewList = () => {
	return (
		<div className={style['review-block']}>
			<h2 className={style['review-block__title']}>Отзывы</h2>

			<ReviewCard title={'Not as good as infinity war..'} text={'But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and effortless feel infinity war somehow managed to accomplish. Some silly plot holes and characters that could&apos;ve been cut (Ahem, captain marvel and thanos). The use of Captain marvel in this film was just ridiculous. Shes there at the start, bails for some reason? And then pops up at the end to serve no purpose but deux ex machina a space ship...'} />
		</div>
	);
};

export default ReviewList;
