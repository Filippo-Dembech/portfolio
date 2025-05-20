import { useEffect, useState } from "react";

export function useRotationOffset({ rotationDegrees, ref }) {

    const [height, setHeight] = useState(0);
    const [translateZOffset, setTranslateZOffset] = useState(0);

    useEffect(() => {
        const radians = rotationDegrees * (Math.PI / 180);
        const offset = (height / 2) * Math.sin(radians);
        setTranslateZOffset(offset);
        const el = ref.current;
        if (!el) return;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setHeight(entry.contentRect.height);
            }
        });

        observer.observe(el);

        return () => observer.disconnect();
    }, [height, rotationDegrees, ref]);
    
    return [ translateZOffset ]
}