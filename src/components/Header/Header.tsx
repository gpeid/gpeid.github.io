import styles from './Header.module.css';
import useAppContext from '../../context/useAppContext';
import { useId } from 'react';

const Header = () => {
	const { siteName, theme, toggleTheme } = useAppContext();
	const id = useId();
	const ff7Id = `${id}-ff7-theme`;
	const ff8Id = `${id}-ff8-theme`;

	return (
		<header className={styles.headerDark}>
			<div className="flex items-center justify-between">
				<h1 className="text-4xl">{siteName}</h1>

				<input id={ff7Id} type="radio" name="theme" value="ff7-theme" checked={theme === 'ff7-theme'} onChange={toggleTheme}
				/> <label htmlFor={ff7Id}>FF7 Theme</label>
				<input id={ff8Id} type="radio" name="theme" value="ff8-theme" checked={theme === 'ff8-theme'} onChange={toggleTheme}
				/> <label htmlFor={ff8Id}>FF8 Theme</label>
			</div>
		</header>
	);
};

export default Header;
