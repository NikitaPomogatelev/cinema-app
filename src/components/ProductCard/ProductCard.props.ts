import type { ButtonHTMLAttributes, HTMLAttributes } from 'react';

export interface ProductCardProps {
	id: number;
	imgSrc: string;
	title: string;
	rating: number;
	isFavorite: boolean;
}

export interface RatingBadgeProps extends HTMLAttributes<HTMLSpanElement> {
	count: number | string;
}


export interface FavoriteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isFavorite: boolean;
	onToggle: () => void;
}
