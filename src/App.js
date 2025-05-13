import Typewriter from "./Typewriter/Typewriter";

function App() {
    return (
        <div className="bg-orange-100 min-h-[100dvh] flex justify-center">
            <Typewriter
                sentences={[ "hi there", "mate", "how are you" ]}
                delay={100}
            />
        </div>
    );
}

export default App;
