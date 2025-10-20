import styles from './Header.module.css';
import useAppContext from '../../context/useAppContext';

const Header = () => {
	const { siteName, theme, toggleTheme } = useAppContext();
	return (
		<header className={styles.headerDark}>
			<div className="flex items-center justify-between">
				<h1 className="text-4xl">{siteName}</h1>

				<input id="ff7-theme" type="radio" name="theme" value="ff7-theme" checked={theme === 'ff7-theme'} onClick={toggleTheme}
				/> <label htmlFor="ff7-theme">FF7 Theme</label>
				<input id="ff8-theme" type="radio" name="theme" value="ff8-theme" checked={theme === 'ff8-theme'} onClick={toggleTheme}
				/> <label htmlFor="ff8-theme">FF8 Theme</label>
			</div>
		</header>
	);
};

export default Header;
