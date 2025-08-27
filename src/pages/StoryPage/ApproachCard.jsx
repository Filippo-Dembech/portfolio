import { classes } from "../../utils/classes";
import Navlink from "../../components/Navlink";
import TestCard from "../../components/Card";

export default function ApproachCard({
    frontTitle,
    backTitle,
    renderBackTitle,
    link,
    description,
}) {
    
    const cardClassName = classes(
        "w-[300px]",
        "h-[250px]",
        "cursor-pointer"
    )

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
        "bg-gradient-to-r",
        "from-orange-500",
        "to-orange-600",
        "to-65%",
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
        <TestCard className={cardClassName}>
            <TestCard.Front className={frontClassName}>{frontTitle}</TestCard.Front>
            <TestCard.Back className={backClassName}>
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
            </TestCard.Back>
        </TestCard>
    );
}
