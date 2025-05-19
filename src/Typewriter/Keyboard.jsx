import { useEffect, useRef, useState } from "react";
import { classes } from "../utils/classes";
import Key from "./Key";
import KeysRow from "./KeysRow";
import { keyIcons } from "./keyIcons";
import { keyboardLayout } from "./keyboardLayout";

export default function Keyboard({
    pressedKey,
    isDeleting,
    monitorDepthSetter,
}) {
    const keyboardRef = useRef(null);
    const [height, setHeight] = useState(0);
    
    const degrees = 30;

    const keyboardClasses = classes(
        "inline-grid",
        "grid-cols-16",
        "gap-1.5",
        "w-[70vw]"
    );

    const directionsClasses = classes(
        "grid",
        "grid-cols-3",
        "col-span-2",
        "gap-1.5"
    );

    useEffect(() => {
        const radians = degrees * (Math.PI / 180);
        const monitorDepth = (height / 2) * Math.sin(radians);
        monitorDepthSetter(monitorDepth);
        const el = keyboardRef.current;
        if (!el) return;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setHeight(entry.contentRect.height);
            }
        });

        observer.observe(el);

        return () => observer.disconnect();
    }, [height, monitorDepthSetter]);

    return (
        <div
            style={{ transform: `rotateX(${degrees}deg)` }}
            ref={keyboardRef}
            className={keyboardClasses}
        >
            <KeysRow
                keys={keyboardLayout.firstRow}
                pressedKey={isDeleting ? keyIcons.back : pressedKey}
            />
            <KeysRow
                keys={keyboardLayout.secondRow}
                pressedKey={pressedKey}
            />
            <KeysRow
                keys={keyboardLayout.thirdRow}
                pressedKey={pressedKey}
            />
            <KeysRow
                keys={keyboardLayout.fourthRow}
                pressedKey={pressedKey}
            />
            <KeysRow
                keys={keyboardLayout.fifthRow}
                pressedKey={pressedKey}
            />
            <div className={directionsClasses}>
                <Key button={{ symbol: "", rowSpan: 1, colSpan: 1 }} />
                <Key
                    button={{
                        symbol: keyIcons.arrows.up,
                        rowSpan: 1,
                        colSpan: 1,
                    }}
                />
                <Key button={{ symbol: "", rowSpan: 1, colSpan: 1 }} />
                <Key
                    button={{
                        symbol: keyIcons.arrows.left,
                        rowSpan: 1,
                        colSpan: 1,
                    }}
                />
                <Key
                    button={{
                        symbol: keyIcons.arrows.down,
                        rowSpan: 1,
                        colSpan: 1,
                    }}
                />
                <Key
                    button={{
                        symbol: keyIcons.arrows.right,
                        rowSpan: 1,
                        colSpan: 1,
                    }}
                />
            </div>
        </div>
    );
}
