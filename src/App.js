import { TypewriterProvider } from "./context/TypewriterContext";
import Typewriter from "./Typewriter/Typewriter";

function App() {

    return (
        <div className="bg-orange-100 min-h-[100dvh] flex justify-center">
            <TypewriterProvider>
                <Typewriter
                    sentences={[ "super mario", "galaxy" ]}
                    typingSpeed={70}
                />
            </TypewriterProvider>
        </div>
    );
}

export default App;
