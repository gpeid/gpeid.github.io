import useContants from "../../hooks/useConstants";

const PortfolioNavigation = () => {
    const { profileLinks, portfolioLinks } = useContants();
    return <div>
        <ul>
            {[...profileLinks, ...portfolioLinks].map((link) => (
                <li className="portfolio-link mb-0.5 w-md" key={link.name}>
                    <a
                        className="block py-1.5 pl-7 font-light text-3xl"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    </div>;
};

export default PortfolioNavigation;