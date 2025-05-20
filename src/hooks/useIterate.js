import { useEffect, useMemo, useState } from "react";
import { keyIcons } from "../Typewriter/keyIcons";

export function useIterate(iterable) {
    const [caret, setCaret] = useState(0);
    const currIterable = useMemo(() => iterable, [iterable]);

    function resetIteration() {
        setCaret(0);
    }

    function next() {
        setCaret((curr) => curr + 1);
    }

    useEffect(() => {
        // if the iterable is not 'undefined' reset the caret
        if (iterable) resetIteration();
    }, [iterable]);
    
    // if iterable is 'undefined' return 'undefined'
    // otherwise an error would be thrown because undefined[index]
    // is syntactically wrong
    const currItem = currIterable && currIterable[caret];
    
    const noMoreItems = currIterable === undefined || caret >= currIterable.length;

    return [
        currItem === "|" ? keyIcons.back : currItem,
        next,
        noMoreItems,
        resetIteration,
    ];
}
