import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import type { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ isInvalid = false, isLoopIcon = false, className, ...props },
	ref
) {

	const inputClassName = cn(styles['input'], className, {
		[styles['input__icon']]: isLoopIcon,
		[styles['invalid']]: isInvalid
	});

	

	if (isLoopIcon) {
		return <div className={cn(styles['input-wrap'], className)}> <input ref={ref} className={inputClassName} {...props} /></div>;
	}
	return <input ref={ref} className={inputClassName} {...props} />;
});

export default Input;
