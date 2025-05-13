import { useEffect, useRef, useState } from "react";
import { getKeyCode } from "./getKeyCode";
import { TypeAnimation } from "react-type-animation";
import Keyboard from "./Keyboard";
import { keyIcons } from "./keyIcons";

export default function Typewriter({ sentences, delay = 100 }) {
    const [pressedKey, setPressedKey] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [hasStartedTyping, setHasStartedTyping] = useState(false);

    const currentKeyIndex = useRef(0);
    const currentSentenceIndex = useRef(0);

    const keySequence = sentences[currentSentenceIndex.current];
    const typingSentences = sentences.reduce(
        (result, currSentence) => [
            ...result,
            currSentence,
            2000,
            () => setIsDeleting(true),
            "",
            () => {
                setIsDeleting(false);
                currentSentenceIndex.current++;
                currentKeyIndex.current = 0;
            },
            ""
        ],
        []
    );

    useEffect(() => {
        if (!hasStartedTyping) return;
        const intervalId = setInterval(() => {
            if (isDeleting) {
                setPressedKey(keyIcons.back);
                return;
            }
            if (currentKeyIndex.current >= keySequence.length) {
                console.log(currentKeyIndex.current)
                setPressedKey(null);
                return;
            }
            const key = getKeyCode(keySequence[currentKeyIndex.current]);
            setPressedKey(key);
            currentKeyIndex.current++;
        }, delay);
        return () => clearInterval(intervalId);
    }, [delay, isDeleting, hasStartedTyping, keySequence]);

    return (
        <div className="flex flex-col justify-center">
            <div className="w-[70vw] mx-auto">
                <TypeAnimation
                    sequence={[
                        () => {
                            setHasStartedTyping(false);
                            setIsDeleting(false);
                            currentSentenceIndex.current = 0;
                        },
                        1000,
                        () => {
                            setHasStartedTyping(true);
                            currentKeyIndex.current = 0;
                        },
                        ...typingSentences,
                        "",
                    ]}
                    className="font-bold whitespace-pre-line font-custom-bebas text-orange-600"
                    wrapper="span"
                    speed={1}
                    preRenderFirstString={isDeleting}
                    //deletionSpeed={70}
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
