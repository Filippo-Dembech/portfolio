import Header from "../components/Header";
import { classes } from "../utils/classes";
import HomepageLink from "./Homepage/HomepageLink";

const links = [
    {
        title: "My Projects",
        to: "/projects",
        iconSrc: "/projects.lottie",
        lottiClassName:
            "absolute top-1/2 -translate-y-1/2 right-[-50px] w-full max-w-[350px] sm:right-0 sm:scale-400 mix-blend-darken",
    },
    {
        title: "My Articles",
        external: "https://filippo-dembech.github.io/articles/",
        iconSrc: "/articles.lottie",
        lottiClassName:
            "absolute top-1/2 -translate-y-1/2 right-4 w-40 sm:right-1/2 sm:translate-x-1/2 sm:scale-120 mix-blend-luminosity",
    },
    {
        title: "My Story",
        to: "/story",
        iconSrc: "/story.lottie",
        lottiClassName:
            "absolute top-1/2 -translate-y-1/2 right-[-20px] w-1/2 max-w-[200px] rotate-20 sm:right-0 sm:scale-400 sm:rotate-20 mix-blend-darken opacity-85",
    },
    {
        title: "My Contacts",
        to: "/contacts",
        iconSrc: "/contacts.lottie",
        lottiClassName:
            "absolute top-1/2 -translate-y-1/2 right-4 w-3/5 max-w-[200px] rotate-[-20deg] sm:scale-300",
    },
];

export default function Homepage() {
    
    const pageClassName = classes(
        "p-3",
        "pb-8",
        "bg-orange-50",
        "min-h-[100dvh]",
        "flex",
        "flex-col",
        "overflow-hidden"       
    )
    
    const containerClassName = classes(
        "sm:max-w-[650px]",
        "sm:m-auto",
        "flex",
        "flex-col",
        "sm:flex-row",
        "justify-center",
        "items-stretch",
        "flex-1",
        "gap-8",       
    )

    return (
        <div className={pageClassName}>
            <Header>My Portfolio</Header>
            <div className={containerClassName}>
                {links.map((link, i) => (
                    <HomepageLink
                        to={link.to}
                        iconSrc={link.iconSrc}
                        lottiClassName={link.lottiClassName}
                    >
                        {link.title}
                    </HomepageLink>
                ))}
            </div>
        </div>
    );
}
