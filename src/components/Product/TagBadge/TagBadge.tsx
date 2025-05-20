import type { TagBadgeProps } from './TagBadge.props';
import style from './TagBadge.module.css';

export const TagBadge = ({title, value}: TagBadgeProps) => {
	return (
		<div className={style['tag-badge']}>
			<span className={style['tag-badge__title']}>{title}</span>
			<span className={style['tag-badge__value']}>{value}</span>
		</div>
	);
};

