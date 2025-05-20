import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<div className="container">
				<div className={styles['footer__inner']}>
					
					&copy;&nbsp;2025
					
				</div>
			</div>
		</footer>
	);
};

export default Footer;
