
import type { ReactNode } from "react";
import useTheme from "../../context/useTheme";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const { theme } = useTheme();

	return <div className={`${theme} container sm:h-screen mx-auto px-8 pt-8`} >
		<Header />
		{children}
		<Footer />
	</div >;
};

export default Layout;
