import { createElement } from 'react';
import styles from './Heading.module.css';
import type { HeadingProps } from './Heading.props';
import cn from 'classnames';


const Heading = ({ tag = 'h1', children, className, ...props}: HeadingProps) => {
	return createElement(
		tag,
		{ className: cn(styles['heading'], className), ...props },
		children
	);
};

export default Heading;



