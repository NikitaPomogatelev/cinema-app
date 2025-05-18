import styles from './Heading.module.css';
import type { HeadingProps } from './Heading.props';
import cn from 'classnames';


export const Heading = ({ children, className, ...props}: HeadingProps) => {
	return (
		<h1 className={cn(styles['heading'], className)} { ...props }>{children}</h1>
	);
};

