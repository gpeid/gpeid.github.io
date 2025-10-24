
import type { ReactNode } from "react";
import type { Theme } from "../../context/AppContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type LayoutProps = {
	children: ReactNode;
	theme: Theme;
};

const Layout = ({ children, theme }: LayoutProps) => {
	return <div className={`${theme ? theme : "default-theme"} container sm:h-screen mx-auto px-8 pt-8`} >
		<Header />
		{children}
		<Footer />
	</div >;
};

export default Layout;