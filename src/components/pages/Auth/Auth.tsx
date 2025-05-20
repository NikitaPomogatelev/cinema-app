import styles from './Auth.module.css';
import Button from '../../Button/Button';
import { Heading } from '../../Heading/Heading';
import Input from '../../Input/Input';
import type { FormEvent } from 'react';


const Auth = () => {

	const login = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		const formData = new FormData(e.currentTarget);
		const formValues = Object.fromEntries(formData);
    
		console.log('formValues', formValues);
	};

	return (
		<section className={styles['auth']}>
			<Heading className={styles['auth__heading']} >Вход</Heading>
			<form className={styles['auth__form']} onSubmit={login}>
				<Input id='name' name='name' className={styles['auth__input']} placeholder='Ваше имя' />

				<Button className={styles['auth__btn']}>Войти в профиль</Button>
			</form>
		</section>
	);
};

export default Auth;
