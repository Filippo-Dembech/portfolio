import LottieIcon from "../../components/LottieIcon";
import Navlink from "../../components/Navlink";
import { classes } from "../../utils/classes";

export default function HomepageLink({ to, external, iconSrc, children, lottiClassName }) {
    
    const linkClassName = classes(
        "group",
        "sm:flex-1",
        "bg-orange-500",
        "text-orange-50",
        "font-custom-bebas",
        "rounded-2xl",
        "p-3",
        "text-3xl",
        "relative",
        "sm:text-center",
        "sm:w-1/9",
        "transition-all",
        "duration-300",
        "hover:scale-110",
        "hover:-translate-y-3",
        "hover:shadow-lg"
    )
    
    const textClassName = classes(
        "inline-block",
        "transform",
        "duration-200",
        "text-blue-300",
        "group-hover:rotate-[-10deg]",
        "origin-bottom-left",
        "group-hover:text-orange-200",
        "group-hover:translate-x-5",
        "sm:group-hover:-translate-x-10",
        "group-hover:scale-150"
    )

    return (
        <Navlink
            to={to}
            external={external}
            linkClassName={linkClassName}
            textClassName={textClassName}
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