import Navlink from "../../components/Navlink";
import { classes } from "../../utils/classes";
import ApproachCard from "./ApproachCard";

export default function CodingApproaches() {
    const containerClassName = classes(
        "flex",
        "flex-col",
        "sm:flex-row",
        "sm:flex-wrap",
        "items-center",
        "py-8",
        "justify-center",
        "gap-8"
    );

    return (
        <div className={containerClassName}>
            <ApproachCard
                frontTitle="TDD"
                backTitle="Test-Driven Development"
                link="https://en.wikipedia.org/wiki/Test-driven_development#:~:text=Test%20Driven%20Development%20(TDD)%20is,leading%20to%20more%20robust%20software."
                description="Kent Beck changed the way I code from the very first day I saw him build an entire application starting with code that didn't even exist. Absolutely loved it! ❤️"
            />
            <ApproachCard
                frontTitle="Design Patterns"
                link="https://en.wikipedia.org/wiki/Software_design_pattern"
                description="Creational, Structural, and Behavioral patterns, they've all saved my butt more than once. I love spotting patterns in my own code, it's one of the reasons I love coding."
            />
            <ApproachCard
                frontTitle="Git / Github"
                renderBackTitle={() => (
                    <>
                        <Navlink external="https://git-scm.com">
                            <h2 className="inline text-2xl transition-colors duration-300 hover:text-orange-700">
                                Git
                            </h2>
                        </Navlink>
                        {" / "}
                        <Navlink external="https://github.com">
                            <h2 className="inline text-2xl transition-colors duration-300 hover:text-orange-700">
                                Github
                            </h2>
                        </Navlink>
                    </>
                )}
                description="Before I knew about version control, my life was so miserable. Then I discovered Git, and my life is much better now (and yes, I am a GitHub lover, no Gitlab for me)."
            />
            <ApproachCard
                frontTitle="Refactoring"
                link="https://en.wikipedia.org/wiki/Code_refactoring"
                description="Write the test, implement the code, make the test pass… and then refactor. That last part? That's my favorite. Refactoring is where all the good stuff happens. If I could, I would refactor codebases all the time"
            />
            <ApproachCard
                frontTitle="SOLID"
                link="https://en.wikipedia.org/wiki/SOLID"
                description="These principles became so important, I even apply them in daily life. The Single Responsibility Principle was a total game changer. Perfectly applying all of them? Almost impossible, there is always a compromise to make."
            />
        </div>
    );
}
