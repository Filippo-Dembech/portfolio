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
        "w-[70vw]",
        "sm:gap-1.5"
    );

    const directionsClasses = classes(
        "grid",
        "grid-cols-3",
        "grid-rows-2",
        "gap-0.5",
        "col-span-2",
        "sm:gap-1"
    );

    return (
        <div
            // TranslateZ is used to make the keyButtons clickable.
            // otherwise part of them would be covered behind the parent div.
            style={{
                transform: `translateZ(${translateZOffset}px) rotateX(${rotationDegrees}deg)`,
            }}
            ref={keyboardRef}
            className="inline-grid grid-cols-16 gap-1 w-[70vw] sm:gap-1.5"
        >
            <KeysRow keys={keyboardLayout.firstRow} />
            <KeysRow keys={keyboardLayout.secondRow} />
            <KeysRow keys={keyboardLayout.thirdRow} />
            <KeysRow keys={keyboardLayout.fourthRow} />
            <KeysRow keys={keyboardLayout.fifthRow} />
            <div
                className="grid grid-cols-3 grid-rows-2 gap-0.5 col-span-2 sm:gap-1"
                style={{
                    alignSelf: "center",
                    gridRow: "9 / 11",
                    gridColumn: "15 / 17",
                }}
            >
                <KeyButton
                    style={{ gridRow: "1 / 3", gridColumn: "1 / 2" }}
                    button={{
                        symbol: keyIcons.arrows.left,
                        rowSpan: 1,
                        colSpan: 1,
                    }}
                />
                <KeyButton
                    style={{ gridRow: "1 / 2", gridColumn: "2 / 3" }}
                    className="bg-blue-300"
                    button={{
                        symbol: keyIcons.arrows.up,
                        rowSpan: 1,
                        colSpan: 1,
                    }}
                />
                <KeyButton
                    style={{ gridRow: "2 / 3", gridColumn: "2 / 3" }}
                    button={{
                        symbol: keyIcons.arrows.down,
                        rowSpan: 1,
                        colSpan: 1,
                    }}
                />
                <KeyButton
                    style={{ gridRow: "1 / 3", gridColumn: "3 / 4" }}
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
