const useContants = () => {
    const siteName = import.meta.env.VITE_SITE_NAME || 'My Site';


    const profileLinks = [
        { name: 'GitHub', url: 'https://github.com/gpeid', description: "Github Profile" },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ghdiep/', description: "LinkedIn Profile" },

    ];

    const portfolioLinks = [
        { name: 'Rabbit Rundown', url: 'https://rabbit-rundown.vercel.app/', description: "Fitness performance tracker with data comparison and visualization (React, TypeScript, Supabase, Strava API)" },
        { name: 'Concentration Game', url: 'https://concentration-card-game-theta.vercel.app/', description: "Memory game called concentration using a standard 52-card deck for my son to play with" },
        { name: 'Resume', url: '/resume', description: "Outdated resume" },
    ];

    return {
        siteName,
        profileLinks,
        portfolioLinks,
    };
}

export default useContants;