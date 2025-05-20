import { createContext, useContext, useState } from "react";

const TypewriterContext = createContext();

function TypewriterProvider(props) {
    const [text, setText] = useState("");
    const [pressedKeyButton, setPressedKeyButton] = useState(null);
    const [monitorDepth, setMonitorDepth] = useState(0);

    function addChar(char) {
        setText((text) => text + char);
    }

    function deleteChar() {
        setText((text) => text.slice(0, -1));
    }
    
    function resetText() {
        setText("");
    }

    return (
        <TypewriterContext.Provider
            value={{
                text,
                addChar,
                deleteChar,
                resetText,
                pressedKeyButton,
                setPressedKeyButton,
                monitorDepth,
                setMonitorDepth,
            }}
        >
            {props.children}
        </TypewriterContext.Provider>
    );
}

function useTypewriter() {
    const context = useContext(TypewriterContext);
    if (!context)
        throw new Error("'useTyping' hook used outside 'TypingContext'.");
    return context;
}

export { TypewriterProvider, useTypewriter };
