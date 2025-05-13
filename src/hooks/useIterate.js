import { useState } from "react";

export function useIterate(iterable) {
    const [caret, setCaret] = useState(0);

    function next() {
        setCaret(curr => curr + 1);
    }

    return [iterable[caret], next, caret >= iterable.length]
}