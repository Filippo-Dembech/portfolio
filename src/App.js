import Typewriter from "./Typewriter/Typewriter";

function App() {
    return (
        <div className="bg-orange-100">
            <Typewriter
                keySequence="Hi there,_I'm Phil._Welcome to my world!"
                delay={100}
            />
        </div>
    );
}

export default App;
