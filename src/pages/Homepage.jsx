import Navlink from "../components/Navlink";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Homepage() {
    return (
        <div className="p-4 bg-orange-50 min-h-[100dvh] flex flex-col">
            <h1 className="text-orange-500 font-custom-bebas mb-7 text-[4rem] sm:text-center sm:text-[5rem] md:text-[6rem]">
                My Portfolio
            </h1>
            <div className="flex flex-col sm:pb-5 sm:flex-row justify-center items-stretch flex-1 gap-8 sm:gap-14">
                <Navlink
                    to="/projects"
                    className="text-3xl relative"
                    sideElement={
                        <DotLottieReact
                            className="absolute top-1/2 -translate-y-1/2 right-[-50px] w-full max-w-[350px] sm:right-0 sm:scale-400 mix-blend-darken"
                            src="./projects.lottie"
                            loop
                            autoplay
                        />
                    }
                >
                    My Projects
                </Navlink>
                <Navlink
                    to="https://filippo-dembech.github.io/articles/"
                    className="text-3xl relative"
                    sideElement={
                        <DotLottieReact
                            className="absolute top-1/2 -translate-y-1/2 right-4 w-40 sm:right-1/2 sm:translate-x-1/2 sm:scale-120 mix-blend-luminosity"
                            src="./articles.lottie"
                            loop
                            autoplay
                        />
                    }
                >
                    My Articles
                </Navlink>
                <Navlink
                    to="/story"
                    className="text-3xl relative"
                    sideElement={
                        <DotLottieReact
                            className="absolute top-1/2 -translate-y-1/2 right-[-20px] w-1/2 max-w-[200px] rotate-20 sm:right-0 sm:scale-400 sm:rotate-20 mix-blend-darken opacity-85"
                            src="./story.lottie"
                            loop
                            autoplay
                        />
                    }
                >
                    My Story
                </Navlink>
                <Navlink
                    to="/contacts"
                    className="text-3xl relative"
                    sideElement={
                        <DotLottieReact
                            className="absolute top-1/2 -translate-y-1/2 right-4 w-3/5 max-w-[200px] rotate-[-20deg] sm:scale-300"
                            src="./contacts.lottie"
                            loop
                            autoplay
                        />
                    }
                >
                    My Contacts
                </Navlink>
            </div>
        </div>
    );
}
