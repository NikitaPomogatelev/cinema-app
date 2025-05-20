import styles from './NotFoundSearch.module.css';

const NotFoundSearch = () => {
	return (
		<div className={styles['not-found']}><h2 className={styles['not-found__title']}>Упс... Ничего не найдено</h2>
			<span className={styles['not-found__text']}>Попробуйте изменить запрос или ввести более точное название фильма</span>
		</div>
	);
};

export default NotFoundSearch;
