import { useState } from "react";

export function useHover() {
    
    const [isHovered, setIsHovered] = useState(false);

    function toggleHover() {
        setIsHovered((curr) => !curr);
    }
    
    return { isHovered, toggleHover }
}