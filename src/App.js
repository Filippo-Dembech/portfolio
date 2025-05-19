// import { useState } from "react";
import Typewriter from "./Typewriter/Typewriter";

// function Monitor({ className, style }) {
//     return (
//         <div
//             style={style}
//             className={`bg-green-800 h-[200px] w-[200px] flex justify-center items-center ${className}`}
//         >
//             MONITOR
//         </div>
//     );
// }

// function Keyboard({ className, style }) {
//     return (
//         <div
//             style={style}
//             className={`bg-amber-900 h-[200px] w-[200px] flex justify-center items-center ${className}`}
//         >
//             KEYBOARD
//         </div>
//     );
// }

// const monitorHeight = 200;
// const keyboardHeight = 200;


function App() {
    
    // const [keyboardRotation, setKeyboardRotation] = useState(80)

    // const keyboardRotationRadians = keyboardRotation * Math.PI / 180;

    // const monitorDepth = - (keyboardHeight / 2) * Math.sin(keyboardRotationRadians);

    return (
        <div className="bg-orange-100 min-h-[100dvh] flex justify-center">
            <Typewriter
                sentences={[ "super mario", "galaxy" ]}
                delay={100}
            />
        </div>
        // <div>
        //     <div className="transform-3d perspective-distant border-8 inline-block">
        //         <Monitor
        //             style={{ transform: `translateZ(${monitorDepth}px)` }}
        //         />
        //         <Keyboard
        //             style={{ transform: `rotateX(${keyboardRotation}deg)` }}
        //         />
        //     </div>
        //     <input type="range" min={0} max={90} onChange={e => setKeyboardRotation(e.target.value)}/>
        // </div>
    );
}

export default App;
