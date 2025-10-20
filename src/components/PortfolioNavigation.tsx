import useAppContext from "../context/useAppContext";

const PortfolioNavigation = () => {
    // const { profileLinks, portfolioLinks } = useContants();
    const { portfolioLinks, profileLinks, setFocusedMenuItem } = useAppContext();
    const value = useAppContext();
    return <div className="block-bg-gradient secondary-block portfolio-links-block">
        <ul>
            {[...profileLinks, ...portfolioLinks].map((link) => (
                <li className="portfolio-link mb-0.5 max-w-md" key={link.name}>
                    <a
                        className="block py-1.5 pl-7 font-light"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onFocus={() => {
                            if (setFocusedMenuItem) {
                                setFocusedMenuItem(link);
                            }
                        }}
                        onMouseOver={() => {
                            if (setFocusedMenuItem) {
                                setFocusedMenuItem(link);
                                console.log(value)
                            }
                        }}
                    >
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    </div>;
};

export default PortfolioNavigation;