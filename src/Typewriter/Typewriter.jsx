import Keyboard from "./Keyboard";
import { useTypingEffect } from "../hooks/useTypingEffect";
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
        <div className="flex flex-col justify-center w-[70%] py-[8%]">
            <div className="transform-3d perspective-distant flex-1 flex items-end sm:items-center pb-8">
                <Monitor />
            </div>
            <div className="transform-3d perspective-distant text-center flex-1">
                <Keyboard />
            </div>
        </div>
    );
}
