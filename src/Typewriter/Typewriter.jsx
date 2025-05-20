import { useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import { useIterate } from "../hooks/useIterate";
import { useTypewriter } from "../context/TypewriterContext";
import Monitor from "./Monitor";

export default function Typewriter({ sentences, delay = 100 }) {
    const [currentKey, nextKey, noMoreKeys, resetKeysIteration] = useIterate(
        sentences.join("|")
    );
    const [isDeleting, setIsDeleting] = useState(false);

    const { addChar, deleteChar, resetText, setMonitorDepth } = useTypewriter();

    const typingSpeed = 60;

    useEffect(() => {
        if (noMoreKeys) {
            resetKeysIteration();
            resetText();
            return;
        }
        if (currentKey === "") {
            setIsDeleting(false);
        }
        if (currentKey === "|") {
            setIsDeleting(true);
        }
        const intervalId = setInterval(() => {
            if (isDeleting) {
                deleteChar();
                return;
            }
            addChar(currentKey);
            nextKey();
        }, typingSpeed);
        return () => clearInterval(intervalId);
    }, [
        isDeleting,
        currentKey,
        nextKey,
        noMoreKeys,
        resetKeysIteration,

    ]);

    return (
        <div className="flex flex-col justify-center">
            <div className="transform-3d perspective-distant">
                <Monitor />
            </div>
            <div className="transform-3d perspective-distant text-center">
                <Keyboard
                    pressedKey={currentKey}
                    isDeleting={isDeleting}
                    monitorDepthSetter={setMonitorDepth}
                />
            </div>
        </div>
    );
}
