import { useState } from "react";

export function useAnimation(animationIn, animationOut) {
    
    const [ inAction, setInAction ] = useState(false);
    
    function executeAnimation() {
        setInAction(curr => !curr)
    }
    
    return [ inAction ? animationIn : animationOut, executeAnimation ]

}
