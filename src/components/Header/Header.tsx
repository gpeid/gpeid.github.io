import useContants from '../../hooks/useConstants';
import styles from './Header.module.css';

const Header = () => {
	const { siteName } = useContants();
	return (
		<header className={styles.headerDark}>
			<h1 className="text-4xl">
				{siteName}
			</h1>
		</header>
	);
};

export default Header;
