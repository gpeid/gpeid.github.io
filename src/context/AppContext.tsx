import { createContext, useCallback, useMemo, useState } from 'react';
import useContants from '../hooks/useConstants';

export type Layout = 'wide' | 'boxed';

export type MenuItem = {
	id?: string;
	label?: string;
	description?: string;
	// allow extra metadata when needed
	[key: string]: unknown;
};

export type AppContextType = {
	layout: Layout;
	setLayout: (l: Layout) => void;
	siteName: string;
	profileLinks: { name: string; url: string, description: string }[];
	portfolioLinks: { name: string; url: string, description: string }[];
	setFocusedMenuItem: (item: MenuItem | undefined) => void;
	focusedMenuItem: MenuItem | undefined;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const { siteName, profileLinks, portfolioLinks } = useContants();

	const [layout, setLayout] = useState<Layout>('wide');

	const [focusedMenuItem, setFocusedMenuItemState] = useState<MenuItem | undefined>(undefined);

	const setFocusedMenuItem = useCallback((item: MenuItem | undefined) => {
		// store the focused menu item in state so consumers can read it
		setFocusedMenuItemState(item);
	}, []);

	const value = useMemo(
		() => ({ layout, setLayout, siteName, profileLinks, portfolioLinks, setFocusedMenuItem, focusedMenuItem }),
		[layout, siteName, profileLinks, portfolioLinks, setFocusedMenuItem, focusedMenuItem],
	);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Note: intentionally no additional exports to keep this file component-only for fast refresh
