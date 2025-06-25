const linksData =  [
    {
        title: "My Projects",
        to: "/projects",
        iconSrc: process.env.PUBLIC_URL + "/projects.lottie",
        lottiClassName:
            "absolute top-1/2 -translate-y-1/2 right-[-50px] w-full max-w-[350px] sm:right-0 sm:scale-400 mix-blend-darken",
    },
    {
        title: "My Articles",
        external: "https://filippo-dembech.github.io/articles/",
        iconSrc: process.env.PUBLIC_URL + "/articles.lottie",
        lottiClassName:
            "absolute top-1/2 -translate-y-1/2 right-4 w-40 sm:right-1/2 sm:translate-x-1/2 sm:scale-120 mix-blend-luminosity",
    },
    {
        title: "My Story",
        to: "/story",
        iconSrc: process.env.PUBLIC_URL + "/story.lottie",
        lottiClassName:
            "absolute top-1/2 -translate-y-1/2 right-[-20px] w-1/2 max-w-[200px] rotate-20 sm:right-0 sm:scale-400 sm:rotate-20 mix-blend-darken opacity-85",
    },
    {
        title: "My Contacts",
        to: "/contacts",
        iconSrc: process.env.PUBLIC_URL + "/contacts.lottie",
        lottiClassName:
            "absolute top-1/2 -translate-y-1/2 right-4 w-3/5 max-w-[200px] rotate-[-20deg] sm:scale-300",
    },
];

export default linksData;