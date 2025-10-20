import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import useContants from '../hooks/useConstants';

export type Theme = 'ff7-theme' | 'ff8-theme' | 'default-theme';

export type Layout = 'wide' | 'boxed';

export type AppContextType = {
	theme: Theme;
	toggleTheme: () => void;
	// setTheme accepts either a Theme or an updater function (like React setState)
	setTheme: (t: Theme | ((prev: Theme) => Theme)) => void;
	layout: Layout;
	setLayout: (l: Layout) => void;
	siteName: string;
	profileLinks: { name: string; url: string }[];
	portfolioLinks: { name: string; url: string }[];
	setFocusedMenuItem: (item: object | undefined) => void;
	focusedMenuItem: object | undefined;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const { siteName, profileLinks, portfolioLinks } = useContants();

	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof window === 'undefined') return 'default-theme';
		const stored = window.localStorage.getItem('app:theme') as Theme | null;
		if (stored === 'ff7-theme' || stored === 'ff8-theme') return stored;
		// default to prefers-color-scheme
		const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
		return prefersDark ? 'ff8-theme' : 'ff7-theme';
	});

	const [layout, setLayout] = useState<Layout>('wide');

	const setThemeAndPersist = useCallback((t: Theme | ((prev: Theme) => Theme)) => {
		setTheme((prev) => {
			const newTheme = typeof t === 'function' ? (t as (p: Theme) => Theme)(prev) : t;
			try {
				window.localStorage.setItem('app:theme', newTheme);
			} catch {
				// ignore write errors
			}
			return newTheme;
		});
	}, []);

	const toggleTheme = useCallback(() => {
		setThemeAndPersist((t) => (t === 'ff7-theme' ? 'ff8-theme' : 'ff7-theme'));
	}, [setThemeAndPersist]);

	// apply theme class on documentElement
	useEffect(() => {
		if (typeof document === 'undefined') return;
		const body = document.body;
		if (theme === 'ff7-theme') body.classList.add('ff7-theme');
		else body.classList.remove('ff7-theme');
		if (theme === 'ff8-theme') body.classList.add('ff8-theme');
		else body.classList.remove('ff8-theme');
	}, [theme]);

	const [focusedMenuItem, setFocusedMenuItemState] = useState<object | undefined>(undefined);

	const setFocusedMenuItem = useCallback((item: object | undefined) => {
		// store the focused menu item in state so consumers can read it
		setFocusedMenuItemState(item);
	}, []);

	const value = useMemo(
		() => ({ theme, toggleTheme, setTheme: setThemeAndPersist, layout, setLayout, siteName, profileLinks, portfolioLinks, setFocusedMenuItem, focusedMenuItem }),
		[theme, toggleTheme, setThemeAndPersist, layout, siteName, profileLinks, portfolioLinks, setFocusedMenuItem, focusedMenuItem],
	);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Note: intentionally no additional exports to keep this file component-only for fast refresh
