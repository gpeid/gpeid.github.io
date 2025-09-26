
import type { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
	return <div className="container mx-auto px-8">
		<Header />
		{children}
		<Footer />
	</div>;
};

export default Layout;