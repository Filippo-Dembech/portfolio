import { useEffect, useRef, useState } from "react";
import { keyIcons } from "../Typewriter/keyIcons";
import { useTypewriter } from "../context/TypewriterContext";
import { useIterate } from "./useIterate";

const PHASES = {
    WAIT_BEFORE_TYPE: "WAIT_BEFORE_TYPE",
    TYPING: "TYPING",
    WAIT_BEFORE_DELETE: "WAIT_BEFORE_DELETE",
    DELETING: "DELETING",
};

export function useTypingEffect(
    strings = [],
    {
        delayBeforeType = 1000,
        typingSpeed = 70,
        delayBeforeDelete = 1000,
        deletingSpeed = 25,
    } = {}
) {
    const [phase, setPhase] = useState(PHASES.WAIT_BEFORE_TYPE);
    const [currentStringIndex, setCurrentStringIndex] = useState(0);

    const currentString = strings[currentStringIndex] || "";

    const [currentChar, nextChar, resetStringIteration] = useIterate(currentString);

    const { text, press, pressNoButton } = useTypewriter();

    const timeoutRef = useRef(null);

    useEffect(() => {
        if (!strings.length) return;

        if (phase === PHASES.WAIT_BEFORE_TYPE) {
            timeoutRef.current = setTimeout(() => {
                setPhase(PHASES.TYPING);
            }, delayBeforeType);
        }

        if (phase === PHASES.TYPING) {
            timeoutRef.current = setTimeout(() => {
                if (!currentChar) {
                    pressNoButton();
                    setPhase(PHASES.WAIT_BEFORE_DELETE);
                } else {
                    press(currentChar);
                    nextChar();
                }
            }, typingSpeed);
        }

        if (phase === PHASES.WAIT_BEFORE_DELETE) {
            timeoutRef.current = setTimeout(() => {
                setPhase(PHASES.DELETING);
            }, delayBeforeDelete);
        }

        if (phase === PHASES.DELETING) {
            timeoutRef.current = setTimeout(() => {
                if (text === "") {
                    pressNoButton();
                    resetStringIteration();
                    setCurrentStringIndex((index) => {
                        if (index >= strings.length) return 0;
                        return index + 1;
                    });
                    setPhase(PHASES.WAIT_BEFORE_TYPE);
                } else {
                    press(keyIcons.back);
                }
            }, deletingSpeed);
        }

        return () => clearTimeout(timeoutRef.current);
    });
}
