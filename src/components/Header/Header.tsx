import styles from './Header.module.css';
import useAppContext from '../../context/useAppContext';
import { useId } from 'react';
import type { Theme } from '../../context/ThemeContext';
import useTheme from '../../context/useTheme';

const themeOptions: { label: string; value: Theme }[] = [
	{ label: 'FF7', value: 'ff7-theme' },
	{ label: 'FF8', value: 'ff8-theme' },
];

const Header = () => {
	const { siteName } = useAppContext();
	const { theme, setTheme } = useTheme();
	const id = useId();

	return (
		<header className={styles.headerDark}>
			<div className="flex items-center justify-between">
				<h1 className="text-4xl">{siteName}</h1>

				<fieldset className={styles.themeSwitch} aria-label="Theme">
					{themeOptions.map((option) => {
						const optionId = `${id}-${option.value}`;

						return (
							<div className={styles.themeOption} key={option.value}>
								<input
									className={styles.themeInput}
									id={optionId}
									type="radio"
									name="theme"
									value={option.value}
									checked={theme === option.value}
									onChange={() => setTheme(option.value)}
								/>
								<label className={styles.themeLabel} htmlFor={optionId}>
									{option.label}
								</label>
							</div>
						);
					})}
				</fieldset>
			</div>
		</header>
	);
};

export default Header;
