import useAppContext from "../context/useAppContext";

const PortfolioNavigation = () => {
    // const { profileLinks, portfolioLinks } = useContants();
    const { portfolioLinks, profileLinks, setFocusedMenuItem } = useAppContext();
    return <div className="block-bg-gradient secondary-block portfolio-links-block">
        <ul>
            {[...profileLinks, ...portfolioLinks].map((link) => (
                <li className="max-w-md mb-0.5 portfolio-link relative" key={link.name}>
                    <a
                        className="block pl-7 font-light"
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
                            }
                        }}
                    >
                        <div className="selection-cursor"></div>
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    </div>;
};

export default PortfolioNavigation;