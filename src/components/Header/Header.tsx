import { Link, useNavigate } from 'react-router';
import styles from './Header.module.css';
import LogoIcon from '../Icon/LogoIcon';
import { useAuth } from '@/hooks/useAuth';


const Header = () => {
	const navigate = useNavigate();

	const { logout, user } = useAuth();

	const handleLogout = () => {
		logout();
		navigate('/auth/login');
	};

	return (
		<header className={styles['header']}>
			<div className="container">
				<div className={styles['header__inner']}>
					<Link to={'/'} className={styles['header__logo']}>
						<LogoIcon />
					</Link>

					<div className={styles['header__right']}>
						<nav className={styles['header__nav']}>
							<Link to={'/'} >Поиск фильмов</Link>
							<Link to={'/favorite'} className={styles['header__films']} >Мои фильмы <span>2</span></Link>

							{user?.isLogined && <div className={styles['user']}>
								<span>{user.name}</span>
								<span className={styles['user__icon']}>
									<img src="/src/assets/img/user-icon.svg" alt="Иконка пользователя" />
								</span>
							</div>
							}
							{user?.isLogined ? <button className={styles['nav__btn-exit']} onClick={handleLogout}>Выйти
								<img src="/src/assets/img/exit-icon.svg" alt="Иконка пользователя" />
							</button> : <Link to={'/auth/login'} >Войти </Link>	}
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
