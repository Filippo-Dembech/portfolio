import { useTypewriter } from "../context/TypewriterContext";
import { classes } from "../utils/classes";

export default function Monitor() {
    
    const { text, monitorDepth } = useTypewriter();

    const cursorStyle = classes(
        "after:content-['']",
        "after:border-r-4",
        "after:animate-blink",
        "after:border-r-orange-500"
    );

    const textStyle = classes(
        "text-orange-500",
        "text-4xl",
        "font-custom-tuffy",
        "uppercase",
        "font-bold"
    );

    return (
        <div
            style={{ transform: `translateZ(-${monitorDepth}px)` }}
            className={cursorStyle + textStyle}
        >
            {text}
        </div>
    );
}
