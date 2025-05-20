import type { InputHTMLAttributes } from 'react';


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	isValid?: boolean,
	isLoop?: boolean
}
