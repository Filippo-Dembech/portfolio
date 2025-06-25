import { useNavigate } from "react-router-dom";
import CardFlip from "../components/CardFlip";
import Header from "../components/Header";
import HomepageButton from "../components/HomepageButton";
import Title from '../components/Title';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function FrontCard({ children }) {
    return (
        <div className="flex items-center p-8 text-center justify-center h-full rounded-xl bg-linear-65 from-orange-500 to-orange-600 text-white font-bold font-custom-fira-code text-3xl">
            {children}
        </div>
    );
}

function BackCard({ children }) {
    return (
        <div className="h-full rounded-xl bg-white font-custom-lato">
            {children}
        </div>
    );
}

export default function StoryPage() {
    const navigate = useNavigate();
    return (
        <div className="bg-orange-50 min-h-[100dvh] pb-8">
            <Header>My Story</Header>
            <div className="px-4 max-w-[800px] m-auto flex flex-col gap-5">
                <section>
                    <Title h={2} size="2rem">FIRST TIME SEEN CODE</Title>
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
                    <Title h={2} size="2rem">LANGUAGES I KNOW</Title>

                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="September 2019"
                            iconClassName="bg-orange-100"
                        >
                            <h3 className="text-[2rem]">VBA</h3>
                            <p>The first language I have ever learnt.</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2020 - present"
                            iconClassName="bg-orange-200"
                        >
                            <h3 className="text-[2rem]">HTML, CSS, JS</h3>
                            <p>From VBA interfaces to Web Interfaces...</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2021/2022"
                            iconClassName="bg-orange-300"
                        >
                            <h3 className="text-[2rem]">PYTHON</h3>
                            <h4>Flask, Numpy, Pandas, Matplotlib</h4>
                            <p>
                                From now on, programming becomes a passion
                                beyond interfaces...
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2022"
                            iconClassName="bg-orange-400"
                        >
                            <h3 className="text-[2rem]">C</h3>
                            <p>I wanted to learn where all comes from...</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2021/2023"
                            iconClassName="bg-orange-500"
                        >
                            <h3 className="text-[2rem]">JAVA</h3>
                            <p>
                                Welcome to OOP, mate! Learn how to use types,
                                data structures, how to design flexible code
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2023 - present"
                            iconClassName="bg-orange-600"
                        >
                            <h3 className="text-[2rem]">Typescript</h3>
                            <p>OOP for the Web??? Where do I have to sign?</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2023/2024"
                            iconClassName="bg-orange-700"
                        >
                            <h3 className="text-[2rem]">Dart</h3>
                            <h4>Flutter</h4>
                            <p>
                                I wanted to create mobile applications and went
                                for a new language... again...
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2024"
                            iconClassName="bg-orange-800"
                        >
                            <h3 className="text-[2rem]">Kotlin</h3>
                            <p>Just Android! No more iOS, sorry ladies</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2024"
                            iconClassName="bg-orange-900"
                        >
                            <h3 className="text-[2rem]">Powershell</h3>
                            <p>I wanted to automize my Windows OS operations</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2024 - present"
                            iconClassName="bg-red-800"
                        >
                            <h3 className="text-[2rem]">JSX</h3>
                            <h4>React</h4>
                            <p>
                                Take away from me everything, but not my
                                components!
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </section>
                <section>
                    <Title h={2} size="2rem"> CODING APPROACHES</Title>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-center py-8 justify-center gap-8">
                        <CardFlip
                            front={<FrontCard>TDD</FrontCard>}
                            back={
                                <BackCard>
                                    <div className="p-5">
                                        <a
                                            href="https://en.wikipedia.org/wiki/Test-driven_development#:~:text=Test%20Driven%20Development%20(TDD)%20is,leading%20to%20more%20robust%20software."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <h2 className="text-2xl transition-colors duration-300 hover:text-orange-700">
                                                Test-Driven Development
                                            </h2>
                                        </a>
                                        <p className="pt-3">
                                            Kent Beck changed the way I code
                                            from the very first day I saw him
                                            build an entire application starting
                                            with code that didn’t even exist.
                                            Absolutely loved it! ❤️
                                        </p>
                                    </div>
                                </BackCard>
                            }
                        />
                        <CardFlip
                            front={<FrontCard>Design Patterns</FrontCard>}
                            back={
                                <BackCard>
                                    <div className="p-5">
                                        <a
                                            href="https://en.wikipedia.org/wiki/Software_design_pattern"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <h2 className="text-2xl transition-colors duration-300 hover:text-orange-700">
                                                Design Patterns
                                            </h2>
                                        </a>
                                        <p className="pt-3">
                                            Creational, Structural, and
                                            Behavioral patterns, they've all
                                            saved my butt more than once. I love
                                            spotting patterns in my own code,
                                            it's one of the reasons I love
                                            coding.
                                        </p>
                                    </div>
                                </BackCard>
                            }
                        />
                        <CardFlip
                            front={<FrontCard>Git / Github</FrontCard>}
                            back={
                                <BackCard>
                                    <div className="p-5">
                                        <a
                                            href="https://git-scm.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <h2 className="inline text-2xl transition-colors duration-300 hover:text-orange-700">
                                                Git
                                            </h2>
                                        </a>
                                        {" / "}
                                        <a
                                            href="https://github.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <h2 className="inline text-2xl transition-colors duration-300 hover:text-orange-700">
                                                Github
                                            </h2>
                                        </a>
                                        <p className="pt-3">
                                            Before I knew about version control,
                                            my life was so miserable. Then I
                                            discovered Git, and my life is much
                                            better now (and yes, I am a GitHub
                                            lover, no Gitlab for me).
                                        </p>
                                    </div>
                                </BackCard>
                            }
                        />
                        <CardFlip
                            front={<FrontCard>Refactoring</FrontCard>}
                            back={
                                <BackCard>
                                    <div className="p-5">
                                        <a
                                            href="https://en.wikipedia.org/wiki/Code_refactoring"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <h2 className="inline text-2xl transition-colors duration-300 hover:text-orange-700">
                                                Refactoring
                                            </h2>
                                        </a>
                                        <p className="pt-3">
                                            Write the test, implement the code,
                                            make the test pass… and then
                                            refactor. That last part? That's my
                                            favorite. Refactoring is where all
                                            the good stuff happens. If I could,
                                            I would refactor codebases all the
                                            time
                                        </p>
                                    </div>
                                </BackCard>
                            }
                        />
                        <CardFlip
                            front={<FrontCard>SOLID</FrontCard>}
                            back={
                                <BackCard>
                                    <div className="p-5">
                                        <a
                                            href="https://en.wikipedia.org/wiki/SOLID"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <h2 className="inline text-2xl transition-colors duration-300 hover:text-orange-700">
                                                SOLID
                                            </h2>
                                        </a>
                                        <p className="pt-3">
                                            These principles became so important, I even apply them in daily life. The Single Responsibility Principle was a total game changer. Perfectly applying all of them? Almost impossible, there is always a compromise to make.
                                        </p>
                                    </div>
                                </BackCard>
                            }
                        />
                    </div>
                </section>
                <section>
                    <Title h={2} size="2rem">WHAT ELSE?</Title>
                    <div>
                        Ok, enough chit-chat! Do you want to know how I work? Check out my projects <button className="cursor-pointer text-orange-500" onClick={() => navigate("/projects")}>HERE</button>.
                    </div>
                </section>
            </div>
            <HomepageButton />
        </div>
    );
}
