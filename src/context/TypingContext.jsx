import { createContext, useContext, useState } from "react";

const TypingContext = createContext();

function TypingProvider(props) {
    
    const [text, setText] = useState("");
    const [pressedKeyButton, setPressedKeyButton] = useState(null);
    
    function addChar(char) {
        setText(text => text + char)
    }
    
    function deleteChar() {
        setText(text => text.slice(0, -1))
    }

    return (
        <TypingContext.Provider value={{ text, addChar, deleteChar, pressedKeyButton, setPressedKeyButton }}>
            {props.children}
        </TypingContext.Provider>
    )
}

function useTyping() {
    const context = useContext(TypingContext);
    if (!context) throw new Error("'useTyping' hook used outside 'TypingContext'.")
    return context;
}

export { TypingProvider, useTyping }