import { useEffect, useRef, useState } from "react";
import { keyIcons } from "../Typewriter/keyIcons";
import { useTypewriter } from "../context/TypewriterContext";

const PHASES = {
  WAIT_BEFORE_TYPE: "WAIT_BEFORE_TYPE",
  TYPING: "TYPING",
  WAIT_BEFORE_DELETE: "WAIT_BEFORE_DELETE",
  DELETING: "DELETING"
};


export function useTypingEffect(strings = [], {
    delayBeforeType = 1000,
    typingSpeed = 70,
    delayBeforeDelete = 1000,
    deletingSpeed = 25,
  } = {}) {
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [phase, setPhase] = useState(PHASES.WAIT_BEFORE_TYPE);
    const [currentStringIndex, setCurrentStringIndex] = useState(0)

    const currentString = strings[currentStringIndex] || "";
    const currentChar = currentString[currentCharIndex] || undefined;

    const { text, setPressedKeyButton, addChar, deleteChar } = useTypewriter();
    
    const timeoutRef = useRef(null)
    
    useEffect(() => {
        if (!strings.length) return;
        
        if (phase === PHASES.WAIT_BEFORE_TYPE) {
            timeoutRef.current = setTimeout(() => {
                setPhase(PHASES.TYPING);
            }, delayBeforeType)
        }
        
        if (phase === PHASES.TYPING) {
            timeoutRef.current = setTimeout(() => {
                if (!currentChar) {
                    setPressedKeyButton(null);
                    setPhase(PHASES.WAIT_BEFORE_DELETE);
                } else {
                    setPressedKeyButton(currentChar);
                    addChar(currentChar);
                    setCurrentCharIndex(index => index +1);
                }
            }, typingSpeed)
        }
        
        if (phase === PHASES.WAIT_BEFORE_DELETE) {
            timeoutRef.current = setTimeout(() => {
                setPhase(PHASES.DELETING)
            }, delayBeforeDelete)
        }
        
        if (phase === PHASES.DELETING) {
            timeoutRef.current = setTimeout(() => {
                if (text === "") {
                    setPressedKeyButton(null);
                    setPhase(PHASES.WAIT_BEFORE_TYPE)
                    setCurrentCharIndex(0)
                    setCurrentStringIndex(index => {
                        if (index >= strings.length) return 0
                        return index + 1
                    })
                } else {
                    setPressedKeyButton(keyIcons.back)
                    deleteChar();
                }
            }, deletingSpeed)
        }

        return () => clearTimeout(timeoutRef.current);
    })

}