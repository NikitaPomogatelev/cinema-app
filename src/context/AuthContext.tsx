import { createContext, useState, useEffect } from 'react';
import { saveState, removeState, loadState } from '@/hooks/useLocalStorage';
import type { User } from '@/interfaces/user.interface';

interface AuthContextType {
  user: User | null;
  login: (formData: FormData) => void;
  logout: () => void;
	isLoading: boolean
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType>({
	user: null,
	isLoading: true,
	login: () => {},
	logout: () => {}
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const storedUser = loadState<User | null>('user');
		if (storedUser) {
			setUser(storedUser);
		}  
		setIsLoading(false);
	}, []);

	const login = (formData: FormData) => {
		const { name } = Object.fromEntries(formData);
		
		if (typeof name === 'string') {
			const newUser = { name, isLogined: true };
			saveState('user', newUser);
			setUser(newUser);
		}

	};

	const logout = () => {
		removeState('user');
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, isLoading }}>
			{children}
		</AuthContext.Provider>
	);
};
