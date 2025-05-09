import { useEffect, useRef, useState } from "react";
import { getKeyCode } from "./getKeyCode";
import { TypeAnimation } from "react-type-animation";
import Keyboard from "./Keyboard";
import { keyIcons } from "./keyIcons";

export default function Typewriter({ keySequence, delay = 100 }) {
    const [pressedKey, setPressedKey] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    const currentKeyIndex = useRef(0);
    const currentSentenceIndex = useRef(0);
    
    //const keySequence = sentences[currentSentenceIndex]

    useEffect(() => {
        if (!hasStarted) return;
        const key = getKeyCode(keySequence[currentKeyIndex.current]);
        if (isDeleting) {
            setPressedKey(keyIcons.back);
            return;
        }
        setPressedKey(key);
        currentKeyIndex.current++;
        const intervalId = setInterval(() => {
            if (isDeleting) {
                setPressedKey(keyIcons.back);
                return;
            }
            if (currentKeyIndex.current >= keySequence.length) {
                setPressedKey(null);
                return;
            }
            const key = getKeyCode(keySequence[currentKeyIndex.current]);
            setPressedKey(key);
            currentKeyIndex.current++;
        }, delay);
        return () => clearInterval(intervalId);
    }, [delay, isDeleting, hasStarted, keySequence]);

    return (
        <div className="flex flex-col justify-center">
            <div className="w-[70vw] mx-auto">
                <TypeAnimation
                    sequence={[
                        () => {
                            setIsDeleting(false);
                        },
                        1000,
                        () => {
                            setHasStarted(true);
                            currentKeyIndex.current = 0;
                        },
                        "Hi there,\nI'm Phil.\nWelcome to my world!",
                        2000,
                        () => {
                            setIsDeleting(true);
                        },
                        "",
                    ]}
                    className="font-bold whitespace-pre-line font-custom-bebas text-orange-600"
                    wrapper="span"
                    speed={1}
                    preRenderFirstString={isDeleting}
                    deletionSpeed={70}
                    style={{
                        fontSize: "clamp(1.2rem, 10vw, 4rem)",
                        display: "inline-block",
                    }}
                    repeat={Infinity}
                />
            </div>
            <div className="transform-3d perspective-[1000px] text-center px-5 sm:px-10">
                <Keyboard pressedKey={pressedKey} />
            </div>
        </div>
    );
}
