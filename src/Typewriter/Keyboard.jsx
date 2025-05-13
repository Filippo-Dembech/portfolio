import { classes } from "../utils/classes";
import Key from "./Key";
import KeysRow from "./KeysRow";
import { keyIcons } from "./keyIcons";
import { keyboardLayout } from "./keyboardLayout";

export default function Keyboard({ pressedKey }) {

    const keyboardClasses = classes(
        "rotate-x-50",
        "md:rotate-x-40",
        "translate-z-20",
        "inline-grid",
        "grid-cols-16",
        "gap-1.5",
        "w-[70vw]"
    );

    const directionsClasses = classes(
        "grid",
        "grid-cols-3",
        "col-span-2",
        "gap-1.5",
    );

    return (
        <div className={keyboardClasses}>
            <KeysRow
                keys={keyboardLayout.firstRow}
                pressedKey={pressedKey}
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
                    className="text-[4px]"
                />
                <Key button={{ symbol: "", rowSpan: 1, colSpan: 1 }} />
                <Key
                    button={{
                        symbol: keyIcons.arrows.left,
                        rowSpan: 1,
                        colSpan: 1,
                    }}
                    className="text-[4px]"
                />
                <Key
                    button={{
                        symbol: keyIcons.arrows.down,
                        rowSpan: 1,
                        colSpan: 1,
                    }}
                    className="text-[4px]"
                />
                <Key
                    button={{
                        symbol: keyIcons.arrows.right,
                        rowSpan: 1,
                        colSpan: 1,
                    }}
                    className="text-[4px]"
                />
            </div>
        </div>
    );
}
