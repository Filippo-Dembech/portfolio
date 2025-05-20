import { useState } from "react";

export function useIterate(iterable) {

    const [index, setIndex] = useState(0);
    
    function resetIteration() {
        setIndex(0);
    }

    function next() {
        setIndex(index => index + 1)
    }
    
    return [ iterable[index] || undefined, next, resetIteration ]
    
}