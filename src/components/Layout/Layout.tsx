
import type { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }: { children: ReactNode }) => {
	return <div className="container sm:h-screen mx-auto px-8 pt-8">
		<Header />
		{children}
		<Footer />
	</div>;
};

export default Layout;