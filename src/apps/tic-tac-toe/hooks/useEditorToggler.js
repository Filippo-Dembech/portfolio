import { useCallback, useEffect, useState } from "react";
import { useAnimation } from "./useAnimation";
import animations from '../components/GamePage/settings/animations/SettingsAnimations.module.css'

export function useEditorToggler() {

    const [editorAnimation, toggleEditorAnimation] = useAnimation(
        animations.slideIn,
        animations.slideOut
    );
    
    const [ editorIsVisible, setEditorVisibility ] = useState(false);
    
    const toggleEditor = useCallback(() => {
        toggleEditorAnimation();
        setEditorVisibility(curr => !curr);
    }, [toggleEditorAnimation])
    
    
    useEffect(() => {
        function handleDocumentClick(e) {
            e.target.classList.forEach(cls => {
                if (cls.includes("CurrentPlayerVisualizer")) {
                    if (editorIsVisible) {
                        toggleEditor();
                    }
                }
            })
        }

        document.addEventListener("click", handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        }
    }, [editorIsVisible, toggleEditor])
    
    return { editorAnimation, toggleEditor }
}