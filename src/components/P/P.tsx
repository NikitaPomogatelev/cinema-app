import styles from './P.module.css';
import type { PProps } from './P.props';
import cn from 'classnames';

const P = ({children, size = 'md', className, ...props}: PProps) => {
	return (
		<p className={cn(styles['paragraph'], className, {
			[styles['md']]: size === 'md',
			[styles['lg']]: size === 'lg'
		})} {...props}>{children}</p>
	);
};

export default P;
