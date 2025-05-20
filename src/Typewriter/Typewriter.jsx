import Keyboard from "./Keyboard";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { useTypewriter } from "../context/TypewriterContext";
import Monitor from "./Monitor";

export default function Typewriter({ sentences, delay = 100 }) {
    
    useTypingEffect(["super", "mario", "galaxy"]);

    const { pressedKeyButton, setMonitorDepth } = useTypewriter();

    return (
        <div className="flex flex-col justify-center">
            <div className="transform-3d perspective-distant">
                <Monitor />
            </div>
            <div className="transform-3d perspective-distant text-center">
                <Keyboard
                    pressedKey={pressedKeyButton}
        
                    monitorDepthSetter={setMonitorDepth}
                />
            </div>
        </div>
    );
}
