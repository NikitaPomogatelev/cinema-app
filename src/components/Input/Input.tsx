import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import type { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ isValid = false, isLoop = false, className, ...props },
	ref
) {
	const inputElement = (
		<input
			ref={ref}
			className={cn(styles['input'], className, {
				[styles['input__icon']]: isLoop,
				[styles['invalid']]: isValid
			})}
			{...props}
		/>
	);

	return (
		<>
			{isLoop ? (
				<div className={cn(styles['input-wrap'], className)}>{inputElement}</div>
			) : (
				inputElement
			)}
		</>
	);
});

export default Input;
