import { createContext, useContext, useState } from "react";
import { keyIcons } from "../Typewriter/keyIcons";

const TypewriterContext = createContext();

const keyboard = {
    // Letters
    ...Object.fromEntries(
        Array.from("abcdefghijklmnopqrstuvwxyz").map((char) => [
            char,
            {
                symbol: char,
                action: (text) => text + char,
            },
        ])
    ),

    // Uppercase letters (with shift simulation)
    ...Object.fromEntries(
        Array.from("abcdefghijklmnopqrstuvwxyz").map((char) => [
            char.toUpperCase(),
            {
                symbol: char.toUpperCase(),
                action: (text) => text + char.toUpperCase(),
            },
        ])
    ),

    // Numbers
    ...Object.fromEntries(
        Array.from("0123456789").map((char) => [
            char,
            {
                symbol: char,
                action: (text) => text + char,
            },
        ])
    ),

    // Symbols
    "!": { symbol: "!", action: (text) => text + "!" },
    "@": { symbol: "@", action: (text) => text + "@" },
    "#": { symbol: "#", action: (text) => text + "#" },
    $: { symbol: "$", action: (text) => text + "$" },
    "%": { symbol: "%", action: (text) => text + "%" },
    "^": { symbol: "^", action: (text) => text + "^" },
    "&": { symbol: "&", action: (text) => text + "&" },
    "*": { symbol: "*", action: (text) => text + "*" },
    "(": { symbol: "(", action: (text) => text + "(" },
    ")": { symbol: ")", action: (text) => text + ")" },
    "-": { symbol: "-", action: (text) => text + "-" },
    _: { symbol: "_", action: (text) => text + "_" },
    "=": { symbol: "=", action: (text) => text + "=" },
    "+": { symbol: "+", action: (text) => text + "+" },
    "[": { symbol: "[", action: (text) => text + "[" },
    "]": { symbol: "]", action: (text) => text + "]" },
    "{": { symbol: "{", action: (text) => text + "{" },
    "}": { symbol: "}", action: (text) => text + "}" },
    ";": { symbol: ";", action: (text) => text + ";" },
    ":": { symbol: ":", action: (text) => text + ":" },
    "'": { symbol: "'", action: (text) => text + "'" },
    '"': { symbol: '"', action: (text) => text + '"' },
    ",": { symbol: ",", action: (text) => text + "," },
    ".": { symbol: ".", action: (text) => text + "." },
    "<": { symbol: "<", action: (text) => text + "<" },
    ">": { symbol: ">", action: (text) => text + ">" },
    "/": { symbol: "/", action: (text) => text + "/" },
    "?": { symbol: "?", action: (text) => text + "?" },
    "\\": { symbol: "\\", action: (text) => text + "\\" },
    "|": { symbol: "|", action: (text) => text + "|" },
    "`": { symbol: "`", action: (text) => text + "`" },
    "~": { symbol: "~", action: (text) => text + "~" },

    // Special keys
    " ": {
        symbol: " ",
        action: (text) => text + " ",
    },
    [keyIcons.enter]: {
        symbol: "\n",
        action: (text) => text + "\n",
    },
    [keyIcons.back]: {
        symbol: "⌫",
        action: (text) => text.slice(0, -1),
    },
    [keyIcons.tab]: {
        symbol: "\t",
        action: (text) => text + "\t",
    },
};

function TypewriterProvider(props) {
    const [text, setText] = useState("");
    const [pressedKeyButton, setPressedKeyButton] = useState(null);
    
    function pressNoButton() {
        setPressedKeyButton(null);
    }

    function resetText() {
        setText("");
    }

    function press(key) {
        setPressedKeyButton(keyboard[key].symbol)
        setText(keyboard[key].action)
    }

    return (
        <TypewriterContext.Provider
            value={{
                text,
                press,
                pressNoButton,
                resetText,
                pressedKeyButton,
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
