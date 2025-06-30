import { classes} from '../../utils/classes'

const projectsClassName = classes(
    "absolute",
    "top-1/2",
    "-translate-y-1/2",
    "right-[-50px]",
    "max-w-[350px]",
    "sm:right-0",
    "sm:scale-[4]",
    "mix-blend-darken",
)

const articlesClassName = classes(
    "absolute",
    "top-1/2",
    "-translate-y-1/2",
    "right-4",
    "w-40",
    "sm:right-1/2",
    "sm:translate-x-1/2",
    "sm:scale-[1.2]",
    "mix-blend-luminosity",
)

const storyClassName = classes(
    "absolute",
    "top-1/2",
    "-translate-y-1/2",
    "right-[-20px]",
    "w-1/2",
    "max-w-[200px]",
    "rotate-[20deg]",
    "sm:right-0",
    "sm:scale-[4]",
    "mix-blend-darken",
    "opacity-85", 
)

const contactsClassName = classes(
    "absolute",
    "top-1/2",
    "-translate-y-1/2",
    "right-4",
    "w-3/5",
    "max-w-[200px]",
    "rotate-[-20deg]",
    "sm:scale-[3]",
)

const linksData =  [
    {
        title: "My Projects",
        to: "/projects",
        iconSrc: process.env.PUBLIC_URL + "/projects.lottie",
        lottiClassName: projectsClassName
    },
    {
        title: "My Articles",
        external: "https://filippo-dembech.github.io/articles/",
        iconSrc: process.env.PUBLIC_URL + "/articles.lottie",
        lottiClassName: articlesClassName,
    },
    {
        title: "My Story",
        to: "/story",
        iconSrc: process.env.PUBLIC_URL + "/story.lottie",
        lottiClassName: storyClassName,
    },
    {
        title: "My Contacts",
        to: "/contacts",
        iconSrc: process.env.PUBLIC_URL + "/contacts.lottie",
        lottiClassName: contactsClassName,
    },
];

export default linksData;