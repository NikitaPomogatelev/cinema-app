import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';

export const useAuth = () => {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error('ctx не определён');
	return ctx;
};
