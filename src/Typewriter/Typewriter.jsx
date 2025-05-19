import { useEffect, useRef, useState } from "react";
import { getKeyCode } from "./getKeyCode";
import { TypeAnimation } from "react-type-animation";
import Keyboard from "./Keyboard";
import { keyIcons } from "./keyIcons";
import { useIterate } from "../hooks/useIterate";
import { classes } from "../utils/classes";

export default function Typewriter({ sentences, delay = 100 }) {
    const [currentKey, nextKey, noMoreKeys, resetKeysIteration] = useIterate(
        sentences.join("|") + "|"
    );
    const [isDeleting, setIsDeleting] = useState(false);
    const [monitorDepth, setMonitoDepth] = useState(0);

    const cursorStyle = classes(
        "after:content-['']",
        "after:border-r-4",
        "after:animate-blink",
        "after:border-r-orange-500"
    );
    
    const textStyle = classes(
        "text-orange-500",
    )

    const [text, setText] = useState("");

    const typingSpeed = 60;

    useEffect(() => {
        if (noMoreKeys) {
            resetKeysIteration();
            setText("");
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
                setText((curr) => curr.slice(0, -1));
                return;
            }
            setText((curr) => curr + currentKey);
            nextKey();
        }, typingSpeed);
        return () => clearInterval(intervalId);
    }, [isDeleting, currentKey, nextKey, noMoreKeys, resetKeysIteration]);

    return (
        <div className="flex flex-col justify-center">
            <div className="transform-3d perspective-distant">
                <div
                    style={{ transform: `translateZ(-${monitorDepth}px)` }}
                    className={cursorStyle + textStyle}
                >
                    {text}
                </div>
            </div>
            <div className="transform-3d perspective-distant text-center">
                <Keyboard
                    pressedKey={currentKey}
                    isDeleting={isDeleting}
                    monitorDepthSetter={setMonitoDepth}
                />
            </div>
        </div>
    );
}
