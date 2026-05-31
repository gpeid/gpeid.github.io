import {
	createContext,
	useCallback,
	useEffect,
	useMemo,
	useState,
	type ReactNode,
} from 'react';

export type Theme = 'ff7-theme' | 'ff8-theme';

type ThemeContextType = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
};

const THEME_STORAGE_KEY = 'app:theme';
const themes: Theme[] = ['ff7-theme', 'ff8-theme'];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;

const isTheme = (value: string | null): value is Theme => {
	return value === 'ff7-theme' || value === 'ff8-theme';
};

const getInitialTheme = (): Theme => {
	if (typeof window === 'undefined') return 'ff7-theme';

	const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
	if (isTheme(storedTheme)) return storedTheme;

	const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
	return prefersDark ? 'ff8-theme' : 'ff7-theme';
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setThemeState] = useState<Theme>(getInitialTheme);

	const setTheme = useCallback((nextTheme: Theme) => {
		setThemeState(nextTheme);
		window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
	}, []);

	const toggleTheme = useCallback(() => {
		setThemeState((currentTheme) => {
			const nextTheme = currentTheme === 'ff7-theme' ? 'ff8-theme' : 'ff7-theme';
			window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
			return nextTheme;
		});
	}, []);

	useEffect(() => {
		document.body.classList.remove(...themes);
		document.body.classList.add(theme);
	}, [theme]);

	const value = useMemo(
		() => ({
			theme,
			setTheme,
			toggleTheme,
		}),
		[theme, setTheme, toggleTheme],
	);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
