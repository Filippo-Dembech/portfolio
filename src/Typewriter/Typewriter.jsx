import { useEffect, useRef, useState } from "react";
import Key from "./Key";
import KeysRow from "./KeysRow";
import { getKeyCode } from "./getKeyCode";
import { TypeAnimation } from "react-type-animation";

export default function Typewriter({ keySequence, delay = 100 }) {
    const [ pressedKey, setPressedKey ] = useState(null);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const [ isTyping, setIsTyping ] = useState(false);

    const currentKeyIndex = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentKeyIndex.current >= keySequence.length) {
                setPressedKey(null);
                return;
            }
            const key = getKeyCode(keySequence[currentKeyIndex.current]);
            setPressedKey(key);
            currentKeyIndex.current++;
        }, delay);
        return () => clearInterval(intervalId);
    }, [delay, isDeleting, isTyping, keySequence]);

    return (
        <div>
            <TypeAnimation
                sequence={[
                    () => {
                        currentKeyIndex.current = 0;
                    },
                    "Hi there,\nI'm Phil.\nWelcome to my world!",
                    2000,
                    "",
                ]}
                className="font-bold whitespace-pre-line font-custom-bebas text-orange-600 text-5xl"
                wrapper="span"
                speed={1}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
            />
            <div className="bg-blue-200 h-0 transform-3d perspective-[1000px] text-center">
                <div className="z-2 rotate-x-390 inline-grid grid-cols-16 gap-1.5 scale-[0.8]">
                    <KeysRow
                        key="|1234567890'!"
                        keys="|1234567890'!"
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
                    <Key
                        key="Ctrl1"
                        isPressed={pressedKey === "Ctrl1"}
                    >
                        Ctrl
                    </Key>
                    <Key
                        key="fn"
                        isPressed={pressedKey === "fn"}
                    >
                        fn
                    </Key>
                    <Key
                        key="Start"
                        isPressed={pressedKey === "Start"}
                    >
                        Start
                    </Key>
                    <Key
                        key="Alt1"
                        isPressed={pressedKey === "Alt1"}
                    >
                        Alt
                    </Key>
                    <Key
                        key="Space"
                        isPressed={pressedKey === "space"}
                        colSpan={8}
                    ></Key>
                    <Key
                        key="Alt2"
                        isPressed={pressedKey === "Alt2"}
                    >
                        Alt
                    </Key>
                    <Key
                        key="Ctrl2"
                        isPressed={pressedKey === "Ctrl2"}
                    >
                        Ctrl
                    </Key>
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
        </div>
    );
}
