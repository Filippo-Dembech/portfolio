import Keyboard from "./Keyboard";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { useTypewriter } from "../context/TypewriterContext";
import Monitor from "./Monitor";

export default function Typewriter({
    sentences,
    delayBeforeType,
    typingSpeed,
    delayBeforeDelete,
    deletingSpeed,
}) {

    useTypingEffect(sentences, {
        delayBeforeType,
        typingSpeed,
        delayBeforeDelete,
        deletingSpeed,
    });

    return (
        <div className="flex flex-col justify-center">
            <div className="transform-3d perspective-distant">
                <Monitor />
            </div>
            <div className="transform-3d perspective-distant text-center">
                <Keyboard />
            </div>
        </div>
    );
}
