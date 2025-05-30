import styles from './Auth.module.css';
import Button from '../../Button/Button';

import Input from '../../Input/Input';
import { useEffect, type FormEvent } from 'react';
import Heading from '@/components/Heading/Heading';
import { useNavigate } from 'react-router';
import { useAuth } from '@/hooks/useAuth';


const Auth = () => {
	const navigate = useNavigate();

	const { login, user, isLoading } = useAuth();

	useEffect(() => {
		if (!isLoading && user) {
			navigate('/');
		}
		
	}, [user, isLoading, navigate]);


	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		console.log('formData', formData);
		

		login(formData);

		navigate('/');
	};

	return <>
		{!isLoading && <section className={styles['auth']}>
			<Heading className={styles['auth__heading']} >Вход</Heading>
			<form className={styles['auth__form']} onSubmit={onSubmit}>
				<Input id='name' type='text' name='name' className={styles['auth__input']} placeholder='Ваше имя' />

				<Button className={styles['auth__btn']}>Войти в профиль</Button>
			</form>
		</section>

		}

	</>;
};

export default Auth;
