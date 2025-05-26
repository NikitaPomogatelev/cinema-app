import styles from './Auth.module.css';
import Button from '../../Button/Button';

import Input from '../../Input/Input';
import type { FormEvent } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Heading from '@/components/Heading/Heading';


const Auth = () => {
	const {login} = useAuth();

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		login(formData);
	};

	return (
		<section className={styles['auth']}>
			<Heading className={styles['auth__heading']} >Вход</Heading>
			<form className={styles['auth__form']} onSubmit={onSubmit}>
				<Input id='name' type='text' name='name' className={styles['auth__input']} placeholder='Ваше имя' />

				<Button className={styles['auth__btn']}>Войти в профиль</Button>
			</form>
		</section>
	);
};

export default Auth;
