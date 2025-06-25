import Card from "../../components/Card";
import Navlink from "../../components/Navlink";
import { classes } from "../../utils/classes";

function ApproachCard({
    frontTitle,
    backTitle,
    renderBackTitle,
    link,
    description,
}) {
    const titleClassName = classes(
        "text-2xl",
        "transition-colors",
        "duration-300",
        "hover:text-orange-700"
    );

    const frontClassName = classes(
        "flex",
        "items-center",
        "p-8",
        "text-center",
        "justify-center",
        "h-full",
        "rounded-xl",
        "bg-linear-65",
        "from-orange-500",
        "to-orange-600",
        "text-white",
        "font-bold",
        "font-custom-fira-code",
        "text-3xl"
    );

    const backClassName = classes(
        "h-full",
        "rounded-xl",
        "bg-white",
        "font-custom-lato"
    );

    return (
        <Card>
            <Card.Front className={frontClassName}>{frontTitle}</Card.Front>
            <Card.Back className={backClassName}>
                <div className="p-5">
                    {renderBackTitle?.() || (
                        <Navlink external={link}>
                            <h2 className={titleClassName}>
                                {backTitle || frontTitle}
                            </h2>
                        </Navlink>
                    )}
                    <p className="pt-3">{description}</p>
                </div>
            </Card.Back>
        </Card>
    );
}

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
