import { TypewriterProvider } from "./context/TypewriterContext";
import Typewriter from "./Typewriter/Typewriter";

function App() {
    return (
        <div className="bg-orange-100 min-h-[100dvh] flex justify-center">
            <TypewriterProvider>
                <Typewriter
                    sentences={[
                        "Hi there! I'm Phil",
                        "Welcome to my world!"
                    ]}
                    typingSpeed={70}
                />
            </TypewriterProvider>
        </div>
    );
}

export default App;
