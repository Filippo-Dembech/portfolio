import { useTypewriter } from "../context/TypewriterContext";
import { classes } from "../utils/classes";

export default function Monitor() {
    
    const { text } = useTypewriter();

    const cursorStyle = classes(
        "after:content-['']",
        "after:border-r-4",
        "after:animate-blink",
        "after:border-r-orange-500"
    );

    const textStyle = classes(
        "text-orange-500",
        "text-3xl",
        "sm:text-4xl",
        "lg:text-5xl",
        "uppercase",
        "font-bold",
        "font-[Courier]",
    );
    

    return (
        <div
            className={cursorStyle + textStyle}
        >
            {text}
        </div>
    );
}
