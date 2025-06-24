import Header from "../components/Header";
import LottieIcon from "../components/LottieIcon";
import Navlink from "../components/Navlink";

function HomepageLink({ to, external, iconSrc, children, lottiClassName }) {
    return (
        <Navlink
            to={to}
            external={external}
            linkClassName="group sm:flex-1 bg-orange-500 text-orange-50 font-custom-bebas rounded-2xl p-3 text-3xl relative sm:text-center sm:w-1/9 transition-all duration-300 hover:scale-110 hover:-translate-y-3 hover:shadow-lg"
            textClassName="inline-block transform duration-200 group-hover:rotate-[-10deg] origin-bottom-left group-hover:text-orange-200 group-hover:translate-x-5 sm:group-hover:-translate-x-10 group-hover:scale-150"
            sideElement={
                <LottieIcon
                    className={lottiClassName}
                    src={iconSrc}
                    loop
                    autoplay
                />
            }
        >
            {children}
        </Navlink>
    );
}

export default function Homepage() {
    return (
        <div className="p-3 pb-8 bg-orange-50 min-h-[100dvh] flex flex-col overflow-hidden">
            <Header>My Portfolio</Header>
            <div className="sm:max-w-[650px] sm:m-auto flex flex-col sm:flex-row justify-center items-stretch flex-1 gap-8">
                <HomepageLink
                    to="/projects"
                    iconSrc="/projects.lottie"
                    lottiClassName="absolute top-1/2 -translate-y-1/2 right-[-50px] w-full max-w-[350px] sm:right-0 sm:scale-400 mix-blend-darken"
                >
                    My Projects
                </HomepageLink>
                <HomepageLink
                    external="https://filippo-dembech.github.io/articles/"
                    iconSrc="/articles.lottie"
                    lottiClassName="absolute top-1/2 -translate-y-1/2 right-4 w-40 sm:right-1/2 sm:translate-x-1/2 sm:scale-120 mix-blend-luminosity"
                >
                    My Articles
                </HomepageLink>
                <HomepageLink
                    to="/story"
                    iconSrc="/story.lottie"
                    lottiClassName="absolute top-1/2 -translate-y-1/2 right-[-20px] w-1/2 max-w-[200px] rotate-20 sm:right-0 sm:scale-400 sm:rotate-20 mix-blend-darken opacity-85"
                >
                    My Story
                </HomepageLink>
                <HomepageLink
                    to="/contacts"
                    iconSrc="/contacts.lottie"
                    lottiClassName="absolute top-1/2 -translate-y-1/2 right-4 w-3/5 max-w-[200px] rotate-[-20deg] sm:scale-300"
                >
                    My Contacts
                </HomepageLink>
            </div>
        </div>
    );
}
