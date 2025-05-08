import { KeywordCxt } from "ajv";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

function Key({ rowSpan, colSpan, className, isPressed, ...props }) {
    const variants = {
        idle: { y: 0, borderBottomWidth: "4px" },
        pressed: { y: "1px", borderBottomWidth: "2px", background: "#ffb86a" },
    };

    function getRowSpan(span) {
        if (span === 2) return "row-span-2";
        if (span === 3) return "row-span-3";
        if (span === 4) return "row-span-4";
        return "";
    }

    function getColSpan(span) {
        if (span === 2) return "col-span-2";
        if (span === 3) return "col-span-3";
        if (span === 4) return "col-span-4";
        if (span === 6) return "col-span-6";
        if (span === 8) return "col-span-8";
        return "";
    }
    return (
        <motion.span
            variants={variants}
            initial="idle"
            animate={isPressed ? "pressed" : "idle"}
            whileTap="pressed"
            transition={{ type: "spring", duration: 0.1 }}
            className={`transition-colors bg-orange-50 font-custom-fira-code flex items-center justify-center text-orange-500 border-b-4 sm:border-b-6 lg:border-b-8 text-fluid font-bold rounded-lg border-b-orange-200 ${getRowSpan(
                rowSpan
            )} ${getColSpan(colSpan)} ${className}`}
        >
            {props.children}
        </motion.span>
    );
}

function KeysRow({ keys, pressedKey }) {
    console.log(pressedKey);

    return (
        <>
            {keys.split("").map((key) => (
                <Key
                    key={key}
                    isPressed={pressedKey?.toLowerCase() === key?.toLowerCase()}
                >
                    {key}
                </Key>
            ))}
        </>
    );
}

export default function Typewriter({ keySequence, delay = 100 }) {
    const [pressedKey, setPressedKey] = useState(null);

    const currentKeyIndex = useRef(0);
    
    function getKeyCode(key) {
        if (key === " ") return "space"
        return key
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentKeyIndex.current >= keySequence.length) return;
            const key = getKeyCode(keySequence[currentKeyIndex.current]);
            setPressedKey(key);
            currentKeyIndex.current++;
        }, delay);
        return () => clearInterval(intervalId);
    }, [delay, keySequence]);

    return (
        <div className="bg-blue-200 h-0 transform-3d perspective-[1000px] text-center">
            <div className="z-2 rotate-x-390 inline-grid grid-cols-16 gap-1.5 scale-[0.8]">
                <KeysRow
                    key="|1234567890'ì"
                    keys="|1234567890'ì"
                    pressedKey={pressedKey}
                />
                <Key
                    key="Back"
                    isPressed={pressedKey === "Back"}
                    colSpan={3}
                >
                    Back
                </Key>
                <Key
                    key="Tab"
                    isPressed={pressedKey === "Tab"}
                    colSpan={2}
                >
                    Tab
                </Key>
                <KeysRow
                    key="QWERTYUIOPè+"
                    keys="QWERTYUIOPè+"
                    pressedKey={pressedKey}
                />
                <Key
                    key="Enter"
                    isPressed={pressedKey === "Enter"}
                    rowSpan={2}
                    colSpan={2}
                >
                    Enter
                </Key>
                <Key
                    key="Block"
                    isPressed={pressedKey === "Block"}
                    colSpan={2}
                >
                    Block
                </Key>
                <KeysRow
                    key="ASDFGHJKLòàù"
                    keys="ASDFGHJKLòàù"
                    pressedKey={pressedKey}
                />
                <Key
                    key="Shift1"
                    isPressed={pressedKey === "Shift1"}
                    colSpan={3}
                >
                    Shift
                </Key>
                <KeysRow
                    key="<ZXCVBNM,.-"
                    keys="<ZXCVBNM,.-"
                    pressedKey={pressedKey}
                />
                <Key
                    key="Shift2"
                    isPressed={pressedKey === "Shift2"}
                    colSpan={2}
                >
                    Shift
                </Key>
                <Key key="Ctrl1" isPressed={pressedKey === "Ctrl1"}>Ctrl</Key>
                <Key key="fn" isPressed={pressedKey === "fn"}>fn</Key>
                <Key key="Start" isPressed={pressedKey === "Start"}>Start</Key>
                <Key key="Alt1" isPressed={pressedKey === "Alt1"}>Alt</Key>
                <Key
                    key="Space"
                    isPressed={pressedKey === "space"}
                    colSpan={8}
                ></Key>
                <Key key="Alt2" isPressed={pressedKey === "Alt2"}>Alt</Key>
                <Key key="Ctrl2" isPressed={pressedKey === "Ctrl2"}>Ctrl</Key>
                <div className="grid grid-cols-3 col-span-2">
                    <div></div>
                    <Key className="text-[4px]">U</Key>
                    <div></div>
                    <Key className="text-[4px]">L</Key>
                    <Key className="text-[4px]">D</Key>
                    <Key className="text-[4px]">R</Key>
                </div>
            </div>
        </div>
    );
}
