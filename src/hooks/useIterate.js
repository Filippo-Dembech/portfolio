import { useEffect, useMemo, useState } from "react";

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
    const currItem = currIterable && currIterable[caret];
    
    const noMoreItems = currIterable === undefined || caret >= currIterable.length;

    return [
        currItem,
        next,
        noMoreItems,
        resetIteration,
    ];
}
