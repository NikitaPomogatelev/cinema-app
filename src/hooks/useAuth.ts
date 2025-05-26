import { useCallback } from 'react';

export const useAuth = () => {
	const login = useCallback((formData: FormData) => {
		const formValues = Object.fromEntries(formData);
    
		console.log('formValues', formValues);
	}, []);

	return { login };
};
