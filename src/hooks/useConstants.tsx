const useContants = () => {
    const siteName = import.meta.env.VITE_SITE_NAME || 'My Site';


    const profileLinks = [
        { name: 'GitHub', url: 'https://github.com/gpeid' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ghdiep/' },

    ];

    const portfolioLinks = [
        { name: 'Rabbit Rundown', url: 'https://rabbit-rundown.vercel.app/' },
        { name: 'Resume', url: '/resume' },
    ];

    return {
        siteName,
        profileLinks,
        portfolioLinks,
    };
}

export default useContants;