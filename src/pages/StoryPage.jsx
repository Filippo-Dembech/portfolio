import Header from "../components/Header";
import HomepageButton from "../components/HomepageButton";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function StoryPage() {
    return (
        <div className="bg-orange-50 min-h-[100dvh]">
            <Header>My Story</Header>
            <div className="px-4 max-w-[800px] m-auto flex flex-col gap-5">
                <section>
                    <h2 className="text-orange-500 font-bold text-[2rem] font-custom-fira-code">
                        HOW I KNOW CODING
                    </h2>
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
                    <h2 className="text-orange-500 font-bold text-[2rem] font-custom-fira-code">
                        LANGUAGES I KNOW
                    </h2>

                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="September 2019"
                            iconClassName="bg-orange-100"
                        >
                            <h3 className="text-[2rem]">
                                VBA
                            </h3>
                            <p>
                                The first language I have ever learnt.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2020 - present"
                            iconClassName="bg-orange-200"
                        >
                            <h3 className="text-[2rem]">
                                HTML, CSS, JS
                            </h3>
                            <p>
                                From VBA interfaces to Web Interfaces...
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2021/2022"
                            iconClassName="bg-orange-300"
                        >
                            <h3 className="text-[2rem]">
                                PYTHON
                            </h3>
                            <h4>Flask, Numpy, Pandas, Matplotlib</h4>
                            <p>
                                From now on, programming becomes a passion beyond interfaces...
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2022"
                            iconClassName="bg-orange-400"
                        >
                            <h3 className="text-[2rem]">
                                C
                            </h3>
                            <p>
                                I wanted to learn where all comes from...
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2021/2023"
                            iconClassName="bg-orange-500"
                        >
                            <h3 className="text-[2rem]">
                                JAVA
                            </h3>
                            <p>
                                Welcome to OOP, mate! Learn how to use types, data structures, how to design flexible code
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2023 - present"
                            iconClassName="bg-orange-600"
                        >
                            <h3 className="text-[2rem]">
                                Typescript
                            </h3>
                            <p>
                                OOP for the Web??? Where do I have to sign?
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2023/2024"
                            iconClassName="bg-orange-700"
                        >
                            <h3 className="text-[2rem]">
                                Dart
                            </h3>
                            <h4>Flutter</h4>
                            <p>
                                I wanted to create mobile applications and went for a new language... again...
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2024"
                            iconClassName="bg-orange-800"
                        >
                            <h3 className="text-[2rem]">
                                Kotlin
                            </h3>
                            <p>
                                Just Android! No more iOS, sorry ladies
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2024"
                            iconClassName="bg-orange-900"
                        >
                            <h3 className="text-[2rem]">
                                Powershell
                            </h3>
                            <p>
                                I wanted to automize my Windows OS operations
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            dateClassName="mx-2"
                            date="2024 - present"
                            iconClassName="bg-red-800"
                        >
                            <h3 className="text-[2rem]">
                                JSX
                            </h3>
                            <h4>React</h4>
                            <p>
                                Take away from me everything, but not my components!
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </section>
                <section>
                    <h2 className="text-orange-500 font-bold text-[2rem] font-custom-fira-code">
                        WHAT ELSE?
                    </h2>
                </section>
                <section>
                    <h2 className="text-orange-500 font-bold text-[2rem] font-custom-fira-code">
                        LANGUAGES I KNOW
                    </h2>
                </section>
            </div>
            <HomepageButton />
        </div>
    );
}
