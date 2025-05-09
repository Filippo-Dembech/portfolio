import Key from "./Key";
import KeysRow from "./KeysRow";
import {keyIcons } from './keyIcons';

export default function Keyboard({ pressedKey }) {
    return (
        <div className="rotate-x-50 md:rotate-x-40 translate-z-20 inline-grid grid-cols-16 gap-1.5 w-[70vw]">
            <KeysRow
                key="|1234567890'!"
                keys="|1234567890'!"
                pressedKey={pressedKey}
            />
            <Key
                key={keyIcons.back}
                isPressed={pressedKey === keyIcons.back}
                colSpan={3}
            >
                {keyIcons.back}
            </Key>
            <Key
                key={keyIcons.tab}
                isPressed={pressedKey === keyIcons.tab}
                colSpan={2}
            >
                {keyIcons.tab}
            </Key>
            <KeysRow
                key="QWERTYUIOPè+"
                keys="QWERTYUIOPè+"
                pressedKey={pressedKey}
            />
            <Key
                key={keyIcons.enter}
                isPressed={pressedKey === keyIcons.enter}
                rowSpan={2}
                colSpan={2}
            >
                {keyIcons.enter}
            </Key>
            <Key
                key={keyIcons.capsLock}
                isPressed={pressedKey === keyIcons.capsLock}
                colSpan={2}
            >
                {keyIcons.capsLock}
            </Key>
            <KeysRow
                key="ASDFGHJKLòàù"
                keys="ASDFGHJKLòàù"
                pressedKey={pressedKey}
            />
            <Key
                key={keyIcons.shift}
                isPressed={pressedKey === keyIcons.shift}
                colSpan={3}
            >
                {keyIcons.shift}
            </Key>
            <KeysRow
                key="<ZXCVBNM,.-"
                keys="<ZXCVBNM,.-"
                pressedKey={pressedKey}
            />
            <Key
                key={keyIcons.shift}
                isPressed={pressedKey === keyIcons.shift}
                colSpan={2}
            >
                {keyIcons.shift}
            </Key>
            <Key
                key={keyIcons.ctrl}
                isPressed={pressedKey === keyIcons.ctrl}
            >
                {keyIcons.ctrl}
            </Key>
            <Key
                key="fn"
                isPressed={pressedKey === "fn"}
            >
                fn
            </Key>
            <Key
                key={keyIcons.win}
                isPressed={pressedKey === keyIcons.win}
            >
                {keyIcons.win}
            </Key>
            <Key
                key={keyIcons.alt}
                isPressed={pressedKey === keyIcons.alt}
            >
                {keyIcons.alt}
            </Key>
            <Key
                key="Space"
                isPressed={pressedKey === "space"}
                colSpan={8}
            ></Key>
            <Key
                key={keyIcons.alt}
                isPressed={pressedKey === keyIcons.alt}
            >
                {keyIcons.alt}
            </Key>
            <Key
                key={keyIcons.ctrl}
                isPressed={pressedKey === keyIcons.ctrl}
            >
                {keyIcons.ctrl}
            </Key>
            <div className="grid grid-cols-3 col-span-2 gap-1.5">
                <Key></Key>
                <Key className="text-[4px]">{keyIcons.arrows.up}</Key>
                <Key></Key>
                <Key className="text-[4px]">{keyIcons.arrows.left}</Key>
                <Key className="text-[4px]">{keyIcons.arrows.down}</Key>
                <Key className="text-[4px]">{keyIcons.arrows.right}</Key>
            </div>
        </div>
    );
}
