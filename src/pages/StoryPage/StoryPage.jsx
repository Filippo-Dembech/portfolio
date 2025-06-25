import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import HomepageButton from "../../components/HomepageButton";
import Title from "../../components/Title";
import LanguagesStoryline from "./LanguagesStoryline";
import CodingApproaches from "./CodingApproaches";

export default function StoryPage() {
    const navigate = useNavigate();
    return (
        <div className="bg-orange-50 min-h-[100dvh] pb-8">
            <Header>My Story</Header>
            <div className="px-4 max-w-[800px] m-auto flex flex-col gap-5">
                <section>
                    <Title
                        h={2}
                        size="2rem"
                    >
                        FIRST TIME SEEN CODE
                    </Title>
                    <div className="font-custom-tuffy">
                        <p>
                            Back in the day, I was working for my dad. My job
                            was to manage his company's documentation and keep
                            track of all the important deadlines. I spent a lot
                            of time in Excel.
                        </p>
                        <p>
                            One day, while I was sorting and filtering a table,
                            something unusual caught my eye: the{" "}
                            <strong>Developer Tab</strong>.
                        </p>
                        <p>
                            For those who don't know, it's a hidden section in
                            Excel where you can write simple programs for your
                            spreadsheets (basically complex macros—using VBA). I
                            realized I could even build custom interfaces and
                            make the spreadsheets interactive for users. That
                            moment opened up an entirely new world for me:{" "}
                            <strong>the world of coding</strong>.
                        </p>
                    </div>
                </section>
                <section>
                    <Title
                        h={2}
                        size="2rem"
                    >
                        LANGUAGES I KNOW
                    </Title>
                    <LanguagesStoryline />
                </section>
                <section>
                    <Title
                        h={2}
                        size="2rem"
                    >
                        CODING APPROACHES
                    </Title>
                    <CodingApproaches />
               </section>
                <section>
                    <Title
                        h={2}
                        size="2rem"
                    >
                        WHAT ELSE?
                    </Title>
                    <div>
                        Ok, enough chit-chat! Do you want to know how I work?
                        Check out my projects{" "}
                        <button
                            className="cursor-pointer text-orange-500"
                            onClick={() => navigate("/projects")}
                        >
                            HERE
                        </button>
                        .
                    </div>
                </section>
            </div>
            <HomepageButton />
        </div>
    );
}
