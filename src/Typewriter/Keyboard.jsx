import { useRef } from "react";
import { classes } from "../utils/classes";
import KeyButton from "./KeyButton";
import KeysRow from "./KeysRow";
import { keyIcons } from "./keyIcons";
import { keyboardLayout } from "./keyboardLayout";
import { useRotationOffset } from "../hooks/useRotationOffset";

export default function Keyboard() {
    const keyboardRef = useRef(null);
    const [translateZOffset] = useRotationOffset({
        rotationDegrees: 30,
        ref: keyboardRef,
    });

    const rotationDegrees = 30;

    const keyboardClasses = classes(
        "inline-grid",
        "grid-cols-16",
        "gap-1",
        "sm:gap-1.5",
        "w-[70vw]",
    );

    const directionsClasses = classes(
        "grid",
        "grid-cols-3",
        "col-span-2",
        "gap-1.5"
    );

    return (
        <div
            // TranslateZ is used to make the keyButtons clickable.
            // otherwise part of them would be covered behind the parent div.
            style={{
                transform: `translateZ(${translateZOffset}px) rotateX(${rotationDegrees}deg)`,
            }}
            ref={keyboardRef}
            className={keyboardClasses}
        >
            <KeysRow keys={keyboardLayout.firstRow} />
            <KeysRow keys={keyboardLayout.secondRow} />
            <KeysRow keys={keyboardLayout.thirdRow} />
            <KeysRow keys={keyboardLayout.fourthRow} />
            <KeysRow keys={keyboardLayout.fifthRow} />
            <div className={directionsClasses}>
                <KeyButton button={{ symbol: "", rowSpan: 1, colSpan: 1 }} />
                <KeyButton
                    button={{
                        symbol: keyIcons.arrows.up,
                        rowSpan: 1,
                        colSpan: 1,
                    }}
                />
                <KeyButton button={{ symbol: "", rowSpan: 1, colSpan: 1 }} />
                <KeyButton
                    button={{
                        symbol: keyIcons.arrows.left,
                        rowSpan: 1,
                        colSpan: 1,
                    }}
                />
                <KeyButton
                    button={{
                        symbol: keyIcons.arrows.down,
                        rowSpan: 1,
                        colSpan: 1,
                    }}
                />
                <KeyButton
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
