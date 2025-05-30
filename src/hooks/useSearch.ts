import { debounce } from '@/utils/debounce';
import { useState,  useMemo , type FormEvent, useCallback } from 'react';

export const useSearch = () => {
	const [query, setQuery] = useState<string>('');

	const debouncedSearch = useMemo(() => 
		debounce((value: string) => {
			console.log('debouncedSearch:', value);
		}, 500)
	, []);

	const onSearch = useCallback((e: FormEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		setQuery(value);
		debouncedSearch(value);
	}, [debouncedSearch]);

	
	return {
		query,
		onSearch
	};
};
