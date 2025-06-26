import { useTypewriter } from "../context/TypewriterContext";

export default function Monitor() {
    
    const { text } = useTypewriter();

    return (
        <div
            className="after:content-[''] after:border-r-4 after:animate-blink after:border-r-orange-500 text-orange-500 text-[2rem] uppercase font-bold font-[Courier] sm:text-[3rem] lg:text-[4rem]
"
        >
            {text}
        </div>
    );
}
